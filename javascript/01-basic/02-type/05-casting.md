### 형변환 방법

자료형으로 감싸 객체를 생성하는 방식 같다. 
```js
let toStr = 15;  // string으로 변환을 원할 때
typeof(String(toStr));  // `string`
```

- 문자열로의 형변환: `String`
    - 데이터 좌우에 따옴표를 붙인다고 생각하면 된다.
- 숫자로의 형변환: `Number`
    - 숫자가 아닌 값을 `Number('문자')` 로 변환하려 하면 `NaN` 값이 반환되므로 유의
    - `Number('3')` 의 경우에는 3으로 정상변환된다.
    - boolean 값은 true의 경우 1, false의 경우 0으로 형변환된다.
- boolean으로의 형변환: `Boolean`
    - 기본적으로 true를 반환한다.
    - undefined, null, NaN, 0을 false로 반환한다. -> 이렇게 false 를 반환하는 값: `falsy` 값이라고 부른다.

'' 의 경우 문자열 안에 아무것도 존재하지 않으므로 (요소가 없으므로) 빈 값과 다름없다. 따라서 Number 로 변환해도 0, 즉 boolean으로 표현할 때 false값이 반환된다.
<img width="289" alt="image" src="https://user-images.githubusercontent.com/60145951/172472424-d0846a2b-33bc-4323-a2be-14f4a02dab4b.png">

- [JS 빈 문자열 확인](https://codechacha.com/ko/javascript-check-empty-string/)
- [JS 빈 값 체크](https://velog.io/@noah_ark/Javascript-%EB%B9%88-%EA%B0%92-%EC%B2%B4%ED%81%AC)

문자열로의 변환이 유연한 언어다보니 빈 문자열로 남아버리는 경우가 많은 것 같다. `.length` 등으로 길이를 체크하는 방법이 편해보인다.

### 자동형변환
JS는 일반적으로 연산시 특정 규칙에 따라 자동으로 자료형을 변환한다. (e.g. '4' - true = 3)

1. 산술연산자: 연산값들을 모두 숫자형으로 변환한다. (`+`제외)
    - 단, `더하기 연산자` 는 문자열을 연결하는 기능도 있으며 연산값 중 문자열이 있다면 `문자열`을 우선해서 연산한다. (아닐 시 숫자연산)
    - `NaN` 은 어떤 값과 연산해도 `NaN`이다.
2. 비교연산자: 마찬가지로 대부분 숫자형으로 변환한다.
    - 그러나 언제나 참 혹은 거짓을 반환해야 하기 때문에 연산이 `불가능한 경우에도 false`를 출력한다.
    - `==` : 동등, `===` : 일치 (`!=` : 부등, `!==` : 불일치)
        - 동등 비교는 숫자형태를 기준으로 비교한다.