var obj1={name:"person 1",age:"5"}
var obj2={age:"5",name:"person 1"}
var a=JSON.stringify(obj1);
var b=JSON.stringify(obj2);
console.log(a)
console.log(b)

if(a===b){
    console.log("true")
    }
    else{
      console.log("false")
      }


