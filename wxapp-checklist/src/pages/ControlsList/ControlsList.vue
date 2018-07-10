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

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ctrlName:'',
      }
    },
    computed: {

    },
    methods: {
      addCtrl() {
        console.log(1);
        this.$mptoast('请输入点什么吧', 'none',1500);
        console.log(2);
        wx.request({
          url: 'http://localhost:3000/api/ctrl/getCtrl', //仅为示例，并非真实的接口地址
          data: {},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            console.log(res.body)
          }
        })
      }

    }
  }
</script>

<style scoped>
  .input_self {
    background: #ffffff;
    height: 40px;
    padding-left:8px;

  }
  .input_self_div {
    display: inline-block;
    vertical-align: middle;
    padding-top:6px;
  }

</style>
