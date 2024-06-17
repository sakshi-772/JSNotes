//-----------------------------------------------------------------------------------------------------------------------

//                                                 FUNCTIONS

//-----------------------------------------------------------------------------------------------------------------------


// FUNCTIONS are block of code that perform a specific task

//-----------------------------------------------------------------------------------------------------------------------

//FUNCTION DEFINATION =
                        /*SYNTAX=
                                1)  function fun_name(){
                                       //do somme work
                                    }

                                2)   function fun_name(para1,para2){
                                
                                       //do somme work
                                    }    */

//-----------------------------------------------------------------------------------------------------------------------


//FUNCTION CALLING=
                    /* SYNTAX=
                              1) fun_name();


                              2) fun_name(arg1,arg2);*/


//-----------------------------------------------------------------------------------------------------------------------


//eg
//create function without using parameter 
function fun1(){
    console.log("hello");
  }

  (fun1());          //hello


//-----------------------------------------------------------------------------------------------------------------------

//eg
//create function without using parameter 
    function fun2(x,y){
        let sum=x+y;
        console.log(sum);
    }


    fun2(2,3);        //5


//-----------------------------------------------------------------------------------------------------------------------

function  mult(x,y){
    console.log("before return");
    return x+y;
    console.log("after return");               //after return statement does not display any content on console
}

console.log(mult(2,3,));