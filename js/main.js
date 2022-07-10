var elCardBtn = document.querySelectorAll(".mt-list__sp");

elCardBtn.forEach(function(btn){
  btn.addEventListener("click" , function(){
    btn.parentElement.classList.toggle("mt-list__box--active");
  })
})
