> 자바스크립트의 모든 것이 다 객체다.

### 객체
지금까지 변수에는 하나의 값을 담아왔다. 하지만 여러 변수를 한번에 저장하고 싶다면 객체 Object를 이용해야한다.

> 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티는 '추가한 순서대로' 정렬한다.

- 생성
    - 중괄호를 통해서만 생성할 수 있다.
    - 구분은 `,` 콤마로 한다.
    - 객체 안의 값은 `:` 콜론으로 구분하며 파이썬의 딕셔너리와 같이 Key와 Value의 쌍으로 구성된다.
    - 위 Key, Value의 쌍을 객체의 속성 Property라고 명명한다.
        - Key == Property Name
        - Value == Property Value
    - Property Name은 기본적으로 문자열이나 JS가 암묵적으로 자료형을 변환하므로 `일반적으로` 따옴표를 생략하고 변수처럼 문자열만 작성한다.
        ```js
        object = {
            food = "라자냐",    // "food" = "라자냐" 와 같으나 따옴표를 생략함.
            delicious = true,
        }
        ```
        - 단, JS 변수 명명규칙에서 벗어나거나 **하이픈 `-` 을 쓸 경우**에는 반드시 따옴표로 감싸야 한다.

### 메서드

> 객체의 멤버함수를 메서드 method 라고 부르기도 한다.

객체의 프로퍼티는 자료형에 제한이 없기 때문에 함수도 포함할 수 있다.

```js
let objectName = {
    propertyStr : 'string',
    propertyFunction : function(name){
        console.log(`this is method of object: '${name}'`);
    },
    propertyNum : 3,
}
```

<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/173409351-997ad17f-4c7c-4710-a42e-45f1710865a7.png">


대괄호 표기법으로 메서드에 접근할 수도 있으나 이 때에는 `objectName['propertyName']` 가 하나의 함수이고, 그에 이어 소괄호를 열고 인자를 전달하는 방식을 취해야 한다. 위의 예를 활용하면 아래와 같은 결과가 나온다.

```js
objectName.propertyFunction('점표기법');

// 위 방식과 아래 방식은 동일하다.

objectName['propertyFunction']('대괄호표기법');
```

<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/173409957-a263ad4d-bcf2-46c4-b045-c26fdd9109bf.png">

> 메서드는 어떤 객체의 고유한 동작으로서 함수에 의미를 부여할 수 있다. 

다시말해, 좀 더 객체에 집중한 코드를 짤 수 있고 이는 더 고도화된 추상화로 이어진다. 하단의 예는 같은 `getArea()` 함수를 삼각형과 사각형에 따라 다르게 선언 하는 예다. 메서드가 아니라면 각 함수의 이름을 다르게 설정하는 등의 번거로움이 있겠지만 객체명을 통해 조금 더 가독성 있고 직관적인 코드 작성이 가능해진다.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/173410219-fe803718-2b77-4787-baf2-44527fa4eaf5.png">
