const isNumberFound = [0, 1, 2, 3,4].some(
    (value) => value === "Roma"
  );
  
  if(isNumberFound) {
   console.log('Some post request')
  }
  console.log(isNumberFound);


  const numberWithMethodFind = [0, 1, 2, 3,4].find(
    (value) => value === 300
  );
  
  if(numberWithMethodFind === 300) {
    console.log('Some post request')
}
  console.log(numberWithMethodFind);