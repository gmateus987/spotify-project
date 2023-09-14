let firstmusicArray = [
    // ["IMGSRC", "NAME" "LISTDESC"],
        ["./images/playlist-images/novidades.svg", "Radar de Novidades", "Confira os lançamentos dos artistas que você..."],
        ["./images/playlist-images/daily-mix2.svg", "Daily Mix 2", "$uicideboy$, HAARPER, BONES e mais"],
        ["./images/playlist-images/daily-mix3.svg", "Daily Mix 3", "KSLV Noh, SHADXWBXRN, Willix e mais"],
        ["./images/playlist-images/daily-mix4.svg", "Daily Mix 4", "Recayd Mob, Chefin, Veigh e mais"],
        ["./images/playlist-images/daily-mix5.svg", "Daily Mix 5", "TRASHXRL, Oto8, NUEKI e mais"],
        ["./images/playlist-images/daily-mix6.svg", "Daily Mix 6", "phonk.me, Kordhell, MoonDeity e mais"],
        ["./images/playlist-images/descoberta.svg", "Descobertas da Semana", "Sua mixtape semanal cheia de novas..."]
]

let htmllist = '<div id="playlist-element" class="playlist-element"><div class="playlist-element-container"><div class="playlist-element-img"><img src="IMGSRC" class="playlist-element-img" alt=""></div><div id="playlist-play-container" class="playlist-play-container"><div class="playlist-play-box"><div id="playlist-play" class="playlist-play"><svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></div></div></div><div class="playlist-element-text"><div class="playlist-element-title white-text">NAME</div><div class="playlist-element-desc">LISTDESC</div></div></div></div>'

/*
<div id="playlist-element" class="playlist-element"><div class="playlist-element-container"><div class="playlist-element-img"><img src="IMGSRC" class="playlist-element-img" alt=""></div><div id="playlist-play-container" class="playlist-play-container"><div id="playlist-play-box" class="playlist-play-box"><svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></div></div><div class="playlist-element-text"><div class="playlist-element-title white-text">NAME</div><div class="playlist-element-desc">LISTDESC</div></div></div></div>
*/


let firstmusiclist = document.getElementById('first-music-list');

for(let i in firstmusicArray) {
    let newMusiclist 
    newMusiclist = htmllist.replace('IMGSRC', firstmusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', firstmusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', firstmusicArray[i][2]);
    firstmusiclist.innerHTML += newMusiclist;
}

let secondMusicArray = [
    // ["IMGSRC", "NAME", "LISTDESC"],
    ["./images/playlist-images/phonkzada.svg", "PHONKZADA", "É bruxaria, é phonk, é automotivo, vixi"],
    ["./images/playlist-images/funkchallenge.svg", "Funk Challenge", "Sem espaço para crocodilagem"],
    ["./images/playlist-images/tirade.svg", "TIRADE", "Rap from hell. Cover: $uicideboy$"],
    ["./images/playlist-images/slowed-reverb.svg", "slowed and reverb...", "slowed, reverb, chopped and screwed."],
    ["./images/playlist-images/funk-hits.svg", "Funk Hits", "Dentro da Hilux e os funks mais 🔑 do Bras..."],
    ["./images/playlist-images/top-gaming.svg", "Top Gaming Tracks", "Press play, press start."], 
    ["./images/playlist-images/now-loading.svg", "Now Loading", "The latest in gamer music."],
]

let secondmusiclist = document.getElementById('second-music-list');

for(let i in secondMusicArray) {
    let newMusiclist
    newMusiclist = htmllist.replace('IMGSRC', secondMusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', secondMusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', secondMusicArray[i][2]);
    secondmusiclist.innerHTML += newMusiclist;
}

let thirdMusicArray = [
    // ["IMGSRC", "NAME", "LISTDESC"],
    ["./images/playlist-images/phonkzada.svg", "PHONKZADA", "É bruxaria, é phonk, é automotivo, vixi"],
    ["./images/playlist-images/daily-mix6.svg", "Daily Mix 6", "phonk.me, Kordhell, MoonDeity e mais"],
]

let thirdMusicList = document.getElementById('third-music-list');

for(let i in thirdMusicArray) {
    let newMusiclist
    newMusiclist = htmllist.replace('IMGSRC', thirdMusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', thirdMusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', thirdMusicArray[i][2]);
    thirdMusicList.innerHTML += newMusiclist;
}

let fourthMusicArray = [
    ["./images/playlist-images/suicide-boys.svg", "Mix de $uicideboy$", "Ghostemane, BONES e HAARPER"],
    ["./images/playlist-images/bones.svg", "Mix de BONES", "Ramirez, Ghostemane e Freddie Dredd"],
    ["./images/playlist-images/melancolico.svg", "Mix melancólico", "Lil Peep, $uicideboy$, Joji e mais"],
    ["./images/playlist-images/relax.svg", "Mix relax", "1nonly, Deergod, DVRST e mais"],
    ["./images/playlist-images/mix-2000.svg", "Mix anos 2000", "Audioslave, Linkin Park, Pitty e mais"],
    ["./images/playlist-images/mix-2010.svg", "Mix anos 2010", "The Chainsmokers, Freddie Dredd,..."],
    ["./images/playlist-images/freddiedredd.svg", "Mix de Freddie Dredd", "Freddie Dredd, phonk.me e TWISTED"],
]

let fourthMusicList = document.getElementById('fourth-music-list');

for(let i in fourthMusicArray) {
    let newMusiclist
    newMusiclist = htmllist.replace('IMGSRC', fourthMusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', fourthMusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', fourthMusicArray[i][2]);
    fourthMusicList.innerHTML += newMusiclist;
}

let fifthMusicArray = [
    ["./images/playlist-images/no-repeat.svg", "No Repeat", "As músicas que você está curtindo agora"],
    ["./images/playlist-images/maquina-do-tempo.svg", "Sua Máquina do Tempo", "Criamos uma playlist personalizada para..."],
    ["./images/playlist-images/caminho-diario.svg", "Caminho Diário", "Um mix de músicas e notícias feito para você"],
    ["./images/playlist-images/repeat.svg", "De volta pro repeat", "Recordar é viver"]
]

let fifthMusicList = document.getElementById('fifth-music-list')

for(let i in fifthMusicArray) {
    let newMusiclist
    newMusiclist = htmllist.replace('IMGSRC', fifthMusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', fifthMusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', fifthMusicArray[i][2]);
    fifthMusicList.innerHTML += newMusiclist;
}

let sixthMusicArray = [
    ["./images/playlist-images/ultra-gaming.svg", "Ultra Gaming", "Dance, Bass, EDM, Trap, phonk..."],
    ["./images/playlist-images/night-drive.svg", "Night Drive", "Wilee"],
    ["./images/playlist-images/sunrise.svg", "SUNRISE", "Xantesha"],
    ["./images/playlist-images/wakeup.svg", "WAKE UP!", "MoonDeity"]
]

let sixthMusicList = document.getElementById('sixth-music-list')

for(let i in sixthMusicArray) {
    let newMusiclist
    newMusiclist = htmllist.replace('IMGSRC', sixthMusicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', sixthMusicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', sixthMusicArray[i][2]);
    sixthMusicList.innerHTML += newMusiclist;
}