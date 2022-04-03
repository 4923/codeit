## array의 method 1: splice
### delete와 splice

- delete는 값을 비우는 메서드로 배열의 크기까지 조정하지는 않는다.
- splice는 배열의 값을 삭제할 때 **일반적으로** 사용하는 메서드이며 파라미터로 삭제하고 싶은 인덱스를 전달하면 된다.

```js
let members = ['칼국수', '라자냐', '순두부찌개', '오렌지주스']

// delete 예시
delete members[3];
console.log(members)    //  ['칼국수', '라자냐', '순두부찌개', empty]
```
```js
let members = ['칼국수', '라자냐', '순두부찌개', '오렌지주스']

// splice 예시
members.splice(3);      // 2번째 인덱스의 값을 반환함
console.log(members)    //  ['칼국수', '라자냐', '순두부찌개']
```

| delete | splice |
| :-: | :-: |
|<img width="600" alt="delete array element" src="https://user-images.githubusercontent.com/60145951/173433813-5cb0ef3b-8424-48a0-8c86-5642f148b971.png">|<img width="600" alt="splice array element" src="https://user-images.githubusercontent.com/60145951/173433846-0f727a2d-d669-4675-8fea-4d9d329e655f.png">|

## splice(index, 삭제할 개수, 추가할 값)

> 삭제할 개수를 지정하지 않으면 index 이후의 `모든 값을 삭제` 함에 유의 할 것

<img width="600" alt="parameters of splice" src="https://user-images.githubusercontent.com/60145951/173434735-54046932-3f2b-4496-9b91-4a78b2352447.png">


### splice를 이용한 잘라내기, 추가하기
```js
let members = ['칼국수', '라자냐', '순두부찌개', '오렌지주스']
// undefined

/* splice로 잘라내기: 두번째 인자값을 전달하지 않으면 첫번째 인자값 이후의 모든 값을 잘라낸다. */
members.splice(2)
// (2) ['순두부찌개', '오렌지주스']
members
// (2) ['칼국수', '라자냐']

/* 세번째 인자값으로 새로운 값을 주면 마지막 삭제한 요소 자리에 그 값이 추가된다. */
members.splice(1, 1, '순두부찌개')
// ['라자냐']
members
// (2) ['칼국수', '순두부찌개']
```

### splice를 이용한 값 교체 (수정)
> 아래 예시를 활용하면 여러 요소를 수정하는 것도 가능하다.

<img width="600" alt="exchange value using splice" src="https://user-images.githubusercontent.com/60145951/173435238-c8439c8d-c841-4c03-94b5-7b7f15162e09.png">

```js
let members = ['칼국수', '라자냐', '순두부찌개', '오렌지주스']
// undefined
members.splice(2,1,'매운탕')
// ['순두부찌개']

/* 값 교체, '오렌지주스'는 그대로인 것을 확인할 수 있다. */
members
// (4) ['칼국수', '라자냐', '매운탕', '오렌지주스']
```

### splice를 이용한 값 삽입: insert
<img width="600" alt="insert value using splice" src="https://user-images.githubusercontent.com/60145951/173435401-a84ab7d8-d1b7-4f0a-a217-e86d59f0ce60.png">

```js
members
// (4) ['칼국수', '라자냐', '매운탕', '오렌지주스']
members.splice(2, 0, '순두부찌개')
// []
members
// (5) ['칼국수', '라자냐', '순두부찌개', '매운탕', '오렌지주스']
```