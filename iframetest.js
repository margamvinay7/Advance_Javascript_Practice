function loadExternalWebsite() {
  const body = document.querySelector("body");
  const iframeElement = document.createElement("iframe");
  iframeElement.src = "https://trrmedical.3pixelsonline.in";
  body.appendChild(iframeElement);
}
