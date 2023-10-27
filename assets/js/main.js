// Variables del DOM

// HEADER
//Buscador
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

// HERO

const heroImg = document.querySelector(".hero__img");

// PRODUCTOS

const productSection = document.querySelector(".products__items");

// Filtro
const filterForm = document.querySelector(".filter__form");
const priceMinFilter = document.getElementById("priceMin");
const priceMaxFilter = document.getElementById("priceMax");
const emptyMsg = document.querySelector(".empty-msg");

// CONTACTO

const contactForm = document.querySelector(".contact__form");

const nameInput = document.getElementById("name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const textArea = document.getElementById("contact-textarea");

const successMsg = document.querySelector(".success-msg");

// CARRITO

const cartBtn = document.querySelector(".cart-btn");
const cartField = document.querySelector(".cart__field");
const overlay = document.querySelector(".overlay");
const cartProductsField = document.querySelector(".cart__items-container");
const emptyCartMsg = document.querySelector(".cart-empty-msg");
const cartTotalPrice = document.querySelector(".cart__total-span");
const cartTotalQuantityBubble = document.querySelector(".cart-bubble");
const emptyCartButton = document.querySelector(".cart__empty-btn");
const buyBtn = document.querySelector(".cart__buy-btn");

// NAVBAR PARA CELULAR
const mobileNavbarBtn = document.querySelector(".menu-navbar-btn");
const mobileNavbar = document.querySelector(".mobile-navbar");
const searchFormMobile = document.querySelector(".mobile-search-form");
const searchInputMobile = document.querySelector(".mobile-search-input");

// Funciones

//! ========================== HEADER ==========================

const searchProducts = (input) => {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(input.value.toLowerCase());
  });
};

const search = (e) => {
  e.preventDefault();
  const searchedProducts = searchProducts(searchInput);
  renderProducts(searchedProducts);
  checkProductSection(searchedProducts);
  window.location.href = "#products";
};
const searchMobile = (e) => {
  e.preventDefault();
  const searchedProducts = searchProducts(searchInputMobile);
  renderProducts(searchedProducts);
  checkProductSection(searchedProducts);
  window.location.href = "#products";
};

//! ========================== HERO ==========================

// Función para obtener una imagen al azar
const randomImg = (imgs) => {
  const num = Math.floor(Math.random() * imgs.length);
  return imgs[num];
};

// Funcion para renderizar una imagen en el hero

const renderImageHero = () => {
  heroImg.src = randomImg(heroImgs);
};

//! ========================== PRODUCTOS ==========================

// Función para renderizar los productos en el DOM
const renderProducts = (products) => {
  productSection.innerHTML = createProducts(products).join("");
};

// Función para crear los productos
const createProducts = (products) => {
  return products.map((product) => {
    const { id, name, price, category, img } = product;
    return `          
        <div class="product">
            <img src="${img}" class="product__img" />
            <div class="product__info">
                <div class="product__text">
                    <h3>${name}</h3>
                    <h4>$${(price / 1000).toFixed(3)}</h4>
                </div>
                <button class="add-cart-btn" data-id="${id}"
                data-name="${name}"
                data-price="${price}"
                data-img="${img}">Añadir al carrito</button>
            </div>
        </div>`;
  });
};

// FILTROS

const isProductsSectionEmpty = (products) => {
  return !products.length;
};

const showEmptyFilterMsg = (msg) => {
  emptyMsg.innerText = msg;
};

const filterPrice = (product) => {
  let priceMin = priceMinFilter.value;
  let priceMax = priceMaxFilter.value;
  console.log(priceMin, priceMax);
  if (priceMin == "" || priceMin < 0) {
    priceMin = 0;
  }
  if (priceMax == "" || priceMax < 0) {
    priceMax = 9999999;
  }
  return product.price >= priceMin && product.price <= priceMax;
};

const filterCategory = (button) => {
  return products.filter((product) => {
    return product.category === button.dataset.id && filterPrice(product);
  });
};

const filterAllProducts = (products) => {
  return products.filter((product) => {
    return filterPrice(product);
  });
};

