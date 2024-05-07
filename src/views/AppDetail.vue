<template>
    <Header></Header>
    <p>회사: {{ $route.params.company }}</p>
    <p>관심 분야: {{ $route.params.field }}</p>
    <div class="content">
        <div v-html="formattedAns"></div>
    </div>


    <button class="back-button">
      <a href="/interview" class="navbar-item">돌아가기</a>
    </button>
    <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name: 'AppDetail',
    
    components: {
        Header,
        Footer
    },

    data(){
        return {
            ans: '',
        }
    },

    computed: {
        formattedAns() {
            // 데이터를 예쁘게 포맷팅합니다.
            const formattedText = this.ans.replace(/^\{|\}$/g, '')  // 처음과 마지막 중괄호를 제거합니다.
                                           .replace(/\*\*(.*?)\*\*/g, '$1')
                                           .replace(/\/\//g, '')
                                           
                                           .replace(/\/\/(.*?)\//g, '$1');
            return formattedText.replace(/\n/g, '<br>'); // 줄 바꿈을 <br> 태그로 변환합니다.
        }
    },

    methods:{
    
    },
    mounted(){
        axios
        .get("https://f8d18dba-7677-44e0-bf9d-0f0641e326f8.mock.pstmn.io/list")
        .then(res=> {
            // 데이터를 ans에 할당합니다.
            this.ans = res.data;
            console.log(res)
        }).catch(error => {
            console.error("Error", error);
        })
    }
}
</script>

<style scoped>
/* 컴포넌트에 대한 스타일링 */
.content {
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
}
</style>
