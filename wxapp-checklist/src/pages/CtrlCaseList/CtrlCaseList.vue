<template>
  <div class="page">
    <div class="page_padding">
      <div class="input_self">
          <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="ctrlList">
            <div class="weui-cell weui-cell_access" style="padding-left:0px;padding-top:6px;">
              <div v-show="false">{{ctrlId}}</div>
              <div class="weui-cell__bd">{{ctrlName}}</div>
              <div class="weui-cell__ft arrow_down"></div>
            </div>
          </picker>
      </div>

      <div class="input_self marginTop" >
        <div class="input_self_div">
          <label class="weui_label">Case添加：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="caseInfoValue" placeholder="请输入您要添加的Case..." />
        </div>
      </div>

      <div style="padding-top: 15px;">
        <button class="btnClass" size="default" @click="addCtrlCase">添加</button>
      </div>

      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">Case列表</div>
        <div v-show="isShow" class="noDataStyle">{{noData}}</div>
        <div class="weui-panel__bd" v-for="(ctrlCase,index) in ctrlCaseDatas" :key='index'>
          <div class="weui-media-box weui-media-box_text">
            <div class="weui-media-box__desc">{{ctrlCase.caseInfo}}</div>
          </div>
        </div>

        <div v-show="isShowMore" class="weui-panel__ft" @click="showMore">
          <div class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd" style="font-size: 28rpx">{{more_or_less}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
        </div>
        <mptoast></mptoast>
      </div>
    </div>
  </div>
</template>

<script>
  import mptoast from 'mptoast'
  var retCtrlData = [];
  export default {
    components:{mptoast},
    //组建渲染的时候执行
    created () {
      this.getCtrl();
      this.getCtrlCase(true);
    },
    data() {
      return {
        isShow:false,
        isShowMore:false,
        caseInfoValue:'',
        ctrlId:'',
        ctrlName:'请选择控件类型',
        more_or_less:'查看更多',
        noData:'暂无数据',
        indexPicker:0,
        ctrlList: [],
        ctrlCaseDatas:[],
      }
    },
    methods: {
      PickerChange(e) {
        //this.ctrlCaseDatas = [];
        //获取id的控件名字和ID
        this.ctrlName = this.ctrlList[e.mp.detail.value];
        this.ctrlId = retCtrlData[e.mp.detail.value].id;

        this.getCtrlCase(true);

      },

      async getCtrl() {
        let arrCtrlName = [];
        retCtrlData = await this.$post('ctrl/getCtrl',{});

        //给Piceker 的 range赋值
        for(let i= 0; i< retCtrlData.length; i++) {
          arrCtrlName.push(retCtrlData[i].ctrlName);
        }

        this.ctrlList = arrCtrlName;
      },

      async getCtrlCase(isFirst) {
        let firstData= [];
        let retCtrlCaseData = [];
        retCtrlCaseData = await this.$post('ctrl/getCtrlCase',{ctrlId: this.ctrlId,});

        if(retCtrlCaseData.length == 0){
          this.isShow = true;
          return;
        }else if(retCtrlCaseData.length > this.$firstCount){
          this.isShowMore = true;
        }
        this.isShow = false;

        //第一次加载时候不全部加载
        if(isFirst){
          let end = (retCtrlCaseData.length < this.$firstCount) ? retCtrlCaseData.length :this.$firstCount;
          for(let i= 0;i< end; i++) {
            firstData.push(retCtrlCaseData[i]);
          }
          this.ctrlCaseDatas = firstData;
          console.log(this.ctrlCaseDatas);
          return;
        }
        this.ctrlCaseDatas = retCtrlCaseData;
      },

      async addCtrlCase(){

        if(this.ctrlId == "") {
          this.$mptoast('请选择要添加case的控件');
          return;
        }
        if(this.caseInfoValue == "" ) {
          this.$mptoast('请输入要追加的Case名称');
          return;
        }

        let caseId = this.$uuid();

        await this.$post('ctrl/addCtrlCase',{caseId: caseId,
                                                  ctrlId: this.ctrlId,
                                                  caseInfo: this.caseInfoValue,});
        this.getCtrlCase(true);
        this.caseInfoValue = "";

      },
      showMore(){
        if(this.more_or_less == "查看更多") {
          this.getCtrlCase(false);
          this.more_or_less = "收起"
        }else {
          this.getCtrlCase(true);
          this.more_or_less = "查看更多"
        }
      }
    }
  }
</script>

<style scoped>
.arrow_down {
  display: inline-block;
  vertical-align: top;
  border-top: 4px solid #495060;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
}
</style>