const checkProductSection = (filteredProducts) => {
  if (isProductsSectionEmpty(filteredProducts)) {
    showEmptyFilterMsg("No hay productos que coincidan con la búsqueda");
  } else {
    showEmptyFilterMsg("");
  }
};

const filter = (e) => {
  const id = e.target.dataset.id;
  if (id != undefined && id != "all") {
    const filteredProducts = filterCategory(e.target);
    renderProducts(filteredProducts);
    checkProductSection(filteredProducts);
  } else if (id != undefined && id == "all") {
    const filteredProducts = filterAllProducts(products);
    renderProducts(filteredProducts);
    checkProductSection(filteredProducts);
  }
};

//! ========================== CONTACTO ==========================

// Funcion para verificar si un input está vacío
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Función para verificar si la longitud de un input está entre 2 valores
const isBetweenCharacters = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

// Funcion para mostrar un mensaje de error

const showError = (input, msg) => {
  const formField = input.parentElement;
  const errorMsg = formField.querySelector("small");
  input.classList.remove("success");
  input.classList.add("error");
  errorMsg.innerText = msg;
};

//Funcion para mostrar un mensaje de éxito
const showSuccess = (input) => {
  const formField = input.parentElement;
  const errorMsg = formField.querySelector("small");
  input.classList.remove("error");
  input.classList.add("success");
  errorMsg.innerText = "";
};

// Verificar un input

