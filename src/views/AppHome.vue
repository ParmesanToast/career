<template>
  
  <Header></Header>
  

  <div class="container is-fluid" >
    <div class="section" ref="section1" style="background:linear-gradient(to left,#8AE634,#69A8AA )">
      <br>

      <p style="font-size: 20px; color: whitesmoke;"><bold>환영합니다!&nbsp; 회사별 면접 준비를 위한 완벽한 플랫폼</bold><br>

      회사에 지원하기 전에 그 회사의 면접 프로세스와 기대되는 기술적 질문을 미리 알고 싶으신가요? 면접을 준비하는 동안 불안하지 않고 자신감 있게 나아가고 싶으신가요? 그렇다면 여기, 면접 준비를 위한 모든 것을 찾을 수 있습니다.<br>

      저희 사이트는 각 회사의 면접 경험을 공유하고, 인터뷰 프로세스에 대한 인사이트를 제공합니다. 이를 통해 지원자들은 실제 인터뷰 경험을 통해 어떤 종류의 질문이 나올지 예상하고, 준비할 수 있습니다. 또한, 사용자들은 자신의 면접 경험을 공유함으로써 다른 사람들에게 도움을 줄 수 있습니다.<br>

      저희 사이트에서는 각 회사의 기술적 질문부터 문화적 맞춤법까지 모든 것을 다루고 있습니다. 회사별로 면접 프로세스가 어떻게 다른지, 어떤 기술 스택과 지식이 필요한지 등을 자세히 알아볼 수 있습니다.<br>

      회사별 면접 준비는 더 이상 불확실한 일이 아닙니다. 우리와 함께 면접에 자신감을 가지고 준비하세요!<br>
      </p>

    </div>
    
    <div class="section" ref="section2" style="background-color: plum;background: radial-gradient(circle, #98FB98	, #87F5F5);" >
      Section 2
    </div>
    <div class="section" ref="section3" id="section3" >
      Section 3
    </div>
  </div>


  <Footer></Footer>
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
  el: 'app',
  src:"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
};
</script>

<style scoped>

body{
  margin: 0;
  color: red;
}
.container{
  margin: 0;
  padding: 0;
}

.section {
  height: 100vh; /* 화면 전체 높이 */
  opacity: 0; /* 초기에는 안 보이게 설정 */
  transition: opacity 0.5s; /* 애니메이션 효과 설정 */
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  margin:auto;
  padding: 1;
  border-radius: 50px;
}

#app{
  background-color: red;
  padding: 0px;
}

.visible {
  opacity: 1; /* 화면에 나타날 때 투명도를 1로 변경하여 나타나도록 함 */
}


#section3 {
  background-color: yellowgreen; 
  background: radial-gradient(ellipse, #8FBC8F, #46D2D2);
}
</style>