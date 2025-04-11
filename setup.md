# node.js 개발환경 세팅
## nvm-windows 설치
1. Google에서 nvm-windows 검색하여 설치 페이지 접속 [nvm-windows 다운로드 페이지](https://github.com/coreybutler/nvm-windows)
![검색](./resource/image/nvm-windows%20search.png)
2. 해당 페이지 내에서 README > Overview 내의 **Download Now!** 클릭
![다운로드 페이지 이동](./resource/image/nvm-windows%20download.png)
3. 이동한 페이지 내에서 필요한 nvm 버전을 찾아 **nvm-setup.exe 또는 nvm-setup.zip** 다운
![설치파일 다운로드](./resource/image/nvm-windows%20setup.png)
4. nvm-setup.exe 파일 실행하여 설치 진행 (zip 파일인 경우 압축 풀고 진행)
5. 설치 확인은 아래와 같이 터미널을 실행 후 아래 명령어 입력
![설치 확인](./resource/image/nvm-windows%20version.png)
    ```
    $ nvm version
    $ nvm --version
    $ nvm -v
    ```

# node.js 설치
1. cmd 또는 git bash 등 터미널을 열고 nvm install 버전 입력
    ```
    $ nvm install 22           # 세부 버전 표기 안하면 최신버전 설치됨
    $ nvm install 22.14.0      # 세부 버전 표기
    ```
2. 설치한 node.js 버전 확인은 아래 명령어를 입력하면 된다
    ```
    $ nvm ls
    ```
3. 설치한 node.js 버전을 사용하기 위해 nvm use 버전 입력
    ```
    $ nvm use 22               # 세부 버전 표기 안해도 적용됨
    $ nvm use 22.14.0          # 세부 버전 표기
    ```
4. 설치 버전 확인 - 해당 버전에 따라 npm도 자동 설치된다.
    ```
    $ node -v
    $ node --version

    $ npm -v
    $ npm --version
    ```