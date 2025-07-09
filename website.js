
setTimeout(function () {
  document.getElementById('loadingScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}, 1000);


// slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

const showSlide = (n) => {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${(slideIndex) * 100}%)`
  });
}

const prevSlide = () => {

  showSlide(--slideIndex);
}

const nextSlide = () => {

  showSlide(++slideIndex);
}
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 2000);
showSlide(slideIndex)





// product
const product = [
  {
    id: 1,
    name: "Shirt",
    desc: "Comfortable Cotton Shirt",
    price: 2125,
    brand: "EYEBOGLER",
    color: "Navy",
    image: "https://assets.ajio.com/medias/sys_master/root/20241219/lHU5/6764352ac148fa1b304ddfa4/-473Wx593H-467010736-navy-MODEL.jpg",
    stock: 12,
    discount: 10,
    rating: 4.5,
    category: "Men"
  },
  {
    id: 2,
    name: "Jeans",
    desc: "Men Relaxed Jeans with Insert Pockets",
    price: 3400,
    color: "Blue",
    brand: "SNITCH",
    image: "https://assets.ajio.com/medias/sys_master/root/20250120/krGT/678e93b1663dbe1c5fe794e2/-473Wx593H-700180146-blue-MODEL.jpg",
    stock: 5,
    discount: 15,
    rating: 4.0,
    category: "Men"
  },
  {
    id: 3,
    name: "Jacket",
    desc: "Denim Flap Pockets Jacket",
    price: 5950,
    brand: "DENNISLINGO PREMIUM ATTIRE",
    color: "Black",
    image: "https://assets.ajio.com/medias/sys_master/root/20230724/UZfx/64be1a8fa9b42d15c969d05f/-473Wx593H-465399076-black-MODEL.jpg",
    stock: 8,
    discount: 20,
    rating: 4.8,
    category: "Men"
  },
  {
    id: 4,
    name: "T-shirt",
    desc: "Men Graphic Print Regular Fit Crew-Neck T-Shirt",
    price: 1700,
    color: "White",
    brand: "Levi's",
    image: "https://assets.ajio.com/medias/sys_master/root/20241127/sDE9/6746e6e10f47f80c87af7075/-473Wx593H-442711258-white-MODEL.jpg",
    stock: 20,
    discount: 5,
    rating: 4.2,
    category: "Men"
  },
  {
    id: 5,
    name: "Hoodie",
    desc: "Men Typographic Hoodie",
    price: 1870,
    color: "Black",
    brand: "TOGS & TERRE",
    image: "https://assets.ajio.com/medias/sys_master/root/20241211/QgIi/6758bf580f47f80c87eda039/-1117Wx1400H-700905893-black-MODEL.jpg",
    stock: 7,
    discount: 12,
    rating: 4.1,
    category: "Men"
  },
  {
    id: 6,
    name: "Dress",
    desc: "Women Kurta Set",
    price: 3825,
    color: "Beige",
    brand: "SHOWOFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20250204/6m0g/67a2431abc78b543a920cda2/-473Wx593H-701165566-cream-MODEL.jpg",
    stock: 10,
    discount: 8,
    rating: 4.6,
    category: "Women"
  },
  {
    id: 7,
    name: "T-Shirts",
    desc: "Women Typographic Print Oversized Fit T-Shirt",
    price: 2550,
    brand: "TOGS & TERRE",
    color: "Blue",
    image: "https://assets.ajio.com/medias/sys_master/root/20241002/kBDW/66fc76ee260f9c41e84c8b99/-473Wx593H-700521698-blue-MODEL.jpg",
    stock: 6,
    discount: 10,
    rating: 4.0,
    category: "Women"
  },
  {
    id: 8,
    name: "Jumpsuit",
    desc: "Short-Sleeve Jumpsuit with Waist Tie-Up",
    price: 2975,
    color: "Pink",
    brand: "FAVRIZ",
    image: "https://assets.ajio.com/medias/sys_master/root/20230727/JpS5/64c29b50eebac147fc8fac09/-473Wx593H-466393680-black-MODEL.jpg",
    stock: 14,
    discount: 18,
    rating: 4.4,
    category: "Women"
  },
  {
    id: 9,
    name: "Skirt",
    desc: "High-Rise A-Line Skirt",
    price: 3400,
    color: "Grey",
    brand: "YOUSTA",
    image: "https://assets.ajio.com/medias/sys_master/root/20250307/fV7R/67cabd6759f835398024ace4/-473Wx593H-443068596-ecru-MODEL.jpg",
    stock: 9,
    discount: 10,
    rating: 4.3,
    category: "Women"
  },
  {
    id: 10,
    name: "Trousers",
    desc: "Straight Fit Pleat Front Trousers",
    price: 5525,
    color: "Beige",
    brand: "KOTTY",
    image: "https://assets.ajio.com/medias/sys_master/root/20230605/rLzy/647de5e442f9e729d7230a13/-473Wx593H-466236960-white-MODEL.jpg",
    stock: 4,
    discount: 25,
    rating: 4.7,
    category: "Women"
  },
  {
    id: 11,
    name: "Dress",
    desc: "Girls Embellished Fit & Flare Dress",
    price: 1275,
    color: "White",
    brand: "AVSAR TRENDZ",
    image: "https://assets.ajio.com/medias/sys_master/root/20241206/vux2/6752d379c148fa1b301df214/-473Wx593H-700886671-white-MODEL.jpg",
    stock: 15,
    discount: 5,
    rating: 4.2,
    category: "Kids"
  },
  {
    id: 12,
    name: "Shorts",
    desc: "Solid Mid Rise Cargo Shorts",
    price: 1700,
    color: "Navy",
    brand: "BALISTA",
    image: "https://assets.ajio.com/medias/sys_master/root/20220629/bm1M/62bb6b56f997dd03e2a607c4/-473Wx593H-464558803-navy-MODEL.jpg",
    stock: 12,
    discount: 10,
    rating: 4.3,
    category: "Kids"
  },
  {
    id: 13,
    name: "Shirt",
    desc: "Boys Striped Shirt with Shorts",
    price: 1550,
    color: "White",
    image: "https://assets.ajio.com/medias/sys_master/root/20250319/A7if/67daca4759f8353980495683/-473Wx593H-701355800-blue-MODEL.jpg",
    stock: 6,
    discount: 12,
    rating: 4.6,
    category: "Kids"
  },
  {
    id: 14,
    name: "Shorts",
    desc: "Boys Crinkled Shirt with Shorts",
    price: 1020,
    brand: "FASTDEAL X AG",
    color: "Beige",
    image: "https://assets.ajio.com/medias/sys_master/root/20250319/iCce/67daca8759f8353980495fba/-473Wx593H-701355765-cream-MODEL.jpg",
    stock: 8,
    discount: 10,
    rating: 4.1,
    category: "Kids"
  },
  {
    id: 15,
    name: "Top",
    desc: "Girls Floral Embroidered Top & Shorts Set",
    price: 1530,
    color: "Aqua",
    brand: "INF FRENDZ",
    image: "https://assets.ajio.com/medias/sys_master/root/20250212/uUhA/67ac9a3fbc78b543a93cf45a/-473Wx593H-443066343-ltaqua-MODEL.jpg",
    stock: 11,
    discount: 15,
    rating: 4.5,
    category: "Kids"
  },
  {
    id: 16,
    name: "T-Shirt",
    desc: "Men Graphic Oversized Fit T-shirt",
    price: 1200,
    brand: "TEDERICH",
    color: "Navy",
    image: "https://assets.ajio.com/medias/sys_master/root/20241028/OjYf/671f676df9b8ef490be83558/-473Wx593H-700663710-navy-MODEL.jpg",
    stock: 10,
    discount: 20,
    rating: 4.9,
    category: "Men"
  },
  {
    id: 17,
    name: "Top",
    desc: "Women Schiffli Embroidered Regular Fit Top",
    price: 1750,
    brand: "HOUSE OF MIRA",
    color: "Peach",
    image: "https://assets.ajio.com/medias/sys_master/root/20240710/i683/668df9f16f60443f31cd8078/-473Wx593H-700180538-peach-MODEL.jpg",
    stock: 7,
    discount: 25,
    rating: 4.7,
    category: "Women"
  },
  {
    id: 18,
    name: "Top",
    desc: "V-Neck Fitted Tank Top",
    price: 900,
    brand: "NEUDIS",
    color: "Wine",
    image: "https://assets.ajio.com/medias/sys_master/root/20240207/cJdU/65c3372b8cdf1e0df5f17260/-473Wx593H-466313449-wine-MODEL.jpg",
    stock: 5,
    discount: 18,
    rating: 4.6,
    category: "Women"
  },
  {
    id: 19,
    name: "Jeans",
    desc: "Boys Superstretch Slim Fit Jeans",
    price: 2100,
    brand: "H&M",
    color: "Blue",
    image: "https://assets.ajio.com/medias/sys_master/root/20250312/UPIv/67d1c12e2960820c49e80955/-473Wx593H-700322408-blue-MODEL.jpg",
    stock: 9,
    discount: 15,
    rating: 4.4,
    category: "Kids"
  },
  {
    id: 20,
    name: "Shirts",
    desc: "Full Sleeves Slim Fit Shirt",
    price: 1050,
    color: "White",
    brand: "Levi's",
    image: "https://assets.ajio.com/medias/sys_master/root/20240924/usEp/66f25225260f9c41e81fb972/-473Wx593H-462323964-white-MODEL.jpg",
    stock: 3,
    discount: 10,
    rating: 4.5,
    category: "Men"
  }
];




function products(products) {
  let container = document.querySelector("#productcontainer")
  container.innerHTML = ''
  products.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
    col.innerHTML = `
<div class="card  product-card">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body d-flex flex-column text-center">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text"> ${p.desc}</p>
    <p class="card-text">Rating: ${p.rating}</p>
    <p class="card-text">Price: ₹${p.price}</p>
   <a href="singleproduct.html?id=${p.id}" class="btn btn-outline-light w-100 view-more-btn">View More</a>
   </div>
   </div>
   `
    container.appendChild(col)
  })
}
products(product)

// filter by category
function filterbyCategory(category) {
  if (category === "All") {
    products(product)
  }
  else {
    const filterproducts = product.filter((pro) => pro.category === category)
    products(filterproducts)
  }
}


// search by name
function searchbyname() {
  let pname = document.getElementById("psearch").value.toLowerCase()
  let pro = product.filter(item => item.name.toLowerCase().includes(pname))
  products(pro)
}

// sort by name
function sortbyname() {
  let sortbynm = product.sort((a, b) => a.name.localeCompare(b.name))
  products(sortbynm);
}

// price by range
function filterbyprice() {
  const price = document.getElementById("pprice").value
  let filtered = []

  if (price === "price1") filtered = product
  else if (price === "price2") filtered = product.filter(pro => pro.price <= 999);
  else if (price === "price3") filtered = product.filter(pro => pro.price >= 1000 && pro.price <= 2999);
  else if (price === "price4") filtered = product.filter(pro => pro.price >= 3000 && pro.price <= 4999);
  else if (price === "price5") filtered = product.filter(pro => pro.price >= 5000);

  products(filtered)
}



// banner

function showWomen() {
  filterbyCategory('Women')

  const productView = document.getElementById('productOverview')
  if (productView) {
    productView.scrollIntoView()
  }
}

function showMen() {
  filterbyCategory('Men')

  const productView = document.getElementById('productOverview')
  if (productView) {
    productView.scrollIntoView()
  }
}

function showKid() {
  filterbyCategory('Kids')

  const productView = document.getElementById('productOverview')
  if (productView) {
    productView.scrollIntoView()
  }
}



// logout js


window.addEventListener("DOMContentLoaded", function () {
  const loginbtn = localStorage.getItem("logIn") === "true";
  const username = localStorage.getItem("loginUser");

  const loginButton = document.getElementById("loginButton");
  const userInfo = document.getElementById("userInfo");
  const usernameDisplay = document.getElementById("usernameDisplay");

  if (loginbtn && username) {
    if (loginButton) {
      loginButton.style.display = "none";
    }
    if (userInfo) {
      userInfo.style.display = "block";
    }
    if (usernameDisplay) {
      usernameDisplay.textContent = username;
    }
  }
  else {
    if (loginButton) {
      loginButton.style.display = "block";
    }
    if (userInfo) {
      userInfo.style.display = "none";

    }
  }
})

function logout() {
  localStorage.setItem("logIn", "false");
  localStorage.removeItem("loginUser");
  alert("Logged out successfully.");
  window.location.reload();
}



// CART COUNT

const cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById("cartcount").textContent = cart.length;



// wish count
const wish = JSON.parse(localStorage.getItem('wish')) || [];
document.getElementById("wishcount").textContent = wish.length;
