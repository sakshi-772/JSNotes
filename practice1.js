
//enter the string using function and print how many vowels are in the string

let cnt=0;
function fun(str){
    
     for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'|| str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'|| str[i]=='U')   
            //we can also write cond as  
            //(str[i]==='a'||str[i]==='e'||str[i]=='i'||str[i]=='o'|| str[i]=='u')
        {
            cnt++;
        }
    }
    console.log(cnt);
}

fun("aaa");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//create an arrow function to perform a same task 
let cont=0;
const findVowels=(str)=>{
    for(let i=0;i<str.length;i++){
        // if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'|| str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'|| str[i]=='U')   
            //we can also write cond as  
            if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'|| str[i]==='u')
        {
            cont++;
        }
    }
    console.log(cont);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------


findVowels("sakshi");




//for a given no of array print the squarre of each value osing the forEach loop
//1)
let arr=[1,2,3,4,5];

arr.forEach((val)=>{
    console.log("square of",val ,"is",val**2);
})



//2)

const calc=(val)=>{
    console.log(val*val);
}

arr.forEach(calc);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//find largest no of the array

arr=[2,1,4,3,9,4];

const op=arr.reduce((res,cur)=>{

    return res>cur ? res: cur ; 
})

console.log(op);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//filter out the student who scored more than 90 marks in the class 

let mark=[87,34,67,90,98,97];
cnt=0;
function fun3(val){
    for(let i=0;i<mark.length;i++){
        if(val[i]>90){
            cnt++
        }
    }
    console.log(cnt);
}



fun3(mark);

//using filter method


mark=[23,98,67,97,95,90,69];

let topper=mark.filter((val)=>{
    return val>90;
})

console.log(topper);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------


let n=prompt("enter size of array:");

let arr2=[];

for(i=1;i<=n;i++){
    arr2[i-1]=i;
}

console.log(arr2);

let sumop=arr2.reduce((res,cur)=>{
    return res+cur;
})

console.log(sumop);

let multop=arr2.reduce((res,cur)=>{
    return res*cur;
})

console.log(multop);