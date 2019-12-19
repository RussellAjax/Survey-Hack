var final_id = ""
var final_id2 = ""
var answer = 1
for(j = 20; j < 80; j++){
    for(i = 100; i<=999; i++){
        answer = Math.floor(Math.random()*5) + 1;
        final_id = "answer623423X14" + j + "X40" + i + "A" + answer;
        final_id2 = "answer623423X14" + j + "X41" + i + "A" + answer;
        if(document.getElementById(final_id) == null && document.getElementById(final_id2) == null){
            continue;
        }else{
            if(document.getElementById(final_id) == null){
                document.getElementById(final_id2).checked = true;
            }else{
                document.getElementById(final_id).checked = true;
            }
        }
    }

    for(k = 10; k <= 99; k++){
        answer = Math.floor(Math.random()*5) + 1;
        final_id = "answer623423X14" + j + "X410" + k + "A" + answer;
        if(document.getElementById(final_id) == null){
            continue;
        }else{
            document.getElementById(final_id).checked = true;
        }
    }
}
document.getElementById("movenextbtn").click();

