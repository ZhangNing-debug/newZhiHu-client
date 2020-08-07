<template>
  <div class="container">
    <div class="homePage-content">
      <header>
        <img
          class="homePage-logo"
          src="../../assets/background/logo.png"
          alt
          srcset
        />
      </header>
      <main class="login-wrapper">
        <div class="main-content">
          <div class="login-tabs">
            <div
              :class="tabCls(item)"
              v-for="(item, index) in navList"
              :key="index"
              @click="handleChange(item)"
            >
              {{ item.label }}
            </div>
          </div>
          <div class="login-account">
            <input
              type="text"
              name="username"
              placeholder="手机号或邮箱"
              class="input input-item"
              v-model="loginForm.username"
              v-if="activeKey === 'Password_login'"
            />
            <input
              type="text"
              name="username"
              placeholder="请输入手机号"
              class="input input-item"
              v-model="loginForm.username"
              v-else
            />
          </div>
          <div class="login-password">
            <input
              type="password"
              name="password"
              placeholder="密码"
              class="input input-item"
              v-model="loginForm.password"
              @keyup="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter="handleLogin"
              v-if="activeKey === 'Password_login'"
            />
            <input
              type="password"
              name="password"
              :placeholder="tipText"
              class="input input-item"
              v-model="loginForm.password"
              @keyup="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter="handleLogin"
              v-else
            />
          </div>
          <div class="login-options">
            <div class="password-free" v-if="activeKey === 'Password_login'">
              <button class="login-switchType button--plain">
                海外手机号登录
              </button>
              <button class="login-cannotLogin button--plain">忘记密码?</button>
            </div>
            <div class="password-login" v-else>
              <button
                v-if="letterStatus === 'Voice'"
                class="login-cannotLogin button--plain"
                @click="switchSmsVoice('Sms')"
              >
                接收短信验证码
              </button>
              <button
                v-else
                class="login-cannotLogin button--plain"
                @click="switchSmsVoice('Voice')"
              >
                接收语音验证码
              </button>
            </div>
          </div>
          <button class="login-btn button--plain" @click="handleLogin">
            登录
          </button>

          <div class="login-tip">
            <span>未注册手机验证后自动登录，注册即代表同意</span>
            <a href="https://www.zhihu.com/term/zhihu-terms">《知乎协议》</a>
            <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
          </div>
          <div class="login-socialLogin">
            <span>社交账号登录</span>
            <span class="login-socialBtnGroup">
              <button class="login-socialBtn button--plain">
                <svg
                  class="Zi Zi--WeChat Login-socialIcon"
                  fill="#60c84d"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path :d="path" fill-rule="evenodd" />
                </svg>
                微信
              </button>
              <button class="login-socialBtn button--plain">
                <svg
                  class="Zi Zi--QQ Login-socialIcon"
                  fill="#50c8fd"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path :d="qqPath" fill-rule="evenodd" />
                </svg>
                QQ
              </button>
              <button class="login-socialBtn button--plain">
                <svg
                  class="Zi Zi--Weibo Login-socialIcon"
                  fill="#fb6622"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path fill="#FB6622" :d="wbPath" fill-rule="evenodd" />
                </svg>
                微博
              </button>
              <button
                class="login-socialBtn button--plain"
                @click="handleLogin"
              >
                <svg
                  class="Zi Zi--GitHub Login-socialIcon"
                  viewBox="0 0 18 17"
                  width="20"
                  height="20"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path fill-rule="evenodd" :d="githubPath"></path>
                </svg>
                Git
              </button>
            </span>
          </div>
          <!-- <button class="btn">Login</button> -->
        </div>
        <div class="footer-options">
          <div class="signup">
            <a href="http://">
              <span style="display: inline-flex;align-items: center;">
                <svg
                  class="Zi Zi--BadgeCert css-vfpo4o"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  style="margin-right: .5em"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#0F88EB" :d="jghPath" />
                    <path fill="#FFF" :d="okPath" />
                  </g>
                </svg>
                开通机构号
              </span>
            </a>
          </div>

          <div class="downloadApp">
            <button class="downloadBtn button--plain">
              <span style="display: inline-flex;align-items: center;">
                <svg
                  width="20"
                  height="20"
                  class="css-vfpo4o"
                  fill="currentColor"
                  style="margin-right: .5em"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#0084FF" :d="logoPath" />
                    <path d="M0 0h20v20H0z" />
                    <path fill="#FFF" :d="zhiPath" />
                  </g>
                </svg>
                下载知乎APP
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
    <footer class="homePage-footer">
      <div class="ZhihuLinks">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://zhuanlan.zhihu.com"
          >知乎专栏</a
        ><a target="_blank" rel="noopener noreferrer" href="/roundtable">圆桌</a
        ><a target="_blank" rel="noopener noreferrer" href="/explore">发现</a
        ><a target="_blank" rel="noopener noreferrer" href="/app">移动应用</a
        ><a target="_blank" rel="noopener noreferrer" href="/contact"
          >联系我们</a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.mokahr.com/apply/zhihu"
          >来知乎工作</a
        ><a target="_blank" rel="noopener noreferrer" href="/org/signup"
          >注册机构号</a
        >
      </div>
      <div class="ZhihuRights">
        <span>© 2020 知乎</span
        ><a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tsm.miit.gov.cn/dxxzsp/"
          >京 ICP 证 110745 号</a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.beian.miit.gov.cn"
          >京 ICP 备 13052560 号 - 1</a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
          ><img
            src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"
          />京公网安备 11010802010035 号</a
        ><a
          href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg"
          target="_blank"
          rel="noopener noreferrer"
          >出版物经营许可证</a
        >
      </div>
      <div class="ZhihuReports">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://zhuanlan.zhihu.com/p/51068775"
          >侵权举报</a
        ><a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn"
          >网上有害信息举报专区</a
        ><a target="_blank" rel="noopener noreferrer" href="/term/child-jubao"
          >儿童色情信息举报专区</a
        ><span>违法和不良信息举报：010-82716601</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import { login } from "@/api/user";
