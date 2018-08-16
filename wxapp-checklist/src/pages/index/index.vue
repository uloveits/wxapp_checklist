<template>
  <div class="page">
      <div class="logo_bg" >
        <img class="logo" :src="imgUrl">
        <div style="color: #d81e06">{{title}}</div>
      </div>
      <div class="weui-cells weui-cells_after-title">
        <navigator url="/pages/controlsList/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">控件一览</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="/pages/ctrlCaseList/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">控件每Case一览</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="/pages/appList/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">App一览</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">App每控件一览</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">App测试</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">Excel导出</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        imgUrl: '/static/img/logo.png',
        title: 'checklist-support'
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .logo {
    width: 100px;
    height:80px;
  }
  .logo_bg {
    height:160px;
    width:100%;
    text-align:center;
    padding-top:20px;
    background: #495060;

  }
</style>
