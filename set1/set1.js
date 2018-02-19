function yearOfBirth(age){
    return 2018-age;
}

function whoAmI(name, age){
    try {
        if(age < 0) throw new Error("Age can not be negative");
        if(name && age === undefined) console.error("Arguments not valid");
        if(typeof age !== "number") console.error("Arguments not valid");
        if(typeof name !== "string")  console.error("Arguments not valid");
      }
      
      catch (e) {
        console.log("fail");
        console.dir(e);
        
      }
var yob = yearOfBirth(age);
 console.log(`Hi my name is ${name} and I'm ${age} years old`);

 console.log("I was born in " + yob);
  



}
whoAmI(29, -29);

