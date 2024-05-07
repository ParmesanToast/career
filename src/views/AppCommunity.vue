<template>
  <div>
    <Header />
    <div class="container">
      <h1>대충 커뮤니티</h1>
      <div v-for="post in posts" :key="post.id" class="post">
        <p class="post-content">{{ post.content }}</p>
        <button class="button is-dark" @click="toggleComments(post.id)">
          {{ post.showComments ? 'Hide Comments' : 'Show Comments' }}
        </button>
        <div v-show="post.showComments" class="comments">
          <div v-for="comment in post.comments" :key="comment.id" class="comment">
            {{ comment.content }}
          </div>
          <textarea v-model="post.newComment" class="comment-input" placeholder="Write a comment..."></textarea>
          <button class="button is-dark" @click="addComment(post.id)">Comment</button>
        </div>
      </div>
      <textarea v-model="newPost" class="post-input" placeholder="Write something..."></textarea>
      <button class="button is-dark" @click="addPost">Post</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data() {
    return {
      newPost: '',
      posts: []
    };
  },

  methods: {
    addPost() {
      if (this.newPost.trim() !== '') {
        this.posts.push({
          id: this.posts.length + 1,
          content: this.newPost,
          comments: [],
          showComments: false,
          newComment: ''
        });
        this.newPost = '';
      }
    },
    toggleComments(postId) {
      const post = this.posts.find(post => post.id === postId);
      post.showComments = !post.showComments;
    },
    addComment(postId) {
      const post = this.posts.find(post => post.id === postId);
      if (post.newComment.trim() !== '') {
        post.comments.push({
          content: post.newComment
        });
        post.newComment = '';
      }
    }
  }
};
</script>

<style scoped>
/* 컨테이너 스타일링 */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* 글 목록 스타일링 */
.post {
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-content {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* 댓글 스타일링 */
.comments {
  margin-top: 10px;
}

.comment {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.comment-input {
  margin-top: 10px;
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

/* 글 작성란 스타일링 */
.post-input {
  margin-top: 20px;
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

/* 버튼 스타일링 */
.button {
  margin-top: 10px;
  cursor: pointer;
}

</style>
