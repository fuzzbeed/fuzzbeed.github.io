let questions = 6;

function gataj(rez){
  let endObj = document.getElementById("ended");
  document.getElementById("endedText").style="display: flex";
  switch (rez) {
    case 0:case 1:case 2:case 3:case 4:case 5:
      endObj.src="img/i1.jpg";
      break;
    case 6:case 7:case 8:case 9:case 10:case 11:
      endObj.src="img/i2.jpg";
      break;
    case 12:case 13:case 14:case 15:case 16:case 17:
      endObj.src="img/i3.jpg";
      break;
    case 18:case 19:case 20:case 21:case 22:case 23:
      endObj.src="img/i4.jpg";
      break;
    case 24:case 25:case 26:case 27:case 28:case 29:case 30:
      endObj.src="img/i5.jpg";
      break;
    default:

  }
  console.log(rez);
}



//static
 let prevObj = new Array(questions);
 let currObj = new Array(questions);



 function display(){
   console.log(prevObj);
   console.log(currObj);
 }

 function clicked(obj){
   let i = obj.id[1];
   let j = obj.id[2];
   if(currObj[i]!=undefined){
     prevObj[i]=currObj[i];
     normal(prevObj[i]);
   }
   currObj[i]=obj;
   cool(currObj[i]);

   finishCheck();
}

function finishCheck(){
  let rez=true;
  for(let o of currObj){
    if(o==undefined){
      rez=false;
    }
  }
  if(rez) finish();
}

function finish(){
  let zbir= new Number(0);
  for(let o of currObj){
    let br = new Number(o.id[2]);
    zbir+=br;
  }
  zbir-=questions;

  gataj(zbir);
}

function normal(obj){
  obj.style=("background-color: rgb(238, 51, 34)");
}

function cool(obj){
  obj.style=("background-color: rgb(180, 51, 34)");
}
