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

  // Create a grid of small circles
  const radius = 2;
  const spacing = radius * 30; // Adjust the spacing as needed

  const rows = Math.floor(container.offsetHeight / spacing) + 1;
  const cols = Math.floor(container.offsetWidth / spacing) + 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * spacing;
      let y = row * spacing;

      // Stagger every other row
      if (row % 2 === 1) {
        x += spacing / 2;
      }

      const circle = Bodies.circle(x, y, radius, {isStatic: true});

      World.add(engine.world, circle);
    }
  }

  // Create some objects
  const box = Bodies.rectangle(container.offsetWidth / 2, -100, 20, 20, { isStatic: false, });
  const circle = Bodies.circle(400, -100, 20, { isStatic: false });
  const rectangle = Bodies.rectangle(200, -100, 100, 20, { isStatic: false });
  const triangle = Bodies.polygon(600, -100, 3, 20, { isStatic: false });
  const polygon = Bodies.polygon(400, -100, 5, 20, { isStatic: false });
  const trapezoid = Bodies.trapezoid(600, -100, 120, 20, 0.5, { isStatic: false });

  // Add all of the bodies to the world
  World.add(engine.world, [box, circle, rectangle, triangle, polygon, trapezoid]);

  // Create a runner
  const runner = Runner.create();

  // Run the engine
  Runner.run(runner, engine);

  // Run the renderer
  Render.run(render);
});
