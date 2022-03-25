### 소프트웨어 체계

> OS는 '한정된 자원으로 운영해야 한다는 점에서' 대통령이 하는 일과 같다.

OS의 목표: 컴퓨터 시스템의 자원을 `효율적`이고 `형평적`으로 관리한다.
- 프로그램 어디에 얼만큼의 메모리를 할당해야 하는지를 결정한다: CPU scheduling
- 어떤 시간 간격으로, 누구에게 먼저, 얼마동안 메모리와 CPU를 할당할 것인지를 결정하는 것이 중요하다.
    - 정책 예산 예시: 발전이 필요한 분야에 예산을 한동안 몰아준 후, 자립이 가능해졌을 때 예산을 줄인다.
    - OS 도 마찬가지로, 프로그램이 N개 실행될때 자원을 1/N 하지 않고 순차적으로 실행한다. (이 편이 더욱 '효율적') 단 형평성을 고려해야 하므로 특정 프로그램에 치우치지 않도록 설계해야 한다.

> 운영체제에서 주로 학습하고 해결하게 될 문제들 미리보기
1. 교착상태 deadlock
2. 식사하는 철학자 문제
3. 디스크 스케줄링

### ref
- [이화여자대학교 운영체제 강의 / 반효경](http://www.kocw.net/home/search/kemView.do?kemId=1046323)
- [hufs missing semester 2021 winter / shell & shell editors](https://4923i.notion.site/Shell-Shell-Editors-4b0d78a98eb5401b875c3c5f7c8d08a9)
- [Github: 4923/CS-dictionary/computer-science/operating-system](https://github.com/4923/CS-dictionary/tree/main/computer-science/operating-system)