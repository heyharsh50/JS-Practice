let age = 20
var name = "John"

if (age>20){
    let name = "Doe"
}
else{
    let name = "Smith"
}

//So, in this already 9 lines code taking too much space.
//We can use ternary operator to make it short and readable.

// Syntax- condition ? expression_if_true : expression_if_false;

//Example 1:
let name = (age>20) ? "Doe" : "Smith"
console.log(name) // Smith

//Example 2:
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
  </div>
);
