export default class ZoomImage {
  constructor(containerZoom, imgPrincipal) {
    this.containerZoom = document.querySelector(containerZoom);
    this.imgPrincipal = document.querySelector(imgPrincipal);
  }

  iniciar() {
    this.containerZoom.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      this.imgPrincipal.style.transformOrigin = `${x}px ${y}px`;
      this.imgPrincipal.style.transform = "scale(1.5)";
    });

    this.containerZoom.addEventListener("mouseleave", () => {
      this.imgPrincipal.style.transformOrigin = "center center";
      this.imgPrincipal.style.transform = "scale(1)";
    });
  }
}
