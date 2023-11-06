const employee = {
    name: "Kate",
    age: 28,
    job: "QA",
    privet: true,
    status: "blocked",
    props: {
      name:'Sergey',
      props: {
          
      }
    }
  };
  
  const employeeClone = {...employee};
  
  console.log(employee);
  
  delete employee.status;
  
  console.log(employee);
  console.log(employeeClone);