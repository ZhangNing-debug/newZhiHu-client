<template>
    <div class="container">
        <div class="homePage-content">
            <header>
                <img class="homePage-logo"
src="../../assets/background/logo.png"
alt
srcset />
            </header>
            <main class="login-wrapper">
                <div class="main-content">
                    <div class="login-tabs">
                        <div
                            v-for="(item, index) in navList"
                            :key="index"
                            :class="tabCls(item)"
                            @click="handleChange(item)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                    <div class="login-account">
                        <input
                            v-if="activeKey === 'Password_login'"
                            v-model="loginForm.username"
                            type="text"
                            name="username"
                            placeholder="手机号或邮箱"
                            class="input input-item"
                        />
                        <input
                            v-else
                            v-model="loginForm.username"
                            type="text"
                            name="username"
                            placeholder="请输入手机号"
                            class="input input-item"
                        />
                    </div>
                    <div class="login-password">
                        <input
                            v-if="activeKey === 'Password_login'"
                            v-model="loginForm.password"
                            type="password"
                            name="password"
                            placeholder="密码"
                            class="input input-item"
                            @keyup="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter="handleLogin"
                        />
                        <input
                            v-else
                            v-model="loginForm.password"
                            type="password"
                            name="password"
                            :placeholder="tipText"
                            class="input input-item"
                            @keyup="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter="handleLogin"
                        />
                    </div>
                    <div class="login-options">
                        <div v-if="activeKey === 'Password_login'" class="password-free">
                            <button class="login-switchType button--plain">
                                海外手机号登录
                            </button>
                            <button class="login-cannotLogin button--plain">忘记密码?</button>
                        </div>
                        <div v-else class="password-login">
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
                            <button class="login-socialBtn button--plain" @click="handleLogin">
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
                            <span style="display: inline-flex; align-items: center;">
                                <svg
                                    class="Zi Zi--BadgeCert css-vfpo4o"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    width="26"
                                    height="26"
                                    style="margin-right: 0.5em;"
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
                            <span style="display: inline-flex; align-items: center;">
                                <svg
                                    width="20"
                                    height="20"
                                    class="css-vfpo4o"
                                    fill="currentColor"
                                    style="margin-right: 0.5em;"
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
                <a target="_blank"
rel="noopener noreferrer"
href="https://zhuanlan.zhihu.com"
                    >知乎专栏</a
                ><a target="_blank" rel="noopener noreferrer" href="/roundtable">圆桌</a
                ><a target="_blank" rel="noopener noreferrer" href="/explore">发现</a
                ><a target="_blank" rel="noopener noreferrer" href="/app">移动应用</a
                ><a target="_blank" rel="noopener noreferrer" href="/contact">联系我们</a
                ><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.mokahr.com/apply/zhihu"
                    >来知乎工作</a
                ><a target="_blank" rel="noopener noreferrer" href="/org/signup">注册机构号</a>
            </div>
            <div class="ZhihuRights">
                <span>© 2020 知乎</span
                ><a target="_blank"
rel="noopener noreferrer"
href="https://tsm.miit.gov.cn/dxxzsp/"
                    >京 ICP 证 110745 号</a
                ><a target="_blank"
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
                ><a target="_blank"
rel="noopener noreferrer"
href="http://www.12377.cn"
                    >网上有害信息举报专区</a
                ><a target="_blank"
rel="noopener noreferrer"
href="/term/child-jubao"
                    >儿童色情信息举报专区</a
                ><span v-if="abs === false">违法和不良信息举报：010-82716601</span>
            </div>
        </footer>
    </div>
</template>
<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
// import { login } from "@/api/user";
import { setToken } from '@/libs/util'
import svgPath from '@/config/svgPath.js'
// import config from '@/config';
// const {homeName} = config;
const prefixCls = 'login-tab'
export default {
  name: 'Login',
  setup() {
    const state = reactive({
      loginForm: {
        username: '',
        password: ''
      },
      capsTooltip: false,
      window: null,
      navList: [
        {
          label: '免密登录',
          name: 'Password-free_login'
        },
        {
          label: '密码登录',
          name: 'Password_login'
        }
      ],
      activeKey: 'Password_login',
      tipText: '输入 6 位短信验证码',
      letterStatus: 'Sms'
    })
    console.log(state)
    // let data = toRefs(state);
    // onMounted(() => { });
    const switchSmsVoice = (val) => {
      console.log(val)
      if (val === 'Sms') {
        state.letterStatus = 'Sms'
        state.tipText = '输入 6 位短信验证码'
      } else if (val === 'Voice') {
        state.letterStatus = 'Voice'
        state.tipText = '输入 6 位语音验证码'
      }
    }
    const handleChange = (item) => {
      console.log(item)
      state.activeKey = item.name
    }
    const tabCls = (item) => {
      return [
        `${prefixCls}`,
        {
          // [`${prefixCls}-tab-disabled`]: item.disabled,
          [`${prefixCls}__active`]: item.name === state.activeKey
          // [`${prefixCls}-tab-focused`]: item.name === this.focusedKey,
        }
      ]
    }
    const checkCapslock = ({ shiftKey = '', key = '' } = {}) => {
      if (key && key.length === 1) {
        if (
          (shiftKey && key >= 'a' && key <= 'z') ||
                    (!shiftKey && key >= 'A' && key <= 'Z')
        ) {
          state.capsTooltip = true
        } else {
          state.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && state.capsTooltip === true) {
        state.capsTooltip = false
      }
    }
    const gitHubLogin = () => {
      const a =
                'https://github.com/login/oauth/authorize?client_id=05836262c1c99fc6f393&redirect_uri=http://127.0.0.1:8080/oauth'
      const windowObjectReference = window.open(
        a,
        '第三方登录',
        // eslint-disable-next-line max-len
        'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
      )
      state.window = windowObjectReference
    }
    const vm = getCurrentInstance().proxy
    const handleLogin = () => {
      console.log('正常登录')
      setToken('65a4s65fas')
      console.log(vm)
      vm.$router.push('/')

      // login(state.loginForm).then(res => {
      //   console.log(res);
      //   if (res.status === 200) {
      //     console.log(res.data.token);
      //     setToken('65a4s65fas');
      //     // const {ctx} = getCurrentInstance();
      //     getCurrentInstance().proxy.$router.push("/");
      //     // this.$router.push('/');

      //     // console.log(ctx.$router.currentRoute.value);
      //   }
      // });
      // userRegistration(this.loginForm).then((res: any) => {
      //   console.log(res);
      //   if (res.status === 200) {
      //   }
      // });
    }
    // const getUrlData = () => {
    //   console.log(this.$route.params);
    //   console.log(this.$route.query.code);
    //   return this.$route.query.code
    //     ? this.$route.query.code
    //     : this.$route.query.fullPath;
    // };

    console.log(getCurrentInstance())
    const oauthLogin = (data) => {
      console.log(data)
      state.window.close()
    }
    return {
      ...toRefs(state),
      ...svgPath,
      checkCapslock,
      gitHubLogin,
      handleLogin,
      oauthLogin,
      tabCls,
      handleChange,
      switchSmsVoice
    }
  }
}
</script>
<style scoped lang="less">
@import url('index.less');
</style>
