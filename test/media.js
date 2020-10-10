imgages.requestScreenCapture();
const path = files.getDcim();
const imgPath = path + '/1.jpg';
console.log(imgPath);
imgages.captureScreen(imgPath);
media.scanFile(imgPath);