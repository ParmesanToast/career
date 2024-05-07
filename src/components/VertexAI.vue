<template>
  <div class="chat-container">
    <div class="message" v-for="(message, index) in messages" :key="index" :class="{ 'user-message': message.user, 'bot-message': !message.user }">
      {{ message.text }}
    </div>
    <div class="input-container">
      <input type="text" v-model="inputText" @keyup.enter="sendMessage" placeholder="Type your message...">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      messages: [],
      inputText: ''
    };
  },
  methods: {
    sendMessage() {
      const projectId = '1';
      const location = 'us-central1-a';
      const modelId = '7200875373142212608';
      const serviceAccountKeyPath = 'C:/_uni/key.json';
      const auth = {
        iam: {
          serviceAccountKey: serviceAccountKeyPath,
        },
      };
      const baseURL = `https://cors-anywhere.herokuapp.com/https://us-central1-aiplatform.googleapis.com/projects/${projectId}/locations/${location}/endpoints/${modelId}`;
      
      axios.post(`${baseURL}/generate`, {
        prompt: this.inputText,
      }, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXBzdG9uQG1ldGFsLW11c2ljLTQxOTExMi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImNhcHN0b25AbWV0YWwtbXVzaWMtNDE5MTEyLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiYXVkIjoiaHR0cHM6Ly92ZXJ0ZXguZ29vZ2xlYXBpcy5jb20vIiwiZXhwIjoxNzEzODgyNjA1LCJpYXQiOjE3MTM4NzkwMDV9.alIUT1BJZQZuB3bZuxRwBH8TXsjPdiLt52Fwh6fMJIlLXu1yF5E8zxVX3nZRHm8zGtD5tOgR6k9B_4H7XJG3s0nCbC1KOdXCFrClEwHyAk2rLiGsxUEoJk9Ie6yC09nP9rgrqwRbFW6kWt78dGqBmXn_xYvoIGJx-3T00tRFB0QBvsgpMl5mQ-k0bzd1TiIGfvsdoGOQxbB33V3I2TBMOyijd8UOXTQtj5MfmJQabxe8EUeXsO-uu6-Q6BVBA72Eiet9YRUTvGHjXrvIziV6Kv-VqAIXskTdGoPokVKtictIrx69WhaUo5mFYS8wsYPe60oiSfD1N_a3TWMnS2-AEA'
          // 여기에 적절한 토큰 또는 인증 정보를 제공하세요.
        },
        auth,
      })
        .then(response => {
          const generatedText = response.data.generatedText;
          this.messages.push({ user: true, text: this.inputText }); // 사용자 메시지 추가
          this.messages.push({ user: false, text: generatedText }); // 봇 메시지 추가
          this.inputText = ''; // 입력 필드 비우기
        })
        .catch(error => {
          console.error('Error generating text:', error);
        });
    }
  }
};
</script>

<style scoped>
.chat-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.user-message {
  background-color: #e2f3f5;
  align-self: flex-start;
}

.bot-message {
  background-color: #f5e2e2;
  align-self: flex-end;
}

.input-container {
  display: flex;
  margin-top: 20px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  border-right: none;
}

.input-container button {
  padding: 10px;
  border-radius: 0 5px 5px 0;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
