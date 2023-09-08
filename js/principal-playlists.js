let time = new Date();
let hour = time.getHours();
let messageDay = document.getElementById("messageDay")
if(hour < 12) {
    messageDay.innerText = "Bom dia"
} else if(hour > 12 && hour < 18) {
    messageDay.innerText = "Boa tarde"
} else {
    messageDay.innerText = "Boa noite"
}


let playlisttop = [
    // ["image", "name"]
    ["https://i.scdn.co/image/ab67706f000000025f25fc5f1dab8c8b0b8e63af", "phonk"],
    ["https://i.scdn.co/image/ab67706c0000da8474ec4ffacb6bc2874101fa3a", "Phonk Drifting Songs"],
    ["https://i.scdn.co/image/ab6761610000517482d01fb19218ec62499429f3", "TWISTED"],
    ["https://i.scdn.co/image/ab67616d00001e02864e3512eec08829d165f184", "Contradições"],
    ["https://i.scdn.co/image/ab67616100005174a05aeca002fe4e92a9204cbf", "Veigh"],
    ["https://mosaic.scdn.co/640/ab67616d00001e02172d4424fbc8a3d8358d7039ab67616d00001e02630ff6c7e8d4705c618532f4ab67616d00001e02a15ce75bd2271f6388b6645dab67616d00001e02e2bab14ce82f78a4160376a1", "GYM WORK"],

]
let htmlCode = 
    '<div class="playlist-principal"><img src="IMGSRC" class="principal-playlist-img" alt="principal-img"><div class="principal-playlist-name"> <h3 class="white-text"> NAME </h3></div></div>'

let playlistContainer = document.getElementById('playlist-exibition');

for(let i in playlisttop) {
    let newPlaylist
    newPlaylist = htmlCode.replace("IMGSRC", playlisttop[i][0])
    newPlaylist = newPlaylist.replace("NAME", playlisttop[i][1])
    playlistContainer.innerHTML += (newPlaylist);
}

