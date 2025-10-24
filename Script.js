const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const gallery = document.getElementById("gallery");

let clothes = JSON.parse(localStorage.getItem("clothes")) || [];

function displayImages() {
  gallery.innerHTML = "";
  clothes.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.title = `Cloth ${index + 1}`;
    gallery.appendChild(img);
  });
}

uploadBtn.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (!file) return alert("দয়া করে একটা ছবি সিলেক্ট করো!");

  const reader = new FileReader();
  reader.onload = function(e) {
    clothes.push(e.target.result);
    localStorage.setItem("clothes", JSON.stringify(clothes));
    displayImages();
  };
  reader.readAsDataURL(file);
  fileInput.value = "";
});

displayImages();
