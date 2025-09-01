// Product database with realistic data
export const PRODUCT_DATABASE = [
  // Electronics
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The iPhone 15 Pro features a titanium design with a 6.1-inch Super Retina XDR display. Powered by the A17 Pro chip, it delivers exceptional performance for gaming, photography, and productivity.',
    price: 999.99,
    originalPrice: 1099.99,
    category: 'electronics',
    subcategory: 'smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 4256,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Titanium design - Strong, light, and durable',
      'A17 Pro chip - The most powerful iPhone chip ever',
      'Advanced camera system with 48MP main camera',
      'ProMotion technology with 120Hz refresh rate',
      'USB-C connectivity',
      'All-day battery life'
    ],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro chip',
      'Camera': 'Triple camera system',
      'Battery': 'Up to 23 hours video playback',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Dimensions': '6.1 x 2.8 x 0.3 inches',
      'Weight': '7.27 ounces'
    },
    options: {
      color: ['Space Black', 'Blue Titanium', 'Natural Titanium', 'White Titanium'],
      storage: ['128GB', '256GB', '512GB', '1TB']
    },
    inStock: true,
    stockCount: 25,
    tags: ['Best Seller', 'New'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '2',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones with crystal clear hands-free calling and Alexa built-in.',
    price: 329.99,
    originalPrice: 399.99,
    category: 'electronics',
    subcategory: 'headphones',
    brand: 'Sony',
    rating: 4.4,
    reviewCount: 1842,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Crystal clear hands-free calling',
      'Alexa built-in',
      'Touch sensor controls',
      'Quick charge - 3 minutes for 3 hours of playback'
    ],
    specifications: {
      'Driver Unit': '30mm',
      'Frequency Response': '4 Hz-40,000 Hz',
      'Battery Life': '30 hours',
      'Charging Time': '3.5 hours',
      'Weight': '8.8 oz',
      'Connectivity': 'Bluetooth 5.2'
    },
    options: {
      color: ['Black', 'Silver']
    },
    inStock: true,
    stockCount: 15,
    tags: ['New', 'Prime'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    description: 'Supercharged by the next-generation M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into its strikingly thin aluminum enclosure.',
    price: 1199.99,
    originalPrice: 1299.99,
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'Apple',
    rating: 4.7,
    reviewCount: 3421,
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'M2 chip with 8-core CPU and 8-core GPU',
      '13.6-inch Liquid Retina display',
      '8GB unified memory',
      '256GB SSD storage',
      'Up to 18 hours battery life',
      'Two Thunderbolt ports'
    ],
    specifications: {
      'Chip': 'Apple M2',
      'Display': '13.6-inch Liquid Retina',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Battery': 'Up to 18 hours',
      'Weight': '2.7 pounds'
    },
    options: {
      color: ['Space Gray', 'Silver', 'Starlight', 'Midnight'],
      memory: ['8GB', '16GB', '24GB'],
      storage: ['256GB', '512GB', '1TB', '2TB']
    },
    inStock: true,
    stockCount: 8,
    tags: ['Limited Offer'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 3
    }
  },
  {
    id: '4',
    name: 'Samsung 55" 4K Smart TV',
    description: 'Experience brilliant picture quality with this Samsung 55-inch 4K UHD Smart TV featuring HDR and built-in streaming apps.',
    price: 549.99,
    originalPrice: 799.99,
    category: 'electronics',
    subcategory: 'televisions',
    brand: 'Samsung',
    rating: 4.3,
    reviewCount: 2156,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '4K UHD resolution',
      'HDR10+ support',
      'Smart TV with built-in apps',
      'Voice remote included',
      'Multiple HDMI ports',
      'Crystal clear picture quality'
    ],
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K UHD (3840 x 2160)',
      'HDR': 'HDR10+',
      'Smart Platform': 'Tizen OS',
      'HDMI Ports': '3',
      'USB Ports': '2'
    },
    options: {
      size: ['43"', '50"', '55"', '65"', '75"']
    },
    inStock: true,
    stockCount: 12,
    tags: ['Deal of the Day'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 5
    }
  },
  {
    id: '5',
    name: 'iPad Pro 12.9"',
    description: 'The ultimate iPad experience with the powerful M2 chip, stunning Liquid Retina XDR display, and all-day battery life.',
    price: 1099.99,
    originalPrice: 1199.99,
    category: 'electronics',
    subcategory: 'tablets',
    brand: 'Apple',
    rating: 4.6,
    reviewCount: 1876,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'M2 chip for incredible performance',
      '12.9-inch Liquid Retina XDR display',
      'All-day battery life',
      'Apple Pencil (2nd generation) support',
      'Pro cameras with LiDAR Scanner',
      'Thunderbolt / USB 4 connector'
    ],
    specifications: {
      'Chip': 'Apple M2',
      'Display': '12.9-inch Liquid Retina XDR',
      'Storage': '128GB, 256GB, 512GB, 1TB, 2TB',
      'Camera': '12MP Wide and 10MP Ultra Wide',
      'Battery': 'Up to 10 hours',
      'Weight': '1.5 pounds'
    },
    options: {
      storage: ['128GB', '256GB', '512GB', '1TB', '2TB'],
      connectivity: ['Wi-Fi', 'Wi-Fi + Cellular']
    },
    inStock: true,
    stockCount: 18,
    tags: ['Top Rated'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '6',
    name: 'Canon EOS R5',
    description: 'Professional full-frame mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system.',
    price: 3899.99,
    originalPrice: 4199.99,
    category: 'electronics',
    subcategory: 'cameras',
    brand: 'Canon',
    rating: 4.5,
    reviewCount: 892,
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '45MP full-frame CMOS sensor',
      '8K video recording capability',
      'Dual Pixel CMOS AF II',
      'In-body image stabilization',
      'Weather-sealed magnesium alloy body',
      'High-resolution electronic viewfinder'
    ],
    specifications: {
      'Sensor': '45MP Full-Frame CMOS',
      'Video': '8K RAW, 4K 120p',
      'ISO Range': '100-51200',
      'Viewfinder': '5.76M-dot OLED',
      'Battery Life': '490 shots',
      'Weight': '1.6 lbs'
    },
    options: {
      kit: ['Body Only', 'With 24-70mm Lens', 'With 24-105mm Lens']
    },
    inStock: true,
    stockCount: 5,
    tags: ['Professional'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 3
    }
  },
  {
    id: '7',
    name: 'Bose SoundLink Revolve+',
    description: 'Portable Bluetooth speaker with 360° sound, water-resistant design, and up to 17 hours of battery life.',
    price: 199.99,
    originalPrice: 299.99,
    category: 'electronics',
    subcategory: 'speakers',
    brand: 'Bose',
    rating: 4.4,
    reviewCount: 1543,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '360° sound for consistent coverage',
      'Water-resistant design (IPX4)',
      'Up to 17 hours of battery life',
      'Built-in speakerphone',
      'Voice prompts',
      'Durable aluminum body'
    ],
    specifications: {
      'Battery Life': 'Up to 17 hours',
      'Water Resistance': 'IPX4',
      'Connectivity': 'Bluetooth, 3.5mm',
      'Dimensions': '7.24" H x 4.09" W',
      'Weight': '2 lbs',
      'Charging': 'Micro USB'
    },
    options: {
      color: ['Triple Black', 'Lux Gray']
    },
    inStock: true,
    stockCount: 22,
    tags: ['35% Off'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '8',
    name: 'Gaming Mechanical Keyboard',
    description: 'RGB backlit mechanical gaming keyboard with blue switches, programmable keys, and aluminum frame.',
    price: 129.99,
    originalPrice: 179.99,
    category: 'electronics',
    subcategory: 'keyboards',
    brand: 'TechGear',
    rating: 4.2,
    reviewCount: 2341,
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Mechanical blue switches',
      'RGB backlit keys',
      'Programmable macro keys',
      'Aluminum frame construction',
      'Anti-ghosting technology',
      'Detachable USB-C cable'
    ],
    specifications: {
      'Switch Type': 'Mechanical Blue',
      'Backlight': 'RGB LED',
      'Connection': 'USB-C',
      'Key Layout': 'Full Size (104 keys)',
      'Dimensions': '17.3" x 5.1" x 1.4"',
      'Weight': '2.2 lbs'
    },
    options: {
      switchType: ['Blue', 'Red', 'Brown'],
      layout: ['Full Size', 'Tenkeyless']
    },
    inStock: true,
    stockCount: 31,
    tags: ['Gaming Choice'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  // Fashion
  {
    id: '9',
    name: 'Nike Air Max 270',
    description: 'Lifestyle sneakers featuring Max Air unit in the heel for exceptional comfort and style.',
    price: 139.99,
    originalPrice: 169.99,
    category: 'fashion',
    subcategory: 'shoes',
    brand: 'Nike',
    rating: 4.3,
    reviewCount: 3567,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Max Air unit in heel',
      'Breathable mesh upper',
      'Rubber outsole for traction',
      'Lightweight foam midsole',
      'Iconic Air Max design',
      'Comfortable all-day wear'
    ],
    specifications: {
      'Upper': 'Mesh and synthetic',
      'Midsole': 'Foam with Max Air unit',
      'Outsole': 'Rubber',
      'Closure': 'Lace-up',
      'Width': 'Medium',
      'Style': 'Lifestyle/Running'
    },
    options: {
      size: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
      color: ['Black/White', 'White/Blue', 'Gray/Orange', 'Navy/Red']
    },
    inStock: true,
    stockCount: 8,
    tags: ['Limited Stock'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '10',
    name: 'Levi\'s 501 Original Jeans',
    description: 'The original blue jean since 1873. Straight leg fit with button fly and classic 5-pocket styling.',
    price: 89.99,
    originalPrice: 109.99,
    category: 'fashion',
    subcategory: 'jeans',
    brand: 'Levi\'s',
    rating: 4.4,
    reviewCount: 4521,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Original straight leg fit',
      '100% cotton denim',
      'Button fly closure',
      'Classic 5-pocket styling',
      'Signature arcuate stitching',
      'Red Tab authenticity'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Straight',
      'Rise': 'Mid',
      'Closure': 'Button fly',
      'Pockets': '5-pocket',
      'Inseam': '30", 32", 34", 36"'
    },
    options: {
      waist: ['28', '29', '30', '31', '32', '33', '34', '36', '38', '40'],
      length: ['30"', '32"', '34"', '36"'],
      wash: ['Dark Stonewash', 'Medium Stonewash', 'Light Stonewash', 'Black']
    },
    inStock: true,
    stockCount: 45,
    tags: ['Classic'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 3
    }
  },
  {
    id: '11',
    name: 'Adidas Ultraboost 22',
    description: 'Running shoes with responsive Boost midsole and Primeknit upper for ultimate comfort and performance.',
    price: 179.99,
    originalPrice: 199.99,
    category: 'fashion',
    subcategory: 'athletic-shoes',
    brand: 'Adidas',
    rating: 4.5,
    reviewCount: 2876,
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Boost midsole for energy return',
      'Primeknit upper for adaptive fit',
      'Continental rubber outsole',
      'Torsion system for stability',
      'Sock-like construction',
      'Responsive cushioning'
    ],
    specifications: {
      'Midsole': 'Boost foam',
      'Upper': 'Primeknit',
      'Outsole': 'Continental rubber',
      'Drop': '10mm',
      'Weight': '10.9 oz (men\'s size 9)',
      'Purpose': 'Running/Training'
    },
    options: {
      size: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
      color: ['Core Black', 'Cloud White', 'Solar Red', 'Legend Ink']
    },
    inStock: true,
    stockCount: 24,
    tags: ['Athletic Performance'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '12',
    name: 'Patagonia Down Jacket',
    description: 'Lightweight down jacket with recycled polyester shell and responsibly sourced down insulation.',
    price: 229.99,
    originalPrice: 279.99,
    category: 'fashion',
    subcategory: 'jackets',
    brand: 'Patagonia',
    rating: 4.7,
    reviewCount: 1432,
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '700-fill power down insulation',
      'Recycled polyester shell',
      'DWR water-repellent finish',
      'Packable into internal pocket',
      'Elastic-bound cuffs and hem',
      'Two-way center front zipper'
    ],
    specifications: {
      'Insulation': '700-fill down',
      'Shell': 'Recycled polyester',
      'Water Resistance': 'DWR coating',
      'Packable': 'Yes, into internal pocket',
      'Weight': '12.7 oz',
      'Temperature Rating': '32°F to 10°F'
    },
    options: {
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Navy Blue', 'Forest Green', 'Burgundy']
    },
    inStock: true,
    stockCount: 16,
    tags: ['Sustainable'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 4
    }
  },
  {
    id: '13',
    name: 'Ray-Ban Aviator Sunglasses',
    description: 'Classic aviator sunglasses with polarized lenses and gold-tone metal frame.',
    price: 154.99,
    originalPrice: 189.99,
    category: 'fashion',
    subcategory: 'sunglasses',
    brand: 'Ray-Ban',
    rating: 4.6,
    reviewCount: 5643,
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Classic aviator design',
      'Polarized lenses',
      'Gold-tone metal frame',
      '100% UV protection',
      'Gradient lens options',
      'Iconic Ray-Ban styling'
    ],
    specifications: {
      'Lens Width': '58mm',
      'Bridge Width': '14mm',
      'Temple Length': '135mm',
      'Frame Material': 'Metal',
      'Lens Material': 'Glass',
      'UV Protection': '100%'
    },
    options: {
      size: ['55mm', '58mm', '62mm'],
      lensColor: ['Green Classic G-15', 'Brown Gradient', 'Blue Gradient', 'Silver Mirror'],
      frameColor: ['Gold', 'Silver', 'Black', 'Gunmetal']
    },
    inStock: true,
    stockCount: 33,
    tags: ['Classic Style'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '14',
    name: 'Cashmere Scarf',
    description: 'Luxurious 100% cashmere scarf in classic colors, perfect for any season styling.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'fashion',
    subcategory: 'accessories',
    brand: 'Luxury Essentials',
    rating: 4.4,
    reviewCount: 876,
    images: [
      'https://images.unsplash.com/photo-1601762285092-4ccad9bcfbc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '100% pure cashmere',
      'Incredibly soft texture',
      'Lightweight yet warm',
      'Classic oversized design',
      'Hand-finished edges',
      'Versatile styling options'
    ],
    specifications: {
      'Material': '100% Cashmere',
      'Dimensions': '70" x 28"',
      'Weight': '4.2 oz',
      'Care': 'Dry clean only',
      'Origin': 'Mongolia',
      'Weave': 'Plain weave'
    },
    options: {
      color: ['Charcoal Gray', 'Cream', 'Navy Blue', 'Burgundy', 'Camel', 'Black']
    },
    inStock: true,
    stockCount: 19,
    tags: ['Luxury'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 3
    }
  },
  // Books
  {
    id: '15',
    name: 'The Seven Husbands of Evelyn Hugo',
    description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story to an unknown journalist.',
    price: 16.99,
    originalPrice: 17.99,
    category: 'books',
    subcategory: 'fiction',
    brand: 'St. Martin\'s Press',
    rating: 4.8,
    reviewCount: 125643,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'New York Times Bestseller',
      'Paperback edition',
      '400 pages',
      'Contemporary fiction',
      'LGBTQ+ themes',
      'Award-winning author'
    ],
    specifications: {
      'Format': 'Paperback',
      'Pages': '400',
      'Publisher': 'St. Martin\'s Press',
      'Language': 'English',
      'ISBN-13': '978-1250237231',
      'Dimensions': '5.4 x 1.1 x 8.2 inches'
    },
    options: {
      format: ['Paperback', 'Hardcover', 'Kindle', 'Audiobook']
    },
    inStock: true,
    stockCount: 156,
    tags: ['NYT Bestseller', 'Book Club Pick'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '16',
    name: 'Atomic Habits',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Transform your life with tiny changes in behavior.',
    price: 14.99,
    originalPrice: 18.99,
    category: 'books',
    subcategory: 'self-help',
    brand: 'Avery',
    rating: 4.7,
    reviewCount: 89432,
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '#1 New York Times Bestseller',
      'Self-improvement guide',
      'Practical strategies',
      'Science-backed methods',
      '320 pages of insights',
      'Life-changing content'
    ],
    specifications: {
      'Format': 'Paperback',
      'Pages': '320',
      'Publisher': 'Avery',
      'Language': 'English',
      'ISBN-13': '978-0735211292',
      'Dimensions': '5.2 x 0.8 x 8 inches'
    },
    options: {
      format: ['Paperback', 'Hardcover', 'Kindle', 'Audiobook']
    },
    inStock: true,
    stockCount: 89,
    tags: ['#1 Bestseller', 'Life Changing'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '17',
    name: 'The Thursday Murder Club',
    description: 'A mystery novel about four unlikely friends in a retirement village who meet every Thursday to investigate cold cases.',
    price: 15.99,
    originalPrice: 17.99,
    category: 'books',
    subcategory: 'mystery',
    brand: 'Pamela Dorman Books',
    rating: 4.5,
    reviewCount: 34521,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'International bestseller',
      'Cozy mystery genre',
      'Humorous and heartwarming',
      'First in a series',
      'British setting',
      'Elderly protagonists'
    ],
    specifications: {
      'Format': 'Paperback',
      'Pages': '368',
      'Publisher': 'Pamela Dorman Books',
      'Language': 'English',
      'ISBN-13': '978-0525559474',
      'Dimensions': '5.1 x 0.8 x 7.8 inches'
    },
    options: {
      format: ['Paperback', 'Hardcover', 'Kindle', 'Audiobook']
    },
    inStock: true,
    stockCount: 67,
    tags: ['International Bestseller'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '18',
    name: 'Becoming',
    description: 'Michelle Obama\'s deeply personal memoir describing her journey from South Side Chicago to the White House.',
    price: 19.99,
    originalPrice: 32.50,
    category: 'books',
    subcategory: 'biography',
    brand: 'Crown',
    rating: 4.9,
    reviewCount: 198765,
    images: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Michelle Obama memoir',
      'Deeply personal storytelling',
      'Inspiring life journey',
      'Beautiful hardcover edition',
      '448 pages',
      'Photo insert included'
    ],
    specifications: {
      'Format': 'Hardcover',
      'Pages': '448',
      'Publisher': 'Crown',
      'Language': 'English',
      'ISBN-13': '978-1524763138',
      'Dimensions': '6.4 x 1.4 x 9.5 inches'
    },
    options: {
      format: ['Paperback', 'Hardcover', 'Kindle', 'Audiobook']
    },
    inStock: true,
    stockCount: 43,
    tags: ['Memoir', 'Inspirational'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  // Home & Garden
  {
    id: '19',
    name: 'Breville Espresso Machine',
    description: 'Professional-grade espresso machine with 15-bar pressure system and milk steaming wand for cafe-quality coffee at home.',
    price: 399.99,
    originalPrice: 499.99,
    category: 'home',
    subcategory: 'appliances',
    brand: 'Breville',
    rating: 4.4,
    reviewCount: 1892,
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '15-bar pressure system',
      'Professional milk steaming wand',
      'Removable water tank',
      'Cup warming plate',
      'Stainless steel construction',
      'Easy-to-use controls'
    ],
    specifications: {
      'Pressure': '15 bar',
      'Water Tank': '2.8L removable',
      'Power': '1600W',
      'Cup Capacity': 'Single & double shots',
      'Material': 'Stainless steel',
      'Dimensions': '12.5" x 13.2" x 12.5"'
    },
    options: {
      color: ['Stainless Steel', 'Black Sesame']
    },
    inStock: true,
    stockCount: 14,
    tags: ['Professional Grade'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 3
    }
  },
  {
    id: '20',
    name: 'KitchenAid Stand Mixer',
    description: 'Iconic stand mixer with 5-quart bowl and 10 speeds for all your baking and cooking needs.',
    price: 329.99,
    originalPrice: 449.99,
    category: 'home',
    subcategory: 'appliances',
    brand: 'KitchenAid',
    rating: 4.8,
    reviewCount: 15643,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '5-quart stainless steel bowl',
      '10-speed slide control',
      'Tilt-head design',
      'Planetary mixing action',
      'Multiple attachment hub',
      'Dishwasher-safe bowl'
    ],
    specifications: {
      'Bowl Capacity': '5 quarts',
      'Speeds': '10',
      'Power': '325 watts',
      'Material': 'Die-cast metal',
      'Bowl Type': 'Stainless steel',
      'Dimensions': '14.3" x 8.7" x 14.1"'
    },
    options: {
      color: ['Empire Red', 'Onyx Black', 'White', 'Silver', 'Aqua Sky', 'Contour Silver']
    },
    inStock: true,
    stockCount: 27,
    tags: ['Kitchen Essential', 'Iconic Design'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '21',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Cordless vacuum with laser dust detection and powerful suction for deep cleaning on all floor types.',
    price: 649.99,
    originalPrice: 799.99,
    category: 'home',
    subcategory: 'appliances',
    brand: 'Dyson',
    rating: 4.6,
    reviewCount: 3421,
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Laser dust detection',
      'Powerful suction technology',
      'Up to 60 minutes runtime',
      'Converts to handheld',
      'HEPA filtration',
      'Multiple cleaning tools included'
    ],
    specifications: {
      'Runtime': 'Up to 60 minutes',
      'Charge Time': '4.5 hours',
      'Bin Capacity': '0.2 gallons',
      'Weight': '6.8 lbs',
      'Filtration': 'Advanced HEPA',
      'Suction Power': '230 air watts'
    },
    options: {
      model: ['V15 Detect', 'V15 Detect Absolute']
    },
    inStock: true,
    stockCount: 11,
    tags: ['Latest Technology'],
    shippingInfo: {
      freeShipping: true,
      prime: false,
      estimatedDays: 4
    }
  },
  {
    id: '22',
    name: 'Instant Pot Pro',
    description: '8-quart electric pressure cooker with 10-in-1 functionality including pressure cook, slow cook, rice cooker, and more.',
    price: 119.99,
    originalPrice: 149.99,
    category: 'home',
    subcategory: 'appliances',
    brand: 'Instant Pot',
    rating: 4.5,
    reviewCount: 28765,
    images: [
      'https://images.unsplash.com/photo-1556909219-f4e330c3c228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '10-in-1 functionality',
      '8-quart capacity',
      'Advanced safety features',
      'Easy-to-use interface',
      'Dishwasher-safe inner pot',
      'Energy efficient cooking'
    ],
    specifications: {
      'Capacity': '8 quarts',
      'Functions': '10-in-1',
      'Power': '1200 watts',
      'Material': 'Stainless steel',
      'Safety Features': '13 proven safety mechanisms',
      'Dimensions': '13.4" x 12.6" x 12.5"'
    },
    options: {
      size: ['6 quart', '8 quart', '10 quart']
    },
    inStock: true,
    stockCount: 52,
    tags: ['Multi-Functional', 'Energy Efficient'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '23',
    name: 'Ninja Foodi Air Fryer',
    description: 'Large capacity air fryer with multiple cooking functions and easy-to-clean ceramic-coated basket.',
    price: 179.99,
    originalPrice: 229.99,
    category: 'home',
    subcategory: 'appliances',
    brand: 'Ninja',
    rating: 4.3,
    reviewCount: 8932,
    images: [
      'https://images.unsplash.com/photo-1585237021653-d8c2ddc8892d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Large 8-quart capacity',
      'Air fry, roast, reheat, dehydrate',
      'Ceramic-coated basket',
      'Easy-to-use digital controls',
      'Dishwasher-safe parts',
      'Compact countertop design'
    ],
    specifications: {
      'Capacity': '8 quarts',
      'Functions': '4 cooking functions',
      'Temperature Range': '105°F to 400°F',
      'Timer': 'Up to 60 minutes',
      'Power': '1750 watts',
      'Dimensions': '14.25" x 11" x 14.75"'
    },
    options: {
      size: ['4 quart', '6 quart', '8 quart', '10 quart']
    },
    inStock: true,
    stockCount: 38,
    tags: ['Healthy Cooking'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '24',
    name: 'Bamboo Cutting Board Set',
    description: 'Set of 3 organic bamboo cutting boards in different sizes with non-slip feet and juice grooves.',
    price: 49.99,
    originalPrice: 69.99,
    category: 'home',
    subcategory: 'kitchen',
    brand: 'EcoKitchen',
    rating: 4.4,
    reviewCount: 1654,
    images: [
      'https://images.unsplash.com/photo-1556909114-4f6e0ef5e4a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Set of 3 different sizes',
      '100% organic bamboo',
      'Juice grooves on both sides',
      'Non-slip silicone feet',
      'Knife-friendly surface',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Material': '100% Organic Bamboo',
      'Sizes': 'Large (15"x11"), Medium (13"x9"), Small (10"x7")',
      'Thickness': '0.7 inches',
      'Care': 'Hand wash recommended',
      'Certification': 'FDA approved',
      'Weight': '4.2 lbs (set)'
    },
    options: {
      finish: ['Natural', 'Dark Bamboo']
    },
    inStock: true,
    stockCount: 76,
    tags: ['Eco-Friendly', 'Kitchen Essential'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  // Beauty
  {
    id: '25',
    name: 'Skincare Routine Set',
    description: 'Complete 4-step skincare routine with cleanser, toner, serum, and moisturizer for radiant, healthy skin.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'beauty',
    subcategory: 'skincare',
    brand: 'GlowSkin',
    rating: 4.5,
    reviewCount: 3247,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Complete 4-step routine',
      'Suitable for all skin types',
      'Dermatologist tested',
      'Cruelty-free formula',
      'Natural ingredients',
      'Travel-friendly sizes'
    ],
    specifications: {
      'Set Includes': 'Cleanser, Toner, Serum, Moisturizer',
      'Skin Type': 'All skin types',
      'Key Ingredients': 'Hyaluronic acid, Vitamin C, Niacinamide',
      'Volume': 'Cleanser 150ml, Others 50ml each',
      'Shelf Life': '24 months',
      'Certification': 'Dermatologist tested'
    },
    options: {
      skinType: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive']
    },
    inStock: true,
    stockCount: 42,
    tags: ['Complete Set', 'Dermatologist Tested'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '26',
    name: 'Professional Makeup Brush Set',
    description: 'Premium makeup brush set with 20 brushes for face and eyes, including storage case.',
    price: 79.99,
    originalPrice: 119.99,
    category: 'beauty',
    subcategory: 'makeup',
    brand: 'BeautyPro',
    rating: 4.6,
    reviewCount: 2156,
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      '20 professional brushes',
      'Synthetic bristles',
      'Ergonomic handles',
      'Includes storage case',
      'Suitable for all makeup types',
      'Easy to clean'
    ],
    specifications: {
      'Brush Count': '20 pieces',
      'Bristle Type': 'High-quality synthetic',
      'Handle Material': 'Aluminum ferrule with wood handle',
      'Case Type': 'Magnetic closure case',
      'Brush Types': 'Foundation, concealer, powder, blush, eye brushes',
      'Care': 'Wash with mild soap'
    },
    options: {
      color: ['Rose Gold', 'Black', 'Silver']
    },
    inStock: true,
    stockCount: 31,
    tags: ['Professional Quality'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 1
    }
  },
  {
    id: '27',
    name: 'Hair Care Gift Set',
    description: 'Luxury hair care set with shampoo, conditioner, hair mask, and styling serum for all hair types.',
    price: 65.99,
    originalPrice: 89.99,
    category: 'beauty',
    subcategory: 'haircare',
    brand: 'LuxeHair',
    rating: 4.4,
    reviewCount: 1876,
    images: [
      'https://images.unsplash.com/photo-1581024372206-4571b69c3d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Complete hair care routine',
      'Sulfate-free formulas',
      'Suitable for all hair types',
      'Enriched with natural oils',
      'Salon-quality results',
      'Beautiful gift packaging'
    ],
    specifications: {
      'Set Includes': 'Shampoo 250ml, Conditioner 250ml, Hair Mask 200ml, Serum 100ml',
      'Formula': 'Sulfate-free, paraben-free',
      'Key Ingredients': 'Argan oil, Keratin, Vitamin E',
      'Hair Type': 'All hair types',
      'Fragrance': 'Light floral scent',
      'Packaging': 'Gift-ready box'
    },
    options: {
      hairType: ['Normal', 'Dry/Damaged', 'Color-Treated', 'Curly']
    },
    inStock: true,
    stockCount: 28,
    tags: ['Gift Set', 'Salon Quality'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  },
  {
    id: '28',
    name: 'Essential Oils Diffuser Set',
    description: 'Ultrasonic aromatherapy diffuser with 6 essential oils for relaxation and wellness.',
    price: 54.99,
    originalPrice: 79.99,
    category: 'beauty',
    subcategory: 'wellness',
    brand: 'AromaZen',
    rating: 4.3,
    reviewCount: 2943,
    images: [
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ],
    features: [
      'Ultrasonic technology',
      '400ml water capacity',
      '6 essential oils included',
      'LED mood lighting',
      'Timer settings',
      'Auto shut-off safety feature'
    ],
    specifications: {
      'Technology': 'Ultrasonic',
      'Capacity': '400ml',
      'Runtime': 'Up to 14 hours',
      'Coverage': 'Up to 1076 sq ft',
      'Timer Options': '1H, 3H, 6H, ON',
      'Lighting': '7 LED colors'
    },
    options: {
      oilSet: ['Relaxation Pack', 'Energy Pack', 'Sleep Pack', 'Immunity Pack']
    },
    inStock: true,
    stockCount: 47,
    tags: ['Wellness', 'Aromatherapy'],
    shippingInfo: {
      freeShipping: true,
      prime: true,
      estimatedDays: 2
    }
  }
];

// Mock reviews data
export const REVIEWS_DATABASE = {
  '1': [
    {
      id: 'r1',
      userId: 'user1',
      userName: 'TechReviewer2023',
      rating: 5,
      title: 'Amazing performance and camera quality',
      content: 'The iPhone 15 Pro exceeded my expectations. The A17 Pro chip handles everything I throw at it, and the camera system is incredibly versatile. The titanium build feels premium and durable. Highly recommended!',
      date: '2023-11-15',
      verified: true,
      helpful: 23
    },
    {
      id: 'r2',
      userId: 'user2',
      userName: 'PhotoEnthusiast',
      rating: 4,
      title: 'Great camera, battery could be better',
      content: 'Love the camera system and the new Action Button is very useful. However, I wish the battery life was a bit longer for heavy usage days. Overall still a great upgrade from my iPhone 13.',
      date: '2023-11-12',
      verified: true,
      helpful: 18
    }
  ]
};

// Get products by category
export const getProductsByCategory = (category) => {
  return PRODUCT_DATABASE.filter(product => product.category === category);
};

// Get product by ID
export const getProductById = (id) => {
  return PRODUCT_DATABASE.find(product => product.id === id);
};

// Search products
export const searchProducts = (query, filters = {}) => {
  let results = PRODUCT_DATABASE;
  
  // Text search
  if (query) {
    const searchTerms = query.toLowerCase();
    results = results.filter(product => 
      product.name.toLowerCase().includes(searchTerms) ||
      product.description.toLowerCase().includes(searchTerms) ||
      product.brand.toLowerCase().includes(searchTerms) ||
      product.category.toLowerCase().includes(searchTerms)
    );
  }
  
  // Apply filters
  if (filters.category) {
    results = results.filter(product => product.category === filters.category);
  }
  
  if (filters.minPrice) {
    results = results.filter(product => product.price >= filters.minPrice);
  }
  
  if (filters.maxPrice) {
    results = results.filter(product => product.price <= filters.maxPrice);
  }
  
  if (filters.brand) {
    results = results.filter(product => filters.brand.includes(product.brand));
  }
  
  if (filters.minRating) {
    results = results.filter(product => product.rating >= filters.minRating);
  }
  
  // Sort results
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo purposes, assume products with higher IDs are newer
        results.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Default relevance sorting (no change)
        break;
    }
  }
  
  return results;
};

// Get featured products
export const getFeaturedProducts = () => {
  return PRODUCT_DATABASE.filter(product => 
    product.tags && (
      product.tags.includes('Best Seller') ||
      product.tags.includes('Featured') ||
      product.tags.includes('Top Rated')
    )
  ).slice(0, 8);
};

// Get deals/sale products
export const getDealsProducts = () => {
  return PRODUCT_DATABASE.filter(product => 
    product.originalPrice && product.originalPrice > product.price
  ).slice(0, 6);
};

// Get related products
export const getRelatedProducts = (productId, count = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return PRODUCT_DATABASE
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, count);
};

