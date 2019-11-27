# Frontend Study

## 1. Tensorflow JS 개발환경 구축

* 개발환경 구축 : visual studio code
    * 확장도구설치
        * Git Graph
        * open-in-browser (coderfee)
        * code runner
            * ```ctrl + alt + n``` : 자바스크립트만 콘솔에서 실행
    * 단축키
        * [문서](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
        * ```ctrl + alt + o``` : 브라우져에서 실행

* tfjs 개발환경
    1) 설정파일 복사
        * .babelrc
        * package.json
    2) ```project-root> yarn```
        * node_modules 디렉토리 생성
        * ```yarn.lock``` 생성
    3) 실행 : ```yarn watch```
        * dist 디렉토리 생성
        * 로컬 서버에서 웹앱이 실행


## 2. Note

* CSS 적용방법
    * head태그에서 적용 : ```<link rel="stylesheet" href="style.css">```

* 자바스크립트 적용방법
    * body태그에서 적용

* jQuery 적용방법
    * head태그에서 적용 : ```<link rel="stylesheet" href="style.css">```

* web API 호출방법
    * html문서 : 버튼클릭에 대한 이벤트 함수등록
    * 자바스크립트 : 이벤트함수에서 REST API 를 호출하는 코드 구현
        * ```$.getJSON(url, function(data){...});```
            * function(data) 에 url에서 async하게 가져온 데이터가 저장되어있다.
        * ```$.ajax()```

* 장고프로젝트에서 자바스크립트를 사용
    * html 문서 : ```{% load staticfiles %}``` 를 문서 상단에 추가
    * javascript 파일경로 : ```"/static/main.js```


## Todo

#### tfjs

* visualize-convnet (cam) 코드 분석
    * https://github.com/tensorflow/tfjs-examples/tree/master/visualize-convnet

* deploy 실습
    * https://www.youtube.com/watch?v=LnGgndT308Q&t=182s
    * Netlify 사용
* custom model 로 classifier를 구현
    * keras 모델을 tf-js로 변환 : https://www.tensorflow.org/js/tutorials/conversion/import_keras
    * 변환된 모델 코드를 google cloud storage에 저장
    * gcs에서 모델을 읽어서 html문서에 rendering

#### javascript

* http://www.jquerysample.com/
* https://codepen.io/rajdgreat007/pen/ZpZWbw
* JavaScript Promises
* Front-End Frameworks



