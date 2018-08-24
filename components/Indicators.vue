<template>
  <div class="indicators-container" :style="indicatorsStyle">
    <span v-for="(item, key) in list " :key="key" :class="{active: key === nowKey}"></span>
  </div>
</template>

<script>
    export default {
      name: "Indicators",
      model: {
        prop: 'nowKey',
        event: 'nowKeyChange'
      },
      props: {
        indicatorsStyle: {
          type: Object,
          default: o => {
            return {}
          }
        },
        list: {
          type: Array,
          default: o => {
            return [1,1,1,1,1]
          }
        },
        nowKey:{
          type: Number,
          default: 0
        }
      }
    }
</script>

<style scoped>
  .indicators-container{
    width: calc(100% - 10px);
    height: 20px;
    position: absolute;
    left:0;
    bottom: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indicators-container span{
     width: 6px;
     height: 6px;
     border-radius: 5px;
     background-color: #DADADA;
     margin-right:4px;
   }

  .indicators-container span.active{
    background-color: #333;
  }
</style>
