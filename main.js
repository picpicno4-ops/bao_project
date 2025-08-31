import "./assets/scss/all.scss";

var bar = new ProgressBar.Circle("#circle-container", {
    color: "#ffffff", // 👈 改成白色
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

// Air Datepicker 月曆
// document.addEventListener("DOMContentLoaded", () => {
//     // 語系資料（保留你的 zh）
//     const zh = {
//         days: [
//             "星期日",
//             "星期一",
//             "星期二",
//             "星期三",
//             "星期四",
//             "星期五",
//             "星期六",
//         ],
//         daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
//         daysMin: ["日", "一", "二", "三", "四", "五", "六"],
//         months: [
//             "一月",
//             "二月",
//             "三月",
//             "四月",
//             "五月",
//             "六月",
//             "七月",
//             "八月",
//             "九月",
//             "十月",
//             "十一月",
//             "十二月",
//         ],
//         monthsShort: [
//             "1月",
//             "2月",
//             "3月",
//             "4月",
//             "5月",
//             "6月",
//             "7月",
//             "8月",
//             "9月",
//             "10月",
//             "11月",
//             "12月",
//         ],
//         today: "今天",
//         clear: "清除",
//         dateFormat: "yyyy/MM/dd",
//         timeFormat: "hh:mm aa",
//         firstDay: 0,
//     };

//     const disabledDate = ["2025-08-01", "2025-08-05"];

//     const el = document.getElementById("airDatepicker");
//     if (!el) return;

//     // 關鍵：把 container 指到同一個節點，確保日曆渲染在該 div 內
//     const dp = new AirDatepicker(el, {
//         inline: true, // 一直顯示
//         locale: zh, // 中文
//         container: el, // 放進 #airDatepicker 這個 div
//         navTitles: {
//             days: `
//         <div class="custom-nav-title">
//           <span class="nav-year">yyyy 年</span>
//           <span class="nav-month">M 月</span>
//         </div>
//       `,
//         },
//         showOtherMonths: false,
//     });

//     // 停用日期
//     dp.disableDate(disabledDate);

//     // 如果一開始是 collapse 關閉，等打開後刷新一次（避免寬度量到 0）
//     const collapse = document.getElementById("calendarCollapse");
//     if (collapse) {
//         collapse.addEventListener("shown.bs.collapse", () => {
//             // inline 模式下強制重算尺寸的最簡方式：切一下視圖或 setViewDate
//             dp.setViewDate(new Date(dp.viewDate));
//         });
//     }
// });
