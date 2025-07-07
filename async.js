// solved call back helll problem using promise

// function stepOne(){
// return new Promise(function(res,rej){
//     console.log("step one")
//     res()
// })
// }
// function stepTwo(){
//     return new Promise(function(res,rej){
//     console.log("step two")
//     res()
// })
// }
// function stepThree(){
//     return new Promise(function(res,rej){
//     console.log("step three")
//     res()
// })
// }
// stepOne().then(stepTwo).then(stepThree).then(()=>{console.log("All steps done")})

// simulate pizza delivery

// function pizzaDelivery(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//            let chance=Math.random()<.7;
//            if(chance) res();
//            else rej()
//         },2000)
//     })
// }
// pizzaDelivery().then(()=>{
//     console.log("🍕 pizza deliverd")
// }).catch(()=>{
//     console.log("🚫 Delivery failed")
// })

// ✅ chained promises : user-> post-> comments 

function getUserId(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({id:1,name:"samruddhi"})
        },2000)
    })
}
function getPost(usreID){
     return new Promise((res,rej)=>{
       setTimeout(()=>{
         res(["title1","tritle2","title3"])
       },2000)
    }) 
}
function getComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(["nice","good","very good"])
        },2000)
    })
}
getUserId().then((data)=>{
console.log(data)
return getPost(data.id)
}).then((posts)=>{
    console.log(posts)
    return getComments("#568789")
}).then((cmts)=>{
    console.log(cmts)
    console.log("data fetched ✔")
})