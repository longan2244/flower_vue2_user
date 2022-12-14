var isIphoneX = window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && testUA('iPhone')

if (isIphoneX) {

  check()

  window.onscroll = throttle(check, 200)

}

function check() {

  // 处理lib-flexible放大viewport的情况

  var scale = window.innerWidth / window.screen.width

  // 部分浏览器在滚动页面时会显示/隐藏工具栏，影响视口高度。在有底部工具栏的情况下，不做iPhoneX的fix。100为经验值

  if (window.screen.height - window.innerHeight / scale < 100) {

    //动态添加底部高度样式

  } else {

    //动态移除底部高度样式

  }

}

function testUA(str) {

  return navigator.userAgent.indexOf(str) > -1

}
// ————————————————
// 版权声明：本文为CSDN博主「codezha」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/codezha/article/details/105066443