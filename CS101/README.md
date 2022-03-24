
## CS101 intro

> [CS 공부를 어떻게 시작해야 할까? :thought_balloon:](https://github.com/4923/codeit/blob/main/CS101/for-cs-starters.md)

개발은 작은 프로그램부터 만들어보면 흥미가 생기고, 그에 파생되어 조금씩 더 큰 프로그램을 만들며 실력을 향상시키는데 개발자의 뼈대이자 상식이라고 할 수 있는 CS는 어디서부터, 어떻게 배워야 할까?
- Course를 진행하며 느낀 바는 `지식채널 e`의 가벼움을 원하는것인가? 였다. 기본적으로 알아야 하는 지점을 확실히 짚어주어 CS를 빠르게 훑기를 원하는 사람에게는 적합하고, 사실 전공 강의에서도 한 차시정도는 이렇게 배울 내용을 preview 해주는 것이 효과적일것 같단 생각이 들었다.
    - **그러나** 이렇게 가볍게 훑고가는게 나같은 성향의 '원리 이해 중심' 학습자에겐 오히려 혼란이 되거나 한 곳에 지나치게 집중하는 역효과를 일으킬 수 있다. 이 점은: `더 발전해서 공부할 수 있는 키워드` 등을 제시함으로써 해결할 수 있다. (관련내용은 위의 링크 참조)
    - 다만 한번쯤 이 용어를 접해보았거나 경험할 일이 있었던 사람 (*아마도 비전공자 출신 개발자*) 에게는 애매했던 내용들을 다지고 갈 수 있는 좋은 기회가 될 것이다. 딱 상식 수준에 머무를 것이라는 점이 아쉽지만.


## Course: 컴퓨터 개론

| Topic | Articles | URL |
| :- | :- | :- |
| Topic 1 | 추상화란? | [abstraction.md](https://github.com/4923/codeit/blob/main/CS101/abstraction.md) | 
| Topic 2 | 객체지향 프로그래밍 | [OOP.md](https://github.com/4923/codeit/blob/main/CS101/OOP.md)
| Topic 2 | 데이터 타입 | [typing.md](https://github.com/4923/codeit/blob/main/CS101/typing.md)|
| Topic 2 | 구조화가 잘 된 코드: 디자인패턴 | [design-pattern.md](https://github.com/4923/codeit/blob/main/CS101/design-pattern.md)|
| Topic 3 | 소프트웨어 공학이란? | [software engineering](https://github.com/4923/codeit/blob/main/CS101/software-engineering.md)|
| Topic 4 | Web App이란? | [web-application.md](https://github.com/4923/codeit/blob/main/CS101/web-application.md)|

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

<details>
<summary>Curriculum</summary>

1. 다양한 분야
    1. 컴퓨터 사이언스의 기본기
        - 필수 / *필요에 따라*
        - 객체 지향 프로그래밍 / *컴퓨터 구조* / *웹 개발*
        - 알고리즘 / *운영 체제* / *데이터베이스*
        - 자료구조 / *컴파일러* / *네트워크
        + 다양한 분야에서 얼마나 빠르게 적응할 수 있는가를 확인할 수 있는 지표
    2. [소프트웨어 공학: 소프트웨어로 새로운 제품을 만드는 공학분야](https://github.com/4923/codeit/blob/main/CS101/software-engineering.md)
        - 기획, 제작, 테스트, 출시, 사후관리 모든 프로세스가 포함된다.
        - 프로세스 관리
        - 테스트 프로세스
    3. 버전관리 git
        - 새 파일 전체를 저장하는게 아니라 수정한 기록만 저장한다.
    4. IDE
2. 트렌드를 읽는 능력
    - 어떤 공부를 해야할까, 어떤 기술을 사용해야 할까?: 언어, 프레임워크, 디자인패턴 ... 
        1. 활발한 기술: 커뮤니티의 크기
            - [RedMonk 에서 발표하는 통계자료](https://redmonk.com/sogrady/category/programming-languages/)
            - 2021년의 프로그래밍 언어 랭킹이다. Y축은 커뮤니티의 크기, X축은 작업이 얼마나 잦은 빈도로 활발하게 이루어지는지를 표현하는 지표다.
            ![redmonk-2021-programming-language-rank](https://redmonk.com/sogrady/files/2021/08/lang.rank_.0621.png)
        2. 인정받는 기술: 기업의 기술 스택
            - [stackshare: 기업에서 사용하는 기술 정보를 모은 서비스](https://stackshare.io/feed)
        3. 유망한 기술: IT 산업 전반의 흐름
            - Gartner에서 IT 산업 전반의 트렌드를 확인할 수 있다.

</details>

### Topic 4: 소프트웨어 이해하기

<details>
<summary>Curriculum</summary>

1. 컴파일러와 인터프리터
    - 애플리케이션 Application을 만드는 소프트웨어가 컴파일러 compiler, 인터프리터 interpreter다. (번역 **후** 실행)
        - application: 사용자가 사용하는 프로그램
        - end user: 개발의 가장 마지막 단계에서 실제로 프로그램을 사용하는 소비자
        - 스마트폰 앱부터 임베디드 소프트웨어까지 사용자가 조작하는 모든 프로그램이 앱이다.
    - 컴파일러: 프로그래밍 언어를 기계어로 번역하는 소프트웨어로, 프로그램 언어를 모두 기계어로 바꾸어 기계에게 전달한다.
        - 개발은 느리지만 실행 속도는 빠르다.
        - 책 번역? 과 비슷한 것 같다.
        - C, CPP 등의 저수준 언어
    - 인터프리터: 컴파일 없이 고급언어를 바로 실행하는 방법 (번역과 실행이 **동시에**)
        - 개발은 빠르지만 실행 속도는 느리다.
        - 한 줄 한 줄 바로 실행해준다. 실행이 필요한 코드만 기계어로 번역하여 실행한다.
        - 동시통역? 과 비슷한 것 같다.
        - 고급언어로 갈수록 코드 길이가 짧아지기 때문에 인터프리터 방식의 프로그램이 더 용량이 작다.
        - Python 같은 고수준에 가까운 언어


2. 운영체제 개요  
    Operating System: OS  
    Windows, MacOS, Linux, Android, iOS 등 애플리케이션을 실행할 수 있게 하는 모든 환경을 운영체제라고 부른다.

    1. 역할 1: 입출력 I/O   
        OS는 입출력 장치를 연결한다. 마우스와 키보드의 제조사와 동작방식이 모두 다른데도 사용할 수 있는 이유는 OS가 이 모든 장비를 고려하고 신호를 정리하기 때문이다.
    2. 역할 2: 저장, 불러오기 Memory  
        컴퓨터에는 여러 저장장치가 있다: ROM, HDD, SSD, RAM, CPU (cache, register)  
        데이터는 `휘발성`과 `비휘발성`으로 나뉜다. 휘발성 데이터는 임시로 붙잡아두고 있는 데이터로 컴퓨터가 종료될 때 사라지며 RAM에 저장된다. 비휘발성 데이터는 HDD (하드디스크)를 비롯한 디스크에 저장한다. 이 디스크에도 속도 차이가 있는데 빨리 불러와야 하는 정보인지 아닌지를 OS에서 판단한다.  
        반면 삭제하거나 수정해서는 안되는 정보가 있는데, 이는 Read-Only Memory인 ROM에 '읽기'만 가능한 상태로 저장된다.  
        ->> 다시 말해, OS는 사용자의 데이터를 적합한 하드웨어를 이용해 읽거나 쓰고 저장하는 관리자 역할을 한다.
    3. 역할 2: Multi tasking, CPU scheduling  
        자원을 적절하게 분배하여 모든 프로그램이 동시에 실행할 수 있도록 분량, 순서 등을 나눈다.
    4. 종류
        - desktop, laptop
        - mobile OS
        - Server: 안정성, 효율
        - Embedded: 실시간 운영체제 (속도 보장) 가 중요.
    5. 발전  
        - 다양한 OS들이 UNIX에서 출발했다.
            - AT&T에서 개발된 licensed OS다.
            - 대부분 C언어로 작성되었고, 다른 컴퓨터에 적용하거나 수정하기 쉽다는 특징이 있다.
            - 변형된 UNIX도 대거 등장했는데, 이 때 공식 UNIX 버전으로 인정받기 위해서는  `POSIX: 규격, 기능` 을 만족해야 했다.
            - MacOS도 공식 인증을 받은 UNIX 하위 OS다.
        - GNU: Gnu is Not Unix 프로젝트에서 기존 UNIX와 다르게 모두가 자유롭게 사용할 수 있는 UNIX-like OS개발을 목표로 했다.
            - UNIX 같지만 UNIX 코드를 사용하지 않아 라이센스에서 자유로운 오픈소스를 개발할 수 있었다.
            - 이 `GNU`에 `Linux Kernel`을 합쳐서: `GNU/Linux` 운영체제가 만들어졌다.
                - 커널 Kernel: 운영체제의 핵심 부분, 

3. 네이티브 애플리케이션과 웹 애플리케이션
    1. [문제] 플랫폼의 파편화 (플랫폼 의존성 Platform Dependency)
        - [개념1] 플랫폼?
            1. 기차역 등 승객들이 타고 내리는 승강장
            2. (컴퓨터 공학에서는) 프로그램이 실행되는 '하드웨어와 소프트웨어' 환경
        - [개념2] `애플리케이션의 플랫폼은?` : `운영체제`다.
            - 가장 쉬운 예: iOS의 App과 Android의 App
        - 이렇게 **플랫폼에 따라 개발을 다르게 해야 하는 현상**을 **플랫폼 의존성**이라고 말한다.
    2. [해결] 해결책? 
        1. `표준화`
            - 운영체제는 하드웨어와 직결되는데, 그렇다면 애플리케이션 개발자는 하드웨어의 변형에 모두 대응할 정도로 하드웨어에 정통해야 할까?: 아니다!
                - 표준화는 소프트웨어에서만 정하는것이 아니다. 하드웨어에서도 표준을 정하고 그것에 맞추는 추세다. (e.g. C타입 충전기, 이어폰 단자)
                - :thinking: REST API도 비슷하지 않을까?
            - 플랫폼 표준화의 효과: 소프트웨어 개발자는 소프트웨어 개발에만 집중할 수 있다
                - (경험적으로) 집중 분야를 만들고, 그 분야에만 집중할 수 있도록 하는것이 IT업계의 지향점같다. 소프트웨어와 하드웨어처럼 웹도 프론트와 백이 갈리지 않나.
            - 다만, 표준을 지킬지 말 지는 개발자에게 달려있고, 표준 또한 계속해서 바뀌기 때문에 모든 프로그램은 유지-보수를 해 주어야 한다.
        2. `크로스플랫폼` Cross Platform
            > 여러 OS, CPU 등에서 동일하게 실행할 수 있는 환경
            - **이게 어떻게 가능한가?**: `가상머신 VM`
                - 연결 선이 맞지 않을때 어댑터를 연결하는 것과 동일한 원리
                - :thinking: 서버에 활용하는 언어가 Java인것도 JVM 때문인가? -> 어느정도는 맞다. 이 '가상머신'이라는 방식을 처음으로 시도한 언어가 Java이기 때문. 따라서 Java 는 `이식성`과 `범용성`이 좋을 수 밖에 없다.
                - :thinking: 클라우드 컴퓨팅과 비슷한 맥락으로 이해되는데 그러려면 서버가 있어야 하는게 아닌가? ->
                    - 더 자세한것은 `컴퓨터 구조`에서 자세히
                - 가상머신 관련: [참고](https://velog.io/@tataki26/소프트웨어-이해하기-3)
            1. Cross Platform (1) Java
                > write once, run anywhere  

                |What is Java Virtual Machine|Architecture|
                |:-:|:-:|
                |![Java Virtual Machine](https://javatutorial.net/wp-content/uploads/2017/10/write-once-run-anywhere-jvm.png)|![JVM Architecture](https://javatutorial.net/wp-content/uploads/2017/10/jvm-architecture.png)|
            2. Cross Platform (2) Web
                > 반응형 웹 Responsible Web 처럼 다양한 모니터 환경에서 다양한 웹 화면을 볼 수 있다.
                
                > Java로 작성하고 JVM으로 실행하는 것과 같이 Web 은 HTML/CSS, JS로 작성하고 브라우저의 엔진으로 프로그램을 실행한다!
                - 표준화가 잘 되어있다: 웹 규격이 국제 표준화기구 ISO에 등록되어 있으며 이를 `웹 표준`이라 한다.
                - 인터넷이 빠르게 확산되고 있다: 인터넷만 연결되면 언제 어디서든 웹 페이지를 열 수 있다.
                - 웹의 활용성이 높아지고 있고 웹 브라우저를 움직이는 언어인 JS가 주목되고 있다.
            3. Cross Platform (3) App
                - 크로스 플랫폼은 앱을 개발할 때 자주 들어봤을 용어다. 앱에는 특정 OS에서만 동작하는 Native App과 iOS, Android OS 모두에서 돌아가는 Cross platform App이 있다.
                - iOS의 경우만 해도 Mac, iPhone, iPad가 있고 Android OS로 가면 셀 수 없이 많은 하드웨어가 존재하기에 소프트웨어 개발자가 이들 하드웨어에 모두 대응하는 것은 인력 손실이다.
                - 따라서 iOS는 iOS용 X Code를 이용해서, Android는 Android Studio를 이용해 개발하는데 iOS와 Android 모두에서 돌아가도록 개발한 앱을 Cross Platform App 이라고 한다. React Native 등이 포함된다.
                - [Web App에 대해 더 알아보기](https://github.com/4923/codeit/blob/main/CS101/web-application.md))

</details>
