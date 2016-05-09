$(function($) {
    $("#gooey-v").gooeymenu({
            bgColor: "#fff",
            contentColor: "white",
            style: "vertical",
            horizontal: {
                menuItemPosition: "glue"
            },
            vertical: {
                menuItemPosition: "spaced",
                direction: "up"
            },
            circle: {
                radius: 90
            },
            margin: "small",
            size: 70,
            bounce: true,
            bounceLength: "small",
            transitionStep: 100,
            hover: "#68d099"
        });
});
