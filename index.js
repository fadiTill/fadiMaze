// console.log('Bonjour')
const {Engine, Render, Runner, World, Bodies} = Matter;
//MouseConstraint, Mouse
const cells = 5;
const width = 600;
const height = 600;


const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options:{
        wireframes: true,
        width,
        height,
    }
})
Render.run(render);
Runner.run(Runner.create(), engine);

// World.add(world, MouseConstraint.create(engine,{
//     mouse: Mouse.create(render.canvas)
// }))

// const shape = Bodies.rectangle(200,200,50,50,{
//     //remove gravity
//     isStatic: true
// })
// World.add(world, shape)


//walls
const walls = [
    Bodies.rectangle(width/2, 0, width,40,{isStatic: true}),
    Bodies.rectangle(width/2, height,width,40,{isStatic: true}),
    Bodies.rectangle(0,height/2,40,height, {isStatic: true}),
    Bodies.rectangle(width,height/2,40,height, {isStatic: true})
]
    World.add(world, walls);


    const shuffle = (arr) => {
     let counter = arr.length;


     while(counter > 0){
         const index = Math.floor(Math.random() * counter);

         counter--;
         const temp = arr[counter];
         arr[counter] = arr[index];
         arr[index] = temp;
     }
     return arr;
    }

    //random
// for (let i = 0; i < 50; i++ ){
//     if(Math.random() > 0.5) {
//         World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    
//         );
    
//     } else {
//         World.add(
//         world,
//         Bodies.circle(Math.random() * width, Math.random() * height, 35, {
//             render:{
//                 fillStyle: 'red'
//             }
//         })
//         )
//     }
    
//     }

// const grid = [];

// for (let i = 0; i < 3; i++) {
//     grid.push([])
//     for (let j = 0;  j < 3; j++ ) {
//         grid[i].push(false);

//     }

// }
// console.log(grid);

const grid = Array(cells)
.fill(null)
.map(()=> Array(cells).fill(false) );
// console.log(grid)

const verticals = Array(cells)
.fill(null)
.map(() => Array(cells-1).fill(false ));

const horizontals = Array(cells-1)
.fill(null)
.map(()=> Array(cells).fill(false))

// console.log(verticals );

const startRow = Math.floor(Math.random()* cells);
const startColumn = Math.floor(Math.random()* cells);


   console.log(startRow, startColumn);

   const stepTroughCell = (row, column) => {
       //if I have visited  cell at [row, column]
    if(grid[row][column]){
        return;
    }
    grid[row][column] = true;

    const neighbors = shuffle([
        [row -1 , column],
        [row, column + 1],
        [row + 1, column ],
        [row, column -1]

    ]);
    console.log(neighbors);

   }

//    stepTroughCell(startRow, startColumn)
stepTroughCell(1, 1)
//    console.log(grid)