/*
    loops in javascript

    1) FOR Loop
                syntax=
                        for(initialization;stop_condition;updation){
                        
                                   do some work

                        }    */

    //eg=print no 1 to 5
      for(let i=1;i>=5;i++){
        console.log("i=",i);
      }



      let sum=0;
      for(let i=1;i<=10;i++){
        sum=sum+i;
      
      }
      console.log("sum=",sum);



      /* while loop
                    syntax=> 
                             while(cond){
                                     //do some work
                                     }*/


                     //eg
                          let i=1;
                          while( i<=10){
                            console.log("i=",i);
                            i++;
                          }



      /* for of loop
                    syntax=>
                            for(let val of str){
                                   //do some work

                                    }*/
                    
                    
                    
                     //this is used to access string element
                     //eg=
                           /* let s="hii";
                             for(let i of s){
                              console.log(i);
                             }     */ 
                     /* it print h
                                 i
                                 i      on console*/

                                   
                                   
                        //eg=           
                             let str="sakshi";
                             for(let i of str){
                              console.log(i);
                             }      
                                    



      /*for in loop
                    syntax=                       
                           for(let val in str){
                             //do some work
                           }*/


                     //this is used to access keys of object
                     


                     //eg
                           let student={
                            sno:1,
                            sname:"ashok",
                            per:"92.40",
                          }   ;                     



                          for (const key in student)
                         {console.log("key=",key  ,"values=",student[key]);
                                                          
                            }



      //do-while loop
                      /*syntax=
                                do{
                                //do some work
                                }while(cond);*/

      
                      //eg
                           let val=1;
                           do{
                            console.log(val);
                           }while(val<=10);
                        

      
      

