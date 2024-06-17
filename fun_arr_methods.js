//                              ARRAY METHODS

//---------------------------------------------------------------------------------------------------------------------

//1)MAP METHOD=
                //SIMILAR TO forEach LOOP
                //syntax=
                          //arr.map(callback function(vl,index,array))



                // //eg=
                //       let arr=[1,2,3,4,6];
                //       arr.map((val)=>{
                //         console.log(val);
                //       })          



                // //eg 
                //       arr=[1,2,3,4,5];
                //       let sum=0;                      
                //       function arrsum(val){
                    //     sum+=val;
                    //     console.log(sum);
                    //   }
                     
                    //  arr.map(arrsum);



//---------------------------------------------------------------------------------------------------------------------
   
//2)reduce method

                 //it reduce a array to a string  value

                 //syntax=
                           //arr.reduce(callback function);


                 //eg=
                      arr=[1,2,3,4];
                      const output=arr.reduce((res,curr)=>{
                        return res+curr;
                      })          

                      console.log(output);



