

const tripleAdd = (num1) => {
    return function(num2){
        return function(num3){
            return num1+num2+num3;
        }
    }
}
tripleAdd(10)(20)(30);


//IIFE Module 
(function displaySomething(msg){
 console.log("hello " + msg)   
}("world"));

let batman = (function(){
      let name = "Bruce Wayne";
    return {
        meet: function(){ console.log('Hi i am '+ name)}
    }
}()) // Example of IIFE and module pattern.. No one can change the name of batman now.. 
batman.meet();



//
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();