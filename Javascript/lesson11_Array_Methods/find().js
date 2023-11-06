const names2 = ["Aleksei", "Gleb", "Anastasia", "Alex", "Kate"];
const newNames2 = names2.find((value) => value === "Aleksei");

console.log(names2);
console.log(newNames2);

// 2 пример
const companyNames = [
  { name: "Kate", age: 28 },
  { name: "Alex", age: 30 },
  { name: "Roma", age: 40 },
];
const newCompanyNames = companyNames.find((value) => value.name === "Leha");

console.log(companyNames);
console.log(newCompanyNames);