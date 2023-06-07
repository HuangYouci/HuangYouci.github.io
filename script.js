// 打字效果

var homeTitleTexts = ["HUANGYOUCI", "HYC"]; // 要显示的文本数组
var homeTitleIndex = 0; // 当前文本索引
var homeTitleIsDeleting = false; // 是否正在删除
var homeTitleTypingSpeed = 100; // 打字速度（每个字符的延迟时间）
var homeTitleDelayBeforeDelete = 0; // 删除文本前的延迟时间（毫秒）
var homeTitleDelayAfterDelete = 5000; // 删除文本后的延迟时间（毫秒）

function typeWriter() {
  var text = homeTitleTexts[homeTitleIndex]; // 当前要显示的文本
  var typingEffect = document.getElementById("homeTitle");
  
  if (!homeTitleIsDeleting && typingEffect.innerHTML.length < text.length) {
    typingEffect.innerHTML += text.charAt(typingEffect.innerHTML.length);
  } else if (homeTitleIsDeleting && typingEffect.innerHTML.length > 0) {
    typingEffect.innerHTML = typingEffect.innerHTML.slice(0, -1);
  } else {
    homeTitleIsDeleting = !homeTitleIsDeleting;
    if (homeTitleIsDeleting) {
      setTimeout(typeWriter, homeTitleDelayAfterDelete);
    } else {
      homeTitleIndex = (homeTitleIndex + 1) % homeTitleTexts.length;
      setTimeout(typeWriter, homeTitleDelayBeforeDelete);
    }
    return;
  }
  
  setTimeout(typeWriter, homeTitleTypingSpeed);
}

// 启动打字效果
typeWriter();
