// $(function () {
$(document).ready(function() {
    // start about

    $("#abt").click(function() {

        // hide divs

        $(".gallery, .services, .complain, .displaying").hide();

        $(".about").show();
    });

    // end about

    // start gallery

    $("#glry").click(function() {

        // hide other divs
        $(".about, .services, .complain, .displaying").hide();

        $(".gallery").show();
    });

    let showImgCount = 1;
    let nextImg = $('.right-btn').click(function () {
        $('.gallery img').eq(1).attr('src', `images/${showImgCount === 8? 8 : ++showImgCount}.jpg`)
    });

    let previousImg = $('.left-btn').click(function () {
        $('.gallery img').eq(1).attr('src', `images/${showImgCount === 1? 1 : --showImgCount}.jpg`)
    });

    // end gallery

    // start services

    $("#srv").click(function() {

        // hide divs

        $(".about, .gallery, .complain, .displaying").hide();

        $(".services").slideDown(1000);
    });

    // end services

    // start comp

    $("#comp").click(function() {

        // hide divs

        $(".about, .gallery, .services, .displaying").hide();

        $(".complain").show();
        
    });

    // display information of the form

    $("#sending").click(function () {

        $(".complain").hide();
        $(".displaying").show();


        $("#compds").html('your complain is : ' +'<span>' + $("#txtar").val() + '</span>');
        $("#nameds").html('your name is : ' +'<span>' + $("#usnm").val() +'</span>');
        $("#emailds").html('your email is : ' +'<span>' + $("#eml").val() +'</span>');
        $("#phoneds").html('your phone is : ' +'<span>' + $("#phon").val() +'</span>');
    });

    // back to edit

    $("#back").click(function () {

        $(".displaying").hide();
        $(".complain").show();

    });
    // end comp

});