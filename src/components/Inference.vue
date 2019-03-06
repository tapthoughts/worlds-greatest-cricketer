<template>
    <div class="inference-container">
        <h1>Inference from Chart</h1>
        <span v-if="inference" class="inference">{{inference}}</span>
    </div>
</template>

<script>
export default {
  name: 'Inference',
  props: ['inference']
};
</script>

<style scoped>
.inference-container {
    width: 25%;
    display: block;
    float: right;
    padding: 12px;
    margin-top: 150px;
    border-left: 2px solid grey;
    height: 250px;
}

.inference {
    color: gray;
    font-size: 15px;
    font-weight: normal;
    display: block;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

</style>
