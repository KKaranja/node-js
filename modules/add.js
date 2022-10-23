const addNum = () => {
  let num1 = 12;
  function numTwo() {
    let num2 = 12;
    const addition = num1 + num2;
    return addition;
  }
  console.log(numTwo());
};

addNum();
