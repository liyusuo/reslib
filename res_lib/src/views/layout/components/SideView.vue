<template>
  <div>
    <ul>
      <li>
      <router-link to="/lessons/learn">教学课件</router-link>
      </li>
      <li>
      <router-link to="/lessons/tests">在线自测</router-link>
      </li>
      <li>
        <router-link to="/lessons/exams">在线考试</router-link>
      </li>
      <li>
        <router-link to="/lessons/bbs">在线交流</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SideView"
    }
</script>

<style scoped>

</style>
