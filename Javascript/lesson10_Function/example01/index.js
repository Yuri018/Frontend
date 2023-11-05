// 1. Function declaration - объявление функции

function sum(a, b){
    return a + b;  
  }
    
  const res = sum(2, 4);  
  console.log(res); // 6
     
  //   
  const res2 = sum(2, "4");  
  console.log(typeof res2); // 'string'
    
  // передал параметр  
  const res3 = sum(3);  
  console.log(res3); // NaN
    
  function print1(){  
    console.log("Example"); 
  }
  
  let res4 = print();  
  console.log(res4); // undefined
     
  // 2. Function expression - функциональное выражение

  let devide = function(a, b){
    return a / b;
  }
  const res5 = devide(9, 3);
  const calculator = {
    brand: "casio",   
    devide,   
    sum,   
    subtract: function(a, b){  
      return a - b;  
    }  
  };

  const res6 = calculator.divide(9, 3);  
  console.log(res6);  
  const res7 = calculator.sum(2, 2);  
  console.log(res7);  
  const res8 = calculator.subtract(9, 3); 
  console.log(res8);

  
  
  
  
  
  
  
  
  
  
  