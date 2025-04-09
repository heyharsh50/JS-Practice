function DoSometing() {
  console.log('Doing something')
}

function DoSometingElse() {
  console.log('Doing something else')
}

//DoSometing();
//DoSometingElse();

// Arrow function
const FirstName = () => {
  console.log('Harsh')
}

const SecondName = () => {
    console.log('Raj')
}

FirstName();
SecondName();

const FName = () => {
    return 'Harsh'
  }
  
  const SName = () => {
      return 'Raj'
  }
console.log(FName() + " " + SName())