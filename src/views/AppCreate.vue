<template>
    <div>
      <Header />
      <div class="container">
        <h2>Create a New Post</h2>
        <input v-model="newTitle" class="title-input" placeholder="Title" />
        <textarea v-model="newPost" class="post-input" placeholder="Write something..."></textarea>
        <button class="button" @click="addPost">Post</button>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'AppCreatePost',
  
    components: {
      Header,
      Footer
    },
  
    data() {
      return {
        newTitle: '',
        newPost: ''
      };
    },
  
    methods: {
      addPost() {
        if (this.newTitle.trim() !== '' && this.newPost.trim() !== '') {
          // 여기서 실제로 서버에 데이터를 보내거나 상태 관리를 합니다.
          console.log({
            title: this.newTitle,
            content: this.newPost
          });
          this.$router.push('/');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title-input,

  .button {
    padding: 10px 15px;
    background-color: #3273dc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .title-input{
  margin-top: 20px;
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  resize: none;
}

.post-input {
  margin-top: 20px;
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

  
  .button:hover {
    background-color: #276cda;
  }
  </style>
  