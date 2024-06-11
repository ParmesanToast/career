<template>
  <div id="app">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <div class="container is-fluid">
      <!-- Section 1: Introduction -->
      <div class="section" ref="section1" :style="{ backgroundImage: `url(${require('@/assets/1.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
        <div class="content has-text-centered" >
          <!-- <h1>안녕하세요, 미래 개발자 여러분! 코딩네스트에서 함께 꿈을 향한 여정을 떠나보세요.</h1>
          <p>코딩네스트는 첨단 AI 기술을 기반으로 면접 준비를 돕는 혁신적인 플랫폼입니다.
          저희는 수많은 면접 데이터를 분석하여 개발된 AI 알고리즘을 통해 맞춤형 면접 연습 경험을 제공합니다. 실제 면접 상황과 유사한 환경에서 반복적인 연습을 통해 자신감과 실력을 향상시킬 수 있도록 효율적인 면접 준비를 지원합니다.
          </p> -->
        </div>
    

      <!-- Section 2: Features -->
      <div class="section" ref="section2" style="background-color: #e9e9e9;">
        <div class="content has-text-centered" style="vertical-align: middle;">
          <h2>코딩 면접? 걱정하지 마세요! <br> 코딩네스트가 든든한 조력자가 되어드릴게요</h2>
          <div class="columns">
            <div class="column">
              <div class="feature">
                <img src="../assets/icon1.png" style="max-height: 300px;">
                <h3>맞춤형 면접연습</h3>
                <p>맞춤형 면접 연습지원하는 회사 및 직무에 맞는 면접 질의와 답변을 제공하여최적화된 면접 준비를가능하게 합니다.</p>
                
              </div>
            </div>
            <!-- <div class="section" ref="section3" :style="{ backgroundImage: `url(${require('@/assets/3.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div> -->
            <div class="column">
              <div class="feature" >
                <img src="../assets/icon2.png" style="max-height: 300px;">
                <h1>다양한 면접 정보</h1>
                <p>각 회사의 면접 프로세스, 선호하는 면접 유형, 평균 면접 질문 등 유용한 면접 정보를 제공하여 전략적인 면접준비를 지원합니다.</p>
              </div>
            </div>
            <div class="column">
              <div class="feature">
                <img src="../assets/icon3.png" style="max-height: 300px;">
                <h3>지속적인 업데이트</h3>
                <p>최신 면접 트렌드와 회사 정보를 반영하여 최상의 면접 준비 환경을 제공하기 위해 지속적으로 업데이트됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Call to Action -->
       <div class="section" ref="section3" :style="{ backgroundImage: `url(${require('@/assets/3.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
        <div class="content has-text-centered">
          <h2></h2>
          <p></p>
          <router-link to="/mbti" class="button" style="top: -120px;">성격유형 검사하기</router-link>
        </div>
      </div>
    </div>

    <!-- Footer Component -->
    <Footer />

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AppHome',
  components: {
    Header,
    Footer
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 화면에 나타나는 요소의 비율
    };

    // Intersection Observer 생성
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 애니메이션 추가
          entry.target.classList.add('visible');
        } else {
          // 요소가 화면을 벗어나면 애니메이션 제거
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    // 각 섹션에 Observer 등록
    this.$refs.section1 && observer.observe(this.$refs.section1);
    this.$refs.section2 && observer.observe(this.$refs.section2);
    this.$refs.section3 && observer.observe(this.$refs.section3);
  },
};
</script>

<style scoped>
#app {
  padding: 0px;
}

.container {
  margin: 0 auto;
  padding: 0;
}

.section {
  height: 100vh; /* 화면 전체 높이 */
  opacity: 0; /* 초기에는 안 보이게 설정 */
  transition: opacity 0.5s; /* 애니메이션 효과 설정 */
  width: 100%;
  margin: auto;
  padding: 1rem;
  border-radius: 50px;
  
}
img{
  margin: 20px;
}

.visible {
  opacity: 1; /* 화면에 나타날 때 투명도를 1로 변경하여 나타나도록 함 */
}

.button {
  background-color: #3273dc;
  color: #fff;
  padding: 30px 50px;
  border: solid rgb(142, 163, 207);
  border-radius: 15px;
  cursor: pointer;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
  
}

.feature{
  background-color:rgb(191, 203, 229);
  border-radius: 50px;
  padding-bottom: auto;
  
}

p{
  font-size: 20px;
  margin: 20px;
}
</style>
