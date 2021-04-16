$(document).ready(function(){
    let names = ["joan","maria","pepe","miquel","oriol","julia","anna"];
    names.forEach(print_names);
    names = sort_names(names);
    names.forEach(print_names);
    
    function print_names(name){
        $("#names").append(name+"<br>");
    }

    function sort_names(names){
        names.sort();
        $("#names").append("<hr>");
        return names
    }

    /* function sort_names(names){
        for (i=0;i<(names.length-1);i++){
            if (names[i+1]<names[i]){
                new_name=names[i];
                names[i]=names[i+1];
                names[i+1]=new_name;
                i=-1;
            }
        }
        return names;
    } */
});
