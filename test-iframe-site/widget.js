(function () {
  // Create iframe
  const iframe = document.createElement("iframe");

  // Full-screen responsive
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "0",
    right: "0",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    border: "none",
    zIndex: "999999",
    background: "transparent",
  });

  // 🔥 IMPORTANT: Your React app URL (LOCAL for testing)
  iframe.src = "http://localhost:5173"; // change later to your deployed domain

  document.body.appendChild(iframe);
})();
