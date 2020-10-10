events.on("notice", function (data) {
  console.log(data.getTitle());
  console.log(data.getText());
  data.click();
});

//保持持续运行11
while (true && getActive()) {

}