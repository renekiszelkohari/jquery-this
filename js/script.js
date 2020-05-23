$(document).ready(function(){
// removing the selected p
// $("p").click(function(){
//     $(this).slideToggle("slow");
// })

// change color of buttons on mouseenter and mouseleave
// $("button").mouseenter(function(){
//     $(this).removeClass("makeRed").addClass("makeBlue");
// });
// $("button").mouseleave(function(){
//     $(this).removeClass("makeBlue").addClass("makeRed");
// });

// changing box styles by selecting class names
    // $(".box").on("click", function(){
    //     var classNames = $(this).attr("class").split(" ");
    //     $("." + classNames[1]).css("background-color", "red");
    // });
   
     $(".box").on("click", function(){
        // When clicking on an element with the 'box' class, this event will betriggered
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") === "rgb(255,0,0)") {
            // if this object is already red, turn it to black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with the 'box' class black
            // and then change the color of all elements
            // with the same class name as the clicked element to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });





});