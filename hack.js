A_section = "answer181912X966X27311A2"//or add code here
B_section = //add code here
C_section = //add code here
  
/*example code:
answer181912X966X27311A2
answer181912X966X27320A1
Teacher Independent part of code: "answer181912X966X273",
meaning independent_code = A_section[0:21]
the initial value = int(A_section[21:22])
section b value = int(B_section[21:22])
section c value = int(C_section[21:22])
*/
  
independent_code = A_section[0:21]
the initial value = int(A_section[21:22])
section b value = int(B_section[21:22])
section c value = int(C_section[21:22])

for(var i = initial_value; i <= (initial_value + 19); i++){
  question_answer = Math.floor(Math.random()*5) + 1;
  output = independent_code+ i + "A" + question_answer;
  document.getElementById(output).checked = true
}

for(var i = section_b_value; i <= (section_b_value + 5); i++){
  question_answer = Math.floor(Math.random()*5) + 1;
  output = independent_code + i + "A" + question_answer;
  document.getElementById(output).checked = true
}

for(var i = section_c_value; i <= section_c_value; i++){
  question_answer = Math.floor(Math.random()*5) + 1;
  output = independent_code + i + "A" + question_answer;
  document.getElementById(output).checked = true
}

document.getElementById('movenextbtn').click();
