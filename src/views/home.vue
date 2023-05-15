<script setup>
import layoutHeadert from '../components/layout/header.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <layoutHeadert/>
    <div class="home-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.home-body{
  position: fixed;
  width: 100%;
  height: calc(100% - 70px);
  bottom: 0;
  left: 0;
}
</style>
