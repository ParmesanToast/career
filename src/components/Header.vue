<template>
<header>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">  
  <title>CodingNest</title>
  

  <!-- <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo.png" alt="로고" width="100%">
        </router-link>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <router-link to="/about" class="navbar-item">About</router-link>
              <router-link to="/contact" class="navbar-item">Contact</router-link>
              <router-link to="/community" class="navbar-item">Community</router-link>
            </div>
          </div>
        </div>
        <div class="navbar-end"> -->
          <!-- Navbar items on the right -->
          <!-- <router-link to="/login" class="navbar-item">Login</router-link> -->
        <!-- </div>
      </div>
    </div>
  </nav> -->
  

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
      
      <router-link to="/community" class="navbar-item">community</router-link>
      <router-link to="/interview" class="navbar-item">게시판</router-link>
      

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
        <input type="text" class="searchtext">&nbsp;
        <button class="serchbtn">검색</button>  
        &nbsp;&nbsp;&nbsp;
        
        <div class="buttons">
          <a href="/login" class="button is-primary">
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

</header>
</template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
        return {
        isNavbarActive: false
        };
    },
    methods: {
        toggleNavbar() {
        this.isNavbarActive = !this.isNavbarActive;
        }
    },
    el: 'app',
    src:"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
    };
    
  </script>
  
  <style scoped>
  /* 필요한 스타일링을 여기에 추가합니다. */
  
  </style>
  