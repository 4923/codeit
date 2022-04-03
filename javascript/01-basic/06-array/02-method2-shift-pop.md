

### 배열이 아래와 같다고 할 때 사용할 수 있는 method는 아래와 같다.
```js
let members = ['javascript', 'java', 'python', 'c', 'cpp']
```


### 배열의 첫 요소를 삭제: splice(0, 1) or [`shift`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
```js
members.splice(0, 1)    //  ['java', 'python', 'c', 'cpp']

// or

members.shift()   //  ['java', 'python', 'c', 'cpp']
```

- `array.shift()` / 인자: 없음 / 반환값: 제거된 요소
    - 배열의 첫 요소를 삭제하여 반환한 후 나머지 요소를 앞으로 당긴다.
    - shift는 인자가 없다.
    - method를 호출하는 공통방식: () 으로 호출
    - python의 pop(0) 과 같다.
    - FIFO, queue 구조에서 사용할 수 있다.

### 배열의 첫 요소를 추가: splice(0, 0, item) or [`unshift`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

- `array.unshift()` / 인자: 추가할 값 / 반환값 : 새로운 길이
    - 배열의 첫 요소를 추가하고 나머지 요소를 뒤로 한칸씩 민다.
    - shift와 다르게 추가할 값을 인자로 넘겨주어야 한다.
        - 넘겨주지 않을 시 에러가 발생하지 않지만 배열에 변화가 생기지 않는다.
    - 길이가 달라진다. 다시말해 길이가 없는 객체, 또는 순서가 없는 객체에서는 제대로 작동하지 않을 수 있다.

### 배열의 마지막 요소를 삭제: splice(-1, 1) or [`pop`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

- `array.pop()` / 인자: 없음 / 반환값: 마지막 요소
    - 배열의 마지막 요소를 삭제하고 반환한다.
    - pop은 인자가 없다.
    - 길이가 없는 객체, 또는 순서가 없는 객체에서는 제대로 작동하지 않을 수 있다.

### 배열의 마지막 요소를 추가: [`push`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- `array.push(element1[, ...[, elementN]])` / 인자: 추가하려는 값 / 반환값: 호출한 배열의 새로운 length 속성
    - 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환한다.
    - splice(-1, 0, item) 이렇게 하면 맨 마지막에서 두번째 위치에 값이 추가된다. 주의.
    - 배열을 닮은 객체에 `call()` 또는 `apply()`를 사용할 수 있다.
    - push 는 입력의 *시작을 어디로 설정할 것*인지 결정하기 위해 *length*에 의존한다.
        - length가 없을 경우 또는 숫자로 변환될 수 없을 경우 인덱스는 0을 사용한다.
