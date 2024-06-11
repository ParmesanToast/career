<template>
<Header/>
    <div>
      
      <h2 style="font-weight: 800; font-size: 40px;">MBTI 유형: {{ mbti }}</h2>
      <div v-if="mbti === 'ENTP'">
        <div class="container">
            <ul class="companyList">
        <p>"어려울 때 자극 받는 스타일"</p>
        <li>
        <img src="../assets/logo/s-oil.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> S-Oil</p>
          <p><a href="https://www.s-oil.com/en/images/company/ci_img_01.png"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('에쓰오일')">S-Oil면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://infra1-static.recruiter.co.kr/builder/2023/10/03/b4bcfd17-4a10-4554-abd2-77bc7d99abe0.png'" alt="samsungLogo" class="logo" style="position: relative; top: 25px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 현대위아</p>
          <p><a href="https://hyundai-wia.recruiter.co.kr/career/home"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('현대위아')">현대위아면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/DBHiTek.gif" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> DB하이텍</p>
          <p><a href="https://dbhitek-recruit.com/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('DB하이텍')">DB하이텍면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/신영증권.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 신영증권</p>
          <p><a href="https://www.shinyoung.com/?page=10050"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('신영증권')">신영증권면접 예상질문과 답변보기</button></div>
      </li>
         </ul>
      </div>
  </div>

    <div v-else-if="mbti === 'ENFJ'">
        <div class="container">
            <ul class="companyList">
        <p>"틀에 박힌 역할은 거부한다"</p>
        <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coupang_logo.svg/2560px-Coupang_logo.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 쿠팡</p>
          <p><a href="https://www.coupang.jobs/kr/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('쿠팡')">COUPANG면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 버킷플레이스</p>
          <p><a href="https://www.bucketplace.com/careers/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('버킷플레이스')">버킷플레이스면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.bithumbcorp.com/image/pc/ko/common/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 빗썸코리아</p>
          <p><a href="https://bithumb.oopy.io/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('빗썸코리아')">빗썸코리아면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ENFP'">
        <div class="container">   
            <ul class="companyList">
        <p>"규칙이 없음이 규칙"</p>
        <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kakao_CI_yellow.svg/440px-Kakao_CI_yellow.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 카카오</p>
          <p><a href="https://careers.kakao.com/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('카카오')">카카오면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/ncsoft.png" alt="samsungLogo" class="logo" style="position: relative; top: 15px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> NC소프트</p>
          <p><a href="https://careers.ncsoft.com/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('NC 소프트')">NC소프트면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/DaangnMarket_logo.png/240px-DaangnMarket_logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 당근마켓</p>
          <p><a href="https://about.daangn.com/jobs/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('당근마켓')">당근마켓면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/2560px-Naver_Logotype.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 네이버</p>
          <p><a href="https://recruit.navercorp.com/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('네이버')">네이버면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ENTJ'">
        <div class="container">
            <ul class="companyList">
        <p>"성격급한 모험가들의 모임"</p>
        <li>
        <img src="../assets/logo/삼성sds.png" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼성SDS</p>
          <p><a href="https://www.samsungsds.com/kr/careers/overview/about_care_over.html"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('삼성 SDS')">삼성SDS면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/kcc.png" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> KCC</p>
          <p><a href="https://recruit.kccworld.co.kr/recruit/recruitMain.do?SiteType=A"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('KCC')">KCC면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/lg유플러스.png" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> LG유플러스</p>
          <p><a href="https://www.lguplus.com/about/ko/career/human-resources?TYPE=SUB"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('LG유플러스')">LG유플러스면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/롯데손해보험.png" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 롯데손해보험</p>
          <p><a href="https://lotteins.recruiter.co.kr/appsite/company/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('롯데 손해보험')">롯데손해보험면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.samsungsecurities.co.kr/kor/img/com/logo-a.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼성증권</p>
          <p><a href="https://www.samsungsecurities.co.kr/kor/recruit/new_employee.do"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('삼성증권')">삼성증권면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ESFJ'">
        <div class="container">
            <ul class="companyList">
        <p>"그럴 수도 있지 뭐" 쿨내 진동</p>
        <li>
        <img :src="'https://www.hotelshilla.net/images/kr/common/logo.gif'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 호텔신라</p>
          <p><a href="https://www.hotelshilla.net/navigate.do?HPPageId=AVEUlwyIAKACZlq7&HPSiteCd=H"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('호텔신라')">호텔신라면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png'" alt="samsungLogo" class="logo" style="position: relative; top: 15px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> CGV</p>
          <p><a href="https://recruit.cj.net/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('CGV')">CGV면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://stimg.emart.com/store/images/new/common/gnb01.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 이마트</p>
          <p><a href="https://company.emart.com/ko/recruit/recruit_process.do"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('이마트')">이마트면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://recruit.sbs.co.kr/images/php2UY2m7/logo.png/mgr/template/image/994'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> SBS</p>
          <p><a href="https://recruit.sbs.co.kr/main/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('SBS')">SBS면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://recruit.ehyundai.com/images/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한섬</p>
          <p><a href="https://recruit.ehyundai.com/recruit-info/announcement/list.nhd"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한섬')">한섬면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/제일기획.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 제일기획</p>
          <p><a href="https://www.samsungcareers.com/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('제일기획')">제일기획면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ESFP'">
        <div class="container">
            <ul class="companyList">
        <p>"회사는 사람이 제일 중요"</p>
        <li>
        <img :src="'https://koreanair.recruiter.co.kr/upload/338538/site/logo/202212/aaea4f6a-de1f-47da-ae04-8e2237315497.png'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 대한항공</p>
          <p><a href="https://koreanair.recruiter.co.kr/app/jobnotice/list"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('대한항공')">대한항공면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/기아자동차.png" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 기아자동차</p>
          <p><a href="https://career.kia.com/main/main.kc"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('기아자동차')">기아자동차면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.hansolhomedeco.co.kr/img/sub/comp0104_img01.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한솔홈데코</p>
          <p><a href="https://www.hansolhomedeco.co.kr/home/company/comp03_03.jsp"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한솔홈데코')">한솔홈데코면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ESTJ'">
        <div class="container">
            <ul class="companyList">
        <p>"돌다리도 두들기고 본다"</p>
        <li>
        <img :src="'https://job.shinsegae.com/img/icon/img_logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 신세계</p>
          <p><a href="https://job.shinsegae.com/recruit_info/notice/notice01_list.jsp"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('신세계')">신세계면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.daekyo.com/static/img/common/logo.webp'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 대교</p>
          <p><a href="https://www.daekyo.com/kr/model_staff"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('대교')">대교면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.samsunglife.com/assets/img/img-ci-samsung.8192a03b.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼성생명보험</p>
          <p><a href="https://www.samsunglife.com/individual/display/employ/PDK-HRCAI016160M"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('삼성생명보험')">삼성생명보험면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://recruit.ehyundai.com/images/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 현대백화점</p>
          <p><a href="https://www.samsunglife.com/individual/display/employ/PDK-HRCAI016160M"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('현대백화점')">현대백화점면접 예상질문과 답변보기</button></div>
      </li>
        <li>
        <img src="../assets/logo/에스원.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 에스원</p>
          <p><a href="https://www.s1.co.kr/company/recruit/employee/guide"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('에스원')">에스원면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://thinkbig.recruiter.co.kr/upload/183142/image/202103/9e677b48-208c-4c32-b501-b856c4f5b4e4.png'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 웅진씽크백</p>
          <p><a href="https://thinkbig.recruiter.co.kr/appsite/company/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('웅진씽크백')">웅진씽크백면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ESTP'">
        <div class="container">
            <ul class="companyList">
        <p>"눈앞에 닥친 문제해결력 최강"</p>
        <li>
        <img :src="'https://www.kas.co.kr/M/images/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한국공항</p>
          <p><a href="https://www.kas.co.kr/M/recruit/info.aspx"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한국공항')">한국공항면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/대덕전자.png" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 대덕전자</p>
          <p><a href="https://recruit.daeduck.com/RECRUIT/hr/rec/recruit/main/controller/candidate/MainRecruitWebController/init.hr"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('대덕전자')">대덕전자면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/퍼스텍.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 퍼스텍</p>
          <p><a href="https://www.firsteccom.co.kr/recruit_board"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('퍼스텍')">퍼스텍면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'INFJ'">
        <div class="container">
            <ul class="companyList">
        <p>"남들이 몰라줘도 내 길을 간다"</p>
        <li>
        <img src="../assets/logo/금호건설.gif" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 금호건설</p>
          <p><a href="https://kumhoenc.recruiter.co.kr/appsite/company/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('금호건설')">금호건설면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.jw-lifescience.co.kr/lifescience/ko/asset/images/logo_lifescience.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> JW생명과학</p>
          <p><a href="https://jwholdings.recruiter.co.kr/app/jobnotice/list"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('JW 생명과학')">JW생명과학면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'http://www.pharmicell.com/img/logos/logo-8.png'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 파미셀</p>
          <p><a href="https://www.jobkorea.co.kr/recruit/co_read/recruit/c/pharmicell"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('파미셀')">파미셀면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'INFP'">
        <div class="container">
            <ul class="companyList">
        <p>"더 나은 세상을 꿈꾸는 중"</p>
        <li>
        <img :src="'https://woojinplaimm.com/img/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 우진플라임</p>
          <p><a href="https://woojinplaimm.com/bbs/board.php?bo_table=recruit&me_code=4020&lang_code=ENG"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('우진플라임')">우진플라임면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'http://career.infac.com/wordpress/wp-content/uploads/2018/09/navi_logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 인팩</p>
          <p><a href="http://career.infac.com/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('인팩')">인팩면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/한신기계공업.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한신기계공업</p>
          <p><a href="https://www.dltc.co.kr/intro?introNo=4"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한신기계공업')">한신기계공업면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'INTJ'">
        <div class="container">
            <ul class="companyList">
        <p>"시장을 이끄는 선구자"</p>
        <li>
        <img :src="'https://www.dltc.co.kr/images/logo.svg'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 대림통상</p>
          <p><a href="http://www.hanshin.co.kr/korea_new/about/about02.html"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('대림통상')">대림통상면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.samil-pharm.com/assets/user/KR/img/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼일제약</p>
          <p><a href="https://www.samil-pharm.com/front/recruit/recruitNotice/KR"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('삼일제약')">삼일제약면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/한신공영.png" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한신공영</p>
          <p><a href="https://www.hanshinc.com/recruitinfo/recruit03.asp?fboard=board_recruit1&actionMode=list2&searchOpt1=&searchName=&orderby1="><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한신공영')">한신공영면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img  src="../assets/logo/핸즈코퍼레이션.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 핸즈코퍼레이션</p>
          <p><a href="https://www.handscorp.co.kr/eng/assets/page/recruit/job-bulletin.asp"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>

        </div>
        <div class="button-container">
        <button @click="goToDetail('핸즈코퍼레이션')">핸즈코퍼레이션면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'INTP'">
        <div class="container">
            <ul class="companyList">
        <p>"논리보다 육감"</p>
        <li>
        <img src="../assets/logo/노루페인트.png" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 노루페인트</p>
          <p><a href="https://nrpaint.saramin.co.kr/main/index"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('노루페인트')">노루페인트면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://img.inhr.co.kr/static/careerlink/DSGN/230809151009330qjZ.gif'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 세아특수강</p>
          <p><a href="https://seahsp.careerlink.kr/jobs"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('세아특수강')">세아특수강면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://haesung.recruiter.co.kr/upload/118596/site/logo/202201/83d981cd-91e0-4df9-8d74-eed25c59e1ba.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 해성디에스</p>
          <p><a href="https://haesung.recruiter.co.kr/app/jobnotice/list"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('해성디에스')">해성디에스면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ISFJ'">
        <div class="container">
            <ul class="companyList">
        <p>"인내심 강한 디테일리스트들"</p>
        <li>
        <img :src="'http://www.yeonghwa.co.kr/data/info/KR/site_logo1.dat'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 영화금속</p>
          <p><a href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=YkJVT2pRQTVnSFY2UnRBWmkyWU55QT09"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('영화금속')">영화금속면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ISFP'">
        <div class="container">
            <ul class="companyList">
        <p>"돈보다 사람이 중요해"</p>
        <li>
        <img :src="'http://m.monalisa.co.kr/images/inc/logo01.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 모나리자</p>
          <p><a href="http://m.monalisa.co.kr/company/index06.asp"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('모나리자')">모나리자면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ISTJ'">
        <div class="container">
            <ul class="companyList">
        <p>"우리는 하나다!"</p>
        <li>
        <img :src="'http://www.dwmic.com/img/common/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 동원금속</p>
          <p><a href="http://www.dwmic.com/recruit/recruit.html"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('동원 금속')">동원금속면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img src="../assets/logo/한일철강.png" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한일철강</p>
          <p><a href="http://www.hanilsteel.co.kr/"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한일철강')">한일철강면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>

    <div v-else-if="mbti === 'ISTP'">
        <div class="container">
            <ul class="companyList">
        <p>"원칙에 예외는 없다"</p>
        <li>
        <img :src="'https://www.hansoltechnics.com/htmls/img/logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한솔테크닉스</p>
          <p><a href="https://www.hansoltechnics.com/recruit/recruit.jsp"><strong>채용 홈페이지 바로가기&nbsp;</strong> </a> </p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한솔테크닉스')">한솔테크닉스면접 예상질문과 답변보기</button></div>
      </li>
        </ul>
      </div>
    </div>
      <!-- 다른 MBTI 유형에 대한 조건문을 추가할 수 있습니다. -->
      <div v-else>
        <p>여기는 다른 MBTI 유형에 대한 상세 정보입니다.</p>
      </div>
    </div>

