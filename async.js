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

// function getUserId(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({id:1,name:"samruddhi"})
//         },2000)
//     })
// }
// function getPost(usreID){
//      return new Promise((res,rej)=>{
//        setTimeout(()=>{
//          res(["title1","tritle2","title3"])
//        },2000)
//     }) 
// }
// function getComments(postId){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(["nice","good","very good"])
//         },2000)
//     })
// }
// getUserId().then((data)=>{
// console.log(data)
// return getPost(data.id)
// }).then((posts)=>{
//     console.log(posts)
//     return getComments("#568789")
// }).then((cmts)=>{
//     console.log(cmts)
//     console.log("data fetched ✔")
// })

// fake API delay:

// function fakeApiCall(endpoint){
//     const data={
//         users:["samruddhi","kavya","jayesh"],
//         posts:["hey Champs","lets build this","great Going"]
//     }
//     let delay=Math.random()*3000+1000;
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//              res(data[endpoint])
//         },delay)
//     })
// }
// fakeApiCall("users").then((data)=>{
//     console.log(data)
// })

// fetch functiom in js:

// fetch("https://api.github.com/users/samruddhi631")
// .then(res=>res.json()).then(data=>{
//     console.log(data)
// })

let submit=document.querySelector("#search")
let text=document.querySelector("#text")
let div=document.querySelector("#data")
function getData(username){
    return fetch(`https://api.github.com/users/${username}`).then(res=>res.json())
}
submit.addEventListener('click',(event)=>{
event.preventDefault();
getData(text.value).then(data=>{
    console.log(data)
    div.innerHTML=`
            <img src="${data.avatar_url}" width="100" alt="Avatar">
            <h2>${data.name || data.login}</h2>
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
        `;
        div.style.color="black"
}).catch(error => {
        div.innerHTML = `<p style="color:red;">User not found or error occurred</p>`;
        console.error(error);
    });
})