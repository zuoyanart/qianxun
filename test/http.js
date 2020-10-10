console.log(files.getRootDir());
data = http.download('https://pic.yuntu.ru/2017/11/03/Wallpaper-OS-X-El-Capitan-Mac010c637727463487.jpg', files.getRootDir() + '/1.jpg');
console.log(data);
media.scanFile(files.getRootDir() + '/1.jpg');

data = http.get('www.baidu.com');

// data = http.upload('http://192.168.3.161:8465/admin/upload/img', files.getRootDir() + '/1.jpg', {
//   headers: {
//     "token": "54as4d54"
//   }
// });
console.log(data);
console.log(data.code);
console.log(data.message);
console.log(data.headers());
console.log(data.request().method());
console.log(data.method());
console.log(data.url());
console.log(data.body());
// console.log(JSON.stringify(data.bodyJson()));