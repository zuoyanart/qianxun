app.startActivity({
  data: 'snssdk1128://aweme/detail/6848422709081214223?refer=web&gd_label=click_wap_download_banner&appParam=&needlaunchlog=1',
});


app.startActivityNative("", 'snssdk1128://aweme/detail/6848422709081214223?refer=web&gd_label=click_wap_download_banner&appParam=&needlaunchlog=1', "");

const intent = new Intent();
intent.setAction("android.intent.action.VIEW");
const u = Uri.parse("snssdk1128://aweme/detail/6848422709081214223?refer=web&gd_label=click_wap_download_banner&appParam=&needlaunchlog=1");
intent.setData(u);
app.startActivityByIntent(intent);


app.openUrl('http://www.baidu.com');
app.startActivityNative("", 'http://www.baidu.com', "");

const pn = app.getPackageName('抖音短视频');
console.log(pn);
app.openAppSetting(pn);


device.getSerial();