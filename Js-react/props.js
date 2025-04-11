const MyComponents = () => {
    return <div> </div>
}

//Parent component

import React from 'react';
import Child from './Child';

function Parent() {
  return <Child name="Harsh" />;           //<Child age={25} hobbies={['coding', 'music']} />
}

export default Parent;

//Child component
function Child(name) {
    return <h1>Hello, {name}!</h1>;         // <> <p>Age: {age}</p> <p>Hobbies: {hobbies.join(', ')}</p> </>
  }
  
  //export default Child;

  //Output: Hello, Harsh!

  //Props Can Be Anything :- Strings, Numbers, Arrays, Objects, Function, JSX/Components