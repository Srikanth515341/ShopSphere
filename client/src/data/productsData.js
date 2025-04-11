export const foodCategories = [
    { title: 'Organic Veggies', image: 'organic vegitable.png', bgColor: '#fff7d1' },
    { title: 'Fresh Fruits', image: 'fresh fruits.png', bgColor: '#ffe2e6' },
    { title: 'Cold Drinks', image: 'bottles.png', bgColor: '#f1ffee' },
    { title: 'Instant Food', image: 'maggi.png', bgColor: '#defefb' },
    { title: 'Dairy Products', image: 'dairy.png', bgColor: '#ffe9d8' },
    { title: 'Bakery & Breads', image: 'bakery.png', bgColor: '#e5f6ff' },
    { title: 'Grains & Cereals', image: 'grain.png', bgColor: '#ede1ff' },
  ];
  
  export const fashionCategories = [
    { title: 'Clothing & Fashion', image: 'fashion.jpeg', bgColor: '#fce1ff' },
    { title: 'Toys & Accessories', image: 'toys.jpeg', bgColor: '#fff0d9' },
  ];
  
  export const electronicsCategories = [
    { title: 'Electronics', image: 'electronics.jpeg', bgColor: '#ffe5e5' },
    { title: 'Mobiles', image: 'mobiles.jpeg', bgColor: '#e2ffe8' },
    { title: 'Kitchen Appliances', image: 'kitchen.jpeg', bgColor: '#e6f0ff' },
  ];
  
  export const products = {
    organicveggies: [
      { category: 'Vegetables', name: 'Potato 500g', image: 'potato.png', discountPrice: 35, originalPrice: 40 },
      { category: 'Vegetables', name: 'Tomato 1 kg', image: 'tomato.png', discountPrice: 28, originalPrice: 30 },
      { category: 'Vegetables', name: 'Carrot 500g', image: 'carrot.png', discountPrice: 44, originalPrice: 50 },
      { category: 'Vegetables', name: 'Spinach 500g', image: 'spinach.png', discountPrice: 15, originalPrice: 18 },
      { category: 'Vegetables', name: 'Onion 500g', image: 'onion.png', discountPrice: 45, originalPrice: 50 },
    ],
    freshfruits: [
      { category: 'Fruits', name: 'Apple 1 kg', image: 'apple.png', discountPrice: 90, originalPrice: 100 },
      { category: 'Fruits', name: 'Orange 1 kg', image: 'orange.png', discountPrice: 75, originalPrice: 80 },
      { category: 'Fruits', name: 'Banana 1 kg', image: 'banana.png', discountPrice: 45, originalPrice: 50 },
      { category: 'Fruits', name: 'Mango 1 kg', image: 'mango.png', discountPrice: 140, originalPrice: 150 },
      { category: 'Fruits', name: 'Grapes 500g', image: 'grapes.png', discountPrice: 65, originalPrice: 70 },
    ],
    colddrinks: [
      { category: 'Drinks', name: 'Coca-Cola 1.5L', image: 'cocacola.png', discountPrice: 75, originalPrice: 80 },
      { category: 'Drinks', name: 'Sprite 1.5L', image: 'sprite.png', discountPrice: 60, originalPrice: 75 },
      { category: 'Drinks', name: '7 Up 1.5L', image: 'sevenup.png', discountPrice: 70, originalPrice: 76 },
      { category: 'Drinks', name: 'Fanta 1.5L', image: 'fanta.png', discountPrice: 65, originalPrice: 70 },
    ],
    instantfood: [
      { category: 'Instant', name: 'Maggi Noodles 280g', image: 'maggi.png', discountPrice: 50, originalPrice: 55 },
      { category: 'Instant', name: 'Knorr Cup Soup 70g', image: 'knorr.png', discountPrice: 30, originalPrice: 35 },
    ],
    dairyproducts: [
      { category: 'Dairy', name: 'Amul Milk 1L', image: 'milk.png', discountPrice: 55, originalPrice: 60 },
      { category: 'Dairy', name: 'Paneer 200g', image: 'paneer.png', discountPrice: 85, originalPrice: 90 },
      { category: 'Dairy', name: 'Eggs 12 pcs', image: 'eggs.png', discountPrice: 85, originalPrice: 90 },
      { category: 'Dairy', name: 'Cheese 200g', image: 'cheese.png', discountPrice: 130, originalPrice: 140 },
    ],
    bakerybreads: [
      { category: 'Bakery', name: 'Brown Bread 400g', image: 'bread.png', discountPrice: 35, originalPrice: 40 },
      { category: 'Bakery', name: 'Butter Croissant 100g', image: 'croissant.png', discountPrice: 45, originalPrice: 50 },
    ],
    grainscereals: [
      { category: 'Grains', name: 'Basmati Rice 5kg', image: 'basmati.png', discountPrice: 520, originalPrice: 550 },
      { category: 'Grains', name: 'Wheat Flour 5kg', image: 'wheat.png', discountPrice: 230, originalPrice: 250 },
      { category: 'Grains', name: 'Organic Quinoa 500g', image: 'quinoa.png', discountPrice: 420, originalPrice: 450 },
      { category: 'Grains', name: 'Brown Rice 1kg', image: 'brownrice.png', discountPrice: 110, originalPrice: 120 },
      { category: 'Grains', name: 'Barley 1kg', image: 'barley.png', discountPrice: 140, originalPrice: 150 },
    ],
    clothingfashion: [
      { category: 'Clothing', name: 'Men T-Shirt', image: 'men_tshirt.png', discountPrice: 399, originalPrice: 499 },
      { category: 'Clothing', name: 'Women Dress', image: 'women_dress.png', discountPrice: 699, originalPrice: 899 },
      { category: 'Clothing', name: 'Jacket', image: 'jacket.png', discountPrice: 999, originalPrice: 1199 },
      { category: 'Clothing', name: 'Jeans', image: 'jeans.png', discountPrice: 799, originalPrice: 999 },
      { category: 'Clothing', name: 'Kurti', image: 'kurti.png', discountPrice: 499, originalPrice: 699 },
    ],
    toysaccessories: [
      { category: 'Toys', name: 'Barbie Doll', image: 'barbie.png', discountPrice: 799, originalPrice: 899 },
      { category: 'Toys', name: 'Teddy Bear', image: 'teddy.png', discountPrice: 499, originalPrice: 599 },
      { category: 'Toys', name: 'Toy Car', image: 'car_toy.png', discountPrice: 299, originalPrice: 399 },
      { category: 'Toys', name: 'Puzzle Box', image: 'puzzle.png', discountPrice: 199, originalPrice: 249 },
      { category: 'Toys', name: 'Action Figure', image: 'figure.png', discountPrice: 349, originalPrice: 449 },
    ],
    electronics: [
      { category: 'Electronics', name: 'LED TV', image: 'tv.png', discountPrice: 25999, originalPrice: 29999 },
      { category: 'Electronics', name: 'Laptop', image: 'laptop.png', discountPrice: 45999, originalPrice: 49999 },
      { category: 'Electronics', name: 'Monitor', image: 'monitor.png', discountPrice: 8999, originalPrice: 10999 },
      { category: 'Electronics', name: 'Headphones', image: 'headphones.png', discountPrice: 1499, originalPrice: 1999 },
      { category: 'Electronics', name: 'Bluetooth Speaker', image: 'speaker.png', discountPrice: 1299, originalPrice: 1599 },
    ],
    mobiles: [
      { category: 'Mobiles', name: 'iPhone 13', image: 'iphone.png', discountPrice: 59999, originalPrice: 69999 },
      { category: 'Mobiles', name: 'Samsung Galaxy', image: 'samsung.png', discountPrice: 44999, originalPrice: 49999 },
      { category: 'Mobiles', name: 'Redmi Note 12', image: 'redmi.png', discountPrice: 14999, originalPrice: 16999 },
      { category: 'Mobiles', name: 'Realme 10 Pro', image: 'realme.png', discountPrice: 16999, originalPrice: 18999 },
      { category: 'Mobiles', name: 'OnePlus Nord', image: 'oneplus.png', discountPrice: 29999, originalPrice: 32999 },
    ],
    kitchenappliances: [
      { category: 'Appliances', name: 'Mixer Grinder', image: 'mixer.png', discountPrice: 2999, originalPrice: 3499 },
      { category: 'Appliances', name: 'Oven Toaster', image: 'oven.png', discountPrice: 2499, originalPrice: 2999 },
      { category: 'Appliances', name: 'Cooktop Stove', image: 'cooktop.png', discountPrice: 3599, originalPrice: 3999 },
      { category: 'Appliances', name: 'Electric Kettle', image: 'kettle.png', discountPrice: 999, originalPrice: 1299 },
      { category: 'Appliances', name: 'Pop-Up Toaster', image: 'toaster.png', discountPrice: 1499, originalPrice: 1699 },
    ],
  };
  