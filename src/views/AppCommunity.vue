<template>
  <Header />
  
  <router-link to="/create" class="button" style="position: absolute; right: 20px;">게시글 작성하기</router-link>

    <div class="container">
      <div v-for="post in posts" :key="post.id" class="post">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-content">{{ post.content }}</p>
        <button class="button" @click="toggleComments(post.id)">
          {{ post.showComments ? 'Hide Comments' : 'Show Comments' }}
        </button>
        <div v-show="post.showComments" class="comments">
          <div v-for="comment in post.comments" :key="comment.id" class="comment">
            {{ comment.content }}
          </div>
          <textarea v-model="post.newComment" class="comment-input" placeholder="Write a comment..."></textarea>
          <button class="button" @click="addComment(post.id)">Comment</button>
        </div>
      </div>
    </div>

  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'AppPostList',

  components: {
    Header,
    Footer
  },

  data() {
    return {
      posts: []
    };
  },

  methods: {
    toggleComments(postId) {
      const post = this.posts.find(post => post.id === postId);
      post.showComments = !post.showComments;
    },
    addComment(postId) {
      const post = this.posts.find(post => post.id === postId);
      if (post.newComment.trim() !== '') {
        post.comments.push({
          id: post.comments.length + 1,
          content: post.newComment
        });
        post.newComment = '';
      }
    }
  },

  mounted() {
    // 데이터를 서버에서 받아오는 예시
    // 실제 데이터는 서버에서 받아오는 로직을 작성하세요
    this.posts = [
      {
        id: 1,
        title: 'React vs. Vue: Choosing the Right Framework for Your Project',
        content: 'React와 Vue는 현대 웹 개발에서 가장 인기 있는 프론트엔드 프레임워크 중 두 가지입니다. 이 글에서는 두 프레임워크의 기본 개념과 철학, 컴포넌트 아키텍처, 상태 관리 방법 등을 자세히 비교하고 있습니다. 또한 React의 JSX와 Vue의 템플릿 문법을 비교하여 개발자들이 어떤 스타일을 선호하는지에 대한 인사이트를 제공합니다. 프로젝트의 특성과 개발 팀의 경험에 따라 선택해야 할 적절한 프레임워크를 결정하는 데 도움이 될 것입니다.',
        comments: ["댓글냠냠", "내공냠냠"],
        showComments: false,
        newComment: ''
      },
      {
        id: 2,
        title: 'Best Practices for Frontend Performance Optimization',
        content: '웹 애플리케이션의 성능 최적화는 사용자 경험을 향상시키는 데 핵심적입니다. 이 글에서는 프런트엔드 성능 최적화를 위한 여러 가지 베스트 프랙티스를 제시합니다. 자바스크립트 번들 최소화, CSS 및 자바스크립트 압축, 이미지 최적화, 코드 스플리팅, HTTP 요청 최적화 등의 기법을 사용하여 웹 페이지의 로딩 시간을 최소화하고 성능을 향상시키는 방법을 상세히 설명합니다.',
        comments: [],
        showComments: false,
        newComment: ''
      }
    ];
  }
};
</script>

<style scoped>
 .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  border: 0.5px solid rgb(103, 117, 118);

}
.post {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.post-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.post-content {
  margin-bottom: 10px;
}

.comments {
  margin-top: 10px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

.comment {
  margin-bottom: 5px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 10px 15px;
  background-color: #3273dc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #276cda;
}
</style>
