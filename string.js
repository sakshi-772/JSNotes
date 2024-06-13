console.log("string ");


//create a string
let str="sakshi";


//print string
//1) 
      console .log(str);

//2) 
      for(let i of str){
          console.log(i);
      }



 let obj={
      item:"pen",
      price:10,
 };
 console.log(obj);
 for(let val in obj){
 console.log( val,"=" ,obj[val]);
}



//to print length of string
//we can use (str.length ) 

console.log("str_length=",str.length);



//to print string in uppercase & lowercase
//we can use (str.toUppercase())  & (str.toLowercase())

let s1="Sakshi";
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());



//to remove whitespace of string   
//we can use (str.trim()) function

let s2="        str.trim()   is used     to remove     whitespace        ";
console.log(s2);
console.log(s2.trim());




//to access a given string from starting to end indices
//their is used (str.slice(starting_indices,stopping_indices)) function

console.log(s2.slice(3,15));


//to concat 2 string
//we can use the (str1.concat(str2)) function

s1="sak";
s2="shi";
let concat=s1.concat(s2);

console.log("concated string is",concat);


//to replace the character in string by new character
//we used (str.replace(search_val,new_val))
s2="sakshi";
concat=s2.replace("s","d");
console.log(concat);




//to replace  all the character in string by new character
//we used (str.replaceAll(search_val,new_val))
s2="sakshi";
concat=s2.replaceAll("s","d");
console.log(concat);


//to access character of given index
//we use (str.charAt(index)) function

s2="sakshi";
concat=s2.charAt(4);
console.log(concat);





/* promppt the user to take input of their name and print their emil with following format 
first fulname second @ character and the length of name in digit
      eg.sakshishelke@12*/

    let fulName= prompt("enter your name without spacing:");

    console.log(fulName+"@"+fulName.length);