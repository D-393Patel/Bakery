var searchIcon= document.querySelector('.search-icon');
var searchFrom=document.querySelector('.search-from')

searchIcon.addEventListener('click',()=>{
  searchFrom.classList.toggle("active");
  cartItemContainer.classList.remove("active");
})

var cartIcon= document.querySelector('.cart-icon');
var cartItemContainer=document.querySelector('.cart-items-container')

cartIcon.addEventListener('click',()=>{
  cartItemContainer.classList.toggle("active");
  searchFrom.classList.remove("active");
})
































































































































































































































































































































































































































































































































