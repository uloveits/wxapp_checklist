<template>
  <div class="page">
    <div class="page_padding">

      <div class="input_self">
        <div class="input_self_div">
          <label class="weui_label">Case添加：</label>
        </div>
        <div class="input_self_div">
          <input class="cellText" v-model="ctrlName" placeholder="请输入您要添加..." />
        </div>
      </div>

      <div style="padding-top: 15px;">
        <button class="btnClass" size="default" @click="addCtrl">添加</button>
      </div>

      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">控件的Case</div>
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
