<template>
    <div>
      <Header></Header>
      <h1 >회사: {{ $route.params.company }}</h1>
      <h1>관심 분야: {{ $route.params.field }}</h1>
      <div class="container" >
        <div v-html="formattedAns"></div>
      </div>

      <button class="back-button">
        <a href="/interview" class="navbar-item">돌아가기</a>
      </button>
      <Footer></Footer>
    </div>
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
  
    data() {
      return {
        ans: '',
        company: this.$route.params.company,
        field: this.$route.params.field,
      }
    },
  
    computed: {
    formattedAns() {
        // 데이터를 예쁘게 포맷팅합니다.
        if (this.ans) {
            const formattedText = this.ans.replace(/^\{|\}$/g, '')  // 처음과 마지막 중괄호를 제거합니다.
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\/\//g, '')
                                        .replace(/\/\/(.*?)\//g, '$1')
                                        .replace(/\n\n/g, '<p>')  // 두 개의 줄 바꿈을 <p>로 변환
                                        .replace(/\n/g, '<br>');  // 한 개의 줄 바꿈을 <br>로 변환
            return formattedText;
        } else {
            return '';
        }
    }
},
  
    mounted() {
    //   const payload = {
    //     model: "gpt-3.5-turbo-16k",
    //     messages: [
    //       {
    //         role: "user",
    //         content: this.company + this.field + "면접 예상질문과 모범답안 알려줘 (HTML형식으로 작성해줘)"
    //         // content: "plz tell me SK Interview Tips"
    //       }
    //     ]
    //   };

    //   axios
    //     .post("http://13.124.111.106/api/v1/chatGpt/prompt", payload, {
          
    //     })
    //     .then(res => {
    //       this.ans = res.data.choices[0].message.content;
    //       this.error = null;
    //       console.log(res.data.choices[0].message.content)
    //     })
    //     .catch(error => {
    //       console.error("Error", error);
    //       this.error = "Failed to fetch data from the API. Please try again later.";
    //     });

        axios
        .get("https://f8d18dba-7677-44e0-bf9d-0f0641e326f8.mock.pstmn.io/list/")
        .then(res=>{
            this.ans = res.data
            console.log(res.data)
        })
        .catch(error =>{
            console.error("Error", error);
        })
    

    }
}
</script>
  
  <style scoped>
  /* 컴포넌트에 대한 스타일링 */
  .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  border: 0.5px solid rgb(189, 213, 215);
  font-size: 20px;

}
.h1{
  font-weight: bold;
}
  
  .back-button {
    margin-top: 20px;
  }
  
  .back-button a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
  }
  
  .back-button a:hover {
    background-color: #0056b3;
  }

  .content{
    padding: 20px;
  }

  .container .p{
    font-size: 10px;
    color: #007bff;
  }

.body{
    padding-left: 10px;
}
  </style>
  