//array 
//collection of items

//------------------------------------------------------------------------------------------------------


//creating an array

let arr=[1,2,3,4,5,6,7];
console.log(arr);

//------------------------------------------------------------------------------------------------------


//array indices


console.log(arr[0]);  //it print 1
console.log(arr[1]);  //it print 2
console.log(arr[9]);  //it print undefined  because array length is 7



//we can chaange the value of any indices in array
//because array are ---mutable---




//eg  we want to change the value of indices 2 with number 9
arr=[1,2,3,4,5,6,7];


arr[2]=9;
console.log(arr);


//------------------------------------------------------------------------------------------------------

//looping in array

//------------------------------------------------------------------------------------------------------
//for loop
//eg print all element of aaray

arr=[1,2,3,4,5,6,7];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//------------------------------------------------------------------------------------------------------



//for of loop

for(let i of arr){
    console.log(i);
}

//------------------------------------------------------------------------------------------------------


//for a given array with marks of student->[85,97,44,37,76,60] find the avg of entire class

let stud=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<stud.length;i++){
    sum=sum+stud[i];
    
}
let total=stud.length;
let avg=sum/total;
console.log(`avrage of mark is = ${avg}`);


//------------------------------------------------------------------------------------------------------



// for a given array prices of items all items has offer 10% off on them change the rray too store final price after applying offer


arr=[250,645,300,900,50];
for(let i=0;i<arr.length;i++){

    let offer=arr[i]*0.1
    arr[i]-=offer;
}
console.log(arr);

//------------------------------------------------------------------------------------------------------
