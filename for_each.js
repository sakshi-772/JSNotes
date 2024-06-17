//                                             forEach method
//                                             Higher order function
//                                             Higher order method
//-------------------------------------------------------------------------------------------------------------------------

//syntax=
          /*arr.forEach((val,index,arr)=>{                          
            
            //do some work
            
            })
            
            
    //or
           
           arr.forEach(callback_function);
            
            
            */

//-------------------------------------------------------------------------------------------------------------------------

//eg

    let arr=[1,2,3,4,5];

    arr.forEach((val)=>{
        console.log(val);
    })

//-------------------------------------------------------------------------------------------------------------------------


//eg

arr=["sakshi","om","priya","samu"];

arr.forEach((val)=>{
    console.log(val.toUpperCase());
})


//-------------------------------------------------------------------------------------------------------------------------

//eg

arr=["sakshi","om","priya","samu"];

arr.forEach((val)=>{
    console.log(val*3);           //NaN                   ....because valueis not a number
})


//-------------------------------------------------------------------------------------------------------------------------


//eg

arr=["sakshi","om","priya","samu"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})
                                        //it print first array value in uppercase second is index number and tird is array
                                        //eg SAKSHI 0 >(4)['sakshi','om','priya','samu']


//------------------------------------------------------------------------------------------------------------------------

//eg

arr=[1,2,3,4,5];

    const arrsquare=(val)=>{
        console.log(val**2);
    }


    arr.forEach(arrsquare);