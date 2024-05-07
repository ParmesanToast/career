<template>
<Header></Header>

    <div>
      <h1>Contect Page</h1>
      <p>대충 연락처</p>
    </div>

    <Footer></Footer>
  </template>
  
  <script>
 import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'AppContact',
    
    components: {
    Header,
    Footer
  },
  }
  </script>
  
  <style>
  /* 컴포넌트에 대한 스타일링 */
  </style>
  