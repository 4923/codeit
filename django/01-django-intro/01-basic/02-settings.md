## 가상환경 세팅

> 가상환경이 필요하다.

```bash
# pyenv 는 파이썬 설치 및 관리를 위한 툴
brew install pyenv
# pyenv-virtualenv 는 파이썬 가상환경 설치 및 관리를 위한 툴
brew install pyenv-virtualenv
```

```bash
# bash의 경우 pyenv 설정을 위해 아래 세 문장을 터미널에 입력
echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc

# 설치 확인: 터미널 (cmd+q) 재실행 후 버전 확인
pyenv --version
```

```bash
# 필요한 파이썬 버전 설치
pyenv install 3.7.13
pyenv install 3.8.13
```

```bash
# 필요한 가상환경 설치 : pyenv virtualenv {python version} {env name}
pyenv virtualenv 3.7.13 django-envs
# 가상환경 삭제 : pyenv uninstall {env name}
```

### 가상환경 확인!
```bash
pyenv versions
```
가상환경은 위 명령어로 확인한다.

<img width="395" alt="image" src="https://user-images.githubusercontent.com/60145951/171856147-56e10a1f-61f7-4bf5-a6ef-5de25af4b513.png">

확인시 위와 같은 출력문구를 확인할 수 있는데, 최하단의 `django-envs` 는 [`symbolic link`](https://ko.wikipedia.org/wiki/심볼릭_링크) 으로 특정 프로그램의 바로가기 같은 의미다. 
- symbolic link : 컴퓨팅에서 심볼릭 링크(symbolic link) 또는 기호화된 링크는 절대 경로 또는 상대 경로의 형태로 된 다른 파일이나 디렉터리에 대한 참조를 포함하고 있는 `특별한 종류의 파일`이다. 유닉스 계열 운영체제인 POSIX 표준 및 윈도우 등에서 널리 사용되고 있다.

### global 설정

```bash
# SET global python version
pyenv global 3.8.13
# 이제 아무것도 하지 않아도 (폴더 이동) 3.8.13이 기본으로 설정된다.
```

|global 설정 전 후|폴더 이동 후|
|:-|:-|
|<img width="358" alt="image" src="https://user-images.githubusercontent.com/60145951/171858911-06439d54-2702-4d9f-9cbd-9cc0c60ea1c8.png">|<img width="471" alt="image" src="https://user-images.githubusercontent.com/60145951/171859202-b945aa2f-09d5-4c90-b97b-b3b878b9fbfe.png">|
|(`*`가 현 위치)|3.8.13 앞에 별이 찍혀있는걸 볼수 있다.|

### 이제 local 설정을 해보자.

```bash
# 중간에 local 을 추가하면 된다.
# pyenv local {가상환경 이름}
pyenv local django-envs
```
<img width="657" alt="image" src="https://user-images.githubusercontent.com/60145951/171859516-0819298c-ee17-4d68-b51c-bd6fd7d849d7.png">

> 중요! pyenv는 가상 환경을 켜고 끌 필요 없이 한번 설정을 해두면 `해당 디렉토리로 이동했을 때 자동으로 가상 환경이 적용`된다.


## django 설치

```bash
pip3 install django==2.2
# django-admin --version
# 버전체크가 된다면 설치 완료
```