### 접근

> 객체를 어떻게 다룰 것인가?


- 점 표기법: `object.property1`
- 대괄호 표기법: `object[property1]`

두가지로 접근 가능하다. 파이썬에서 클래스 안의 함수에 접근할 때 또는 파이썬의 딕셔너리 안의 Key 값에 접근할 때 같은 표기법을 쓴다.

유의해야 할 점은 `존재하지 않는 프로퍼티에 접근하려 할 때` 에러가 나는것이 아니라 `undefined`가 출력된다는 점이다.

### 활용

```js
/* 
유의: 숫자로 시작하거나 띄어쓰기가 있는 값의 경우 `.` 점 표기법이 아닌 `[value]` 대괄호 표기법을 통해 property에 접근한다.
*/

// 확인
propertyName in object

// 수정: 재할당과 원리가 같다.
object.propertyName = anotherValue

// 삭제
delete object.propertyName

// 추가
object.newPropertyName = newValue
```