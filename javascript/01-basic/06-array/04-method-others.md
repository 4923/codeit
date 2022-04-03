## [Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

> 배열은 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 메서드를 갖습니다. JavaScript 배열은 길이도, 각 요소의 자료형도 고정되어 있지 않습니다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있고 데이터를 연속적이지 않은 곳에 저장할 수 있으므로, JavaScript 배열은 밀집성을 보장하지 않습니다. 보통 이런 성질들은 편리하지만, 사용하려는 목적에 맞지 않으면 형식화 배열(typed array)을 사용하는 것을 고려해보세요.

> 배열은 (연관 배열과 달리) 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용합니다. 대괄호 구문 또는 속성 접근자를 사용해 정수가 아닌 키에 접근할 경우 배열의 요소가 아니라 배열의 객체 속성 컬렉션에 연결된 변수를 바라보게 됩니다. 순회 및 변형 작업 또한 이런 속성에 적용할 수 없습니다.

### 배열의 항목을 순회하기: `forEach`

<img width="721" alt="image" src="https://user-images.githubusercontent.com/60145951/174794015-97d4c918-b654-480e-a05b-f352ace06fd2.png">
array.forEach() 의 인자로 임시함수를 전달하고 임시함수의 인자로는 반복문을 돌 때마다 반환되는 값과 그 인덱스, 그리고 전체 배열을 돌려준다.


<br><details>
<summary> python과의 비교 </summary>

```py
array = ['typescript', 'javascript', 'python', 'cpp', 'c', 'c#']

for index, item in enumerate(array):
    print(f'배열 {array} 의 {index} 번째 값은 {item} 입니다.')

```

- 결과

<img width="973" alt="image" src="https://user-images.githubusercontent.com/60145951/174794812-dd1a59d0-9c7a-466d-bd75-894f64c8bdfa.png">

</details>

```js
let members = ['typescript', 'javascript', 'python', 'cpp', 'c', 'c#']

members.forEach(
    function(item, index, array){
        console.log('배열' + array + '의' + index + '번째 값은 ' + item + '입니다.')
    }
)
```
<img width="1650" alt="image" src="https://user-images.githubusercontent.com/60145951/174794890-735e0a66-b12a-4a4e-a03f-a3ae80e91036.png">

### 배열 뒤집기: reverse

```js
let members = ['typescript', 'javascript', 'python', 'cpp', 'c', 'c#']

members.reverse()
```

뒤집어진 값을 반환한다.

<img width="1631" alt="image" src="https://user-images.githubusercontent.com/60145951/174795201-59157e5e-165d-4dba-9a22-e3239602acaf.png">
