<template>
  <div id="app">
    <router-view/>
    <menu-bottom :menus="menusArray" @menu-bottom-click="handleMenuBottom"></menu-bottom>
  </div>
</template>

<script>

  export default {
    name: 'App',
    component: {},
    data(){
      return {
        menusArray: [
          {
            id: 1,
            txt: '主页',
            img: 'icon-home',
            active: true,
          },
          {
            id: 2,
            txt: '发现',
            img: 'icon-zhinanzhen',
            active: false,
          },
          {
            id: 3,
            txt: '收件箱',
            img: 'icon-youxiang',
            active: false,
          },
          {
            id: 4,
            txt: '档案',
            img: 'icon-fl-renyuan',
            active: false
          }
        ]
      }
    },
    methods: {
      handleMenuBottom(data){
        let _this = this;
        let target = data.target;
        for (let i = 0, length = _this.menusArray.length; i < length; i++) {
          _this.menusArray[i].active = _this.menusArray[i].id === target;
        }
      }
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
