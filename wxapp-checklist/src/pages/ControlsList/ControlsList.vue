<template>
  <div class="page">
    <div class="page_padding">
      <div class="input_self">
        <div class="input_self_div">
          <label class="weui_label">控件名：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="ctrlName" placeholder="请输入控件名..." />
        </div>
      </div>
      <div style="padding-top: 15px;">
        <button class="btnClass" size="default" @click="addCtrl">追加</button>
      </div>

      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">控件列表</div>
        <div v-show="isShow" class="noDataStyle">{{noData}}</div>
        <div class="weui-panel__bd" v-for="(ctrl,index) in ctrlDatas" :key='index'>
          <div class="weui-media-box weui-media-box_text">
            <div class="weui-media-box__desc">{{ctrl.ctrlName}}</div>
          </div>
        </div>
        <div  v-show="isShowMore" class="weui-panel__ft" @click="showMore">
          <div class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd" style="font-size: 28rpx">{{more_or_less}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
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
      this.getCtrl(true);
    },
    data() {
      return {
        isShow:true,
        isShowMore:false,
        ctrlName:'',
        ctrlDatas:[],
        more_or_less:'查看更多',
        noData:'暂无数据',
      }
    },
    computed: {

    },
    methods: {
      //得到控件列表
      async getCtrl(isFirst) {
        let retData = [];
        let firstData = []
        retData = await this.$post('ctrl/getCtrl',{});

        if(retData.length == 0 || retData == undefined) {
          this.isShow = true;
          return;
        }else if(retData.length >= this.$firstCount) {
          this.isShowMore = true;
        }
        this.isShow = false;

        //第一次加载时候不全部加载
        if(isFirst){
          let end = (retData.length < this.$firstCount) ? retData.length :this.$firstCount;
          for(let i= 0;i< end; i++) {
            firstData.push(retData[i]);
          }
          this.ctrlDatas = firstData;
          return;
        }
        this.ctrlDatas = retData;
      },
      async addCtrl() {
        if(this.ctrlName == "") {
          this.$mptoast('请输入要追加的控件名称');
          return;
        }
        await this.$post('ctrl/addCtrl',{ctrlName: this.ctrlName,});
        this.getCtrl(true);
        this.ctrlName = "";
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


</style>
