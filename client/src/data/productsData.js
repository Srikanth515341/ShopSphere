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
    { category: 'Vegetables', name: 'Potato 500g', image: 'potato.png', discountPrice: 35, originalPrice: 40, details: ['Fresh and organic', 'Rich in carbohydrates', 'Ideal for curries and fries'] },
    { category: 'Vegetables', name: 'Tomato 1 kg', image: 'tomato.png', discountPrice: 28, originalPrice: 30, details: ['Juicy and ripe', 'Rich in Vitamin C', 'Perfect for salads and cooking'] },
    { category: 'Vegetables', name: 'Carrot 500g', image: 'carrot.png', discountPrice: 44, originalPrice: 50, details: ['Crunchy and sweet', 'Good for eyesight', 'Ideal for soups and salads'] },
    { category: 'Vegetables', name: 'Spinach 500g', image: 'spinach.png', discountPrice: 15, originalPrice: 18, details: ['Fresh and leafy', 'High in iron', 'Great for smoothies and curries'] },
    { category: 'Vegetables', name: 'Onion 500g', image: 'onion.png', discountPrice: 45, originalPrice: 50, details: ['Strong flavor', 'Essential kitchen staple', 'Used in curries and stir-fries'] },
  ],
  freshfruits: [
    { category: 'Fruits', name: 'Apple 1 kg', image: 'apple.png', discountPrice: 90, originalPrice: 100, details: ['Crisp and juicy', 'Loaded with fiber', 'Perfect for snacking'] },
    { category: 'Fruits', name: 'Orange 1 kg', image: 'orange.png', discountPrice: 75, originalPrice: 80, details: ['Rich in Vitamin C', 'Boosts immunity', 'Tart and sweet flavor'] },
    { category: 'Fruits', name: 'Banana 1 kg', image: 'banana.png', discountPrice: 45, originalPrice: 50, details: ['High in potassium', 'Great energy snack', 'Perfect for smoothies'] },
    { category: 'Fruits', name: 'Mango 1 kg', image: 'mango.png', discountPrice: 140, originalPrice: 150, details: ['King of fruits', 'Sweet and aromatic', 'Seasonal delight'] },
    { category: 'Fruits', name: 'Grapes 500g', image: 'grapes.png', discountPrice: 65, originalPrice: 70, details: ['Juicy and seedless', 'Rich in antioxidants', 'Snack or juice'] },
  ],
  colddrinks: [
    { category: 'Drinks', name: 'Coca-Cola 1.5L', image: 'cocacola.png', discountPrice: 75, originalPrice: 80, details: ['Classic cola flavor', 'Chilled refreshment', 'Perfect for parties'] },
    { category: 'Drinks', name: 'Sprite 1.5L', image: 'sprite.png', discountPrice: 60, originalPrice: 75, details: ['Lemon-lime taste', 'No caffeine', 'Crisp and clean'] },
    { category: 'Drinks', name: '7 Up 1.5L', image: 'sevenup.png', discountPrice: 70, originalPrice: 76, details: ['Clear and fizzy', 'Sweet citrus blend', 'Refreshing drink'] },
    { category: 'Drinks', name: 'Fanta 1.5L', image: 'fanta.png', discountPrice: 65, originalPrice: 70, details: ['Bold orange flavor', 'Tangy and sweet', 'Great with snacks'] },
  ],
  instantfood: [
    { category: 'Instant', name: 'Maggi Noodles 280g', image: 'maggi.png', discountPrice: 50, originalPrice: 55, details: ['Quick and easy', 'Kids’ favorite', 'Perfect evening snack'] },
    { category: 'Instant', name: 'Knorr Cup Soup 70g', image: 'knorr.png', discountPrice: 30, originalPrice: 35, details: ['Ready in minutes', 'Rich in taste', 'Comfort food'] },
  ],
  dairyproducts: [
    { category: 'Dairy', name: 'Amul Milk 1L', image: 'milk.png', discountPrice: 55, originalPrice: 60, details: ['Fresh dairy milk', 'Source of calcium', 'Great for tea and coffee'] },
    { category: 'Dairy', name: 'Paneer 200g', image: 'paneer.png', discountPrice: 85, originalPrice: 90, details: ['Soft and fresh', 'Rich in protein', 'Perfect for curries'] },
    { category: 'Dairy', name: 'Eggs 12 pcs', image: 'eggs.png', discountPrice: 85, originalPrice: 90, details: ['Farm fresh eggs', 'Rich in protein', 'Ideal for breakfast'] },
    { category: 'Dairy', name: 'Cheese 200g', image: 'cheese.png', discountPrice: 130, originalPrice: 140, details: ['Creamy and tasty', 'Melts well', 'Great for pizzas and sandwiches'] },
  ],
  bakerybreads: [
    { category: 'Bakery', name: 'Brown Bread 400g', image: 'bread.png', discountPrice: 35, originalPrice: 40, details: ['Healthy whole wheat', 'Soft and fresh', 'Perfect for breakfast'] },
    { category: 'Bakery', name: 'Butter Croissant 100g', image: 'croissant.png', discountPrice: 45, originalPrice: 50, details: ['Flaky and buttery', 'Freshly baked', 'Perfect snack'] },
  ],
  grainscereals: [
    { category: 'Grains', name: 'Basmati Rice 5kg', image: 'basmati.png', discountPrice: 520, originalPrice: 550, details: ['Long grain rice', 'Aromatic', 'Great for biryani'] },
    { category: 'Grains', name: 'Wheat Flour 5kg', image: 'wheat.png', discountPrice: 230, originalPrice: 250, details: ['Whole wheat', 'High in fiber', 'Used for roti and chapati'] },
    { category: 'Grains', name: 'Organic Quinoa 500g', image: 'quinoa.png', discountPrice: 420, originalPrice: 450, details: ['Superfood', 'Gluten-free', 'Rich in protein'] },
    { category: 'Grains', name: 'Brown Rice 1kg', image: 'brownrice.png', discountPrice: 110, originalPrice: 120, details: ['Unpolished rice', 'High in fiber', 'Healthy choice'] },
    { category: 'Grains', name: 'Barley 1kg', image: 'barley.png', discountPrice: 140, originalPrice: 150, details: ['Whole grain', 'Good for digestion', 'Rich in nutrients'] },
  ],
  clothingfashion: [
    { category: 'Clothing', name: 'Men T-Shirt', image: 'men_tshirt.png', discountPrice: 399, originalPrice: 499, details: ['100% cotton', 'Breathable fabric', 'Trendy design'] },
    { category: 'Clothing', name: 'Women Dress', image: 'women_dress.png', discountPrice: 699, originalPrice: 899, details: ['Elegant and stylish', 'Comfortable fit', 'Perfect for parties'] },
    { category: 'Clothing', name: 'Jacket', image: 'jacket.png', discountPrice: 999, originalPrice: 1199, details: ['Warm and cozy', 'Zipper front', 'Winter essential'] },
    { category: 'Clothing', name: 'Jeans', image: 'jeans.png', discountPrice: 799, originalPrice: 999, details: ['Slim fit', 'Stretchable denim', 'Classic style'] },
    { category: 'Clothing', name: 'Kurti', image: 'kurti.png', discountPrice: 499, originalPrice: 699, details: ['Traditional wear', 'Comfortable cotton', 'Stylish prints'] },
  ],
  toysaccessories: [
    { category: 'Toys', name: 'Barbie Doll', image: 'barbie.png', discountPrice: 799, originalPrice: 899, details: ['Beautiful doll', 'Includes accessories', 'Kids favorite'] },
    { category: 'Toys', name: 'Teddy Bear', image: 'teddy.png', discountPrice: 499, originalPrice: 599, details: ['Soft and cuddly', 'Cute gift item', 'Safe for kids'] },
    { category: 'Toys', name: 'Toy Car', image: 'car_toy.png', discountPrice: 299, originalPrice: 399, details: ['Durable wheels', 'Bright colors', 'Pull back action'] },
    { category: 'Toys', name: 'Puzzle Box', image: 'puzzle.png', discountPrice: 199, originalPrice: 249, details: ['Educational toy', 'Improves thinking', 'Colorful pieces'] },
    { category: 'Toys', name: 'Action Figure', image: 'figure.png', discountPrice: 349, originalPrice: 449, details: ['Movable joints', 'Collector edition', 'High quality'] },
  ],
  electronics: [
    { category: 'Electronics', name: 'LED TV', image: 'tv.png', discountPrice: 25999, originalPrice: 29999, details: ['Full HD', 'Smart TV', 'Wide viewing angle'] },
    { category: 'Electronics', name: 'Laptop', image: 'laptop.png', discountPrice: 45999, originalPrice: 49999, details: ['8GB RAM', '512GB SSD', 'Intel i5 processor'] },
    { category: 'Electronics', name: 'Monitor', image: 'monitor.png', discountPrice: 8999, originalPrice: 10999, details: ['24-inch screen', 'Eye care mode', 'HDMI and VGA'] },
    { category: 'Electronics', name: 'Headphones', image: 'headphones.png', discountPrice: 1499, originalPrice: 1999, details: ['Noise cancellation', 'Bluetooth connectivity', 'Deep bass'] },
    { category: 'Electronics', name: 'Bluetooth Speaker', image: 'speaker.png', discountPrice: 1299, originalPrice: 1599, details: ['Portable design', 'Rechargeable battery', 'Clear sound'] },
  ],
  mobiles: [
    { category: 'Mobiles', name: 'iPhone 13', image: 'iphone.png', discountPrice: 59999, originalPrice: 69999, details: ['6.1-inch display', '128GB storage', 'A15 Bionic chip'] },
    { category: 'Mobiles', name: 'Samsung Galaxy', image: 'samsung.png', discountPrice: 44999, originalPrice: 49999, details: ['AMOLED display', '5G support', 'Triple camera'] },
    { category: 'Mobiles', name: 'Redmi Note 12', image: 'redmi.png', discountPrice: 14999, originalPrice: 16999, details: ['Snapdragon processor', '50MP camera', 'Fast charging'] },
    { category: 'Mobiles', name: 'Realme 10 Pro', image: 'realme.png', discountPrice: 16999, originalPrice: 18999, details: ['6.72-inch display', '108MP camera', '5000mAh battery'] },
    { category: 'Mobiles', name: 'OnePlus Nord', image: 'oneplus.png', discountPrice: 29999, originalPrice: 32999, details: ['Fluid AMOLED', '8GB RAM', '65W fast charge'] },
  ],
  kitchenappliances: [
    { category: 'Appliances', name: 'Mixer Grinder', image: 'mixer.png', discountPrice: 2999, originalPrice: 3499, details: ['750W motor', '3 jars', 'Durable body'] },
    { category: 'Appliances', name: 'Oven Toaster', image: 'oven.png', discountPrice: 2499, originalPrice: 2999, details: ['16L capacity', 'Adjustable temperature', 'Bake, grill, toast'] },
    { category: 'Appliances', name: 'Cooktop Stove', image: 'cooktop.png', discountPrice: 3599, originalPrice: 3999, details: ['Gas efficient', 'Toughened glass', '2 burners'] },
    { category: 'Appliances', name: 'Electric Kettle', image: 'kettle.png', discountPrice: 999, originalPrice: 1299, details: ['Auto shut-off', '1.5L capacity', 'Quick boiling'] },
    { category: 'Appliances', name: 'Pop-Up Toaster', image: 'toaster.png', discountPrice: 1499, originalPrice: 1699, details: ['2 slice slots', 'Adjustable browning', 'Removable crumb tray'] },
  ],
};
