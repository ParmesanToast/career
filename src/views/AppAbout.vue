<!-- AppAbout.vue -->
<template>
<Header/>

    <div>
      <h1>About Page</h1>
      <p>대충 소개페이지</p>
    </div>
    <button @click="logout()">test</button>

    <div>
    <div v-for="(question, index) in questions" :key="index">
      <div>{{ question.question }}</div>
      <input type="text" v-model="answers[index]">
      <button @click="submitAnswers(question.question, answers[index])">답변 제출</button>
    </div>
    <br><br>
    </div>

    
    
<Footer/>
</template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { mapState } from 'vuex';
  import { mapActions } from 'vuex';
  import axios from 'axios';

  export default {
    name: 'AppAbout',
    data(){
      return {
        company: '네이버',
        allQuestion : [],
        questions: [], // 서버로부터 받아온 질문을 저장할 배열
        answers: []
      }
      
    },

    computed: {
    ...mapState(['isAuthenticated']) // isAuthenticated 상태를 가져옴
    },

    methods:{
      ...mapActions(['logout']),
      logout() {
      localStorage.removeItem("token")
    },


    submitAnswers(question, answer){
      // const dataToSend = this.Qans.map((question, index) => ({
      //   question: question.question,
      //   answer: this.answers[index]
      // }))

      console.log("보낼데이터:", "질문: "+question, ". 답변:"+answer + ". 첨삭해줘");



    },

    },
    mounted() {
        axios
        .get("http://3.39.228.111/api/interview/info")
        .then(res=>{
            this.allQuestion = res.data
            console.log(res.data)
            this.questions = this.allQuestion.filter(q => q.companyName === this.company)
            console.log(this.questions)
            this.answers = new Array(this.questions.length).fill('')
        })
        .catch(error =>{
            console.error("Error", error);
        })
    

    },
    
    


    components: {
    Header,
    Footer
  },

  }
  </script>
  
  <style>
  /* 컴포넌트에 대한 스타일링 */
  </style>
  