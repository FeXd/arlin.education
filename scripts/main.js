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

      const circle = Bodies.circle(x, y, radius, { isStatic: true, render: { fillStyle: '#f2f2f2' } });

      World.add(engine.world, circle);
    }
  }

  // Drop a ball at a random x location every second
  setInterval(() => {
    if (!document.hidden) { // only drop a ball if document is visible
      const x = Math.random() * render.options.width;
      const ball = Bodies.circle(x, 0, 15, { isStatic: false, restitution: 0.9 });
      World.add(engine.world, ball);
    }
  }, 1000);

  // Remove bodies that fall below the screen every second
  setInterval(() => {
    const bodies = World.allBodies(engine.world);
    for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        if (body.position.y > render.options.height) {
            World.remove(engine.world, body);
        }
    }
  }, 1000);

  // Create a runner
  const runner = Runner.create();

  // Run the engine
  Runner.run(runner, engine);

  // Run the renderer
  Render.run(render);
});
