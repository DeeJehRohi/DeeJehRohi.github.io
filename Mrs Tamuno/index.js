// open menu on clicking menu 

$("#open").on("click", function(){
    $("ul").css("left","4rem");
    $("#close").css("left", "25rem");
    $("#main").css("marginLeft", "400px");
    $("#nav-cover").css("left", "0");
});

$("#close").on("click", closeNav);
$("#nav-cover").on("click", closeNav);
$("li").on("click", closeNav);

function closeNav(){
    $("ul").css("left","-40rem");
    $("#close").css("left", "-50rem");
    $("#main").css("marginLeft", "0px");
    $("#nav-cover").css("left", "-80rem");

};


