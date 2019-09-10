//basic stuff
  let quests=2;
  let answers = new Array(quests);
  let zbir=0;
  let done=true;
  console.log(answers);


function clicked(thing,br1,br2){
  answers[br1]=br2;
  console.log(answers);
  done=true
  for(let i of answers){
    if(i==undefined) {
      done=false
    }
  }
  if(done){
    for(let j of answers){
      console.log(answers[j]);
      zbir+=answers[j];
    }
    console.log(zbir)
  }
}
