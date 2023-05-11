cart=0;
function addtoCart(){
    cart+=1;
}
function removefromCart(){
    cart-=1;
}
function savetoCart(){
    localStorage.setItem("Cart", cart);
    cartRecieved=localStorage.getItem("Cart");
    document.getElementById("amount").innerHTML="Amount: "+cartRecieved;
}
function goToCart(){
    window.location="index2.html";
}
function viewAmount(){
    cartRecieved=localStorage.getItem("Cart");
    document.getElementById("cart").innerHTML="Order Quantity: "+cartRecieved;
}
function goBack(){
    window.location="index.html";
}
function checkout(){
    window.location="index3.html";
}
cartRecieved=localStorage.getItem("Cart");
sprice=37.99;
price=cartRecieved * sprice;
function viewPrice(){
    document.getElementById("price").innerHTML="Price: "+price;
}
ccn=document.getElementById("ccn");
cced=document.getElementById("cced");
ccsc=document.getElementById("cssc");
fn=document.getElementById("fn");
ln=document.getElementById("ln");
c=document.getElementById("c");
r=document.getElementById("r");
pc=document.getElementById("pc");
pn=document.getElementById("pn");
function order(){
    window.location="index4.html";
}