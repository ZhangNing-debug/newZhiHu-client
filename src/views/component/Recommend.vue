<template>
  <div>
    <div class="Card topStoryItem topStoryItem-isRecommend" v-for="item in list" :key="item">
      <div :class="['contentItem', 'articleItem']">
        <!-- 标题 -->
        <h2 :class="['contentItem-title']">
          <a href="http://"> {{item.title}}</a>
        </h2>

        <div :class="['richContent', 'is-collapsed']" :style="{paddingBottom: scrollTop >= 100 && scrollTop <= 130 ? '52px' : ''}">
          <!-- 这里准备了两个 一个是未展开原文的 -->
          <div :class="['richContent-inner']" v-if="!item.isExpand">
            <span>{{item.partContent}}</span>
            <!-- <button> <span>↓</span></button> -->
            <a-button type="link" @click="showContentChange(item)"> 阅读全文 <DownOutlined /> </a-button>
          </div>
          <!-- 展开原文的 -->
          <div :class="['richContent-inner']" v-else>
            <span>{{item.allContent}}</span>
          </div>
          <!-- 对文章的操作 点赞评论分享收藏 -->
          <div :class="['contentItem-actions',scrollTop >= 0 &&scrollTop <= 115 && item.isExpand ?  'is-fixed' : '']">
            <span :class="['link-ops']">
              <!-- 赞同 -->
              <a-button type="primary" :class="[item.linkStatus && 'link']">
                <span>
                  <CaretUpOutlined />
                </span>

                <span v-show="item.linkStatus">已</span>
                <span>赞同</span>
                <span>{{item.link}}</span>
              </a-button>
              <!-- 反对 -->
              <a-button type="primary">
                <CaretDownOutlined />
              </a-button>
            </span>
            <!-- 评论 -->
            <a-button type="link">
              <CommentOutlined />
              <!-- <icon>sss</icon> -->
              {{item.comments}}条 评论
            </a-button>
            <!-- 分享 -->
            <a-dropdown :trigger="['click']">
                <a-button type="link" class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                  <ZIcon type="icon-icon_share"></ZIcon>
                  分享
                </a-button>
                <template v-slot:overlay>
                  <a-menu>
                    <a-menu-item>
                      <a href="javascript:;">复制链接</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">新浪微博</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">微信扫一扫</a>
                    </a-menu-item>
                  </a-menu>
                </template>
            </a-dropdown>
            <!-- 收藏 -->
            <a-button type="link">
              <ZIcon type="icon-icon_star" />
              收藏
            </a-button>
            <!-- 举报 -->
            <a-button type="link">
              <ZIcon type="icon-icon_task" />
              举报
            </a-button>
            <!-- 更多 -->
            <a-dropdown :placement="scrollTop >= 0 && scrollTop <= 115 && item.isExpand ?  'topCenter' : 'bottomCenter'"  :trigger="['click']">
              <a-button type="link" class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                ...
              </a-button>
              <template v-slot:overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">喜欢</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">没有帮助</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">举报</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">禁止转载</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">不感兴趣</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <!-- 收起 -->
            <a-button type="link" v-if="item.isExpand" @click="showContentChange(item)" :style="{marginLeft:'35px'}">
              收起
              <UpOutlined />
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createFromIconfontCN,
  CaretUpOutlined,
  CaretDownOutlined,
  CommentOutlined,
  DownOutlined,
  UpOutlined
} from '@ant-design/icons-vue';
const ZIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2018651_15jhxv3kjwz.js' // 在 iconfont.cn 上生成
});

