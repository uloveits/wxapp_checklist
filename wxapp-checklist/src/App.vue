<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  /*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/
  @import '~./public/styles/weui.css';
  .page{
    height: 100%;
  }
  .marginTop {
    margin-top: 20rpx;
  }
  .page_padding {
    padding-top: 30rpx;
    padding-left: 32rpx;
    padding-right: 32rpx;
    padding-bottom: 30rpx;
  }
  .noDataStyle {
    text-align: center;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    color: #cccccc;
    font-size: 28rpx
  }

  page {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    font-size:32rpx;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f5f7f9;
    height:100%;
    width:100%;
  }
  .btnClass {
    background: #495060;
    color: #ffffff;
    height:80rpx;
    line-height: 2;
  }
  .input_self {
    background: #ffffff;
    height: 80rpx;
    padding-left:16rpx;

  }
  .input_self_div {
    display: inline-block;
    vertical-align: middle;
    padding-top:12rpx;
  }
  .weui-panel__hd {
    font-weight: bold;
    color: #000;
  }
  .weui-cell__bd{
    font-size: 32rpx;
  }
</style>
