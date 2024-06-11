<template>
    <div class="MBTITest">
      <h1>MBTI 테스트</h1>
      <!-- <h3>당신의 MBTI 유형: {{ mbtiType }}</h3> -->
     
      <div v-if="currentQuestionIndex < 32">
        <h2>MBTI 유형을 결정하기 위해 다음 질문에 답하십시오:</h2>
        <p>대답은?</p>
        <div id = "app">
          <div v-if="currentQuestionIndex==0">
            <img src="../assets/MBTI/T,F/1.png" height="500">
            <br><br>
            <button @click="answerQuestion('F')">A &nbsp;:&nbsp; 괜찮아? 힘들겠다 기다려봐 내가 전화할게!!</button><br><br>
            <button @click="answerQuestion('T')">B &nbsp;:&nbsp; 사람은 사람으로 잊는거래 힘내</button>
          </div>
          <div v-else-if="currentQuestionIndex==1">
            <img src="../assets/MBTI/T,F/2.png" height="500">
            <br><br>
            <button @click="answerQuestion('F')">A &nbsp;:&nbsp; 음 알겠어 기다리고 있을게!(근데 사과는?)</button><br><br>
            <button @click="answerQuestion('T')">B &nbsp;:&nbsp; 음 알겠어 기다리고 있을게!(이유가 타당하군)</button>
          </div>
          <div v-else-if="currentQuestionIndex==2" >
            <img src="../assets/MBTI/T,F/3.png" height="500" class="img_3"/>
            <br><br>
            <button @click="answerQuestion('T')">A &nbsp;:&nbsp; 고마워 다음엔 더 열심히 해야겠어</button><br><br>
            <button @click="answerQuestion('F')">B &nbsp;:&nbsp; 내가 몰라서 물어?ㅠㅠ 일단 위로해달라고</button>
          </div>
          <div v-else-if="currentQuestionIndex==3" >
            <img src="../assets/MBTI/T,F/4.png" height="500">
            <br><br>
            <button @click="answerQuestion('T')">A &nbsp;:&nbsp; 그래? 꿈해몽 한 번 찾아보자</button><br><br>
            <button @click="answerQuestion('F')">B &nbsp;:&nbsp; 헐 무서웠겠다 나였으면 바로 기절했을듯..</button>
          </div>
          <div v-else-if="currentQuestionIndex==4" >
            <img src="../assets/MBTI/T,F/5.png" height="500">
            <br><br>
            <button @click="answerQuestion('T')">A &nbsp;:&nbsp; 원래 반대인 성향의 사람이 잘 맞대!(살짝 상처)</button><br><br>
            <button @click="answerQuestion('F')">B &nbsp;:&nbsp; 그럴 수 있지. 사람은 다 다르니까</button>
          </div>
          <div v-else-if="currentQuestionIndex==5" >
            <img src="../assets/MBTI/E,I/1.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 어느 정도 친한 친구도 초대 가능</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 찐친 몇 명만 초대 가능</button>
          </div>
          <div v-else-if="currentQuestionIndex==6" >
            <img src="../assets/MBTI/E,I/2.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 당연히 되지! 오늘부터 너도 내 친구다.</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 어어..?(안돼. 절대 싫어)</button>
          </div>
          <div v-else-if="currentQuestionIndex==7" >
            <img src="../assets/MBTI/E,I/3.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 초면에 여기저기 말 걸었더니 어느새 주위에 사람들로 둘러 쌓여짐</button><br><br>
            <button @click="answerQuestion('E')">B &nbsp;:&nbsp; 옆자리에 앉은 친구한테 먼저 인사하면서 대화 주도한다.</button><br><br>
            <button @click="answerQuestion('I')">C &nbsp;:&nbsp; 누구한테 말 걸어야할지 눈치본다.</button><br><br>
            <button @click="answerQuestion('I')">D &nbsp;:&nbsp; 누구가가 말 걸어 주길 기다려본다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==8" >
            <img src="../assets/MBTI/E,I/4.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 평일엔 회사(실내)였으니, 주말엔 밖에 나가야한다.</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 평일엔 회사(집 밖)였으니, 주말엔 집에 있어야한다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==9" >
            <img src="../assets/MBTI/E,I/5.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 이게 바로 창살 없는 감옥..?</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 합법적 약속 취소 가능ㅋ 오히려 좋아</button>
          </div>
          <div v-else-if="currentQuestionIndex==10" >
            <img src="../assets/MBTI/E,I/6.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 지칠 땐 나가서 놀아야지! 가자!</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 무슨 소리야.. 힘들어 집 갈래</button>
          </div>
          <div v-else-if="currentQuestionIndex==11" >
            <img src="../assets/MBTI/E,I/7.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 집에 있어도 카톡 칼답. 카톡으로 부족할 땐 통화도 함</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 카톡와도 흐린눈하고 내 취미 즐기기 </button>
          </div>
          <div v-else-if="currentQuestionIndex==12" >
            <img src="../assets/MBTI/E,I/8.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 말을 하는 편</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 얘기를 듣는 편</button>
          </div>
          <div v-else-if="currentQuestionIndex==13" >
            <img src="../assets/MBTI/E,I/9.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('E')">A &nbsp;:&nbsp; 와 대박..안 더운가? 육성으로 놀란다</button><br><br>
            <button @click="answerQuestion('I')">B &nbsp;:&nbsp; 와 대박..안 더운가? 속으로 생각한다</button>
          </div>
          <div v-else-if="currentQuestionIndex==14" >
            <img src="../assets/MBTI/S,N/1.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 방이 넓고 햇빛 잘 들어. 주변 분위기도 좋아 <br> 전체적인 느낌 위주로 설명</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 1년 된 신축이라 깨끗하고, 역까지 5분 걸림<br> 상세한 사항 위주로 설명</button>
          </div>
          <div v-else-if="currentQuestionIndex==15" >
            <img src="../assets/MBTI/S,N/2.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 대충 이 정도면 되겠지?<br>나의 감을 믿고 요리한다.</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 물 500ml, 설탕 큰 숟가락으로 두스폰..<br>정확한 계량 방법으로 요리한다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==16" >
            <img src="../assets/MBTI/S,N/3.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 내가 느낀 감상평을 남긴다.</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 줄거리를 나열하고 재미 있다/없다로 적는다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==17" >
            <img src="../assets/MBTI/S,N/4.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 내 나름대로 다음 내용을 <br> 생각해보는 재미가 있다.</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 해석은 찾아보겠지만, <br> 그냥 꽉 닫힌 결말이었으면 좋겠음</button>
          </div>
          <div v-else-if="currentQuestionIndex==18" >
            <img src="../assets/MBTI/S,N/5.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 추가 질문하면서 진지하게 고민함</button><br><br>
            <button @click="answerQuestion('N')">B &nbsp;:&nbsp; 토론으로 이어짐</button><br><br>
            <button @click="answerQuestion('S')">C &nbsp;:&nbsp; 가능/불가능으로 대답함</button><br><br>
            <button @click="answerQuestion('S')">D &nbsp;:&nbsp; 속으로 이런거 왜 하나 싶음</button>
          </div>
          <div v-else-if="currentQuestionIndex==19" >
            <img src="../assets/MBTI/S,N/6.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 머릿속에 온갖 상상이 다 됨</button><br><br>
            <button @click="answerQuestion('N')">B &nbsp;:&nbsp; 과거 일이 떠오르고 미래에 대한 고민이 시작 됨</button><br><br>
            <button @click="answerQuestion('S')">C &nbsp;:&nbsp; 내일 뭐 먹을지, 옷 뭐 입을지 생각함</button><br><br>
            <button @click="answerQuestion('S')">D &nbsp;:&nbsp; 멍 때리다가 잠에 듦</button>
          </div>
          <div v-else-if="currentQuestionIndex==20" >
            <img src="../assets/MBTI/S,N/7.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 벌써 봄이네 연애의 계절이 왔다..</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 와 이쁘다 많이 폈네</button>
          </div>
          <div v-else-if="currentQuestionIndex==21" >
            <img src="../assets/MBTI/S,N/8.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 이해되어야 받아들일 수 있음</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 일단 외워</button>
          </div>
          <div v-else-if="currentQuestionIndex==22" >
            <img src="../assets/MBTI/S,N/9.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('N')">A &nbsp;:&nbsp; 내 직감을 믿고 구매한다</button><br><br>
            <button @click="answerQuestion('S')">B &nbsp;:&nbsp; 사람들의 의견에 따라 구매하지 않는다</button>
          </div>
          <div v-else-if="currentQuestionIndex==23" >
            <img src="../assets/MBTI/P,J/1.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('P')">A &nbsp;:&nbsp; 사고 싶었던 것들 먼저 결제한뒤,<br>생활비를 계획한다. </button><br><br>
            <button @click="answerQuestion('J')">B &nbsp;:&nbsp; 일단 생활비를 먼저 빼두고, 사고 싶었던 것들을 산다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==24" >
            <img src="../assets/MBTI/P,J/2.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('J')">A &nbsp;:&nbsp; 입장 직전에 QR코드를 미리 다 켜둔다.</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 입장하면 그제서야 QR코드를 후다닥 켠다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==25" >
            <img src="../assets/MBTI/P,J/3.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('P')">A &nbsp;:&nbsp; 헐! 대박!!! 꿀정보<br> 처음 듣는 정보는 바로 팩트체크 간다!</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 냠냠! 그래!? <br>먹던 밥 먹고 생각해본다.</button><br><br>
            <button @click="answerQuestion('J')">C &nbsp;:&nbsp; 메모장/내 카톡방에 기록해두고<br> 나중에 찾아본다.</button><br><br>
            <button @click="answerQuestion('J')">D &nbsp;:&nbsp; 일단 넘겨듣고<br> 나중에 친구한테 "그때 그거~"라며 물어본다.</button>
          </div>
          <div v-else-if="currentQuestionIndex==26" >
            <img src="../assets/MBTI/P,J/4.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('P')">A &nbsp;:&nbsp; 임시 비밀번호를 주네? 그럼 이거 쓰지 뭐</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 임시 비밀번호로 일단 로그인하고 <br>기억하기 편한 걸로 바로 변경한다.</button><br><br>
            <button @click="answerQuestion('J')">C &nbsp;:&nbsp; 음.. 일단 오늘은 그냥 쓰고<br>다음에 변경하자!</button><br><br>
            <button @click="answerQuestion('J')">D &nbsp;:&nbsp; 헉 이게 무슨 일이야..<br> 바로 2차 비밀번호까지 강화한다.</button>
          </div>
          
          <div v-else-if="currentQuestionIndex==27" >
            <img src="../assets/MBTI/P,J/5.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('P')">A &nbsp;:&nbsp; 기존 인증서를 갱신한다</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 가장 빨리 만들 수 있는 인증서를 발급받는다</button><br><br>
            <button @click="answerQuestion('J')">C &nbsp;:&nbsp; 그래도 인증서인데.. <br>가장 안전해보이는 인증서를 알아본다</button><br><br>
            <button @click="answerQuestion('J')">D &nbsp;:&nbsp; 내일 동사무소가서 뽑으면 안 되냐고 여쭤본다</button>
          </div>
          <div v-else-if="currentQuestionIndex==28" >
            <img src="../assets/MBTI/P,J/6.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('J')">A &nbsp;:&nbsp; 미리 정해놓은 리스트 위주로 찾아본다.</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 둘러보다가 내 맘에 꽂히는 걸로 결정!</button>
          </div>
          <div v-else-if="currentQuestionIndex==29" >
            <img src="../assets/MBTI/P,J/7.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('P')">A &nbsp;:&nbsp; 어플 깔면 한방에 해결되네? 그냥 깔아볼까?</button><br><br>
            <button @click="answerQuestion('J')">B &nbsp;:&nbsp; 그냥 하던 대로 SMS인증으로 해야지~</button>
          </div>
          <div v-else-if="currentQuestionIndex==30" >
            <img src="../assets/MBTI/P,J/8.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('J')">A &nbsp;:&nbsp; 본인인증 문자는 바로 확인하거나 <br> 확인 끝나면 지운다.</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 본인인증 문자는 미리보기로 보고 쌓아둔다. <br>벌써 NNN개..</button>
          </div>
          <div v-else-if="currentQuestionIndex==31" >
            <img src="../assets/MBTI/P,J/9.jpg" height="500">
            <br><br>
            <button @click="answerQuestion('J')">A &nbsp;:&nbsp; 계획을 다 못 지키다니..<br> 마음 한 켠이 찜찜하다.</button><br><br>
            <button @click="answerQuestion('P')">B &nbsp;:&nbsp; 내일 하면 되지!<br> 큰 신경 안 쓰고 잠든다.</button>
          </div>
          

          

        </div>
      </div>
      <div v-else>
        <h3>당신의 MBTI 유형: {{ mbtiType }}</h3><br>

      <div v-if=" mbtiType  == 'ENTP'">
        <img src="../assets/MBTI/분석가형.png" style="max-width: 1500px;"><br><br>
        <h2>"뜨거운 논쟁을 즐기는 변론가"</h2>
        <p>지적인 도전을 두려워하지 않는 똑똑한 호기심형</p>
      </div>

      <div v-else-if=" mbtiType  == 'ENTJ'">
        <h2>"대담한 통솔자"</h2>
        <p>대담하면서도 상상력이 풍부한 강한의지의 소유자로 다양한 방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는 리더형 </p>
        <img src="../assets/MBTI/분석가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'INTP'">
        <h2>"논리적인 사색가"</h2>
        <p>끊임없이 새로운 지식에 목말라 하는 혁신가형 </p>
        <img src="../assets/MBTI/분석가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'INTJ'">
        <h2>"용의주도한 전략가"</h2>
        <p>상상력이 풍부하며 철두철미한 계획을 세우는 전략가형 </p>
        <img src="../assets/MBTI/분석가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ENFP'">
        <h2>"정의로운 사회운동가"</h2>
        <p>창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기 좋아하는 넘치는 열정의 소유자 </p>
        <img src="../assets/MBTI/외교관형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ENFJ'">
        <h2>"정의로운 사회운동가"</h2>
        <p>넘치는 카리스마와 영향력으로 청중을 압도하는 리더형 </p>
        <img src="../assets/MBTI/외교관형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'INFP'">
        <h2>"열정적인 중재자"</h2>
        <p>상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형 </p>
        <img src="../assets/MBTI/외교관형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'INFJ'">
        <h2>"정의로운 사회운동가"</h2>
        <p>조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자 </p>
        <img src="../assets/MBTI/외교관형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ESFJ'">
        <h2>"사교적인 외교관"</h2>
        <p>타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형 </p>
        <img src="../assets/MBTI/관리자형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ESTJ'">
        <h2>"엄격한 관리자"</h2>
        <p>사물이나 사람을 관리하는데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형 </p>
        <img src="../assets/MBTI/관리자형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ISFJ'">
        <h2>"용감한 수호자"</h2>
        <p>소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형 </p>
        <img src="../assets/MBTI/관리자형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ISTJ'">
        <h2>"사교적인 외교관"</h2>
        <p>사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형 </p>
        <img src="../assets/MBTI/관리자형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ESFP'">
        <h2>"자유로운 영혼의 연예인"</h2>
        <p>주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형</p>
        <img src="../assets/MBTI/탐험가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ESTP'">
        <h2>"모험을 즐기는 사업가"</h2>
        <p>벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형 </p>
        <img src="../assets/MBTI/탐험가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ISFP'">
        <h2>"호기심 많은 예술가"</h2>
        <p>항시 새로운 것을 찾아 시도하고나 도전할 준비가 되어 있는 융퉁성있는 성격의 매력넘치는 예술가형 </p>
        <img src="../assets/MBTI/탐험가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <div v-else-if=" mbtiType  == 'ISTP'">
        <h2>"만능 재주꾼"</h2>
        <p>대담하고 현실적인 성향으로 다양한 ㄷ구 사용에 능숙한 탐험형 </p>
        <img src="../assets/MBTI/탐험가형.png" style="max-width: 1500px;"><br><br>
      </div>

      <button @click="goToDetail(mbtiType)">{{ mbtiType }}에 맞는 추천 기업 보러가기</button><br>

    </div><br><br>
      

      

      
    </div>
