<template>
  <div class="header-mobile">
    <x-header :left-options="{backText: '', showBack}" :right-options="{showMore}" @on-click-more="showMenus = true">{{title}}</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderMobile",
    props: {
      title: {
        type: String,
        default: ''
      },
      showBack: {
        type: Boolean,
        default: true
      },
      showMore: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        menus: {
          menu1: '',
          menu2: ''
        },
        showMenus: false
      }
    }
  }
</script>

<style scoped>
  .header-mobile {
    display: none;
  }

  @media (max-width:768px){
    .header-mobile {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      width: 100%;
      display: block;
    }
  }
</style>
