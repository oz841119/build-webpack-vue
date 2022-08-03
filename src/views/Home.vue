<template>
  <h1>搭建Webpack環境使用Vue3</h1>
  <img src="../assets/images/頭上裝攝影機.jpg" alt="">
  {{num}}
</template>


<script>
import sum from '../assets/script/sum.js'

export default {
  setup() {
    const num = sum(10, 20, 30)
    return {num}
  }
}
</script>

<style lang='scss'>
  h1 {
    font-size: 12px;
  }
</style>