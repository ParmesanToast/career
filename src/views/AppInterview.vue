<template>
    <Header></Header>
    
    <div class="container">
    <h1>Interview Page</h1>
    <p>여기에는 상세 내용이 표시됩니다.</p>
    <button @click="getList">테스트</button>

    <ul class="user-list">
      <li v-for="(user, index) in data.data" :key="`data${index}`" class="user-list-item">
        <img :src="user.avatar" alt="Avatar" style="width: 100px; height: 100px;">
        <div class="user-info">
          <p><strong>ID:</strong> {{ user.id }}</p>
          <p><strong>E-mail:</strong> {{ user.name }}</p>
          <p><strong>First Name:</strong> {{ user.year }}</p>
          <p><strong>Last Name:</strong> {{ user.color }}</p>
        </div>
      </li>
    </ul>
  </div>

 
  <div class="container">
    <ul class="user-list">
      <li v-for="(mUser, index) in mUsers" :key="`mUser${index}`" class="user-list-item">
        <!-- 이미지 크기를 조절합니다 -->
        <img :src="mUser.avatar" alt="Avatar" class="avatar">
        <div class="user-info">
          <p><strong>ID:</strong> {{ mUser.id }}</p>
          <p><strong>E-mail:</strong> {{ mUser.email }}</p>
          <p><strong>First Name:</strong> {{ mUser.first_name }}</p>
          <p><strong>Last Name:</strong> {{ mUser.last_name }}</p>
        </div>
      </li>
    </ul>
    {{ mUsers }}
  </div>
<!-- 여기서부터 진짜 -->

<div class="container">
    <div class="field">
      <label class="label">관심 분야</label>
      <div class="control">
        <label class="radio">
          <input type="radio" v-model="selectedField" name="field" value="프론트엔드">
          <span class="radio-text">프론트엔드</span>
        </label>
        <label class="radio">
          <input type="radio" v-model="selectedField" name="field" value="백엔드">
          <span class="radio-text">백엔드</span>
        </label>
        <label class="radio">
          <input type="radio" v-model="selectedField" name="field" value="데이터 분석가">
          <span class="radio-text">데이터 분석가</span>
        </label>
      </div>
    </div>
  </div>

  <div class="container">
    <ui class="companyList">
      <li>
        <img :src="'https://www.sk.co.kr/lib/images/desktop/logo.png'" alt="skLogo" class="logo">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> SK</p>
          <p><strong>창업가 :&nbsp;</strong> 최종건</p>
          
        </div>
        <button @click="goToDetail('SK')">SK면접 예상질문과 답변보기</button>
      </li>
      <li>
        <img :src="'https://www.samsung.com/sec/static/_images/gnb/logo-gnb.svg'" alt="samsungLogo" class="logo">
        <div class="company-info">
          <p><strong>사명 :&nbsp;</strong> 삼성</p>
          <p><strong>창업가 :&nbsp;</strong> 이병철</p>
        </div>
        <button @click="goToDetail('SAMSUNG')">SAMSUNG면접 예상질문과 답변보기</button>
      </li>
    </ui>
  </div>
  

        <Footer></Footer>
      </template>
      
      <script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import axios from"axios"
      export default {
        name: 'AppInterview',
        
        components: {
        Header,
        Footer
      },

      

      data(){
        return{
            data:"null",
            mUsers:[],
            selectedField: null
        };
      },

      mounted(){
        axios
        .get("https://reqres.in/api/users?delay=3")
        .then(res=> {
          this.mUsers = res.data.data;
          console.log(res)
        }).catch(error => {
          console.error("Error", error);
        })
      },

      methods:{

        goToDetail(companyName) {
          if (!this.selectedField) {
            alert('관심 분야를 선택해주세요.');
          } else {
            this.$router.push({
              name: 'AppDetail',
              params: {
                company: companyName,
                field: this.selectedField
              }
            });
          }
        }

          
          
        },

        getList(){
            axios
            .get("https://reqres.in/api/unknown",{})
            .then(res=>{
                console.log(res)
                this.data = res.data;
            })
            .catch(err=>{
                console.log(err)
            })
        },
}

      
      
      </script>
      



<style>
    /* 컴포넌트에 대한 스타일링 */
    .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

.user-list {
  list-style: none;
  padding: 0;
}

.user-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-list-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-info p {
  margin: 5px 0;
}
    
/* 여기서부터 진짜 */
.logo {
  float: left;
  padding-right: 50px;
}

.companyList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.interviewBTN{
  position:initial;
  
  
}
.radio {
  margin-bottom: 10px;
}

.radio-text {
  margin-left: 5px;
}


</style>
    