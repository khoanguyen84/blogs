function* generateId() {
    yield 1;
    console.log('continue to run ...');
    yield 2;
    console.log('resume');
    return 3;
  }
  
  const newId  = generateId();
  
  console.log(newId.next()); // {value:1, done:false}
  console.log(newId.next()); // {value:2, done:false}
  console.log(newId.next()); // {value:3, done:true}