<template>
  <div class="wrap">
    <div class="container">
      <MainComp />
      <SubViewComp />
    </div>
  </div>
</template>

<script>
import MainComp from '../components/MainComp.vue';
import SubViewComp from '../components/SubViewComp.vue';

export default {
  components: {
    MainComp,
    SubViewComp,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.wrap {
  @include center;
  width: 100%;
  height: 100vh;
  font-size: 16px;
}

.container {
  @include center-sb;
  width: 55%;
  height: 90%;
  max-width: 1920px;
  max-height: 1354px;
}
</style>
