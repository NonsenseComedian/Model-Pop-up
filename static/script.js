document.addEventListener('DOMContentLoaded', () =>{
   let modal = document.getElementById("modal")
   let open = document.getElementById("openmodal")
   let close = document.getElementById("closemodal")

   open.addEventListener("click", () =>{
    model.style.display = 'block';
   })

   close.addEventListener('click' , () =>{
    model.style.display = 'none'; 
   }) 
})