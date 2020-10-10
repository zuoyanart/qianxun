function before() {
  app.launchApp("抖音短视频");
  sleep(1000);
  ui.text('推荐').findOne(30 * 1000);
  ui.desc('直播').findOne().click();
  sleep(2000);

}


function qiang(hbBtn) {
  if (hbBtn) {
    console.log('time', time);
    if (time >= 3) {
      sleep((time - 3) * 1000);
    }
    rect = hbBtn.bounds();
    let startTime = new Date().getTime();
    while (true && getActive()) {
      // click(rect.centerX(), rect.centerY());
      click(tools.random(rect.left() + 5, rect.right() - 5), tools.random(rect.top() + 5, rect.bottom() - 5));
      sleep(100);
      if (new Date().getTime() - startTime > 6000) {
        break;
      }
    }
    closeHongBao();
  }
}

function closeHongBao() {
  back();
  sleep(800);
}

let time = 0;

function main() {
  let btn = '';
  while (true && getActive()) {
    try {
      swipe(20, 1500, 20, 300, 600);
      console.log('swipe');
      sleep(5 * 1000);
      let hbBtn = ui.className('android.widget.ImageView').depth(22).parentClassName('android.widget.FrameLayout').findOne();
      if (hbBtn) {
        console.log(hbBtn);
        console.log('红包存在');
        rect = hbBtn.bounds();
        let checkTimes = 0;
        while (true && getActive() && checkTimes < 10) {
          click(rect.centerX(), rect.centerY());
          console.log(rect.centerX(), rect.centerY());
          sleep(1000);
          hbBtn = ui.className('android.widget.Button').depth(5).findOne();
          if (hbBtn) {
            time = hbBtn.getText();
            if (time.indexOf('分') > -1) {
              console.log('发现分');
              closeHongBao();
              if (time.split('分')[0] > 2) {
                time = 0;
                hbBtn = null;
                break;
              } else {
                sleep(30 * 1000);
                const zsBtn = ui.text('立即赠送').findOne();
                if (zsBtn) {
                  back();
                  sleep(500);
                }
              }
              checkTimes++;
            } else {
              time = parseInt(time) - 1;
              break;
            }
          } else {
            hbBtn = null;
            break;
          }
        }
        qiang(hbBtn);
      } else {
        let btn = ui.text('订单').findOne();
        console.log(btn);
        if (btn) {
          back();
          sleep(500);
        }
        console.log('没有发现');
        continue;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

before();
main();