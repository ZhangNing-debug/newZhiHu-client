<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input type="text"
               name="username"
               placeholder="username"
               class="input-item"
               v-model="loginForm.username" />
        <input type="password"
               name="password"
               placeholder="password"
               class="input-item"
               v-model="loginForm.password"
               @keyup="checkCapslock"
               @blur="capsTooltip = false"
               @keyup.enter="handleLogin" />
        <!-- <button class="btn">Login</button> -->
        <div class="btn"
             @click="handleLogin">Login</div>
      </div>
      <div class="msg">
        Don`t have account?
        <a href="#">Sign up</a>
      </div>
      <div class="oauth">
        <div class="oauth-bg">
          <img title="微博"
               alt="微博"
               src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
               class="oauth-btn" />
        </div>
        <div class="oauth-bg">
          <img title="微信"
               alt="微信"
               src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
               class="oauth-btn" />
        </div>
        <div class="oauth-bg">
          <!-- <router-link
              to="https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/login"
            >-->
          <img title="GitHub"
               alt="GitHub"
               src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
               class="oauth-btn"
               @click="GitHubLogin()" />
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup () {
    let state = reactive({
      loginForm: {
        username: "",
        password: ""
      },
      capsTooltip: false,
      window: null
    });
    // let data = toRefs(state);
    // onMounted(() => { });
    const checkCapslock = ({ shiftKey = "", key = "" } = {}) => {
      if (key && key.length === 1) {
        if (
          (shiftKey && key >= "a" && key <= "z") ||
          (!shiftKey && key >= "A" && key <= "Z")
        ) {
          state.capsTooltip = true;
        } else {
          state.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && state.capsTooltip === true) {
        state.capsTooltip = false;
      }
    };
    const gitHubLogin = () => {
      let a =
        "https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/oauth";
      let windowObjectReference = window.open(
        a,
        "第三方登录",
        "height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"
      );
      state.window = windowObjectReference;
    };
    const handleLogin = () => {
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
    const oauthLogin = data => {
      console.log(data);
      state.window.close();
      // this.$router.push("/")
    };
    return { ...toRefs(state), checkCapslock, gitHubLogin, handleLogin, oauthLogin };
  }
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "Open Sans Light";
  letter-spacing: 0.05em;
}
// .Fcontainer {
// 	height: 100%;
// 	background-color: #b8e5f8;
// }
.container {
  height: 100%;
  background-image: url("../assets/background/loginbgm.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.login-wrapper {
  background-color: #fff;
  width: 250px;
  // height: 500px;
  border-radius: 15px;
  padding: 30px 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrapper .header {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  cursor: pointer;
  a {
    text-decoration-line: none;
    color: #1b2343;
  }
}

.login-wrapper .msg {
  text-align: center;
  line-height: 80px;
}

.login-wrapper .msg a {
  text-decoration-line: none;
  color: #a6c1ee;
}
.oauth {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
}
.oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.oauth-btn {
  height: 1.9rem;
  vertical-align: bottom;
  cursor: pointer;
}
</style>
