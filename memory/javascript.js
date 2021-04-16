$(document).ready( function(){
    let cards=[
        "1","1","1","1",
        "2","2","2","2",
        "3","3","3","3",
        "4","4","4","4",
        "5","5","5","5",
    ];

    num_flipped_cards = 0;
    flipped_cards = [];
    num_cards_ok=0;
    cards = shuffle(cards);

    printcards(cards);
});

function shuffle(cards){
    let j,x,i;
    for (i=cards.length-1;i>0;i--){
        j = Math.floor(Math.random() * (i+1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards
}

function printcards(cards){
    for (i=0;i<cards.length;i++){
        $("#cards").append("<img class='card' id="+i+" src='img/cards/0.png' onclick='flip_card("+i+","+cards[i]+")'>");
    }
}

function flip_card(id_card,img_card){
    console.log(num_flipped_cards);
    if(num_flipped_cards == 0){
        num_flipped_cards++;
        flipped_cards.push(id_card);
        $("#"+id_card).attr(
            "src","img/cards/"+img_card+".png"
        );
        $("#"+id_card).attr(
            "src","img/cards/"+img_card+".png"
        );
        console.log("1 girada");
    }else if (num_flipped_cards == 1){
        num_flipped_cards++;
        flipped_cards.push(id_card);
        $("#"+id_card).attr(
            "src","img/cards/"+img_card+".png"
        );
        if($("#"+flipped_cards[0]).attr("src") == $("#"+flipped_cards[1]).attr("src") && flipped_cards[0]!=flipped_cards[1]){
            for (n=0;n<flipped_cards.length;n++){
                $("#"+flipped_cards[n]).attr("onclick","ok_flipped()");
                $("#"+flipped_cards[n]).attr("src","img/cards/"+img_card+"_OK.png");
                $("#"+flipped_cards[n]).attr("id",flipped_cards[n]+"OK");
            }
            num_cards_ok++;
            num_flipped_cards=0;
            flipped_cards=[];
            
            console.log("Cards ok"+num_cards_ok);
            
            console.log("Acierto");
        }
    }else if(num_flipped_cards==2){
        console.log(num_flipped_cards);
        for (n=0;n<flipped_cards.length;n++){
            $("#"+flipped_cards[n]).attr("src","img/cards/0.png");
        }
        num_flipped_cards=0;
        flipped_cards=[];
        check_oks(num_cards_ok);

        console.log("Fallo");
    }
}
function ok_flipped(){
    check_oks(num_cards_ok);
    console.log("Card already flipped");
}
function check_oks(oks){
    console.log("oks"+oks);
    if(oks==10){
        alert("YOU WIN!");
    }
}