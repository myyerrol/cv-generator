<template>
<div class="cv-wrapper">
  <div class="cv-page">
    <div class="cv-page-inner">
      <cool></cool>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import cool from '../cvs/cool.vue';
export default Vue.component('cv', {
    name: 'app',
    component: cool
});
</script>

<style scoped>
.cv-wrapper {
  display: flex;
  justify-content: center;
  min-width: 750px;
}
.cv-page {
  background: white;
  position: relative;
  display: block;
  overflow: hidden;
  width: 1000px;
}
.cv-page-inner {
  height: 100%;
  width: 100%;
}
.cv {
  height: 100%;
  width: 100%;
}

</style>
