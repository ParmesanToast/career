<template>
    <div id="searchresult">
      <div class="result-title">
        총 {{$store.getters.getFilteredProduct(keyword).length}}개의 상품이 검색되었습니다.
      </div>
      
      <div class="result-items">
        <div
        class="resultitem"
        :key="index"
        v-for="(product, index) in $store.getters.getFilteredProduct(keyword)"
        @click="detailshow(index)"
      >
        <div class="product-img">
          <img v-bind:src="product.productimg" />
        </div>
        <div class="product-info">
          <li class="product-info-title">{{ product.title }}</li>
          <li class="product-info-price">{{ product.price }}원</li>
        </div>
      </div>
      </div>
    </div>
  </template>
      
      <script>
     import Header from '@/components/Header.vue'
      import Footer from '@/components/Footer.vue'
    
      export default {
        name: 'AppSearch',
        
        components: {
        Header,
        Footer,
        SearchResult
      },
      data(){
        return{
            isResultShow:true,  //nav.vue에서 라우터를 이용해 보낸 파라미터로부터 데이터 받음 
            keyword: this.$route.params.keyword  //nav.vue에서 라우터를 이용해 보낸 파라미터로부터 데이터 받음 
        }
      },
      methods: {
    searchresultshow(keyword) {
        console.log('"',keyword,'"' + ' 검색')
        if (keyword !== ''){
            this.$router.push({
            name: "SearchPage",
            params: {
                keyword: this.keyword
            },
            }).catch(()=>{});
            this.isResultShow = true
        } else {
            alert('검색어를 입력해주세요!')
        }
        },
        keywordChanged() {
        this.isResultShow = false
    }
    }
}
</script>
      
      <style>
      /* 컴포넌트에 대한 스타일링 */
      </style>
      