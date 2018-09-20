class Canvas {
    constructor(width, height, id){
        this.width = width;
        this.height = height;
        this.id = id;
        this.canvas = undefined;
        this.context = undefined;
    }

    Start(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.id = this.id;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }

    CenterCanvas(canvasID){
        document.getElementById(canvasID).style.padding = "0";
        document.getElementById(canvasID).style.margin = "auto";
        document.getElementById(canvasID).style.display = "block";
        document.getElementById(canvasID).style.border = "1px solid black";
    }

    Clear(){
        this.context.clearRect(0, 0, this.width, this.height);
    }
}