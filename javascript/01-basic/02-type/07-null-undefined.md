### JS의 특별한 자료형: null, undefined

```js
`${null} 과 ${undefined}은 값이 없음을 표현하는 자료형이다.`
```

|항목|`undefined`|`null`|비고|
|:-|:-|:-|:-|
|특징|값이 없는 '상태'|'명시적'으로 값을 비움||
| | 변수 할당시 기본상태| 변수에 할당해주는 일종의 값|
|type|undefined|object|undefined는 기본값으로 생각하는편이 좋음|
|동등비교| | | true |
|일치비교| | | type이 undefined 와 object로 다르므로 false|

### 차이점?
- null은 `명시적`인 값이며 undefined는 `상태`라는 차이점이 있다.
    - null은 값이 `없음`을 표현하기 위한 값이며
    - undefined는 실행 시 값이 없을때 나타나는 결과다.
<small>아마도 null이 0, undefined가 None이 아닐까?</small>

### 특이사항

- JS에서 변수를 선언하고 값을 할당하지 않았을 경우 기본적으로 자료형은 undefined이 된다.
- 그러나 비어있는 자료형을 표현하려면 (코드 예시 참고) null을 `할당`하면 된다.
- null과 undefined를 `동등비교 ==`하면 `true`지만 `일치비교 ===` 하면 자료형이 다르므로 `false`가 출력된다.

```js

let statusValue;
console.log(statusValue);
console.log(typeof(statusValue));

let intendValue = null;
console.log(intendValue);
console.log(typeof(intendValue));
```

<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/172906899-33e11e28-cd80-4b6a-8c1d-32b7c6fab6fd.png">

null의 경우 type이 object임을 확인할 수 있다.