<template>
  
  <Header></Header>
  

  <div class="container is-fluid" >
    <div class="section" ref="section1" :style="{ backgroundImage: `url(${require('@/assets/1.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <!-- <img src="@/assets/mainP-1.png"> -->
      
    </div>
    <div class="section" ref="section2" :style="{ backgroundImage: `url(${require('@/assets/2.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    </div>
    <div class="section" ref="section3" :style="{ backgroundImage: `url(${require('@/assets/3.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <router-link to="/interview" class="button" style="position:absolute; top: 700px; right: 200px;">추천회사보기</router-link>
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

.button {
  background-color: #bbd0e7;
  color: #fff;
  padding: 30px 50px;
  border: solid rgb(142, 163, 207);
  border-radius: 15px;
  cursor: pointer;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
}
</style>