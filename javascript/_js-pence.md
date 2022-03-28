## 잡다한 사실들

#### helper function
함수의 설명서 (python의 help) 를 확인하고 싶어서 helper function을 검색해보았는데, JS에서 헬퍼함수는 함수 안에서 호출되는 또다른 함수라고 한다. [[출처](https://velog.io/@sungjun-jin/JavaScript-Functions#:~:text=Stranger-,Helper%20Functions,%EB%A5%BC%20Helper%20Function%EC%9D%B4%EB%9D%BC%EA%B3%A0%20%ED%95%9C%EB%8B%A4.)]

#### Function.prototype
console에 `{함수명}.prototype` 을 실행하면 함수의 method를 비롯한 구성요소를 확인할 수 있다.
<img width="477" alt="image" src="https://user-images.githubusercontent.com/60145951/172458086-85bb6171-635b-46ea-8216-ea91f6476372.png">

#### === 과 ==의 차이 : 자료형
`===`는 자료형이 같은지까지 판별하며 `==`는 값이 같은지 판별한다.
<img width="233" alt="image" src="https://user-images.githubusercontent.com/60145951/172463812-ab825b5e-09aa-4899-b526-d69809bb3251.png">

### AND 연산은 왼쪽부터 비교한다.

### JS의 언어타입: 원시값
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
언어의 low level에서 직접 표현되는 '불변 데이터'
- Boolean type
    - 논리 요소를 나타낸다.
- Null type
    - `null` 하나의 값만 가질 수 있다.
- Undefined type
    - 값을 할당하지 않은 변수다.
- Number type
- BigInt type
- String type
    - 16비트의 부호 없는 정수값 요소로 구성되어 각 요소가 string의 한 자리를 차지한다. == String의 길이는 요소 개수와 같다.
    - C언어와 달리 문자열은 불변한다.
    - `문자열의 타입화에 유의` : 어떤 자료구조라도 문자열로 표현할 수 있지만 가능한 텍스트 데이터에만 사용할 것을 권장하며 복잡한 데이터의 경우 문자열 파싱을 통해 적합하게 추상화 하라.
- Symbol type
    - 고유하고 변경 불가능한 객체의 속성 키로 사용 가능하다. ?

### JS의 언어타입: 객체
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
속성의 컬렉션, 식별자로 참조할 수 있는 `메모리 상의 값`

### JS는 소수와 정수를 따로 구분하지 않는다.

Number type 또는 BigInt type으로 나뉘더라.

### ('b' + 'a' + + 'a' + 'a').toLowerCase(); == banana
`++` 연산자는 증가 연산자, `--` 연산자는 감소연산자다.
해당 연산자는 숫자 자료형에서만 기능하므로 문자열과의 연산이 불가능하다.

> <img width="266" alt="image" src="https://user-images.githubusercontent.com/60145951/172470516-eae4ef01-0c07-4c19-9514-a3d3063fcb7f.png">
> <small>원래는 이렇게 작동한다</small>

예시에서 볼 수 있듯 `++` 자체 만으로 값을 변경시키기 때문에 (`++` 는 `+=` 와 같다.) 자동으로 세미콜론이 추가되는 연산 대상이고 그외 여타 혼란을 일으킬 수 있다는 이유로 선호되지 않고 있다고 한다. ([출처](https://velog.io/@iamhayoung/JavaScript-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90-Feat.-%EC%A0%84%EC%9C%84-%EC%97%B0%EC%82%B0%EC%9E%90-%ED%9B%84%EC%9C%84-%EC%97%B0%EC%82%B0%EC%9E%90#%EC%99%B8%EB%A9%B4%EB%B0%9B%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90%F0%9F%A5%B2))

### 연산자 우선순위
> [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/연산자_우선순위)