const verifyInput = (input) => {
  let valid = false;
  const MIN_CHARACTERS = 3;
  const MAX_CHARACTERS = 25;
  if (isEmpty(input)) {
    showError(input, "El campo no puede estar vacío");
    return;
  }
  if (!isBetweenCharacters(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    showError(
      input,
      `El campo debe tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return;
  }
  showSuccess(input);
  valid = true;
  return valid;
};

// Nombre y Apellido

const checkName = (e) => {
  verifyInput(e.target);
};

// Email
// Función para verificar si el email tiene ciertos caracteres
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

const verifyEmail = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El campo no puede estar vacío");
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, "El email no es válido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

const checkEmail = (e) => {
  verifyEmail(e.target);
};

// Teléfono

// Funcion para verificar el teléfono
const isPhoneValid = (input) => {
  const re = /^[0-9]{10}$/;

  return re.test(input.value.trim());
};

const verifyPhone = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El campo es obligario");
    return;
  }

  if (!isPhoneValid(input)) {
    showError(input, "El telefono no es válido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

const checkPhone = (e) => {
  verifyPhone(e.target);
};

// Textarea
const verifyTextArea = (input) => {
  valid = false;

  const MIN_CHARACTERS = 3;
  const MAX_CHARACTERS = 200;
  if (isEmpty(input)) {
    showError(input, "El campo es obligatorio");
    return;
  }
  if (!isBetweenCharacters(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    showError(
      input,
      `El campo debe tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

const checkTextArea = (e) => {
  verifyTextArea(e.target);
};

// Submit form

const showSuccessMessage = (msg) => {
  successMsg.innerText = msg;
  if (!successMsg.classList.contains("up")) {
    successMsg.classList.remove("down");
    successMsg.classList.add("up");
    setTimeout(() => {
      successMsg.classList.remove("up");
      successMsg.classList.add("down");
    }, 2000);
  }
};

const resetForm = () => {
  nameInput.classList.remove("success");
  nameInput.classList.remove("error");
  lastNameInput.classList.remove("success");
  lastNameInput.classList.remove("error");
  emailInput.classList.remove("success");
  emailInput.classList.remove("error");
  phoneInput.classList.remove("success");
  phoneInput.classList.remove("error");
  textArea.classList.remove("success");
  textArea.classList.remove("error");
  contactForm.reset();
};

const checkForm = (e) => {
  e.preventDefault();

  let isNameValid = verifyInput(nameInput);
  let isLastNamevalid = verifyInput(lastNameInput);
  let isEmailValid = verifyEmail(emailInput);
  let isPhoneValid = verifyPhone(phoneInput);
  let isTextareaValid = verifyTextArea(textArea);

  let isValidForm =
    isNameValid &&
    isLastNamevalid &&
    isEmailValid &&
    isPhoneValid &&
    isTextareaValid;

  if (isValidForm) {
    showSuccessMessage("Se ha enviado el formulario");
    resetForm();
  }
};

//! ========================== CARRITO ==========================

// Función para abrir el carrito

const openCart = () => {
  overlay.classList.add("overlay-active");
  cartField.classList.add("cart-active");
};

const quitCart = () => {
  if (cartField.classList.contains("cart-active")) {
    overlay.classList.remove("overlay-active");
    cartField.classList.remove("cart-active");
  }
};

const toggleCart = () => {
  console.log(cartField.classList);
  if (!cartField.classList.contains("cart-active")) {
    openCart();
    if (mobileNavbar.classList.contains("mobile-navbar-active")) {
      closeMobileNavbar();
    }
  } else {
    quitCart();
  }
};

// Funcion para saber si un producto ya existe en el carrito
const isExistingCartProduct = (product) => {
  return cart.find((item) => {
    return item.id === product.id;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

// Funcion para agregar una unidad al producto
const addUnitToCartProduct = (product) => {
  cart.map((cartProduct) => {
    if (cartProduct.id == product.id) {
      return { ...cartProduct, quantity: cartProduct.quantity++ };
    } else {
      return cartProduct;
    }
  });
};

// Función para renderizar el carrito

const renderCart = () => {
  cartProductsField.innerHTML = cart
    .map((item) => {
      const { id, name, price, category, img, quantity } = item;
      console.log(price);
      return `        
    <div class="cart__item">
      <img src="${img}" class="cart__img" />
      <div class="cart__info">
        <h4 class="cart-item__name">${name}</h4>
        <p class="cart-item__price">$${(price / 1000).toFixed(3)}</p>
      </div>
      <div class="cart__quantity-handler">
        <button class="quantity-handler__minus" data-id="${id}">-</button>
        <p class="quantity-handler__quantity" >${quantity}</p>
        <button class="quantity-handler__plus" data-id="${id}">+</button>
      </div>
    </div>`;
    })
    .join("");
  toggleEmptyCartMsg();
  renderTotalPrice();
  renderTotalQuantity();
  if (isCartEmpty()) {
    emptyCartButton.classList.add("button-disabled");
    buyBtn.classList.add("button-disabled");
  } else {
    emptyCartButton.classList.remove("button-disabled");
    buyBtn.classList.remove("button-disabled");
  }
  saveCart();
};

// Funcion para cuando se haga click en el boton de "añadir al carrito"
const clickAddToCart = (e) => {
  if (!e.target.classList.contains("add-cart-btn")) {
    return;
  }
  const product = e.target.dataset;

  if (isExistingCartProduct(product)) {
    addUnitToCartProduct(product);
    showSuccessMessage("Se ha añadido con éxito");
  } else {
    createCartProduct(product);
    showSuccessMessage("Se ha añadido con éxito");
  }
  renderCart();
};

// Funcion para chequear si el carrito está vacío
const isCartEmpty = () => {
  return !cart.length;
};

// Función para alternar el mensaje de "carrito vacío"

const toggleEmptyCartMsg = () => {
  if (isCartEmpty()) {
    emptyCartMsg.style.display = "block";
  } else {
    emptyCartMsg.style.display = "none";
  }
};

// Funcion para aumentar la cantidad de un producto
const addQuantity = (button) => {
  const product = cart.find((item) => {
    return item.id == button.dataset.id;
  });
  product.quantity++;
};

// Funcion para disminuir la cantidad de un producto
const minusQuantity = (button) => {
  const product = cart.find((item) => {
    return item.id == button.dataset.id;
  });
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    cart = cart.filter((item) => {
      return item.id != product.id;
    });
  }
};

// Funcion para aumentar o disminuir la cantidad de productos
const handleQuantity = (e) => {
  if (e.target.classList.contains("quantity-handler__plus")) {
    addQuantity(e.target);
    renderCart();
  }
  if (e.target.classList.contains("quantity-handler__minus")) {
    minusQuantity(e.target);
    renderCart();
  }
};

// Función para obtener el precio total de los productos
const getTotalPrice = () => {
  return cart.reduce((acc, cur) => {
    return acc + Number(cur.price) * Number(cur.quantity);
  }, 0);
};

// Función para renderizar el precio total de los productos
const renderTotalPrice = () => {
  cartTotalPrice.innerHTML = `$${getTotalPrice()}`;
};

// Función para obtener la cantidad total de los productos

const getTotalQuantity = () => {
  return cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};

// Función para renderizar la cantidad total de productos

const renderTotalQuantity = () => {
  cartTotalQuantityBubble.innerText = getTotalQuantity();
};

// Funcion para vaciar el carrito
const emptyCart = () => {
  if (!isCartEmpty()) {
    cart = [];
    renderCart();
    showSuccessMessage("Se ha vaciado el carrito");
  }
};

// Función para comprar los productos del carrito

const buyCartProducts = () => {
  if (!isCartEmpty()) {
    if (confirm("¿Quieres comprar estos productos?")) {
      buyProducts();
    }
  }
};

const buyProducts = () => {
  cart = [];
  renderCart();
  showSuccessMessage("Productos comprados con éxito");
};

// Función para guardar datos del cart en el LocalStorage

const saveToLocalStorage = (itemToSave, nameInLocalStorage) => {
  localStorage.setItem(nameInLocalStorage, JSON.stringify(itemToSave));
};

// Función para obtener datos del LocalStorage
const getDataFromLocalStorage = (nameInLocalStorage) => {
  return localStorage.getItem(nameInLocalStorage);
};

// Función para guardar el carrito en el LocalStorage
const saveCart = () => {
  saveToLocalStorage(cart, "cart");
};

// Funcion para obtener el carrito del LocalStorage
const getCart = () => {
  cart = JSON.parse(getDataFromLocalStorage("cart")) || [];
  renderCart();
};

//! ========================== NAVBAR PARA CELULARES ==========================

const openMobileNavbar = () => {
  mobileNavbar.classList.add("mobile-navbar-active");
};

const closeMobileNavbar = () => {
  mobileNavbar.classList.remove("mobile-navbar-active");
};

const toggleMobileNavbar = () => {
  if (mobileNavbar.classList.contains("mobile-navbar-active")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
    if (cartField.classList.contains("cart-active")) {
      quitCart();
    }
  }
};

// Función Inicializadora
const init = () => {
  document.addEventListener("DOMContentLoaded", renderProducts(products));
  document.addEventListener("DOMContentLoaded", toggleEmptyCartMsg);
  document.addEventListener("DOMContentLoaded", renderTotalPrice);
  document.addEventListener("DOMContentLoaded", renderTotalQuantity);
  document.addEventListener("DOMContentLoaded", getCart);
  window.addEventListener("scroll", quitCart);
  window.addEventListener("scroll", closeMobileNavbar);
  searchForm.addEventListener("submit", search);
  cartBtn.addEventListener("click", toggleCart);
  overlay.addEventListener("click", quitCart);
  productSection.addEventListener("click", clickAddToCart);
  cartProductsField.addEventListener("click", handleQuantity);
  emptyCartButton.addEventListener("click", emptyCart);
  buyBtn.addEventListener("click", buyCartProducts);
  filterForm.addEventListener("click", filter);
  filterForm.addEventListener("submit", (e) => e.preventDefault());
  nameInput.addEventListener("input", checkName);
  lastNameInput.addEventListener("input", checkName);
  emailInput.addEventListener("input", checkEmail);
  phoneInput.addEventListener("input", checkPhone);
  textArea.addEventListener("input", checkTextArea);
  contactForm.addEventListener("submit", checkForm);
  mobileNavbarBtn.addEventListener("click", toggleMobileNavbar);
  searchFormMobile.addEventListener("submit", searchMobile);
};
init();

// Llama a la función para renderizar imagenes aleatorias en el hero
renderImageHero();