<Footer/>
</template>
      
<script>
 import Header from '@/components/Header.vue'
 import Footer from '@/components/Footer.vue'

// import axios from 'axios'
  
  export default {
    name: 'AppDetail',
    
    components: {
      Header,
      Footer
    },
  
    data() {
      return {
        ans: '',
        mbti: this.$route.params.mbti,
        
        
      }
    },

    methods:{
        goToDetail(companyName) {
         
            this.$router.push({
              name: 'AppDetail',
              params: {
                company: companyName,
                field:'none',
        }})
          }
        }
    




}
</script>

<style>
    /* 컴포넌트에 대한 스타일링 */
    .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  border: 0.5px solid rgb(103, 117, 118);

}


p {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
}
a {
    font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
}


button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: solid rgb(46, 105, 234);
  border-radius: 15px;
  cursor: pointer;
}

.logo {
  float: left;
  padding-right: 50px;
  padding-bottom: 10px;
  
  margin: 10px;
  display: block;
  max-width: 150px;
  max-height: 80px;
 

  }

  .button-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}


  li {
  border: 0.5px dotted rgb(103, 117, 118); /* 테두리 스타일 및 색상 설정 */
  border-radius: 30px; /* 테두리의 모서리를 둥글게 만듭니다. */
  padding: 10px; /* 내부 여백 설정 */
  margin-bottom: 10px; /* li 태그 사이의 간격을 조정합니다. */
}

.companyList {
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>