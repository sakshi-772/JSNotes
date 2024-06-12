console.log("hello");


/*  if statement

   syntax=
          if(cond){
              
                 //do some work

           }*/                            


//eg
    let color;
    let mode="bright";
    if(mode="dark"){
        color="black";

    }
 /* if else stmt
     
    syntax=
           if(cond){
           
                 //do some work

           }else{
           
                 //do some work
           
           }*/


    //eg
        if(mode="dark"){
            color="black";
        }else{
            color="white";
        }





        /* if else stmt
     
    syntax=
           if(cond){
           
                 //do some work

           }else if(cond){
           
                 //do some work

           }else{
           
                 //do ssome work
           
           }*/


    //eg
         let marks;
         marks= prompt("enter your percentage:");
         if(marks>=35){
            console.log("pass");
            if(marks>=90){
                console.log("grade A");
            }else if(marks>=70){
                console.log("grade B");
            }else if(marks>=50){
                cpnsole.log("grade C");
            }else{
                console.log("grade D");
            }
            }else{
                console.log("fail");
                console.log("better luck next time");
            }






     // ternary operators
    
    /* syntax=
              cond ? true output:false output
    
    */     
   
              
     //eg=
          let age;
          age=prompt("enter your age:");
          let output=( age>=18 ? "adult": "not adult" );
          console.log(output);



     //prompt
     //displays a box which asks user for some input  
     //eg=
          prompt("enter your name:");
          
          
     //alert
     //one time pop up a message
     alert("this is alert");
     
     



     //switch statement
     //eg=
           colour="green";
           switch(colour){
            case "red":
                  console.log("stop");
            case "yellow":
                 console.log("slow down");
            case "green":
                 console.log("GO");
            default:
                console.log("light is broken") ;
            
           }




           
