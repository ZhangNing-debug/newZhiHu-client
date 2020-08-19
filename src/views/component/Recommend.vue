<template>
    <div>
        <div class="Card topStoryItem topStoryItem-isRecommend" v-for="item in list" :key="item">
            <div :class="['contentItem', 'articleItem']">
                <!-- 标题 -->
                <h2 :class="['contentItem-title']">
                    <a href="http://">
                        写给初中级前端的高级进阶指南。
                    </a>
                </h2>
                <!-- 这里准备了两个 一个是未展开原文的 -->
                <div :class="['richContent', 'is-collapsed']">
                    <div :class="['richContent-inner']">
                        <span
                            >晨曦时梦见兮： 前言 我曾经一度很迷茫，在学了 Vue、React
                            的实战开发和应用以后，好像遇到了一些瓶颈，不知道该怎样继续深入下去。相信这也是很多一…</span
                        >
                        <button>阅读全文 <span>↓</span></button>
                    </div>
                    <!-- 对文章的操作 点赞评论分享收藏 -->
                    <div :class="['contentItem-actions']">
                        <span>
                            <!-- 赞同 -->
                            <button><span>↑</span>已赞同 2920</button>
                            <!-- 反对 -->
                            <button>↓</button>
                        </span>
                        <!-- 评论 -->
                        <button>
                            <!-- <icon>sss</icon> -->
                            60条 评论
                        </button>
                        <button>分享</button>
                        <button>收藏</button>
                        <button>举报</button>
                        <div>更多</div>
                    </div>
                </div>
                <!-- 展开原文的 -->
                <!-- <div :class="['richContent']"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Recommend',
  setup(props, ctx) {
    const num = ref(0)
    const list = ['1', '2', '3', '4', '5', '6', '7']
    return {
      num,
      list
    }
  }
}
</script>
<style lang="less" scoped>
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
