const fullNames = () => {
  let firstName = "Isaac";
  let lastName = "Kimura";
  const getName = () => {
    name = firstName + " " + lastName;
    return name;
  };
  return getName();
};

module.exports = fullNames;
