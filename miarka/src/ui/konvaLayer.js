(function(){
  window.initKonvaLayer = function(inputCanvas, warpedCanvas) {
    const containerId = 'konva-container';
    let container = document.getElementById(containerId);

    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.style.position = 'relative';
      inputCanvas.parentNode.insertBefore(container, inputCanvas);
      container.appendChild(inputCanvas);
    }

    const stage = new Konva.Stage({
      container: containerId,
      width: inputCanvas.width,
      height: inputCanvas.height
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    window._konva = { stage, layer };
  };

  window.setKonvaCorners = function(corners) {
    const { layer } = window._konva;
    layer.destroyChildren();

    corners.forEach((c) => {
      const circle = new Konva.Circle({
        x: c.x,
        y: c.y,
        radius: 8,
        fill: 'red',
        draggable: true
      });

      layer.add(circle);
    });

    layer.draw();
  };
})();
