import "./assets/scss/all.scss";

var bar = new ProgressBar.Circle("#circle-container", {
  color: "#ffffff", //  改成白色
  strokeWidth: 8,
  trailColor: "transparent", // 沒有灰色外框
  trailWidth: 8,
  text: {
    value: "0%",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  step: function (state, circle) {
    let value = Math.round(circle.value() * 100);
    circle.setText(value + "%");

    if (value === 100) {
      document.getElementById("status-text").innerText = "分析完成";
      setTimeout(() => {
        window.location.href = "record.html";
      }, 1000);
    }
  },
});

// 初始完全空
bar.set(0);
// 動畫跑滿
bar.animate(1.0, { duration: 4000 });

// 切換按鈕換按鈕

// const buttons = document.querySelectorAll(".tab-btn");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     buttons.forEach((b) => b.classList.remove("active-btn"));
//     btn.classList.add("active-btn");
//   });
// });
