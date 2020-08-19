<template>
    <!-- top -->
    <header :class="['appHeader',scrollTop > 10 && 'is-fixed']" :style="[ scrollTop > 10 && {width: '100vw',top:0,left:0}]">
        <div class="appHeader-inner">
            <a href="/" class="appHeader-Logo">知乎</a>
            <ul class="appHeader-Tabs">
                <li v-for="(item, index) in listData" :key="index" class="Tabs-item appHeader-Tab">
                    <a href="/" class="Tabs-link appHeader-TabsLink">{{ item }}</a>
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
                    <button id="Popover16-toggle" class="appHeader-notifications">
                        通知
                    </button>
                </div>
                <div class="Popover">
                    <button id="Popover16-toggle" class="appHeader-messages">私信</button>
                </div>
                <div class="AppHeader-profile">
                    <div class="Popover AppHeader-menu">
                        <button id="Popover14-toggle" type="button">
                            <img
                                src="https://pic4.zhimg.com/da8e974dc_is.jpg"
                                class="Avatar AppHeader-profileAvatar"
                                width="30"
                                height="30"
                                srcset="https://pic4.zhimg.com/da8e974dc_im.jpg 2x"
                            />
                        </button>
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
                <div class="GlobalSideBar"></div>
            </div>
        </div>
    </main>
    <!-- right -->
    <!-- footer -->
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
// import {Button} from 'element-ui';

export default {
  setup() {
    const state = reactive({
      listData: ['首页', '发现', '等你来答'],
      capsTooltip: false,
      window: null,
      scrollTop: null
    })
    const handleScroll = (e) => {
      state.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('滚动条', e, scrollTop)
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
    width: 100vw;
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
            }
        }
    }
}
.is-fixed {
  z-index: 100;
  position: fixed;
}

.appMain {
    .topStory {
        width: 1000px;
        margin: 0 auto;
        background-color: blue;
        .topStory-container {
            display: flex;
            .topStory-mainColumn {
                height: 100vh;
                flex: 5;
                background-color: red;
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
            .GlobalSideBar {
                flex: 2;
                background-color: yellow;
            }
        }
    }
}
</style>
