import { v4 as uuid } from 'uuid'

let inventory = [

  {
    categories: ['liz'], name: 'Light Blue Vase', price: '100', image: '/products/liz1.jpeg', description: 'Easy to love. Beauiful light blue vase with a lacey trim and custom accents on the sides. The ', brand: 'Elizabeth Aronow', currentInventory: 16 },
  {
    categories: ['on sale', 'risa'], name: 'Pair of Hearts', price: '30', image: '/products/risa4.jpeg', description: 'Heart set. Two beautifully intricate hearts with one of a kind detail. Handmade in Los Angeles, California.', brand: `Risa's Glass Pieces`, currentInventory: 18 },
  {
    categories: ['april', 'featured'], name: 'Bamboo Forest', price: '200', image: '/products/april4.jpeg', description: 'Beautiful Standing decor. Clear glass with green accents and a beautiful bamboo inspired design. Modern feel and incredible detail. One of a kind hand made in Los Angeles.', brand: 'April Lilavios' , currentInventory: 4 },
  {
    categories: ['risa', 'featured'], name: `Rowie's Rose`, price: '275', image: '/products/risa1.jpeg', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: `Risa's Glass Pieces`, currentInventory: 1 },
  {
    categories: ['featured', 'risa'], name: 'Rainbows and Black', price: '75', image: '/products/risa5.jpeg', description: 'Modern, simple and showstopping. This beautiful black plate is 10in x 4.5in and lined with a simple rainbow dichroic glass design. Would make a perfect accent piece in any home.', brand: `Risa's Glass Pieces`, currentInventory: 19 },
  {
    categories: ['liz'], name: 'Crakle Glass Yellow Bowl', price: '100', image: '/products/liz7t.jpeg', description: ' ', brand: 'Elizabeth Aronow', currentInventory: 7 },
  {
    categories: ['liz'], name: 'Glass Hearts' , price: '25/each', image: '/products/liz6.jpeg', description: ' stuff', brand: 'Elizabeth Aronow', currentInventory: 6},

  {
    categories: ['liz', 'featured'], name: 'Periwinkle and Clear Vase', price: '100', image: '/products/liz2.jpeg', description: ' ' , brand: 'Elizabeth Aronow' , currentInventory: 2 },
  {
    categories: ['new arrivals', 'liz'], name: 'Checkered Plate', price: '100', image: '/products/liz3.jpeg', description: 'fun ' , brand: 'Elizabeth Aronow', currentInventory: 3},
  {
    categories: ['on sale', 'liz'], name: 'Sven Tan Matte', price: '120', image: '/products/liz4.jpeg', description: 'times', brand: 'Elizabeth Aronow' , currentInventory: 4 },
  {
    categories: ['on sale', 'liz'], name: 'Ceni Brown 3 Seater', price: '650', image: '/products/liz5.jpeg', description:  'Red Accent Tray with intricate details. Handmade in Los Angeles, Claifornia. ' , brand: 'Elizabeth Aronow', currentInventory: 5},
  {
    categories: ['liz', 'featured'], name: 'Jameson Jack Lounger', price: '123', image: '/products/liz8.jpeg', description: 'Blue Square Plate', brand: 'Elizabeth Aronow', currentInventory: 8 },
  {
    categories: ['liz'], name: 'Galaxy Blue Sofa', price: '80', image: '/products/liz9.jpeg', description: 'Blue.', brand: 'Elizabeth Aronow', currentInventory: 9},
  {
    categories: ['new Arrivals', 'liz'], name: 'Markus Green Love Seat', price: '90', image: '/products/liz10.jpeg', description: 'jacket.', brand: 'Elizabeth Aronow' , currentInventory: 10},
  {
    categories: ['on sale', 'liz'], name: 'Na', price: '125', image: '/products/liz11.jpeg', description: 'You don’t have to go outside to be rugged.', brand: 'Elizabeth Aronow', currentInventory: 11},

  {
    categories: ['on sale', 'liz'], name: 'Beautiful Blue Accent Tray', price: '80', image: '/products/liz12.jpeg', description: ' ' , brand: 'Elizabeth Aronow', currentInventory: 12},
  {
    categories: ['risa', 'featured'], name: 'Lady In the Sun', price: '200', image: '/products/risa2.jpeg', description: 'Beautiful custom pieces of the sun and the moon with a delicate face and bright accents.', brand: `Risa's Glass Pieces`, currentInventory: 17 },
  {
    categories: ['featured', 'liz'], name: 'Modern Mezuzah', price: '75', image: '/products/liz13.jpeg', description: 'Saddle up and pass the remote.' , brand: 'e', currentInventory: 13},
  {
    categories: ['liz'], name: 'Red And Clear ', price: '80', image: '/products/liz14.jpeg', description: 'a real vintage.' , brand: 'Elizabeth Aronow', currentInventory: 14},
  {
    categories: ['risa'], name: 'Black And White Dish ', price: '40', image: '/products/risa3.jpeg', description: 'Clear glass with a black and white striped pattern. Ideal for a bathroom soap dish or a small jewelery holder. Item is 3.5in x 5.5in and is hand made in Los Angeles, California. Can be altered for custom requets.' , brand: `Risa's Glass Pieces`, currentInventory: 14},
  {
    categories: ['liz'], name: 'Rainbow Wall Piece', price: '200', image: '/products/liz15.jpeg', description: 'Three of a kind. Large hanging dichroic glass decorative wall pieces.', brand: 'Elizabeth Aronow', currentInventory: 15 },
  {
    categories: ['april', 'featured'], name: 'Teal Bowl', price: '150', image: '/products/april1.jpeg', description: 'Beautiful Standing decor or large bowl. Teal blue marbled one of a kind glass. This modern piece is simple and would be a great accent to any room. One of a kind hand made in Los Angeles.', brand: 'April Lilavios' , currentInventory: 4 },
  {
    categories: ['april'], name: 'Ripple Waves', price: '175', image: '/products/april2.jpeg', description: 'Beautiful Standing decor. Beautiful glass with different shades of pink an purples and blues all fused together in a wave pattern. One of a kind hand made in Los Angeles.', brand: 'April Lilavios' , currentInventory: 4 },
  {
    categories: ['april'], name: 'Blue Squares', price: '100', image: '/products/april3.jpeg', description: 'Beautiful Standing decor or hanging art. Clear square glass with light blue and white accents. One of a kind hand made in Los Angeles.', brand: 'April Lilavios' , currentInventory: 4 },
  {
    categories: ['april', 'featured'], name: 'Watermelon Summer', price: '120', image: '/products/april5.jpeg', description: 'Beautiful Standing decor or large bowl. Clear glass with greeen and red dichroic accents. One of a kind hand made in Los Angeles.', brand: 'April Lilavios' , currentInventory: 4 },
  {
    categories: ['april'], name: 'Glass Hearts', price: '20/each', image: '/products/april6.jpeg', description: 'Delicate multicolored hearts. Simple or complex. Can be made to custom request. Hand Made in Los Angeles.' , brand: 'Elizabeth Aronow', currentInventory: 14},
  {
    categories: ['april'], name: 'Clear Pattern Tray', price: '80', image: '/products/april7.jpeg', description: 'Beautiful patterned clear tray with a water-like design and soft blue and burgundy accents. Unique item hand made in Los Angeles, California. ' , brand: 'Elizabeth Aronow', currentInventory: 14},// {
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
