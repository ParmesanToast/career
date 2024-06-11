<template>

      <Header></Header>
      <h1 >회사: {{ $route.params.company }}</h1>
      
     
      <div class="container" >
        
        
        <div v-for="(item, index) in Qans" :key="index">
        <div>질문 : {{ item.question }}</div>
        <input type="text" v-model="answers[index]" placeholder="답변을 입력하세요">
        <br><br>
        </div>

        <button @click="submitAnswers()">제출</button>
        <br><br>


        <div v-html="formattedAns"></div>
      </div>

      
     
      
    
      <br><br><button @click="back()" >돌아가기</button>

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
  
    data() {
      return {
        company: this.$route.params.company,
        gptresponse: null,

        allQuestion : [],
        Qans: [],
        answers: []
      }
    },
  
    computed: {
    formattedAns() {
        // 데이터를 예쁘게 포맷팅합니다.
        if (this.gptresponse) {
            const formattedText = this.gptresponse.replace(/^\{|\}$/g, '')  // 처음과 마지막 중괄호를 제거합니다.
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
        axios
        .get("http://3.39.228.111/api/interview/info")
        .then(res=>{
            this.allQuestion = res.data
            console.log(res.data)
            this.Qans = this.allQuestion.filter(q => q.companyName === this.company)
            console.log(this.Qans)
            this.answers = new Array(this.Qans.length).fill('')
        })
        .catch(error =>{
            console.error("Error", error);
        })
    },

    methods:{
      back(){
        window.history.back()
      },

      submitAnswers(){
      const dataToSend = this.Qans.map((question, index) => ({
        question: question.question,
        answer: this.answers[index]
      }))
      const combinedata = dataToSend.map(pair => `${pair.question}: ${pair.answer}`)
      console.log("보낼데이터:", combinedata);


      const payload = {
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            //content: this.company + this.field + "면접 예상질문과 모범답안 알려줘 (HTML형식으로 작성해줘)"
             content:  combinedata + "이건 면접 예상질문과 사용자 답안이야. 사용자 응답을 수정하지말고, 사용자 응답에 대해서 피드백을 해줘(HTML형식으로 응답해줘)"
          }
        ]
      };

      axios
        .post("http://3.39.228.111/api/v1/chatGpt/prompt", payload, {
          
        })
        .then(res => {
          this.gptresponse = res.data.choices[0].message.content;
          this.error = null;
          // console.log(res.data.choices[0].message.content)
          console.log(this.gptresponse)
        })
        .catch(error => {
          console.error("Error", error);
          this.error = "Failed to fetch data from the API. Please try again later.";
        });


    },

      
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
  
button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: solid rgb(46, 105, 234);
  border-radius: 15px;
  cursor: pointer;
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
.styled-textarea {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc; /* 회색 테두리 */
  border-radius: 5px; /* 둥근 모서리 */
  resize: vertical; /* 수직으로 크기 조정 가능 */
}

.styled-textarea:focus {
  border-color: #4CAF50; /* 포커스 시 초록색 테두리 */
  outline: none; /* 포커스 시 기본 아웃라인 제거 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* 포커스 시 초록색 그림자 */
}
  </style>
  