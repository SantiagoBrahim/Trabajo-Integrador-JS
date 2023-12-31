// Productos
const products = [
  {
    id: 1,
    name: "Notebook Gamer Thunderobot",
    price: 719999,
    category: "pc",
    img: "assets/imgs/pc1.jpg",
  },
  {
    id: 2,
    name: "Pc Gamer Armada Amd",
    price: 564686,
    category: "pc",
    img: "assets/imgs/pc2.jpg",
  },
  {
    id: 3,
    name: "Procesador AMD RYZEN 3 3200G 4.0GHz",
    price: 93400,
    category: "cpu",
    img: "assets/imgs/cpu1.jpg",
  },
  {
    id: 4,
    name: "Procesador Intel Core i5 10400F 4.3GHz",
    price: 165350,
    category: "cpu",
    img: "assets/imgs/cpu2.jpg",
  },
  {
    id: 5,
    name: "Mother Gigabyte A520M-K V2 DDR4 AM4",
    price: 79450,
    category: "mother",
    img: "assets/imgs/mother1.jpg",
  },
  {
    id: 6,
    name: "Mother ASUS ROG STRIX B760-A GAMING WIFI LGA1700 DDR5",
    price: 244560,
    category: "mother",
    img: "assets/imgs/mother2.jpg",
  },
  {
    id: 7,
    name: "Memoria Adata DDR4 16GB (2x8GB) 4133MHz",
    price: 68300,
    category: "ram",
    img: "assets/imgs/ram1.jpg",
  },
  {
    id: 8,
    name: "Memoria Corsair DDR4 8GB 3000MHz Vengeance",
    price: 26550,
    category: "ram",
    img: "assets/imgs/ram2.jpg",
  },
  {
    id: 9,
    name: "Disco Rígido Seagate 1TB Barracuda",
    price: 45650,
    category: "almacenamiento",
    img: "assets/imgs/almacenamiento1.jpg",
  },
  {
    id: 10,
    name: "Disco Sólido SSD M.2 ADATA 1TB",
    price: 76750,
    category: "almacenamiento",
    img: "assets/imgs/almacenamiento2.jpg",
  },
  {
    id: 11,
    name: "Cooler Fan ID-Cooling",
    price: 1700,
    category: "refrigeracion",
    img: "assets/imgs/refrigeracion1.jpg",
  },
  {
    id: 12,
    name: "Cooler CPU Redragon Effect X 240 RGB Water Cooling",
    price: 59900,
    category: "refrigeracion",
    img: "assets/imgs/refrigeracion2.jpg",
  },
  {
    id: 13,
    name: "Gabinete Deepcool MATREXX 70",
    price: 94100,
    category: "gabinete",
    img: "assets/imgs/gabinete1.jpg",
  },
  {
    id: 14,
    name: "Gabinete Lian Li O11 Dynamic XL ROG Certify White ARGB",
    price: 215400,
    category: "gabinete",
    img: "assets/imgs/gabinete2.jpg",
  },
  {
    id: 15,
    name: "Fuente Be Quiet 1000W 80 Plus Gold",
    price: 107600,
    category: "fuente",
    img: "assets/imgs/fuente1.jpg",
  },
  {
    id: 16,
    name: "Fuente ASUS ROG STRIX 1000W 80 Plus Gold",
    price: 124900,
    category: "fuente",
    img: "assets/imgs/fuente2.jpg",
  },
  {
    id: 17,
    name: "Monitor LG LED 19'' 19M38A-B VGA",
    price: 61900,
    category: "monitor",
    img: "assets/imgs/monitor1.jpg",
  },
  {
    id: 18,
    name: 'Monitor Samsung 27" S70A 4K UHD IPS',
    price: 319700,
    category: "monitor",
    img: "assets/imgs/monitor2.jpg",
  },
  {
    id: 19,
    name: "Auriculares HyperX Cloud Flight Black Wireless",
    price: 82000,
    category: "periferico",
    img: "assets/imgs/periferico1.jpg",
  },
  {
    id: 20,
    name: "Teclado Gaming Retroiluminado Wesdar MK4 BR",
    price: 3310,
    category: "periferico",
    img: "assets/imgs/periferico2.jpg",
  },
  {
    id: 21,
    name: "Mouse Wesdar Cerberus x4 White Rainbow 2400DPI",
    price: 2100,
    category: "periferico",
    img: "assets/imgs/periferico3.jpg",
  },
  {
    id: 22,
    name: "Webcam HDC H80S Full HD 1080p USB",
    price: 16450,
    category: "periferico",
    img: "assets/imgs/periferico4.jpg",
  },
  {
    id: 23,
    name: "Joystick PS4 Sony Dualshock Black Original",
    price: 48799,
    category: "periferico",
    img: "assets/imgs/periferico5.jpg",
  },
  {
    id: 24,
    name: "Mouse Pad Redragon Flick M P030 320x2700mm",
    price: 5050,
    category: "periferico",
    img: "assets/imgs/periferico6.jpg",
  },
  {
    id: 25,
    name: "Parlantes Genius SP-U125 USB Black",
    price: 11450,
    category: "periferico",
    img: "assets/imgs/periferico7.jpg",
  },
  {
    id: 26,
    name: "Microfono Redragon Blazar GM300",
    price: 39550,
    category: "periferico",
    img: "assets/imgs/periferico8.jpg",
  },
  {
    id: 27,
    name: "Silla Gamer Corsair T3 Rush Fabric Gris/Blanco",
    price: 249120,
    category: "silla",
    img: "assets/imgs/silla1.jpg",
  },
  {
    id: 27,
    name: "Silla Gamer HHGears SM-115 Negro y Rojo Hasta 90kg",
    price: 69899,
    category: "silla",
    img: "assets/imgs/silla2.jpg",
  },
  {
    id: 28,
    name: "Samsung Galaxy S21 Fe 5g 128 Gb 6 Ram Blanco",
    price: 372999,
    category: "celular",
    img: "assets/imgs/celular1.webp",
  },
  {
    id: 29,
    name: "Apple iPhone 11 (128 GB) - Blanco",
    price: 899999,
    category: "celular",
    img: "assets/imgs/celular2.webp",
  },
];

// Imagenes que pueden aparecer en el Hero
const heroImgs = [
  "assets/imgs/pc-gamer.webp",
  "assets/imgs/hero_img3.jpg",
  "assets/imgs/hero_img4.webp",
  "assets/imgs/hero_img5.webp",
  "assets/imgs/hero_img6.webp",
  "assets/imgs/hero_img7.webp",
];

// Carrito
let cart = [];
