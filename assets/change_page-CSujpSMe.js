document.querySelectorAll("label[data-href]").forEach(e=>{e.addEventListener("click",()=>{window.location.href=e.dataset.href})});
