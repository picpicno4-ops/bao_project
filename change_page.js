document.querySelectorAll("label[data-href]").forEach((label) => {
  label.addEventListener("click", () => {
    window.location.href = label.dataset.href;
  });
});
