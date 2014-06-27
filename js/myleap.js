LeapManager.init({
    enableMetaGestures: true,
    enableDefaultMetaGestureActions: true,
    maxCursors:1,
    enableHoverTap: true,
    enablePressDown: true,
    enableScrollbarScrolling: true,
});


var hand, finger;
var options = { enableGestures: true };
var isDrawing = false;
var isChanging = false;


Leap.loop(options, function(frame) {



    for (var i = 0, len = frame.hands.length; i < len; i++) {


        hand = frame.hands[i];

        if(hand.type=='left'){
            frame.gestures.forEach(function(gesture){
                switch (gesture.type){
                    case "circle":
                        circle.changeWidth();
                        break;
                }
            });

        }

        else if(hand.type=='right'){
            toggleMenu(hand.grabStrength);

            if(isDrawing)
                drawing.move();
        }
    }
});

function toggleMenu(grabstr){
    if(grabstr == 1 && document.getElementsByClassName('main_menu')[0].style.visibility == "hidden"){
        var e = {
            x : parseInt($('.leap-cursor').css('left').split('px')[0]),
            y : parseInt($('.leap-cursor').css('top').split('px')[0])
        }
        middleclick(e);
    }
    else if(grabstr == 0 && document.getElementsByClassName('main_menu')[0].style.visibility == "visible"){
        var e = {
            x : parseInt($('.leap-cursor').css('left').split('px')[0]),
            y : parseInt($('.leap-cursor').css('top').split('px')[0])
        }
        middleclick(e);
        drawing.end();
    }

}

var drawing = {
    start : function() {
//        var e = {
//            x : parseInt($('.leap-cursor').css('left').split('px')[0]) - $('.leap-cursor').width() * 3,
//            y : parseInt($('.leap-cursor').css('top').split('px')[0]) - $('.leap-cursor').height() * 2
//        }
        
        var e = {
            x : parseInt($('.leap-cursor').css('left').split('px')[0]) - $('.leap-cursor').width() * 4.5,
            y : parseInt($('.leap-cursor').css('top').split('px')[0])  - $('.leap-cursor').height() * 2 - 10
        }
k             
        context.beginPath();

        context.linecap = "round";
        context.moveTo(e.x, e.y);

        isDrawing = true;

        $('.leap-cursor').css('background-color', '#9cffd9');
    },

    move : function(){
        var e = {
            x : parseInt($('.leap-cursor').css('left').split('px')[0]) - $('.leap-cursor').width() * 4.5,
            y : parseInt($('.leap-cursor').css('top').split('px')[0])  - $('.leap-cursor').height() * 2 - 10
        }

        context.lineTo(e.x, e.y);
        context.stroke();

    },

    end : function(){
        context.closePath();
        isDrawing = false;

        $('.leap-cursor').css('background-color', '#fff');

    },

    init : function(){
        $('#pencil_icon').click(this.start.bind(this));   
    }
}

var circle = {
    prevVal : 0,

    changeWidth : function(){
        this.prevVal++;

        if(this.prevVal == 50){
            
            
            drawing.end();
            drawing.start();
            
            var tempVal = parseInt($('#detail_chWidth').val());
            $('#detail_chWidth').val(tempVal + 1);
            detail_drawingObj.chWidth(tempVal + 2);
            
            console.log("width = " + (tempVal+1));
            
            this.prevVal = 0;
        }
    }
}

drawing.init();
