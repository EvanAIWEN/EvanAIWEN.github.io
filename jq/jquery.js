// Jquery source code
    $(document).ready(function(){


        $(".cheapeat").click(function () {
            $("#img1").show(); 
            $("#img2").show(); 
            $(".dis").show();
            });
            $(".cheapeat").mouseenter(function(){
                $(this).css("opacity", "0.6");
                
               
            });
            $(".cheapeat").mouseleave(function(){
                
                $(this).css("opacity","1");
               
            });
        
        $(".midrange").click(function () {
            $("#img3").show();
            $("#img4").show();
            $(".dis2").show();
        });
        $(".midrange").mouseenter(function () {
            $(this).css("opacity", "0.6");


        });
        $(".midrange").mouseleave(function () {

            $(this).css("opacity", "1");

        });

        $(".finedining").click(function () {
            $("#img5").show();
            $("#img6").show();
            $(".dis3").show();
        });
        $(".finedining").mouseenter(function () {
            $(this).css("opacity", "0.6");


        });
        $(".finedining").mouseleave(function () {

            $(this).css("opacity", "1");

        });

        
        $("#cimg").click(function () {
            $(".contact").show();
        });
        $("#cimg").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg").mouseleave(function () {
            $(this).css("opacity", "1");
        });

        $("#cimg1").click(function () {
            $(".contact1").show();
        });
        $("#cimg1").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg1").mouseleave(function () {
            $(this).css("opacity", "1");
        });

        $("#cimg2").click(function () {
            $(".contact2").show();
        });
        $("#cimg2").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg2").mouseleave(function () {
            $(this).css("opacity", "1");
        });

        $("#cimg3").click(function () {
            $(".contact3").show();
        });
        $("#cimg3").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg3").mouseleave(function () {
            $(this).css("opacity", "1");
        });

        $("#cimg4").click(function () {
            $(".contact4").show();
        });
        $("#cimg4").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg4").mouseleave(function () {
            $(this).css("opacity", "1");
        });

        $("#cimg5").click(function () {
            $(".contact5").show();
        });
        $("#cimg5").mouseenter(function () {
            $(this).css("opacity", "0.6");
        });
        $("#cimg5").mouseleave(function () {
            $(this).css("opacity", "1");
        });
    });
