//No function name — just assigned to a variable (greet).
const greet = function () {
    console.log("Hello!");
  };
  
  greet(); // Output: Hello!


  setTimeout(function () {
    console.log("Executed after 2 seconds");
  }, 2000);


  <button 
  onClick={() => {
    console.log("Hey, I'm a button")
    }}
    ></button>

    //Here, () => console.log(...) is an anonymous arrow function used inline for the button's onClick event.