## 변수의 Scope

> 전역변수, 지역변수에 대한 이야기다.

- Scope: 범위, 영역, 다시말해 `변수에 접근할 수 있는 범위`
- (유의) JS에서 중괄호로 감싸진 부분은 `Block Statement` 또는 `블록문` 이라고 부른다. 이는 함수뿐 아니라 if, for, while, try-catch 문 등 중괄호를 사용하는 모든 곳에 해당된다. 이 모든 범위를 `블록레벨 스코프`라고 말한다.
    - 함수레벨 스코프: 자바스크립트는 **원래** 함수 레벨 스코프를 따르는 언어다. 함수 몸체에 선언한 변수는 함수 안에서만 접근할 수 있는 지역변수다.
        - 함수 몸체 밖은 전역변수, 함수 몸체 안은 지역변수다.
        - 함수가 선언될 때 마다 새로운 스코프가 생긴다: 함수 생성과 동시에 함수에 대한 `실행 컨텍스트`가 생긴다.
        - 함수마다 실행 컨텍스트가 달라지고, 그 안의 변수 환경이 다르므로 함수 내부와 외부에서 서로 접근할 수 없다. or 함수 외부는 부모고 함수 내부는 자식인데 부모는 자식의 스코프에 간섭할 수 없다.

 
<img width="600" alt="variable scope" src="https://user-images.githubusercontent.com/60145951/173357031-426ad58e-af6f-4c83-8c9c-f3955d3abad1.png">

`let`은 지역 변수로 영어의 동사 let, 허락한다는 의미를 가진다. 

ES6부터는 변수를 var, let, const 로 선언하는데 그 특징과 차이는 아래와 같다.

| |var|let|const|
|:-|:-|:-|:-|
|범위(scope)|함수레벨|블록레벨|블록레벨|
|재할당 여부|가능|가능|불가|
|변수중복선언|가능|불가|불가|
|함수 외부에서 선언시|전역변수|지역변수|지역변수|
|그 외|undefined가 기본|일반적으로 변수 선언시 사용|선언과 초기화를 동시에 진행|

- const에 대한 몇가지
    - 대문자와 언더바로 명명 (e.g. MY_CONST)
    - 값을 변경하려고 시도할 때 오류 발생

- [참조: let의 출처](https://stackoverflow.com/questions/33090193/linguistic-meaning-of-let-variable-in-programming)
- [참조: var, let, const의 차이](https://www.howdy-mj.me/javascript/var-let-const/)