import { Dropdown, Menu } from 'ant-design-vue';
import { ref, reactive, toRefs, computed } from 'vue';
import useScroll from '@use/scroll';
export default {
  name: 'Recommend',
  components: {
    // Icon
    ZIcon,
    CaretUpOutlined,
    CaretDownOutlined,
    CommentOutlined,
    DownOutlined,
    UpOutlined,
    //
    aDropdown: Dropdown,
    aMenu: Menu,
    aMenuItem: Menu.Item
  },
  setup (props, ctx) {
    const num = ref(0);
    const state = reactive({
      list: [
        {
          title: '写给初中级前端的高级进阶指南。',
          partContent: '晨曦时梦见兮： 前言 我曾经一度很迷茫，在学了 Vue、React 的实战开发和应用以后，好像遇到了一些瓶颈，不知道该怎样继续深入下去。相信这也是很多一…',
          allContent: `前言我曾经一度很迷茫，在学了 Vue、React 的实战开发和应用以后，好像遇到了一些瓶颈，不知道该怎样继续深入下去。相信这也是很多一两年经验的前端工程师所遇到共同问题，这篇文章，笔者想结合自己的一些成长经历整理出一些路线，帮助各位初中级前端工程师少走一些弯路。这篇文章会提到非常非常多的学习路线和链接，如果你还在初中级的阶段，不必太焦虑，可以把这篇文章作为一个进阶的路线图，在未来的时日里朝着这个方向努力就好。我也并不是说这篇文章是进阶高级工程师的唯一一条路线，如果你在业务上做的精进，亦或是能在沟通上八面玲珑，配合各方面力量把项目做的漂漂亮亮，那你也一样可以拥有这个头衔。本文只是我自己的一个成长路线总结。本篇文章面对的人群是开发经验1到3年的初中级前端工程师，希望能和你们交个心。已经晋升高级前端的同学，欢迎你在评论区留下你的心得，补充我的一些缺失和不足。笔者本人 17 年毕业于一所普通的本科学校，20 年 6 月在三年经验的时候顺利通过面试进入大厂，职级是高级前端开发。我的 github 地址，欢迎 follow，我会持续更新一些值得你关注的项目。我的 blog 地址，这里会持续更新，点个 star 不失联！✨基础能力我整理了一篇中级前端的必备技术栈能力，写给女朋友的中级前端面试秘籍 。这篇文章里的技术栈当然都是需要扎实掌握的，（其实我自己也有一些漏缺，偷偷补一下）。当然了，上进心十足的你不会一直满足于做中级前端，我们要继续向上，升职加薪，迎娶白富美！JavaScript原生 js 系列冴羽大佬的这篇博客里，除了 undescore 的部分，你需要全部都能掌握。并且灵活的运用到开发中去。JavaScript 深入系列、JavaScript 专题系列、ES6 系列完全熟练掌握 eventLoop。tasks-microtasks-queues-and-schedulesPromise你需要阅读 Promise A+规范，注意其中的细节，并且灵活的运用到开发当中去。Promise A+ 英文文档 你需要跟着精品教程手写一遍 Promise，对里面的细节深入思考，并且把其中异步等待、错误处理等等细节融会贯通到你的开发思想里去。剖析 Promise 内部结构，一步一步实现一个完整的、能通过所有 Test case 的 Promise 类 最后，对于 promise 的核心，异步的链式调用，你必须能写出来简化版的代码。最简实现 Promise，支持异步链式调用（20 行） 题外话，当时精炼这 20 行真的绕了我好久  ，但是搞明白了会有种恍然大悟的感觉。这种异步队列的技巧要融会贯通。async await对于 Promise 我们非常熟悉了，进一步延伸到 async await，这是目前开发中非常非常常用的异步处理方式，我们最好是熟悉它的 babel 编译后的源码。手写 async await 的最简实现（20 行搞定）babel 对于 async await 配合 generator 函数，做的非常巧妙，这里面的思想我们也要去学习，如何递归的处理一个串行的 promise 链？这个技巧在axios 的源码里也有应用。平常经常用的拦截器，本质上就是一串 promise 的串行执行。当然，如果你还有余力的话，也可以继续深入的去看 generator 函数的 babel 编译源码。不强制要求，毕竟 generator 函数在开发中已经用的非常少了。ES6 系列之 Babel 将 Generator 编译成了什么样子异常处理你必须精通异步场景下的错误处理，这是高级工程师必备的技能，如果开发中的异常被你写的库给吞掉了，那岂不是可笑。Callback Promise Generator Async-Await 和异常处理的演进插件机制你需要大概理解前端各个库中的插件机制是如何实现的，在你自己开发一些库的时候也能融入自己适合的插件机制。Koa 的洋葱中间件，Redux 的中间件，Axios 的拦截器让你迷惑吗？实现一个精简版的就彻底搞懂了。`,
          comments: 60,
          link: 2920,
          linkStatus: true,
          isExpand: false
        },
        {
          title: '科技届春晚索然无味！苹果发布会暗中曝光iPhone12发布日期？',
          content: '买Apple Watch不送充电器！环保先锋苹果放鸽iPhone12',
          comments: 10,
          link: 666,
          linkStatus: false
        }
      ]
    });
    const { scrollTop } = useScroll();
    console.log(scrollTop);
    const showContentChange = (item) => {
      console.log('显示内容切换', item);
      item.isExpand = !item.isExpand;
    };
    return {
      num,
      ...toRefs(state),
      showContentChange,
      scrollTop
    };
  }
};
</script>
<style lang="less" scoped>
.is-fixed {
  position: fixed;
  bottom: 0;
  z-index: 2;
  box-shadow: 0 -1px 3px rgba(18,18,18,.1);
}
.topStoryItem {
  border-radius: 0;
  overflow: visible;
  overflow: initial;
  position: relative;
  padding: 16px 20px;
  .contentItem {
    .contentItem-title {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.6;
    }
  }

  .richContent {
    .richContent-inner {
    }
    .contentItem-actions {
      height: 52px;
      //
      color: #646464;
      background: #fff;
      align-items: center;
      padding: 10px 20px;
      display: flex;
      margin: 0 -20px 0px;
      width: 658px;
      .link-ops {
        ::v-deep(.ant-btn-primary) {
          color: #0084ff;
          background-color: rgba(0,132,255,.1);
          border-color: transparent;
          margin-right: 5px;

          padding: 0 10px;
        }
        ::v-deep(.ant-btn-primary):nth-child(2) {
          .anticon {
            margin-right: 0;
          }
        }
        .link {
          color: #fff;
          background-color: #0084ff;
        }
      }

      ::v-deep(.ant-btn-link) {
        color: #76839b;
        height:34px;
        padding: 0 10px;
      }
      ::v-deep(.ant-btn) > .anticon + span {
        margin-left: 0;
      }
      .anticon {
        margin-right: 5px;
      }
    }
  }
}
.topStoryItem-isRecommend {
  padding: 20px;
}
.Card:not(.topstory-tabCard) {
  margin-bottom: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #f0f2f7;
}
</style>
