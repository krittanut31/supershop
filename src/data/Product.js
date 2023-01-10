const Products = [
  { name: "All Products", title: "All Products", path: "all" },
  { name: "Oral Care", title: "Oral Care", path: "oral-care" },
  { name: "Personal Care", title: "Personal Care", path: "personal-care" },
  { name: "Gift Sets", title: "Gift Sets", path: "gift-sets" },
  { name: "Bundles", title: "Bundles", path: "bundles" },
  {
    name: "Community Favorites",
    title: "Community Favorites",
    path: "favorites",
  },
];

const oralcare = [
  {
    name: "Toothpaste",
    price: "$32",
    type: "Fresh Mint",
    type2: "Mint Charcoal",
    type3: "Berry Twist",
    reviews: "19,458",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/22.04.21---Mint-Fluoride---Cart-Image.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Whitening",
    price: "$20",
    type: "Teeth Whitening Kit",
    reviews: "309",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/5_21.05.26---whitening-1--Simple-product-images0858-__May_2021_Untitled-Recipe.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Mouthwash Bits",
    price: "$20",
    type: "Fresh Mint",
    reviews: "729",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/22081_Mouthwash_Cart.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Bamboo Toothbrush",
    price: "$12",
    type: "Toothbrush 2-Pack",
    reviews: "1,467",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/21.05.27---brush-1.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Dental Floss",
    price: "$12",
    type: "Flass",
    reviews: "506",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/21.05.27---floss-2-pack.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Toothpaste Bits",
    price: "$12",
    type: "Fresh Mint",
    reviews: "19,458",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/21.05.27---Mint-Bottle-smaller.jpg?width=750&height=975&crop=center&quality=50",
  },
];

const personalcare = [
  {
    name: "Deodorant",
    price: "$32",
    type: "Neroli",
    type2: "Rose Vert",
    type3: "Santal",
    type4: "Fragrance-Free",
    reviews: "464",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Deo_Products_Florals_0002_Neroli.jpg",
  },
  {
    name: "Body Balm",
    price: "$28",
    type: "Solid Moisturizer",
    reviews: "23",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/22.03.10---Body-Balm---MC_Bite_BodyBalm40229.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Carbon Capture Cleanser",
    price: "$12",
    type: "Body Bar",
    reviews: "5",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/products/Bite_June_19_LO.jpg?width=250&height=250&crop=center&width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Soap Tray",
    price: "$14",
    type: "",
    reviews: "309",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/products/Bite_June_20_LO.jpg?width=250&height=250&crop=center&width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Soap Pouch",
    price: "$6",
    type: "",
    reviews: "309",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/products/Bite_June_21_LO.jpg?width=250&height=250&crop=center&width=750&height=975&crop=center&quality=50",
  },
];

const bundles = [
  {
    name: "Daily Habits Kit",
    price: "$62",
    type: "5-piece Oral Care Kit",
    reviews: "21,739",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/21.05.26---Daily-Habits---smaller-8bit.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "The Duo",
    price: "$20",
    type: "Toothpaste Bits",
    reviews: "19,458",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/21.05.27---The-Duo-smaller-1.jpg?width=750&height=975&crop=center&quality=50",
  },
  {
    name: "The Starter Kit",
    price: "$40",
    type: "Gift Set",
    reviews: "13,445",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Starter-Kit_Carousel_2_2400x1920_f666b22d-9dba-4ca3-a8de-f35e975d310e.jpg?v=1667410140",
  },
];

const giftsets = [
  {
    name: "Best Sellers",
    price: "$70",
    type: "Gift Set",
    reviews: "",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Best-Sellers_Carousel_2_2400x1920_5add63b8-51eb-461c-9ab5-369523fad8cf.jpg?v=1667410132",
  },
  {
    name: "Plastic-Free Routine",
    price: "$65",
    type: "Gift Set",
    reviews: "1",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Plastic-Free-Routine_Cart_700x700_5539d48a-1f4e-4032-b1f4-0d9559011258.jpg?v=1667410069&width=750&height=975&crop=center&quality=50",
  },
  {
    name: "The Starter Kit",
    price: "$40",
    type: "Gift Set",
    reviews: "12,445",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Starter-Kit_Carousel_2_2400x1920_f666b22d-9dba-4ca3-a8de-f35e975d310e.jpg?v=1667410140",
  },
  {
    name: "The Brightening Kit",
    price: "$40",
    type: "Gift Set",
    reviews: "12,547",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Stocking-Stuffer_Carousel_1_2400x1920_cf7b2c88-9176-498d-b9eb-85f9675d7820.jpg?v=1667410128",
  },
  {
    name: "Body Bundle",
    price: "$70",
    type: "Gift Set",
    reviews: "",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/files/Holiday_Body-Bundle_Cart_700x700_66e3bd1e-55de-4658-8d52-284fc3bdb7fd.jpg?v=1667410066&width=750&height=975&crop=center&quality=50",
  },
  {
    name: "Gift Bite",
    price: "$25",
    type: "Digital Gift Card",
    reviews: "",
    bg: "https://cdn.shopify.com/s/files/1/1864/2187/products/230104_Bite_Gift_Card_Mock_Blue.jpg?v=1673049477&width=750&height=975&crop=center&quality=50",
  },
];

const favorites = [
  { name: "CL1", price: "350" },
  { name: "CL2", price: "250" },
  { name: "CL3", price: "300" },
  { name: "CL4", price: "450" },
];

export { Products, oralcare, personalcare, giftsets, bundles, favorites };
