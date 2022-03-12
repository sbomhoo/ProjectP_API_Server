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

## 프로세스
> 1. 검사자 문진표 작성 
> 2. 대기표 발급 
> 3. 대기열 관리자의 대기 호출 (ex>1번부터 50번 까지 앞으로 줄서세요) 
> 4. 카톡 알림 

## 개발 항목
> - 내 앞에 몇명있는지
> - 몇번 부터 몇번 까지 대기하세요(알림)
> - 대기열 관리자 기능 (내 앞에 몇명 있는지 알기 위해서 대기열 초기화 등과 같은 대기열 관리자 페이지 필요) 
 
## 개발 환경
> - server : nodejs express
> - front : android , react
> - DBMS : mongoDB 


## DB Info
> - DB명 : moonjin_db
> - Collection명 : moonjins
> - sample document : 
>	({"user_phone" : "010-123-1234", "checkup_place" : "관악", "user_name" : "홍길동", "user_birthday" : "930101", "user_gender" : "남" , "Q1" : "Y" , "Q2" : "N" , "Q3" : "N" , >"Q4" : "Y", "Q5": "Y"});


## API  Info
> - http://49.142.100.135:7979/
> - 전체 조회: GET /api/moongins/ 
> - 폰번호로 조회: GET /api/moongins/:user_phone
> - 문진표 추가 : POST /api/moongins/ 
> -- body = {"user_phone" : "010-333-3333", 
"checkup_place" : "용산", 
"user_name" : "이지은", 
"user_birthday" : "930516", 
"user_gender" : "여" , 
"Q1" : "Y" , 
"Q2" : "Y" , 
"Q3" : "Y" , 
"Q4" : "Y", 
"Q5": "Y"}
