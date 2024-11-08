// (function(){
//     console.log("second");
    
// })();

// () => {
// console.log("third");
// }

//callback hell problem
// function rollno(num,delay,nextroll){
//     return new Promise= 
// setTimeout(()=>{
//     console.log("Roll no is",num);
//     if(nextroll) nextroll();
// },delay);
// }
//   rollno(12,1000, ()=>{
//   rollno(13,2000, ()=>{
//   rollno(14,3000, ()=>{
//   rollno(15,4000);  
//   });
//   });
//   });   


// function rollno(num,delay){
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Roll no is",num);
//       resolve("Successfully resolved");
//     },delay);
//      })
// }

// async function getRoll(){
//     await rollno(121,1000);
//     await rollno(122,1000);
//     await rollno(123,1000);

// }
// getRoll();


// rollno(121,1000).then(()=>{
//     rollno(123,2000).then(()=>{
//         rollno(124,3000).then(()=>{
//             console.log(("viva completed"));
            
//         })
//     })
// }).catch(()=>{
//     console.log("error");
// });

// function foodorder(item,time){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log(item); 
//     reject();
// },time)
// })
// }

// foodorder("Pasta",1000).then(()=>{
// foodorder("pizza",1000).then(()=>{
//     foodorder("Burger",3000).then(()=>{
//         console.log("food delivered");       
//     })
// })
// })


// async function order(){
//     try{
//     await foodorder("pasta",1000);
//     await foodorder("burger",2000);
//     await foodorder("pizza",3000);
    
// }catch(error){
//     console.log("error");
    
// }
// }
// order();

let b=fetch('https://api.github.com/users/AyushKanojia123')
    // b.then((data)=>{
    // return data.json();
    // }).then((data)=>{
    //     console.log(data);          
    // }).catch(()=>{
    //     console.log("error");
    // }).finally(()=>{
    //     console.log("first");    
    // })
    

    async function name() {
      const data=await b;
      const data2 = await data.json();
      console.log(data2);
    }
   name();