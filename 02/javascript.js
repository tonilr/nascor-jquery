$(document).ready(function(){
    $("#cover1").click(function(){
        if ( this.id == "cover1"){
            $(this).attr({
                "id" : "cover2",
                "src" : "392.jpg",
                "alt" : "cover2"
            });
        }else{
            $(this).attr({
                "id" : "cover1",
                "src" : "15.jpg",
                "alt" : "cover1"
            });
        }
    });
});
