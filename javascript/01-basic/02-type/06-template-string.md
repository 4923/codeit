### 템플릿 문자열
> 문자열 안에 변수와 함수 또는 연산을 섞어 쓰는 방식

1. 백틱으로 문자열을 감싼다.
2. 달러기호를 앞에 붙이고 문자열 안에 포함시키고 싶은 내용 (e.g. 변수, 함수 등) 을 중괄호로 감싼다.
    - console.log(`이렇게 작성하고 ${변수}나 ${함수}를 추가한다.`)

>> in Python
> f-string, %, 등을 이용한 문자열을 파이썬에서도 문자열 템플릿 또는 템플릿 문자열이라고 말한다.

### 예시코드
```js
let numbering = 14;
let expansionPack = 5;

console.log("Endwalker is a " + expansionPack + "th expansion pack of final fantasy " + numbering);
console.log(`Endwalker is a ${expansionPack}th expansion pack of final fantasy ${numbering}`);
```

<img width="600" alt="template string example js" src="https://user-images.githubusercontent.com/60145951/172905102-955a4a84-7f0b-452e-8477-ebd5080e0349.png">
