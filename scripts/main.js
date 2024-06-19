document.addEventListener('DOMContentLoaded', function () {
  // Module aliases
  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Runner = Matter.Runner;

  // Create an engine
  const engine = Engine.create();

  // Disable gravity
  // engine.world.gravity.y = 0;

  // Get the canvas container div
  const container = document.querySelector("body");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Create a renderer
  const render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      wireframes: false,
      background: 'transparent' // Set background to transparent
    }
  });

  // Set id
  render.canvas.id = 'matter';

  // Create some objects
  const box = Bodies.rectangle(container.offsetWidth/2, -100, 80, 80, {isStatic: false,});
  const circle = Bodies.circle(400, -100, 50, { isStatic: false });
  const rectangle = Bodies.rectangle(200, -100, 100, 50, { isStatic: false });
  const triangle = Bodies.polygon(600, -100, 3, 50, { isStatic: false });
  const polygon = Bodies.polygon(400, -100, 5, 60, { isStatic: false });
  const trapezoid = Bodies.trapezoid(600, -100, 120, 60, 0.5, { isStatic: false });

  // Add all of the bodies to the world
  World.add(engine.world, [box, circle, rectangle, triangle, polygon, trapezoid]);

  // Create a runner
  const runner = Runner.create();

  // Run the engine
  Runner.run(runner, engine);

  // Run the renderer
  Render.run(render);
});
