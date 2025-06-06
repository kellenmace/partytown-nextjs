(async function () {
  // Block the main thread for ~300ms
  const start = performance.now();
  while (performance.now() - start < 300) {
    // Intentional busy wait to simulate blocking JS
  }

  // Inject an iframe simulating an ad
  const iframe = document.createElement("iframe");
  iframe.src = "https://example.com"; // Replace with a slow-loading or dummy page if needed
  iframe.width = "300";
  iframe.height = "250";
  iframe.style.border = "none";
  iframe.style.display = "block";
  iframe.style.margin = "20px auto";
  document.body.appendChild(iframe);

  // Simulate a slow-loading ad image
  const img = document.createElement("img");
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"; // ~4MB image
  img.alt = "Ad Image";
  img.style.display = "block";
  img.style.width = "100%";
  img.style.maxWidth = "600px";
  img.style.margin = "20px auto";
  document.body.appendChild(img);

  console.log("Fake ad script loaded");
})();
