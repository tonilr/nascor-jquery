$(document).ready(function(){
    let names = ["joan","maria","pepe","miquel","oriol","julia","anna"];
    names.forEach(print_names);
    
    function print_names(name){
        $("#names").append(name+"<br>");
    }
});
