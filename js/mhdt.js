var canvas = document.getElementById("paper");
var context = canvas.getContext('2d');




document.addEventListener('click', function (e){
       if (e.button == 1) {
           middleclick(e);
       }
}, true);

function middleclick(e) {
    
        if (document.getElementsByClassName('main_menu')[0].style.visibility == "hidden") {
            document.getElementById('switch').style.webkitTransitionDuration = 0.5 + "s";
            document.getElementById('switch').style.webkitTransform = "rotate(0deg)";
            document.getElementsByClassName('main_menu')[0].style.visibility = "visible";
            document.getElementsByClassName('main_menu')[0].style.left = e.x + "px";
            document.getElementsByClassName('main_menu')[0].style.top = e.y + "px";
        } else {
            document.getElementById('switch').style.webkitTransitionDuration = 0;
            menuObj.reset_menu();
            document.getElementsByClassName('main_menu')[0].style.visibility = "hidden";
        }
}

var menuObj = {
    reset_menu : function() {
        var lists = document.getElementsByClassName('main_menu')[0].children;

        for (var i = 0; i < lists.length; i++) {
            if (lists[i].style.visibility == "visible")
                lists[i].style.visibility = "hidden";
        }
    },

    coloring_onclick : function() {
        document.getElementById('switch').style.webkitTransform = "rotate(57deg)";
        this.reset_menu();
        document.getElementById('detail_RGB_red').style.visibility = "visible";
        document.getElementById('detail_RGB_green').style.visibility = "visible";
        document.getElementById('detail_RGB_blue').style.visibility = "visible";
        document.getElementById('detail_red_icon').style.visibility = "visible";
        document.getElementById('detail_green_icon').style.visibility = "visible";
        document.getElementById('detail_blue_icon').style.visibility = "visible";
    },

    new_onclick : function() {
        document.getElementById('switch').style.webkitTransform = "rotate(0deg)";
        this.reset_menu();
        drawing.end();
        context.clearRect(0, 0, canvas.width, canvas.height);
    },

    pencil_onclick : function() {
        document.getElementById('switch').style.webkitTransform = "rotate(-51deg)";
        this.reset_menu();
        document.getElementById('detail_chWidth').style.visibility = "visible";
        document.getElementById('detail_min_pencil').style.visibility = "visible";
        document.getElementById('detail_max_pencil').style.visibility = "visible";

        var isMouseDown;
        canvas.addEventListener('mousedown', function(e) {
            context.beginPath();
            context.linecap = "round";
            context.moveTo(e.offsetX, e.offsetY);
            isMouseDown = 1;
        });
        canvas.addEventListener('mousemove', function(e) {
            if (isMouseDown == 1) {
                context.lineTo(e.offsetX, e.offsetY);
                context.stroke();
            }
        });

        canvas.addEventListener('mouseup', function(e) {
            context.closePath();
            isMouseDown = -1;
        });

    }
};

var detail_drawingObj = {
    chWidth : function(value) {
        context.lineWidth = value;
    }
};

var detail_coloringObj = {
    RGB_red : 0,
    RGB_green : 0,
    RGB_blue : 0,

    redRange : function(value) {
        this.RGB_red = value;
        context.strokeStyle = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        document.getElementById("rgb_show").style.backgroundColor = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        $('.leap-cursor').css('background-color', "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")");
    },
    greenRange : function(value) {
        this.RGB_green = value;
        context.strokeStyle = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        document.getElementById("rgb_show").style.backgroundColor = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        $('.leap-cursor').css('background-color', "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")");
    },
    blueRange : function(value) {
        this.RGB_blue = value;
        context.strokeStyle = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        document.getElementById("rgb_show").style.backgroundColor = "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")";
        $('.leap-cursor').css('background-color', "rgb(" + this.RGB_red + "," + this.RGB_green + "," + this.RGB_blue + ")");
    }
};

