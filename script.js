const searcIcon = document.querySelector("#search");

const searchBar = document.querySelector("#search-bar");

const productsName = document.querySelector("#products-name");

const displayProducts = document.querySelector(".display-products");


const displayItems = (title,images,description,price) => {

   

const createDiv = document.createElement("div");

const createImage = document.createElement("img");

createImage.classList.add("div-image");

createDiv.classList.add("divcreated");

   

createDiv.innerHTML =`

<img src="${images[0]}" alt="products-images" class="div-image">

<h1>${title}</h1>

<h3>${description}</h3>

<p>Price: $ ${price}</p>

`



displayProducts.appendChild(createDiv);





}



const inputfieldValue = async () =>{
  
    const values = searchBar.value.trim();
    try{

    const Url = await fetch(`https://dummyjson.com/products/search?q=${values}`);

const products = await  Url.json();

if(products.total > 0){

    const data = products.products[0];


  displayItems(
    data.title,

    data.images,

    data.description,

    data.price
);

}else{
  productsName.innerHTML =  "Product not found.... 😞"
}

    }catch(err){
        console.log(`Error while fetching data:${err}`)
    }

 




}

const getProducts = () =>{

     inputfieldValue();

}





searcIcon.addEventListener("click",getProducts)