// Simulation of DB used by Express server API app.get() in server.js.
const products = [
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls and use voice-activated functions.',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numRatings: 12,
  },
  {
    _id: '2',
    name: 'iPhone 11 Pro 256GB',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro 256GB. Features a transformative 12MP rear-facing triple camera system that adds tons of capability without complexity, including 4k video recording. Other featuers include unprecedented battery life, weather sealing, and a 5.8" OLED screen.',
    brand: 'Apple',
    category: 'Electronics',
    price: 299.99,
    countInStock: 7,
    rating: 4.0,
    numRatings: 8,
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera 24MP',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive, weather=sealed design.',
    brand: 'Cannon',
    category: 'Electronics',
    price: 429.99,
    countInStock: 5,
    rating: 3,
    numRatings: 12,
  },
  {
    _id: '4',
    name: 'Sony Playstation 4 Pro',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, or music.',
    brand: 'Sony',
    category: 'Electronics',
    price: 299.99,
    countInStock: 11,
    rating: 5,
    numRatings: 12,
  },
  {
    _id: '5',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numRatings: 10,
  },
  {
    _id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numRatings: 12,
  },
]

export default products
