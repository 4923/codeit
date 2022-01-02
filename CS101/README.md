
### Course: 컴퓨터 개론

### Topic 1: 프로그래밍 시작하기 In Python

> 개발의 기본기 쌓기

<details>
<summary>Curriculum</summary>

1. comment: 주석이란?
2. 자료형: 변수의 개념과 자료형의 종류(str, int, float)
    예제) int or float 끼리의 합은 사칙연산이지만 str의 합은 단순 연결이다.
    ```py
    # example
    a = 1
    b = 2
    print(a + b)    # 3

    c = "3"
    d = "4"
    print(c+d)      # 34
    ```

3. 추상화: 코드를 더 읽기 쉽게 만들어주는 상징
    - 더 좋은 추상화를 위해 설명적인 변수, 함수, 객체 이름을 정한다.
    - [Abstraction](https://github.com/4923/codeit/blob/main/CS101/abstraction.md): Is a method to hide the internal functionality of the 'function' from users. Therefore users inspect the core implement of the functions, not inner architecture. (e.g variable, function, object)
4. 변수: 값을 저장한다.
    - 변수를 이용한 실습: 칼로리 계산기
5. 함수: 명령을 저장한다.
    - 실습: 반복 작업을 함수로 해결하자!
6. 함수와 파라미터
    - 파라미터: 함수에서만 사용되는 변수
    - 왜 쓰나요?: 함수를 조금씩 다르게 사용하게 하기 위해!
7. 함수와 여러개의 파라미터
    - 파라미터는 여러개 사용할 수 없나요?
    - 실습: 세 수의 곱
8. 함수와 return문
    - return의 쓰임
    - 함수의 결과값
</details>

### Topic 2: 프로그래밍 언어 이해하기
> 프로그래밍 언어를 이해할 수 있는 세가지 패러다임 소개

<details>
<summary>Curriculum</summary>

1. 프로그래밍 언어 이해하기
    > 왜 알아야 하는가?: 언어의 특성에 따라 개발시 초점을 두어야 할 부분이 달라진다.
    1. [OOP? or Not](https://github.com/4923/codeit/blob/main/CS101/OOP.md)
    2. [Data type: Static? or Dynamic?](https://github.com/4923/codeit/blob/main/CS101/typing.md)
    3. Human Friendly? or Not: 기계어에 가까운 low level 언어인가 사람 언어에 가까운 high level 언어인가; 성능에 집중할 수 있는 저수준 언어, 논리와 기능에 집중할 수 있는 고수준 언어.
    - 특수목적언어: R, SQL, HTML/CSS, , MATLAB, Csound, Scratch
2. '더 나은 프로그램' 만들기
    > 개발자는 코드로 소통하고 한번 짠 코드는 계속해서 사용하게 되므로 더 `읽기 쉽고` `이해하기 쉬운` 코드를 짜는 것이 중요하다.
    1. 가독성 좋은 코드란?
        - comment는 개발자에게 전하는 메시지다. 코드를 가장 잘 설명할 수 있는적절한 길이의 주석을 작성하도록 하자.
        - 이름을 잘 짓는건 추상화와 직결되므로 코드의 질을 결정한다.
    2. 읽기 쉬운 코드: style guide == convention
        - naming convention:
            - Snake: math_score, pascal: MathScore, CamelCase: mathScore 
    3. [구조화가 잘 된 코드란?](https://github.com/4923/codeit/blob/main/CS101/design-pattern.md)
    4. 라이브러리와 프레임워크, 차이점은?
        - 내가 만들고 싶은 코드, 필요한 코드를 이미 다른 사람이 만든 경우가 비일비재하다. 이 때, 내 코드를 다른 사람도 사용할 수 있게 만든 것이: 라이브러리, 프레임워크.
        - 언어 공용이 아니므로 언어를 선택하는 기준이 되기도 한다.
        - 프레임워크 vs 라이브러리
            - 프레임워크: 내가 코드만 넣으면 완성되는 미완성 코드 (e.g. 프랜차이즈 카페)
            - 라이브러리: 다른 사람이 만들어놓은 완성 코드, 일종의 도구 (e.g. 카페의 음료 제조기계)



</details>

### Topic 3: 프로그래머의 세계 이해하기


### Topic 4: 소프트웨어 이해하기