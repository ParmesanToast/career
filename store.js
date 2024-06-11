//import { createApp } from 'vue'
import { createStore } from 'vuex'

import axios from 'axios'
import router from '@/router'



const store = createStore({
    state: {
        userInfo: null,
        allUsers:[
                {id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
                {id: 2, name: "lego", email: "lego@gamil.com", password: "123456"},
            
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        // 로그인이 성공했을 때,
        loginSuccess(state, payload){
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        // 로그인이 실패했을 때,
        loginError(state){
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state){
            state.isLogin = false
            state.isLoginError = false
            state.userinfo = null
        }
    },

    actions: {
        // 로그인 시도
        login({ commit }, loginObj){
           
                axios
                  //.post("http://13.124.111.106/api/login", {
                  .post("https://reqres.in/api/login", {
                    email: loginObj.email,
                    password: loginObj.password,
                  })
                  .then((res) => {
                    console.log(res);
                    commit("loginSuccess", {
                        id: res.data.id,
                        email: loginObj.email,
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    alert('회원이 아니거나, 이메일 혹은 패스워드가 틀립니다.')
                    commit("loginError");
                    throw new Error("로그인 실패");
                  });

        //     let selectedUser = null
        //     state.allUsers.forEach(user=> {
        //         if (user.email === loginObj.email) selectedUser = user
        //     })
        //     if (selectedUser === null || selectedUser.password !== loginObj.password)
        //         commit("loginError")
        //     else {
        //         commit("loginSuccess", selectedUser)
        //         router.push({ name: "mypage"})
        // }
    },
    logout({ commit }){
        commit("logout")
        router.push({ name: "home" })
    }
    }
})


export default store
