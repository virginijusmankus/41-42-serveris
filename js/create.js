document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value;
  const body = form.body.value;
  const file = form.image.files[0];

  const submitPost = async (imageData = null) => {
    const post = {
      title,
      body,
      image: imageData,
      id: Date.now().toString()
    };

    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });

    if (res.ok) {
      window.location.href = window.location.origin + window.location.pathname.replace("create.html", "index.html");

    } else {
      alert("Nepavyko išsaugoti straipsnio");
    }
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      submitPost(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    submitPost(null);
  }
});
