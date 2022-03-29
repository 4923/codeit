### typeof 연산자
> typeof 도 연산자다. 우선순위에 유의하라.

1. python의 type(값) 과 같은 함수로 내가 사용하는 자료형을 반환한다. 변수나 함수에서도 사용할 수 있음에 유의하자.
2. 연산 결과를 문자열로 반환한다.

|결과가 숫자일 때|결과가 문자열일 때|
|:-:|:-:|
|<img width="300" alt="image" src="https://user-images.githubusercontent.com/60145951/172466578-f9a5984f-b01b-439f-abc3-2adeb76e5026.png">|<img width="393" alt="image" src="https://user-images.githubusercontent.com/60145951/172466621-8a1444ab-5040-4423-ac74-2bbf005baf71.png">|

<details>
<summary>python에서도 가능하다. type함수와 아마 동일.</summary>
<img width="584" alt="image" src="https://user-images.githubusercontent.com/60145951/172466889-9e613dbe-6cdd-4c0e-8f8e-c90edbfd7da0.png">
</details>

### NaN : Not a Number
> 연산이 불가능할 때 반환되는 결과

typeof 연산자는 사칙연산자보다 우선순위가 `높다.`

```js
typeof 8 - 3    // 'number' - 3 이 되므로 string과 Number의 연산이 된다. 따라서 연산 불가.
typeof(8) - 3   // 위 연산은 이 줄로 다시 쓸 수 있다.
```
```js
/* 반대로 + 는 연산이 가능하다. */
typeof 8 + 3    // 'number' + 3 은 문자열의 합으로 인식되므로 연산 가능, 결과: 'number3'
```

<img width="391" alt="image" src="https://user-images.githubusercontent.com/60145951/172467850-e5f629b8-f9e9-4a11-95b3-3b0ae370757a.png">
