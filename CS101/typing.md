> 자료형의 선언 방법도 객체지향/절차지향 언어처럼 프로그래밍 언어 패러다임이다.

## Dynamic Typing: 동적 타입

> 동적 타입 언어는 데이터 형태가 명시적으로 정해지지 않는 언어다.  
> Python, Ruby, JavaScript, php, Perl

**Python 예시**  
Python에서 변수는 데이터를 관리하는 역할만 하며 변수를 할당하는 과정을 `binding` 이라고 한다. pointer가 생각나는 과정이다. 기억하기로는 Python은 데이터 형태를 프로그램이 종료되는 가장 마지막에 설정하는 언어였는데, 정확히 그렇다기보다는 이 binding 과정이 프로그램이 실행되는 동안 계속해서 지속되기 때문이다. `==` 프로그램이 종료되면 더 이상 변수의 형태가 변하지 않으므로 확정이라는 의미에 가깝다.

**python에서의 변수 처리방식** [(o'reilly 번역)](https://www.oreilly.com/library/view/python-in-a/0596001886/ch04s03.html)  
1. **Variables and Other References: 변수와 다른 참조자들**  
파이썬 프로그램은 *references* 를 통해 데이터 값에 접근한다. *reference*는 데이터 값 또는 객체를 포함하는 메모리 위치를 지칭하며 변수, 속성, 아이템들의 형태로 나타난다. 파이썬에서, 변수나 다른 reference는 이미 갖추어져있는 자료형(type)이 아니다. (=has no intrinsic type, 비어있다는 의미로 해석)   
데이터의 실제 주소인 reference가 할당 (*binding*) 된 '객체'는 reference가 변수에 할당된 기간동안 reference에 따른 특정 자료형을 갖지만, 'reference'는 다양한 자료형을 가질 수 있다: 객체의 자료형은 reference의 자료형에 종속되지만, reference는 다양한 자료형을 가질 수 있다.
    - *`reference`*: python의 built in 함수인 `id(object ...)`를 이용해 얻을 수 있는 고유값으로, C에서의 주소와 유사한 개념이다. 주소와는 약간 다른 개념이므로 (원문에서는 specific location 으로 표기) 원문 그대로 표기한다.
    - *`binding`*: has no intrinsic type인 변수나 *reference*가 실제 값을 가지고 있는, 다시 말해 specific memory location을 가지고 있는 데이터 값과 연결된다는 의미이므로 문맥상 할당되었다고 표현한다.
2. **Variables 변수들**  
파이썬에는 변수 선언 과정이 없다. *변수는 값과 변수를 묶는 `bind` 과정; 다시 말해, 객체를 설명하는 reference에 이름을 붙이는 과정에서 생겨난다. 이름을 초기화함으로써 변수를 `unbind` 할 수도 있는데, 이렇게 하면 변수는 더이상 reference를 저장 hold 하지 못하게 된다. 할당문들은 Assignment statements 변수와 reference들을 하나로 묶는 가장 흔한 방법이다. 할당을 해제하기 위해서는 del 명령문을 사용하면 된다.
    - *의역: The existence of a variable depends on a statement that binds the variable, or, in other words, that sets a name to hold a reference to some object

## Static Typing: 정적 타입

> 메모리 시작위치와 끝 위치를 자료형에 따라 정해놓고 그 안에 값을 할당한다.  
> C, Java, C++, Haskell, Kotlin


1. 빠르다.  
정적 타입 언어보다 동적 타입 언어가 느릴 수 밖에 없는 것이, 정적 타입 언어는 변수 주소가 곧 데이터가 위치한 곳인데 동적 타입 언어는 변수 주소에서 또 실제 값이 할당된 곳으로 찾아가야 하는 단계가 추가되었다.

2. 정교하다.  
메모리를 어떻게 쓸지 미리 정해놓고 코드를 짜기 때문에 사람이 할 수 있는 실수를 미연에 방지할 수 있으나 (잘못된 타입의 데이터를 넣을 경우 type error 발생) 자료형을 명시적으로 선언하는 과정이 필요하기 때문에 코드가 상대적으로 길어진다.
    |python (dynamic)|C (static)|
    |:-|:-|
    |`a=123`|`int a = 123`|

3. 체계적이고 명확하다.  
2에 이어지는 특징이다. 사람보다는 컴퓨터의 관점에서 프로그램을 설계하기 때문에 규모가 크고 많은 사람이 협업하는 프로그램을 짜기에 적합한 '경향이 있다.'

- python의 경우 동적 타입 언어의 한계를 해소하기 위해 3.10 부터 자료형을 지정할 수 있는 typing 문법을 적용했고, 그 이하에서는 `import typing` 을 통해 자료형을 명시할 수 있다.


