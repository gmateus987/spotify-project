// LIKE BUTTON

const likeButton = document.getElementById('likeButton');
let liked = false;

likeButton.addEventListener('click', () => {
    liked = !liked;
    likeButton.classList.toggle('liked', liked);
})

// PLAYER