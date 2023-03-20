function Test() {
  this.prop1 = "prop1";
  this.prop2 = "prop2";
  let newFunct = () => {
    console.log("inside newFunct");
    console.log('The value of this inside newFunct ' + this);
  };
  newFunct();
  this.newFunct2 = function() {
    console.log('inside newFunct2');
    console.log('The value of this is ' + this);
  }
  function newFunct3(){
    this.newProps = "newProps";
    console.log('THe value of this now should be newProps: : '+ this);
  }
  let newProps1 = new newFunct3();
  this.newProps3 = new newFunct3();
}

Test.prototype.view = function() {
  console.log('The value of this ' + this);
  console.log('prop1 : ' + this.prop1);
  console.log('prop2 : ' + this.prop2);
}


let newTest = new Test();
newTest.view();
newTest.newFunct2();
console.log('check the prop1 on newTest ' + newTest.prop1);


let newTest2 = Test();
newTest2.view(); // error that view doesnt exist on newTest2 because it was called without new keyword.

// Now Test is called a constructor function in the sense that it creates a new object with properties which are in function with this keyword. in above example, when Test is invoked with new keyword, a object is created with prop1 and prop2 which in function Test is combined with this keyword. 
// Why methods are added not inside function using this instead of using prototype.. Because if added in prototypes only one definition of the function will be shared by all the objects using the constructor function. If added in constructor function it will be added to each objects property separately. For ex. view only one copy will be present in memory but newFunct2 each time new is called a new copy will be created.


// Doubt is function and this behave differently when it is called with new keyword.. 


// Closure begins

// Here to avoid cache variable to be attached to the global scope(windows variable) we have to use closure such that cache behaves as global object to memoizeAddTo80 function, meaning each time we call memoizeAddTo80 cache doesnt reset. So to do that, we move the logic of memoizeAddTo80 to an inner function and declare cache before that as how it is done below.. Now inner function will have access to cache variable as it is declared in outer function.
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
console.log(2, memoized(6))

// closure ends