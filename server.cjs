(async () => {
  try {
    await import("./server.js");
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
  }
})();
