//Ajax : 

var posts = [];

var myRequest = new XMLHttpRequest();

myRequest.open('GET', "https://api.themoviedb.org/3/trending/tv/day?api_key=62d4a6f6b71341658a7c319e4cf7261f");

myRequest.send();

myRequest.addEventListener('readystatechange', function() {

    if (myRequest.readyState === 4 && myRequest.status === 200) {

        // console.log(myRequest.response);
        posts = JSON.parse(myRequest.response).results;
        // console.log(posts);
        displayPosts();
    }
});


function displayPosts() {

    var cartoona = '';
    for (var i = 0; i < posts.length; i++) {
        cartoona += ` <div class="col-md-3">
        <div class="post">
        <img  class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
            <h3>${posts[i].name}</h3>
            <h4>vote: ${posts[i].vote_count}</h4>
            <h5>country: ${posts[i].origin_country}</h5>
            <p>${posts[i].overview}</p>

        </div>

    </div>`
    }
    document.getElementById('myRow').innerHTML = cartoona;
}