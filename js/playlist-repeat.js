
let playlistsArray = [
    // ["link", "NOMEDAPLAYLIST", "TIPODOALBUM", "• 42 músicas"],
    ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd31eb18195a498e901158709/2/pt/default", "Daily Mix 2", "Playlist", "• Spotify"],
    ["https://mosaic.scdn.co/640/ab67616d00001e02172d4424fbc8a3d8358d7039ab67616d00001e02630ff6c7e8d4705c618532f4ab67616d00001e02a15ce75bd2271f6388b6645dab67616d00001e02e2bab14ce82f78a4160376a1", "GYM WORK", "Playlist", "• Mateus Gomes" ],
    ["https://i.scdn.co/image/ab67706c0000da8474ec4ffacb6bc2874101fa3a", "Phonk Drifting Songs", "Playlist", "• amazing playlists" ],
    ["https://seed-mix-image.spotifycdn.com/v6/img/artist/0dlDsD7y6ccmDm8tuWCU6F/pt/default", "Mix de Freddie Dredd", "Playlist", "• Spotify"],
    ["https://i.scdn.co/image/ab67616d000011ebce0947b85c30490447dbbd91", "Dos Prédios Deluxe", "Álbum", "• Veigh"],
    ["https://i.scdn.co/image/ab67616d00001e02864e3512eec08829d165f184", "Contradições", "Álbum", "• KayBlack"],
    ["https://i.scdn.co/image/ab67706f000000025f25fc5f1dab8c8b0b8e63af", "phonk", "Playlist", "• Spotify"],
    ["https://i.scdn.co/image/ab676161000051749d100e5a9cf34beab8e75750", "Freddie Dredd", "Artista", ""],
    ["https://i.scdn.co/image/ab6761610000517482d01fb19218ec62499429f3", "TWISTED", "Artista", ""],
    ["https://i.scdn.co/image/ab676161000051749ea0f662578ed41d5533fbbb", "phonk.me", "Artista", ""],
    ["https://i.scdn.co/image/ab67616100005174a05aeca002fe4e92a9204cbf", "Veigh", "Artista", ""],
    ["https://i.scdn.co/image/ab67616100005174d58864dc0736b56bd83baf4a", "KayBlack", "Artista", ""],

]

let htmlBlock = 
    '<button class="playlist-button"><div class="playlist" id="playlist-block"> <div role="button" id="playlist-image"> <img src="SOURCEIMAGE" alt="NOMEDAPLAYLIST" class="liked-songs"> </div> <div class="playlist-name"> NOMEDAPLAYLIST <div class="playlist-description">  <span class="pldesc-text"> TIPODOALBUM QTDMUSICAS </span> </div> </div> </div></button>'



let playlist = document.getElementById('album-block');

for(let i in playlistsArray){
    let newPlaylist
    newPlaylist = htmlBlock.replace("SOURCEIMAGE", playlistsArray[i][0]);
    newPlaylist = newPlaylist.replaceAll("NOMEDAPLAYLIST", playlistsArray[i][1]);
    newPlaylist = newPlaylist.replace("TIPODOALBUM", playlistsArray[i][2]);
    newPlaylist = newPlaylist.replace("QTDMUSICAS", playlistsArray[i][3]);
    playlist.innerHTML += (newPlaylist);
}
