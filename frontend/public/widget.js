(function () {
  const iframe = document.createElement("iframe");

  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.left = "0";
  iframe.style.top = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.zIndex = "99999";

  // Local testing (replace with deployed URL later)
  iframe.src = "http://localhost:5173";

  document.body.appendChild(iframe);
})();
