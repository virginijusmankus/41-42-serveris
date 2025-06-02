const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')

window.addEventListener('DOMContentLoaded',()=>renderDetails())

const renderDetails = async ()=>{
    let uri = 'http://localhost:3000/posts/'+id;

    const res = await fetch(uri)
    const post = await res.json()
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    container.innerHTML=template;
}
const deleteBtn = document.querySelector('.delete')
deleteBtn.addEventListener('click',async(e)=>{
    const res = await fetch('http://localhost:3000/posts/'+id,{
      method:'DELETE'  
    })
window.location.replace('./index.html')
})