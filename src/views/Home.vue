/* eslint-disable vue/no-unused-vars */
<template>
  <!-- top -->
  <header
    :class="['appHeader', scrollTop > 30 && ['is-fixed', 'is-hidden']]"
    :style="[scrollTop > 0 && { top: 0, left: 0 }]"
  >
    <!-- <div class="appHeader"> -->
    <div class="appHeader-inner">
      <a href="/" class="appHeader-Logo">知乎</a>
      <ul class="appHeader-Tabs">
        <li v-for="(item, index) in listData" :key="index" class="Tabs-item appHeader-Tab">
          <!-- <a href="/" class="Tabs-link appHeader-TabsLink">{{ item }}</a> -->
          <router-link :to="item.to" class="Tabs-link appHeader-TabsLink">{{
            item.title
          }}</router-link>
        </li>
      </ul>
      <div class="searchBar">
        <div class="searchBar-Warpper">
          <label class="searchBar-Input input-Warpper">
            <input type="text" class="Input" />
          </label>
        </div>
        <button class="searchBtn searchBtn-askButton">提问</button>
        <!-- <Button></Button> -->
      </div>
      <div class="appHeader-UserInfo">
        <div class="Popover">
          <!-- <button id="Popover16-toggle" class="appHeader-notifications">
                        通知
                    </button> -->
          <!-- 这里要有一个当前未看的通知数量  -->
          <a-badge :count="1">
            <a-button type="link" :style="{ fontSize: '20px' }">
              <BellFilled :style="{ fontSize: '22px', color: '#8590a6' }" />
            </a-button>
          </a-badge>
        </div>
        <div class="Popover">
          <a-badge :count="1">
            <a-button type="link">
              <MessageFilled :style="{ fontSize: '22px', color: '#8590a6' }" />
            </a-button>
          </a-badge>

          <!-- <button id="Popover16-toggle" class="appHeader-messages">私信</button> -->
        </div>
        <div class="AppHeader-profile">
          <div class="Popover AppHeader-menu">
            <!-- <button id="Popover14-toggle" type="button">
              <img
                src="https://pic4.zhimg.com/da8e974dc_is.jpg"
                class="Avatar AppHeader-profileAvatar"
                width="30"
                height="30"
                srcset="https://pic4.zhimg.com/da8e974dc_im.jpg 2x"
              />
            </button> -->

            <!-- <a-dropdown>
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <a-avatar
                  src="https://pic4.zhimg.com/da8e974dc_is.jpg"
                  shape="square"
                  :size="large"
                />
              </a>
              // eslint-disable-next-line vue/no-unused-vars
              <a-menu v-slot="overlay">
                {{ overlay }}
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown> -->
            <a-dropdown :trigger="['click']">
              <a-button
                :style="{ width: '34px', height: '34px', padding: 0 }"
                type="primary"
                class="ant-dropdown-link"
                @click="(e) => e.preventDefault()"
                block
              >
                <a-avatar
                  src="https://pic4.zhimg.com/da8e974dc_is.jpg"
                  shape="square"
                  :size="large"
                />
              </a-button>

              <template v-slot:overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <a href="http://www.alipay.com/"
                      ><UserOutlined style="margin-right: 0.5em;" />我的主页</a
                    >
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a href="http://www.taobao.com/"
                      ><SettingOutlined style="margin-right: 0.5em;" />设置</a
                    >
                  </a-menu-item>
                  <!-- <a-menu-divider /> -->
                  <a-menu-item key="3">
                    <a href="http://www.taobao.com/"
                      ><ExportOutlined style="margin-right: 0.5em;" />退出</a
                    >
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div :class="['pageHead', scrollTop > 30 && ['is-shown']]">
      <div :class="['pageHead-inner']">
        <div class="topStoryPageHead">
          <div class="topStoryPageHead-main">
            <a href="/" class="topStoryPageHead-Logo">知乎</a>
            <nav class="topStoryPageHead-tabs">
              <router-link
                :class="[
                  'topStory-link',
                  'topStory-tabsLink',
                  $route.name === 'recommend' && 'is-active'
                ]"
                to="/"
              >
                推荐
              </router-link>
              <router-link
                :class="[
                  'topStory-link',
                  'topStory-tabsLink',
                  $route.name === 'follow' && 'is-active'
                ]"
                to="/follow"
              >
                关注
              </router-link>
              <router-link
                :class="[
                  'topStory-link',
                  'topStory-tabsLink',
                  $route.name === 'hot' && 'is-active'
                ]"
                to="/hot"
              >
                热榜
              </router-link>
            </nav>
          </div>
          <div class="topStoryPageHead-aside">
            <a-input-search
              class="topStoryPageHead-search"
              placeholder="搜索你感兴趣的内容…"
              style="width: 200px;"
              @search="onSearch"
            />
            <a-button class="topStoryPageHead-submit" type="primary">
              提问
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- center -->
  <main class="appMain">
    <!-- 主体内容 -->
    <div class="topStory">
      <!-- 内容 -->
      <div class="topStory-container">
        <!-- 具体内容 -->
        <div class="topStory-mainColumn">
          <div class="topStory-mainColumnCard">
            <div class="Card topStory-tabCard">
              <nav class="topStoryTabs topStory-tabs">
                <router-link
                  :class="[
                    'topStory-link',
                    'topStory-tabsLink',
                    $route.name === 'recommend' && 'is-active'
                  ]"
                  to="/"
                >
                  推荐
                </router-link>
                <router-link
                  :class="[
                    'topStory-link',
                    'topStory-tabsLink',
                    $route.name === 'follow' && 'is-active'
                  ]"
                  to="/follow"
                >
                  关注
                </router-link>
                <router-link
                  :class="[
                    'topStory-link',
                    'topStory-tabsLink',
                    $route.name === 'hot' && 'is-active'
                  ]"
                  to="/hot"
                >
                  热榜
                </router-link>
              </nav>
            </div>
          </div>
          <!-- 这里 根据路由 来确定组件 -> 推荐 关注 热榜 -->
          <!-- <component :is="componentId"></component> -->
          <div :class="['topStory-content']">
            <div :class="['ListShortcut']">
              <div :class="['topStoryContent-recommend']"></div>
            </div>
          </div>
          <router-view></router-view>
        </div>
        <!-- 全局侧边栏 -->
        <div class="globalSideBar">
          <a-card style="width: 300px; padding: 0;" class="card newGlobalWrite">
            <div class="newGlobalWrite-navTop">
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(0, 132, 255);"
                >
                  <ProfileOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">回答问题</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(255, 150, 7);"
                >
                  <CameraOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">拍个视频</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(244, 200, 7);"
                >
                  <FormOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个文章</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(38, 191, 191);"
                >
                  <HighlightOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个想法</div>
              </div>
            </div>
            <div class="newGlobalWrite-navBottom">
              <a-button type="link" class="newGlobalWriteBtn-item">
                稍后答
              </a-button>
              <a-button type="link" class="newGlobalWriteBtn-item">
                草稿箱
              </a-button>
            </div>
          </a-card>
          <a-card style="width: 300px;" class="card creatorEntrance">
            <!-- <a-button type="link" class="newGlobalWriteBtn-item" style="display:flex"> -->
            <div class="creatorEntrance-inner">
              <div style="color: #8590a6;">
                <SolutionOutlined style="fontsize: 18px; margin-right: 5px;" />创作中心
              </div>
              <div>
                <router-link to="/"> 去开通 <RightOutlined style="color: #8590a6;" /></router-link>
              </div>
            </div>
            <!-- </a-button> -->
          </a-card>
          <a-card style="width: 300px;" class="card globalSideBar-category">
            <div class="globalSideBarCategory-inner">
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(0, 132, 255);"
                >
                  <ProfileOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">回答问题</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(255, 150, 7);"
                >
                  <CameraOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">拍个视频</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(244, 200, 7);"
                >
                  <FormOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个文章</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(38, 191, 191);"
                >
                  <HighlightOutlined />
                  <icon-font type="icon-tuichu" />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个想法</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(244, 200, 7);"
                >
                  <FormOutlined />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个文章</div>
              </div>
              <div class="newGlobalWrite-topItem">
                <a-button
                  type="primary"
                  shape="circle"
                  class="newGlobalWrite-topButton"
                  style="background: rgb(38, 191, 191);"
                >
                  <HighlightOutlined />
                  <icon-font type="icon-tuichu" />
                </a-button>
                <div class="newGlobalWrite-topTitle">写个想法</div>
              </div>
            </div>
          </a-card>
          <!-- <div class="Card NewGlobalWrite"></div> -->
          <!-- <div class="Card CreatorEntrance"></div> -->
          <div class="Card GlobalSideBar-category"></div>
          <div class="Card GlobalSideBar-navList"></div>
          <footer class="footer"></footer>
        </div>
      </div>
    </div>
  </main>
  <!-- right -->
  <!-- footer -->
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
// import {Button} from 'element-ui';
// import { UserOutlined } from '@ant-design/icons-vue'
import {
  BellFilled,
  MessageFilled,
  UserOutlined,
  SettingOutlined,
  ProfileOutlined,
  CameraOutlined,
  FormOutlined,
  HighlightOutlined,
  SolutionOutlined,
  RightOutlined,
  ExportOutlined
} from '@ant-design/icons-vue'
// import { Icon } from '@ant-design'
// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
// })
// <UserOutlined />
export default {
  components: {
    BellFilled,
    MessageFilled,
    UserOutlined,
    SettingOutlined,
    ProfileOutlined,
    CameraOutlined,
    FormOutlined,
    HighlightOutlined,
    SolutionOutlined,
    RightOutlined,
    ExportOutlined
  },
  setup() {
    const state = reactive({
      listData: [
        { title: '首页', to: '/' },
        { title: '发现', to: '/' },
        { title: '等你来答', to: '/' }
      ],
      capsTooltip: false,
      window: null,
      scrollTop: null
    })
    const handleScroll = (e) => {
      state.scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log('滚动条', e, scrollTop)
    }
    // console.log(scrollTop)
    onMounted(() => {
      window.addEventListener('scroll', handleScroll, true)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less">
.appHeader {
  position: relative;
  z-index: 100;
  width: 100%;
  min-width: 1032px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background-clip: content-box;

  .appHeader-inner {
    position: relative;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    align-items: center;
    transition: transform 0.3s;
    a {
      color: inherit;
      text-decoration: none;
    }
    li {
      list-style-type: none;
    }
    .appHeader-Logo {
      color: #0077e6;
      font-size: 24px;
    }
    .appHeader-Tabs {
      margin-bottom: 0;
      border-bottom: none;
      display: flex;
      padding: 0 23px;
    }
    .appHeader-Tab {
      padding: 0 23px;
    }
    .Tabs-item {
      display: inline-block;
      .Tabs-link {
        font-weight: 600;
      }
      .Tabs-link:hover {
        color: #444;
      }
    }
    .appHeader-TabsLink {
      color: #8590a6;
      font-size: 15px;
    }
    .searchBar {
      display: flex;
      .input-Warpper {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 180px;
        height: 34px;
        padding: 4px 10px;
        font-size: 14px;
        background: #fff;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: background 0.2s, border 0.2s;
        transition: background 0.2s, border 0.2s;
      }
      .searchBar-Warpper {
        position: relative;
        z-index: 104;
        width: 326px;
        .searchBar-Input {
          width: 326px;
          padding-left: 12px;
          padding-right: 0;
          -webkit-transition: width 0.2s ease, background 0.3s ease;
          transition: width 0.2s ease, background 0.3s ease;
        }
      }
      .Input {
        color: #1a1a1a;
        height: 24px;
        line-height: 24px;
        // input
        flex: 1 1;
        padding: 0;
        overflow: hidden;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: transparent;
        border: none;
        resize: none;
        outline: none;
      }
      .searchBtn {
        // 先临时添加颜色 后期改为button组件 直接通过参数控制
        border-color: #0077e6;
        background-color: #0077e6;
        // 分割线
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 32px;
        // color: #8590a6;
        color: #fff;
        text-align: center;
        cursor: pointer;
        // background: none;
        border: 1px solid;
        border-radius: 6px;
        // 去除默认样式
        outline: none;
        &-askButton {
          z-index: 103;
          padding: 0 14px;
          margin-left: 16px;
          transition: opacity 0.3s ease, transform 0.3s ease;
          line-height: 30px;
        }
      }
      button {
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 32px;
        color: #8590a6;
        text-align: center;
        cursor: pointer;
        background: none;
        border: 1px solid;
        border-radius: 3px;
      }
    }
    .appHeader-UserInfo {
      flex: 1 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      .appHeader-notifications {
        margin-right: 40px;
      }
      .appHeader-messages {
        margin-right: 40px;
      }
      .Popover {
        position: relative;
        display: inline-block;
        margin-right: 10px;
        /deep/ .ant-badge-count {
          top: 6px;
          right: 15px;
          // min-width: 12px;
        }
      }
    }
  }
  .pageHead {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
    min-width: 1032px;
    overflow: hidden;
    .pageHead-inner {
      position: relative;
      display: flex;
      width: 1000px;
      height: 52px;
      // padding-left: 8px;
      // padding-right: 13px;
      padding: 0 15px;
      margin: 0 auto;
      align-items: center;
      transition: transform 0.3s;
      a {
        color: inherit;
        text-decoration: none;
      }
      li {
        list-style-type: none;
      }
      .topStoryPageHead-Logo {
        color: #0077e6;
        font-size: 24px;
      }
      .topStoryPageHead {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .topStoryPageHead-main {
          display: flex;
          .topStoryPageHead-tabs {
            display: flex;
            padding: 0 23px;
            justify-content: center;
            align-items: center;
          }
          .topStory-link {
            color: #8590a6;
            font-size: 15px;
            padding: 0 23px;
          }
          .topStory-link:hover {
            color: #444;
          }
          .topStory-tabsLink {
            font-weight: 600;
          }
        }
        .topStoryPageHead-aside {
          display: flex;
          .topStoryPageHead-search {
          }
          .topStoryPageHead-submit {
            margin-left: 20px;
            color: #fff;
            border-color: #0084ff;
          }
        }
      }
    }
  }
  .pageHead:not(.is-shown) {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
.is-hidden {
  .appHeader-inner {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}
.is-fixed {
  z-index: 100;
  position: fixed;
}

.appMain {
  width: 100%;
  height: 100%;
  .topStory {
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    .topStory-container {
      display: flex;
      .topStory-mainColumn {
        height: 100vh;
        flex: 5;
        .topStory-mainColumnCard {
          .topStory-tabCard {
            border-bottom: 1px solid #f0f2f7;
            margin-bottom: 0;
            .topStory-tabs {
              display: flex;
              height: 60px;
              .topStory-tabsLink {
                margin: 20px;
                line-height: 60px;
                display: flex;
                align-items: center;
                //
                color: #1a1a1a;
              }
              .is-active {
                color: #0084ff;
                font-weight: 500;
              }
            }
          }
        }
      }
      .globalSideBar {
        flex: 2;
        background-color: yellow;
        margin-left: 10px;
        height: 100%;
        .card {
          margin-bottom: 10px;
          background: #fff;
          overflow: hidden;
          /deep/ .ant-card-body {
            padding: 0;
          }
        }
        .newGlobalWrite {
          .newGlobalWrite-navTop {
            position: relative;
            padding: 20px 15px;
            border-bottom: 1px solid #f6f6f6;
          }
          .newGlobalWrite-navBottom {
            display: flex;
            .newGlobalWriteBtn-item {
              height: 50px;
              flex: 1 1;
            }
            .newGlobalWriteBtn-item:first-child {
              border-right: 1px solid #f6f6f6;
            }
          }
        }
        .newGlobalWrite-topItem {
          display: inline-flex;
          align-items: center;
          width: 57px;
          margin-right: 13px;
          flex-direction: column;
          cursor: pointer;
          .newGlobalWrite-topButton {
            margin: 0 auto 12px;
          }
          .newGlobalWrite-topTitle {
            font-size: 12px;
            line-height: 1;
            text-align: center;
            color: #444;
            white-space: nowrap;
          }
        }
        .newGlobalWrite-topItem:last-child {
          margin-right: 0;
        }
        .creatorEntrance {
          .creatorEntrance-inner {
            display: flex;
            justify-content: space-between;
            height: 52px;
            line-height: 52px;
            width: 100%;
            padding: 0 16px;
          }
        }
        .globalSideBar-category {
          .globalSideBarCategory-inner {
            padding: 0 16px;
          }
          margin-bottom: 10px;
          background: #fff;
          overflow: hidden;
          .newGlobalWrite-topItem {
            display: inline-flex;
            align-items: center;
            width: 57px;
            margin-right: 25px;
            flex-direction: column;
            cursor: pointer;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          .newGlobalWrite-topItem:nth-child(odd) {
            margin-right: 0px;
          }
        }
      }
    }
  }
}
</style>
