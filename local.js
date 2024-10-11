const addproduct = () => {
    const productField = document.getElementById('p_name');
    const quantityField = document.getElementById('p_quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value='';
    console.log(product,quantity)
    displayproduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
    

}

const displayproduct = (product,quantity) => {
const ul =document.getElementById("product-container");
const li = document.createElement('li');
li.innerText=`${product}: ${quantity} `;
ul.appendChild(li);
}
const getStoredShoppingCart = () => {
    let cart ={};
    const storedcart = localStorage.getItem('cart');
    if(storedcart){
        cart = JSON.parse(storedcart);
    }
    
    return cart;
}
const saveProductToLocalStorage =(product,quantity) =>
{

    const cart =getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringyfied = JSON.stringify(cart);
    // console.log(cartStringyfied)
    localStorage.setItem('cart',cartStringyfied) //overallobject not product quantity

}

const displayProductsFromLocalFromLocalStorage = () => {
    const savedcart = getStoredShoppingCart();
    console.log(savedcart);

    for(const product in savedcart)
    {
        const quantity = savedcart[product] //for getting property value from object that lies in a varaible the use box notation
        console.log(product,quantity);
        displayproduct(product,quantity)
    }
}
displayProductsFromLocalFromLocalStorage()
// fetch('https://uam.getmerlin.in/status', {
//     headers: {
//       'Authorization': 'Bearer YOUR_TOKEN_HERE'
//     }
//   });