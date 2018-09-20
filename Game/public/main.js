const socket = io();
const port = 3000;
const ipadress = `http://localhost:${port}`;
let mainCanvas = undefined;
let player = undefined;

/*
let movement = {
    up: false,
    down: false,
    left:false,
    right: false
}

let movementKeys = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
}

document.addEventListener("keydown", (event)=>{
    switch(event.keyCode){
        case movementKeys.w:
            movement.up = true;
            break;
        case movementKeys.a:
            movement.left = true;
            break;
        case movementKeys.s:
            movement.down = true;
        case movementKeys.d:
            movement.right = true;
            break;
    }
})

document.addEventListener("keydown", (event)=>{
    switch(event.keyCode){
        case movementKeys.w:
            movement.up = false;
            break;
        case movementKeys.a:
            movement.left = false;
            break;
        case movementKeys.s:
            movement.down = false;
        case movementKeys.d:
            movement.right = false;
            break;
    }
})
*/
let Start = ()=>{
    socket.connect(ipadress);
    mainCanvas = new Canvas(600, 600, "canvas");
    mainCanvas.Start();
    mainCanvas.CenterCanvas(mainCanvas.canvas.id);
    
    //player = new Player(20, 20, 50, 50);
   
    Update();
}

let Update = ()=>{
    mainCanvas.Clear();

    socket.on("connectedPlayers", (data)=>{
        console.log(data);
    });
    
    //player.render(mainCanvas.context);    

    requestAnimationFrame(Update);
}

Start();