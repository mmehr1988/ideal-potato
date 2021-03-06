const { Product } = require('../models');

const productData = [
  {
    product_name: 'Brown men leather jacket with thick zippers',
    product_price: '304.36',
    product_description: 'Biker leather Jacket • men leather jacket • leather jacket brown • mens jacket • brown leather jacket•men biker jacket•mens leather jacket',
    category_name: 'Clothing & Shoes',
    category_id: 2,
    seller_id: 5,
  },
  {
    product_name: 'Concrete & Wood Console or TV Stand',
    product_price: '2163.70',
    product_description: "Unique and useful Console or TV Stand. This handmade creation will be the master piece of your living room. The handsome color waves of the walnut drastically contrast with the hard and straight line of the concrete box resulting in a zen harmony of shapes.\n\nAs pictured, the table is made of dark gray concrete but can also be done using standard light gray for a more industrial and brutalisme look. This Walnut Wood and Concrete console or TV Stand with hidden drawer pictured is 58'' long but can be build in pretty much any size.\n\nThe drawer is nearly invisible. We replace the handle by a push-pull mechanism and we installed high quality soft close drawer slides.",
    category_name: 'Home & Living',
    category_id: 3,
    seller_id: 5,
  },
  {
    product_name: 'Walnut Nightstand, Bedside Table',
    product_price: '980.00',
    product_description: 'Solid wood, simplistic design, and artisan look - a perfect addition to a bedroom or a living room interior.\n\nNAIM is a petite wood table that can be used as a nightstand in combination with our LUCA king-size bed. It is handcrafted from quality hardwood with a simple touch of art.',
    category_name: 'Home & Living',
    category_id: 3,
    seller_id: 5,
  },
  {
    product_name: "1960's Yonezawa Directional Robot",
    product_price: '1150.00',
    product_description: 'Excellent condition and works.Tin litho bright with little wear.Robots like this guy are excellent investments and a great addition to any space toy collection.Harder to find every year.Battery box clean.C-8.5 Check milestonesinmem for monthly specials.',
    category_name: 'Toys & Entertainment',
    category_id: 4,
    seller_id: 5,
  },
  {
    product_name: 'Large Custom Puppet',
    product_price: '6000.00',
    product_description: 'Now you can have your very own puppet built to look like you! (Or anyone else you choose.) Fabricated with a strict attention to detail in the classic style of the muppets.',
    category_name: 'Toys & Entertainment',
    category_id: 4,
    seller_id: 5,
  },
  {
    product_name: 'Pegasus Antique Copper Metal Chess Set',
    product_price: '524.35',
    product_description: 'The chessboard is completely made of solid wood and hand workmanship.',
    category_name: 'Art & Collectibles',
    category_id: 5,
    seller_id: 5,
  },
  {
    product_name: 'English Platform Rocking Horse',
    product_price: '1800.00',
    product_description: "Shipping: Price does not include shipping and handling. Please contact us before purchase if you'd like to discuss shipping price, or we can work with you on it once the item has been bought if you just can't wait! :)\n\nIs there something you're looking for but can't find in our Etsy store? Don't give up! We have 4 acres of antiques in our North Carolina store, and if it's not there, we'd be more than happy to give our 60 years worth of contacts a call to help you find what you're looking for. Don't be shy!",
    category_name: 'Toys & Entertainment',
    category_id: 4,
    seller_id: 3,
  },
  {
    product_name: 'Olympus Stylus Epic',
    product_price: '695.00',
    product_description: 'This is the Best Point and Shoot camera made by Olympus. Everything works great! This camera has a Razor Sharp - Fast - Fixed Lens, 35mm f/2.8. This is the Later Model with the Panaramic Option. This camera is used but its in excellent condition. The Lens is Clean and clear of any scratches. If you have any questions please feel free to ask.\n\nAlso comes with the original leather case!\n\nAll my camera are tested and functioning Perfectly, unless noted. The camera comes with a strap, but no batteries included. I have a Huge Collection of point and shoot cameras (200+) that I will be listing and selling, If you are looking for something specific, please do not hesitate to ask. thank you.',
    category_name: 'Art & Collectibles',
    category_id: 5,
    seller_id: 2,
  },
  {
    product_name: 'Hitty Mahogany',
    product_price: '550.00',
    product_description: 'Wooden, hinged doll Hitty, from Kolaksay. Cut from mahogany. Dressing oil. Grinding produced moderately, retaining the author\'s "breath."',
    category_name: 'Toys & Entertainment',
    category_id: 4,
    seller_id: 1,
  },
  {
    product_name: 'Rustic Modern Platform Bed Frame and Headboard',
    product_price: '952.80',
    product_description: 'This modern rustic platform bed is perfect for any home, from country cottage to city loft. We at Urban Billy spend much time carefully designing and handcrafting each piece to TRULY last for future generations. We take our craft seriously. This platform bed and headboard is made of solid, carefully selected planks. We locally source all the materials used to hand make this epic bed. The natural grain gives you the warmth and vibes off the wild, while the sleek low profile design keeps things just enough modern.',
    category_name: 'Home & Living',
    category_id: 3,
    seller_id: 5,
  },
  {
    product_name: 'Home of Vintage Oushak Rug',
    product_price: '500.65',
    product_description: 'Home of Vintage Oushak Rug,Rug/Ethnic Turkish Rug/Vintage Rug/Boho Rug/Oushak Rug/İnterior and Designer Rug/Distressed Low Pile!',
    category_name: 'Home & Living',
    category_id: 3,
    seller_id: 5,
  },
  {
    product_name: 'Reclaimed Barn Wood Dining Chair With Tapered Legs',
    product_price: '745.00',
    product_description: 'Only reclaimed barnwood could produce such beauty! These handcrafted artisanal dining chairs are built to last with old-growth reclaimed wood and finished with a durable, eco-friendly finish to ensure they will stay beautiful. These chairs are built to share years of memories with your family as they dine around one of our handmade, reclaimed wood dining tables.',
    category_name: 'Home & Living',
    category_id: 3,
    seller_id: 4,
  },
  {
    product_name: 'Womens Cutout Oxfords',
    product_price: '126.00',
    product_description: 'These oxford sandals feature intricate lacing and cut-out details for a statement finish. Made of a soft leather and sturdy soles for comfort and security, these are the perfect pair of sandals to wear on a summer evening. Outer and inner material - genuine leather, sole - manmade, closure',
    category_name: 'Clothing & Shoes',
    category_id: 2,
    seller_id: 3,
  },
  {
    product_name: 'Shoes Women Oxford',
    product_price: '121.00',
    product_description: 'Place your feet on a piece of paper and draw the shape of your feet.\nUse the drawing and measure the distance from the heel to the big toe.\nAdditionally, measure the instep girth around with a measured flexible tape.\nPlease see an example on the picture above.',
    category_name: 'Clothing & Shoes',
    category_id: 2,
    seller_id: 2,
  },
  {
    product_name: 'Pop Art Painting',
    product_price: '110.00',
    product_description: 'This distressed comic art chick is an original painting by me inspired by old-school vintage comics. This beautiful 16x20 hand-painted piece would look great anywhere!',
    category_name: 'Art & Collectibles',
    category_id: 5,
    seller_id: 1,
  },
  {
    product_name: 'Metal Sculpture Art',
    product_price: '161.50',
    product_description: 'A unique Shelf Metal Art made of a thin metal sheet. A great housewarming gift and impressive metal art for your home.',
    category_name: 'Art & Collectibles',
    category_id: 5,
    seller_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
