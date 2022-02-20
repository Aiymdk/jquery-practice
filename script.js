//Click on button to show hide enter password in input type text    
$(document).ready(function(){
    $("#show").click(function(){
        $("#password").attr("type", "text");
    });
    $("#hide").click(function(){
        $("#password").attr("type", "password");
    }
    );
}
);
// Disable the submit button until the visitor has clicked a check box id notRobot
$(document).ready(function(){
    $("#submit").attr("disabled", true);
    $("#notRobot").click(function(){
        $("#submit").attr("disabled", false);
    }
    );
}
);