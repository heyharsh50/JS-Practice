// Export is used to make functions, variables, or classes available for use in other files.

//1. Named Export: we can export multiple things by name:

// file: utils.js
export function FirstName() {
    return "John";
  }
  
  export function SecondName() {
    return "Doe";
  }


// file: main.js (Import)
import { FirstName, SecondName } from "./utils.js";

console.log(FirstName() + " " + SecondName());

//2. Default Export: we can export one thing as default:

// file: utils.js
export default function FullName() {
    return "John Doe";
  }

// file: main.js (Import)
import FullName from "./utils.js";

console.log(FullName()); // Output: John Doe

//So, Basically

//Type	            Export Syntax	            Import Syntax
//Named export	    export function myFunc()	import { myFunc } from "file"
//Default export	export default myFunc	    import myFunc from "file"