# ProjectP_API_Server
ProjectP API Server

-------

## 프로젝트 개요
> 1. 프로젝트 설명 : 코로나 PCR 검사 대기열 관리 APP
> 2. AS-IS 
>- 현재 선별소에서 검사를 받기 위해서 검사자는 문진표를 작성하고 대기열표를 따로 수동으로 뽑아서 받는다. 
>- 또한 자기 차례가 될 때 까지 무작정 기다려야한다.
>- 대기열 관리자는 육성으로 대기열자를 호명한다.
> 3. TO-BE
>- 검사자가 선별소에서 문진표를 작성 할 시 자동으로 대기열표를 발급해준다.
>- 검사자는 내 앞에 몇명이 있는지 확인 할 수 있다.
>- 대기열 관리자는 APP을 통해 대기자를 호출 할 수 있다.

## 개발 항목
> - 내 앞에 몇명있는지
> - 몇번 부터 몇번 까지 대기하세요(알림)
> - 대기열 관리자 기능 (내 앞에 몇명 있는지 알기 위해서 대기열 초기화 등과 같은 대기열 관리자 페이지 필요) 
 
-------

## 검사대상자 프로세스
> 1. 문진 작성
> - 문진표 프론트단에서 가지고 있기
> 2. 대기표 발급 클릭 
> - API Server로 문진데이터 넘김 
> 3.  POST /moonjins 호출
> - 문진데이터 DB에 저장, 대기표 발급
> 4. 발급된 대기표 프론트단에서 저장
> 5. GET /waiting/:waiting_num호출
> - 내 앞에 몇명있는지 알려줌.
> - waitingPersonCnt(내 앞에 몇명 남았는지) response 해줌
> 6. 프론트 단에서 보여준다. 

## 대기열 관리자 프로세스
> 1. 대기할 인원 수 클릭 (10명 20명 30명....)
> 2. POST /waiting 호출
> - 이때 request body에 담길 변수는 waiting_count이며, 숫자형 이다.
> - ex) '10명' 클릭 시 waiting_count는 10,   '20명' 클릭 시 waiting_count는 20
> - API서버에서 waiting_count를 받아 '대기 시작 번호(waitingStartNum)'와 '대기 끝 번호(waitingEndNum)'를 response해준다.
> 3. waitingStartNum~waitingEndNum 사이의 대기번호에게 알림  (아직 미구현)
 

-------


## 개발 환경
> - back : nodejs v16.13.1 express
> - front : android , react
> - DBMS : mongoDB 


## DB Info
> - DB명 : moonjin_db
> - Collection명 : moonjins
> - sample document : 
>	({"user_phone" : "010-123-1234", "checkup_place" : "관악", "user_name" : "홍길동", "user_birthday" : "930101", "user_gender" : "남" , "Q1" : "Y" , "Q2" : "N" , "Q3" : "N" , >"Q4" : "Y", "Q5": "Y"});

-------

## API  Info
> - http://49.142.100.135:7979/

> 1. GET /moonjins
> - 전체 문진표 조회
> - response : 문진표
> 2. GET /moonjins/:user_phone
> - 폰번호로 문진표 가져오기 
> - request header : user_phone
> - response : 문진표
> 3. POST /moonjins
> - 문진표 등록 + 대기표 발급
> - request body : {"user_phone" : "010-333-3333", 
"checkup_place" : "용산", 
"user_name" : "이지은", 
"user_birthday" : "930516", 
"user_gender" : "여" , 
"Q1" : "Y" , 
"Q2" : "Y" , 
"Q3" : "Y" , 
"Q4" : "Y", 
"Q5": "Y"}
> - response : waitingNum  (숫자형)
> 4. POST /waiting
>- 대기열 관리자 - 대기 번호 호출 ( 몇명 대기하세요~)
>- request body : waiting_count (숫자형)
>- response : waitingStartNum, waitingEndNum
> 5. GET /waiting/:waiting_num
> - 내 앞에 몇명 남았는지
> - request header : waiting_num (내 대기 번호)
> - response : waitingPersonCnt (내 앞에 남아 있는 사람 수)
