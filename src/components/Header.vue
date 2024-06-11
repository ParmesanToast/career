<template>
  <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">  
    <title>CodingNest</title>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <svg width="150" height="100" viewBox="100 200 300 400">
            <image href="@/assets/logo.png" width="200%" height="200%"/>
          </svg>
        </router-link>
        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true" @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class="{ 'navbar-menu': true, 'is-active': isNavbarActive }">
        <div class="navbar-start">
          
          <router-link to="/community" class="navbar-item">게시판</router-link>
          <!-- <router-link to="/interview" class="navbar-item">추천회사보기</router-link> -->
          <router-link to="/mbti" class="navbar-item">성격유형 테스트</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown">
              <router-link to="/about" class="navbar-item">About</router-link>
              <router-link to="/contact" class="navbar-item">Contact</router-link>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <input type="text" class="searchtext" placeholder="검색어를 입력해주세요." v-model="keyword" @keyup.enter="searchresult">&nbsp;
            <button class="serchbtn" @click="searchresult">검색</button>  
            &nbsp;&nbsp;&nbsp;
            
            <div class="buttons">
              <!-- 아래 버튼을 v-if 또는 v-show 디렉티브를 사용하여 로그인 상태에 따라 표시/숨김 처리 -->
              <router-link v-if="isToken==false" to="/login" class="button is-primary">
                <strong>LogIn/SignUp</strong>
              </router-link>
              <button v-else @click="logout" class="button is-primary">
                <strong>Logout</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: 'AppHeader',
  data() {
    return {
      isNavbarActive: false,
      keyword: '',
      isToken: false,
    };
  },
  computed: {
    ...mapState(['isAuthenticated']) // isAuthenticated 상태를 가져옴
  },
  methods: {
    ...mapActions(['logout']),

    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
    },
    searchresult() {
      if (this.keyword !== '') { // 검색어를 입력한 경우
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword,
            isResultShow: true,
          },
        });
        this.keyword = '';
        console.log('"', this.keyword, '"' + ' 검색');
      } else {
        alert('검색어를 입력해주세요!'); // 검색어를 입력하지 않은 경우
      }
    },
    logout() {
      // 로그아웃 액션을 디스패치
      localStorage.removeItem("token")
      window.location.href='/'
    },
  },

  mounted() {
  if (localStorage.getItem('token')) {
    this.isToken = true;
  } else {
    this.isToken = false;
  }
}

}
</script>
  
<style scoped>
button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: solid rgb(46, 105, 234);
  border-radius: 15px;
  cursor: pointer;
}
</style>
