// if (document.readyState=="loading"){
//   document.addEventListener("DOMContentLoaded",ready())
// }else{
//   ready()
// }

// function ready(){
// let removeItem= document.getElementsByClassName("removeItem")
// console.log("here")
// for(i=0; i<removeItem.length; i++){
//   let remove = removeItem[i]
//   remove.addEventListener("click", function(){
//     let clicked=event.target
//     clicked.parentElement.parentElement.remove()
//     updateTotal()
//    })
//   }
//  }
//  let quantityInput= document.getElementsByClassName("cart-quantity")
//  for (let i=0; i<quantityInput.length; i++){
//    let input= quantityInput[i]
//    input.addEventListener("change", changed)
//  }

// function changed(event){
//   let input= event.target
//   if(isNaN(input.value)|| input.value<=0){
//     input.value=1
//   }
//   updateTotal()
// }
//  let addToCart=document.getElementsByClassName("Add-cart")
//  for (let i=0; i<addToCart.length; i++){
//    let cartButton=addToCart[i]
//    cartButton.addEventListener("click", add())
//  }

// function add(event){
//   let addButton=event.target
//   let shopItem=addButton.parentElement.parentElement
//   let title=shopItem.getElementsByClassName("name")[0]
// }

// function updateTotal(){
//   let cartContainer = document.getElementsByClassName("cart-items")[0]
//   let cartRows = cartContainer.getElementsByClassName("cart-row")
//   for(i=0; i<cartRows.length; i++){
//  let cartRow=cartRows[i]
//  let priceElement= cartRow.getElementsByClassName("cart-price")[0]
//  let quantityElement=cartRow.getElementsByClassName("cart-quantity")[0]
//  let price= parseFloat(priceElement.innerText.replace("£",""))
//  let quantity=quantityElement.value
//  total= total +(price * quantity)}
//  total=Math.round(total*100)/100
//  document.getElementsByClassName("total")[0].innerText="£"+"total"
// }
