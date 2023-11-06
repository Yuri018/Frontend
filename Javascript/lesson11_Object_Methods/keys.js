const person = {
    name: "Kate",
    age: 28,
    job: "QA",
    privet: true,
    status: "blocked",
  };
  
  console.log(person["age"]);
  
  const personKeysArray = Object.keys(person);
  console.log(personKeysArray);
  
  console.log(
    personKeysArray.some((values) => {
      if (values === "age") {
        return person[values] === 28;
      }
    })
  );