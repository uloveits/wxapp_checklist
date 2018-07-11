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
        <div v-show="isShow" style="text-align: center;padding-top: 10px;padding-bottom: 10px;color: #cccccc;font-size: 14px">{{noData}}</div>
        <div class="weui-panel__bd" v-for="ctrl in ctrlDatas">
          <div class="weui-media-box weui-media-box_text">
            <div class="weui-media-box__desc">{{ctrl.ctrlName}}</div>
          </div>
        </div>
        <div class="weui-panel__ft" @click="showMore" :disabled="disabled">
          <div class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd">{{more_or_less}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
        </div>
      </div>

    </div>
    <mptoast />
  </div>
</template>
<script>
  import {mptoast} from 'mptoast'
  export default {
    //组建渲染的时候执行
    created () {
      this.getCtrl(true);
    },
    data() {
      return {
        isShow:false,
        ctrlName:'',
        ctrlDatas:[],
        more_or_less:'查看更多',
        noData:'暂无数据',
        disabled:'true'
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
        }
        if(isFirst){
          for(let i= 0;i< this.$firstCount; i++) {
            firstData.push(retData[i]);
          }
          this.ctrlDatas = firstData;
          return;
        }
        this.ctrlDatas = retData;
      },
      async addCtrl() {
        if(this.ctrlName == "") {
          this.$mptoast('请输入点什么吧');
          return;
        }

        await this.$post('ctrl/addCtrl',{ctrlName: this.ctrlName,});

        this.getCtrl();
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
