<template>
  <div>
      <h1>{{ title }}</h1>
      <span v-if="subTitle" class="subtitle">{{subTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'ChartTitle',
  props: ['title', 'subTitle']
};
</script>

<style scoped>
.subtitle {
    color: gray;
    font-size: 15px;
    font-weight: normal;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
