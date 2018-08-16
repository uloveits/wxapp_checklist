<template>
  <div class="page">
    <div class="page_padding">
      <div class="input_self">
        <div class="input_self_div">
          <label class="weui_label">App名：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="appName" placeholder="请输入要添加的App名..." />
        </div>
      </div>

      <div class="input_self marginTop">
        <div class="input_self_div">
          <label class="weui_label">实施者：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="appUserName" placeholder="请输入实施者的名字..." />
        </div>
      </div>

      <div class="input_self marginTop">
        <div class="input_self_div">
          <label class="weui_label">版&nbsp;&nbsp;&nbsp;本：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="appVersion" placeholder="请输入App的版本号..." />
        </div>
      </div>

      <div style="padding-top: 15px;">
        <button class="btnClass" size="default" @click="addApp">追加</button>
      </div>

      <div class="weui-flex marginTop">
        <div class="weui-flex__item">
          <div class="table_th">App名</div>
        </div>
        <div class="weui-flex__item">
          <div class="table_th">实施者</div>
        </div>
        <div class="weui-flex__item">
          <div class="table_th">版本</div>
        </div>
      </div>
      <div v-show="isShow" class="weui-flex table_tr">
        <div class="weui-flex__item table_td">
          <div class="noDataStyle">暂无数据</div>
        </div>
      </div>
      <div class="weui-flex table_tr" v-for="(appList,index) in appListDatas" :key='index'>
        <div class="weui-flex__item table_td">
          <div class="">{{appList.appName}}</div>
        </div>
        <div class="weui-flex__item table_td">
          <div class="">{{appList.appUser}}</div>
        </div>
        <div class="weui-flex__item table_td">
          <div class="">{{appList.version}}</div>
        </div>
      </div>
      <div  v-show="isShowMore" class="weui-panel__ft" @click="showMore">
        <div class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd" style="font-size: 28rpx">{{more_or_less}}</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>
      </div>
      <mptoast></mptoast>
    </div>
  </div>
</template>

<script>
  import mptoast from 'mptoast'
  export default {
    components:{mptoast},
    //组建渲染的时候执行
    created () {
      this.getApp();
    },
    data() {
      return {
        appName:'',
        appUserName:'',
        appVersion:'',
        appListDatas:[],
        isShow:false,
        isShowMore:false,
        more_or_less:'查看更多',
        noData:'暂无数据',
      }
    },
    computed: {

    },
    methods: {
      async getApp() {
        let retAppData =  await this.$post('app/getApp',{});
        this.appListDatas = retAppData;
      },
      async addApp() {

      },
      showMore(){
        if(this.more_or_less == "查看更多") {
          this.getCtrl(false);
          this.more_or_less = "收起"
        }else {
          this.getCtrl(true);
          this.more_or_less = "查看更多"
        }
      }
    }
  }
</script>
<style scoped>
  .table_th {
    margin: 0px;
    padding: 0 10px;
    text-align: center;
    background-color: #990000;
    border-right:1px solid #ffffff;
    height: 1.6em;
    line-height: 1.6em;
    color: #ffffcc;
  }
  .table_tr {
    background-color: #ffffff;
    border-bottom: 1px solid #f5f7f9;
  }
  .table_td {
    margin: 0px;
    padding: 0 10px;
    text-align: center;
    display: table-cell;
    font-size:26rpx;
    vertical-align: middle;
    border-right: 1px solid #f5f7f9;
  }
</style>
