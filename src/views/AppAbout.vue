<!-- AppAbout.vue -->
<template>
<Header/>

    <div>
      <h1>About Page</h1>
      <p>대충 소개페이지</p>
    </div>

<Footer/>
</template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'AppAbout',
    
    components: {
    Header,
    Footer
  },
    el: 'app',
    src:"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
  }
  </script>
  
  <style>
  /* 컴포넌트에 대한 스타일링 */
  </style>
  