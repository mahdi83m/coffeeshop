const products = [
  {
    id: 1,
    name: "Special Salad",
    describtion: "Chiken ,Lettuce ,Corn ,Tomato",
    price: 19.5,
    image: "Image/salad.png",
  },
  {
    id: 2,
    name: "Simple Salad",
    describtion: "Lettuce ,Radish ,Bread",
    price: 10,
    image: "Image/salad-2.png",
  },
  {
    id: 3,
    name: "Special Drink",
    describtion: "Absinthe",
    price: 30,
    image: "Image/drink.jpg",
  },
  {
    id: 4,
    name: "Vodka drink",
    describtion: "Vodka",
    price: 25,
    image: "Image/drink2.jpg",
  },
  {
    id: 5,
    name: "Whiskey drink",
    describtion: "Whiskey",
    price: 23,
    image: "Image/drink1.jpg",
  },
  {
    id: 6,
    name: "Special Egg",
    describtion: "Egg ,Tomato ,Vegetable",
    price: 15,
    image: "Image/toast.png",
  },
  {
    id: 7,
    name: "Baguette",
    describtion: "Lettuce ,Ham ,Carrots ,Toast",
    price: 20,
    image: "Image/baguette.png",
  },
  {
    id: 8,
    name: "Cheese Sandwich",
    describtion: "Tomato ,Cheese ,Vegetable ,Fried bread",
    price: 19,
    image: "Image/brunch.jpg",
  },
];

const renderAllProducts = () => {
  const productdiv = document.querySelector(".product-pos");
  productdiv.innerHTML = ``;
  products.forEach((item, index) => {
    productdiv.innerHTML += `
    <div class="product animate__animated animate__pulse">
    <div><img src="${item.image}" alt="" class="img-product"></div>
    <div class="item-des-product">
        <h2 class="margin">${item.name}</h2>
        <p>${item.describtion}</p>
    </div>
    <div class="price-product item-des-product">
        <h4>Price :</h4>
        <p>$${item.price}</p>
    </div>
    </div>  `;
  });
};

const drinks = [
  {
    id: 1,
    name: "Special Drink",
    describtion: "Absinthe",
    price: 30,
    image: "Image/drink.jpg",
  },
  {
    id: 2,
    name: "Vodka drink",
    describtion: "Vodka",
    price: 25,
    image: "Image/drink2.jpg",
  },
  {
    id: 2,
    name: "Whiskey drink",
    describtion: "Whiskey",
    price: 23,
    image: "Image/drink1.jpg",
  }
];

const renderDrinks = () => {
  const productdiv = document.querySelector(".product-pos");
  productdiv.innerHTML = ``;
  drinks.forEach((item, index) => {
    productdiv.innerHTML += `
          <div class="product animate__animated animate__pulse">
          <div><img src="${item.image}" alt="" class="img-product"></div>
          <div class="item-des-product">
              <h2 class="margin">${item.name}</h2>
              <p>${item.describtion}</p>
          </div>
          <div class="price-product item-des-product">
              <h4>Price :</h4>
              <p>$${item.price}</p>
          </div>
          </div>  `;
  });
};

const brunch = [
  {
    id: 1,
    name: "Special Egg",
    describtion: "Egg ,Tomato ,Vegetable",
    price: 15,
    image: "Image/toast.png",
  },
  {
    id: 2,
    name: "Baguette",
    describtion: "Lettuce ,Ham ,Carrots ,Toast",
    price: 20,
    image: "Image/baguette.png",
  },
  {
    id: 2,
    name: "Cheese Sandwich",
    describtion: "Tomato ,Cheese ,Vegetable ,Fried bread",
    price: 19,
    image: "Image/brunch.jpg",
  },
];

const renderBrunch = () => {
  const productdiv = document.querySelector(".product-pos");
  productdiv.innerHTML = ``;
  brunch.forEach((item, index) => {
    productdiv.innerHTML += `
          <div class="product animate__animated animate__pulse">
          <div><img src="${item.image}" alt="" class="img-product"></div>
          <div class="item-des-product">
              <h2 class="margin">${item.name}</h2>
              <p>${item.describtion}</p>
          </div>
          <div class="price-product item-des-product">
              <h4>Price :</h4>
              <p>$${item.price}</p>
          </div>
          </div>  `;
  });
};

const salad = [
    {
      id: 1,
      name: "Special Salad",
      describtion: "Chiken ,Lettuce ,Corn ,Tomato",
      price: 19.5,
      image: "Image/salad.png",
    },
    {
      id: 2,
      name: "Simple Salad",
      describtion: "Lettuce ,Radish ,Bread",
      price: 10,
      image: "Image/salad-2.png",
    },
  ];
  
  const renderSalad = () => {
    const productdiv = document.querySelector(".product-pos");
    productdiv.innerHTML = ``;
    salad.forEach((item, index) => {
      productdiv.innerHTML += `
            <div class="product animate__animated animate__pulse">
            <div><img src="${item.image}" alt="" class="img-product"></div>
            <div class="item-des-product">
                <h2 class="margin">${item.name}</h2>
                <p>${item.describtion}</p>
            </div>
            <div class="price-product item-des-product">
                <h4>Price :</h4>
                <p>$${item.price}</p>
            </div>
            </div>  `;
    });
  };
