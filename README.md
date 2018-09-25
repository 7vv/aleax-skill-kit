# Alexa skill kit

### Alexa, 무엇인가 ?
아마존이 판매하고 있는 `에코 스피커`에 내장된 음성인식 솔루션

기본으로 내장된 기능은 비서 기능인데  WIFI 연결된 기기들을 제어 할 수 있고
물건을 사거나 날씨, 뉴스, 스포츠 같은 정보를 제공해주기도 합니다.

### Aleax, 동작 구조
사용자가 `Aleax를`음성으로 부릅니다
`Aleax는` 음성을 입력 받은 뒤 스킬 인터페이스에서 음성데이터를 텍스트로 변환하고 스킬 서비스로 텍스트를 넘겨줍니다. `Aleax를 `서비스에서 사용자가 원하는 요청을 처리한 다음 사용자에게 리소스를 응답해주는 아마존 소프트웨어 입니다.

### Aleax skill kit 
`Aleax skill kit` 장점은 개발자가 대화 인식과 자연어 처리에 대해 배경 지식이 없다 해도
몇 시간 만에 음성 인식 환경을 구축 할 수 있습니다. 편하죠?

이미 개발자들에 의해 여러가지 `Aleax skill kit` 개발 되었고 25000개 이상의 기업이 사용하고 있습니다. 
예를들면,` 에코` 에게 도미노피자 주문 기능이 없었으나 도미노피자 에서 피자 주문 `skill kit` 을 개발해 `에코에` 내장시켜 피자를 주문할 수 있게 만듭니다.

`skill kit` 은 아마존에 들어가서 볼 수 있습니다. 
개발자가 개발한 `skill kit` 를 판매 하고 수익을 얻을 수 있으며 `skill kit` 을 구매해 사용할 수도 있습니다.
 
### Aleax skill kit 시작 하기
이번 예제는 사용자가 원하는 헤어 스타일 사진을 찾아주는 `skill kit` 을 제작합니다.

> 시나리오
<img width="687" alt="2018-09-26 12 46 44" src="https://user-images.githubusercontent.com/25811028/46026183-ade1b080-c125-11e8-85d7-d9bf5e7fcbfb.png">

아래 그림은 `skill kit` 흐름 입니다. 
사용자가 에코에게 `Aleax skill kit` 을 오픈 한 뒤 말합니다. `ex) 헤어 스타일 보여줘`
그럼 `Aleax`는 정의된 텍스트를 람다로 전송합니다. 
람다에서 로직을 처리한 후 다시 유저에게 음성으로 응답을 줍니다.
람다 말고` https` 프로토콜 연결도 가능하니 일반 웹 서버 에서 로직 처리가 가능합니다.

> skill kit 흐름
<img width="676" alt="2018-09-26 12 47 26" src="https://user-images.githubusercontent.com/25811028/46026349-1af54600-c126-11e8-84c7-129694a76c99.png">

### Aleax skill kit 제작 하기
#### Step1
먼저 `Aws developer`에 들어가서 가입을 해야합니다.
가입하고나서  `Aleax` 선택합니다. 그리고 `skill kit` 메뉴로 들어갑니다.
<img width="617" alt="2018-09-26 12 50 14" src="https://user-images.githubusercontent.com/25811028/46026465-5abc2d80-c126-11e8-863a-23ac8256e507.png">


#### Step2
그 다음 create skill 클릭 합니다.

![image](https://user-images.githubusercontent.com/25811028/46026499-79222900-c126-11e8-805b-5a506a8a0e1a.png)

#### Step3
우측에 체크 4개가 완성 되어야 배포 가능합니다.

![image](https://user-images.githubusercontent.com/25811028/46026505-8212fa80-c126-11e8-8e42-ff5933dcb9b3.png)

#### Step4
먼저 Invocation을 생성합니다.

저기 빨간 밑줄에 `name`을 입력해주시면 됩니다.

사용자가 open skill 이라고 하면 해당 `skill kit` 작동됩니다.

![image](https://user-images.githubusercontent.com/25811028/46026519-8d662600-c126-11e8-97d0-fbf8a44975b7.png)

#### Step5
그 다음 Intent를 만들어야 합니다.

`Intent`란 사용자의 발언을 캐치 할 수 있습니다.
 
사용자가 `show me hair style` 라고 말하면 해당 구절로 정의한 `Intent` 에서 캐치 합니다.

또 `Intent` 사용자가 말한 단어를 변수로 받을 수 있는데요.

이것을 `skill kit`에서 Slot value 라고 표현합니다 

<img width="689" alt="2018-09-26 12 54 03" src="https://user-images.githubusercontent.com/25811028/46026651-e1710a80-c126-11e8-922a-068349efcfcd.png">

#### Step6
`Intent` 정의하는 방법은 `Aleax skill kit` 콘솔에서 정의하거나
![image](https://user-images.githubusercontent.com/25811028/46026798-34e35880-c127-11e8-9a09-420751f997c8.png)

직접 `Json File`를 `Import` 해서 정의 할 수 있습니다.
![image](https://user-images.githubusercontent.com/25811028/46026835-46c4fb80-c127-11e8-80ba-e4b3e78a693a.png)

#### Step7
그리고 엔드 포인트를 세팅 합니다.

HTTPS와 람다중에 람다로 세팅 하겠습니다.

`Aleax`는 한국어도 서연 이라는 음성이 지원되지만 예제는 영어로 작성했습니다.

그리고 `Aleax` 연동할 람다 리전은 버지니아 북부만 됩니다.

![image](https://user-images.githubusercontent.com/25811028/46026880-5c3a2580-c127-11e8-90a5-a4568c09843d.png)

#### Step8
마지막 단계 입니다. 
첫번째 저장 버튼을 누르고 두번째로 빌드 버튼을 눌러 주세요.
![image](https://user-images.githubusercontent.com/25811028/46027044-d79bd700-c127-11e8-85c4-6702082ccdc7.png)

#### Step9
이제 `Aleax skill kit` 기능을 담당할 연동 람다를 생성합니다.

람다 구성에서 왼쪽 트리거에 `Aleax skill kit`을 추가합니다.
![image](https://user-images.githubusercontent.com/25811028/46027074-f0a48800-c127-11e8-824f-c39fe3316199.png)

#### Step 10
트리거 구성에서 스킬ID를 입력합니다. 스킬 ID는 스킬킷 ENDPOINT 세팅에 가면 있습니다.

![image](https://user-images.githubusercontent.com/25811028/46027102-00bc6780-c128-11e8-8773-d177798114e8.png)

#### Step 11
람다 코드를 작성합니다. 알렉사 sdk를 이용해 node.js으로 간단하게 코드를 작성합니다.

코드는 예제가 인터넷에 많이 있어서 찾아보시면 됩니다.

샘플 코드도 해당 레포에 올라와있습니다.

#### Step 12
테스트 진행하기

에코가 없어도 아래 주소로 가서 `skill kit` ID를 입력하고 테스트 가능합니다.
https://echosim.io/


 




