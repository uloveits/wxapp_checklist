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

  .page_padding {
    padding-top: 15px;
    padding-left: 16px;
    padding-right: 16px;
  }

  page {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    font-size:16px;
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
    height:40px;
    line-height: 2;

  }
</style>
