function connectMoodCircles() {
  const circles = document.querySelectorAll(".moodCircle");
  const svg = document.getElementById("lineCanvas");
  svg.innerHTML = ""; // 清空舊的線

  let points = [];

  circles.forEach(c => {
    const rect = c.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;
    points.push({ x, y });
  });

  for (let i = 0; i < points.length - 1; i++) {
    const { x: x1, y: y1 } = points[i];
    const { x: x2, y: y2 } = points[i + 1];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#333");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }
}

window.addEventListener("load", connectMoodCircles);
window.addEventListener("resize", connectMoodCircles);