const amount = 14;

const app = "Node";

const fullNames = () => {
//   let firstName = "Isaac";
//   let lastName = "Kimura";
  const getName = (firstName , lastName) => {
    name = firstName + " " + lastName;
    return name;
  };
  return getName("Isaac", "kimura");
};

console.log(amount < 10 ? "small number" : "large number");

console.log(
  `Hey, my name is ${fullNames()} and this is my first ${app} app!!!`
);
// console.log(process);
