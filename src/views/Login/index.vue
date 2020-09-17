<template>
  <div class="container">
    <a-layout class="homePage-content">
      <a-layout-header class="login-header">
        <img class="homePage-logo" src="@assets/background/logo.png" alt srcset />
      </a-layout-header>
      <a-layout-content class="login-wrapper">
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
            <a-input
              v-if="activeKey === 'Password_login'"
              v-model="loginForm.username"
              type="text"
              name="username"
              placeholder="手机号或邮箱"
              class="input input-item"
            />

            <a-input
              v-else
              v-model="loginForm.username"
              type="text"
              name="username"
              placeholder="请输入手机号"
              class="input input-item"
            />
          </div>
          <div class="login-password">
            <a-input
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
            <a-input
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
              <a-button class="login-switchType a-button--plain">海外手机号登录</a-button>
              <a-button class="login-cannotLogin a-button--plain">忘记密码?</a-button>
            </div>
            <div v-else class="password-login">
              <a-button
                v-if="letterStatus === 'Voice'"
                class="login-cannotLogin a-button--plain"
                @click="switchSmsVoice('Sms')"
              >
                接收短信验证码
              </a-button>
              <a-button
                v-else
                class="login-cannotLogin a-button--plain"
                @click="switchSmsVoice('Voice')"
              >
                接收语音验证码
              </a-button>
            </div>
          </div>
          <a-button class="login-btn a-button--plain" @click="handleLogin">登录</a-button>
          <div class="login-tip">
            <span>未注册手机验证后自动登录，注册即代表同意</span>
            <a href="https://www.zhihu.com/term/zhihu-terms">《知乎协议》</a>
            <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
          </div>
          <div class="login-socialLogin">
            <span>社交账号登录</span>
            <span class="login-socialBtnGroup">
              <a-button type="link" class="login-socialBtn a-button--plain">
                <WechatOutlined style="color: #60c84d; fontsize: 18px" />
                微信
              </a-button>
              <a-button type="link" class="login-socialBtn a-button--plain">
                <QqOutlined style="color: #50c8fd; fontsize: 18px" />
                QQ
              </a-button>
              <a-button type="link" class="login-socialBtn a-button--plain">
                <WeiboOutlined style="color: #fb6622; fontsize: 18px" />
                微博
              </a-button>
              <a-button type="link" class="login-socialBtn a-button--plain" @click="handleLogin">
                <GithubFilled style="fontsize: 18px" />
                Git
              </a-button>
            </span>
          </div>
          <!-- <a-button class="btn">Login</a-button> -->
        </div>
        <div class="footer-options">
          <div class="signup">
            <a-a-button type="link">
              <span style="display: inline-flex; align-items: center">
                <CheckCircleFilled style="fontsize: 22px; margin-right: 0.5em" />
                开通机构号
              </span>
            </a-a-button>
          </div>

          <div class="downloadApp">
            <a-a-button type="link">
              <span style="display: inline-flex; align-items: center">
                <ZhihuCircleFilled style="fontsize: 22px; margin-right: 0.5em" />
                下载知乎APP
              </span>
            </a-a-button>
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer class="login-footer">
        <div class="ZhihuLinks">
          <a target="_blank" href="https://zhuanlan.zhihu.com">知乎专栏</a>
          <a target="_blank" href="/roundtable">圆桌</a>
          <a target="_blank" href="/explore">发现</a>
          <a target="_blank" href="/app">移动应用</a>
          <a target="_blank" href="/contact">联系我们</a>
          <a target="_blank" href="https://app.mokahr.com/apply/zhihu">来知乎工作</a>
          <a target="_blank" href="/org/signup">注册机构号</a>
        </div>
        <div class="ZhihuRights">
          <span>© 2020 知乎</span>
          <a target="_blank" href="https://tsm.miit.gov.cn/dxxzsp/"> 京 ICP 证 110745 号 </a>
          <a target="_blank" href="http://www.beian.miit.gov.cn"> 京 ICP 备 13052560 号 - 1 </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
          >
            <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />
            京公网安备 11010802010035 号
          </a>
          <a href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank">
            出版物经营许可证
          </a>
        </div>
        <div class="ZhihuReports">
          <a target="_blank" href="https://zhuanlan.zhihu.com/p/51068775"> 侵权举报 </a>
          <a target="_blank" href="http://www.12377.cn"> 网上有害信息举报专区 </a>
          <a target="_blank" href="/term/child-jubao"> 儿童色情信息举报专区 </a>
          <span>违法和不良信息举报：010-82716601</span>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import { reactive, toRefs, getCurrentInstance } from 'vue';
