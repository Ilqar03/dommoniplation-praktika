const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
   const edit= btn.parentElement.children[0].children[0]
   edit.style.color ="red"
   const font= btn.parentElement.children[0].children[1].children[1]
   font.style.fontSize="140px"
}); 
