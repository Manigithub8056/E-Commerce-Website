
var productContainer = document.getElementById("products");
var Search = document.getElementById("Search");
var productsList = document.querySelectorAll(".product-box");

Search.addEventListener('keyup',function()
{
    var enteredValue = event.target.value.toUpperCase();

    for(count=0;count<productsList.length;count=count+1)
    {
        var productName = productsList[count].querySelector('p').textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productsList[count].style.display="none"
        }
        else{
            productsList[count].style.display="block"
        }
    }
})