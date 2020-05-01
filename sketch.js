var engine, world;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var rect1,rect2,rect3;
var ground1,circle1;


function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(250,height,500,20);
    rect1 = new Rectangle(100,470,100,30);
    rect2 = new Rectangle(100,450,100,30);
    rect3 = new Rectangle(150,400,50,30);
    circle1 = new Circle(100,410,100);
}
    

function draw(){
    background(0);
    Engine.update(engine);
    rect1.display();
    rect2.display();
    rect3.display();
    ground1.display();
    circle1.display();
}















// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

//function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

//}

//function draw() {
// Remember to update the Matter Engine and set the background.
//}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}