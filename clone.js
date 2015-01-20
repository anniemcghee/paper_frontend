// 3 projects:


// 6 chicken glyphs follow the mouse around

// When stopped they shake

// ------------------

// Draw balloons like the dandelion

// Release them up like the seeds

// -----------------

// Make balls bounce to the music using Satie

// -----------------

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


var chickens = new Group([peach, yellow, purple, green, blue, orange]);



//THIS ROTATES THE CHICKENS

//THIS MOVES THE CHICKENS WITH NO ROTATION
function onMouseMove(event) {
  chickens.position = event.point;
}

function onMouseDown (event) {
  chickens.clone(event.point);
}