// Get product reviews
export const getProductReviews = (productId) => {
  return REVIEWS_DATABASE[productId] || [];
};

// Categories data
export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Discover the latest in electronics technology',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    subcategories: ['smartphones', 'laptops', 'tablets', 'cameras', 'headphones', 'speakers', 'televisions', 'keyboards']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing and accessories for every style',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    subcategories: ['shoes', 'jeans', 'athletic-shoes', 'jackets', 'sunglasses', 'accessories']
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Discover your next great read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    subcategories: ['fiction', 'self-help', 'mystery', 'biography']
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    description: 'Everything for your home and kitchen needs',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    subcategories: ['appliances', 'kitchen']
  },
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Beauty products and personal care essentials',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    subcategories: ['skincare', 'makeup', 'haircare', 'wellness']
  }
];

export const getCategoryById = (id) => {
  return CATEGORIES.find(category => category.id === id);
};

export const addReview = (productId, reviewData) => {
  const data = JSON.parse(localStorage.getItem('amazonClone') || '{}');
  const currentUser = data.users[data.currentUser];
  
  if (!currentUser) return null;
  
  const newReview = {
    id: Date.now().toString(),
    productId,
    userId: currentUser.id,
    userName: currentUser.name,
    rating: reviewData.rating,
    title: reviewData.title,
    content: reviewData.content,
    date: new Date().toISOString(),
    verified: true,
    helpful: 0
  };
  
  if (!currentUser.reviews) {
    currentUser.reviews = [];
  }
  currentUser.reviews.push(newReview);
  
  localStorage.setItem('amazonClone', JSON.stringify(data));
  return newReview;
};