// import { login } from "@/api/user";
import { setToken } from '@/libs/util';
// import svgPath from '@/config/svgPath.js'
// import config from '@/config';
// const {homeName} = config;
const prefixCls = 'login-tab';
import { message, Button, Input, Layout } from 'ant-design-vue';
import {
  WechatOutlined,
  QqOutlined,
  WeiboOutlined,
  GithubFilled,
  ZhihuCircleFilled,
  CheckCircleFilled
} from '@ant-design/icons-vue';
export default {
  name: 'Login',
  components: {
    WechatOutlined,
    QqOutlined,
    WeiboOutlined,
    GithubFilled,
    ZhihuCircleFilled,
    CheckCircleFilled,
    //
    aButton: Button,
    aInput: Input,
    aLayout: Layout,
    aLayoutHeader: Layout.Header,
    aLayoutContent: Layout.Content,
    aLayoutFooter: Layout.Footer
  },
  setup () {
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
    });
    console.log(state);
    // let data = toRefs(state);
    // onMounted(() => { });
    const switchSmsVoice = (val) => {
      console.log(val);
      if (val === 'Sms') {
        state.letterStatus = 'Sms';
        state.tipText = '输入 6 位短信验证码';
      } else if (val === 'Voice') {
        state.letterStatus = 'Voice';
        state.tipText = '输入 6 位语音验证码';
      }
    };
    const handleChange = (item) => {
      console.log(item);
      state.activeKey = item.name;
    };
    const tabCls = (item) => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}__active`]: item.name === state.activeKey
        }
      ];
    };
    const checkCapslock = ({ shiftKey = '', key = '' } = {}) => {
      if (key && key.length === 1) {
        if ((shiftKey && key >= 'a' && key <= 'z') || (!shiftKey && key >= 'A' && key <= 'Z')) {
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
        'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
      );
      state.window = windowObjectReference;
    };
    const vm = getCurrentInstance().proxy;
    const handleLogin = () => {
      console.log('正常登录');
      setToken('65a4s65fas');
      console.log(vm);
      message.info('登陆成功啦~');
      vm.$router.push('/');

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
.container {
  height: 100%;
  background-image: url('../../assets/background/loginbgm.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #b8e5f8;

  .homePage-logo {
    width: 128px;
    height: 81px;
    margin-bottom: 24px;
  }

  .homePage-content {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    align-items: center;
    justify-content: center;
    min-height: 688px;
    // height: calc(100% - 85px);
    height: 100%;
    background-color: initial;
  }
}
.login-header {
  background-color: initial;
  height: auto;
}
.login-wrapper {
  background-color: #fff;
  // background-color: initial;
  flex: none;
  width: 400px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 2px;
  margin: 0;
  min-width: 0;
  padding: 0;

  .main-content {
    padding: 0 22px;
  }

  .login-tabs {
    color: #1a1a1a;
    font-weight: 600;

    .login-tab {
      display: inline-block;
      color: #444;
      font-size: 16px;
      line-height: 60px;
      height: 60px;
      margin-right: 24px;
      cursor: pointer;
      position: relative;
    }

    .login-tab__active {
      &::after {
        display: block;
        position: absolute;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: #0084ff;
      }
    }
  }

  .login-account {
    display: flex;
    margin-top: 24px;
    // border-bottom: 1px solid #ebebeb;
    width: 100%;
    height: 48px;
    padding: 0;
    color: #8590a6;

    input {
      width: 100%;
      height: 48px;
      line-height: 24px;
    }
  }

  .login-password {
    display: flex;
    margin-top: 12px;
    // border-bottom: 1px solid #ebebeb;
    width: 100%;
    height: 48px;
    padding: 0;
    color: #8590a6;

    input {
      width: 100%;
      height: 48px;
      line-height: 24px;
    }
  }

  .login-options {
    width: 100%;
    margin-top: 12px;
    height: 20px;

    .password-free {
      display: flex;
      justify-content: space-between;
    }

    .password-login {
      display: flex;
      justify-content: flex-end;
    }

    .login-switchType {
      color: #175199;
    }

    .login-switchType:hover {
      color: #76839b;
    }

    .login-cannotLogin {
      color: #8590a6;
    }

    .login-cannotLogin:hover {
      color: #808080;
    }
  }

  .login-tip {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    margin-top: 40px;
    color: grey;
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
  }

  .login-btn {
    color: #fff;
    background-color: #0084ff;
    width: 100%;
    margin-top: 30px;
    height: 36px;
  }

  .login-btn:hover {
    background-color: #0077e6;
  }

  .login-socialLogin {
    display: flex;
    justify-content: space-between;
    color: #8590a6;
    height: 60px;
    line-height: 60px;
    // box-sizing: border-box;

    .login-socialBtnGroup {
      // display: flex;
      margin-left: 2px;
      transition: opacity 0.3s ease;
    }

    .login-socialBtn {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      color: #8590a6;

      padding: 0;
    }

    .login-socialBtn:not(:first-child) {
      margin-left: 10px;
    }
  }

  .footer-options {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    padding-left: 24px;
    padding-right: 24px;
    color: #0084ff;
    width: 400px;
    height: 60px;
    align-items: center;
    background-color: #f6f6f6;
    display: flex;
    font-size: inherit;
    justify-content: space-between;

    .downloadApp {
      .downloadBtn {
        color: #0084ff;
        font-size: inherit;
      }
    }
  }
}

.login-footer {
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 2px #999;
  padding-bottom: 20px;
  background-color: initial;

  a:not(:last-child):after {
    content: ' \B7 ';
    white-space: pre;
    display: inline-block;
  }

  a {
    color: inherit;
    text-decoration: none;
    img {
      position: relative;
      top: 4px;
      margin-right: 2px;
    }
  }
}

.input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
}
.input:focus {
  box-shadow: none;
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
