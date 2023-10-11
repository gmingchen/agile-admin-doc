# 图标
在本项目中使用的都是svg图标，使用了Iconfont矢量图标管理平台，所有的svg图标都是存储在该平台中。
::: tip svg
本项目的svg图标可以点击这里进行下载：<a href="https://admin.gumingchen.icu/file/frame/iconfont.zip">svg</a>
:::

## 上传图标
如若新增svg图标可以打开<a href="https://www.iconfont.cn/">Iconfont</a>平台，在你的项目中上传你需要上传的svg图标（现在上传图标需要审核）。上传成功之后更新`Font class`链接并复制链接。

## 使用
将在<a href="https://www.iconfont.cn/">Iconfont</a>平台复制的链接粘贴到项目中`@/components/global/iconfont/index.vue`文件中的style标签下面，替换原来的链接。该文件就是在项目中使用的图标组件。
`@/components/global/iconfont/index.vue`
```html
<template>
  <i class="iconfont" :style="style" :class="`icon-${name}`" />
</template>

<script >
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: () => '14px'
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const style = computed(() => {
      return {
        'font-size': props.size,
        color: props.color
      }
    })
    return {
      style
    }
  }
})
</script>

<style lang="scss" scoped>
@import '//at.alicdn.com/t/font_3225946_00vaoapktln1l.css';
</style>
```

同时复制粘贴到项目中`@/components/icon-select-input/index.vue`文件中的getIconfont方法中，替换原来的链接。该文件是在项目中菜单选择图标的组件。
`@/components/icon-select-input/index.vue`
```html
<template>
  <el-popover
    trigger="click"
    placement="bottom-start"
    width="316px">
    <div>
      <div class="flex-item_f-1 flex-box flex_w-wrap">
        <div class="padding-5" v-for="(item, index) in list" :key="index">
          <el-button
            size="small"
            :class="{ 'is-active': item === value }"
            :disabled="readonly"
            @click="clickHandle(item)">
            <Iconfont :name="item" />
          </el-button>
        </div>
      </div>
      <el-pagination
        class="flex_j_c-space-between"
        v-model:currentPage="page.current"
        v-model:page-size="page.size"
        :total="icons.length"
        layout="prev, next" />
    </div>
    <template #reference>
      <el-input
        v-model="value"
        placeholder="图标"
        clearable
        :readonly="readonly">
        <template #prefix>
          <Iconfont :name="value" v-if="value" />
        </template>
      </el-input>
    </template>
  </el-popover>
</template>

<script >
import { computed, defineComponent, onBeforeMount, reactive, toRefs, watch, watchEffect } from 'vue'
import axios from 'axios'

import useModel from '@/mixins/model'
import { UPDATE_MODEL_EVENT, CONTENT_TYPE, TIME_OUT } from '@/utils/constant'

export default defineComponent({
  emits: [UPDATE_MODEL_EVENT],
  props: {
    modelValue: {
      type: [String],
      required: true
    },
    readonly: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const value = useModel(props)

    const data = reactive({
      icons: [],
      page: {
        current: 1,
        size: 30
      }
    })

    const list = computed(() => {
      const { current, size } = data.page
      let result = data.icons.slice(size * (current - 1), size * (current - 1) + size)
      if (current !== 1 && result.length === 0) {
        result = data.icons.slice(size * (current - 2), size * (current - 2) + size)
      }
      return result
    })

    watchEffect(() => {
      const index = data.icons.indexOf(value.value)
      const page = parseInt(index / data.page.size) + 1
      data.page.current = page
    })

    const getIconfont = () => {
      const service = axios.create({
        timeout: TIME_OUT,
        headers: {
          'Content-Type': CONTENT_TYPE
        }
      })
      service({
        url: '//at.alicdn.com/t/font_3225946_00vaoapktln1l.css',
        method: 'get'
      }).then(r => {
        if (r.status === 200) {
          const arr = r.data.match(/.icon-(.+?):/g)
          data.icons = arr.map(item => {
            return item.match(/.icon-(.+?):/)[1]
          })
        }
      })
    }

    const clickHandle = (icon) => {
      value.value = icon
    }

    onBeforeMount(() => {
      getIconfont()
    })

    return {
      value,
      ...toRefs(data),
      list,
      clickHandle
    }
  }
})
</script>
```