import { setToken } from "@/libs/util";
// import config from '@/config';
// const {homeName} = config;
const prefixCls = "login-tab";
export default {
  name: "Login",
  setup() {
    const state = reactive({
      loginForm: {
        username: "",
        password: ""
      },
      capsTooltip: false,
      window: null,
      navList: [
        {
          label: "免密登录",
          name: "Password-free_login"
        },
        {
          label: "密码登录",
          name: "Password_login"
        }
      ],
      activeKey: "Password_login",
      tipText: "输入 6 位短信验证码",
      letterStatus: "Sms",
      path: `M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714
      22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737
      5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569
      1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 
      0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 
      1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z`,
      qqPath: `
      M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55
      14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 
      0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 
      0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0
      2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 
      2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 
      .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z`,
      wbPath: `M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625
      1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131
      6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346
      4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86
      6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96
      5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099
      2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 
      0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448
      7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097
      3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 
      3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 
      2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 
      0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z`,
      jghPath: `M2.64 13.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 
      2.4 2.24 2.278l-.198.016c1.387-.122 3.21.655 4.083 1.734l-.125-.154c.876 
      1.084 2.304 1.092 3.195.027l-.127.152c.895-1.068 
      2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.279-2.238l.017.197c-.122-1.388.655-3.212 
      1.734-4.084l-.154.125c1.083-.876 1.092-2.304.027-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.279l.198-.017c-1.387.123-3.21-.654-4.083-1.733l.125.153c-.876-1.083-2.304-1.092-3.195-.027l.127-.152c-.895 1.068-2.733 
      1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.279 2.24L4.4 6.363c.122 1.387-.655 3.21-1.734 
      4.084l.154-.126c-1.083.878-1.092 2.304-.027 3.195l-.152-.127z
      `,
      okPath: `M9.78 15.728l-2.633-2.999s-.458-.705.242-1.362c.7-.657 1.328-.219 1.328-.219l1.953
      2.132 4.696-4.931s.663-.348 1.299.198c.636.545.27 
      1.382.27 1.382s-3.466 3.858-5.376 5.782c-.98.93-1.778.017-1.778.017z`,
      logoPath: `M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z`,
      zhiPath: `M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 
      .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 
      0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 
      .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 
      1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 
      .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 
      8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z`,
      githubPath: `M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47
       7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
       1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 
       1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 
       1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z`
    });
    // let data = toRefs(state);
    // onMounted(() => { });
    const switchSmsVoice = val => {
      console.log(val);
      if (val === "Sms") {
        state.letterStatus = "Sms";
        state.tipText = "输入 6 位短信验证码";
      } else if (val === "Voice") {
        state.letterStatus = "Voice";
        state.tipText = "输入 6 位语音验证码";
      }
    };
    const handleChange = item => {
      console.log(item);
      state.activeKey = item.name;
    };
    const tabCls = item => {
      return [
        `${prefixCls}`,
        {
          // [`${prefixCls}-tab-disabled`]: item.disabled,
          [`${prefixCls}__active`]: item.name === state.activeKey
          // [`${prefixCls}-tab-focused`]: item.name === this.focusedKey,
        }
      ];
    };
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
      const a =
        "https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/oauth";
      const windowObjectReference = window.open(
        a,
        "第三方登录",
        // eslint-disable-next-line max-len
        "height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"
      );
      state.window = windowObjectReference;
    };
    const handleLogin = () => {
      console.log("正常登录");
      login(state.loginForm).then(res => {
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
    const oauthLogin = data => {
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
      tabCls,
      handleChange,
      switchSmsVoice
    };
  }
};
</script>

<style scoped lang="less">
// @import "./index.less";

@import url("index.less");
</style>
