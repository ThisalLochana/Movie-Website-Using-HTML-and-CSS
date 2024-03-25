//Item 1//
document.getElementById("button1").addEventListener("click", addToCart1);
function addToCart1() {
    var quantity1 = parseInt(document.getElementById("product1quantity").value);
    document.getElementById("bmquantity").innerHTML = quantity1;
    var price1 = quantity1*20;
    document.getElementById("bmprice").innerHTML = "$"+price1;
    carttotal()
}
//Item 2//
document.getElementById("button2").addEventListener("click", addToCart2);
function addToCart2(){
    var quantity2 = parseInt(document.getElementById("product2quantity").value);
    document.getElementById("smquantity").innerHTML = quantity2;
    var price2 = quantity2*20;
    document.getElementById("smprice").innerHTML = "$"+price2;
    carttotal()
}
//Item 3//
document.getElementById("button3").addEventListener("click", addToCart3);
function addToCart3(){
    var quantity3 = parseInt(document.getElementById("product3quantity").value);
    document.getElementById("flquantity").innerHTML = quantity3;
    var price3 = quantity3*20;
    document.getElementById("flprice").innerHTML = "$"+price3;
    carttotal()
}
//Item 4//
document.getElementById("button4").addEventListener("click", addToCart4);
function addToCart4(){
    var quantity4 = parseInt(document.getElementById("product4quantity").value);
    document.getElementById("thquantity").innerHTML = quantity4;
    var price4 = quantity4*20;
    document.getElementById("thprice").innerHTML = "$"+price4;
    carttotal()
}
//---------------------------------------------------------------------------------------------------------//
//Calculate Total//
function carttotal() {
    var total1 = parseInt(document.getElementById("bmprice").innerHTML.slice(1));
    var total2 = parseInt(document.getElementById("smprice").innerHTML.slice(1));
    var total3 = parseInt(document.getElementById("flprice").innerHTML.slice(1));
    var total4 = parseInt(document.getElementById("thprice").innerHTML.slice(1));
    var alltotal = total1 + total2 + total3 + total4;
    document.getElementById("subtotal").innerHTML = "$" + alltotal;
    document.getElementById("alltotal").innerHTML = "$" + alltotal;
}
// Clear cart when user clicks clear cart button//
document.getElementById("clearcart").addEventListener("click", clearcart);
function clearcart(){
    document.getElementById("bmquantity").innerHTML = "0";
    document.getElementById("bmprice").innerHTML = "$0";
    document.getElementById("smquantity").innerHTML = "0";
    document.getElementById("smprice").innerHTML = "$0";
    document.getElementById("flquantity").innerHTML = "0";
    document.getElementById("flprice").innerHTML = "$0";
    document.getElementById("thquantity").innerHTML = "0";
    document.getElementById("thprice").innerHTML = "$0";
    document.getElementById("subtotal").innerHTML = "$0";
    document.getElementById("alltotal").innerHTML = "$0";
    alert("Cart Cleared!")
}
// Check if the cart is empty//
document.getElementById("checkbutton").addEventListener("click",proceed);
function proceed(){
    var check1 = parseInt(document.getElementById("bmprice").innerHTML.slice(1));
    var check2 = parseInt(document.getElementById("smprice").innerHTML.slice(1));
    var check3 = parseInt(document.getElementById("flprice").innerHTML.slice(1));
    var check4 = parseInt(document.getElementById("thprice").innerHTML.slice(1));;
    if(check1==0 && check2==0 && check3==0 && check4==0){
        alert("Cart Empty!")
    }
    else {
        window.location.href = "../w1956094_20221305/CheckoutPage.html";
    }
}
  
