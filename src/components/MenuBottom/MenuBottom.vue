<template>

  <div class="menu-bottom-content">
    <div v-for="(item,index) in menus" :key="index" @click="handleClick(item.id)">
      <svg class="icon" aria-hidden="true">
        <use :href="'#'+item.img"></use>
      </svg>
      <transition name="txt">
        <span v-show="item.active">{{item.txt}}</span>
      </transition>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    props: {
      menus: {
        type: Array,
        default: [
          {
            id: 1,
            txt: '主页',
            img: '',
            active: true,
          },
          {
            id: 2,
            txt: '发现',
            img: '',
            active: false,
          }
        ]
      }
    },
    computed: {},
    data(){
      return {}
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
      handleClick(id){
        let data = {
          target: id
        };
        this.$emit('menu-bottom-click', data);
      }
    }

  }
</script>
<style scoped lang="scss">
  .menu-bottom-content {
    border-top: solid 3px lightgray;
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & div {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      & span {
        font-size: 14px;
      }
      & svg {
        font-size: 24px;
        margin: auto;
      }
    }

    .txt-enter-active, txt-leave-active {
      transition: all .6s;
    }
    .txt-enter, .txt-leave-to {
      opacity: 0;
      transform: scale(0);
    }
    .txt-enter-to, .txt-leave {
      opacity: 1;
      transform: scale(1);
    }

  }
</style>