</template>
<style scoped>
.img_3 {
  padding: 0 0 0 12rem;
}
</style>

<script>
export default {
  data () {
    return {
      currentQuestionIndex: 0,
      answers: '',
      mbtiType: '',
      
    }
  },
  methods: {
    answerQuestion (answer) {
      this.answers += answer
      this.currentQuestionIndex++
      this.calculateMBTI()
    },
    calculateMBTI () {
      // 예시 계산, 필요에 맞게 수정하세요
      const totalT = (this.answers.match(/T/g) || []).length
      const totalF = (this.answers.match(/F/g) || []).length
      const totalE = (this.answers.match(/E/g) || []).length
      const totalI = (this.answers.match(/I/g) || []).length
      const totalS = (this.answers.match(/S/g) || []).length
      const totalN = (this.answers.match(/N/g) || []).length
      const totalP = (this.answers.match(/P/g) || []).length
      const totalJ = (this.answers.match(/J/g) || []).length
      const mbtiType = totalT > totalF ? 'T' : 'F' // 예시 로직, 필요에 따라 수정하세요
      const mbtiType2 = totalI> totalE ? 'I' : 'E'
      const mbtiType3 = totalS> totalN ? 'S' : 'N'
      const mbtiType4 = totalJ> totalP ? 'J' : 'P'

      this.mbtiType = mbtiType2 + mbtiType3 + mbtiType + mbtiType4
      if(this.mbtiType == 'ENTP'){
        console.log('엔팁')
      }
      // console.log('totalT : ', totalT)
      // console.log('totalF : ', totalF)
    },

    goToDetail(mbti){
      this.$router.push({
        name: 'AppMbtiList',
        params:{
          mbti: mbti
        }
    })
    }
  }

}
</script>

<style>
button {
  padding: 10px 15px;
  background-color: #3273dc;
  color: #fff;
  border: 3px;
  border-radius: 12px;
  cursor: pointer;
  border-style:double;
  border-color: rgb(83, 223, 244);

  font-weight: 500;
}







</style>
