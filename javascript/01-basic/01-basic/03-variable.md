> JS는 정적 타입 언어이므로 변수 타입을 먼저 선언해야한다.

> 변수를 이용해 '코드를 추상화하면' 반복적인 작업을 최소화 할 수 있으며 디버깅 및 유지보수가 용이해져 코드가 안정적이어진다.

## 작명 가이드
> 언어마다 이걸 외워야 한다니 맙소사

### 반드시 지켜야 하는 규칙
1. 식별자는 문자 (A-Za-z), 밑줄 (`_`) 또는 달러기호 (`$`)로 시작해야한다.
    - 숫자는 두번째 글자부터 사용 가능

    |index.js|chrome console|
    |:-:|:-:|
    |![variable](https://user-images.githubusercontent.com/60145951/172342924-d1cf098a-382d-4b0a-a633-5514ee917955.png)|![console](https://user-images.githubusercontent.com/60145951/172342978-6220db64-6538-4101-86f2-5495683bf359.png)|

    상당히 신기하다.
2. 알파벳에서 `대소문자를 구분한다.`
    - 아마도 ASCII 값이 다르기 떄문
3. 예약어는 사용할 수 없다. 
    - 예: `if`, `for`, `let`

### 권장규칙

변수명을 지을 때
1. 무의미한 작명은 피할 것
2. 지나치게 추상적인 단어는 피할 것
3. `camelCase`를 지향한다.
    - 언더바를 끼워넣는 snakecase 를 지향하는 python과는 다르다.
    - js: `let goodVariableName;`
    - py: `pythonic_variable_naming`
4. style guide 참고
    - [Airbnb의 자바스크립트 스타일 가이드](https://github.com/ParkSB/javascript-style-guide)
    - [Google의 자바스크립트 스타일 가이드](https://google.github.io/styleguide/jsguide.html)
    - [w3schools.com 스타일 가이드](https://www.w3schools.com/js/js_conventions.asp)