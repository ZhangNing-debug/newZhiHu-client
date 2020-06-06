<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input
          type="text"
          name="username"
          placeholder="username"
          class="input-item"
          v-model="loginForm.username"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          class="input-item"
          v-model="loginForm.password"
          @keyup="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter="handleLogin"
        />
        <!-- <button class="btn">Login</button> -->
        <div class="btn" @click="handleLogin">Login</div>
      </div>
      <div class="msg">
        Don`t have account?
        <a href="#">Sign up</a>
      </div>
      <div class="oauth">
        <div class="oauth-bg">
          <img
            title="微博"
            alt="微博"
            src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
            class="oauth-btn"
          />
        </div>
        <div class="oauth-bg">
          <img
            title="微信"
            alt="微信"
            src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
            class="oauth-btn"
          />
        </div>
        <div class="oauth-bg">
          <!-- <router-link
              to="https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/login"
            >-->
          <img
            title="GitHub"
            alt="GitHub"
            src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
            class="oauth-btn"
            @click="GitHubLogin()"
          />
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, getCurrentInstance} from 'vue';
import {login} from '@/api/user';
import {setToken} from '@/libs/util';
// import config from '@/config';
// const {homeName} = config;

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      loginForm: {
        username: '',
        password: '',
      },
      capsTooltip: false,
      window: null,
    });
    // let data = toRefs(state);
    // onMounted(() => { });
    const checkCapslock = ({shiftKey = '', key = ''} = {}) => {
      if (key && key.length === 1) {
        if (
          (shiftKey && key >= 'a' && key <= 'z') ||
          (!shiftKey && key >= 'A' && key <= 'Z')
        ) {
          state.capsTooltip = true;
        } else {
          state.capsTooltip = false;
        }
      }
      if (key === 'CapsLock' && state.capsTooltip === true) {
        state.capsTooltip = false;
      }
    };
    const gitHubLogin = () => {
      const a =
        'https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/oauth';
      const windowObjectReference = window.open(
        a,
        '第三方登录',
        // eslint-disable-next-line max-len
        'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no',
      );
      state.window = windowObjectReference;
    };
    const handleLogin = () => {
      login(state.loginForm).then((res)=>{
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.token);
          setToken(res.data.token);
          // const {ctx} = getCurrentInstance();
          const a = getCurrentInstance();
          console.log(a);
          // this.$router.push('/');

          // console.log(ctx.$router.currentRoute.value);
        }
      });
      // userRegistration(this.loginForm).then((res: any) => {
      //   console.log(res);
      //   if (res.status === 200) {
      //   }
      // });
    };
    // const getUrlData = () => {
    //   console.log(this.$route.params);
    //   console.log(this.$route.query.code);
    //   return this.$route.query.code
    //     ? this.$route.query.code
    //     : this.$route.query.fullPath;
    // };
    const oauthLogin = (data) => {
      console.log(data);
      state.window.close();
      // this.$router.push("/")
    };
    return {
      ...toRefs(state),
      checkCapslock,
      gitHubLogin,
      handleLogin,
      oauthLogin,
    };
  },
};
</script>

<style scoped lang="less" >
// @import "./index.less";

@import url("index.less");
</style>
