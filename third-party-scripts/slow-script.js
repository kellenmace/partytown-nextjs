const start = performance.now();
while (performance.now() - start < 300) {
  // simulate blocking JS for 300ms
}
console.log("Slow script loaded");
