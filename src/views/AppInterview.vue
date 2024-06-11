<template>
    <Header></Header>
 
  <div class="container">
    <ul class="companyList">
      <li>
        <img :src="'https://www.sk.co.kr/lib/images/desktop/logo.png'" alt="skLogo" class="logo" style="position: relative; top: 15px; ">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> SK</p>
          <p><strong>창업가 :&nbsp;</strong> 최종건</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('SK')">SK면접 예상질문과 답변보기</button></div>
      </li>
      
      <li>
        <img :src="'https://www.samsung.com/sec/static/_images/gnb/logo-gnb.svg'" alt="samsungLogo" class="logo" style="position: relative; top: 35px; ">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼성</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('SAMSUNG')">SAMSUNG면접 예상질문과 답변보기</button></div>
      </li>

      <li>
        <img :src="'https://i.namu.wiki/i/lku8yP05WBzxHSq95G_lkk_BjXShwWh41RSpSBpbSaqUWD53o_YcbcchVi3ztuVGBCm0fosSMRK3q8xyNzllKg.svg'" alt="LGLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 엘지</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('LG')">LG면접 예상질문과 답변보기</button></div>
      </li>

      <li>
        <img :src="'https://m.hanwhacorp.co.kr/_resource/hanwha/images/ci_concept.png'" alt="samsungLogo" class="logo" style="position: relative; top: 8px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 한화</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('한화')">HANHWA면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/2560px-Naver_Logotype.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 28px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 네이버</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('네이버')">NAVER면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kakao_CI_yellow.svg/440px-Kakao_CI_yellow.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 카카오</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('카카오')">KAKAO면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/800px-LINE_logo.svg.png'" alt="samsungLogo" class="logo"  style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 라인</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('라인')">LINE면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coupang_logo.svg/2560px-Coupang_logo.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 쿠팡</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('쿠팡')">COUPANG면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://cdn.pressman.kr/news/photo/202010/34058_21537_1818.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px; ">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 배달의 민족</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('배달의민족')">BAEMIN면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/DaangnMarket_logo.png/240px-DaangnMarket_logo.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 당근</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('당근마켓')">DAANGN면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Toss-logo.svg/2560px-Toss-logo.svg.png'" alt="samsungLogo" class="logo" style="position: relative; top: 25px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 토스</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('토스')">TOSS면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://s.zigbang.com/v1/web/common/new/zigbangWeb_horizontal_on-line_new.png'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 직방</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('직방')">ZIGBANG면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://daoift3qrrnil.cloudfront.net/employment_companies/images/000/089/081/original/_EC_95_BC_EB_86_80_EC_9E_90__ED_94_84_EB_A1_9C_ED_95_84.png?1698372693'" alt="samsungLogo" class="logo" style="position: relative; top: 8px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 야놀자</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('야놀자')">YANOLJA면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://assets-global.website-files.com/6237fca0466ffd9274a1dbdd/6544ad7675a308ab53b4c354_Moloco_logo_Horiz_Primary%201.webp'" alt="samsungLogo" class="logo" style="position: relative; top: 20px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 몰로코</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('몰로코')">MOLOCO면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://media.licdn.com/dms/image/C510BAQEcBzvlhAv6VQ/company-logo_200_200/0/1630575683377/dunamu_logo?e=2147483647&v=beta&t=nINRKC0M_GWZbDSOUnQdaypmJNh4ZUy478a5g9mSa7E'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 두나무</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('두나무')">DUNAMU면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://grepp-programmers.s3.amazonaws.com/production/company/logo/3417/Sendbird_Symbol_RGB.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 센드버드</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('샌드버그')">SANDBURG면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://dffoxz5he03rp.cloudfront.net/icons/logo_mrt_v2_web.svg'" alt="samsungLogo" class="logo" style="position: relative; top: 30px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 마이리얼트립</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('마이리얼트립')">MYREALTRIP면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5SzYpZ_oSzwvQYehPvOqs4Uj7KIUI-QRT5qXLHKZrQ&s'" alt="samsungLogo" class="logo" style="position: relative; top: 5px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 에이블리코퍼레이션</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('에이블리')">ABLY면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.theteams.kr/includes/uploads/company_profile/3883840fa797131ad07e3d5cdfdeb18e20210624162049_nail.jpg'" alt="samsungLogo" class="logo" style="position: relative; top: 5px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 그린랩스</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
        <button @click="goToDetail('그린랩스')">GREENLABS면접 예상질문과 답변보기</button></div>
      </li>
      <li>
        <img :src="'https://www.wanted.co.kr/brandcenter/assets/img/logo/1/pc/1-1.png'" alt="samsungLogo" class="logo" style="position: relative; top: 10px;">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 윈티드랩</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <div class="button-container">
          <button @click="goToDetail('원티드랩')">WANTEDLAB면접 예상질문과 답변보기</button>
        </div>
      </li>
    </ul>
  </div>
  


        <Footer></Footer>
      </template>
      
      <script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    

    //import axios from"axios"
      export default {
        name: 'AppInterview',
        
        components: {
        Header,
        Footer
      },

      

      data(){
        return{
            data:"null",
            mUsers:[],
            
        };
      },

      mounted(){
        
      },

      methods:{

        goToDetail(companyName) {
          
            this.$router.push({
              name: 'AppDetail',
              params: {
                company: companyName,
                
              }
            });
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

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: solid rgb(46, 105, 234);
  border-radius: 15px;
  cursor: pointer;
}

/* 여기서부터 진짜 */
.logo {
  float: left;
  padding-right: 50px;
  padding-bottom: 10px;
  
  margin: 10px;
  display: block;
  max-width: 150px;
  max-height: 80px;
 

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


.radio {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.radio input[type="radio"] {
  margin-right: 10px;
}
.radio-text {
  font-size: 20px;
  margin-right: 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.control {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>
    