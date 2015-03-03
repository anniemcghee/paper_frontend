


  var yellow = new Raster('yellow');

  yellow.position = view.center;
  yellow.scale(0.3);
  yellow.rotate(0);

  var peach = new Raster('peach');

  peach.position = view.center + 50;
  peach.scale(.45);
  peach.rotate(0);

  var purple = new Raster('purple');

  purple.position = view.center + 100;
  purple.scale(.5);
  purple.rotate(0);

  var green = new Raster('green');

  green.position = view.center + 150;
  green.scale(.7);
  green.rotate(0);

  var blue = new Raster('blue');

  blue.position = view.center + 175;
  blue.scale(.9);
  blue.rotate(0);

  var orange = new Raster('orange');

  orange.position = view.center + 200;
  orange.scale(1);
  orange.rotate(0);

  var clones = 10;
  var angle = 360 / clones;

  var chickens = new Group([peach, yellow, purple, green, blue, orange]);

  function onFrame(event) {

  for(var i = 0; i < clones; i++) {
    var clonedPath = chickens.clone();
    clonedPath.rotate(angle * i, chickens.bounds.topLeft);
  };
    chickens.rotate(.35, view.center)
  }
