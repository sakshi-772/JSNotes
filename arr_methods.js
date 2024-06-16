/*

1) push method=
                this method is used to add element at the end of array*/


                //eg
                let arr=[1,2,3,4,5];
                console.log(arr);         //  arr=[1,2,3,4,5]
                arr.push(6);
                console.log(arr);         //  arr=[1,2,3,4,5,6]

/*


2)pop method=
              this method is used to delete element from the end and return it*/

              //eg
              arr=[1,2,3,4,5];
              arr.pop();
              console.log(arr);         //  arr=[1,2,3,4]



/*

3)toString()=
              this method convert the array to the string*/


              //eg
              arr=[1,2,3,4,5];
              console.log(arr.toString());         




/*4)concat method=
                  this method is used to join multiple array and return it*/
                  
                  
                  //eg
                  let arr1=[1,2,3,4,5];
                  let arr2=[6,7,8,9,0];
                  let result=arr1.concat(arr2);
                  console.log(result);              // it returns[1,2,3,4,5,6,7,8,9,0]




/*5) unshift method=
                    this method is similar to push method but it add element at start of the array*/


                    //eg
                         arr1.unshift(0);
                         console.log(arr1);               // it returns [0,1,2,3,4,5]




/*shift method=
                this method is used to delete the first item and return it */


                //eg
                    arr1.shift();
                    console.log( `deleted item is ${arr1.shift()}` );         //it delete first element of the arr1 and return it

                                                                              //deleted item is 1


 /*slice method=
                this is used to access element from the array
                
                syntax=
                        arr.slice(startidx, endidx)
                */
                
                
                //eg
                 console.log(arr1);                        //arr1=[1,2,3,4]
                  console.log(arr1.slice(0,2));            //by slice method we can access value between indices 0 to 2

                                                           //arr1=[1,2]


  /* splice array method
                           it can add,remove,replace element of array

                           
                           syntax= 
                                     splice(startidx,delcount,newElt...)

*/

                              //eg
                                   arr1=[1,2,3,4,5];
                                   console.log(arr1.splice(2,2,6,7))   //[3,4]
                                   console.log(arr1);                  //[1,2,6,7,5]

  


                                //add element 
                                arr1=[1,2,3,5,4];
                                console.log(arr1.splice(2,0,45)) ;  
                                console.log(arr1);                  //[1,2,45,3,5,4]


                                //delete element
                                console.log(arr1);
                                console.log(arr1.splice(2,2));          //it return deleted elements [45,3]
                                console.log(arr1);                      //it return modified array  [1,2,5,4]



                                //replace element
                                 arr1=[1,2,3,4,5]
                                console.log(arr1.splice(2,1,6) );        //it return deleted item  [3]
                                console.log(arr1);                       //it return modified array [1,2,6,4,5]