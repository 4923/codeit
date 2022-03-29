### bool 대수
> 일상의 논리를 수학적으로 표현

bool 대수에서 사용하는 값은 수가 아니라 진리값이다.
- 진리값: 명제가 참인지, 거짓인지 나타낸다.
    - True : 1, False: 0

|기본연산||
|AND|두 명제가 참인가|
|OR|두 명제 중 하나가 참인가|
|NOT|명제의 결과를 뒤집는다|

### boolean 형
> 참과 거짓을 표현하는 자료형으로, 함수다.
<img width="297" alt="image" src="https://user-images.githubusercontent.com/60145951/172456578-f8a390c5-231a-4d38-9080-2edccdb92787.png">

<img width="477" alt="image" src="https://user-images.githubusercontent.com/60145951/172458086-85bb6171-635b-46ea-8216-ea91f6476372.png">


- Boolean 값은 `비교를 통해 생성된다.`
- Boolean은 함수와 객체 두가지 타입이 있다.
- Boolean 객체의 true, false 값과 **원시** Boolean 값의 true, false는 다르다.
- 값이 `undefined`, `null`이 아닌 모든 객체는 `true`로 반환된다.
    - 값이 false인 Boolean 객체도 포함된다.
    ```js
    let booleanObject = new Boolean(false)  // undefined
    if (booleanObject){
        console.log("Boolean은 undefined, null이 아닌 모든 객체를 true로 인식한다.");
    }   // Boolean은 undefined, null이 아닌 모든 객체를 true로 인식한다.
    ```
    <img width="746" alt="image" src="https://user-images.githubusercontent.com/60145951/172462133-5e4b7946-adf3-430e-b6fd-75ed4b3445bc.png">

    - 여기서 `new`는 새 객체를 생성하는 명령어이며 위 코드블럭에서 `new`를 통해 새로운 Boolean 객체를 생성하지 않으면 if절은 실행되지 않는다.

    |new를 이용해 생성한 변수: object|new 없이 생성한 변수: Boolean|
    |:-:|:-:|
    |![Boolean object](https://user-images.githubusercontent.com/60145951/172462485-3e92b754-5722-4122-a7de-b83754386bb0.png)|![Boolean](https://user-images.githubusercontent.com/60145951/172462528-5e43a58f-8ff0-4e39-95ed-0cd42e320968.png)|

- method
    - `Boolean.prototype.toString()`
        - 자기 자신을 문자열 (`"true"` `"false"`)로 변환
            <details>
            <summary>다른 자료형; Number와의 비교</summary>
            <img width="738" alt="image" src="https://user-images.githubusercontent.com/60145951/172459105-0466b2eb-8968-4d11-b2a9-a5ca162ef0a0.png">
            </details>
    - `Boolean.prototype.valueOf()`
        - Boolean 객체의 원시값을 반환
            ```js
            let booleanObject = new Boolean(false)  // 일 때
            booleanObject.valueOf() // 의 값: false
            ```


<font color="orange">원시 Boolean</font> 값: false, true 값 그 자체

- ref
    - [mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
