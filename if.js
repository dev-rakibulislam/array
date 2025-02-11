const age =60;
let price =400;
if(age >=70){
  console.log('yea bura tumar boyos  base hour karo ne tumak 60% discount daua hoilo, your discount :', price -(price*60/100))
}
else if(age>=60&&age<=70){
  console.log('tumak 40% discount daua hoilo jau balo kora khau ga :', price-(price*40/100))
}
else if(age>=30&&age<=60){
  console.log('tumak 30% discount daua hoilo jau balo kora khau ga :', price-(price*30/100),'taka dau')
}
else if(age>=20&&age<=30){
  console.log('regular price dau discount nai tumar jonno')
}
else if(age>=0&&age<=20){
  console.log('tumak free ta somocha shigara paiazzu r pane daua hoba tumi chaila khaita paro')
}
else{
  console.log('tumar moto customer ar dorker nai amar dura gia mor' )
}