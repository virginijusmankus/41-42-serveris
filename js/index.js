window.addEventListener('DOMContentLoaded',()=>rederPosts())

const container = document.querySelector('.irasai')

const rederPosts = async ()=>{
let uri = 'http://localhost:3000/posts?_sort=likes&order=desc';

const res = await fetch(uri)
const posts = await res.json()

let template = ''

posts.forEach(post => {
    template+=`
    <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.views}views</small></p>
        <p>${post.body.slice(0,200)}</p>
        <a href="details.html?id=${post.id}">Placiau</a>
        </div>
        `

});
container.innerHTML = template;

}