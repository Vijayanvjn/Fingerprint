
$(document).ready(function(){
    var full_width=$("#line").width();
    var inc_width=full_width/4;
    var active_width=$("#line-progress").width();
    var max_width=(full_width*0.8)-10;
    var min_width=full_width*0.05;
    console.log("max width",max_width);
    console.log("min width",min_width);

    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "5%");
        $(".content-1").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "30%");
        $(".content-2").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "55%");
        $(".content-3").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "80%");
        $(".content-4").addClass("active").siblings().removeClass("active");
    });
    $("#next-year").click(function(){  
        if(max_width>active_width){
            active_width=active_width+inc_width;
            $("#line-progress").css("width",active_width);   
        }  
        
        $(".step.active").next().addClass("active");
        $(".section-content.active").next().addClass("active").siblings().removeClass("active");         
    });
    $("#prev-year").click(function(){
        if(min_width<active_width){
            active_width=active_width-inc_width;
            $("#line-progress").css("width",active_width);   
        }  
        if($(".step.active").length>1){
            $(".step.active").last().removeClass("active");
            $(".section-content.active").last().removeClass("active").prev().addClass("active");
        }
    })
    $(".factory img").click(function(){
       var cur_img=$(this).attr('src');
       $(".lightbox-img").attr('src',cur_img);
       $(".lightbox-wrapper").css("display","flex");
    })
    $(document).keyup(function(e){
        if(e.key=="Escape"){
            $(".lightbox-wrapper").css("display","none");
        }       
    })
});
