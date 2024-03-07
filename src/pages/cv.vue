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
  overflow-x: hidden;
}

.cv-page {
  background: white;
  position: relative;
  width: 1200px;
  min-width: 1200px;
  display: block;
  overflow: hidden;
}

.cv-page-inner {
  height: 100%;
  width: 100%;
}
.resume {
  height: 100%;
  width: 100%;
}

</style>../cvs/cool.vue
