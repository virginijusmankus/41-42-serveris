// const form = document.querySelector('form')
// console.log(form)

// const createPost = async (e) => {
//     e.preventDefault()
//     const doc = {
//         title: form.title.value,
//         body:form.body.value,
//         views: 0
//     }
//     await fetch('http://localhost:3000/posts',{
//         method:'POST',
//         body:JSON.stringify(doc),
//         headers:{'Content-Type':'application/json'}
//     })
//     window.location.replace('index.html')
// }
// form.addEventListener('submit', createPost)



document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value;
  const body = form.body.value;
  const file = form.image.files[0];

  const reader = new FileReader();
  reader.onload = async function () {
    const base64Image = reader.result;

    const post = {
      title,
      body,
      image: base64Image,
      id: Date.now().toString()
    };

    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });

    if (res.ok) {
      // Alert pirmas – rodomas trumpai, tada keliaujam
      alert("Straipsnis sukurtas!");
      // Priverstinai pereina į index.html
      window.location.href = "index.html";
    } else {
      alert("Nepavyko išsaugoti straipsnio");
    }
  };

  if (file) {
  reader.readAsDataURL(file);
} else {
  // Jei paveikslėlis nepasirinktas – tiesiog sukurk be jo
  const post = {
    title,
    body,
    image: null,
    id: Date.now().toString()
  };

  const res = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });

  if (res.ok) {
    alert("Straipsnis sukurtas!");
    window.location.href = "index.html";
  } else {
    alert("Nepavyko išsaugoti straipsnio");
  }
}
});
