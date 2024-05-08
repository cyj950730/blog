---
outline: deep
---

# vue3 表单的数据双向绑定

<script>
<input
  :value="text"
  @input="event => text = event.target.value">
<input v-model="text">

</script>

## 如何时间组件之间的数据双向绑定

<script>

 </script>

## 解析

什么是单向绑定，什么是双向绑定
单向绑定：数据驱动视图，ref react 返回的代理对象，发生变化的时候，就会驱动 template 模板，然后重新渲染页面
双向绑定，数据驱动试图，试图驱动数据的变化
这个地方我们通过 input 事件 注意这个地方还有一个 change 事件，但是 chang 事件是需要失去焦点的，所以不符合业务场景，拿到输入的值，然后赋值给 text 变量，然后通过 v-model 绑定到 input 上，这样就实现了双向绑定，所以说 v-model 就是 input 事件和赋值操作的封装
