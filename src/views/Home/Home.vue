<template>

  <div class="home">
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    props: {},
    computed: {},
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
    created: function () {
      //  实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，还不可用。需要初始化处理一些数据时会比较有用。

    },
    mounted(){
      //  el挂载到实例上后会调用，第一个业务逻辑一般从这里开始。
    },
    beforeDestroy: function () {
      //  实例销毁之前调用。主要是解绑一些使用addEventListener监听的事件等。
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
  }
</script>
<style scoped>
  .home {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 60px;
  }
</style>
