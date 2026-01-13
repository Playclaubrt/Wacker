if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker ATIVO"))
    .catch(err => console.log("Erro:", err));
}

// storage real
localStorage.setItem("estado", "ativo");