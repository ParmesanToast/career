<!-- AppAbout.vue -->

<template>
    <div class="container" :class="{ active: isSignUp }">
      <div class="form-container sign-up" v-if="isSignUp">
        <!-- 회원가입 -->
        <form @submit.prevent="register">
          <h1>회원가입</h1>
          <!-- <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
          </div> -->
          <span>이름과 로그인시 사용할 이메일과 비밀번호를 입력해주세요</span>
          <input type="text" placeholder="ID" v-model="regmemid">
          <input type="text" placeholder="Name" v-model="regName">
          <input type="id" placeholder="Email" v-model="regEmail">
          <!-- <sapn>이메일 인증을 진행해주세요
            <button type="submit">확인</button>
          </sapn> -->
          
          <input type="password" placeholder="Password" v-model="regPassword">
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <!-- 로그인 -->
      <div class="form-container sign-in" v-else>
        <form @submit.prevent="login()">
          <h1>로그인</h1>
          <div class="social-icons">
            <!-- <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a> -->
          </div>
          <span>ID와 비밀번호를 입력해주세요</span>
          <input type="id" placeholder="ID" v-model.trim="loginid" ref="id">
          <input type="password" placeholder="Password" v-model.trim="loginPassword" ref="password">
          <a href="#">비밀번호를 잊으셨나요?</a>
          <button>로그인</button>
        </form>
      </div>
<!-- 토글컨테이너 -->
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>환영합니다!</h1>
            <p>회원이 아니신가요? 지금 가입하세요!</p>
            <button class="hidden" @click="toggleSignUp">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>반갑습니다!</h1>
            <p>저희 사이트를 이용하시려면 로그인을 진행해주세요!</p>
            <button class="hidden" @click="toggleSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <button class="back-button">
      <a href="/" class="navbar-item">돌아가기</a>
    </button>
    <!-- <button @click="postTest">테스트</button> -->
  </template>
  
  <script>
  import axios from "axios";
 // import { mapActions } from 'vuex';
  import apiClient from '@/utils/api'

  export default {
    name: 'UserLogin',

    data() {
      return {
        isSignUp: false,
        Name: "",
        Email: "",
        Password: "",
        memberId:"",
        loginid: "",
        loginPassword: "",
      };
    },
    

    methods: {

         // ...mapActions(['login']),
        async login () {
          try {
            const response = await apiClient.post('/login', {
              memberId: this.loginid,
              password: this.loginPassword
            })
            const token = response.data.token
            localStorage.setItem('token', token)
            //this.$router.push('/') // Redirect to home or any other page
            window.location.href='/'
            console.log(response.data.token)
          
        } catch (error) {
            console.error('Login failed:', error)
            alert('아아디 혹은 패스워드가 틀립니다.')
            // Handle error appropriately
          }
        },

      register() {
        // Handle registration logic
        if (this.regPassword.length < 8) {
          alert('비밀번호는 8글자 이상이어야 합니다.');
          return; // 회원가입 요청 전송을 중단
        }

        axios
        .post("http://3.39.228.111/api/sign-up", {
          email : this.regEmail,
          name : this.regName,
          memberId : this.regmemid,
          password : this.regPassword,
        })
        .then((res)=>{ 
          console.log(res)
          alert('회원가입이 완료되었습니다.')
          window.location.href='/'
        })
        .catch((err) => {
          console.log(err)
          alert('이미 존재하는 ID입니다.')
        })
      },

      //login() {
        // axios
        //   //.post("http://13.124.111.106/api/login", {
        //   .post("http://localhost:8080/api/login", {
        //     memberId: this.loginEmail,
        //     password: this.loginPassword,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //     ('로그인 되었습니다.')
        //     //this.$router.replace("/")
        //     //this.$router.push("/")
        //     window.location.href='/'
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     alert('회원이 아니거나, 이메일 혹은 패스워드가 틀립니다.')
        //   });
          
     // },

      toggleSignUp() {
        this.isSignUp = !this.isSignUp;
      },

      postTest() {
        axios
          .post("http://localhost:8080/api/login", {
            memberId: "abc123",
            password: "abc123123",
          })
          .then((res) => {
            console.log(res);})
          .catch((err) => {
            console.log(err);
          });
      },
    },

    mounted() {
      this.$refs.id.focus();
    },
  };
  </script>




<style>

/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
} */

body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #05123f);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

.container{
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.container p{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.container span{
    font-size: 12px;
}

.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button{
    background-color: #e3abef;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden{
    background-color: transparent;
    border-color: #fff;
}

.container form{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.container input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in{
    transform: translateX(100%);
}

.sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.active .sign-up{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move{
    0%, 49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%, 100%{
        opacity: 1;
        z-index: 5;
    }
}

.social-icons{
    margin: 20px 0;
}

.social-icons a{
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
}

.toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.container.active .toggle-container{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle{
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #909ce0, #8c7fac);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle{
    transform: translateX(50%);
}

.toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left{
    transform: translateX(-200%);
}

.container.active .toggle-left{
    transform: translateX(0);
}

.toggle-right{
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right{
    transform: translateX(200%);
}
.back-button {
  margin-top: 20px;
  background-color: #edbcfa !important;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 999;
}

.back-button:hover {
  background-color: #bbb;
}
</style>
      