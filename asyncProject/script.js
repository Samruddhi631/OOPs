let submit=document.querySelector("#search")
let text=document.querySelector("#text")
let result=document.querySelector("#result")
function getData(username){
    return fetch(`https://api.github.com/users/${username}`).then((res)=>{
        if(!res.ok) throw new Error("user not found.");
        return res.json()
    })
}
function getrepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sorted=updated`).then((res)=>{
        if(!res.ok) throw new Error("failed to fetch repos.");
        return res.json()
    })
}
function decorateProfileData(details){
    let data=`<!-- Avatar -->
        <img 
        src="${details.avatar_url}" 
        alt="GitHub Avatar" 
        class="w-32 h-32 rounded-full border-4 border-green-700 shadow-md"
        />
        <!-- User Info -->
        <div class="space-y-2">
        <h2 class="text-xl font-bold">${details.name || details.login}</h2>
        <p class="text-gray-300">@${details.login}</p>
        <!-- Stats -->
        <div class="flex gap-4 mt-4">
            <div>
            <p class="text-lg font-semibold">${details.public_repos}</p>
            <p class="text-sm text-gray-300">Repositories</p>
            </div>
            <div>
            <p class="text-lg font-semibold">${details.followers}</p>
            <p class="text-sm text-gray-300">Followers</p>
            </div>
            <div>
            <p class="text-lg font-semibold">${details.following}</p>
            <p class="text-sm text-gray-300">Following</p>
            </div>
        </div>
        <!-- Extra Info -->
        <div class="mt-4 space-y-1 text-sm text-gray-300">
            <p><span class="font-semibold text-white">Location:</span> ${details.location || 'N/A'}</p>
            <p>
            <a href="${details.html_url}" class="text-blue-400 hover:underline" target="_blank">View Profile</a>
            </p>
            </div>
        </div>
        `;
        result.innerHTML=data
}
submit.addEventListener('click',(event)=>{
event.preventDefault();
let username=text.value.trim()
getData(username).then(data=>{
    console.log(data)
    decorateProfileData(data)
}).catch(error => {
        result.innerHTML = `<p style="color:red;">User not found or error occurred</p>`;
        console.error(error);
    });
})
