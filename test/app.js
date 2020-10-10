//
app.startActivity({
  data: 'snssdk1128://aweme/detail/6848422709081214223?refer=web&gd_label=click_wap_download_banner&appParam=&needlaunchlog=1',
});

//
const intent = new Intent();
intent.setAction("android.intent.action.VIEW");
const u = Uri.parse("snssdk1128://aweme/detail/6848422709081214223?refer=web&gd_label=click_wap_download_banner&appParam=&needlaunchlog=1");
intent.setData(u);
app.startIntent(intent);

//
app.openUrl('http://www.baidu.com');

//打开设置
const pn = app.getPackageName('抖音短视频');
console.log(pn);
app.openAppSetting(pn);

//获取设备信息
device.getSerial();