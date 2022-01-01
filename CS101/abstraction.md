# 추상화 Abstraction
> 복잡한 기능은 숨기고, 주요 기능에만 신경쓰게 한다.

## 1. 변수 Variable: 값을 저장한다.
변수의 실제 값들을 몰라도 변수의 이름 (실질적인 기능, 변수가 만들어진 목적) 을 알면 사용할 수 있다.

```py
# 키와 몸무게로 BMI를 계산할 때
# BMI (체질량지수) = 자신의 몸무게를 키의 제곱으로 나눈다.
# BMI = 몸무게 / 키 ** 2
height = 160
weight = 50

# without Variable
BMI1 = 50 / (160 ** 2)

# with Variable
BMI2 = weight / (height ** 2)
```

## 2. 함수 Function: 명령을 저장한다.

- print의 구현 방식을 몰라도 동작 방식과 이름만 안다면 사용할 수 있다.  
- 아래의 복잡한 내용을 몰라도 print 함수 하나만 알면 우리는 python에서 문자열을 출력할 수 있다. `==` 추상화의 목적
- '그래도' 추상화 전의 python 동작방식이 궁금하다면 1) `help` method를 통해 method의 사용 방법을 확인하거나 2) source code를 확인하는 방법이 있다.
    1. `help` 를 사용하는 방법
        - 같은 내용을 [python document](https://docs.python.org/3/library/functions.html#print) 에서도 확인할 수 있다.
        - `help(function name)` 을 입력하면 콘솔 내부에서 사용방법을 검색할 수 있다.
        ```py
        help(print)

        '''
        print(...)
            print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

            Prints the values to a stream, or to sys.stdout by default.
            Optional keyword arguments:
            file:  a file-like object (stream); defaults to the current sys.stdout.
            sep:   string inserted between values, default a space.
            end:   string appended after the last value, default a newline.
            flush: whether to forcibly flush the stream.
        '''
        ```

    2. source code를 보는 방법
        - 참고: [stackoverflow](https://stackoverflow.com/questions/8608587/finding-the-source-code-for-built-in-python-functions)
        - `print`의 source code가 궁금하다고 가정해보자.

        1. python은 opensource 이므로 source code 역시 github에서 열람할 수 있다.
            - python의 print source code: [github: cpython/Python/bltinmodule.c](https://github.com/python/cpython/blob/3ac4e783e077ffd7b51c6acc1591002974644051/Python/bltinmodule.c#L1924)
            - *builtin_*function-name 으로 원하는 함수를 찾아볼수 있다.
            - full source code
                <details>
                <summary>source code: python builtin module 'print'</summary>

                ```c
                // github: cpython/Python/bltinmodule.c

                static PyObject *
                builtin_print_impl(PyObject *module, PyObject *args, PyObject *sep,
                                PyObject *end, PyObject *file, int flush)

                /*[clinic end generated code: output=3cfc0940f5bc237b input=c143c575d24fe665]*/
                {
                    int i, err;

                    if (file == Py_None) {
                        PyThreadState *tstate = _PyThreadState_GET();
                        file = _PySys_GetAttr(tstate, &_Py_ID(stdout));
                        if (file == NULL) {
                            PyErr_SetString(PyExc_RuntimeError, "lost sys.stdout");
                            return NULL;
                        }

                        /* sys.stdout may be None when FILE* stdout isn't connected */
                        if (file == Py_None) {
                            Py_RETURN_NONE;
                        }
                    }

                    if (sep == Py_None) {
                        sep = NULL;
                    }
                    else if (sep && !PyUnicode_Check(sep)) {
                        PyErr_Format(PyExc_TypeError,
                                    "sep must be None or a string, not %.200s",
                                    Py_TYPE(sep)->tp_name);
                        return NULL;
                    }
                    if (end == Py_None) {
                        end = NULL;
                    }
                    else if (end && !PyUnicode_Check(end)) {
                        PyErr_Format(PyExc_TypeError,
                                    "end must be None or a string, not %.200s",
                                    Py_TYPE(end)->tp_name);
                        return NULL;
                    }

                    for (i = 0; i < PyTuple_GET_SIZE(args); i++) {
                        if (i > 0) {
                            if (sep == NULL) {
                                err = PyFile_WriteString(" ", file);
                            }
                            else {
                                err = PyFile_WriteObject(sep, file, Py_PRINT_RAW);
                            }
                            if (err) {
                                return NULL;
                            }
                        }
                        err = PyFile_WriteObject(PyTuple_GET_ITEM(args, i), file, Py_PRINT_RAW);
                        if (err) {
                            return NULL;
                        }
                    }

                    if (end == NULL) {
                        err = PyFile_WriteString("\n", file);
                    }
                    else {
                        err = PyFile_WriteObject(end, file, Py_PRINT_RAW);
                    }
                    if (err) {
                        return NULL;
                    }

                    if (flush) {
                        PyObject *tmp = PyObject_CallMethodNoArgs(file, &_Py_ID(flush));
                        if (tmp == NULL) {
                            return NULL;
                        }
                        Py_DECREF(tmp);
                    }

                    Py_RETURN_NONE;
                }
                ```
                
                </details>
        2. local에서 확인하는 방법: `inspect`
            ```py
            import inspect
            import random   # inspect는 외부 모듈의 source code만 불러올 수 있다. (builtin X)

            inspect.getsource(random)
            ```


## 3. 객체
- class에 대한 설명은 이전에 기록해둔 velog 글로 대신한다: [velog/ Python : Class란?](https://velog.io/@www_1216/Python-Class)

> 그런데 추상클래스는 또 무엇이냐

- 객체지향 프로그래밍에서 더 알아보자.