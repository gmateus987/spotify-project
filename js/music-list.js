let musicArray = [
    // ["IMGSRC", "NAME" "LISTDESC"],
        ["https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5ebecb16971eae11718958b7e38/pt", "Radar de Novidades", "Confira os lançamentos dos artistas que você..."],
        ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd31eb18195a498e901158709/2/pt/default", "Daily Mix 2", "$uicideboy$, HAARPER, BONES e mais"],
        ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb778ba88ea52375041f3033bc/3/pt/default", "Daily Mix 3", "KSLV Noh, SHADXWBXRN, Willix e mais"],
        ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3990d29cef914dc3f5ec43cf/4/pt/default", "Daily Mix 4", "Recayd Mob, Chefin, Veigh e mais"],
        ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf3ed7235eadd0c7062465d73/5/pt/default", "Daily Mix 5", "TRASHXRL, Oto8, NUEKI e mais"],
        ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd1b75375b297088b835d139a/6/pt/default", "Daily Mix 6", "phonk.me, Kordhell, MoonDeity e mais"],
        ["https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/yqRqPZ_5XuNDKYj63rA1c8z-8YnZumw9GVWHwXEMuIIZX5d0RiFuRZ7zOJR0GBdrd7Z6coI_e-zSKXx2rAR37X378OWde3ztE_EQ8_3KcF34jeSW0VMsG2NZHRteskyXBHQJf8Q7xMplQozd1a_cCvXrYOULIYf13z55J7VTp9j6zjxRVIRbZsuuByK5yQ6pfpdWASgJsAB1Al2ooNh3vg==/MjA6NTM6MDFUMzItOTAtMw==", "Descobertas da Semana", "Sua mixtape semanal cheia de novas..."]
]

let htmllist = '<div class="playlist-element"><div class="playlist-element-container"><img src="IMGSRC"class="playlist-element-img" alt=""><div class="playlist-element-text"><div class="playlist-element-title white-text">NAME</div><div class="playlist-element-desc">LISTDESC</div></div></div></div>'



let musiclist = document.getElementById('music-list');

for(let i in musicArray) {
    let newMusiclist 
    newMusiclist = htmllist.replace('IMGSRC', musicArray[i][0]);
    newMusiclist = newMusiclist.replace('NAME', musicArray[i][1]);
    newMusiclist = newMusiclist.replace('LISTDESC', musicArray[i][2]);
    musiclist.innerHTML += newMusiclist;
}