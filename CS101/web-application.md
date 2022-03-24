
## Web Application
- Course 컴퓨터개론 / Topic 4 소프트웨어 이해하기의 내용을 보충한다.

| App의 종류 | 장점 | 단점
| :- | :- | :- |
| Native App | OS의 고유 기능을 사용할 수 있고, 최적화되어있어 빠르다. | 수정사항이 생길 때 마다 심사-배포-업데이트 과정을 거쳐야 한다.
| Cross Platform App | OS에 구애받지 않고 개발할 수 있다. | 다른 OS에 대응하기 위한 VM을 하나 더 돌리는 셈이므로 Native보다는 느리고 기능이 제한적이다.
| Web App | 웹 페이지를 어플리케이션처럼 사용하는 기술이다. 개발이 간편하다. | 브라우저에서 웹 페이지를 띄우는 정도다. (모바일 반응형 어플)

> Web의 활용성이 커지면서 Web App 또한 발전했고 그 결과가 SPA, Hybrid app, PWA 다.

| Web App의 종류 | 특징 | 비고 |
| :- | :- | :- |
| Single-page Application (SPA) | 페이지 이동이 없고 화면만 갈아끼워지므로 웹 사이트임에도 애플리케이션처럼 느껴진다. 현재 가장 주로 쓰이고 있는 방법. | 
| Hybrid App | Native App 에서 변화가 잦은 공간에 URL을 연결하는 방식 | 근본적으로는 Native 방식이다. |
| Progressive Web App (PWA) | 웹앱과 네이티브앱의 장점을 합한 앱. 인터넷 연결 없이도 사용할 수 있고, 앱스토어를 통하지 않아도 다운로드 받을 수 있다. | 방법론에 가까워서, 절대적인 기준이 있지는 않다. 


### SPA! 
> 신기하다! SPA에는 그 유명한 Angular, Vue, React가 포함된다.

<p align="center">
<img alt="전통적인 웹 개발방식과 SPA" src="https://linked2ev.github.io/assets/img/devlog/201808/2018-08-01-SPA-step1.png" width=400/>
</p>

기존의 웹 페이지를 불러올 때에는 페이지의 정보 (특히 데이터가 큰 이미지, 비디오 등) 를 Content Delivery Network, CDN 에서 불러오고 브라우저 엔진을 이용해 렌더링하는 과정을 거친다.

Web App 또한 웹 페이지의 일종이므로 이 과정을 거쳐야 하는데 SPA는 페이지 이동을 없애 (Single-page) page reloading 과정을 생략한 기술이다. 

> **SPA 기술이 탄생하기까지**
1. **[기존의 Web]** CDN에서 캐싱/압축된 CSS, JS 소스 등을 받아 페이지를 렌더링한다.
2. **[Ajax 방식/초기 SPA]** '필요한 것만 요청'하는 아이디어를 도입하여 기존 웹 서비스의 단점을 해결했다. 재사용 하는 부분을 매번 다시 요청하는 것은 비효율적이므로 JS를 이용해 필요한 부분만 다시 그린다.
    > 첫 화면을 그리고 다음부터는 ajax 방식으로 데이터만 가져온 뒤에 클라이언트에서 html을 렌더링하는 작업을 많이 했다. 즉 필요한 부분만 다시 그리도록 자바스크립트 코드를 작성한다.
    [출처](https://reimaginer.tistory.com/entry/spa-and-spa-routing) 

    Anchor 해쉬(`#`)를 만들어 앵커를 클릭할 때마다 그 부분에 해당하는 정보를 가져와 innerHTML을 구현하는 방식이다. 컴포넌트 구분이 중요할 것 같다.
    
3. **[SPA 방식]** 초기 SPA에서 페이지를 이벤트마다 분리 (해쉬:`#`) 했다면 현재의 SPA는 논리적으로 페이지를 분리할 수 있게 되었고 그 부수적인 효과로 히스토리 관리가 가능해졌다.
    - **히스토리 관리?: routing** 
        - 초기 SPA는 뒤로가기를 누르면 어디로 가야 할 지 몰랐던 반면 현재의 SPA는 해쉬가 달라졌을 때를 감지하는 HTML5의 기능을 이용해 페이지를 routing하게 된다.
        - 즉, 한 페이지에서 필요한 부분만 다시 그리는 앱인데도 이전에 어느 부분만 다시 그렸는지를 앱이 기억한다는 의미가 된다. 거의 웹 페이지와 같은데 리소스 관리가 훨씬 효율적이어졌다.



### 참고
- [SPA/SPA까지의 발전과정, SPA의 routing](https://reimaginer.tistory.com/entry/spa-and-spa-routing)
- [SPA/SPA란 무엇인가](https://linked2ev.github.io/devlog/2018/08/01/WEB-What-is-SPA/)
- [SPA/CDN이 뭐길래?](https://velog.io/@www_1216/깃허브도-스택오버플로우도-터졌다.-CDN이-뭐길래)
- [PWA의 대표적인 예: starbucks](https://app.starbucks.com)
- [PWA의 대표적인 예: pinterest](https://www.pinterest.co.kr)
