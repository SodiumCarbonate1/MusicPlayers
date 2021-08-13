var index = 0;
var main =$(".main");
var li = $(".main ul li");
var image = $(".music .image img");
var text = $(".music .title1");
var prev = $(".music .button .previous");
var next = $(".music .button .next");
var stop = $(".music .button .stop");
var mp3 = $(".music .mp3");
var about= $(".navlinks .li .about");
var flag = false;
var close = false; // if the player is folded


const folder1 =()=>{
    const folder= document.querySelector('.folder');
    const navlinks = document.querySelector('.navlinks');
    const links = document.querySelectorAll('.navlinks li');
    folder.addEventListener('click',()=>{
        navlinks.classList.toggle('display1');
        links.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation=``;
            }
            else{
                link.style.animation= `animationlinks 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        })
        folder.classList.toggle('toggle');
    });


}
folder1();

li.click(function() {
    index = $(this).index();
    display();
})
function display(){
    change_img_text(index+1);
    rotation();
    playerbar();
}

// change the pictures and the text on the music bar
function change_img_text(index){
    image.attr("src", "pic/"+ (index)+ ".jpg");
    text.html(li.eq(index).attr("title"));

}

function rotation(){
    li.children().removeClass("rotation");
    li.eq(index).children().addClass("rotation");
}

function playerbar(){
    mp3.attr("src", li.eq(index).attr("datasrc"));
    mp3.get(0).play();
}



function change_stop_sign(){
    stop.removeClass("stop");
    stop.addClass("stop");
    stop.html("<i class=\"fas fa-3x fa-stop \"></i>");
    stop.attr("title","stop");
    stop.css({
        'float':'left',
        'width':'40px',
        'height':'40px',
        'margin-top': '40px',
        'margin-left': '40px',
        'color': 'black'
});
}

function change_player_sign() {
    stop.removeClass("stop");
    stop.addClass("stop");
    stop.html("<i class=\"fas fa-3x fa-play\"></i>");
    stop.attr("title", "stop");
    stop.css({
        'float': 'left',
        'width': '40px',
        'height': '40px',
        'margin-top': '40px',
        'margin-left': '40px',
        'color': 'black'
    });
}

$(".headtitle .navlinks .about").click(function(){
    $(".main").addClass("visiable");
    $(".music").addClass("visiable");
    $(".introduction").css("visibility","visible");
})
stop.click(function (){
    if(flag){
        mp3.get(0).pause();
        li.eq(index).children().removeClass("rotation");
        change_player_sign();
        flag = false;
    }
    else{
        mp3.get(0).play();
        li.eq(index).children().addClass("rotation");
        change_stop_sign();
        flag = true;
    }
})



$(".music .close").click(function(){
    if(close){
        $(this).removeClass("close");
        $(this).addClass("close");
        $(this).html("<i class=\"fas fa-2x fa-chevron-right\"></i>");
        $(this).attr("title", "close");
        $(".music").animate({"left":"0px"});
        close = false;
    }
    else{
        $(this).removeClass("close");
        $(this).addClass("close");
        $(this).html("<i class=\"fas fa-2x fa-chevron-left\"></i>");
        $(this).attr("title", "close");
        $(".music").animate({"left":"-675px"});
        close = true;
    }
})
prev.click(function(){
    index--;
    if(index < 0){
        index = li.length - 1;
    }
    display();
})


next.click(function(){
    index++;
    if(li.length - 1 < index){
        index = 0;
    }
    display();
})


