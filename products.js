
const products = [
    // Electronics
    {
        id: '1001',
        name: 'iPhone 15 Pro',
        description: 'The iPhone 15 Pro features a titanium design with a 6.1-inch Super Retina XDR display. Powered by the A17 Pro chip, it delivers exceptional performance for gaming, photography, and productivity.',
        price: 99999.99,
        originalPrice: 109999.99,
        category: 'electronics',
        subcategory: 'smartphones',
        brand: 'Apple',
        rating: 4.8,
        reviewCount: 4256,
        images: [
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
        id: '1002',
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
    // Electronics Products
    {
        id: '2001',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Flagship Android smartphone with 200MP camera, S Pen support, and Snapdragon 8 Gen 3.',
        price: 119999,
        originalPrice: 129999,
        category: 'electronics',
        subcategory: 'smartphones',
        brand: 'Samsung',
        rating: 4.8,
        reviewCount: 3400,
        images: [
            'https://m.media-amazon.com/images/I/717Q2swzhBL._UF1000,1000_QL80_.jpg',
            'https://cdn.sheeel.com/catalog/product/cache/074f467fdf747a38ab5e8f88243fd86f/s/a/samsung_galaxy_s24_ultra_5g_12gb_ram_256g_smartphone1.jpg'
        ],
        features: [
            '200MP quad camera system',
            '6.8-inch QHD+ AMOLED display',
            'Snapdragon 8 Gen 3',
            'S Pen included',
            '5000mAh battery with 45W fast charging'
        ],
        specifications: {
            'Display': '6.8-inch QHD+ AMOLED, 120Hz',
            'Processor': 'Snapdragon 8 Gen 3',
            'RAM': '12GB',
            'Storage': '256GB, 512GB, 1TB',
            'Battery': '5000mAh'
        },
        options: {
            color: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
            storage: ['256GB', '512GB', '1TB']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '2002',
        name: 'Apple MacBook Air M3',
        description: 'Ultra-light laptop powered by Apple M3 chip with 18-hour battery life.',
        price: 114999,
        originalPrice: 124999,
        category: 'electronics',
        subcategory: 'laptops',
        brand: 'Apple',
        rating: 4.9,
        reviewCount: 1800,
        images: [
            'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mPniIsbtmK1B7U6Z0xKsvvAsdI_pw461lfGXaIMNt9puhrm1B0CxgGhHG0CehGpHovE&usqp=CAU'
        ],
        features: [
            'Apple M3 chip with 8-core GPU',
            '13.6-inch Liquid Retina Display',
            '18-hour battery life',
            'MagSafe charging',
            'Silent fanless design'
        ],
        specifications: {
            'Display': '13.6-inch Liquid Retina',
            'Chip': 'Apple M3',
            'Storage': '256GB, 512GB',
            'RAM': '8GB, 16GB',
            'Battery Life': 'Up to 18 hours'
        },
        options: {
            color: ['Starlight', 'Midnight', 'Silver'],
            storage: ['256GB', '512GB']
        },
        inStock: true,
        stockCount: 18,
        tags: ['New Arrival'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '2003',
        name: 'PlayStation 5 Slim',
        description: 'Sony PlayStation 5 Slim edition with ultra-fast SSD and 4K gaming support.',
        price: 45990,
        originalPrice: 49990,
        category: 'electronics',
        subcategory: 'gaming',
        brand: 'Sony',
        rating: 4.8,
        reviewCount: 5000,
        images: [
            'https://i.ytimg.com/vi/9v7Gd4hablQ/maxresdefault.jpg',
            'https://m.media-amazon.com/images/I/51ljnEaW0pL._UF894,1000_QL80_.jpg'
        ],
        features: [
            'Ultra-fast SSD',
            'Ray tracing support',
            '4K gaming at 120Hz',
            'New slim design',
            'DualSense wireless controller'
        ],
        specifications: {
            'Storage': '1TB SSD',
            'Graphics': 'Ray tracing capable',
            'Performance': '4K 120Hz gaming',
            'Weight': '3.2 kg'
        },
        options: {
            bundle: ['Console Only', 'Console + Extra Controller']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '2004',
        name: 'LG OLED C3 55-inch TV',
        description: 'Smart OLED TV with Dolby Vision, 120Hz refresh rate, and AI sound pro.',
        price: 124999,
        originalPrice: 139999,
        category: 'electronics',
        subcategory: 'television',
        brand: 'LG',
        rating: 4.7,
        reviewCount: 2100,
        images: [
            'https://mahajanelectronics.com/cdn/shop/files/OLED55C3PSA-DZ-05.png?v=1695908082',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw30LTjCF5q-2GVhSW7CNUqCAOhCDg0hClQ&s'
        ],
        features: [
            'OLED display with perfect blacks',
            'Dolby Vision IQ and Dolby Atmos',
            '120Hz refresh rate',
            'AI sound pro',
            'Gaming optimizer'
        ],
        specifications: {
            'Display': '55-inch OLED 4K',
            'Resolution': '3840x2160',
            'Refresh Rate': '120Hz',
            'Ports': '4 HDMI 2.1',
            'Audio': 'Dolby Atmos'
        },
        options: {
            size: ['55-inch', '65-inch', '77-inch']
        },
        inStock: true,
        stockCount: 12,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '2005',
        name: 'Bose QuietComfort Earbuds II',
        description: 'True wireless earbuds with world-class noise cancellation and superior sound.',
        price: 22990,
        originalPrice: 24990,
        category: 'electronics',
        subcategory: 'earbuds',
        brand: 'Bose',
        rating: 4.6,
        reviewCount: 2700,
        images: [
            'https://m.media-amazon.com/images/I/51qRS8hb-9L.jpg',
            'https://i.rtings.com/assets/products/AQze2J9H/bose-quietcomfort-earbuds-ii-truly-wireless/design-medium.jpg?format=auto'
        ],
        features: [
            'Noise cancellation',
            'Long battery life',
            'Touch controls',
            'Water resistant (IPX4)',
            'Bose Music app support'
        ],
        specifications: {
            'Battery Life': '6 hours + 18 hours case',
            'Connectivity': 'Bluetooth 5.3',
            'Water Resistance': 'IPX4',
            'Weight': '6.2g per bud'
        },
        options: {
            color: ['Black', 'White']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '2006',
        name: 'Asus ROG Strix Gaming Laptop',
        description: 'High-performance gaming laptop with NVIDIA RTX 4070 and 165Hz display.',
        price: 169999,
        originalPrice: 179999,
        category: 'electronics',
        subcategory: 'laptops',
        brand: 'Asus',
        rating: 4.7,
        reviewCount: 900,
        images: [
            'https://images-cdn.ubuy.co.in/64442e18d2766312aa321be7-asus-rog-strix-g16-2023-gaming-laptop.jpg',
            'https://dlcdnwebimgs.asus.com/files/media/982b43f2-03f0-4780-b552-cf2a58d515bf/v1/images/m-kv_1.webp'
        ],
        features: [
            'Intel Core i9 13th Gen',
            'NVIDIA RTX 4070 GPU',
            '165Hz QHD display',
            'Liquid metal cooling',
            'RGB keyboard'
        ],
        specifications: {
            'Processor': 'Intel Core i9-13980HX',
            'Graphics': 'NVIDIA RTX 4070',
            'Display': '16-inch QHD 165Hz',
            'RAM': '16GB DDR5',
            'Storage': '1TB SSD'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 10,
        tags: ['Gaming'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '2007',
        name: 'Canon EOS R7 Mirrorless Camera',
        description: 'APS-C mirrorless camera with 32.5MP sensor and 4K 60fps video.',
        price: 119990,
        originalPrice: 129990,
        category: 'electronics',
        subcategory: 'cameras',
        brand: 'Canon',
        rating: 4.7,
        reviewCount: 1500,
        images: [
            'https://cdn.media.amplience.net/i/canon/canon_eos-r7_eos_innovation_meets_apsc_2ee33bfb54084d28aeafaeddb563ad01?$block-grid-3by2-md-jpg$',
            'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2022/09/nando-canon-eosr7-banner.jpg'
        ],
        features: [
            '32.5MP APS-C sensor',
            '4K UHD video at 60fps',
            'Dual Pixel CMOS AF II',
            'In-body stabilization',
            'Weather sealed body'
        ],
        specifications: {
            'Sensor': '32.5MP APS-C CMOS',
            'Video': '4K 60fps',
            'Storage': 'Dual SD card slots',
            'Weight': '612g'
        },
        options: {
            kit: ['Body Only', 'Body + 18-150mm Lens']
        },
        inStock: true,
        stockCount: 15,
        tags: ['Professional'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '2008',
        name: 'GoPro Hero 12 Black',
        description: 'Action camera with HyperSmooth 6.0 stabilization and 5.3K video recording.',
        price: 49990,
        originalPrice: 52990,
        category: 'electronics',
        subcategory: 'action cameras',
        brand: 'GoPro',
        rating: 4.6,
        reviewCount: 2300,
        images: [
            'https://m.media-amazon.com/images/I/51OrCKbmVWL.jpg',
            'https://x.imastudent.com/content/0051159_gopro-hero-12-black-action-camera_500.png'
        ],
        features: [
            '5.3K 60fps recording',
            'HyperSmooth 6.0 stabilization',
            'Waterproof up to 10m',
            'HDR photo and video',
            'WiFi + Bluetooth'
        ],
        specifications: {
            'Resolution': '5.3K 60fps',
            'Battery': 'Enduro battery',
            'Connectivity': 'WiFi, Bluetooth',
            'Waterproof': '10m'
        },
        options: {
            bundle: ['Standard', 'Adventure Kit']
        },
        inStock: true,
        stockCount: 28,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '2009',
        name: 'Apple iPad Pro 12.9 (M2)',
        description: 'Latest iPad Pro powered by M2 chip with Liquid Retina XDR display.',
        price: 124900,
        originalPrice: 134900,
        category: 'electronics',
        subcategory: 'tablets',
        brand: 'Apple',
        rating: 4.9,
        reviewCount: 2700,
        images: [
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/4-sixteen_nine.jpg?VersionId=c7rHJTcqyIFUlxMadtxDKbqpJOXeEa7e&size=690:388',
            'https://i.ytimg.com/vi/EO73QXVqu_M/maxresdefault.jpg'
        ],
        features: [
            'Apple M2 chip',
            '12.9-inch Liquid Retina XDR',
            'Apple Pencil hover',
            'ProMotion 120Hz',
            '5G connectivity'
        ],
        specifications: {
            'Display': '12.9-inch Liquid Retina XDR',
            'Chip': 'Apple M2',
            'Storage': '128GB, 256GB, 512GB, 1TB',
            'Battery': '10 hours'
        },
        options: {
            storage: ['128GB', '256GB', '512GB'],
            color: ['Silver', 'Space Gray']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '2010',
        name: 'Kindle Paperwhite 11th Gen',
        description: 'Waterproof e-reader with adjustable warm light and 6.8-inch display.',
        price: 13999,
        originalPrice: 15999,
        category: 'electronics',
        subcategory: 'ereaders',
        brand: 'Amazon',
        rating: 4.8,
        reviewCount: 5000,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1tvn3G_gaI6X1s_JycEgLXShMIwbwzDX3A&s',
            'https://microless.com/cdn/products/10a28cdafe719dab596d80ef375f7ad4-hi.jpg'
        ],
        features: [
            '6.8-inch glare-free display',
            'Adjustable warm light',
            'Waterproof (IPX8)',
            'Up to 10 weeks battery',
            'USB-C charging'
        ],
        specifications: {
            'Display': '6.8-inch E Ink',
            'Storage': '8GB, 16GB',
            'Battery Life': '10 weeks',
            'Water Resistance': 'IPX8'
        },
        options: {
            storage: ['8GB', '16GB']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1421',
        name: 'Canon EOS R7 Mirrorless Camera',
        description: '32.5MP APS-C camera with 4K video recording and fast autofocus.',
        price: 124999,
        originalPrice: 134999,
        category: 'electronics',
        subcategory: 'cameras',
        brand: 'Canon',
        rating: 4.7,
        reviewCount: 620,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGXkqutiVgnHT2Z09Y5TcJknap4WMf2LzSw&s',
            'https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/259481_2_nm2l5w.png'
        ],
        features: [
            '32.5MP APS-C sensor',
            'Dual Pixel CMOS AF II',
            '4K 60p video',
            'High-speed shooting'
        ],
        specifications: {
            'Sensor': '32.5MP APS-C',
            'Lens Mount': 'RF',
            'Video': '4K 60p',
            'Connectivity': 'Wi-Fi, Bluetooth'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1422',
        name: 'DJI Mini 4 Pro Drone',
        description: 'Compact 4K drone with obstacle avoidance and 34-min flight time.',
        price: 97999,
        originalPrice: 104999,
        category: 'electronics',
        subcategory: 'drones',
        brand: 'DJI',
        rating: 4.8,
        reviewCount: 780,
        images: [
            'https://m.media-amazon.com/images/I/71MCcTe7NcL.jpg',
            'https://everse.in/storage/75174dc185ead49b26d047873e24a14a/DJI-Mini-4-Pro-in-India-combo.jpg'
        ],
        features: [
            '4K HDR video',
            '34-min flight time',
            'Omnidirectional obstacle sensing',
            'Lightweight under 249g'
        ],
        specifications: {
            'Camera': '4K 60fps',
            'Battery': '34 minutes',
            'Weight': '249g',
            'Range': '12 km'
        },
        options: {
            bundle: ['Standard', 'Fly More Combo']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '1423',
        name: 'Asus ROG Strix G16 Gaming Laptop',
        description: 'High-performance gaming laptop with RTX 4070 GPU.',
        price: 169999,
        originalPrice: 184999,
        category: 'electronics',
        subcategory: 'laptops',
        brand: 'Asus',
        rating: 4.6,
        reviewCount: 540,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYGWRw8vqaCVqlQ5Jx0w9AZX7s-xkz82vbA&s',
            'https://dlcdnwebimgs.asus.com/files/media/7307645F-321A-46F8-8DED-BEA6BFC2A968/v1/img/gaming/bg-gaming.jpg'
        ],
        features: [
            'Intel i9 13th Gen',
            'NVIDIA RTX 4070',
            '16-inch 240Hz display',
            '1TB SSD'
        ],
        specifications: {
            'CPU': 'Intel i9 13th Gen',
            'GPU': 'RTX 4070',
            'RAM': '16GB',
            'Storage': '1TB SSD'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1424',
        name: 'Anker 737 Power Bank',
        description: '140W fast-charging power bank with 24,000mAh capacity.',
        price: 16999,
        originalPrice: 18999,
        category: 'electronics',
        subcategory: 'accessories',
        brand: 'Anker',
        rating: 4.8,
        reviewCount: 3100,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPTLjzHvPtucmwxL-VAtLSuh4DpO9B-5eXg&s',
            'https://www.pchouse.com.bd/image/cache/catalog/Anker/anker-737-power-bank-powercore-24000mah-140w-3-600x500h.jpg.webp'
        ],
        features: [
            '140W fast charging',
            '24,000mAh capacity',
            'Smart digital display',
            'Multiple device charging'
        ],
        specifications: {
            'Capacity': '24,000mAh',
            'Power Output': '140W',
            'Ports': 'USB-C, USB-A',
            'Weight': '630g'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1425',
        name: 'GoPro HERO12 Black',
        description: 'Latest GoPro action camera with 5.3K60 video and HDR.',
        price: 45999,
        originalPrice: 49999,
        category: 'electronics',
        subcategory: 'cameras',
        brand: 'GoPro',
        rating: 4.7,
        reviewCount: 980,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNv3dChn9jLe9s7Fgh-zPDavbck9KrhjzyLw&s',
            'https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/14/full/1699942441-0459.jpeg?im=FeatureCrop,size=(826,465)'
        ],
        features: [
            '5.3K60 + 4K120 video',
            'HyperSmooth 6.0 stabilization',
            'Waterproof 10m',
            'HDR photo & video'
        ],
        specifications: {
            'Video': '5.3K60 / 4K120',
            'Battery': 'Enduro 1720mAh',
            'Waterproof': '10m',
            'Connectivity': 'Wi-Fi, Bluetooth'
        },
        options: {
            bundle: ['Standard', 'Creator Kit']
        },
        inStock: true,
        stockCount: 28,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1426',
        name: 'BenQ EX3210U 4K Gaming Monitor',
        description: '32-inch 4K IPS gaming monitor with 144Hz refresh rate.',
        price: 84999,
        originalPrice: 89999,
        category: 'electronics',
        subcategory: 'monitors',
        brand: 'BenQ',
        rating: 4.6,
        reviewCount: 420,
        images: [
            'https://image.benq.com/is/image/benqco/ex3210u-right45-3?$ResponsivePreset$&fmt=png-alpha',
            'https://image.benq.com/is/image/benqco/ex3210u-front-back?$ResponsivePreset$&wid=1000&dpr=off'
        ],
        features: [
            '32-inch 4K UHD',
            '144Hz refresh rate',
            'HDRi technology',
            'Built-in speakers'
        ],
        specifications: {
            'Resolution': '3840x2160',
            'Refresh Rate': '144Hz',
            'Panel': 'IPS',
            'Ports': 'HDMI 2.1, DP 1.4, USB'
        },
        options: {
            size: ['32 inch']
        },
        inStock: true,
        stockCount: 22,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '1427',
        name: 'Samsung Galaxy Tab S9 Ultra',
        description: '14.6-inch AMOLED tablet with Snapdragon 8 Gen 2.',
        price: 108999,
        originalPrice: 114999,
        category: 'electronics',
        subcategory: 'tablets',
        brand: 'Samsung',
        rating: 4.7,
        reviewCount: 670,
        images: [
            'https://m.media-amazon.com/images/I/61l5a94VKkL._UF350,350_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-choIdCdc4bFysb-QSyZMv97PIT5HqANCA&s'
        ],
        features: [
            '14.6-inch Dynamic AMOLED 2X',
            'Snapdragon 8 Gen 2',
            'S Pen included',
            '5G support'
        ],
        specifications: {
            'Display': '14.6-inch AMOLED',
            'Processor': 'Snapdragon 8 Gen 2',
            'RAM': '12GB',
            'Storage': '256GB'
        },
        options: {
            color: ['Graphite', 'Beige']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1428',
        name: 'Nothing Phone (2)',
        description: 'Flagship phone with Glyph Interface and Snapdragon 8+ Gen 1.',
        price: 45999,
        originalPrice: 49999,
        category: 'electronics',
        subcategory: 'mobiles',
        brand: 'Nothing',
        rating: 4.5,
        reviewCount: 510,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuUNgqYHdnM1la-Lk3NE87KPVBAPL-eAaFg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-gOfa3rXY34l2ENGautZWaYRgSHqmlN4Ew&s'
        ],
        features: [
            'Glyph Interface',
            'Snapdragon 8+ Gen 1',
            '6.7-inch OLED 120Hz',
            '50MP dual camera'
        ],
        specifications: {
            'Processor': 'Snapdragon 8+ Gen 1',
            'RAM': '12GB',
            'Storage': '256GB',
            'Battery': '4700mAh'
        },
        options: {
            color: ['White', 'Dark Grey']
        },
        inStock: true,
        stockCount: 26,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1429',
        name: 'Marshall Stanmore III Bluetooth Speaker',
        description: 'Premium home Bluetooth speaker with iconic design and sound.',
        price: 39999,
        originalPrice: 42999,
        category: 'electronics',
        subcategory: 'audio',
        brand: 'Marshall',
        rating: 4.7,
        reviewCount: 850,
        images: [
            'https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b10e6e5-aa02-441f-a475-7d463cb300b6.__CR0,0,600,450_PT0_SX600_V1___.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyCBEWDeio6P7GcO--MholZ7blT5h0hc3Gg&s'
        ],
        features: [
            'Classic Marshall design',
            'Rich sound',
            'Bluetooth 5.2',
            'Customizable EQ'
        ],
        specifications: {
            'Power': '80W',
            'Connectivity': 'Bluetooth 5.2, AUX',
            'Weight': '4.25kg',
            'Frequency': '45Hz–20kHz'
        },
        options: {
            color: ['Black', 'Cream']
        },
        inStock: true,
        stockCount: 32,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1430',
        name: 'Logitech MX Mechanical Keyboard',
        description: 'Wireless mechanical keyboard with smart backlighting.',
        price: 18999,
        originalPrice: 19999,
        category: 'electronics',
        subcategory: 'accessories',
        brand: 'Logitech',
        rating: 4.8,
        reviewCount: 2100,
        images: [
            'https://m.media-amazon.com/images/I/61tDcFtU5NL._UF1000,1000_QL80_.jpg',
            'https://rukminim2.flixcart.com/image/704/844/l5jxt3k0/keyboard/multi-device-keyboard/p/u/x/mx-keys-mechanical-logitech-original-imagg7ftgvr82pnx.jpeg?q=90&crop=false'
        ],
        features: [
            'Low-profile mechanical switches',
            'Smart backlighting',
            'Multi-device pairing',
            'USB-C fast charging'
        ],
        specifications: {
            'Switch Type': 'Tactile Quiet',
            'Battery Life': '15 days (backlight on)',
            'Connectivity': 'Bluetooth, USB-C',
            'Layout': 'Full size'
        },
        options: {
            color: ['Graphite']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    // Sports Products
    {
        id: '4001',
        name: 'Wilson Evolution Basketball',
        description: 'Top-rated indoor basketball with a soft feel and excellent grip.',
        price: 59.99,
        originalPrice: 69.99,
        category: 'sports',
        subcategory: 'basketball',
        brand: 'Wilson',
        rating: 4.8,
        reviewCount: 3200,
        images: [
            'https://m.media-amazon.com/images/I/819hY6qLC0L._UF350,350_QL80_.jpg',
            'https://i.ytimg.com/vi/hg3r9qd7tvk/maxresdefault.jpg'
        ],
        features: [
            'Cushion Core Technology',
            'NFHS approved',
            'Moisture-wicking cover',
            'Official size 7'
        ],
        specifications: {
            'Size': '29.5 inches',
            'Material': 'Composite Leather',
            'Weight': '1.4 lbs'
        },
        options: {
            color: ['Orange']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '4002',
        name: 'Adidas Predator Soccer Ball',
        description: 'Durable soccer ball for training and matches, FIFA quality certified.',
        price: 34.99,
        originalPrice: 39.99,
        category: 'sports',
        subcategory: 'soccer',
        brand: 'Adidas',
        rating: 4.6,
        reviewCount: 2100,
        images: [
            'https://m.media-amazon.com/images/I/61k5MCM73cL.jpg',
            'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2496094/2018/2/27/11519727973523-Men-Adidas-Footballs-5011519727973177-1.jpg'
        ],
        features: [
            'Thermally bonded seamless surface',
            'FIFA Quality Pro',
            'Butyl bladder for best air retention'
        ],
        specifications: {
            'Size': '5',
            'Material': 'Polyurethane',
            'Weight': '0.9 lbs'
        },
        options: {
            color: ['White/Black/Red']
        },
        inStock: true,
        stockCount: 30,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '4003',
        name: 'Yonex Badminton Racket',
        description: 'Lightweight graphite racket for advanced players, excellent control and power.',
        price: 89.99,
        originalPrice: 99.99,
        category: 'sports',
        subcategory: 'badminton',
        brand: 'Yonex',
        rating: 4.7,
        reviewCount: 1500,
        images: [
            'https://images-cdn.ubuy.co.in/633b110f2b42c41fd11cd60f-yonex-gr-303-badminton-racket-2018.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpu4STpD8ynsJklCAaIzbU2nDEBx3JLtbfg&s'
        ],
        features: [
            'Graphite frame',
            'Isometric head shape',
            'Control support cap'
        ],
        specifications: {
            'Weight': '85g',
            'Balance': 'Even',
            'String Tension': '24 lbs'
        },
        options: {
            color: ['Blue', 'Red']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1004',
        name: 'Nike Running Shoes',
        description: 'Breathable, lightweight running shoes for men and women.',
        price: 119.99,
        originalPrice: 139.99,
        category: 'sports',
        subcategory: 'shoes',
        brand: 'Nike',
        rating: 4.5,
        reviewCount: 2500,
        images: [
            'https://media.gq.com/photos/671bb5124618127199933a38/16:9/w_1280,c_limit/nikesneakerslede.png?mbid=social_retweet',
            'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c6249d7d-3e7d-4a65-a9c2-92564918b393/NIKE+REACTX+PEGASUS+TRAIL+5.png'
        ],
        features: [
            'Mesh upper',
            'Foam midsole',
            'Rubber outsole',
            'Available in multiple colors'
        ],
        specifications: {
            'Sizes': '6-12',
            'Material': 'Mesh/Foam/Rubber',
            'Weight': '0.7 lbs'
        },
        options: {
            color: ['Black', 'White', 'Blue']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1005',
        name: 'Fitbit Charge 5',
        description: 'Advanced fitness tracker with built-in GPS, heart rate monitor, and sleep tracking.',
        price: 149.99,
        originalPrice: 179.99,
        category: 'sports',
        subcategory: 'fitness',
        brand: 'Fitbit',
        rating: 4.4,
        reviewCount: 1800,
        images: [
            'https://cdn.mos.cms.futurecdn.net/H4L3c2KiX7pSH7WFExBkrA.jpg',
            'https://rukminim2.flixcart.com/image/704/844/kzd147k0/smartwatch/7/3/3/34-android-charge-5-fitbit-no-original-imagbe3qrbr4vzfv.jpeg?q=90&crop=false'
        ],
        features: [
            'Built-in GPS',
            'Heart rate monitor',
            'Sleep tracking',
            'Water resistant'
        ],
        specifications: {
            'Battery Life': '7 days',
            'Display': 'AMOLED',
            'Compatibility': 'iOS/Android'
        },
        options: {
            color: ['Black', 'Steel Blue', 'Lunar White']
        },
        inStock: true,
        stockCount: 28,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 1
        }
    },
    {
        id: '1006',
        name: 'Adidas Predator Soccer Ball',
        description: 'Durable, machine-stitched football for training and matches.',
        price: 2499,
        originalPrice: 2999,
        category: 'sports',
        subcategory: 'equipment',
        brand: 'Adidas',
        rating: 4.6,
        reviewCount: 890,
        images: [
            'https://brand.assets.adidas.com/image/upload/global_football_evergreen_always_on_evergreen_ss25_launch_plp_all_football_statement_card_women_m_591aaa0d07.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWMUFvj2tCI_skYljkcrEdAJSDs6XEJCxdQ&s'
        ],
        features: [
            'Durable machine stitching',
            'Excellent grip and control',
            'Official size 5'
        ],
        specifications: {
            'Material': 'TPU',
            'Size': '5',
            'Weight': '420g'
        },
        options: {
            color: ['White/Black', 'Red/Yellow']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1007',
        name: 'Yonex Astrox 100ZZ Badminton Racket',
        description: 'Professional racket for advanced players with enhanced smash power.',
        price: 13999,
        originalPrice: 15999,
        category: 'sports',
        subcategory: 'badminton',
        brand: 'Yonex',
        rating: 4.8,
        reviewCount: 650,
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2025/2/491424774/DB/JV/NF/111972645/yonex-astrox-100zz-badminton-racket-500x500.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71XJ--pia+L.jpg'
        ],
        features: [
            'Rotational generator system',
            'Extra slim shaft',
            'Balanced for power and speed'
        ],
        specifications: {
            'Material': 'High-modulus graphite',
            'Weight': '83g',
            'Grip Size': 'G4'
        },
        options: {
            color: ['Black', 'Blue']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1008',
        name: 'Puma Training Gloves',
        description: 'Comfortable padded gym gloves for weightlifting and training.',
        price: 1499,
        originalPrice: 1799,
        category: 'sports',
        subcategory: 'fitness',
        brand: 'Puma',
        rating: 4.4,
        reviewCount: 420,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKF_aIdIz9u1ZP4EJ4Kbo486kGlDbN2btSyw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLpOfmYFGvoNi3OVL1HbwJ-4N709eVyyn5eSjUJCq2ZOs5MbMk34mZ-S9wV9matuqR28&usqp=CAU'
        ],
        features: [
            'Padded palms',
            'Breathable material',
            'Adjustable wrist strap'
        ],
        specifications: {
            'Material': 'Polyester/Spandex',
            'Size': 'M/L/XL',
            'Weight': '200g'
        },
        options: {
            size: ['M', 'L', 'XL']
        },
        inStock: true,
        stockCount: 60,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1009',
        name: 'Nivia Shatranj Basketball',
        description: 'Official size basketball suitable for both indoor and outdoor play.',
        price: 1999,
        originalPrice: 2399,
        category: 'sports',
        subcategory: 'basketball',
        brand: 'Nivia',
        rating: 4.5,
        reviewCount: 770,
        images: [
            'https://www.niviasports.com/cdn/shop/files/N-Category-Basketball-Sub_Category-Basketball-Image-01-New-Updated.webp?v=1754570398&width=1920',
            'https://rukminim2.flixcart.com/image/480/640/xif0q/ball/c/k/t/650-700-engraver-7-24-1-bb-n201-basketball-nivia-original-imah6cgbnw4chgaw.jpeg?q=90'
        ],
        features: [
            'Deep channel design',
            'Durable rubber cover',
            'Good grip and bounce'
        ],
        specifications: {
            'Size': '7',
            'Material': 'Rubber',
            'Weight': '600g'
        },
        options: {
            color: ['Orange']
        },
        inStock: true,
        stockCount: 32,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1010',
        name: 'Decathlon Yoga Mat 6mm',
        description: 'Eco-friendly yoga mat with extra cushioning for comfort.',
        price: 1999,
        originalPrice: 2499,
        category: 'sports',
        subcategory: 'yoga',
        brand: 'Decathlon',
        rating: 4.7,
        reviewCount: 1150,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xvM43Fu1elw8AF6fTGpSz7DM_njMnnuu5Q&s',
            'https://contents.mediadecathlon.com/p2295385/104d0c3d466bd29f45ab6ed64ecd6b6b/p2295385.jpg'
        ],
        features: [
            'Non-slip surface',
            '6mm thick cushioning',
            'Lightweight and portable'
        ],
        specifications: {
            'Material': 'TPE',
            'Thickness': '6mm',
            'Size': '183 x 61 cm'
        },
        options: {
            color: ['Blue', 'Green', 'Purple']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1011',
        name: 'SG Cricket Bat RSD Xtreme',
        description: 'English willow cricket bat designed for powerful strokes.',
        price: 7999,
        originalPrice: 8999,
        category: 'sports',
        subcategory: 'cricket',
        brand: 'SG',
        rating: 4.6,
        reviewCount: 980,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrBYchwef-DVOE_4vF99zyk4R7YLPmd7ygA&s',
            'https://5.imimg.com/data5/SELLER/Default/2023/11/358093128/WM/LP/AQ/2100883/sg-rsd-xtreme-english-willow-cricket-bat.jpg'
        ],
        features: [
            'English willow blade',
            'Thick edges',
            'Lightweight pickup'
        ],
        specifications: {
            'Material': 'English willow',
            'Weight': '1.2 kg',
            'Size': 'Full size'
        },
        options: {
            size: ['Short Handle']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '1012',
        name: 'Speedo Swim Goggles',
        description: 'Anti-fog swimming goggles with UV protection.',
        price: 1499,
        originalPrice: 1799,
        category: 'sports',
        subcategory: 'swimming',
        brand: 'Speedo',
        rating: 4.5,
        reviewCount: 560,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaKFjw3uK16Acp5M5wQZeVltp48DEMZ8mGA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwy9shT4pQm-6l2V9RKTPn8k8F7zaFkoSRqA&s'
        ],
        features: [
            'UV protection',
            'Anti-fog coating',
            'Adjustable straps'
        ],
        specifications: {
            'Lens': 'Polycarbonate',
            'Strap': 'Silicone',
            'Weight': '150g'
        },
        options: {
            color: ['Blue', 'Black']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1013',
        name: 'Reebok Resistance Bands Set',
        description: 'Set of 3 resistance bands for strength and flexibility training.',
        price: 1799,
        originalPrice: 2199,
        category: 'sports',
        subcategory: 'fitness',
        brand: 'Reebok',
        rating: 4.6,
        reviewCount: 480,
        images: [
            'https://m.media-amazon.com/images/I/51s-wxfWkbL._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpvuGDE94prIVs2uWc1HDIxJg-xrhnB0A-w&s'
        ],
        features: [
            '3 resistance levels',
            'Durable elastic material',
            'Compact and portable'
        ],
        specifications: {
            'Material': 'Latex',
            'Levels': 'Light, Medium, Heavy',
            'Length': '120 cm'
        },
        options: {
            color: ['Multi-color']
        },
        inStock: true,
        stockCount: 55,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1014',
        name: 'Cosco Volleyball Tournament',
        description: 'Professional volleyball for indoor and outdoor tournaments.',
        price: 1799,
        originalPrice: 2199,
        category: 'sports',
        subcategory: 'volleyball',
        brand: 'Cosco',
        rating: 4.4,
        reviewCount: 330,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_gUSYtbWG7iG-cal5TUAcbDg-PgMnsph3w&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDXqHQR6xVwqtu9yklEPKWLPpx4_zP_nDfg&s'
        ],
        features: [
            'Official size and weight',
            'Synthetic leather cover',
            'Butyl bladder for air retention'
        ],
        specifications: {
            'Size': '5',
            'Material': 'Synthetic leather',
            'Weight': '270g'
        },
        options: {
            color: ['White/Blue', 'White/Yellow']
        },
        inStock: true,
        stockCount: 36,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1015',
        name: 'Under Armour Duffle Gym Bag',
        description: 'Spacious duffle bag with compartments for shoes and gear.',
        price: 3499,
        originalPrice: 3999,
        category: 'sports',
        subcategory: 'accessories',
        brand: 'Under Armour',
        rating: 4.7,
        reviewCount: 610,
        images: [
            'https://m.media-amazon.com/images/I/51jrUoxdCFL._UY1100_.jpg',
            'https://images-cdn.ubuy.co.in/6380b935a9c74d63713ce963-under-armour-large-duffle-bag-undeniable.jpg'
        ],
        features: [
            'Water-resistant fabric',
            'Multiple compartments',
            'Adjustable shoulder strap'
        ],
        specifications: {
            'Material': 'Polyester',
            'Capacity': '45L',
            'Size': '24 x 12 x 11 inches'
        },
        options: {
            color: ['Black', 'Red']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1016',
        name: 'Asics Gel-Kayano 30 Running Shoes',
        description: 'Premium stability running shoes with advanced cushioning technology.',
        price: 12999,
        originalPrice: 14999,
        category: 'sports',
        subcategory: 'shoes',
        brand: 'Asics',
        rating: 4.8,
        reviewCount: 920,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgG7rc1ToVl8UOtETYm2e1YpVmlQey9Lokg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_T1OJvl2FjjXuRBFSMhlmXMOM_s8nTyRgQ&s'
        ],
        features: [
            'Gel cushioning',
            'Breathable mesh upper',
            'Durable outsole'
        ],
        specifications: {
            'Sizes': '6-12',
            'Material': 'Mesh/Synthetic',
            'Weight': '0.85 lbs'
        },
        options: {
            color: ['Black', 'Grey', 'Blue']
        },
        inStock: true,
        stockCount: 42,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1017',
        name: 'Decathlon Kettlebell 16kg',
        description: 'Durable cast iron kettlebell for strength training and crossfit.',
        price: 3999,
        originalPrice: 4599,
        category: 'sports',
        subcategory: 'fitness',
        brand: 'Decathlon',
        rating: 4.6,
        reviewCount: 740,
        images: [
            'https://contents.mediadecathlon.com/p2943060/2c9e244391e124d0dc723f5cc70728b1/p2943060.jpg',
            'https://i.ytimg.com/vi/CRCxj4_flrc/sddefault.jpg'
        ],
        features: [
            'Ergonomic handle',
            'Flat base for stability',
            'Durable coating'
        ],
        specifications: {
            'Weight': '16kg',
            'Material': 'Cast Iron',
            'Finish': 'Powder-coated'
        },
        options: {
            size: ['8kg', '12kg', '16kg', '20kg']
        },
        inStock: true,
        stockCount: 55,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1018',
        name: 'SS Cricket Batting Pads',
        description: 'Lightweight cricket batting pads with high protection.',
        price: 2999,
        originalPrice: 3499,
        category: 'sports',
        subcategory: 'cricket',
        brand: 'SS',
        rating: 4.5,
        reviewCount: 310,
        images: [
            'https://www.sstoncricket.com/wp-content/uploads/2023/05/player_edition_batting_pad_1.jpg',
            'https://www.sstoncricket.com/wp-content/uploads/2023/05/IMG-20250407-WA0027.jpg'
        ],
        features: [
            'Lightweight design',
            'High-density foam',
            'Durable outer material'
        ],
        specifications: {
            'Material': 'PU + Foam',
            'Size': 'Adult',
            'Weight': '1.2 kg'
        },
        options: {
            size: ['Adult', 'Youth']
        },
        inStock: true,
        stockCount: 28,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '1019',
        name: 'Butterfly Timo Boll Table Tennis Bat',
        description: 'Professional table tennis bat with ITTF approved rubber.',
        price: 5499,
        originalPrice: 5999,
        category: 'sports',
        subcategory: 'table tennis',
        brand: 'Butterfly',
        rating: 4.7,
        reviewCount: 280,
        images: [
            'https://m.media-amazon.com/images/I/61ihyYpLFmL._UF894,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/61ihyYpLFmL._UF894,1000_QL80_.jpg'
        ],
        features: [
            'ITTF approved',
            'Excellent spin and speed',
            'Ergonomic handle'
        ],
        specifications: {
            'Material': 'Wood + Rubber',
            'Weight': '180g',
            'Grip': 'Flared'
        },
        options: {
            color: ['Red/Black']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1020',
        name: 'Yonex Mavis 350 Nylon Shuttlecock',
        description: 'Durable nylon shuttlecocks ideal for practice and matches.',
        price: 899,
        originalPrice: 1099,
        category: 'sports',
        subcategory: 'badminton',
        brand: 'Yonex',
        rating: 4.6,
        reviewCount: 950,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0D1QBm-FyfNdr7M56QGvKlvSzocOMdwudiA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5yNTQUwBCSf1SXUWeInnNGIE-j8tmzrX4Q&s'
        ],
        features: [
            'Durable nylon skirt',
            'Consistent flight',
            'Tube of 6'
        ],
        specifications: {
            'Material': 'Nylon',
            'Pack': '6',
            'Speed': 'Medium'
        },
        options: {
            color: ['White', 'Yellow']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1021',
        name: 'Babolat Pure Drive Tennis Racket',
        description: 'High-performance tennis racket with excellent power and spin.',
        price: 16999,
        originalPrice: 18999,
        category: 'sports',
        subcategory: 'tennis',
        brand: 'Babolat',
        rating: 4.8,
        reviewCount: 430,
        images: [
            'https://m.media-amazon.com/images/I/61ckRkpi20L._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXb3OEHOeZGUkDN4VJ6S86B79z1s2kqiG_Q&s'
        ],
        features: [
            'Woofer technology',
            'Lightweight frame',
            'Optimized string pattern'
        ],
        specifications: {
            'Material': 'Graphite',
            'Weight': '300g',
            'Grip Size': 'G3'
        },
        options: {
            grip: ['G2', 'G3', 'G4']
        },
        inStock: true,
        stockCount: 22,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1022',
        name: 'Nike Pro Training Shorts',
        description: 'Lightweight, sweat-wicking shorts designed for gym and running.',
        price: 2499,
        originalPrice: 2999,
        category: 'sports',
        subcategory: 'apparel',
        brand: 'Nike',
        rating: 4.4,
        reviewCount: 510,
        images: [
            'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fd9ff98f-d59b-4f92-ba88-d592785b3e79/AS+M+NP+DF+NPT+6IN+SHORT.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Hc2gATh_zWrKsLIwYnHGfMJSjRzAH8pelQ&s'
        ],
        features: [
            'Sweat-wicking fabric',
            'Breathable design',
            'Elastic waistband'
        ],
        specifications: {
            'Material': 'Polyester/Spandex',
            'Sizes': 'S, M, L, XL',
            'Fit': 'Slim'
        },
        options: {
            size: ['S', 'M', 'L', 'XL']
        },
        inStock: true,
        stockCount: 60,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1023',
        name: 'Wilson US Open Tennis Balls',
        description: 'Official US Open tennis balls approved by USTA and ITF.',
        price: 799,
        originalPrice: 999,
        category: 'sports',
        subcategory: 'tennis',
        brand: 'Wilson',
        rating: 4.7,
        reviewCount: 670,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppB8Bqzha_VyJNXNaNB_OTVg3Z4_1r2zzlA&s',
            'https://grandstandsports.ie/cdn/shop/files/image_806dead3-9967-4cf2-967a-86a932089086_600x.jpg?v=1684422860'
        ],
        features: [
            'Durable felt',
            'Excellent bounce',
            'Pack of 3'
        ],
        specifications: {
            'Material': 'Felt + Rubber',
            'Pack': '3 balls',
            'Weight': '58g each'
        },
        options: {
            pack: ['3', '6', '12']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1024',
        name: 'Nivia Football Studs',
        description: 'Durable football shoes with excellent grip on turf and grass.',
        price: 1799,
        originalPrice: 2199,
        category: 'sports',
        subcategory: 'shoes',
        brand: 'Nivia',
        rating: 4.3,
        reviewCount: 540,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/q/f/0/-original-imaghtdhnufqn7vv.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/m/k/1/-original-imah6hy2zgfgssdz.jpeg?q=90&crop=false'
        ],
        features: [
            'PVC sole for grip',
            'Synthetic leather upper',
            'Lightweight design'
        ],
        specifications: {
            'Sizes': '6-11',
            'Material': 'Synthetic',
            'Weight': '0.9 lbs'
        },
        options: {
            color: ['Black/White', 'Blue/Yellow']
        },
        inStock: true,
        stockCount: 48,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1025',
        name: 'Li-Ning Badminton Kit Bag',
        description: 'Spacious badminton kit bag with multiple compartments.',
        price: 2999,
        originalPrice: 3599,
        category: 'sports',
        subcategory: 'accessories',
        brand: 'Li-Ning',
        rating: 4.5,
        reviewCount: 400,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgb34x-Ssu297acQmejLmfeho_p3tCKiiUOw&s',
            'https://rukminim2.flixcart.com/image/300/300/xif0q/sport-bag/d/7/h/mf-0010-m-mf-0010-kit-bag-chilz-30-badminton-original-imah3pyyzarshzyz.jpeg'
        ],
        features: [
            'Large main compartment',
            'Separate shoe pocket',
            'Comfortable straps'
        ],
        specifications: {
            'Material': 'Polyester',
            'Capacity': '3 rackets + gear',
            'Weight': '1.2 kg'
        },
        options: {
            color: ['Black', 'Red']
        },
        inStock: true,
        stockCount: 30,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1026',
        name: 'Everlast Boxing Gloves 12oz',
        description: 'Durable boxing gloves with extra padding for safety and comfort.',
        price: 3499,
        originalPrice: 3999,
        category: 'sports',
        subcategory: 'boxing',
        brand: 'Everlast',
        rating: 4.6,
        reviewCount: 610,
        images: [
            'https://m.media-amazon.com/images/I/61x4IKjoHLL._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKokNOYRPoWeHnHZAGlKqkN-xXQhO3kjmrsg&s'
        ],
        features: [
            'Multi-layer foam padding',
            'Ventilated palms',
            'Adjustable wrist straps'
        ],
        specifications: {
            'Material': 'Synthetic leather',
            'Weight': '12oz',
            'Size': 'Adult'
        },
        options: {
            color: ['Red', 'Black']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '1027',
        name: 'SS Cricket Helmet',
        description: 'Protective cricket helmet with grill for maximum safety.',
        price: 2499,
        originalPrice: 2999,
        category: 'sports',
        subcategory: 'cricket',
        brand: 'SS',
        rating: 4.4,
        reviewCount: 370,
        images: [
            'https://crowncricketer.com/wp-content/uploads/2024/03/ss-pro-premium-helmet.webp',
            'https://www.sstoncricket.com/wp-content/uploads/2023/07/2R9A9424-scaled.jpg'
        ],
        features: [
            'ISI certified',
            'Adjustable straps',
            'Comfortable padding'
        ],
        specifications: {
            'Material': 'ABS plastic + Steel grill',
            'Size': 'Adult',
            'Weight': '900g'
        },
        options: {
            color: ['Blue', 'Black']
        },
        inStock: true,
        stockCount: 33,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1028',
        name: 'SG Wicket Keeping Gloves',
        description: 'Professional wicket keeping gloves with superior grip.',
        price: 3499,
        originalPrice: 3999,
        category: 'sports',
        subcategory: 'cricket',
        brand: 'SG',
        rating: 4.6,
        reviewCount: 210,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/k5y7tzk0/sport-glove/p/j/c/left-right-gloves-test-wicket-keeping-men-size-9-100-7-5-inner-original-imaeyddyyhjgzyqc.jpeg?q=20&crop=false',
            'https://m.media-amazon.com/images/I/912ouMr6a6L.jpg'
        ],
        features: [
            'High-quality leather',
            'Cushioned palm',
            'Superior grip'
        ],
        specifications: {
            'Material': 'Leather',
            'Size': 'Adult',
            'Weight': '450g'
        },
        options: {
            color: ['Green/White']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1029',
        name: 'Under Armour Compression Shirt',
        description: 'High-performance compression shirt for training and recovery.',
        price: 2999,
        originalPrice: 3599,
        category: 'sports',
        subcategory: 'apparel',
        brand: 'Under Armour',
        rating: 4.5,
        reviewCount: 260,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JOHB-jnn7Mgdw7Or7-ib4UvHZtSkWm1M6A&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW5OFeCcYkhl3BTNFDlaYmcG1V7mjt62AEQ&s'
        ],
        features: [
            'Moisture-wicking fabric',
            'Compression fit',
            'Quick-dry material'
        ],
        specifications: {
            'Material': 'Polyester/Elastane',
            'Sizes': 'S-XL',
            'Fit': 'Tight'
        },
        options: {
            size: ['S', 'M', 'L', 'XL']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1030',
        name: 'Nerf Vortex Aero Howler',
        description: 'Fun outdoor sports toy football with whistle sound in flight.',
        price: 1299,
        originalPrice: 1599,
        category: 'sports',
        subcategory: 'toys',
        brand: 'Nerf',
        rating: 4.7,
        reviewCount: 520,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvY6tikbX0Lt9Jft-GmtYRHarsg7E4vQ1DQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMTYH1b1XYELlTG7gLh_eYuue4KLGfna3RLl58KjTfSbHzUCTLP6QlfuyRcqQZfhAQ6I&usqp=CAU'
        ],
        features: [
            'Whistle sound in flight',
            'Soft foam construction',
            'Easy grip'
        ],
        specifications: {
            'Material': 'Foam',
            'Size': 'Standard',
            'Weight': '200g'
        },
        options: {
            color: ['Blue/Green', 'Red/Yellow']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },

    // Toys Products
    {
        id: '1101',
        name: 'LEGO Classic Bricks Set',
        description: 'A large box of classic LEGO bricks for creative building fun.',
        price: 490.99,
        originalPrice: 1000.99,
        category: 'toys',
        subcategory: 'building',
        brand: 'LEGO',
        rating: 4.9,
        reviewCount: 5000,
        images: [
            'https://images-cdn.ubuy.co.in/63484a045032f952f25c2f6e-lego-classic-bricks-set-10717-1500.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9t_AWFQMlJRoiSsbAYTD0POLH_qxZbhG8g&s'
        ],
        features: [
            '1000+ pieces',
            'Compatible with all LEGO sets',
            'Encourages creativity'
        ],
        specifications: {
            'Pieces': '1000+',
            'Material': 'Plastic',
            'Age': '4+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1102',
        name: 'Barbie Dreamhouse',
        description: 'Three-story Barbie Dreamhouse with furniture, lights, and sounds.',
        price: 199.99,
        originalPrice: 229.99,
        category: 'toys',
        subcategory: 'dolls',
        brand: 'Barbie',
        rating: 4.7,
        reviewCount: 3200,
        images: [
            'https://i.ytimg.com/vi/dcD0Ww1jf9M/maxresdefault.jpg',
            'https://hips.hearstapps.com/hmg-prod/images/01-ken-s-dreamhouse-airbnb-exterior-credit-hogwash-studios-649af4cad3562.jpg?crop=0.669xw:1.00xh;0.119xw,0&resize=640:*'
        ],
        features: [
            'Three stories',
            '70+ accessories',
            'Lights and sounds',
            'Working elevator'
        ],
        specifications: {
            'Height': '3 feet',
            'Material': 'Plastic',
            'Age': '3+'
        },
        options: {
            color: ['Pink']
        },
        inStock: true,
        stockCount: 15,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1103',
        name: 'Hot Wheels Mega Garage',
        description: 'Multi-level garage playset with ramps, car wash, and parking for 35+ cars.',
        price: 69.99,
        originalPrice: 79.99,
        category: 'toys',
        subcategory: 'vehicles',
        brand: 'Hot Wheels',
        rating: 4.8,
        reviewCount: 2100,
        images: [
            'https://m.media-amazon.com/images/I/81q94ZM9zjL.jpg',
            'https://m.media-amazon.com/images/I/81SFJHWjs+L.jpg'
        ],
        features: [
            'Multi-level garage',
            'Fits 35+ cars',
            'Includes 1 Hot Wheels car',
            'Car wash and ramps'
        ],
        specifications: {
            'Levels': '4',
            'Material': 'Plastic',
            'Age': '5+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1104',
        name: 'Nerf Elite Blaster',
        description: 'High-capacity Nerf blaster with 30 foam darts and rapid-fire action.',
        price: 390.99,
        originalPrice: 990.99,
        category: 'toys',
        subcategory: 'blasters',
        brand: 'Nerf',
        rating: 4.6,
        reviewCount: 1800,
        images: [
            'https://m.media-amazon.com/images/I/81AZSPkt81L.jpg',
            'https://i.ytimg.com/vi/WqjQK6eitSo/sddefault.jpg'
        ],
        features: [
            '30 foam darts',
            'Rapid-fire',
            'Easy reload',
            'Ages 8+'
        ],
        specifications: {
            'Darts': '30',
            'Material': 'Plastic',
            'Age': '8+'
        },
        options: {
            color: ['Blue', 'Orange']
        },
        inStock: true,
        stockCount: 40,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1105',
        name: 'Play-Doh 36-Pack',
        description: '36 cans of colorful Play-Doh for endless creative fun.',
        price: 290.99,
        originalPrice: 674.99,
        category: 'toys',
        subcategory: 'arts',
        brand: 'Play-Doh',
        rating: 4.9,
        reviewCount: 2200,
        images: [
            'https://i.ytimg.com/vi/iulVGA6z-Co/maxresdefault.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hbNe7ezjZN8nzRN8KQN1CfhGN1U83OjkPg&s'
        ],
        features: [
            '36 colors',
            'Non-toxic',
            'Reusable cans',
            'Ages 2+'
        ],
        specifications: {
            'Cans': '36',
            'Material': 'Non-toxic compound',
            'Age': '2+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1106',
        name: 'Fisher-Price Laugh & Learn Puppy',
        description: 'Interactive plush puppy that teaches letters, numbers, and songs.',
        price: 34.99,
        originalPrice: 39.99,
        category: 'toys',
        subcategory: 'learning',
        brand: 'Fisher-Price',
        rating: 4.8,
        reviewCount: 2800,
        images: [
            'https://m.media-amazon.com/images/I/71M9jsP2KTL.jpg',
            'https://image.smythstoys.com/original/mobile/245762.jpg'
        ],
        features: [
            'Teaches ABCs & 123s',
            '75+ songs and sounds',
            'Soft and cuddly'
        ],
        specifications: {
            'Material': 'Plush + Electronics',
            'Batteries': '3 AA',
            'Age': '6M+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1107',
        name: 'Melissa & Doug Wooden Train Set',
        description: '100-piece wooden railway set with tracks, trains, and accessories.',
        price: 79.99,
        originalPrice: 89.99,
        category: 'toys',
        subcategory: 'trains',
        brand: 'Melissa & Doug',
        rating: 4.9,
        reviewCount: 1900,
        images: [
            'https://m.media-amazon.com/images/I/81DxL8M5ptL._UF1000,1000_QL80_.jpg',
            'https://www.melissaanddoug.com/cdn/shop/files/00dd8174149ae9474f1247446d9ea63a7c88591b.jpg?v=1720547556&width=750'
        ],
        features: [
            '100 wooden pieces',
            'Compatible with major brands',
            'Encourages creativity'
        ],
        specifications: {
            'Pieces': '100',
            'Material': 'Wood',
            'Age': '3+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1108',
        name: 'Marvel Avengers Action Figures Set',
        description: 'Set of 6 Avengers superhero action figures.',
        price: 590.99,
        originalPrice: 690.99,
        category: 'toys',
        subcategory: 'action figures',
        brand: 'Marvel',
        rating: 4.7,
        reviewCount: 1500,
        images: [
            'https://m.media-amazon.com/images/I/91bUzi0wJ9L._UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/91ziVn0mB+L._AC_SL1500_.jpg'
        ],
        features: [
            'Includes 6 figures',
            'Posable joints',
            'Detailed design'
        ],
        specifications: {
            'Height': '6 inches',
            'Material': 'Plastic',
            'Age': '4+'
        },
        options: {
            set: ['Avengers Pack']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1109',
        name: 'UNO Card Game',
        description: 'Classic family card game with fast-paced play.',
        price: 9.99,
        originalPrice: 12.99,
        category: 'toys',
        subcategory: 'games',
        brand: 'Mattel',
        rating: 4.9,
        reviewCount: 10000,
        images: [
            'https://m.media-amazon.com/images/I/21H3q3+OAXL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDCNwFy2eITY1BALPD0v7ePlofcBUUjj4ZJEzSA2Kv8pWk2lVF7z_kOEpmXAjDiiC_Tg&usqp=CAU'
        ],
        features: [
            'Easy to learn',
            'Fun for all ages',
            '2-10 players'
        ],
        specifications: {
            'Players': '2-10',
            'Material': 'Cardboard',
            'Age': '7+'
        },
        options: {
            edition: ['Standard', 'Deluxe']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1110',
        name: 'Monopoly Classic Board Game',
        description: 'The world-famous property trading board game.',
        price: 24.99,
        originalPrice: 29.99,
        category: 'toys',
        subcategory: 'board games',
        brand: 'Hasbro',
        rating: 4.8,
        reviewCount: 9000,
        images: [
            'https://images-cdn.ubuy.co.in/6341e06152754005e6352478-monopoly-classic-replacement-board-by.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VtBehb4KzZONr_rVHkfynwyp4silziObmr75-toVNoKqFNFLhrJfOIblGwN8S2NXq-g&usqp=CAU'
        ],
        features: [
            'Classic gameplay',
            '2-6 players',
            'Family fun'
        ],
        specifications: {
            'Players': '2-6',
            'Material': 'Cardboard + Plastic',
            'Age': '8+'
        },
        options: {
            edition: ['Classic', 'Deluxe']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Classic'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1111',
        name: 'Ravensburger 1000 Piece Puzzle',
        description: 'Premium 1000-piece jigsaw puzzle with beautiful artwork.',
        price: 190.99,
        originalPrice: 240.99,
        category: 'toys',
        subcategory: 'puzzles',
        brand: 'Ravensburger',
        rating: 4.9,
        reviewCount: 3100,
        images: [
            'https://m.media-amazon.com/images/I/711nIm8wENL.jpg',
            'https://m.media-amazon.com/images/I/61LQos5R2IL.jpg'
        ],
        features: [
            '1000 high-quality pieces',
            'Softclick technology',
            'Challenging & fun'
        ],
        specifications: {
            'Pieces': '1000',
            'Material': 'Cardboard',
            'Age': '12+'
        },
        options: {
            theme: ['Nature', 'Cityscape', 'Art']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1112',
        name: 'Tonka Steel Mighty Dump Truck',
        description: 'Classic durable dump truck toy built with steel.',
        price: 390.99,
        originalPrice: 440.99,
        category: 'toys',
        subcategory: 'vehicles',
        brand: 'Tonka',
        rating: 4.8,
        reviewCount: 1700,
        images: [
            'https://m.media-amazon.com/images/I/913YHZ1ZVFL._UF350,350_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXULfxS1Tk-Ywuhq1GHlpEwu9btyC4rdLpDnIXMTmz7qtc4QtMxfQcxXI7ZStOZbDGUAI&usqp=CAU'
        ],
        features: [
            'Real steel construction',
            'Working dump bed',
            'Built to last'
        ],
        specifications: {
            'Material': 'Steel + Plastic',
            'Dimensions': '17 inches',
            'Age': '3+'
        },
        options: {
            color: ['Yellow']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Classic'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '1113',
        name: 'Catan Board Game',
        description: 'Strategy board game of trading and building settlements.',
        price: 490.99,
        originalPrice: 540.99,
        category: 'toys',
        subcategory: 'board games',
        brand: 'Catan Studio',
        rating: 4.8,
        reviewCount: 6000,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnmfP_uyjn58NrtSapys33hGwwXtXUxw5yA&s',
            'https://images.theconversation.com/files/567624/original/file-20240102-19-2tzi0o.jpg?ixlib=rb-4.1.0&rect=46%2C770%2C5145%2C2572&q=45&auto=format&w=1356&h=668&fit=crop'
        ],
        features: [
            'Strategy & negotiation',
            '3-4 players',
            'Award-winning game'
        ],
        specifications: {
            'Players': '3-4',
            'Material': 'Cardboard + Plastic',
            'Age': '10+'
        },
        options: {
            edition: ['Standard', 'Expansion']
        },
        inStock: true,
        stockCount: 38,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1142',
        name: 'National Geographic Kids: Weird But True! 2025',
        description: 'A pocket-sized fun fact book filled with amazing, weird, and fascinating facts for kids.',
        price: 499.00,
        originalPrice: 599.00,
        category: 'toys',
        subcategory: 'books',
        brand: 'National Geographic Kids',
        rating: 4.9,
        reviewCount: 1200,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBu4umuhr8-oXatWLfyCspMcCs9UkCy7fgQ&s',
            'https://m.media-amazon.com/images/I/81ZK62v-ZYL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Over 300 weird and fun facts',
            'Colorful illustrations',
            'Interactive quizzes and puzzles',
            'Easy-to-read format for kids'
        ],
        specifications: {
            'Pages': '192',
            'Dimensions': '5.25 x 0.75 x 7.5 inches',
            'Age': '7-12'
        },
        options: {
            format: ['Paperback', 'Digital']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Educational', 'Fun Facts', 'Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1114',
        name: 'Hatchimals Mystery Egg',
        description: 'Interactive egg that hatches into a surprise furry friend.',
        price: 590.99,
        originalPrice: 690.99,
        category: 'toys',
        subcategory: 'interactive',
        brand: 'Hatchimals',
        rating: 4.5,
        reviewCount: 1400,
        images: [
            'https://m.media-amazon.com/images/I/71owZj9H+ZL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkW7OcrLEfb9ZGlD0rceKUlDJ9ymLmzYwfw2umefIaQ2exq3BHekFOMzIaV3cuKkM5Ek&usqp=CAU'
        ],
        features: [
            'Hatches on its own',
            'Mystery pet inside',
            'Interactive play'
        ],
        specifications: {
            'Material': 'Plastic + Plush',
            'Batteries': '2 AA',
            'Age': '5+'
        },
        options: {
            color: ['Mystery']
        },
        inStock: true,
        stockCount: 22,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1115',
        name: 'Baby Alive Doll',
        description: 'Interactive baby doll that eats, drinks, and makes sounds.',
        price: 490.99,
        originalPrice: 590.99,
        category: 'toys',
        subcategory: 'dolls',
        brand: 'Baby Alive',
        rating: 4.6,
        reviewCount: 1700,
        images: [
            'https://m.media-amazon.com/images/I/71HI4oHORaL.jpg',
            'https://5.imimg.com/data5/ECOM/Default/2024/1/376954417/YF/NG/MV/2395482/guest-eb500fcd-054b-45e2-bcc9-47414bcc4818-500x500.jpg'
        ],
        features: [
            'Eats and drinks',
            'Interactive sounds',
            'Accessories included'
        ],
        specifications: {
            'Material': 'Plastic + Fabric',
            'Height': '12 inches',
            'Age': '3+'
        },
        options: {
            color: ['Pink', 'Blue']
        },
        inStock: true,
        stockCount: 28,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1130',
        name: 'Kano Coding Kit',
        description: 'Build your own computer and learn coding with step-by-step challenges for kids.',
        price: 7499.00,
        originalPrice: 7999.00,
        category: 'toys',
        subcategory: 'educational',
        brand: 'Kano',
        rating: 4.8,
        reviewCount: 2200,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLS-mgB5v9BmjNVk8OjHsbqvPoQmzQTxz2g&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg05aJJmq1dWfzsG0t3n9CFEDvEsSZGaT_jQ&s'
        ],
        features: [
            'Build your own computer',
            'Learn coding step-by-step',
            'Interactive games and challenges'
        ],
        specifications: {
            'Age': '6+',
            'Material': 'Plastic/Electronic Components',
            'Dimensions': '12 x 9 x 3 in'
        },
        options: {
            edition: ['Standard Kit']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Educational', 'STEM', 'New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1119',
        name: 'Osmo Genius Starter Kit for iPad',
        description: 'Interactive educational kit that combines physical game pieces with digital learning apps.',
        price: 4599.00,
        originalPrice: 4999.00,
        category: 'toys',
        subcategory: 'educational',
        brand: 'Osmo',
        rating: 4.9,
        reviewCount: 1500,
        images: [
            'https://images-cdn.ubuy.co.in/65e3bd58e2488a3af024d521-osmo-genius-starter-kit-for-ipad-5.jpg',
            'https://gethacking.com/cdn/shop/files/61np-wxnfhl_sl1500.jpg?v=1687020748&width=1445'
        ],
        features: [
            'Hands-on learning',
            'Math, spelling, and puzzle games',
            'Works with iPad'
        ],
        specifications: {
            'Material': 'Plastic/Technology',
            'Age': '5-12 years',
            'Compatibility': 'iPad required'
        },
        options: {
            kit: ['Genius Starter Kit']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1120',
        name: 'LEGO Technic Monster Jam Truck',
        description: 'LEGO Technic truck with pull-back motor and realistic details.',
        price: 49.99,
        originalPrice: 59.99,
        category: 'toys',
        subcategory: 'building',
        brand: 'LEGO',
        rating: 4.8,
        reviewCount: 3400,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmc5X2biUMXFX6zES3osDg7pBm9qHx7v9mbg&s',
            'https://m.media-amazon.com/images/S/aplus-media-library-service-media/1bb70091-5141-4bb4-9267-246eb03a9657.__CR0,0,970,600_PT0_SX970_V1___.jpg'
        ],
        features: [
            'Pull-back motor',
            'Realistic design',
            '2-in-1 build option'
        ],
        specifications: {
            'Pieces': '260',
            'Material': 'Plastic',
            'Age': '7+'
        },
        options: {
            set: ['Monster Jam']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 2
        }
    },
    {
        id: '1116',
        name: 'Monopoly Classic Board Game',
        description: 'The timeless property trading board game for family fun.',
        price: 290.99,
        originalPrice: 340.99,
        category: 'toys',
        subcategory: 'board games',
        brand: 'Hasbro',
        rating: 4.8,
        reviewCount: 4500,
        images: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnPQKMNzk7FTq2KNmRiwy5OazeqOiuEoMX1wUXyN17D3GcBENnpcKLpbVUtWQbl-QJMUzD3TWmP-ju3PvCz74H5ypYvbiKa8-Kc7poeoOyoPHAQYTZqeXDaqfmT_Qigt7zw0A06S_HQQ&usqp=CAc',
            'https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/399acb62-3ef9-4c33-8cf9-f12e1ef2ada8/595797298/monopoly-marmalade-playing-monopoly-marmalade-android.jpg'
        ],
        features: [
            '2–6 players',
            'Classic gameplay',
            'Paper money & tokens'
        ],
        specifications: {
            'Players': '2–6',
            'Material': 'Cardboard/Plastic',
            'Age': '8+'
        },
        options: {
            edition: ['Classic', 'Deluxe']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1117',
        name: 'Jenga Classic',
        description: 'Stacking tower game with 54 hardwood blocks.',
        price: 19.99,
        originalPrice: 24.99,
        category: 'toys',
        subcategory: 'board games',
        brand: 'Hasbro',
        rating: 4.9,
        reviewCount: 3800,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbLWgKP3_S98IapVDYB4Gso_ucv0j2E9TpmNljDGLviQkXBMwkd6GFcnpn3EfqwA16ExXusTtMu3HG42J9V91UQV2Gw8V0FoVPw9qZLWavcYrCCUvrr4MzXA&usqp=CAc',
            'https://cdn.grofers.com/da/cms-assets/cms/product_videos_thumbnails/ac7852b5-e03a-4654-9782-d59c6c7fa84b.jpg'
        ],
        features: [
            '54 hardwood blocks',
            'Fun for family & friends',
            'Easy to learn'
        ],
        specifications: {
            'Blocks': '54',
            'Material': 'Wood',
            'Age': '6+'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1118',
        name: 'K’NEX 500-Piece Building Set',
        description: 'STEM-focused construction toy with 500 colorful rods and connectors for building models.',
        price: 1599.00,
        originalPrice: 1899.00,
        category: 'toys',
        subcategory: 'building',
        brand: 'K’NEX',
        rating: 4.6,
        reviewCount: 2600,
        images: [
            'https://m.media-amazon.com/images/I/81BegR8P5jS._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpScvGpM7oEDgX563snQZdiZZ_Z9KirxooUA&s'
        ],
        features: [
            '500 pieces',
            'STEM learning',
            'Durable connectors',
            'Endless build options'
        ],
        specifications: {
            'Pieces': '500',
            'Material': 'Plastic',
            'Age': '7+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 65,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '7001',
        name: 'Hot Wheels Ultimate Garage',
        description: 'Multi-level Hot Wheels garage with spiral ramp, parking, and car elevator.',
        price: 4499.00,
        originalPrice: 5499.00,
        category: 'toys',
        subcategory: 'vehicles',
        brand: 'Hot Wheels',
        rating: 4.8,
        reviewCount: 4200,
        images: [
            'https://i.ytimg.com/vi/ciIHm8tsYUk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuE8ZV-QvbIr2hnsYS6cmTOxyx6w',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSUT-srB-4BlIXX9VH7k3mMvzAoDw845_uQ&s'
        ],
        features: [
            '4-level garage',
            'Spiral ramp',
            'Comes with 2 Hot Wheels cars'
        ],
        specifications: {
            'Height': '3 ft',
            'Material': 'Plastic',
            'Age': '4+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '7002',
        name: 'Barbie Dreamhouse Dollhouse',
        description: '3-story Barbie Dreamhouse with furniture, lights, and sounds.',
        price: 7999.00,
        originalPrice: 8999.00,
        category: 'toys',
        subcategory: 'dolls',
        brand: 'Barbie',
        rating: 4.7,
        reviewCount: 3100,
        images: [
            'https://m.media-amazon.com/images/I/81U9M7pXfeL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1v08hIcrX2MFy48A5q4iqK7U2PmOEWa6XBg&s'
        ],
        features: [
            '70+ accessories',
            'Elevator & slide',
            'Lights & sounds included'
        ],
        specifications: {
            'Height': '3.5 ft',
            'Material': 'Plastic',
            'Age': '3+'
        },
        options: {
            color: ['Pink']
        },
        inStock: true,
        stockCount: 12,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1121',
        name: 'Melissa & Doug Wooden Train Set',
        description: '100-piece wooden train track set with engines and accessories.',
        price: 590.99,
        originalPrice: 690.99,
        category: 'toys',
        subcategory: 'vehicles',
        brand: 'Melissa & Doug',
        rating: 4.8,
        reviewCount: 2600,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmm9u4wPEydUCBpviUfOpvqE_oA9c6lDxXg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhu7cwpghxp43ffjByUnwJKzHvUKPGHInXw&s'
        ],
        features: [
            '100-piece set',
            'Durable wooden tracks',
            'Encourages creativity'
        ],
        specifications: {
            'Pieces': '100',
            'Material': 'Wood',
            'Age': '3+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1126',
        name: 'Kinetic Sand Sandbox Set',
        description: 'Mold and shape colorful kinetic sand for creative play.',
        price: 240.99,
        originalPrice: 290.99,
        category: 'toys',
        subcategory: 'sensory',
        brand: 'Kinetic Sand',
        rating: 4.7,
        reviewCount: 2500,
        images: [
            'https://m.media-amazon.com/images/I/81M+j97WKSL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCXI13YgyCOmy0ZCp8oFVsic91ipvvaIfnA&s'
        ],
        features: [
            'Mess-free play',
            'Reusable sand',
            'Encourages creativity'
        ],
        specifications: {
            'Weight': '2 lbs',
            'Material': 'Sand/Polymer',
            'Age': '3+'
        },
        options: {
            color: ['Pink', 'Blue', 'Natural']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1127',
        name: 'Baby Einstein Activity Gym',
        description: 'Interactive play mat with toys, lights, and sounds for babies.',
        price: 590.99,
        originalPrice: 690.99,
        category: 'toys',
        subcategory: 'baby',
        brand: 'Baby Einstein',
        rating: 4.8,
        reviewCount: 1800,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRh3RuA5cvYoZbprg6KafWLTXHJaHfdgWXVS99uo-x8SB87yJbUuA4ekvlD_L9Mp5XVxtbP4ARVxIhi1Vm67SMUUr_x9UecvdAOwHGvthUChrPM5kiJqR72VHAAVhagBA&usqp=CAc',
            'https://i.pinimg.com/736x/21/ea/6d/21ea6db32b9cc441c0a1d35dde3e0196.jpg'
        ],
        features: [
            'Detachable toys',
            'Music & lights',
            'Machine-washable mat'
        ],
        specifications: {
            'Dimensions': '36 in x 36 in',
            'Material': 'Polyester/Plastic',
            'Age': '0+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1131',
        name: 'VTech KidiZoom Camera',
        description: 'Kid-friendly digital camera with fun photo effects, games, and video recording.',
        price: 3499.00,
        originalPrice: 3999.00,
        category: 'toys',
        subcategory: 'electronics',
        brand: 'VTech',
        rating: 4.6,
        reviewCount: 1500,
        images: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIf2zqnDzLKBGRAGanleKw_6dm-VER-YqI0ZZLBzJPJg7_T9dljQ28IEt8eCirkXX39yKwDLNmX-eaaHbzXwdFeXBar9E62--dfrE2Nv23xCGjphNHQnWWLi8AEnbnYdSAEYPxL7UnEw&usqp=CAc',
            'https://m.media-amazon.com/images/I/712B3k+RhbL.jpg'
        ],
        features: [
            '2.0 MP camera',
            'Photo effects & frames',
            'Video recording',
            'Educational games included'
        ],
        specifications: {
            'Battery': 'Rechargeable',
            'Dimensions': '5 x 3 x 2 in',
            'Age': '3+'
        },
        options: {
            color: ['Pink', 'Blue']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Educational', 'New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1133',
        name: 'Fisher-Price Rock-a-Stack',
        description: 'Classic stacking rings toy that helps develop hand-eye coordination and color recognition.',
        price: 799.00,
        originalPrice: 999.00,
        category: 'toys',
        subcategory: 'educational',
        brand: 'Fisher-Price',
        rating: 4.8,
        reviewCount: 3500,
        images: [
            'https://m.media-amazon.com/images/I/71M39fNKlfL.jpg',
            'https://www.toyzone.co.za/media/catalog/product/cache/0f892b1ef3e488d5cd2eea5836b43fb7/image/5877f556/fisher-price-rock-a-stack-classic-roly-poly-ring-stacking-toy-for-baby-and-toddler-ages-6-months-and-older.jpg'
        ],
        features: [
            '5 colorful rings',
            'Teaches size and color recognition',
            'Durable and safe for infants'
        ],
        specifications: {
            'Material': 'Plastic',
            'Dimensions': '6 x 6 x 8 in',
            'Age': '6 months+'
        },
        options: {
            color: ['Multi']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Classic', 'Educational'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1136',
        name: 'Kinetic Sand 3 lb Sandbox Kit',
        description: 'Mess-free kinetic sand with molds and tools for endless creative play.',
        price: 1599.00,
        originalPrice: 1799.00,
        category: 'toys',
        subcategory: 'sensory',
        brand: 'Kinetic Sand',
        rating: 4.7,
        reviewCount: 900,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4fKQwDZOdnQNC1A6ez0eXe1EvowEw8lHZQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXaxwiDl6m3sI8MzZ3mfiau6CX4z5OA2kow&s'
        ],
        features: [
            'Soft and moldable sand',
            'Comes with molds and tools',
            'Mess-free and easy to clean',
            'Encourages creativity and fine motor skills'
        ],
        specifications: {
            'Weight': '3 lb',
            'Material': 'Sand/Polymer',
            'Age': '3+'
        },
        options: {
            color: ['Sand', 'Blue', 'Pink']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Creative', 'Sensory'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    // Grocery Products
    {
        id: '1201',
        name: 'Kellogg’s Corn Flakes',
        description: 'Classic breakfast cereal made from golden corn.',
        price: 40.99,
        originalPrice: 500.99,
        category: 'grocery',
        subcategory: 'breakfast',
        brand: 'Kellogg’s',
        rating: 4.7,
        reviewCount: 3200,
        images: [
            'https://m.media-amazon.com/images/I/81EsCQ6QdCL.jpg',
            'https://i.ytimg.com/vi/cmNhAqQIUMk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFwjHVShB-ulj6Yd5fLW-Dp9K1Zw'
        ],
        features: [
            'Made from golden corn',
            'Low fat',
            'No artificial colors'
        ],
        specifications: {
            'Weight': '500g',
            'Type': 'Cereal',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['500g', '1kg']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1202',
        name: 'Tata Salt',
        description: 'Iodized salt for everyday cooking.',
        price: 130.99,
        originalPrice: 500.29,
        category: 'grocery',
        subcategory: 'cooking',
        brand: 'Tata',
        rating: 4.8,
        reviewCount: 2100,
        images: [
            'https://m.media-amazon.com/images/I/614mm2hYHyL.jpg',
            'https://www.bigbasket.com/media/uploads/flatpages/mailer-images-aug/Tata_Salt_221124_5.jpg'
        ],
        features: [
            'Iodized',
            'Pure and clean',
            'Trusted brand'
        ],
        specifications: {
            'Weight': '1kg',
            'Type': 'Salt',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['1kg']
        },
        inStock: true,
        stockCount: 200,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1203',
        name: 'Amul Butter',
        description: 'Delicious, creamy butter for spreading and cooking.',
        price: 200.99,
        originalPrice: 670.49,
        category: 'grocery',
        subcategory: 'dairy',
        brand: 'Amul',
        rating: 4.9,
        reviewCount: 1800,
        images: [
            'https://m.media-amazon.com/images/S/aplus-media/sota/95d868ed-6acd-4efc-990f-ee892ff3118d.__CR0,0,970,600_PT0_SX970_V1___.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHRnc9sFaUEEHcbCGWqS3pDx-Gqitubl45w&s'
        ],
        features: [
            'Creamy texture',
            'Rich taste',
            'No preservatives'
        ],
        specifications: {
            'Weight': '500g',
            'Type': 'Butter',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['500g']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1204',
        name: 'Aashirvaad Atta',
        description: 'Whole wheat flour for soft and fluffy rotis.',
        price: 300.99,
        originalPrice: 1240.49,
        category: 'grocery',
        subcategory: 'flour',
        brand: 'Aashirvaad',
        rating: 4.7,
        reviewCount: 1500,
        images: [
            'https://cdn.rationatmydoor.com/wp-content/uploads/2020/11/aashirwad-multigrain-atta.jpeg',
            'https://upload.wikimedia.org/wikipedia/commons/4/42/Atta-05.jpg'
        ],
        features: [
            '100% whole wheat',
            'No maida',
            'Rich in fiber'
        ],
        specifications: {
            'Weight': '5kg',
            'Type': 'Flour',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['5kg']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1206',
        name: 'Nestlé Everyday Dairy Whitener',
        description: 'Perfect milk powder for tea and coffee.',
        price: 245.99,
        originalPrice: 320.99,
        category: 'grocery',
        subcategory: 'dairy',
        brand: 'Nestlé',
        rating: 4.6,
        reviewCount: 1400,
        images: [
            'https://m.media-amazon.com/images/I/71VhDFidEeL.jpg',
            'https://www.kiranapoorti.com/image/cache/catalog/81nGund6WKL._SL1500_-1500x1500.jpg'
        ],
        features: [
            'Rich and creamy taste',
            'Dissolves easily',
            'Fortified with nutrients'
        ],
        specifications: {
            'Weight': '400g',
            'Type': 'Milk Powder',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['200g', '400g']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1207',
        name: 'Fortune Sunlite Refined Sunflower Oil',
        description: 'Healthy cooking oil with light taste and high smoke point.',
        price: 165.99,
        originalPrice: 210.49,
        category: 'grocery',
        subcategory: 'oil',
        brand: 'Fortune',
        rating: 4.5,
        reviewCount: 1100,
        images: [
            'https://m.media-amazon.com/images/I/81FbVYZJYyL.jpg',
            'https://www.silkrute.co.uk/images/detailed/4705/51tnFdMa56S.jpg'
        ],
        features: [
            'Light taste',
            'Cholesterol free',
            'Rich in Vitamin E'
        ],
        specifications: {
            'Volume': '1L',
            'Type': 'Refined Oil',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['1L', '5L']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Healthy Choice'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1208',
        name: 'Britannia Marie Gold Biscuits',
        description: 'Crispy and light tea-time biscuits.',
        price: 35.99,
        originalPrice: 50.99,
        category: 'grocery',
        subcategory: 'snacks',
        brand: 'Britannia',
        rating: 4.7,
        reviewCount: 2500,
        images: [
            'https://media.britannia.co.in/Marie_BRS_1_73b5c5af55.jpg',
            'https://5.imimg.com/data5/WA/AX/GLADMIN-8474193/marie-gold-500x500.png'
        ],
        features: [
            'Light and crispy',
            'Low fat',
            'Perfect with tea'
        ],
        specifications: {
            'Weight': '250g',
            'Type': 'Biscuits',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['200g', '250g']
        },
        inStock: true,
        stockCount: 200,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1209',
        name: 'Maggi 2-Minute Noodles',
        description: 'Instant noodles with classic masala taste.',
        price: 48.99,
        originalPrice: 60.99,
        category: 'grocery',
        subcategory: 'instant food',
        brand: 'Maggi',
        rating: 4.9,
        reviewCount: 5000,
        images: [
            'https://www.maggi.in/sites/default/files/styles/product_image_tab_landscape_384_768/public/maggi-special-masala-spicy-yummy.png?itok=lr2B2D7h',
            'https://i.ytimg.com/vi/0WkEdZ1LYfU/maxresdefault.jpg'
        ],
        features: [
            'Cooks in 2 minutes',
            'Tasty masala flavor',
            'Loved by all ages'
        ],
        specifications: {
            'Weight': '420g (pack of 6)',
            'Type': 'Instant Noodles',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['70g', '420g']
        },
        inStock: true,
        stockCount: 300,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 1
        }
    },
    {
        id: '1210',
        name: 'Parle-G Biscuits',
        description: 'Iconic glucose biscuits with rich taste.',
        price: 25.99,
        originalPrice: 40.49,
        category: 'grocery',
        subcategory: 'snacks',
        brand: 'Parle',
        rating: 4.6,
        reviewCount: 4600,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqceEwBr8Li1lh6I3VMyDVxQsRhgmwTX2SlJLTBPXr7ddGFFcML-TONEzuHqDvHs-cye8&usqp=CAU',
            'https://bazaar5.com/image/cache/catalog/pro/product/10015/parle-g-original-glucose-biscuits-800-g-product-images-o490008739-p490008739-0-202203170454-600x315w.jpg',
        ],
        features: [
            'Rich in glucose',
            'Crispy texture',
            'Affordable snack'
        ],
        specifications: {
            'Weight': '800g',
            'Type': 'Biscuits',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['200g', '800g']
        },
        inStock: true,
        stockCount: 250,
        tags: ['Classic'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1211',
        name: 'Basmati Rice – India Gate Classic',
        description: 'Premium long-grain basmati rice for aromatic cooking.',
        price: 750.99,
        originalPrice: 1100.49,
        category: 'grocery',
        subcategory: 'rice',
        brand: 'India Gate',
        rating: 4.8,
        reviewCount: 1300,
        images: [
            'https://m.media-amazon.com/images/I/81RRE6YAeaL.jpg',
            'https://m.media-amazon.com/images/I/81d4pkNBxRL._UF350,350_QL50_.jpg'
        ],
        features: [
            'Premium quality',
            'Long grains',
            'Aromatic flavor'
        ],
        specifications: {
            'Weight': '5kg',
            'Type': 'Basmati Rice',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['1kg', '5kg']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1212',
        name: 'Hershey’s Chocolate Syrup',
        description: 'Delicious syrup for desserts, milkshakes, and pancakes.',
        price: 195.99,
        originalPrice: 240.99,
        category: 'grocery',
        subcategory: 'chocolates',
        brand: 'Hershey’s',
        rating: 4.7,
        reviewCount: 2200,
        images: [
            'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product_videos_thumbnails/5aeebf12-8a3d-4052-b694-6016975fc553.jpg',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/syrup/b/p/q/-original-imahfn4zpggdyjng.jpeg?q=90&crop=false'
        ],
        features: [
            'Rich chocolate flavor',
            'Easy squeeze bottle',
            'No refrigeration needed'
        ],
        specifications: {
            'Weight': '650g',
            'Type': 'Syrup',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['200g', '650g']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Kids Favorite'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1213',
        name: 'Kissan Mixed Fruit Jam',
        description: 'Blend of multiple fruits for a delicious spread.',
        price: 160.99,
        originalPrice: 210.49,
        category: 'grocery',
        subcategory: 'spreads',
        brand: 'Kissan',
        rating: 4.5,
        reviewCount: 1700,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AqaUzrZ6vkBvlhV7I2MiT-aHrJQ1DSfArw&s',
            'https://img.thecdn.in/22159/1692783834656_SKU-1005_0.jpg?width=600&format=webp'
        ],
        features: [
            'Made from 8 fruits',
            'No artificial flavors',
            'Rich taste'
        ],
        specifications: {
            'Weight': '500g',
            'Type': 'Jam',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['200g', '500g']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1214',
        name: 'Mother Dairy Paneer',
        description: 'Fresh and soft paneer cubes for cooking.',
        price: 120.99,
        originalPrice: 150.99,
        category: 'grocery',
        subcategory: 'dairy',
        brand: 'Mother Dairy',
        rating: 4.8,
        reviewCount: 1900,
        images: [
            'https://5.imimg.com/data5/NS/DE/WH/SELLER-1442638/490544417-500x500.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToi7aa6BrczDLUxC0EC5hBMfRpFxTvT-i7QA&s'
        ],
        features: [
            'Fresh and soft',
            'Rich in protein',
            'Ideal for curries'
        ],
        specifications: {
            'Weight': '200g',
            'Type': 'Paneer',
            'Shelf Life': '7 days (refrigerated)'
        },
        options: {
            size: ['200g', '500g']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Fresh'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 1
        }
    },
    {
        id: '1215',
        name: 'Haldiram’s Moong Dal',
        description: 'Crispy and salty moong dal namkeen.',
        price: 55.99,
        originalPrice: 80.99,
        category: 'grocery',
        subcategory: 'snacks',
        brand: 'Haldiram’s',
        rating: 4.6,
        reviewCount: 2100,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HIp0vHTnUUS7NKoJbtCeCJC9Z3_0_ZQgeQ&s',
            'https://www.carrydor.com/cdn/shop/files/haldiram-moong-dal-namkeen-200-gram-pack_9f309bd6-3691-4d77-a8b5-e3b944aa525b.jpg?v=1716480021'
        ],
        features: [
            'Crispy snack',
            'Rich taste',
            'Perfect tea-time munch'
        ],
        specifications: {
            'Weight': '200g',
            'Type': 'Namkeen',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['200g']
        },
        inStock: true,
        stockCount: 180,
        tags: ['Snack'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1205',
        name: 'Tata Tea Gold',
        description: 'Premium blend of Assam and Darjeeling teas for a rich taste.',
        price: 512.99,
        originalPrice: 1000.99,
        category: 'grocery',
        subcategory: 'tea',
        brand: 'Tata',
        rating: 4.8,
        reviewCount: 1700,
        images: [
            'https://m.media-amazon.com/images/I/61m1sZRyMqL._UF350,350_QL80_.jpg',
            'https://www.vridhistores.com/uploads/2023/May/products/16843048743930.jpg'
        ],
        features: [
            'Premium blend',
            'Rich aroma',
            'Strong taste'
        ],
        specifications: {
            'Weight': '1kg',
            'Type': 'Tea',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['1kg']
        },
        inStock: true,
        stockCount: 90,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1216',
        name: 'Bru Instant Coffee',
        description: 'Rich and aromatic instant coffee powder.',
        price: 320.99,
        originalPrice: 410.49,
        category: 'grocery',
        subcategory: 'beverages',
        brand: 'Bru',
        rating: 4.7,
        reviewCount: 2100,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKOhND-sCQyeAKb9ZzjDdpUzihHqd36LksA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0lzLOR_8CsRGHLNz5hetRYGd_g67pnLNYg&s'
        ],
        features: [
            'Instant coffee',
            'Strong aroma',
            'Rich taste'
        ],
        specifications: {
            'Weight': '200g',
            'Type': 'Coffee',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['100g', '200g']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1217',
        name: 'Lay’s Classic Salted Chips',
        description: 'Crispy potato chips with a salty twist.',
        price: 25.99,
        originalPrice: 40.49,
        category: 'grocery',
        subcategory: 'snacks',
        brand: 'Lay’s',
        rating: 4.6,
        reviewCount: 3500,
        images: [
            'https://m.media-amazon.com/images/I/61e+UwnsWwL.jpg',
            'https://nagabazaar.com/cdn/shop/files/102741-2_16-lays-potato-chips-simple-classic-salted.webp?v=1748268895&width=1024'
        ],
        features: [
            'Made from real potatoes',
            'Lightly salted',
            'Crispy and tasty'
        ],
        specifications: {
            'Weight': '52g',
            'Type': 'Chips',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['52g', '150g']
        },
        inStock: true,
        stockCount: 500,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1218',
        name: 'Tropicana Orange Juice',
        description: 'Refreshing orange juice with no added preservatives.',
        price: 115.99,
        originalPrice: 160.49,
        category: 'grocery',
        subcategory: 'beverages',
        brand: 'Tropicana',
        rating: 4.5,
        reviewCount: 1800,
        images: [
            'https://m.media-amazon.com/images/I/71GKSeI9+HL._UF894,1000_QL80_.jpg',
            'https://www.foodandwine.com/thmb/kWc-J5THXDial5c8-x3H4c9YQMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tropicana-OJ-Cereal-FT-2-BLOG0422-5ecbcc5893e942aeb5665b617922ee9a.jpg'
        ],
        features: [
            '100% fruit juice',
            'No preservatives',
            'Rich in Vitamin C'
        ],
        specifications: {
            'Volume': '1L',
            'Type': 'Juice',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['1L']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Healthy Choice'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1219',
        name: 'Everest Garam Masala',
        description: 'Blend of premium spices for Indian curries.',
        price: 75.99,
        originalPrice: 100.99,
        category: 'grocery',
        subcategory: 'spices',
        brand: 'Everest',
        rating: 4.8,
        reviewCount: 2400,
        images: [
            'https://www.bbassets.com/media/uploads/p/l/268943_3-everest-garam-masala.jpg',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/spice-masala/k/w/u/100-pani-puri-masala-garam-masala-box-2-everest-powder-original-imahdwzrhhdyhtdz.jpeg?q=20&crop=false'
        ],
        features: [
            'Authentic Indian spices',
            'Rich aroma',
            'Enhances flavor'
        ],
        specifications: {
            'Weight': '100g',
            'Type': 'Spices',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['100g']
        },
        inStock: true,
        stockCount: 300,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1220',
        name: 'Pepsi Soft Drink',
        description: 'Carbonated soft drink with bold cola flavor.',
        price: 40.99,
        originalPrice: 55.99,
        category: 'grocery',
        subcategory: 'beverages',
        brand: 'Pepsi',
        rating: 4.4,
        reviewCount: 3900,
        images: [
            'https://m.media-amazon.com/images/I/51pGxfs4w1L.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pepsi_%22Hot%22_Chocolate_Flavor.jpg'
        ],
        features: [
            'Refreshing taste',
            'Carbonated drink',
            'Perfect for parties'
        ],
        specifications: {
            'Volume': '750ml',
            'Type': 'Soft Drink',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['750ml', '2L']
        },
        inStock: true,
        stockCount: 400,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1221',
        name: 'Real Mixed Fruit Juice',
        description: 'Juice made from a mix of 8 delicious fruits.',
        price: 110.99,
        originalPrice: 150.99,
        category: 'grocery',
        subcategory: 'beverages',
        brand: 'Real',
        rating: 4.6,
        reviewCount: 2100,
        images: [
            'https://m.media-amazon.com/images/I/81b6qMCTNbL._UF350,350_QL80_.jpg',
            'https://neelamfoodlandmumbai.com/cdn/shop/files/IMG_2726.jpg?v=1752069067'
        ],
        features: [
            'No preservatives',
            'Rich in vitamins',
            'Refreshing taste'
        ],
        specifications: {
            'Volume': '1L',
            'Type': 'Juice',
            'Shelf Life': '6 months'
        },
        options: {
            size: ['1L']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Kids Favorite'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 2
        }
    },
    {
        id: '1222',
        name: 'MDH Chicken Masala',
        description: 'Traditional spice blend for chicken recipes.',
        price: 85.99,
        originalPrice: 110.99,
        category: 'grocery',
        subcategory: 'spices',
        brand: 'MDH',
        rating: 4.7,
        reviewCount: 2300,
        images: [
            'https://m.media-amazon.com/images/I/81sNx-neOaL.jpg',
            'https://baazwsh.com/cdn/shop/products/butter-chicken-masala-100g-mdh-baazwsh-731773.jpg?v=1660825338'
        ],
        features: [
            'Authentic taste',
            'Perfect for curries',
            'Premium spices'
        ],
        specifications: {
            'Weight': '100g',
            'Type': 'Spices',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['100g']
        },
        inStock: true,
        stockCount: 220,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1223',
        name: 'Nestlé KitKat Chocolate',
        description: 'Crispy wafers covered with milk chocolate.',
        price: 25.99,
        originalPrice: 35.99,
        category: 'grocery',
        subcategory: 'chocolates',
        brand: 'Nestlé',
        rating: 4.8,
        reviewCount: 4500,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjobkBqUf7Yd6vxx_wlR6cQoRKZpWaY2hPQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24LfeHcRUhc-U2nmkSFYOAQBnKnrYzti-EA&s'
        ],
        features: [
            'Crunchy wafers',
            'Creamy chocolate',
            'Snack size'
        ],
        specifications: {
            'Weight': '37g',
            'Type': 'Chocolate',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['37g', '70g']
        },
        inStock: true,
        stockCount: 500,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1224',
        name: 'Dabur Honey',
        description: 'Natural and pure honey for daily health.',
        price: 280.99,
        originalPrice: 350.99,
        category: 'grocery',
        subcategory: 'health',
        brand: 'Dabur',
        rating: 4.9,
        reviewCount: 3100,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk8pPXKxB7ROdCN4GmmfRsHC1yMhPjqAHtA&s',
            'https://images.apollo247.in/pub/media/catalog/product/D/A/DAB0105_1-JULY23_1.jpg'
        ],
        features: [
            '100% pure honey',
            'Rich in antioxidants',
            'Boosts immunity'
        ],
        specifications: {
            'Weight': '500g',
            'Type': 'Honey',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['250g', '500g']
        },
        inStock: true,
        stockCount: 180,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1225',
        name: 'Saffola Oats',
        description: 'Healthy oats for weight management and energy.',
        price: 150.99,
        originalPrice: 200.99,
        category: 'grocery',
        subcategory: 'breakfast',
        brand: 'Saffola',
        rating: 4.7,
        reviewCount: 1600,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdRy9U9N_qss4G__2cIMrYbLnRospmX7gYg&s',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/cereal-flake/f/6/3/-original-imahyft2wt5zhgej.jpeg?q=90&crop=false'
        ],
        features: [
            'High in fiber',
            'Heart healthy',
            'Quick to cook'
        ],
        specifications: {
            'Weight': '1kg',
            'Type': 'Oats',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['500g', '1kg']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Healthy Choice'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1226',
        name: 'Horlicks Health Drink',
        description: 'Nutritious malted drink for energy and growth.',
        price: 395.99,
        originalPrice: 460.99,
        category: 'grocery',
        subcategory: 'health drinks',
        brand: 'Horlicks',
        rating: 4.6,
        reviewCount: 2000,
        images: [
            'https://m.media-amazon.com/images/I/61FXNdTWQxL._UF1000,1000_QL80_.jpg',
            'https://bajarhaat.com/wp-content/uploads/2024/06/Standard-Horlicks-1Kg-Refill-SDL272933357-1-5c95e.jpg'
        ],
        features: [
            'Fortified with vitamins',
            'Malted drink',
            'Supports growth'
        ],
        specifications: {
            'Weight': '1kg',
            'Type': 'Health Drink',
            'Shelf Life': '12 months'
        },
        options: {
            size: ['500g', '1kg']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1227',
        name: 'Sprite Soft Drink',
        description: 'Refreshing lemon-lime carbonated soft drink.',
        price: 40.99,
        originalPrice: 55.99,
        category: 'grocery',
        subcategory: 'beverages',
        brand: 'Sprite',
        rating: 4.5,
        reviewCount: 2800,
        images: [
            'https://m.media-amazon.com/images/I/51WRz+hQvHL._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRihMFNlz9mB5i2axwUILsbtmaF9J1O0Ed0Q&s'
        ],
        features: [
            'Lemon-lime flavor',
            'Refreshing',
            'Carbonated drink'
        ],
        specifications: {
            'Volume': '750ml',
            'Type': 'Soft Drink',
            'Shelf Life': '9 months'
        },
        options: {
            size: ['750ml', '2L']
        },
        inStock: true,
        stockCount: 300,
        tags: ['Popular'],
        shippingInfo: {
            freeShipping: false,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1228',
        name: 'Surf Excel Matic Detergent Powder',
        description: 'Advanced formula detergent for machine wash.',
        price: 430.99,
        originalPrice: 510.99,
        category: 'grocery',
        subcategory: 'household',
        brand: 'Surf Excel',
        rating: 4.8,
        reviewCount: 3500,
        images: [
            'https://gropharm.in/wp-content/uploads/2021/01/216.jpg',
            'https://www.jiomart.com/images/product/original/490680458/surf-excel-matic-front-load-detergent-powder-500-g-product-images-o490680458-p490680458-0-202203170928.jpg?im=Resize=(420,420)'
        ],
        features: [
            'Removes tough stains',
            'Machine wash friendly',
            'Fragrant wash'
        ],
        specifications: {
            'Weight': '2kg',
            'Type': 'Detergent',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['1kg', '2kg']
        },
        inStock: true,
        stockCount: 200,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1229',
        name: 'Dettol Antiseptic Liquid',
        description: 'Trusted antiseptic for first aid and hygiene.',
        price: 185.99,
        originalPrice: 230.99,
        category: 'grocery',
        subcategory: 'health',
        brand: 'Dettol',
        rating: 4.9,
        reviewCount: 4000,
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2021/5/VR/DM/UX/26075754/500ml-dettol-liquid-antiseptic.jpg',
            'https://www.reckittpro.co.in/assets/uploadfile/product/dettol-antiseptic-liquid-06.webp'
        ],
        features: [
            'Kills germs',
            'Multi-purpose',
            'Trusted brand'
        ],
        specifications: {
            'Volume': '500ml',
            'Type': 'Antiseptic Liquid',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['250ml', '500ml']
        },
        inStock: true,
        stockCount: 160,
        tags: ['Essential'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1230',
        name: 'Colgate Toothpaste',
        description: 'Complete protection toothpaste for daily oral care.',
        price: 120.99,
        originalPrice: 150.99,
        category: 'grocery',
        subcategory: 'personal care',
        brand: 'Colgate',
        rating: 4.8,
        reviewCount: 3800,
        images: [
            'https://m.media-amazon.com/images/I/61f+32QXZML._UF1000,1000_QL80_.jpg',
            'https://images-static.nykaa.com/media/catalog/product/1/e/1ee584c8901314114426_7.jpg?tr=w-500'
        ],
        features: [
            'Fights cavities',
            'Fresh breath',
            'Daily oral care'
        ],
        specifications: {
            'Weight': '200g',
            'Type': 'Toothpaste',
            'Shelf Life': '24 months'
        },
        options: {
            size: ['100g', '200g']
        },
        inStock: true,
        stockCount: 250,
        tags: ['Essential'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    // Automotive Products
    {
        id: '1301',
        name: 'Bosch Wiper Blades',
        description: 'Durable, all-weather wiper blades for clear visibility.',
        price: 749,
        originalPrice: 999,
        category: 'automotive',
        subcategory: 'accessories',
        brand: 'Bosch',
        rating: 4.6,
        reviewCount: 1200,
        images: [
            'https://m.media-amazon.com/images/I/513JAcJJGWL._UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/41ecbaK4r1L.jpg'
        ],
        features: [
            'All-weather performance',
            'Easy installation',
            'Long-lasting rubber'
        ],
        specifications: {
            'Size': '24 inches',
            'Material': 'Rubber/Plastic',
            'Compatibility': 'Universal'
        },
        options: {
            size: ['24in', '20in']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1302',
        name: '3M Car Care Kit',
        description: 'Complete car cleaning kit with shampoo, wax, and microfiber cloth.',
        price: 1599,
        originalPrice: 1999,
        category: 'automotive',
        subcategory: 'care',
        brand: '3M',
        rating: 4.7,
        reviewCount: 900,
        images: [
            'https://m.media-amazon.com/images/I/51gnPqGh0oL._UF1000,1000_QL80_.jpg',
            'https://seller.verkoper.in//vendors/_136/product/big/136_1732814617_Car_Care_.jpeg'
        ],
        features: [
            'Car shampoo',
            'Car wax',
            'Microfiber cloth',
            'All-in-one kit'
        ],
        specifications: {
            'Kit': 'Shampoo, Wax, Cloth',
            'Material': 'Liquid, Microfiber',
            'Use': 'Exterior cleaning'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1303',
        name: 'Michelin Digital Tire Inflator',
        description: 'Portable digital tire inflator for cars and bikes, with auto shut-off.',
        price: 2899,
        originalPrice: 3499,
        category: 'automotive',
        subcategory: 'tools',
        brand: 'Michelin',
        rating: 4.8,
        reviewCount: 1100,
        images: [
            'https://m.media-amazon.com/images/I/61cGGJYRSBL._UF894,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/71vNcJiWxFL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Digital display',
            'Auto shut-off',
            'Compact design',
            'LED light'
        ],
        specifications: {
            'Max Pressure': '120 PSI',
            'Power': '12V',
            'Weight': '1.2kg'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1304',
        name: 'Philips X-tremeVision Headlight Bulbs',
        description: 'High-performance halogen headlight bulbs for maximum visibility.',
        price: 1399,
        originalPrice: 1699,
        category: 'automotive',
        subcategory: 'lighting',
        brand: 'Philips',
        rating: 4.5,
        reviewCount: 800,
        images: [
            'https://m.media-amazon.com/images/I/51uT6I4Nl-L.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOs_EArWqJy4ZJicwiKHHIScbpTmptECZug&s'
        ],
        features: [
            'Up to 130% more brightness',
            'Longer beam',
            'Easy installation'
        ],
        specifications: {
            'Type': 'Halogen',
            'Voltage': '12V',
            'Wattage': '60/55W'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 40,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1305',
        name: 'Armor All Car Vacuum Cleaner',
        description: 'Portable wet/dry vacuum cleaner for car interiors.',
        price: 2499,
        originalPrice: 2999,
        category: 'automotive',
        subcategory: 'cleaning',
        brand: 'Armor All',
        rating: 4.7,
        reviewCount: 950,
        images: [
            'https://m.media-amazon.com/images/I/71Mjmfh2rUL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KlTVANwpy9AJDIRE3X3-FHWh79OPywN9_g&s'
        ],
        features: [
            'Wet/dry cleaning',
            'Portable',
            'Easy to use',
            'Includes accessories'
        ],
        specifications: {
            'Power': '12V',
            'Capacity': '2.5 liters',
            'Cord Length': '10 ft'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1306',
        name: 'Motul 7100 4T Engine Oil',
        description: 'Fully synthetic engine oil for bikes, provides superior protection.',
        price: 899,
        originalPrice: 1150,
        category: 'automotive',
        subcategory: 'lubricants',
        brand: 'Motul',
        rating: 4.8,
        reviewCount: 2500,
        images: [
            'https://m.media-amazon.com/images/I/71W8b-+wZpL._UF1000,1000_QL80_.jpg',
            'https://rukminim2.flixcart.com/image/480/640/xif0q/vehicle-lubricant/q/p/u/550-7100-4t10w-40ester-core-nitya-original-imah33yn5yfefesz.jpeg?q=90'
        ],
        features: [
            'High-performance formula',
            'Protects engine parts',
            'Improves bike pickup'
        ],
        specifications: {
            'Volume': '1L',
            'Type': 'Synthetic',
            'Grade': '10W40'
        },
        options: {
            size: ['1L', '3L']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1307',
        name: 'Shell Helix HX5 Engine Oil',
        description: 'Premium mineral engine oil for cars with reliable performance.',
        price: 1450,
        originalPrice: 1750,
        category: 'automotive',
        subcategory: 'lubricants',
        brand: 'Shell',
        rating: 4.6,
        reviewCount: 1800,
        images: [
            'https://m.media-amazon.com/images/I/71tsNn7PMvL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5VEyqtA08uvkTVUDQSHwQ-TbNdycX5mIMy-xzlNBTmYFD_zIIlu-Y8WXV6ioAXF1zWo&usqp=CAU'
        ],
        features: [
            'Protects against deposits',
            'Smooth driving experience',
            'Affordable and reliable'
        ],
        specifications: {
            'Volume': '3L',
            'Type': 'Mineral',
            'Grade': '15W40'
        },
        options: {
            size: ['3L', '5L']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1308',
        name: 'Turtle Wax Car Polish',
        description: 'Protective car wax for a long-lasting shine.',
        price: 499,
        originalPrice: 650,
        category: 'automotive',
        subcategory: 'care',
        brand: 'Turtle Wax',
        rating: 4.5,
        reviewCount: 720,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZqkIFw944r60u2eAUaRowV_0-gJRFkSVyw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDYRw2UofKzJvN_8RYYXqx-Xu814RWdDqcnsI0mHwO6MeHMbFe4Rdnyqu3Y52d1jOjtk&usqp=CAU'
        ],
        features: [
            'Protects paint',
            'Gives glossy finish',
            'Easy application'
        ],
        specifications: {
            'Type': 'Car Wax',
            'Volume': '500ml'
        },
        options: {
            size: ['500ml']
        },
        inStock: true,
        stockCount: 60,
        tags: ['New'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1309',
        name: 'Osram LED Fog Lights',
        description: 'High-brightness LED fog lamps for better night driving.',
        price: 1799,
        originalPrice: 2299,
        category: 'automotive',
        subcategory: 'lighting',
        brand: 'Osram',
        rating: 4.6,
        reviewCount: 950,
        images: [
            'https://m.media-amazon.com/images/I/81qN5mQN92L.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzU6eXOECYPiN7h8yiHxslU6_ghvZRyUyCqjOJ5akEEi8Gk54ZnFBabkGilK79qicW8O8&usqp=CAU'
        ],
        features: [
            'Bright white LED',
            'Energy efficient',
            'Waterproof design'
        ],
        specifications: {
            'Type': 'LED',
            'Power': '12V',
            'Color': '6000K White'
        },
        options: {
            pack: ['Pair']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1310',
        name: 'Bosch C7 Car Battery Charger',
        description: 'Automatic battery charger for cars and bikes with safety features.',
        price: 3499,
        originalPrice: 4200,
        category: 'automotive',
        subcategory: 'tools',
        brand: 'Bosch',
        rating: 4.7,
        reviewCount: 620,
        images: [
            'https://m.media-amazon.com/images/I/61YR76vHQOL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdukiaUlsKq1L5rKQ0u24pFSptMLju3Ogg6KfM2y7i2QGGDeZmWCHVqI2_whGvhglYw0&usqp=CAU'
        ],
        features: [
            'Automatic shut-off',
            'LED indicators',
            'Fast charging'
        ],
        specifications: {
            'Voltage': '6V/12V',
            'Type': 'Smart Charger'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1311',
        name: 'Mothers Microfiber Towels',
        description: 'High-quality microfiber cloths for car cleaning and polishing.',
        price: 699,
        originalPrice: 899,
        category: 'automotive',
        subcategory: 'cleaning',
        brand: 'Mothers',
        rating: 4.6,
        reviewCount: 580,
        images: [
            'https://m.media-amazon.com/images/I/71qDLm3Ll7L._UF1000,1000_QL80_.jpg',
            'https://motherspolish.com.au/cdn/shop/files/6720450-Mothers-Edgeless-520-Microfibre-Finishing-Towel.jpg?v=1734331955'
        ],
        features: [
            'Soft microfiber',
            'Reusable',
            'Scratch-free cleaning'
        ],
        specifications: {
            'Pack': '3 pieces',
            'Material': 'Microfiber'
        },
        options: {
            pack: ['3 pcs', '6 pcs']
        },
        inStock: true,
        stockCount: 85,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1312',
        name: 'Autofy Bike Mobile Holder',
        description: 'Sturdy mobile holder for bikes with anti-shake design.',
        price: 499,
        originalPrice: 699,
        category: 'automotive',
        subcategory: 'accessories',
        brand: 'Autofy',
        rating: 4.4,
        reviewCount: 1050,
        images: [
            'https://m.media-amazon.com/images/I/61zqjgV+c8L._UF894,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/51geMauKW4L._UF350,350_QL80_.jpg'
        ],
        features: [
            'Adjustable clamp',
            'Shockproof',
            'Easy to install'
        ],
        specifications: {
            'Material': 'Aluminium',
            'Compatibility': 'Universal'
        },
        options: {
            color: ['Black', 'Red']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1313',
        name: 'Blackcat Car Perfume Gel',
        description: 'Long-lasting car air freshener with soothing fragrance.',
        price: 349,
        originalPrice: 499,
        category: 'automotive',
        subcategory: 'interior',
        brand: 'Blackcat',
        rating: 4.3,
        reviewCount: 600,
        images: [
            'https://blackcat.in/static/images/products/car_perfumes/visual_01.jpg',
            'https://blackcat.in/static/images/products/car_perfumes/visual_06.jpg'
        ],
        features: [
            'Lasts up to 60 days',
            'Compact design',
            'Refreshing aroma'
        ],
        specifications: {
            'Type': 'Gel',
            'Fragrance': 'Ocean'
        },
        options: {
            fragrance: ['Ocean', 'Lemon', 'Rose']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1314',
        name: 'GoMechanic Car Floor Mats',
        description: 'Waterproof, easy-to-clean floor mats for cars.',
        price: 1199,
        originalPrice: 1499,
        category: 'automotive',
        subcategory: 'interior',
        brand: 'GoMechanic',
        rating: 4.5,
        reviewCount: 720,
        images: [
            'https://m.media-amazon.com/images/I/81rgmURn-gL.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2023/1/YB/ZP/QG/82862389/go-mechanic-premium-pvc-car-mat.jpg'
        ],
        features: [
            'Anti-slip design',
            'Durable material',
            'Custom fit'
        ],
        specifications: {
            'Material': 'PVC',
            'Pack': '4 pieces'
        },
        options: {
            color: ['Black', 'Beige']
        },
        inStock: true,
        stockCount: 65,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1315',
        name: 'AmazonBasics Jumper Cables',
        description: 'Heavy-duty jumper cables for cars and SUVs.',
        price: 1599,
        originalPrice: 1899,
        category: 'automotive',
        subcategory: 'tools',
        brand: 'AmazonBasics',
        rating: 4.6,
        reviewCount: 880,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lBAowuj7nGtVQRLzBRDoxAxp91LWd23ceg&s',
            'https://m.media-amazon.com/images/I/91X1o7VhGdL.jpg'
        ],
        features: [
            '4-meter length',
            'Strong clamps',
            'Tangle-free design'
        ],
        specifications: {
            'Length': '4m',
            'Gauge': '8 AWG'
        },
        options: {
            size: ['4m']
        },
        inStock: true,
        stockCount: 55,
        tags: ['Essential'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1316',
        name: 'Michelin Tyre Repair Kit',
        description: 'Portable tubeless tyre repair kit with plugs and tools.',
        price: 749,
        originalPrice: 999,
        category: 'automotive',
        subcategory: 'tools',
        brand: 'Michelin',
        rating: 4.7,
        reviewCount: 540,
        images: [
            'https://www.team-bhp.com/forum/attachments/tyre-alloy-wheel-section/2171300d1624672744-michelin-puncture-repair-kit-can-tubeless-puncture-kit.jpg',
            'https://www.team-bhp.com/forum/attachments/tyre-alloy-wheel-section/2171300d1624672744-michelin-puncture-repair-kit-can-tubeless-puncture-kit.jpg'
        ],
        features: [
            'Quick tyre repair',
            'Durable tools',
            'Compact kit'
        ],
        specifications: {
            'Pack': '1 kit with 5 plugs'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1317',
        name: 'Bosch Horn Set',
        description: 'Powerful dual-tone car horn for safety and alertness.',
        price: 1199,
        originalPrice: 1499,
        category: 'automotive',
        subcategory: 'accessories',
        brand: 'Bosch',
        rating: 4.5,
        reviewCount: 680,
        images: [
            'https://autowarrior.in/cdn/shop/files/Bosch_F002H50964_Impact_Horn_Set_of_2_12V_360420_Hz_2W.jpg?v=1723223046',
            'https://rukminim2.flixcart.com/image/704/844/k5pn6vk0/vehicle-horn/z/r/q/f002h10028-symphony-horn-set-of-2-12v-420-500-hz-105-118-db-original-imafzcfcajde8bsg.jpeg?q=90&crop=false'
        ],
        features: [
            'Loud dual-tone sound',
            'Durable build',
            'Easy installation'
        ],
        specifications: {
            'Type': 'Electric Horn',
            'Voltage': '12V'
        },
        options: {
            pack: ['Pair']
        },
        inStock: true,
        stockCount: 70,
        tags: ['New'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '1318',
        name: 'GoMechanic Car Seat Covers',
        description: 'Premium leatherette seat covers for comfort and style.',
        price: 3999,
        originalPrice: 4999,
        category: 'automotive',
        subcategory: 'interior',
        brand: 'GoMechanic',
        rating: 4.6,
        reviewCount: 530,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAOGkfSWQi5aLTMRCNz9re_QY7PInFsQKPQ&s',
            'https://blogs.gomechanic.com/wp-content/uploads/2024/09/Car-Seat-Covers_header_web.jpg'
        ],
        features: [
            'Water-resistant material',
            'Easy to install',
            'Comfortable padding'
        ],
        specifications: {
            'Material': 'Leatherette',
            'Pack': 'Front + Rear Set'
        },
        options: {
            color: ['Black', 'Brown']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '1319',
        name: 'Motul Chain Lube Spray',
        description: 'Lubricant spray for bike chains to reduce friction and wear.',
        price: 399,
        originalPrice: 550,
        category: 'automotive',
        subcategory: 'lubricants',
        brand: 'Motul',
        rating: 4.7,
        reviewCount: 1150,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/vehicle-lubricant/x/5/p/-original-imahfdvmecpfz2v2.jpeg?q=90&crop=false',
            'https://m.media-amazon.com/images/I/61MNFvZ3M1L._UF350,350_QL50_.jpg'
        ],
        features: [
            'Protects chain',
            'Improves performance',
            'Resists water'
        ],
        specifications: {
            'Volume': '400ml',
            'Type': 'Spray'
        },
        options: {
            size: ['400ml']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1320',
        name: 'Studds Bike Helmet',
        description: 'ISI-certified full-face helmet for safety and comfort.',
        price: 1999,
        originalPrice: 2499,
        category: 'automotive',
        subcategory: 'safety',
        brand: 'Studds',
        rating: 4.8,
        reviewCount: 1800,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sKBWSnaNZ5wN54-KiRzt9snNjutGfOS1QA&s',
            'https://5.imimg.com/data5/SELLER/Default/2022/8/PX/VR/ZA/23331250/studds-bike-rider-helmet.jpg'
        ],
        features: [
            'Full-face protection',
            'ISI certified',
            'Comfortable padding'
        ],
        specifications: {
            'Type': 'Full-Face',
            'Size': 'Medium',
            'Color': 'Black'
        },
        options: {
            size: ['M', 'L', 'XL']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1321',
        name: 'Shell Helix Engine Oil 4L',
        description: 'Premium synthetic engine oil for smooth performance.',
        price: 2899,
        originalPrice: 3499,
        category: 'automotive',
        subcategory: 'lubricants',
        brand: 'Shell',
        rating: 4.8,
        reviewCount: 1900,
        images: [
            'https://m.media-amazon.com/images/I/81nH31pLHoL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTYY2BYvQaW0n-j-3FUUXOGv_gdw-x4yNtA&s'
        ],
        features: [
            'Synthetic oil',
            'Improves mileage',
            'Protects engine wear'
        ],
        specifications: {
            'Volume': '4L',
            'Viscosity': '5W-40'
        },
        options: {
            size: ['4L']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1322',
        name: 'Sony Car Stereo System',
        description: 'Bluetooth-enabled car stereo with USB and AUX support.',
        price: 5999,
        originalPrice: 7499,
        category: 'automotive',
        subcategory: 'electronics',
        brand: 'Sony',
        rating: 4.6,
        reviewCount: 850,
        images: [
            'https://m.media-amazon.com/images/I/61ac0P3afbL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0-Wo-VoSCW9oRrcKe_qqxUDv8cLryqVL_84zMc40FC33QRs3wno2aVU0meRMY54Kq68&usqp=CAU'
        ],
        features: [
            'Bluetooth & USB',
            'Clear sound',
            'Easy installation'
        ],
        specifications: {
            'Power': '55Wx4',
            'Connectivity': 'Bluetooth, USB, AUX'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1323',
        name: 'Autofy Bike Mobile Holder',
        description: 'Strong and stable mobile holder for bikes with USB charging port.',
        price: 799,
        originalPrice: 1299,
        category: 'automotive',
        subcategory: 'accessories',
        brand: 'Autofy',
        rating: 4.5,
        reviewCount: 1200,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRsGREIbuWQ5t2zdtXrbP5ZTxN1o7nXLc1A&s',
            'https://autofystore.com/wp-content/uploads/2020/08/PT02-386.jpg'
        ],
        features: [
            'Shockproof grip',
            'USB charging',
            '360° rotation'
        ],
        specifications: {
            'Compatibility': 'All Bikes',
            'Charging': 'USB 2.1A'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1324',
        name: 'Bridgestone Car Tyre B250',
        description: 'Durable and reliable radial tyre for cars.',
        price: 4599,
        originalPrice: 5299,
        category: 'automotive',
        subcategory: 'tyres',
        brand: 'Bridgestone',
        rating: 4.7,
        reviewCount: 650,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sPOa6dYm8oLJGTSlKxJtAVYKX6tAe3Nu3A&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSl7ceX-JwvO7vVBUqXukdeFnXMHR_VR0nig&s'
        ],
        features: [
            'Long tread life',
            'Improved grip',
            'Fuel efficient'
        ],
        specifications: {
            'Size': '185/65 R15',
            'Type': 'Radial'
        },
        options: {
            size: ['R15']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1325',
        name: 'Amaron Car Battery',
        description: 'Maintenance-free battery with high cranking power.',
        price: 5999,
        originalPrice: 6999,
        category: 'automotive',
        subcategory: 'battery',
        brand: 'Amaron',
        rating: 4.6,
        reviewCount: 720,
        images: [
            'https://www.batteryboss.in/assets/images/batteryboss/battery/11_11_Amaron-FLO-DIN55R.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4cXqNnw5_FGjgv8l5Y72FwO6AglNPm2gqE11IQxKdsD_Mf-cdsaQBxBLfWY4R_WkqAA&usqp=CAU'
        ],
        features: [
            'Long life',
            'Quick start',
            'Maintenance-free'
        ],
        specifications: {
            'Capacity': '35Ah',
            'Type': 'Sealed Maintenance Free'
        },
        options: {
            size: ['35Ah', '45Ah']
        },
        inStock: true,
        stockCount: 28,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '1326',
        name: 'ZOOK Car Vacuum Cleaner',
        description: 'Compact car vacuum cleaner with HEPA filter.',
        price: 1399,
        originalPrice: 1999,
        category: 'automotive',
        subcategory: 'cleaning',
        brand: 'ZOOK',
        rating: 4.4,
        reviewCount: 980,
        images: [
            'https://images-eu.ssl-images-amazon.com/images/I/71op6mKBraL._AC_UL495_SR435,495_.jpg',
            'https://rukminim2.flixcart.com/image/704/844/khuvxjk0-0/vacuum-cleaner/g/e/u/car-vacuum-cleaner-vacuum-sucking-handheld-vacuum-cleaner-with-original-imafxrr3nuf8bq9g.jpeg?q=20&crop=false'
        ],
        features: [
            'HEPA filter',
            'Strong suction',
            'Lightweight'
        ],
        specifications: {
            'Power': '120W',
            'Cord Length': '5m'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1327',
        name: 'Michelin Tyre Pressure Gauge',
        description: 'Digital tyre pressure gauge with backlit display.',
        price: 899,
        originalPrice: 1199,
        category: 'automotive',
        subcategory: 'tools',
        brand: 'Michelin',
        rating: 4.6,
        reviewCount: 500,
        images: [
            'https://m.media-amazon.com/images/I/61VL+i-l8gL.jpg',
            'https://i.ytimg.com/vi/gEzT8T5Htb0/maxresdefault.jpg'
        ],
        features: [
            'Accurate readings',
            'LED backlight',
            'Portable design'
        ],
        specifications: {
            'Range': '0-150 PSI',
            'Battery': 'Included'
        },
        options: {
            size: ['Standard']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '1328',
        name: 'Osram Night Breaker LED Headlight',
        description: 'High-intensity LED headlight bulbs for better visibility.',
        price: 3499,
        originalPrice: 4199,
        category: 'automotive',
        subcategory: 'lighting',
        brand: 'Osram',
        rating: 4.7,
        reviewCount: 880,
        images: [
            'https://m.media-amazon.com/images/I/81QIbpqF2ML.jpg',
            'https://m.media-amazon.com/images/I/71YRr4dxmNL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Cool white light',
            'Long lifespan',
            'Energy efficient'
        ],
        specifications: {
            'Type': 'LED',
            'Voltage': '12V'
        },
        options: {
            size: ['H4', 'H7']
        },
        inStock: true,
        stockCount: 55,
        tags: ['Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '1329',
        name: 'GoMechanic Car Cover',
        description: 'All-weather car body cover with mirror pockets.',
        price: 2199,
        originalPrice: 2699,
        category: 'automotive',
        subcategory: 'accessories',
        brand: 'GoMechanic',
        rating: 4.5,
        reviewCount: 760,
        images: [
            'https://m.media-amazon.com/images/I/71Inq2slwBL.jpg',
            'https://i5.walmartimages.com/seo/For-BMW-I8-Weatherproof-Outdoor-Car-Cover-All-Weather-Scratch-Resistant-Breathable-Dustproof-Material-Side-Mirror-Pockets-User-Friendly-Practical_c1613f75-8adb-4897-961d-8418357ca094.d730012cab5e4b9f553f6eb3d2b376ff.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
        ],
        features: [
            'Waterproof',
            'Dustproof',
            'UV protection'
        ],
        specifications: {
            'Material': 'Polyester',
            'Size': 'Sedan'
        },
        options: {
            size: ['Sedan', 'SUV']
        },
        inStock: true,
        stockCount: 48,
        tags: ['Trending'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '1330',
        name: 'Hero Bike Riding Gloves',
        description: 'Comfortable and protective gloves for bikers.',
        price: 699,
        originalPrice: 999,
        category: 'automotive',
        subcategory: 'safety',
        brand: 'Hero',
        rating: 4.6,
        reviewCount: 650,
        images: [
            'https://m.media-amazon.com/images/I/81DSB3rnZwL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMVauEm-fREmc9-0N2ktJqcTMWhGdEMlolGPMmAIWzhFzi93NfTftGtUaRVFIITJCp_I&usqp=CAU'
        ],
        features: [
            'Breathable fabric',
            'Non-slip grip',
            'Knuckle protection'
        ],
        specifications: {
            'Material': 'Leather + Mesh',
            'Size': 'Medium'
        },
        options: {
            size: ['M', 'L', 'XL']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    //health
    {
        id: '5001',
        name: 'Himalaya Pure Neem Tablets',
        description: 'Ayurvedic supplement that supports healthy skin and boosts immunity with the natural goodness of neem.',
        price: 199,
        originalPrice: 249,
        category: 'health',
        subcategory: 'supplements',
        brand: 'Himalaya',
        rating: 4.4,
        reviewCount: 1280,
        images: [
            'https://himalayawellness.in/cdn/shop/products/NEEM1.jpg?v=1647921730',
            'https://himalayawellness.in/cdn/shop/files/Neem-60caplets-4.jpg?v=1699337364'
        ],
        features: [
            'Supports skin health',
            'Boosts immunity',
            'Natural blood purifier',
            '100% vegetarian tablets'
        ],
        specifications: {
            'Form': 'Tablets',
            'Pack Size': '60 tablets',
            'Ingredients': 'Neem extracts',
            'Usage': 'Twice daily after meals'
        },
        options: {
            pack: ['60 tablets', '120 tablets']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Ayurvedic', 'Immunity'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '5002',
        name: 'Organic India Tulsi Green Tea',
        description: 'Refreshing herbal green tea blended with tulsi leaves, rich in antioxidants for stress relief and detox.',
        price: 299,
        originalPrice: 399,
        category: 'health',
        subcategory: 'beverages',
        brand: 'Organic India',
        rating: 4.6,
        reviewCount: 1980,
        images: [
            'https://organicindia.com/cdn/shop/files/Untitled-1_0006__51A5041.jpg?v=1704457220',
            'https://organicindia.com/cdn/shop/products/ClassicTin-Moodcopy.jpg?v=1750510669'
        ],
        features: [
            'Rich in antioxidants',
            'Helps in detoxification',
            'Boosts metabolism',
            'Stress relief with tulsi'
        ],
        specifications: {
            'Form': 'Tea Bags',
            'Pack Size': '25 bags',
            'Ingredients': 'Tulsi, Green Tea',
            'Caffeine': 'Low'
        },
        options: {
            flavor: ['Original', 'Lemon Ginger', 'Pomegranate']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Green Tea', 'Detox'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '5003',
        name: 'Yoga Mat with Carry Strap',
        description: 'Eco-friendly yoga mat made with non-slip material, ideal for daily workouts, yoga, and meditation.',
        price: 1299,
        originalPrice: 1799,
        category: 'health',
        subcategory: 'fitness',
        brand: 'Strauss',
        rating: 4.5,
        reviewCount: 2250,
        images: [
            'https://rukminim2.flixcart.com/image/480/480/kp4difk0/sport-mat/y/l/w/yoga-mat-for-men-and-women-for-home-gym-yoga-exercise-free-strap-original-imag3f54h7zmedep.jpeg?q=90',
            'https://images-cdn.ubuy.co.in/635f0015e1d4a73f2c77c9e5-yoga-mat-carrier-strap-soft-adjustable.jpg'
        ],
        features: [
            'Eco-friendly TPE material',
            'Anti-slip surface',
            'Lightweight and portable',
            'Includes carry strap'
        ],
        specifications: {
            'Material': 'TPE',
            'Thickness': '6mm',
            'Size': '183 x 61 cm',
            'Weight': '1.2 kg'
        },
        options: {
            color: ['Blue', 'Purple', 'Green', 'Black']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Yoga', 'Fitness'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4004',
        name: 'Kapiva Aloe Vera Juice',
        description: 'Cold-pressed aloe vera juice for digestion, hydration, and overall wellness, made from fresh pulp.',
        price: 349,
        originalPrice: 449,
        category: 'health',
        subcategory: 'juices',
        brand: 'Kapiva',
        rating: 4.2,
        reviewCount: 1120,
        images: [
            'https://m.media-amazon.com/images/I/71EWqdDbL8L.jpg',
            'https://www.jiomart.com/images/product/original/rvao4sttdg/kapiva-aloe-garcinia-juice-1-l-pack-of-2-legal-images-orvao4sttdg-p592217098-5-202206260146.jpg?im=Resize=(420,420)'
        ],
        features: [
            'Supports digestion',
            'Boosts hydration',
            'Strengthens immunity',
            'Cold-pressed extraction'
        ],
        specifications: {
            'Form': 'Juice',
            'Pack Size': '1L',
            'Ingredients': 'Aloe Vera Pulp',
            'Usage': '30ml daily with water'
        },
        options: {
            pack: ['1 Bottle', '2 Bottles']
        },
        inStock: true,
        stockCount: 65,
        tags: ['Aloe Vera', 'Wellness'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4005',
        name: 'MuscleBlaze Whey Protein Powder',
        description: 'High-quality whey protein with BCAAs for muscle recovery and lean body growth.',
        price: 2499,
        originalPrice: 2999,
        category: 'health',
        subcategory: 'sports nutrition',
        brand: 'MuscleBlaze',
        rating: 4.7,
        reviewCount: 3500,
        images: [
            'https://img8.hkrtcdn.com/39078/prd_3907787-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/protein-supplement/n/i/4/whey-protein-beginner-s-no-added-sugar-1-kg-with-shaker-650-ml-original-imahey9qnne47gsw.jpeg?q=90&crop=false'
        ],
        features: [
            '24g protein per serving',
            'Rich in BCAAs',
            'Supports muscle recovery',
            'Lab-tested for purity'
        ],
        specifications: {
            'Form': 'Powder',
            'Pack Size': '1kg',
            'Flavor': 'Chocolate',
            'Protein Per Serving': '24g'
        },
        options: {
            flavor: ['Chocolate', 'Vanilla', 'Cafe Mocha'],
            pack: ['1kg', '2kg']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Protein', 'Fitness'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4006',
        name: 'Philips Air Purifier Series 1000',
        description: 'Compact air purifier with HEPA filter, removes 99.97% airborne particles, ideal for home use.',
        price: 8499,
        originalPrice: 9999,
        category: 'health',
        subcategory: 'wellness devices',
        brand: 'Philips',
        rating: 4.6,
        reviewCount: 1920,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzjJb3K-x0Msvd1UJbp4SMNWeEIFUolvnIA&s',
            'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/dc77e598-3a1f-4eae-b538-a8394a23272a.jpg'
        ],
        features: [
            'Removes dust, pollen, smoke',
            'HEPA filter technology',
            'Quiet sleep mode',
            'Compact and stylish design'
        ],
        specifications: {
            'Coverage Area': '270 sq ft',
            'Filter Type': 'HEPA',
            'CADR': '270 m³/h',
            'Noise Level': '33 dB'
        },
        options: {
            color: ['White']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Air Purifier', 'Healthy Living'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 6
        }
    },
    {
        id: '4007',
        name: 'Dr. Trust Digital Weighing Scale',
        description: 'Smart digital bathroom scale with high precision sensors, tracks body weight and BMI.',
        price: 1199,
        originalPrice: 1599,
        category: 'health',
        subcategory: 'monitoring devices',
        brand: 'Dr Trust',
        rating: 4.3,
        reviewCount: 870,
        images: [
            'https://m.media-amazon.com/images/I/61U0TmATSpL.jpg',
            'https://drtrust.in/cdn/shop/files/dr-trust-usa-weighing-scale-digital-weighing-machine-for-body-weight-check-31165605085230_700x700.jpg?v=1734171874'
        ],
        features: [
            'High precision sensors',
            'Measures weight & BMI',
            'Digital LCD display',
            'Auto on/off function'
        ],
        specifications: {
            'Max Weight': '180 kg',
            'Display': 'LCD',
            'Power': '2 AAA batteries',
            'Material': 'Tempered glass'
        },
        options: {
            color: ['Black', 'Blue', 'White']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Weighing Scale', 'Fitness'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4008',
        name: 'Dabur Chyawanprash 1kg',
        description: 'Ayurvedic immunity booster with amla and 40+ herbs, enhances strength and stamina.',
        price: 349,
        originalPrice: 399,
        category: 'health',
        subcategory: 'immunity boosters',
        brand: 'Dabur',
        rating: 4.8,
        reviewCount: 4500,
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2022/2/IC/PC/RQ/115488608/-dabur-chyawanprash-2x-immunity-500x500.jpg',
            'https://assets.truemeds.in/Images/ProductImage/TM-HECA1-000071/DABUR-CHYAWANPRASH-1-KG_dabur-chyawanprash-1-kg--TM-HECA1-000071_4.webp?width=320'
        ],
        features: [
            'Boosts immunity',
            'Rich in Vitamin C',
            'Contains 40+ herbs',
            'Improves stamina'
        ],
        specifications: {
            'Form': 'Paste',
            'Pack Size': '1kg',
            'Main Ingredient': 'Amla',
            'Usage': '1-2 spoons daily'
        },
        options: {
            pack: ['500g', '1kg', '2kg']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Immunity', 'Ayurveda'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '4009',
        name: 'Fitbit Inspire 3 Fitness Tracker',
        description: 'Smart fitness tracker with heart rate monitoring, sleep tracking, and 10-day battery life.',
        price: 8999,
        originalPrice: 10999,
        category: 'health',
        subcategory: 'fitness gadgets',
        brand: 'Fitbit',
        rating: 4.5,
        reviewCount: 2800,
        images: [
            'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Product_Video_2096x1182_v2.width-700.format-webp.webp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xLXpj2-u5U3UtnjqqdmKzzR3L_HOnaouWg&s'
        ],
        features: [
            '24/7 heart rate monitoring',
            'Tracks steps, calories, and sleep',
            'Water resistant up to 50m',
            '10 days battery life'
        ],
        specifications: {
            'Display': 'AMOLED',
            'Battery Life': '10 days',
            'Compatibility': 'iOS & Android',
            'Weight': '20g'
        },
        options: {
            color: ['Black', 'Pink', 'Yellow']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Fitness Tracker', 'Wearable'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4010',
        name: 'Patanjali Ashwagandha Capsules',
        description: 'Natural herbal supplement that helps reduce stress, improve energy, and enhance immunity.',
        price: 149,
        originalPrice: 199,
        category: 'health',
        subcategory: 'supplements',
        brand: 'Patanjali',
        rating: 4.2,
        reviewCount: 980,
        images: [
            'https://www.patanjaliayurved.net/assets/product_images/400x500/17375404921(1).webp',
            'https://www.patanjaliayurved.net/assets/product_images/additional_images/1(3)_1737540492.webp'
        ],
        features: [
            'Reduces stress & anxiety',
            'Boosts stamina & energy',
            'Supports immune health',
            '100% vegetarian capsules'
        ],
        specifications: {
            'Form': 'Capsules',
            'Pack Size': '60 capsules',
            'Ingredients': 'Ashwagandha root extract',
            'Usage': 'Twice daily after meals'
        },
        options: {
            pack: ['60 capsules', '120 capsules']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Herbal', 'Stress Relief'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4011',
        name: 'Nivea Aloe Hydration Body Lotion',
        description: 'Lightweight body lotion with aloe vera extracts that provides 48-hour hydration for soft and healthy skin.',
        price: 299,
        originalPrice: 399,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Nivea',
        rating: 4.5,
        reviewCount: 2200,
        images: [
            'https://m.media-amazon.com/images/I/51NPSvwaVYL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx-MGar7C4YrIFwwWhYkAoF-ZZwMiK9GFdw&s'
        ],
        features: [
            '48-hour hydration',
            'Non-greasy formula',
            'Enriched with aloe vera',
            'Suitable for all skin types'
        ],
        specifications: {
            'Form': 'Lotion',
            'Pack Size': '400ml',
            'Skin Type': 'All',
            'Usage': 'Daily after bath'
        },
        options: {
            size: ['200ml', '400ml', '600ml']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Body Lotion', 'Moisturizer'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4012',
        name: 'Biotique Morning Nectar Moisturizer',
        description: 'Ayurvedic face and body moisturizer with honey and wheatgerm for nourished and glowing skin.',
        price: 220,
        originalPrice: 280,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Biotique',
        rating: 4.3,
        reviewCount: 1350,
        images: [
            'https://m.media-amazon.com/images/I/71wUhQVqYmL.jpg',
            'https://www.biotique.com/cdn/shop/files/8904352003820_3-min.jpg?v=1670239589'
        ],
        features: [
            '100% Ayurvedic recipe',
            'Honey enriched',
            'For all skin types',
            'Daily nourishment'
        ],
        specifications: {
            'Form': 'Lotion',
            'Pack Size': '190ml',
            'Skin Type': 'Normal to Dry',
            'Usage': 'Morning and evening'
        },
        options: {
            size: ['120ml', '190ml', '400ml']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Ayurvedic', 'Moisturizer'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '4013',
        name: 'Vaseline Intensive Care Cocoa Glow',
        description: 'Deep nourishing lotion with cocoa and shea butter for radiant and soft skin.',
        price: 375,
        originalPrice: 450,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Vaseline',
        rating: 4.6,
        reviewCount: 3100,
        images: [
            'https://rukminim2.flixcart.com/image/292/360/xif0q/moisturizer-cream/9/j/r/99-moisture-cocoa-glow-body-lotion-100mls-vaseline-lotion-original-imagwgx7upbdyrbs.jpeg?q=90&crop=false',
            'https://m.media-amazon.com/images/I/51r7G9tLfLL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Restores natural glow',
            'Non-greasy formula',
            'Cocoa & shea butter enriched',
            'Dermatologist tested'
        ],
        specifications: {
            'Form': 'Lotion',
            'Pack Size': '400ml',
            'Skin Type': 'Dry',
            'Usage': 'Daily after shower'
        },
        options: {
            size: ['200ml', '400ml']
        },
        inStock: true,
        stockCount: 110,
        tags: ['Lotion', 'Skin Glow'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4014',
        name: 'Forest Essentials Soundarya Radiance Cream',
        description: 'Luxury Ayurvedic cream infused with 24K gold and herbs, provides anti-aging benefits and radiant skin.',
        price: 2899,
        originalPrice: 3299,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Forest Essentials',
        rating: 4.8,
        reviewCount: 860,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/0/e/0e7b9288904153394349_8.jpg?tr=w-500',
            'https://m.media-amazon.com/images/I/81EH5fRz-zL._UF350,350_QL80_.jpg'
        ],
        features: [
            'Infused with 24K gold',
            'Anti-aging formula',
            'Herbal Ayurvedic blend',
            'Luxurious texture'
        ],
        specifications: {
            'Form': 'Cream',
            'Pack Size': '50g',
            'Skin Type': 'Mature skin',
            'Usage': 'Day & Night'
        },
        options: {
            size: ['30g', '50g']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Ayurvedic', 'Luxury Skin Care'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 6
        }
    },
    {
        id: '4015',
        name: 'WOW Skin Science Onion Black Seed Hair Oil',
        description: 'Nourishing hair oil that reduces hair fall, strengthens roots, and adds shine.',
        price: 399,
        originalPrice: 499,
        category: 'health',
        subcategory: 'hair care',
        brand: 'WOW',
        rating: 4.4,
        reviewCount: 2700,
        images: [
            'https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/201958/wow-skin-science-onion-black-seed-hair-oil-with-comb-applicator-100-ml-90_1_display_1715680385_54709b1f.jpg',
            'https://media.buywow.in/public/37230fad-64f8-4696-8707-a58814d12186?w=621&q=75&f=webp'
        ],
        features: [
            'Reduces hair fall',
            'Cold-pressed oils blend',
            'No mineral oil or silicones',
            'Strengthens roots'
        ],
        specifications: {
            'Form': 'Oil',
            'Pack Size': '200ml',
            'Hair Type': 'All',
            'Usage': '2-3 times weekly'
        },
        options: {
            pack: ['100ml', '200ml']
        },
        inStock: true,
        stockCount: 75,
        tags: ['Hair Oil', 'Natural'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4016',
        name: 'Kama Ayurveda Rose Water Face Mist',
        description: 'Pure steam-distilled rose water toner that refreshes and hydrates skin naturally.',
        price: 895,
        originalPrice: 1095,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Kama Ayurveda',
        rating: 4.7,
        reviewCount: 1450,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7pt-YL0uawgydZYkAoKwC2U1sEk22SgeWw&s',
            'https://bazaar5.com/image/cache/catalog/pro/product/apiData/b007upkk3u-kama-ayurveda-pure-rose-water-face-and-body-mist-6-8-fl-oz-pack-of-200ml-3-320x320.jpg'
        ],
        features: [
            '100% pure rose water',
            'Hydrates & tones skin',
            'Steam-distilled',
            'For all skin types'
        ],
        specifications: {
            'Form': 'Mist',
            'Pack Size': '200ml',
            'Skin Type': 'All',
            'Usage': 'Anytime refresh'
        },
        options: {
            size: ['50ml', '100ml', '200ml']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Rose Water', 'Hydration'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '4017',
        name: 'The Body Shop Vitamin E Night Cream',
        description: 'Rich overnight cream with Vitamin E and hyaluronic acid for intense hydration.',
        price: 1195,
        originalPrice: 1395,
        category: 'health',
        subcategory: 'skin care',
        brand: 'The Body Shop',
        rating: 4.6,
        reviewCount: 1980,
        images: [
            'https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/lifestyle/1000013781933-1000013781932_02-2100.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJscAaERTsTt_g9C1FGLMkMT6Yk-YyAo7kg&s'
        ],
        features: [
            'Deep hydration overnight',
            'Vitamin E + Hyaluronic acid',
            'Smoothens fine lines',
            'Non-greasy texture'
        ],
        specifications: {
            'Form': 'Cream',
            'Pack Size': '50ml',
            'Skin Type': 'Dry/Normal',
            'Usage': 'Night time'
        },
        options: {
            size: ['30ml', '50ml']
        },
        inStock: true,
        stockCount: 55,
        tags: ['Moisturizer', 'Hydration'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4018',
        name: 'Patanjali Coconut Oil',
        description: 'Pure edible coconut oil that can be used for cooking, hair nourishment, and skin care.',
        price: 175,
        originalPrice: 199,
        category: 'health',
        subcategory: 'oils',
        brand: 'Patanjali',
        rating: 4.2,
        reviewCount: 2100,
        images: [
            'https://www.patanjaliayurved.net/assets/product_images/400x500/1746620394virgincoconutoil250mlPO2homeimage.webp',
            'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F2037%2F1740654627171.png%3Ftype%3Dpng&w=1080&q=75'
        ],
        features: [
            '100% pure coconut oil',
            'Edible and multipurpose',
            'Boosts hair growth',
            'Moisturizes skin naturally'
        ],
        specifications: {
            'Form': 'Oil',
            'Pack Size': '500ml',
            'Type': 'Edible',
            'Usage': 'Cooking, hair, skin'
        },
        options: {
            pack: ['200ml', '500ml', '1L']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Coconut Oil', 'Natural'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '4019',
        name: 'Neutrogena UltraSheer Dry-Touch Sunscreen SPF 50+',
        description: 'Lightweight sunscreen with broad-spectrum SPF 50+ protection, water-resistant and non-greasy.',
        price: 549,
        originalPrice: 649,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Neutrogena',
        rating: 4.7,
        reviewCount: 3200,
        images: [
            'https://adn-static1.nykaa.com/media/wysiwyg/86800687900_9040524.png',
            'https://m.media-amazon.com/images/S/aplus-media/vc/7621f37b-d573-4761-8265-cb92418cca10.__CR0,0,350,175_PT0_SX350_V1___.png'
        ],
        features: [
            'SPF 50+ broad spectrum',
            'Non-greasy, matte finish',
            'Dermatologist tested',
            'Water-resistant'
        ],
        specifications: {
            'Form': 'Cream',
            'Pack Size': '88ml',
            'Skin Type': 'All',
            'Usage': 'Before sun exposure'
        },
        options: {
            size: ['30ml', '50ml', '88ml']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Sunscreen', 'Skin Protection'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4020',
        name: 'Mamaearth Ubtan Face Wash with Turmeric & Saffron',
        description: 'Natural face wash enriched with turmeric and saffron for tan removal and glowing skin.',
        price: 249,
        originalPrice: 299,
        category: 'health',
        subcategory: 'skin care',
        brand: 'Mamaearth',
        rating: 4.4,
        reviewCount: 2500,
        images: [
            'https://images.mamaearth.in/catalog/product/2/_/2_182.jpg?format=auto&height=600',
            'https://m.media-amazon.com/images/I/612kPONWlwL._UF350,350_QL80_.jpg'
        ],
        features: [
            'Removes tan',
            'Enriched with turmeric & saffron',
            'Dermatologically tested',
            'Suitable for all skin types'
        ],
        specifications: {
            'Form': 'Face Wash',
            'Pack Size': '100ml',
            'Skin Type': 'All',
            'Usage': 'Twice daily'
        },
        options: {
            pack: ['100ml', '200ml']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Face Wash', 'Natural'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4021',
        name: 'Himalaya Ashwagandha Tablets',
        description: 'Natural stress reliever and immunity booster with pure Ashwagandha extract.',
        price: 280,
        originalPrice: 350,
        category: 'health',
        subcategory: 'supplements',
        brand: 'Himalaya',
        rating: 4.5,
        reviewCount: 1800,
        images: [
            'https://m.media-amazon.com/images/I/71Rzl1CSqKL._UF350,350_QL80_.jpg',
            'https://m.media-amazon.com/images/I/71YESObJgsL.jpg'
        ],
        features: [
            'Supports stress relief',
            'Boosts stamina & immunity',
            '100% vegetarian',
            'Clinically tested herbs'
        ],
        specifications: {
            'Form': 'Tablet',
            'Count': '60',
            'Usage': '1 tablet twice daily',
            'Age Group': 'Adults'
        },
        options: {
            pack: ['60 tablets', '120 tablets']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Ayurvedic', 'Immunity Booster'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4022',
        name: 'Organic India Tea',
        description: 'Refreshing green tea blended with Tulsi leaves to promote detox and weight management.',
        price: 199,
        originalPrice: 249,
        category: 'health',
        subcategory: 'beverages',
        brand: 'Organic India',
        rating: 4.6,
        reviewCount: 2400,
        images: [
            'https://m.media-amazon.com/images/I/71KG-B1vtpL.jpg',
            'https://organicindia.com/cdn/shop/files/lemon-green-tea-weight-loss.jpg?v=1734084836'
        ],
        features: [
            'Detox and weight support',
            'Stress relieving adaptogen',
            'Caffeine with antioxidants',
            'Organic & natural'
        ],
        specifications: {
            'Form': 'Tea Bags',
            'Count': '25 bags',
            'Flavor': 'Tulsi Green Tea',
            'Usage': 'Daily beverage'
        },
        options: {
            pack: ['25 bags', '100 bags']
        },
        inStock: true,
        stockCount: 130,
        tags: ['Green Tea', 'Detox'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '4023',
        name: 'Kapiva Aloe Vera Juice',
        description: 'Cold-pressed aloe vera juice that aids digestion, skin health, and immunity.',
        price: 299,
        originalPrice: 399,
        category: 'health',
        subcategory: 'juices',
        brand: 'Kapiva',
        rating: 4.3,
        reviewCount: 980,
        images: [
            'https://www.jiomart.com/images/product/original/491470000/kapiva-ayurveda-aloe-vera-juice-1-l-product-images-o491470000-p491470000-0-202203170444.jpg?im=Resize=(420,420)',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfqg0hUiVVfDi2ZHAaiqK3FJYZobmZy8dSg&s'
        ],
        features: [
            'Supports digestion',
            'Improves skin glow',
            'Cold-pressed extraction',
            'Natural immunity booster'
        ],
        specifications: {
            'Form': 'Liquid',
            'Volume': '1L',
            'Ingredients': 'Aloe Vera pulp',
            'Usage': '30ml with water daily'
        },
        options: {
            pack: ['500ml', '1L']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Aloe Vera', 'Detox'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '4024',
        name: 'MuscleBlaze Protein Powder',
        description: 'High-quality whey protein blend for muscle recovery and strength building.',
        price: 4399,
        originalPrice: 6999,
        category: 'health',
        subcategory: 'supplements',
        brand: 'MuscleBlaze',
        rating: 4.6,
        reviewCount: 4100,
        images: [
            'https://worldofnutritions.com/cdn/shop/products/mbg.jpg?v=1680240571&width=1445',
            'https://5.imimg.com/data5/SELLER/Default/2023/3/RU/KK/PB/148546324/prd-1216961-muscleblaze-whey-active-4-500x500.jpg'
        ],
        features: [
            '25g protein per serving',
            'Supports muscle growth',
            'Gluten-free formula',
            'Added digestive enzymes'
        ],
        specifications: {
            'Form': 'Powder',
            'Weight': '1kg',
            'Flavor': 'Chocolate',
            'Usage': 'Post workout'
        },
        options: {
            flavor: ['Chocolate', 'Vanilla', 'Cafe Mocha']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Protein Powder', 'Fitness'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '4025',
        name: 'Aroma Magic Lavender Essential Oil',
        description: 'Pure lavender essential oil for relaxation, aromatherapy, and skin healing.',
        price: 325,
        originalPrice: 399,
        category: 'health',
        subcategory: 'essential oils',
        brand: 'Aroma Magic',
        rating: 4.5,
        reviewCount: 860,
        images: [
            'https://m.media-amazon.com/images/I/51qO9NWCmYL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_brqQb4b25vcrICBeuvzvs6TQeVWE5jdszg&s'
        ],
        features: [
            '100% pure essential oil',
            'Relieves stress & anxiety',
            'Promotes sleep',
            'Skin soothing properties'
        ],
        specifications: {
            'Form': 'Oil',
            'Pack Size': '20ml',
            'Usage': 'Aromatherapy / Skin care'
        },
        options: {
            size: ['10ml', '20ml']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Essential Oil', 'Relaxation'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '4026',
        name: ' Digital Weighing Scale',
        description: 'Accurate digital weighing scale with LCD display and step-on technology.',
        price: 1299,
        originalPrice: 14999,
        category: 'health',
        subcategory: 'fitness devices',
        brand: 'bajaj',
        rating: 4.4,
        reviewCount: 3100,
        images: [
            'https://ibellstore.com/uploads/products/IBL-WHB28--MAIN-f.jpg',
            'https://www.jiomart.com/images/product/original/rvje3ohri7/appslite-digital-kitchen-weighing-scale-0-1gm-to-10-kg-portable-weighting-machine-for-home-electronic-food-weight-machine-lcd-black-display-measuring-food-weighing-machine-product-images-orvje3ohri7-p600758388-2-202304210200.jpg?im=Resize=(420,420)'
        ],
        features: [
            'High-precision sensors',
            'Up to 180kg capacity',
            'Auto-calibration',
            'LCD backlit display'
        ],
        specifications: {
            'Type': 'Digital Scale',
            'Capacity': '180kg',
            'Power': '2 AAA batteries',
            'Display': 'LCD'
        },
        options: {
            color: ['Black', 'Blue', 'White']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Fitness', 'Body Weight'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '4027',
        name: 'Dettol Instant Hand Sanitizer',
        description: 'Trusted antibacterial hand sanitizer that kills 99.9% of germs without water.',
        price: 65,
        originalPrice: 75,
        category: 'health',
        subcategory: 'hygiene',
        brand: 'Dettol',
        rating: 4.7,
        reviewCount: 5000,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqGlSTD9fswfIA2uGP0RaFLUn6chhrQ5u-Q&s',
            'https://cdn01.pharmeasy.in/dam/products_otc/T41819/dettol-instant-hand-sanitizer-original-200-ml-6.2-1671741918.jpg?dim=480x480&q=75'
        ],
        features: [
            'Kills 99.9% of germs',
            'Rinse-free & non-sticky',
            'Trusted brand',
            'Pocket-friendly pack'
        ],
        specifications: {
            'Form': 'Gel',
            'Pack Size': '50ml',
            'Usage': 'Hand hygiene anytime'
        },
        options: {
            pack: ['50ml', '100ml', '500ml']
        },
        inStock: true,
        stockCount: 300,
        tags: ['Sanitizer', 'Hygiene'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '4028',
        name: 'Fitbit Fitness Tracker',
        description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and activity tracking.',
        price: 8999,
        originalPrice: 10999,
        category: 'health',
        subcategory: 'wearables',
        brand: 'Fitbit',
        rating: 4.6,
        reviewCount: 2750,
        images: [
            'https://cdn.mos.cms.futurecdn.net/T8Xoz94Yv5pr3cpYCp7dMC.jpg',
            'https://images.expertreviews.co.uk/wp-content/uploads/2020/12/fitbit_inspire_2_review_9.jpg'
        ],
        features: [
            'Continuous heart rate monitoring',
            'Sleep & stress tracking',
            '10 days battery life',
            'Water resistant up to 50m'
        ],
        specifications: {
            'Type': 'Fitness Tracker',
            'Battery Life': '10 days',
            'Connectivity': 'Bluetooth',
            'Compatibility': 'Android & iOS'
        },
        options: {
            color: ['Black', 'Lilac', 'Sunrise']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Fitness Tracker', 'Wearable'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '29',
        name: 'Sony WH-1000XM5 Wireless Headphones',
        description: 'Industry-leading noise cancellation, long battery life, and premium sound quality for immersive listening.',
        price: 348.99,
        originalPrice: 399.99,
        category: 'electronics',
        subcategory: 'headphones',
        brand: 'Sony',
        rating: 4.7,
        reviewCount: 4521,
        images: [
            'https://images-cdn.ubuy.co.in/652127b10b0a4502220f9985-sony-wh-1000xm5-headphones-wireless.jpg',
            'https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_10_youun4.png'
        ],
        features: [
            'Industry-leading noise cancellation',
            '30 hours battery life',
            'Touch controls',
            'Voice assistant compatible',
            'Wearing detection',
            'High-resolution audio'
        ],
        specifications: {
            'Connectivity': 'Bluetooth 5.2',
            'Battery Life': '30 hours',
            'Charging Time': '3 hours',
            'Weight': '250g',
            'Microphone': 'Built-in for calls',
            'Water Resistance': 'IPX4'
        },
        options: {
            color: ['Black', 'Silver', 'Blue']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Best Seller', 'Top Rated'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 1
        }
    },
    {
        id: '8001',
        name: 'Zebronics Zeb-Sound Bomb 7 TWS Earbuds',
        description: 'True wireless earbuds with deep bass, ENC for clear calls, touch controls, and long battery life.',
        price: 1799,
        originalPrice: 2999,
        category: 'electronics',
        subcategory: 'audio',
        brand: 'Zebronics',
        rating: 4.3,
        reviewCount: 2150,
        images: [
            'https://cdn.shopify.com/s/files/1/0356/9850/7909/files/zeb-sound_bomb7-banner2.jpg?v=1658294078',
            'https://cdn.shopify.com/s/files/1/0641/2907/3385/files/zeb-sound-bomb7-banner5.jpg?v=1662812689'
        ],
        features: [
            'Environmental Noise Cancellation (ENC)',
            'Deep bass with 13mm drivers',
            'Touch controls for music & calls',
            'Type-C fast charging',
            'IPX4 water resistance',
            'Up to 30 hours playtime with case'
        ],
        specifications: {
            'Type': 'In-Ear True Wireless',
            'Driver Size': '13mm',
            'Battery Life': '7 hours (earbuds), 30 hours with case',
            'Connectivity': 'Bluetooth 5.2',
            'Charging Port': 'USB Type-C'
        },
        options: {
            color: ['Black', 'White', 'Blue']
        },
        inStock: true,
        stockCount: 55,
        tags: ['Earbuds', 'Wireless', 'Zebronics'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '30',
        name: 'Levi’s 501 Original Fit Jeans',
        description: 'Classic straight-leg jeans with button-fly and durable denim for everyday wear.',
        price: 59.99,
        originalPrice: 79.99,
        category: 'fashion',
        subcategory: 'jeans',
        brand: 'Levi’s',
        rating: 4.5,
        reviewCount: 2312,
        images: [
            ' https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQz1kgDj7CYeVgbG6OlYFs5APIAJXRgVzK2X2FQjTPW_A7QuOEvU08SafkPdIMKyafFCZBP_5DnfD6x1VnM_C4Ox6Tk_jnutSOvDdFV1w7y',
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRs634tspQSOJDHBTkbwa2h8nYUwdAN9A9O2Dc031MvHOgaLmmQby7TAUw1XQR7iobowKOkROdA1w2TlsRv8rZSlRJlGCjods334Q7fKqztARYeIEYHou0_4Q'
        ],
        features: [
            'Classic straight-leg cut',
            'Button-fly design',
            'Durable denim fabric',
            'Five-pocket styling',
            'Machine washable',
            'Iconic Levi’s branding'
        ],
        specifications: {
            'Material': '100% Cotton Denim',
            'Fit': 'Original',
            'Rise': 'Mid-rise',
            'Closure': 'Button-fly',
            'Care': 'Machine wash cold',
            'Origin': 'Made in USA'
        },
        options: {
            size: ['28', '30', '32', '34', '36', '38', '40'],
            color: ['Indigo', 'Light Wash', 'Black', 'Stonewash']
        },
        inStock: true,
        stockCount: 45,
        tags: ['Classic Style'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '6002',
        name: 'Adidas Unisex Baseball Cap',
        description: 'Classic 6-panel baseball cap with adjustable strap and embroidered Adidas logo.',
        price: 1299,
        originalPrice: 1599,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Adidas',
        rating: 4.5,
        reviewCount: 1340,
        images: [
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/fbed1d0e3f6b4392a7659daeefc06c9c_faec/TREFOIL_BASEBALL_CAP_Green_IX7571_db41_detail_hover.tiff.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSIFxpTorRyXWSkboLD5H8w0abFFNQxk7dkT0D-jlPdH6Jx8B_e_Ku_syJmDT4BfczNg&usqp=CAU'
        ],
        features: [
            'Embroidered Adidas logo',
            'Curved brim for sun protection',
            'Adjustable strap for custom fit',
            'Breathable cotton fabric',
            'Unisex design'
        ],
        specifications: {
            'Material': '100% Cotton',
            'Closure': 'Adjustable strapback',
            'Style': 'Casual / Sports',
            'Care': 'Hand wash recommended'
        },
        options: {
            color: ['Black', 'White', 'Navy Blue', 'Red']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Cap', 'Casual Wear', 'Unisex'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '43',
        name: 'GoPro HERO11 Black',
        description: 'Waterproof action camera with HyperSmooth stabilization, 5.3K video, and enhanced low-light performance.',
        price: 399.99,
        originalPrice: 449.99,
        category: 'electronics',
        subcategory: 'cameras',
        brand: 'GoPro',
        rating: 4.7,
        reviewCount: 5210,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiU4hZFr--GsA41GoLds04BGTRKifbgeOjQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xyBfsyBTP7wSyMQ0YDz7DG8HdA16TgLiZrB6nDigyStU9IErlzKaFYdT9PjfHHk3rHE&usqp=CAU'
        ],
        features: [
            '5.3K video at 60fps',
            'HyperSmooth 5.0 stabilization',
            'Waterproof up to 33 ft',
            'HindSight and LiveBurst features',
            'Advanced low-light performance',
            'Voice control'
        ],
        specifications: {
            'Video Resolution': '5.3K60',
            'Waterproof': '33 ft / 10m',
            'Battery': 'Enduro battery included',
            'Connectivity': 'Wi-Fi, Bluetooth',
            'Weight': '153g',
            'Storage': 'MicroSD card supported'
        },
        options: {
            accessories: ['Protective housing', 'Extra battery', 'Mount kits']
        },
        inStock: true,
        stockCount: 12,
        tags: ['Adventure', 'Waterproof'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    // Home Appliances
    {
        id: '3001',
        name: 'Prestige Electric Kettle 1.5L',
        description: 'Quick-boil electric kettle with auto shut-off and stainless steel body.',
        price: 1299,
        originalPrice: 1699,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Prestige',
        rating: 4.5,
        reviewCount: 950,
        images: [
            'https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-gm-master-catalog/default/dwd84ec6cf/images/large/1265006441_4.jpg?sw=900&sh=900',
            'https://www.rasoishop.com/cdn/shop/files/preview_images/hqdefault.jpg?v=1682427554&width=1946'
        ],
        features: [
            '1.5L capacity',
            'Auto shut-off',
            '360° swivel base'
        ],
        specifications: {
            'Power': '1500W',
            'Material': 'Stainless Steel',
            'Warranty': '1 Year'
        },
        inStock: true,
        stockCount: 50,
        tags: ['Best Seller', 'Kitchen']
    },
    {
        id: '3002',
        name: 'Philips 750W Mixer Grinder',
        description: '3-jar mixer grinder with powerful motor and overload protection.',
        price: 2999,
        originalPrice: 3599,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Philips',
        rating: 4.6,
        reviewCount: 1200,
        images: [
            'https://cdn.shopify.com/s/files/1/0643/8253/3718/files/HL7756_00Feature_Durablecouplerr_460x330pxls.jpg',
            'https://cdn.shopify.com/s/files/1/0643/8253/3718/files/HL7701_00Feature_4differentjars_460x330pxls.jpg'
        ],
        features: [
            '750W motor',
            '3 stainless steel jars',
            'Overload protection'
        ],
        specifications: {
            'Power': '750W',
            'Blades': 'Stainless Steel',
            'Warranty': '2 Years'
        },
        inStock: true,
        stockCount: 40,
        tags: ['Durable', 'Kitchen']
    },
    {
        id: '3003',
        name: 'Samsung 7kg Front Load Washing Machine',
        description: 'Fully automatic front-load washing machine with inverter motor.',
        price: 28990,
        originalPrice: 32990,
        category: 'home appliances',
        subcategory: 'laundry',
        brand: 'Samsung',
        rating: 4.7,
        reviewCount: 670,
        images: [
            'https://m.media-amazon.com/images/I/71CxaZzkHML._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqgyHEylDysM2ebG0oNoChjOK-yXexqZpxg&s'
        ],
        features: [
            '7kg capacity',
            'EcoBubble technology',
            'Inverter motor'
        ],
        specifications: {
            'Capacity': '7kg',
            'Type': 'Front Load',
            'Warranty': '3 Years'
        },
        inStock: true,
        stockCount: 20,
        tags: ['Premium', 'Laundry']
    },
    {
        id: '3004',
        name: 'LG 260L Double Door Refrigerator',
        description: 'Frost-free double door fridge with smart inverter compressor.',
        price: 22990,
        originalPrice: 25990,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'LG',
        rating: 4.6,
        reviewCount: 820,
        images: [
            'https://www.jiomart.com/images/product/original/491666528/lg-260-l-2-star-inverter-frost-free-double-door-refrigerator-gl-s292rpzy-shinny-steel-convertible-refrigerator-digital-o491666528-p590039617-12-202305161531.jpeg?im=Resize=(420,420)',
            'https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/updated/new/GL-S292RPZY-2010x1334-2.jpg/jcr:content/renditions/thum-1600x1062.jpeg'
        ],
        features: [
            '260L capacity',
            'Smart inverter compressor',
            'Auto defrost'
        ],
        specifications: {
            'Capacity': '260L',
            'Type': 'Double Door',
            'Warranty': '1 Year comprehensive, 10 Years compressor'
        },
        inStock: true,
        stockCount: 15,
        tags: ['Energy Efficient', 'Kitchen']
    },
    {
        id: '3005',
        name: 'Bajaj 1000W Dry Iron',
        description: 'Lightweight dry iron with non-stick soleplate and temperature control.',
        price: 799,
        originalPrice: 999,
        category: 'home appliances',
        subcategory: 'laundry',
        brand: 'Bajaj',
        rating: 4.4,
        reviewCount: 540,
        images: [
            'https://m.media-amazon.com/images/I/719Ee07cjcL.jpg',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/iron/5/i/a/popular-bajaj-original-imahc6q9myantagk.jpeg?q=90&crop=false'
        ],
        features: [
            '1000W power',
            'Non-stick soleplate',
            'Adjustable thermostat'
        ],
        specifications: {
            'Power': '1000W',
            'Cord Length': '1.8m',
            'Warranty': '2 Years'
        },
        inStock: true,
        stockCount: 70,
        tags: ['Essential', 'Laundry']
    },
    {
        id: '3006',
        name: 'Havells Rigo Juicer',
        description: 'Cold press juicer for healthy and fresh juices with minimal oxidation.',
        price: 8999,
        originalPrice: 9999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Havells',
        rating: 4.5,
        reviewCount: 330,
        images: [
            'https://electronicparadise.in/cdn/shop/files/main02.png?v=1709187878&width=640',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgCgEysqgK7_nx9c9yVYTOwNcLFz3A4qdWQ&s'
        ],
        features: [
            'Cold press technology',
            'Easy to clean',
            'Retains nutrients'
        ],
        specifications: {
            'Power': '150W',
            'Material': 'Plastic & Steel',
            'Warranty': '2 Years'
        },
        inStock: true,
        stockCount: 25,
        tags: ['Healthy Living', 'Kitchen']
    },
    {
        id: '3007',
        name: 'Butterfly Smart Glass Top Gas Stove (2 Burner)',
        description: 'Durable glass top gas stove with high-efficiency brass burners.',
        price: 2799,
        originalPrice: 3499,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Butterfly',
        rating: 4.3,
        reviewCount: 640,
        images: [
            'https://m.media-amazon.com/images/I/710kzNbkv6L._UF894,1000_QL80_.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2023/12/365772353/SG/GE/DJ/192485432/3-burner-glass-gas-stove-500x500.jpg'
        ],
        features: [
            'Toughened glass top',
            'High-efficiency brass burners',
            'Ergonomic design'
        ],
        specifications: {
            'Burners': '2',
            'Material': 'Glass & Steel',
            'Warranty': '1 Year'
        },
        inStock: true,
        stockCount: 60,
        tags: ['Essential', 'Kitchen']
    },
    {
        id: '3008',
        name: 'Dyson V8 Absolute Cordless Vacuum Cleaner',
        description: 'High suction cordless vacuum cleaner with multiple attachments.',
        price: 32990,
        originalPrice: 35990,
        category: 'home appliances',
        subcategory: 'cleaning',
        brand: 'Dyson',
        rating: 4.8,
        reviewCount: 920,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/vacuum-cleaner/1/h/b/-original-imagzuhvm6gqrp9b.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/704/844/ktx9si80/vacuum-cleaner/f/m/x/v8-absolute-dyson-original-imag75wegmagbc7w.jpeg?q=90&crop=false'
        ],
        features: [
            'Cord-free convenience',
            'Up to 40 mins runtime',
            'HEPA filtration'
        ],
        specifications: {
            'Power': '425W',
            'Dustbin Capacity': '0.54L',
            'Warranty': '2 Years'
        },
        inStock: true,
        stockCount: 10,
        tags: ['Premium', 'Cleaning']
    },
    {
        id: '3009',
        name: 'Usha 1600W Steam Iron',
        description: 'Powerful steam iron with ceramic soleplate and vertical steaming.',
        price: 1999,
        originalPrice: 2299,
        category: 'home appliances',
        subcategory: 'laundry',
        brand: 'Usha',
        rating: 4.6,
        reviewCount: 480,
        images: [
            'https://m.media-amazon.com/images/I/51+i3nkf+dL._UF894,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75cde-DBcxvRvgmONn4cE5Vyn2vgikXp8hg&s'
        ],
        features: [
            'Ceramic soleplate',
            'Vertical steam',
            'Anti-drip system'
        ],
        specifications: {
            'Power': '1600W',
            'Cord Length': '2m',
            'Warranty': '2 Years'
        },
        inStock: true,
        stockCount: 45,
        tags: ['Laundry', 'New Arrival']
    },
    {
        id: '3010',
        name: 'Kent Grand Plus RO Water Purifier',
        description: 'Wall-mounted RO+UV+UF water purifier with 9L storage.',
        price: 17999,
        originalPrice: 19999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Kent',
        rating: 4.6,
        reviewCount: 760,
        images: [
            'https://shop.kent.co.in/cdn/shop/files/A_Info-Grand-Plus-New-3_200x200.png?v=1741241715',
            'https://www.sathya.store/img/product/kskCha37AiTGtUi0.png'
        ],
        features: [
            'Multiple purification process',
            '9L storage tank',
            'Auto-flushing system'
        ],
        specifications: {
            'Capacity': '9L',
            'Purification': 'RO+UV+UF',
            'Warranty': '1 Year'
        },
        inStock: true,
        stockCount: 30,
        tags: ['Healthy Living', 'Kitchen']
    },
    {
        id: '44',
        name: 'KitchenAid Artisan Stand Mixer',
        description: 'Iconic stand mixer with 10-speed control, tilt-head design, and a powerful motor for effortless mixing.',
        price: 349.99,
        originalPrice: 399.99,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'KitchenAid',
        rating: 4.8,
        reviewCount: 6124,
        images: [
            'https://m.media-amazon.com/images/I/512t6W+e3wL._UF894,1000_QL80_.jpg',
            'https://www.kitchenaid.in/content/kitchenaid/en_in/countertop-appliances/stand-mixers/_jcr_content/root/main/responsivegrid/responsivegrid_copy__618305943/container_copy_copy__1486777444/wrapperParsys/image_1644220087.coreimg.jpeg/1589379053812/mini-thumbnail.jpeg'
        ],
        features: [
            '10-speed mixing',
            'Tilt-head for easy access',
            'Glass bowl included',
            'Multiple attachments supported',
            'Powerful motor for heavy mixtures',
            'Elegant design with color options'
        ],
        specifications: {
            'Capacity': '5 quarts',
            'Power': '325W',
            'Speed Settings': '10',
            'Weight': '12 lbs',
            'Material': 'Die-cast metal',
            'Dimensions': '14 x 9 x 14 inches'
        },
        options: {
            color: ['Empire Red', 'Onyx Black', 'Aqua Sky', 'Matte White']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Baking', 'Professional'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '3015',
        name: 'LG 7kg Front Load Washing Machine',
        description: 'Energy-efficient front load washing machine with inverter direct drive technology for quiet and powerful performance.',
        price: 28999,
        originalPrice: 35999,
        category: 'home appliances',
        subcategory: 'laundry',
        brand: 'LG',
        rating: 4.6,
        reviewCount: 2140,
        images: [
            'https://assets.nikshanonline.com/wp-content/uploads/2024/11/LG-7-Kg-5-Star-Direct-Drive-Technology-Steam-Wash-6-Motion-DD-Fully-Automatic-Front-Load-Washing-Machine-5.jpg',
            'https://lgbyunilet.com/wp-content/uploads/2024/10/FHB1207Z4M-DZ-04.webp'
        ],
        features: [
            'Inverter Direct Drive motor',
            '6 Motion Control Technology',
            'Smart Diagnosis with mobile app',
            'Energy-efficient with less vibration',
            'Child lock and delay start',
            'Stainless steel drum'
        ],
        specifications: {
            'Capacity': '7 kg',
            'Type': 'Front Load',
            'Energy Rating': '5 Star',
            'Spin Speed': '1200 RPM',
            'Noise Level': '54 dB',
            'Dimensions': '600 x 850 x 565 mm'
        },
        options: {
            color: ['White', 'Silver'],
            warranty: ['2 Years', '5 Years Motor']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Laundry', 'Energy Efficient'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '3016',
        name: 'Samsung 253L Double Door Refrigerator',
        description: 'Frost-free refrigerator with digital inverter compressor and energy-efficient cooling.',
        price: 23999,
        originalPrice: 28999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Samsung',
        rating: 4.7,
        reviewCount: 1840,
        images: [
            'https://sharptronics.in/cdn/shop/products/61Nth0OcOsL._AC_SL1500.jpg?crop=center&height=1500&v=1619690223&width=901',
            'https://rukminim2.flixcart.com/image/300/300/refrigerator-new/q/j/r/samsung-rt30k3983uz-original-imaejngheewfxdxy.jpeg'
        ],
        features: [
            'Digital inverter compressor',
            'Stabilizer-free operation',
            'Frost-free cooling',
            'Convertible freezer',
            'LED lighting'
        ],
        specifications: {
            'Capacity': '253L',
            'Type': 'Double Door',
            'Energy Rating': '3 Star',
            'Freezer Position': 'Top',
            'Dimensions': '555 x 1545 x 637 mm'
        },
        options: {
            color: ['Elegant Inox', 'Pebble Blue']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Cooling', 'Kitchen Essential'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '3017',
        name: 'Philips Air Fryer XL',
        description: 'Healthy cooking with rapid air technology for frying, grilling, roasting, and baking.',
        price: 10999,
        originalPrice: 13999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Philips',
        rating: 4.5,
        reviewCount: 960,
        images: [
            'https://mahajanelectronics.com/cdn/shop/files/HD92704.jpg?v=1698768279',
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Philips-HD9280-91-Connected-XL-air-fryer-39a12b0.jpg?quality=90&resize=708,643'
        ],
        features: [
            'Rapid Air Technology',
            'Extra-large basket',
            'Low-oil frying',
            'Digital touchscreen',
            'Keep warm function'
        ],
        specifications: {
            'Capacity': '6.2L',
            'Power': '2000W',
            'Controls': 'Digital',
            'Voltage': '220-240V',
            'Dimensions': '403 x 315 x 307 mm'
        },
        options: {
            color: ['Black']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Healthy Cooking', 'Kitchen'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '3018',
        name: 'Dyson V12 Cordless Vacuum Cleaner',
        description: 'Powerful lightweight cordless vacuum with laser dust detection and up to 60 minutes runtime.',
        price: 42999,
        originalPrice: 49999,
        category: 'home appliances',
        subcategory: 'cleaning',
        brand: 'Dyson',
        rating: 4.8,
        reviewCount: 1250,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeuoe3yw1ywMF9DY-Oo0STYwqXtzonglhv6Q&s',
            'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v12s-detect-slim/pdp/gold-gold/gallery/620H_Gallery_Submarine_head.jpg%20?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920'
        ],
        features: [
            'Laser dust detection',
            'Up to 60 minutes runtime',
            'Advanced filtration',
            'Lightweight design',
            'Cord-free convenience'
        ],
        specifications: {
            'Suction Power': '150 AW',
            'Weight': '2.2 kg',
            'Run Time': '60 mins',
            'Charge Time': '4 hrs',
            'Bin Volume': '0.35L'
        },
        options: {
            attachments: ['Crevice Tool', 'Mini Motorized Head']
        },
        inStock: true,
        stockCount: 12,
        tags: ['Cleaning', 'Smart Home'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 6
        }
    },
    {
        id: '3012',
        name: 'Morphy Richards Espresso Coffee Maker',
        description: 'Compact espresso machine with milk frother for café-style coffee at home.',
        price: 6999,
        originalPrice: 8999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Morphy Richards',
        rating: 4.3,
        reviewCount: 560,
        images: [
            'https://delhielectronicsplaza.com/cdn/shop/products/91TyCOIk1lL._SL1500_780x825_crop_top.jpg?v=1599125910',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/coffee-maker/p/c/a/europa-expresso-350014-morphy-richards-original-imagzh5gkxznfhgh.jpeg?q=90&crop=false'
        ],
        features: [
            'Steam control knob',
            'Milk frothing nozzle',
            'Detachable drip tray',
            'Easy clean system',
            'Compact design'
        ],
        specifications: {
            'Type': 'Espresso',
            'Power': '800W',
            'Capacity': '4 cups',
            'Pressure': '5 Bar',
            'Weight': '3.5 kg'
        },
        options: {
            color: ['Black', 'Silver']
        },
        inStock: true,
        stockCount: 28,
        tags: ['Coffee', 'Kitchen'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '3013',
        name: 'Preethi Zodiac Mixer Grinder',
        description: 'Powerful 750W mixer grinder with multiple jars for grinding, juicing, and food processing.',
        price: 6799,
        originalPrice: 8599,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Preethi',
        rating: 4.6,
        reviewCount: 2320,
        images: [
            'https://img.youtube.com/vi/FXXkbVGbHcQ/0.jpg?q=20',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/mixer-grinder-juicer/f/r/u/-original-imahedyjzg6agbdk.jpeg?q=20&crop=false'

        ],
        features: [
            '750W motor',
            '5 multifunction jars',
            'Juicer attachment',
            'Stainless steel blades',
            'Overload protection'
        ],
        specifications: {
            'Power': '750W',
            'Speed Settings': '3',
            'Jar Capacity': '1.5L, 1L, 0.5L',
            'Weight': '6.5 kg'
        },
        options: {
            color: ['Black', 'White']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Mixer Grinder', 'Kitchen'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '3014',
        name: 'iRobot Roomba 692 Robot Vacuum',
        description: 'Smart Wi-Fi connected robot vacuum with adaptive navigation and voice assistant support.',
        price: 22999,
        originalPrice: 26999,
        category: 'home appliances',
        subcategory: 'cleaning',
        brand: 'iRobot',
        rating: 4.5,
        reviewCount: 1780,
        images: [
            'https://m.media-amazon.com/images/I/71Z0tjaNkXL._UF894,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/71AWtS4pxHS._UF350,350_QL80_.jpg'
        ],
        features: [
            'Wi-Fi & app control',
            'Works with Alexa & Google Assistant',
            'Adaptive navigation',
            'Dirt detect sensors',
            '90 mins runtime'
        ],
        specifications: {
            'Runtime': '90 mins',
            'Battery Type': 'Lithium-ion',
            'Dustbin Capacity': '0.6L',
            'Charge Time': '3 hrs',
            'Weight': '3.5 kg'
        },
        options: {
            color: ['Black', 'Grey']
        },
        inStock: true,
        stockCount: 16,
        tags: ['Robot Vacuum', 'Smart Home'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 6
        }
    },
    {
        id: '3020',
        name: 'Faber Wall Mount Chimney 90cm',
        description: 'Stylish wall-mounted kitchen chimney with high suction capacity and touch control panel.',
        price: 13999,
        originalPrice: 18999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Faber',
        rating: 4.4,
        reviewCount: 640,
        images: [
            'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Electric%20Chimney/Images/270724_0_hz7pv8.png',
            'https://faberindia.com/cdn/shop/files/image_1_fb8ee270-0edf-4c5f-9fa6-6de1c541832a.png?v=1739171185'
        ],
        features: [
            'High suction capacity',
            'Auto-clean function',
            'Oil collector tray',
            'Touch control panel',
            'Elegant design'
        ],
        specifications: {
            'Size': '90 cm',
            'Suction Power': '1200 m³/hr',
            'Filter': 'Filterless',
            'Noise Level': '58 dB'
        },
        options: {
            color: ['Black', 'Silver']
        },
        inStock: true,
        stockCount: 22,
        tags: ['Kitchen Chimney', 'Smoke-Free'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '3021',
        name: 'AO Smith 25L Water Heater',
        description: 'Storage geyser with advanced glass-coated heating element for long-lasting performance.',
        price: 8999,
        originalPrice: 10999,
        category: 'home appliances',
        subcategory: 'bathroom',
        brand: 'AO Smith',
        rating: 4.5,
        reviewCount: 1340,
        images: [
            'https://m.media-amazon.com/images/I/61jQH8n3CiL.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2022/7/YE/BM/EI/88042468/ao-smith-finesse-25-litre-500x500.jpg'

        ],
        features: [
            'Blue diamond glass-lined tank',
            'Temperature control knob',
            '8 bar pressure rating',
            'Energy efficient',
            'Safety valve'
        ],
        specifications: {
            'Capacity': '25L',
            'Type': 'Storage',
            'Power': '2000W',
            'Pressure': '8 bar',
            'Weight': '12.8 kg'
        },
        options: {
            color: ['White']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Water Heater', 'Bathroom'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '3022',
        name: 'Philips Daily Collection 2-Slice Toaster',
        description: 'Compact toaster with auto pop-up and variable browning control.',
        price: 1999,
        originalPrice: 2499,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Philips',
        rating: 4.2,
        reviewCount: 870,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/pop-up-toaster/x/p/t/-original-imahf77wqenut2pg.jpeg?q=90&crop=false',
            'https://m.media-amazon.com/images/I/61T7y-zlojL._UF350,350_QL80_FMwebp_.jpg'
        ],
        features: [
            'Auto pop-up',
            'Variable browning control',
            'Compact design',
            'Removable crumb tray',
            'Cool touch body'
        ],
        specifications: {
            'Capacity': '2 slices',
            'Power': '830W',
            'Weight': '1.5 kg',
            'Cord Length': '1.2 m'
        },
        options: {
            color: ['White', 'Black']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Toaster', 'Breakfast'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '3023',
        name: 'Usha 35L OTG Oven',
        description: 'Electric oven toaster griller with rotisserie and convection functions.',
        price: 6999,
        originalPrice: 8499,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Usha',
        rating: 4.3,
        reviewCount: 540,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/otg-new/k/q/w/-original-imaghzsatjdfy4ga.jpeg?q=90&crop=false',
            'https://i.ytimg.com/vi/8PU-5CD42Y0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB24XDUCIy9NBMm2ZzGxgIdHUwNUg'
        ],
        features: [
            'Rotisserie function',
            'Convection heating',
            'Timer with auto shut off',
            'Glass door',
            'Adjustable racks'
        ],
        specifications: {
            'Capacity': '35L',
            'Power': '1600W',
            'Type': 'OTG',
            'Weight': '9.5 kg'
        },
        options: {
            color: ['Black', 'Silver']
        },
        inStock: true,
        stockCount: 26,
        tags: ['OTG', 'Baking'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '3019',
        name: 'Symphony Diet 12T Air Cooler',
        description: 'Compact personal air cooler with honeycomb pads and low power consumption.',
        price: 6499,
        originalPrice: 7999,
        category: 'home appliances',
        subcategory: 'cooling',
        brand: 'Symphony',
        rating: 4.1,
        reviewCount: 960,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2vufJENDI6IZC3Nf43BnGjfoF3LvsAjsHw&s',
            'https://rukminim2.flixcart.com/image/704/844/xif0q/air-cooler/w/f/m/-original-imah4n6ymwdpqr98.jpeg?q=90&crop=false'
        ],
        features: [
            '12L tank capacity',
            'Honeycomb pads',
            'Low power consumption',
            'Castor wheels',
            'Cool flow dispenser'
        ],
        specifications: {
            'Tank Capacity': '12L',
            'Cooling Coverage': '120 sq ft',
            'Power': '170W',
            'Weight': '7.7 kg'
        },
        options: {
            color: ['White', 'Grey']
        },
        inStock: true,
        stockCount: 48,
        tags: ['Air Cooler', 'Cooling'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '3025',
        name: 'IFB Neptune VX Dishwasher',
        description: 'Energy-efficient dishwasher with flexible racks and half-load option.',
        price: 37999,
        originalPrice: 43999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'IFB',
        rating: 4.5,
        reviewCount: 740,
        images: [
            'https://assets.nikshanonline.com/wp-content/uploads/2024/12/IFB-Neptune-VX-16-16-Place-Settings-Free-Standing-Dishwasher-with-Hot-Water-Wash-Vinyl-Coated-Galvanised-Iron-7.png',
            'https://m.media-amazon.com/images/I/61Pmu+PXPGL._UF350,350_QL80_.jpg'
        ],
        features: [
            '12 place settings',
            'Half load option',
            'Energy efficient',
            'Quick wash cycle',
            'Flexible racks'
        ],
        specifications: {
            'Capacity': '12 Place Settings',
            'Noise Level': '49 dB',
            'Energy Rating': 'A++',
            'Weight': '52 kg'
        },
        options: {
            color: ['Silver']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Dishwasher', 'Kitchen'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 6
        }
    },
    {
        id: '3026',
        name: 'Panasonic 27L Convection Microwave Oven',
        description: '27-liter microwave with convection and grill, ideal for baking, roasting, and reheating with auto-cook menus.',
        price: 13499,
        originalPrice: 15999,
        category: 'home appliances',
        subcategory: 'kitchen',
        brand: 'Panasonic',
        rating: 4.4,
        reviewCount: 960,
        images: [
            'https://store.in.panasonic.com/media/catalog/product/a/r/artboard-11_15.jpg',
            'https://store.in.panasonic.com/media/catalog/product/cache/40b589206cef99ab7dca1586fe425968/a/r/artboard-1_52.jpg'
        ],
        features: [
            'Convection + Grill cooking',
            '101 auto-cook menus',
            'Defrost by weight & time',
            'Child safety lock',
            'LED display with timer'
        ],
        specifications: {
            'Capacity': '27 L',
            'Type': 'Convection',
            'Power Output': '900 W',
            'Turntable Diameter': '315 mm',
            'Dimensions': '510 x 310 x 495 mm'
        },
        options: {
            color: ['Black', 'Silver']
        },
        inStock: true,
        stockCount: 34,
        tags: ['Microwave', 'Cooking'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '3027',
        name: 'Whirlpool 240L Frost Free Refrigerator',
        description: 'Stylish double-door refrigerator with IntelliSense inverter technology and adaptive cooling for energy efficiency.',
        price: 22999,
        originalPrice: 26999,
        category: 'home appliances',
        subcategory: 'refrigerator',
        brand: 'Whirlpool',
        rating: 4.5,
        reviewCount: 1875,
        images: [
            'https://rukminim2.flixcart.com/image/704/844/xif0q/refrigerator-new/k/w/3/fp-263d-protton-roy-alpha-steel-n-1660-na-2020-62-whirlpool-760-original-imah52bstmgbkwqj.jpeg?q=90&crop=false',
            'https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/images/4_UiGJOGD.JPG'
        ],
        features: [
            'IntelliSense Inverter Technology',
            'Frost Free operation',
            'Multi-airflow cooling',
            'Toughened glass shelves',
            'Large vegetable crisper'
        ],
        specifications: {
            'Capacity': '240 L',
            'Type': 'Double Door',
            'Energy Rating': '3 Star',
            'Freezer Location': 'Top',
            'Dimensions': '560 x 1540 x 678 mm'
        },
        options: {
            color: ['Steel Grey', 'Wine Red']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Refrigerator', 'Energy Efficient'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 6
        }
    },
    {
        id: '3028',
        name: 'Kent Water Purifier',
        description: 'Wall-mounted water purifier with RO + UV + UF + TDS control, providing pure and safe drinking water.',
        price: 16499,
        originalPrice: 19999,
        category: 'home appliances',
        subcategory: 'water purifier',
        brand: 'Kent',
        rating: 4.3,
        reviewCount: 1420,
        images: [
            'https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.127489607_1727162068661.webp',
            'https://shop.kent.co.in/cdn/shop/files/A_Info-Grand-Plus-New-W-1_1024x1024@2x.png?v=1741241715'
        ],
        features: [
            'Multiple purification stages',
            'Retains essential minerals',
            'High storage capacity',
            'Auto shut-off feature',
            'Suitable for brackish water'
        ],
        specifications: {
            'Purification': 'RO + UV + UF + TDS Control',
            'Storage Capacity': '8 L',
            'Power Consumption': '60 W',
            'Input Water TDS': '500-2500 ppm',
            'Dimensions': '400 x 540 x 240 mm'
        },
        options: {
            color: ['White', 'Blue']
        },
        inStock: true,
        stockCount: 22,
        tags: ['Water Purifier', 'Healthy Living'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '3024',
        name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
        description: 'Powerful split AC with copper condenser, turbo cooling, and stabilizer-free operation for hot climates.',
        price: 30999,
        originalPrice: 37999,
        category: 'home appliances',
        subcategory: 'air conditioner',
        brand: 'Voltas',
        rating: 4.2,
        reviewCount: 2120,
        images: [
            'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/268038_13_lqnm7h.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQgxQC_RsMIYi4EQJcuD93VPDWXsp0ICIuw&s'
        ],
        features: [
            'Inverter compressor',
            'Copper condenser',
            'Turbo cooling mode',
            'Stabilizer-free operation',
            'Sleep mode and self-diagnosis'
        ],
        specifications: {
            'Capacity': '1.5 Ton',
            'Energy Rating': '3 Star',
            'Condenser Coil': 'Copper',
            'Noise Level': '48 dB',
            'Dimensions': '800 x 300 x 230 mm'
        },
        options: {
            color: ['White']
        },
        inStock: true,
        stockCount: 14,
        tags: ['Air Conditioner', 'Cooling'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 7
        }
    },
    {
        id: '3029',
        name: 'Eureka Forbes Robo Vac N Mop',
        description: 'Smart robotic vacuum cleaner with dry and wet mopping, app control, and powerful suction for home cleaning.',
        price: 18999,
        originalPrice: 24999,
        category: 'home appliances',
        subcategory: 'cleaning',
        brand: 'Eureka Forbes',
        rating: 4.1,
        reviewCount: 860,
        images: [
            'https://www.favobliss.com/image/cache/catalog/Eureka-Forbes-Robo-Vac-N-Mop%20(4)-600x315w.jpg',
            'https://www.eurekaforbes.com/cms/assets/prod/6_65b7af02b1.jpg'
        ],
        features: [
            'Vacuum + mop combo',
            'Smart app and voice control',
            'Automatic recharging',
            'Powerful suction motor',
            'Suitable for tiles, wood, and carpet'
        ],
        specifications: {
            'Battery Life': '120 mins',
            'Dustbin Capacity': '0.45 L',
            'Water Tank Capacity': '0.2 L',
            'Suction Power': '2000 Pa',
            'Dimensions': '350 x 100 mm'
        },
        options: {
            color: ['Black', 'White']
        },
        inStock: true,
        stockCount: 28,
        tags: ['Vacuum', 'Smart Home'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '3030',
        name: 'Singer Dry Iron 1000W',
        description: 'Lightweight dry iron with non-stick soleplate and adjustable thermostat for smooth ironing.',
        price: 799,
        originalPrice: 1199,
        category: 'home appliances',
        subcategory: 'irons',
        brand: 'Singer',
        rating: 4.0,
        reviewCount: 640,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4i9RW3R3Yd652a-YLTAOoUor4_aLf976Rig&s',
            'https://cdn.shopclues.com/images1/thumbnails/117492/320/320/153476625-117492930-1705046312.jpg'
        ],
        features: [
            'Non-stick soleplate',
            'Temperature control dial',
            'Lightweight and durable body',
            'Ergonomic handle design',
            'Uniform heat distribution'
        ],
        specifications: {
            'Power': '1000 W',
            'Cord Length': '1.8 m',
            'Voltage': '220-240 V',
            'Weight': '0.9 kg',
            'Dimensions': '230 x 110 x 120 mm'
        },
        options: {
            color: ['White', 'Blue']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Iron', 'Laundry'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '45',
        name: 'The North Face ThermoBall Jacket',
        description: 'Lightweight insulated jacket providing warmth without bulk, perfect for outdoor adventures.',
        price: 199.99,
        originalPrice: 229.99,
        category: 'fashion',
        subcategory: 'outerwear',
        brand: 'The North Face',
        rating: 4.6,
        reviewCount: 3892,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc-fmb3JUmWJ_074xbpH6QZVZ7LzTCgFaylSU1yqTEGfVM5Co5D7_f1FotYnG1Kx4wEGRltPFYds2l_09KMPO4PbJqXFgjIU7DhjwodP-Z7J4QNroR-rkl',
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSs4IlRFZ_HXbyi7ChjwRzQP2fHq83026xZ9phFdzC4mA1LYojspXPDL58sOWjYkBICnOwF1Ol2k47HmPgMWXwgRTycF1PrcmIdNUuHTKB2sUpEvb8lQGQ-xw'
        ],
        features: [
            'ThermoBall insulation for lightweight warmth',
            'Water-resistant finish',
            'Adjustable hood',
            'Elastic cuffs and hem',
            'Packable design for easy storage',
            'Versatile for layering'
        ],
        specifications: {
            'Insulation': 'ThermoBall synthetic',
            'Water Resistance': 'DWR coating',
            'Weight': '14 oz',
            'Fit': 'Regular',
            'Closure': 'Front zipper',
            'Pockets': '2 zip hand pockets'
        },
        options: {
            color: ['Black', 'Forge Grey', 'Neon Yellow']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Outdoor', 'Lightweight'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '46',
        name: 'Sony PlayStation 5',
        description: 'Next-generation gaming console with lightning-fast SSD, adaptive triggers, and immersive 3D audio.',
        price: 30000.99,
        originalPrice: 59000.99,
        category: 'electronics',
        subcategory: 'gaming consoles',
        brand: 'Sony',
        rating: 4.9,
        reviewCount: 7103,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGTidCksJKyfYfrw1ElbbZUlT33xrJrFP8ALpBiQ3TYU8ffgZFr8_pBnP6XDbZI55PUlD__Yf_slpTR4zBPJvQPNMHAdOTflp_gh19HIQo48FEloHAljrAiuQAxxeHnZ58vRDPx11wqQ&usqp=CAc',
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSloxD5YJf11OtBYD7DPDEvE6chh0crgrnqDB2qQ5LkgGK5zqHEwsXojKuaXVxiV4dYW1mbAUdx0-dI7CA6Db132dYHh4sZVBdONOh3J09AMqdQZGVf826S'
        ],
        features: [
            'Custom SSD for fast loading',
            'Adaptive triggers for realistic feedback',
            '3D audio technology',
            'Backward compatible with PS4 games',
            'Ultra HD Blu-ray drive',
            'Sleek futuristic design'
        ],
        specifications: {
            'Storage': '825GB SSD',
            'Graphics': 'Ray tracing support',
            'Audio': 'Tempest 3D AudioTech',
            'Controller': 'DualSense wireless',
            'Connectivity': 'Wi-Fi 6, Bluetooth 5.1',
            'Weight': '4.5 lbs'
        },
        options: {
            bundle: ['With extra controller', 'With headset', 'Standard']
        },
        inStock: true,
        stockCount: 10,
        tags: ['Gaming', 'Next Gen'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '48',
        name: 'Fossil Grant Chronograph Watch',
        description: 'Classic analog watch with stainless steel case, Roman numerals, and a genuine leather strap.',
        price: 149.99,
        originalPrice: 199.99,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Fossil',
        rating: 4.4,
        reviewCount: 1620,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXOvbpkDcYEsFqOlafHEaTMJ92bgtlVFHWH8DapIxFNFJIQaIqz9J-umVRcLnCYzcnkU1_mONDTytEmpW2PIJ2tlMDqTdBbu5CS7WCviX1',
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBBK_r08WYXXq7Dn7ZTsab3VyiKzJsAzX7PEI0rsRCzWsbvytEF3i2qlFKOtQCxCuvbttER8qVZtBdpQoyqeNZOLstVVNiMiLdFCom1od_BB2gmCPEDxP5'
        ],
        features: [
            'Classic chronograph design',
            'Roman numeral markers',
            'Genuine leather strap',
            'Water-resistant up to 50 meters',
            'Date window feature',
            'Elegant stainless steel finish'
        ],
        specifications: {
            'Case Diameter': '44mm',
            'Material': 'Stainless Steel',
            'Water Resistance': '50m',
            'Movement': 'Quartz',
            'Strap': 'Leather',
            'Weight': '3.5 oz'
        },
        options: {
            strapColor: ['Brown', 'Black'],
            dialColor: ['White', 'Black', 'Blue']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Elegant', 'Gift Idea'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '6001',
        name: 'Biba Embroidered Anarkali Kurta',
        description: 'Elegant Anarkali kurta with detailed floral embroidery, perfect for festive occasions.',
        price: 2499,
        originalPrice: 2999,
        category: 'fashion',
        subcategory: 'women clothing',
        brand: 'Biba',
        rating: 4.7,
        reviewCount: 320,
        images: [
            'https://images.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dwc52b4b61/images/aw23/skdikatsto8991aw23mrn_1.jpg',
            'https://www.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw418d7778/images/aw23/skdknri8927aw23teal_1.jpg'
        ],
        features: [
            'Floral embroidery',
            'Anarkali style',
            'Cotton blend'
        ],
        specifications: {
            'Material': 'Cotton Blend',
            'Sizes': 'S, M, L, XL',
            'Color': 'Beige'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Beige', 'Maroon']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Festive', 'New Arrival'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '6014',
        name: 'FabIndia Handwoven Cotton Saree',
        description: 'Traditional handwoven cotton saree with contrast blouse, ideal for casual and formal events.',
        price: 3299,
        originalPrice: 3799,
        category: 'fashion',
        subcategory: 'women clothing',
        brand: 'FabIndia',
        rating: 4.8,
        reviewCount: 410,
        images: [
            'https://ramrajcotton.in/cdn/shop/files/175A2753.jpg?v=1756379046&width=600',
            'https://apisap.fabindia.com/medias/10719194-1.jpg?context=bWFzdGVyfGltYWdlc3w1MzQ3MTR8aW1hZ2UvanBlZ3xhR0V5TDJnM1lTODVNRGczTVRRNU56WTROek0wTHpFd056RTVNVGswWHpFdWFuQm58ODYxOTg4NGJlMjFjMjEzZTk1OTZlYTM1ZGZmNTI1ODU0MGUwZTQyY2E0ZWYyYWQ5YmZkNjcwMDBmOGVhMzMwOA'
        ],
        features: [
            'Handwoven cotton',
            'Lightweight and breathable',
            'Traditional motifs'
        ],
        specifications: {
            'Material': 'Cotton',
            'Length': '6.3 meters',
            'Age': '15+'
        },
        options: {
            color: ['Turquoise', 'Red', 'Mustard']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Ethnic', 'Best Seller'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 5
        }
    },
    {
        id: '6003',
        name: 'W for Woman Cotton Palazzo Set',
        description: 'Comfortable cotton palazzo set with printed kurta and matching palazzo pants.',
        price: 2199,
        originalPrice: 2599,
        category: 'fashion',
        subcategory: 'women clothing',
        brand: 'W for Woman',
        rating: 4.5,
        reviewCount: 270,
        images: [
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv2pHjxg975DXp6gxkOLcFKph-GPHqHcexxaZ5kceh-wIn4PejgGMuLOL1rBXrjFoMsNd_R0PWcRgF1NGvltN2Ct8Mw7hg3UjC2AW2LhmKLTr3KP7IuUTghg&usqp=CAc',
            'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JULY/14/9QEUU6k5_52352e5ff4e042d38a48e1cc58f34098.jpg'
        ],
        features: [
            'Printed kurta',
            'Matching palazzo pants',
            'Lightweight cotton'
        ],
        specifications: {
            'Material': 'Cotton',
            'Sizes': 'S, M, L, XL',
            'Pattern': 'Floral print'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Blue', 'Peach']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Casual', 'Comfort'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '6004',
        name: 'Manyavar Men’s Kurta Pyjama Set',
        description: 'Traditional men’s kurta pyjama set with embroidered collar, perfect for weddings and festivals.',
        price: 3499,
        originalPrice: 3999,
        category: 'fashion',
        subcategory: 'men clothing',
        brand: 'Manyavar',
        rating: 4.6,
        reviewCount: 310,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqO00pJJgdbEmEKXHWdgGbNbdpOzOuR4rpse_sEaax5pLilovebq8Ru0f8C8ltMJsvmarJnrdeRfMDAzrNzyHG9BQQRb9LVPj-6oAyCb2mLeR5AitiLBENTYzwI69w6J4Yh9Ghp9Aytq0&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltYxX9eSSJ2AopFiT4T0hXO-h88R_uuyI7A&s'
        ],
        features: [
            'Embroidered collar',
            'Cotton blend fabric',
            'Festive style'
        ],
        specifications: {
            'Material': 'Cotton Blend',
            'Sizes': 'M, L, XL, XXL',
            'Color': 'Cream'
        },
        options: {
            size: ['M', 'L', 'XL', 'XXL'],
            color: ['Cream', 'Beige']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Festive', 'Traditional'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '6005',
        name: 'Hidesign Leather Sling Bag',
        description: 'Premium handcrafted leather sling bag for men, ideal for casual and office use.',
        price: 4999,
        originalPrice: 5999,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Hidesign',
        rating: 4.7,
        reviewCount: 220,
        images: [
            'https://hidesign.com/cdn/shop/files/8903439877125_1_c701b854-0944-4b68-883e-d39fcad4388d_1024x1024.jpg?v=1754650152',
            'https://m.media-amazon.com/images/I/61QPq2k6LjL._UY1000_.jpg'
        ],
        features: [
            'Genuine leather',
            'Adjustable strap',
            'Multiple compartments'
        ],
        specifications: {
            'Material': 'Leather',
            'Dimensions': '12 x 10 x 4 inches',
            'Weight': '0.8 kg'
        },
        options: {
            color: ['Brown', 'Black']
        },
        inStock: true,
        stockCount: 15,
        tags: ['Premium', 'Handcrafted'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '6006',
        name: 'Baggit Women’s Tote Bag',
        description: 'Trendy faux leather tote bag with multiple compartments and comfortable handles.',
        price: 1799,
        originalPrice: 2199,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Baggit',
        rating: 4.4,
        reviewCount: 180,
        images: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6FHxPJ44x21gQbWejqkGnhGVEM8VmYy6LqYT8__X8CuqhF7rWcekYKJzNnEecn6yS-CAbuEC75FO7-ZdF7wah34j5s13rbuR8RuswIwxOu-whzBy22f7Ubus88Nlqro4GbpFong&usqp=CAc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygoLr_boBeYm-EUbBEmB6sYzPklJr4Mdc5w&s'
        ],
        features: [
            'Faux leather',
            'Lightweight',
            'Spacious compartments'
        ],
        specifications: {
            'Material': 'Faux Leather',
            'Dimensions': '14 x 5 x 11 inches',
            'Weight': '0.6 kg'
        },
        options: {
            color: ['Black', 'Tan', 'Maroon']
        },
        inStock: true,
        stockCount: 20,
        tags: ['Casual', 'Trendy'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '6010',
        name: 'Chumbak Printed Scarf',
        description: 'Vibrant cotton scarf with unique Indian-inspired prints.',
        price: 899,
        originalPrice: 1099,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Chumbak',
        rating: 4.5,
        reviewCount: 140,
        images: [
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIGKN3Jo_B1NpyH30swvx9FBqe-MUi5-48G9uvpIyBRNyxM832N7PzgzW_s9PJRdJdxQ6j8bVDXdmBZNGxiUUTWybpwTRGHn0tEs-2c6Wh5SvQVySL_IK4_O1z0kbGPSOyqA&usqp=CAc',
            'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24340172/2023/8/4/8e8d1cac-9053-43a9-8021-7ba4db4b10801691152535045ChumbaksRainforestScarfBlackFlorals1.jpg'
        ],
        features: [
            'Lightweight cotton',
            'Indian-inspired prints',
            'Soft and breathable'
        ],
        specifications: {
            'Material': 'Cotton',
            'Dimensions': '70 x 180 cm',
            'Weight': '0.2 kg'
        },
        options: {
            color: ['Multicolor', 'Blue', 'Red']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Ethnic', 'Casual'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '6011',
        name: 'W for Woman Printed Dupatta',
        description: 'Elegant printed dupatta in vibrant colors, ideal to pair with kurta or palazzo sets.',
        price: 699,
        originalPrice: 899,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'W for Woman',
        rating: 4.6,
        reviewCount: 160,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuHZap-XZmYzFnsZnS8yvh9wEe1L8yg516w&s',
            'https://assets.ajio.com/medias/sys_master/root/h3a/hc9/11406616166430/-473Wx593H-460207776-multi-MODEL.jpg'
        ],
        features: [
            'Lightweight fabric',
            'Colorfast printing',
            'Soft & comfortable'
        ],
        specifications: {
            'Material': 'Cotton blend',
            'Dimensions': '2.2 x 0.8 meters',
            'Weight': '0.15 kg'
        },
        options: {
            color: ['Red', 'Green', 'Yellow']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Festive', 'Ethnic'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '6012',
        name: 'Woodland Men’s Casual Sneakers',
        description: 'Comfortable canvas sneakers with rubber sole for casual wear.',
        price: 2999,
        originalPrice: 3499,
        category: 'fashion',
        subcategory: 'men shoes',
        brand: 'Woodland',
        rating: 4.5,
        reviewCount: 220,
        images: [
            'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/6/1668bdaOGC6273024CAMEL_1.jpg?rnd=20200526195200&tr=w-512',
            'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/6/1668bdaOGC6274024CAMEL_1.jpg'
        ],
        features: [
            'Canvas upper',
            'Rubber sole',
            'Lace-up closure'
        ],
        specifications: {
            'Material': 'Canvas',
            'Sizes': '6-12',
            'Weight': '0.7 kg'
        },
        options: {
            size: ['6', '7', '8', '9', '10', '11', '12'],
            color: ['Black', 'Beige']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Casual', 'Trendy'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '6013',
        name: 'Libas Women’s Ethnic Jacket',
        description: 'Short ethnic jacket with mirror work, ideal for layering over kurtas and dresses.',
        price: 1599,
        originalPrice: 1999,
        category: 'fashion',
        subcategory: 'women clothing',
        brand: 'Libas',
        rating: 4.6,
        reviewCount: 140,
        images: [
            'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/10356359/2019/8/6/da923767-55a3-4fc5-92b1-4d6252e00a671565079821341-Libas-Women-Dresses-3931565079819428-1.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h65/hbe/14740391657502/-473Wx593H-461055266-white-MODEL.jpg'
        ],
        features: [
            'Mirror work embroidery',
            'Lightweight fabric',
            'Versatile styling'
        ],
        specifications: {
            'Material': 'Cotton blend',
            'Sizes': 'S, M, L, XL',
            'Weight': '0.3 kg'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Red', 'Blue', 'Green']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Ethnic', 'Festive'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '2011',
        name: 'Pipa Bella Statement Earrings',
        description: 'Beautiful handcrafted earrings with colorful beads and Indian motifs.',
        price: 799,
        originalPrice: 999,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Pipa Bella',
        rating: 4.8,
        reviewCount: 110,
        images: [
            'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/12e1034NYFPPBL000500.jpg?rnd=20200526195200&tr=w-512',
            'https://images-static.nykaa.com/media/catalog/product/5/5/55911eao-ma17er0022351_1.jpg?tr=w-500'
        ],
        features: [
            'Handcrafted',
            'Colorful beads',
            'Lightweight and stylish'
        ],
        specifications: {
            'Material': 'Alloy & Beads',
            'Dimensions': '2 x 1 inch',
            'Weight': '0.05 kg'
        },
        options: {
            color: ['Multicolor', 'Red', 'Blue']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Ethnic', 'Handcrafted'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '2012',
        name: 'W for Woman Silk Kurta Set',
        description: 'Elegant silk kurta set with printed design and matching palazzo pants.',
        price: 2899,
        originalPrice: 3399,
        category: 'fashion',
        subcategory: 'women clothing',
        brand: 'W for Woman',
        rating: 4.7,
        reviewCount: 200,
        images: [
            'https://wforwoman.com/cdn/shop/files/23AUWS10297-220638_2.jpg?v=1746181126&width=1500',
            'https://assets.ajio.com/medias/sys_master/root/20250630/LH8u/68624bc6e590ff066e091b37/-473Wx593H-700438131-white-MODEL.jpg'
        ],
        features: [
            'Silk fabric',
            'Printed design',
            'Comfortable palazzo pants'
        ],
        specifications: {
            'Material': 'Silk blend',
            'Sizes': 'S, M, L, XL',
            'Weight': '0.5 kg'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Peach', 'Green', 'Purple']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Festive', 'Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '2013',
        name: 'Khadim Men’s Mojari Shoes',
        description: 'Traditional handcrafted leather mojari shoes with ethnic embroidery.',
        price: 1999,
        originalPrice: 2499,
        category: 'fashion',
        subcategory: 'men shoes',
        brand: 'Khadim',
        rating: 4.5,
        reviewCount: 150,
        images: [
            'https://lussolifestyle.com/cdn/shop/products/DTP_8306copy_540x.webp?v=1754811063',
            'https://img.tatacliq.com/images/i11/437Wx649H/MP000000017709045_437Wx649H_202305261433412.jpeg'
        ],
        features: [
            'Handcrafted leather',
            'Ethnic embroidery',
            'Comfortable fit'
        ],
        specifications: {
            'Material': 'Leather',
            'Sizes': '6-11',
            'Weight': '0.6 kg'
        },
        options: {
            size: ['6', '7', '8', '9', '10', '11'],
            color: ['Brown', 'Black']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Ethnic', 'Traditional'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 4
        }
    },
    {
        id: '49',
        name: 'Allbirds Wool Runners',
        description: 'Eco-friendly sneakers made from renewable materials, lightweight and comfortable for everyday wear.',
        price: 99.99,
        originalPrice: 119.99,
        category: 'fashion',
        subcategory: 'shoes',
        brand: 'Allbirds',
        rating: 4.6,
        reviewCount: 3102,
        images: [
            'https://m.media-amazon.com/images/I/81LwTWyIBgL._UY1000_.jpg',
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F156219993247&psig=AOvVaw36xxUxFksLzGphc2bkVlsz&ust=1757743928984000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJD_ktHI0o8DFQAAAAAdAAAAABAL'
        ],
        features: [
            'Made from merino wool',
            'Breathable and moisture-wicking',
            'Lightweight EVA sole',
            'Machine washable',
            'Sustainable materials',
            'Comfortable for all-day wear'
        ],
        specifications: {
            'Material': 'Merino wool',
            'Sole': 'EVA foam',
            'Weight': '7.5 oz',
            'Washable': 'Yes',
            'Fit': 'True to size',
            'Closure': 'Slip-on'
        },
        options: {
            color: ['Natural Gray', 'Charcoal', 'Navy'],
            size: ['6', '7', '8', '9', '10', '11']
        },
        inStock: true,
        stockCount: 42,
        tags: ['Eco-Friendly', 'Sustainable'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '50',
        name: 'Oral-B Genius X Electric Toothbrush',
        description: 'Smart electric toothbrush with AI tracking, pressure sensors, and multiple cleaning modes for superior oral care.',
        price: 199.99,
        originalPrice: 249.99,
        category: 'health',
        subcategory: 'personal care',
        brand: 'Oral-B',
        rating: 4.7,
        reviewCount: 2180,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_zfmUZ7cyNPF35IzqnZJVRsDNMTxaEz30Q&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpmsc2jv3g3SZ1VMONc-sirZDbKyUvOFqOHlVjedSLXM9F2IPlDOmXR5w7XpQ8yzHw3k&usqp=CAU'
        ],
        features: [
            'AI-powered brushing recognition',
            'Pressure sensor to protect gums',
            '6 cleaning modes',
            '360-degree pressure control',
            'Long battery life',
            'Compatible with Oral-B app'
        ],
        specifications: {
            'Battery Life': 'Up to 2 weeks',
            'Charging Time': '12 hours',
            'Cleaning Modes': '6 modes',
            'Weight': '0.5 lbs',
            'Connectivity': 'Bluetooth',
            'Brush Head': 'CrossAction included'
        },
        options: {
            color: ['Black', 'White', 'Pink']
        },
        inStock: true,
        stockCount: 18,
        tags: ['Oral Care', 'Smart Technology'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 1
        }
    },
    {
        id: '51',
        name: 'Fitbit Charge 5',
        description: 'Advanced fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking for a healthier lifestyle.',
        price: 149.99,
        originalPrice: 179.99,
        category: 'health',
        subcategory: 'fitness trackers',
        brand: 'Fitbit',
        rating: 4.5,
        reviewCount: 4125,
        images: [
            'https://cdn.mos.cms.futurecdn.net/XJqa4dcKQoitGkP268Hv7e.jpg',
            'https://img.etimg.com/thumb/width-1200,height-900,imgsize-18958,resizemode-75,msid-87957801/magazines/panache/google-fitbit-charge-5-review-this-tracker-is-just-fit-to-be-bought.jpg'
        ],
        features: [
            'Built-in GPS for tracking runs and walks',
            'Heart rate monitoring',
            'Sleep tracking with sleep score',
            'Stress management tools',
            'Up to 7 days battery life',
            'Water-resistant up to 50 meters'
        ],
        specifications: {
            'GPS': 'Built-in',
            'Battery Life': 'Up to 7 days',
            'Water Resistance': '50m',
            'Heart Rate': 'Continuous monitoring',
            'Sensors': 'Accelerometer, altimeter',
            'Compatibility': 'iOS and Android'
        },
        options: {
            bandColor: ['Graphite', 'Steel Blue', 'Lunar White']
        },
        inStock: true,
        stockCount: 30,
        tags: ['Health', 'Wearable'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '55',
        name: 'Canon PIXMA G6020 MegaTank Printer',
        description: 'High-yield all-in-one printer with refillable ink tanks for low-cost printing and wireless connectivity.',
        price: 249.99,
        originalPrice: 299.99,
        category: 'electronics',
        subcategory: 'printers',
        brand: 'Canon',
        rating: 4.4,
        reviewCount: 1942,
        images: [
            'https://www.tanotis.com/cdn/shop/products/1559824245_IMG_1196642_1024x.jpg?v=1576016123',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0QJDVHxkD81sCCXkcbpdIQq8YNwjf6Vcaj1tt9sShwR2ggQILQnlgM_V4zvM5kxUec8&usqp=CAU'
        ],
        features: [
            'Refillable ink tanks for cost efficiency',
            'Print, scan, and copy functionality',
            'Wi-Fi connectivity for remote printing',
            'High-yield ink bottles',
            'Compact design for home or office',
            'Automatic duplex printing'
        ],
        specifications: {
            'Print Technology': 'Inkjet',
            'Connectivity': 'Wi-Fi, USB',
            'Print Speed': 'Up to 13 ppm',
            'Ink Yield': 'Up to 6,000 pages',
            'Dimensions': '23 x 13 x 8 inches',
            'Weight': '11 lbs'
        },
        options: {
            connectivity: ['Wi-Fi', 'USB'],
            paperSize: ['A4', 'Letter']
        },
        inStock: true,
        stockCount: 15,
        tags: ['Office', 'Economical'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '56',
        name: 'Harman Kardon Citation One',
        description: 'Smart speaker with Google Assistant built-in, delivering rich sound and hands-free control.',
        price: 199.99,
        originalPrice: 249.99,
        category: 'electronics',
        subcategory: 'speakers',
        brand: 'Harman Kardon',
        rating: 4.6,
        reviewCount: 2765,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrAhvq_zI1CISf-fIZ41IfrjZhEOsvg_sIw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEr_sQuXRdl68qJ0P25T1agCtHJggmjsSXzQtEkfh3VDaLFUg4kUOqH_ClTdUCGUHMC5o&usqp=CAU'
        ],
        features: [
            'Google Assistant built-in',
            '360-degree sound',
            'Elegant fabric design',
            'Wi-Fi streaming',
            'Chromecast built-in',
            'Voice control for music and smart home'
        ],
        specifications: {
            'Connectivity': 'Wi-Fi, Bluetooth',
            'Power': '40W RMS',
            'Dimensions': '6.7 x 6.7 x 5.7 inches',
            'Weight': '2.3 lbs',
            'Voice Assistant': 'Google Assistant',
            'Streaming': 'Chromecast'
        },
        options: {
            color: ['Black', 'Gray', 'White']
        },
        inStock: true,
        stockCount: 21,
        tags: ['Smart', 'Voice Control'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '57',
        name: 'Under Armour Tech 2.0 T-Shirt',
        description: 'Lightweight and breathable workout t-shirt with moisture-wicking technology for comfort during intense exercise.',
        price
            : 24.99,
        originalPrice: 29.99,
        category: 'fashion',
        subcategory: 'activewear',
        brand: 'Under Armour',
        rating: 4.4,
        reviewCount: 1345,
        images: [
            'https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1326413-420250828113340348.jpg',
            'https://m.media-amazon.com/images/I/41Z7gGQvMJL._AC_.jpg'
        ],
        features: [
            'Moisture-wicking fabric',
            'Lightweight and breathable',
            '4-way stretch construction',
            'Anti-odor technology',
            'Flatlock seams to reduce chafing',
            'Classic fit for all-day comfort'
        ],
        specifications: {
            'Material': '100% Polyester',
            'Fit': 'Loose',
            'Care': 'Machine wash cold',
            'Weight': '5 oz',
            'Style': 'Short sleeve',
            'Usage': 'Training, casual wear'
        },
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'White', 'Navy', 'Gray']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Workout Essential', 'Breathable'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '58',
        name: 'Patagonia Down Sweater Jacket',
        description: 'Lightweight and warm down jacket with a water-resistant finish, perfect for outdoor activities in cold weather.',
        price: 229.99,
        originalPrice: 279.99,
        category: 'fashion',

        subcategory: 'outerwear',

        brand: 'Patagonia',
        rating: 4.7,
        reviewCount: 2890,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8HxnDI2HEpgFNuTvG95hL2wWzwTlOSbllw&s',
            'https://wornwear.patagonia.com/cdn/shop/files/ltx1qyc5akiqjxsyjh2m.jpg?v=1724160690&width=1445'
        ],
        features: [
            '800-fill-power down insulation',
            'Water-resistant finish',
            'Lightweight and compressible',
            'Two zippered handwarmer pockets',
            'Adjustable hem for a snug fit',
            'Fair Trade Certified™ sewn'
        ],
        specifications: {
            'Insulation': '800-fill-power down',
            'Water Resistance': 'DWR coating',
            'Weight': '12 oz',
            'Fit': 'Regular',
            'Closure': 'Front zipper',
            'Pockets': '2 zip hand pockets'
        },
        options: {
            color: ['Black', 'Blue', 'Red', 'Green']
        },
        inStock: true,
        stockCount: 22,
        tags: ['Outdoor', 'Warm'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '59',
        name: 'Apple AirPods Pro (2nd Generation)',
        description: 'Active noise-cancelling earbuds with superior sound quality, customizable fit, and spatial audio for an immersive listening experience.',
        price: 249.99,
        originalPrice: 279.99,
        category: 'electronics',
        subcategory: 'earbuds',
        brand: 'Apple',
        rating: 4.8,
        reviewCount: 15234,
        images: [
            'https://gadgetsstore.co.in/wp-content/uploads/2023/08/1-1-600x601.jpeg',
            'https://www.feriwalabd.com/wp-content/uploads/2024/08/product-jpeg-1.jpg'
        ],
        features: [
            'Active Noise Cancellation',
            'Transparency mode',
            'Customizable fit with silicone tips',
            'Spatial audio with dynamic head tracking',
            'Sweat and water resistant (IPX4)',
            'More than 24 hours of battery life with charging case'
        ],
        specifications: {
            'Battery Life': 'Up to 6 hours (5 hours with ANC)',
            'Charging Case': 'More than 24 hours',
            'Connectivity': 'Bluetooth 5.0',
            'Weight': '5.4g each earbud',
            'Water Resistance': 'IPX4',
            'Compatibility': 'iOS devices'
        },
        options: {
            color: ['White']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Best Seller', 'Top Rated'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 1
        }
    }, {
        id: '60',
        name: 'Frye Melissa Button Leather Wallet',
        description: 'Handcrafted leather wallet with multiple card slots, a bill compartment, and a snap button closure for secure storage.',
        price: 89.99,
        originalPrice: 119.99,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Frye',
        rating: 4.5,
        reviewCount: 845,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsbRAraTG3JzvbT4JNhrZeDkj7HoNY7PZSQ&s',
            'https://m.media-amazon.com/images/I/71I2N01pzaL._SL1001_.jpg'
        ],
        features: [
            'Genuine leather construction',
            'Multiple card slots',
            'Bill compartment',
            'Snap button closure',
            'Compact and slim design',
            'Durable and long-lasting'
        ],
        specifications: {
            'Material': '100% Leather',
            'Dimensions': '4.5" x 3.5"',
            'Weight': '0.2 lbs',
            'Card Slots': '6',
            'Bill Compartment': '1',
            'Closure': 'Snap button'
        },
        options: {
            color: ['Brown', 'Black',
                'Tan']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Classic', 'Durable'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }

    },
    {
        id: '61',
        name: 'Samsung Galaxy Tab S9',
        description: 'A premium Android tablet with a stunning AMOLED display, S Pen support, and powerful performance for work and play.',
        price: 79999.99,
        originalPrice: 101000.99,
        category: 'electronics',
        subcategory: 'tablets',
        brand: 'Samsung',
        rating: 4.6,
        reviewCount: 2100,
        images: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5xBcUYE7TX6V6zOd-b5dhvGr7T3YNhpH90rjI7nb-t11HlbbbM3GpjK9lm3WeB_2TxBQRzXok8jdfPTI5MwhJdO7OIYk7bQM84nWLbsaIo3t391TO1waSIh15yjQ8CaU2OiAaL-o&usqp=CAc',
            'https://m.media-amazon.com/images/I/618Acjb5AhL.jpg'
        ],
        features: [
            '11-inch Dynamic AMOLED 2X display',
            'S Pen included',
            'Snapdragon 8 Gen 2 processor',
            'Ultra-fast Wi-Fi 6E',
            'IP68 water and dust resistance',
            'Long-lasting battery'
        ],
        specifications: {
            'Display': '11-inch AMOLED',
            'Processor': 'Snapdragon 8 Gen 2',
            'RAM': '8GB',
            'Storage': '128GB',
            'Battery': '8400mAh',
            'OS': 'Android 13'
        },
        options: {
            color: ['Graphite', 'Beige']
        },
        inStock: true,
        stockCount: 30,
        tags: ['New Arrival', 'Android'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '101',
        name: 'The Puzzle Chronicles: Secrets of the Forgotten Temple',
        description: 'An interactive adventure book where each chapter ends with challenging puzzles and hidden codes. Solve them to unlock the next part of the journey and discover ancient secrets.',
        price: 24.99,
        originalPrice: 29.99,
        category: 'books',
        subcategory: 'interactive',
        brand: 'MindQuest Publishing',
        rating: 4.7,
        reviewCount: 540,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyuNVnIvRVGMuhtTtAdR_KhH7SXAEZRSxNQ&s',
            'https://m.media-amazon.com/images/I/51TubtTWSEL._AC_SY200_QL15_.jpg'
        ],
        features: [
            'Challenging puzzles at the end of each chapter',
            'Hidden clues throughout the book',
            'Beautiful hand-drawn illustrations',
            'Unlock secrets with coded messages',
            'Encourages critical thinking and logic skills',
            'Ideal for adventure-loving readers'
        ],
        specifications: {
            'Pages': '320',
            'Language': 'English',
            'Dimensions': '6 x 9 inches',
            'ISBN': '978-1-2345-6789-0',
            'Target Age': '10+',
            'Illustrations': 'Full-color sketches'
        },
        options: {
            format: ['Hardcover', 'Paperback'],
            edition: ['Standard', 'Collector’s']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Adventure', 'Puzzle', 'Interactive'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '102',
        name: 'AR Galaxy Explorers: The Hidden Universe',
        description: 'Explore space through an augmented reality experience that brings star maps, planets, and constellations to life. Pair the book with a smartphone app and dive into the cosmos.',
        price: 34.99,
        originalPrice: 39.99,
        category: 'books',
        subcategory: 'educational',
        brand: 'Stellar Learn',
        rating: 4.8,
        reviewCount: 732,
        images: [
            'https://m.media-amazon.com/images/I/81C0YcNCMWL._UF350,350_QL50_.jpg',
            'https://m.media-amazon.com/images/I/71NaxUe2vvL.jpg'
        ],
        features: [
            'Augmented reality integration',
            'Interactive star maps and 3D visuals',
            'Learn about planets, galaxies, and black holes',
            'Quizzes and knowledge checkpoints',
            'Easy-to-use companion app',
            'Great for astronomy enthusiasts'
        ],
        specifications: {
            'Pages': '280',
            'Language': 'English',
            'App Support': 'iOS and Android',
            'Dimensions': '8 x 10 inches',
            'ISBN': '978-0-9876-5432-1',
            'Target Age': '8+'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            subscription: ['Basic', 'Premium']
        },
        inStock: true,
        stockCount: 200,
        tags: ['Space', 'AR', 'Education'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '9001',
        name: 'The God of Small Things',
        description: 'Booker Prize-winning novel by Arundhati Roy, exploring family, caste, and love in Kerala.',
        price: 399,
        originalPrice: 499,
        category: 'books',
        subcategory: 'fiction',
        brand: 'Penguin India',
        rating: 4.6,
        reviewCount: 5820,
        images: [
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1318966691i/37819.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2024/10/456580981/XU/YW/YI/34046922/fiction-english-the-god-of-small-things-by-arundhati-roy.jpeg'
        ],
        features: [
            'Winner of the Booker Prize',
            'Set in Kerala',
            'Critically acclaimed writing style'
        ],
        specifications: {
            'Author': 'Arundhati Roy',
            'Pages': '352',
            'Language': 'English',
            'Publisher': 'Penguin India'
        },
        options: {
            format: ['Paperback', 'Hardcover', 'Kindle']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Novel', 'Award Winning'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '9002',
        name: 'Train to Pakistan',
        description: 'Khushwant Singh’s classic novel depicting the Partition of India and human struggles.',
        price: 299,
        originalPrice: 399,
        category: 'books',
        subcategory: 'historical fiction',
        brand: 'Penguin Classics',
        rating: 4.5,
        reviewCount: 4300,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7_LoYlrTZ9D-tIJPPUvj49qpA5AEtR1Rjg&s',
            'https://m.media-amazon.com/images/I/51V2HYeESRL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Partition era story',
            'Powerful narrative',
            'Classic Indian literature'
        ],
        specifications: {
            'Author': 'Khushwant Singh',
            'Pages': '200',
            'Language': 'English',
            'Publisher': 'Penguin Classics'
        },
        options: {
            format: ['Paperback', 'Kindle']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Partition', 'Classic'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '7003',
        name: 'Malgudi Days',
        description: 'Collection of short stories by R.K. Narayan set in the fictional South Indian town of Malgudi.',
        price: 250,
        originalPrice: 350,
        category: 'books',
        subcategory: 'short stories',
        brand: 'Indian Classics',
        rating: 4.7,
        reviewCount: 5120,
        images: [
            'https://admin.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/03/15/mal.jpg?itok=w1BDnVS3',
            'https://miro.medium.com/1*LluyqL8wIfgAc5krLug2IA.jpeg'
        ],
        features: [
            'Classic storytelling',
            'Iconic Indian town',
            'Timeless short stories'
        ],
        specifications: {
            'Author': 'R.K. Narayan',
            'Pages': '264',
            'Language': 'English',
            'Publisher': 'Indian Classics'
        },
        options: {
            format: ['Paperback', 'Hardcover']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Classic', 'Short Stories'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '7004',
        name: 'The Palace of Illusions',
        description: 'Retelling of the Mahabharata from Draupadi’s perspective by Chitra Banerjee Divakaruni.',
        price: 349,
        originalPrice: 450,
        category: 'books',
        subcategory: 'mythology',
        brand: 'Picador India',
        rating: 4.8,
        reviewCount: 4100,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-pwFFRRTIvb-nZDUwTvCZmn88iZvCK5ctQ&s',
            'https://sc0.blr1.digitaloceanspaces.com/large/895908-abntukwcln-1537949077.jpg'
        ],
        features: [
            'Women-centric perspective',
            'Mahabharata retelling',
            'Bestselling Indian author'
        ],
        specifications: {
            'Author': 'Chitra Banerjee Divakaruni',
            'Pages': '384',
            'Language': 'English',
            'Publisher': 'Picador India'
        },
        options: {
            format: ['Paperback', 'Kindle']
        },
        inStock: true,
        stockCount: 40,
        tags: ['Mythology', 'Bestseller'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '7005',
        name: 'India After Gandhi',
        description: 'Ramachandra Guha’s comprehensive history of India from Independence to the modern era.',
        price: 699,
        originalPrice: 899,
        category: 'books',
        subcategory: 'non-fiction',
        brand: 'HarperCollins India',
        rating: 4.6,
        reviewCount: 2890,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOiYFjpfeXDR8d38KwJTSa9E7AF4nKqPAmw&s',
            'https://img.cdnx.in/306172/1688715202554_IndiaAftergandhi.jpeg?format=webp'
        ],
        features: [
            'Detailed history',
            'Post-1947 narrative',
            'Well-researched content'
        ],
        specifications: {
            'Author': 'Ramachandra Guha',
            'Pages': '900',
            'Language': 'English',
            'Publisher': 'HarperCollins India'
        },
        options: {
            format: ['Paperback', 'Hardcover']
        },
        inStock: true,
        stockCount: 30,
        tags: ['History', 'India'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '7006',
        name: 'The White Tiger',
        description: 'Man Booker Prize-winning novel by Aravind Adiga about ambition and inequality in modern India.',
        price: 350,
        originalPrice: 450,
        category: 'books',
        subcategory: 'fiction',
        brand: 'HarperCollins',
        rating: 4.4,
        reviewCount: 3780,
        images: [
            'https://images.justwatch.com/poster/241283113/s718/the-white-tiger.jpg',
            'https://m.media-amazon.com/images/I/71PasGvOcnL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Man Booker Prize winner',
            'Dark humor & satire',
            'Explores Indian class divide'
        ],
        specifications: {
            'Author': 'Aravind Adiga',
            'Pages': '321',
            'Language': 'English',
            'Publisher': 'HarperCollins'
        },
        options: {
            format: ['Paperback', 'Kindle']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Award Winning', 'Satire'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '7007',
        name: 'An Era of Darkness',
        description: 'Shashi Tharoor’s critique of British colonial rule in India and its devastating impact.',
        price: 499,
        originalPrice: 599,
        category: 'books',
        subcategory: 'history',
        brand: 'Aleph Book Company',
        rating: 4.7,
        reviewCount: 2500,
        images: [
            'https://pbs.twimg.com/media/EQlEGmOUcAAtRDO.jpg',
            'https://media.licdn.com/dms/image/v2/C5112AQFsxxcI2c-ZRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1582741232852?e=2147483647&v=beta&t=VbH643MLQ5ZGJJRwkooI7AcaMgz0uYjEIfOBfpWoiuU'
        ],
        features: [
            'Colonial critique',
            'Powerful arguments',
            'Extensively researched'
        ],
        specifications: {
            'Author': 'Shashi Tharoor',
            'Pages': '360',
            'Language': 'English',
            'Publisher': 'Aleph Book Company'
        },
        options: {
            format: ['Paperback', 'Hardcover']
        },
        inStock: true,
        stockCount: 55,
        tags: ['History', 'Colonialism'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '7008',
        name: 'The Discovery of India',
        description: 'Jawaharlal Nehru’s seminal work on Indian history, philosophy, and culture.',
        price: 599,
        originalPrice: 699,
        category: 'books',
        subcategory: 'history',
        brand: 'Penguin India',
        rating: 4.8,
        reviewCount: 3800,
        images: [
            'https://m.media-amazon.com/images/I/61zZzKlLleL._UF1000,1000_QL80_.jpg',
            'https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/jawaharlal-nehru-the-maker-of-modern-india_FrontImage_707.jpg'
        ],
        features: [
            'Indian history & culture',
            'Written by Jawaharlal Nehru',
            'Timeless classic'
        ],
        specifications: {
            'Author': 'Jawaharlal Nehru',
            'Pages': '656',
            'Language': 'English',
            'Publisher': 'Penguin India'
        },
        options: {
            format: ['Paperback', 'Hardcover']
        },
        inStock: true,
        stockCount: 25,
        tags: ['Classic', 'History'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 6
        }
    },
    {
        id: '7009',
        name: 'My Experiments with Truth',
        description: 'Autobiography of Mahatma Gandhi, detailing his journey and principles of non-violence.',
        price: 249,
        originalPrice: 349,
        category: 'books',
        subcategory: 'autobiography',
        brand: 'Navjivan Publishing',
        rating: 4.6,
        reviewCount: 4600,
        images: [
            'https://m.media-amazon.com/images/I/714KNlKdaCL.jpg',
            'https://bookwormsdenn.com/cdn/shop/files/cropped1_page-0031.jpg?v=1726918857'
        ],
        features: [
            'Mahatma Gandhi’s autobiography',
            'Focus on truth and non-violence',
            'Inspirational reading'
        ],
        specifications: {
            'Author': 'M.K. Gandhi',
            'Pages': '500',
            'Language': 'English',
            'Publisher': 'Navjivan Publishing'
        },
        options: {
            format: ['Paperback', 'Hardcover']
        },
        inStock: true,
        stockCount: 65,
        tags: ['Autobiography', 'Inspiration'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '7010',
        name: 'The Great Indian Novel',
        description: 'Shashi Tharoor’s satirical retelling of the Mahabharata in the context of modern Indian politics.',
        price: 399,
        originalPrice: 499,
        category: 'books',
        subcategory: 'fiction',
        brand: 'Viking',
        rating: 4.4,
        reviewCount: 1980,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oqM5A9_jdw5vosNCvV2dHMhHc2zLrrI7oA&s',
            'https://www.clankart.com/user-uploads/advert/The_Great_Indian_Novel1702307603662.jpg'
        ],
        features: [
            'Satirical retelling',
            'Blends mythology & politics',
            'Witty narrative'
        ],
        specifications: {
            'Author': 'Shashi Tharoor',
            'Pages': '455',
            'Language': 'English',
            'Publisher': 'Viking'
        },
        options: {
            format: ['Paperback', 'Kindle']
        },
        inStock: true,
        stockCount: 35,
        tags: ['Satire', 'Mythology'],
        shippingInfo: {
            freeShipping: false,
            prime: true,
            estimatedDays: 5
        }
    },
    {
        id: '7011',
        name: 'The Immortals of Meluha',
        description: 'First book in the Shiva Trilogy by Amish Tripathi, reimagining Lord Shiva as a hero.',
        price: 299,
        originalPrice: 399,
        category: 'books',
        subcategory: 'mythology',
        brand: 'Westland',
        rating: 4.7,
        reviewCount: 7500,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosssWz6InQLFK3nzp64ynMx7WG3pgJUaBDQ&s',
            'https://universalknowledgeworld.com/cdn/shop/products/Screenshot_20200925-112644_2_1200x1200.png?v=1601013642'
        ],
        features: [
            'Bestselling trilogy opener',
            'Modern mythology retelling',
            'Fast-paced narrative'
        ],
        specifications: {
            'Author': 'Amish Tripathi',
            'Pages': '436',
            'Language': 'English',
            'Publisher': 'Westland'
        },
        options: {
            format: ['Paperback', 'Hardcover', 'Kindle']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Bestseller', 'Mythology'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '7012',
        name: 'The Guide',
        description: 'Classic R.K. Narayan novel about Raju, a tour guide, and his transformation into a spiritual figure.',
        price: 220,
        originalPrice: 320,
        category: 'books',
        subcategory: 'fiction',
        brand: 'Indian Classics',
        rating: 4.5,
        reviewCount: 3300,
        images: [
            'https://m.media-amazon.com/images/I/71GSHBNFdNL._UF894,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/9165vqxnlRL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Classic Indian fiction',
            'Spiritual & human journey',
            'Adapted into film'
        ],
        specifications: {
            'Author': 'R.K. Narayan',
            'Pages': '220',
            'Language': 'English',
            'Publisher': 'Indian Classics'
        },
        options: {
            format: ['Paperback', 'Kindle']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Classic', 'Fiction'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '103',
        name: 'Mindful Reflections: A Daily Journal for Wellness',
        description: 'A guided journal filled with mindfulness exercises, daily reflections, and motivational quotes to help you cultivate calm, gratitude, and self-awareness.',
        price: 19.99,
        originalPrice: 24.99,
        category: 'books',
        subcategory: 'wellness',
        brand: 'Zen Pages',
        rating: 4.6,
        reviewCount: 620,
        images: [
            'https://m.media-amazon.com/images/I/61ER81yemzL._UF1000,1000_QL80_.jpg',
            'https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F24%2F1726577825%2F1747217492%2F39077.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=d300c4404f3e4b5a9b44fb1a360a0cad'
        ],
        features: [
            'Daily journaling prompts',
            'Mindfulness and breathing techniques',
            'Encourages positive thinking',
            'Space for gratitude entries',
            'Elegant layout with soft pastel illustrations',
            'Ideal for stress relief'
        ],
        specifications: {
            'Pages': '200',
            'Language': 'English',
            'Dimensions': '7 x 9 inches',
            'ISBN': '978-1-8765-4321-2',
            'Target Audience': 'Adults',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Notebook'],
            color: ['Lavender', 'Sea Green', 'Peach']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Mindfulness', 'Self-care', 'Health'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '104',
        name: 'EcoCrafts for Kids: Creative Projects Using Recycled Materials',
        description: 'A fun, eco-friendly craft book filled with step-by-step projects using household items and recycled materials to make creative toys and decorations.',
        price: 22.99,
        originalPrice: 27.99,
        category: 'books',
        subcategory: 'children',
        brand: 'Green Kids Press',
        rating: 4.5,
        reviewCount: 450,
        images: [
            'https://hips.hearstapps.com/hmg-prod/images/recycled-crafts-for-kids-1648482635.jpg?crop=0.497xw:0.994xh;0.503xw,0&resize=1200:*',
            'https://i.pinimg.com/236x/d3/7d/de/d37dde1619bfc2e2244cebe6772f76b9.jpg'
        ],
        features: [
            'Simple crafts using recycled items',
            'Encourages creativity and sustainability',
            'Includes safety tips and material lists',
            'Bright illustrations and photos',
            'Suitable for children and parents',
            'Fun educational activities'
        ],
        specifications: {
            'Pages': '160',
            'Language': 'English',
            'Dimensions': '8 x 10 inches',
            'ISBN': '978-1-5432-1098-3',
            'Target Age': '6–12',
            'Illustrations': 'Full-color'
        },
        options: {
            projectType: ['Toys', 'Decorations', 'Educational'],
            level: ['Easy', 'Medium']
        },
        inStock: true,
        stockCount: 85,
        tags: ['Crafts', 'Kids', 'Eco-Friendly'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '105',
        name: 'AI Storyteller: A Personalized Novel Experience',
        description: 'A novel that adapts its plot, characters, and twists based on the reader’s choices and preferences using AI technology, making every read unique.',
        price: 22.99,
        originalPrice: 34.99,
        category: 'books',
        subcategory: 'fiction',
        brand: 'NextGen Reads',
        rating: 4.7,
        reviewCount: 540,
        images: [
            'https://m.media-amazon.com/images/I/61fCCOSUewL._UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/819wrw8QlEL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Adaptive storytelling based on choices',
            'Multiple endings and plot twists',
            'Connects with an online AI platform',
            'Personalized characters and settings',
            'Ideal for tech-savvy readers',
            'Innovative reading experience'
        ],
        specifications: {
            'Pages': '350',
            'Language': 'English',
            'Dimensions': '6 x 9 inches',
            'ISBN': '978-0-1123-4567-8',
            'Target Audience': 'Teens and adults',
            'Companion App': 'Available on iOS and Android'
        },
        options: {
            format: ['Paperback', 'Digital'],
            theme: ['Mystery', 'Adventure', 'Romance']
        },
        inStock: true,
        stockCount: 100,
        tags: ['AI', 'Interactive', 'Fiction'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '106',
        name: 'The Culinary Chronicles: Recipes from Around the World',
        description: 'A beautifully illustrated cookbook that takes you on a journey through global cuisines, complete with cultural insights, recipes, and cooking techniques.',
        price: 39.99,
        originalPrice: 49.99,
        category: 'books',
        subcategory: 'cookbooks',
        brand: 'Global Kitchen',
        rating: 4.9,
        reviewCount: 685,
        images: [
            'https://m.media-amazon.com/images/I/817peqjsG6L._UF1000,1000_QL80_.jpg',
        ],
        features: [
            'Recipes from over 50 countries',
            'Cultural narratives and stories',
            'Tips from chefs and food historians',
            'High-quality photography',
            'Dietary alternatives included',
            'Easy-to-follow instructions'
        ],
        specifications: {
            'Pages': '400',
            'Language': 'English',
            'Dimensions': '9 x 11 inches',
            'ISBN': '978-1-2233-4455-6',
            'Target Audience': 'Food lovers and travelers',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            cuisineType: ['Mediterranean', 'Asian', 'Latin American']
        },
        inStock: true,
        stockCount: 75,
        tags: ['Cookbook', 'Travel', 'Cultural'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '107',
        name: 'Language Quest: A Graphic Novel Series for Learners',
        description: 'A captivating graphic novel series designed to teach new languages through immersive storytelling, contextual dialogues, and visual aids.',
        price: 27.99,
        originalPrice: 32.99,
        category: 'books',
        subcategory: 'language-learning',
        brand: 'LingoBooks',
        rating: 4.8,
        reviewCount: 511,
        images: [
            'https://m.media-amazon.com/images/I/81TYe1A7mYL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagquOUBkGAGisUPG8LlZP_pHoiL3EHFgRqQ&s'
        ],
        features: [
            'Story-driven language learning',
            'Visual aids for vocabulary',
            'Context-based dialogues',
            'Interactive quizzes',
            'Cultural notes included',
            'Suitable for beginners'
        ],
        specifications: {
            'Pages': '220',
            'Language': 'English, Spanish, French, Japanese',
            'Dimensions': '7 x 10 inches',
            'ISBN': '978-1-5566-7788-9',
            'Target Age': '12+',
            'Illustrations': 'Full-color panels'
        },
        options: {
            format: ['Paperback', 'Digital'],
            languages: ['Spanish', 'French', 'Japanese']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Language Learning', 'Graphic Novel', 'Education'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '108',
        name: 'The Artisan’s Handbook: Sustainable Gardening and Urban Farming',
        description: 'An in-depth guide on eco-conscious gardening methods, permaculture, and urban farming techniques for creating sustainable green spaces at home.',
        price: 31.99,
        originalPrice: 39.99,
        category: 'books',
        subcategory: 'gardening',
        brand: 'GreenWorld Press',
        rating: 4.7,
        reviewCount: 410,
        images: [
            'https://m.media-amazon.com/images/I/81YJiQJ6deL._UF1000,1000_QL80_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61VBrrHYRqL._AC_UL600_SR600,600_.jpg'
        ],
        features: [
            'Techniques for permaculture and container gardening',
            'Seasonal planting guides',
            'Eco-friendly pest control methods',
            'Urban farming tips',
            'Sustainable lifestyle advice',
            'Illustrations and diagrams'
        ],
        specifications: {
            'Pages': '280',
            'Language': 'English',
            'Dimensions': '8 x 10 inches',
            'ISBN': '978-1-4455-6677-3',
            'Target Audience': 'Home gardeners',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            focusArea: ['Permaculture', 'Urban Gardening', 'Organic Methods']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Gardening', 'Sustainability', 'DIY'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '109',
        name: 'The Story Behind Every Dish: Culinary Histories and Techniques',
        description: 'A comprehensive collection of recipes accompanied by historical anecdotes, techniques, and cultural insights from various world cuisines.',
        price: 36.99,
        originalPrice: 44.99,
        category: 'books',
        subcategory: 'cookbooks',
        brand: 'Heritage Foods',
        rating: 4.8,
        reviewCount: 345,
        images: [
            'https://m.media-amazon.com/images/I/71rqOtcDeHL._UF1000,1000_QL80_.jpg',
            'https://images.penguinrandomhouse.com/cover/9780735223172'
        ],
        features: [
            'Recipes paired with historical contexts',
            'Chef interviews and anecdotes',
            'Authentic cooking techniques',
            'Dietary adaptations for modern kitchens',
            'Illustrations and photographs',
            'Globally sourced ingredients'
        ],
        specifications: {
            'Pages': '350',
            'Language': 'English',
            'Dimensions': '9 x 11 inches',
            'ISBN': '978-0-7788-9988-1',
            'Target Audience': 'Culinary enthusiasts',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            cuisine: ['Mediterranean', 'Asian', 'Middle Eastern']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Cookbook', 'History', 'Culture'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '110',
        name: 'The Art of Silence: A Journey Through Meditation and Stillness',
        description: 'A profound guide to meditation practices, breathing techniques, and inner peace rituals to help readers reconnect with themselves.',
        price: 21.99,
        originalPrice: 26.99,
        category: 'books',
        subcategory: 'wellness',
        brand: 'InnerLight Publications',
        rating: 4.7,
        reviewCount: 412,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AatNCdGz6uaOIgo9vb5EwRnORbhPzpaV7w&s',
            'https://i.pinimg.com/736x/38/ae/20/38ae20b6719b99fa6c2d7709f5f2a1b4.jpg'
        ],
        features: [
            'Daily meditation practices',
            'Breathing exercises for calmness',
            'Mindfulness techniques',
            'Sleep improvement tips',
            'Inspirational quotes',
            'Soft, calming illustrations'
        ],
        specifications: {
            'Pages': '240',
            'Language': 'English',
            'Dimensions': '6 x 9 inches',
            'ISBN': '978-1-89123-456-7',
            'Target Audience': 'Adults',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            theme: ['Stress Relief', 'Self-care']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Meditation', 'Health', 'Self-help'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '111',
        name: 'Tiny Green Thumb: Urban Gardening for Apartment Dwellers',
        description: 'A practical guide for growing vegetables, herbs, and flowers in small spaces with creative solutions and sustainable practices.',
        price: 18.99,
        originalPrice: 23.99,
        category: 'books',
        subcategory: 'gardening',
        brand: 'CityRoots',
        rating: 4.6,
        reviewCount: 389,
        images: [
            'https://prd-upmarket.s3.ap-south-1.amazonaws.com/AA0051/generated/ar16x9/large/um-6-Large.jpg',
            'https://www.chhajedgarden.com/cdn/shop/articles/Brown_White_Minimalist_Fashion_Facebook_Cover_1_700x700_crop_center.png?v=1680210838'
        ],
        features: [
            'Space-saving planting ideas',
            'Herb and vegetable growing tips',
            'Container gardening techniques',
            'Sustainable practices',
            'Organic pest control methods',
            'Watering schedules'
        ],
        specifications: {
            'Pages': '200',
            'Language': 'English',
            'Dimensions': '7 x 9 inches',
            'ISBN': '978-0-34567-891-0',
            'Target Audience': 'Urban dwellers',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            difficulty: ['Beginner', 'Advanced']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Gardening', 'Urban', 'DIY'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '112',
        name: 'The Science of Sleep: Unlocking Restorative Night Rituals',
        description: 'Explore the science behind sleep and how simple changes in habits can improve your sleep patterns and overall well-being.',
        price: 23.99,
        originalPrice: 29.99,
        category: 'books',
        subcategory: 'health',
        brand: 'RestWell Media',
        rating: 4.8,
        reviewCount: 503,
        images: [
            'https://m.media-amazon.com/images/I/71xIpLM4laL.jpg',
            'https://m.media-amazon.com/images/I/418OQ6gWywL._SY1000_.jpg'
        ],
        features: [
            'Scientific explanations on sleep cycles',
            'Tips for better sleep hygiene',
            'Diet and exercise impacts',
            'Relaxation techniques',
            'Tracking sleep patterns',
            'Avoiding common pitfalls'
        ],
        specifications: {
            'Pages': '220',
            'Language': 'English',
            'Dimensions': '6 x 8 inches',
            'ISBN': '978-0-99887-654-3',
            'Target Audience': 'Adults',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            edition: ['Standard', 'Expanded']
        },
        inStock: true,
        stockCount: 130,
        tags: ['Health', 'Sleep', 'Science'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '113',
        name: 'The Storyteller’s Handbook: Crafting Tales That Captivate',
        description: 'A masterclass in storytelling, guiding writers through narrative structures, character development, and creating immersive worlds.',
        price: 25.99,
        originalPrice: 32.99,
        category: 'books',
        subcategory: 'writing',
        brand: 'Creative Minds Press',
        rating: 4.7,
        reviewCount: 420,
        images: [
            'https://m.media-amazon.com/images/I/61Pvj8eKcqL.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHQjDtNboj_Bcoc0XLot5dWnfI9lG66RyEXLHlWXvmx46xxFRUGGxq0i7wtp_FlZhS1M&usqp=CAU'
        ],
        features: [
            'Narrative arcs and pacing strategies',
            'Dialogue writing tips',
            'World-building exercises',
            'Overcoming writer’s block',
            'Crafting unforgettable characters',
            'Inspiration prompts'
        ],
        specifications: {
            'Pages': '300',
            'Language': 'English',
            'Dimensions': '7 x 10 inches',
            'ISBN': '978-0-44567-890-2',
            'Target Audience': 'Aspiring writers',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            edition: ['First', 'Revised']
        },
        inStock: true,
        stockCount: 110,
        tags: ['Writing', 'Creative', 'Guide'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '114',
        name: 'The Vegan Kitchen: Plant-Based Recipes for Every Meal',
        description: 'A collection of delicious and nutritious vegan recipes designed for everyday cooking, meal planning, and special occasions.',
        price: 28.99,
        originalPrice: 34.99,
        category: 'books',
        subcategory: 'cookbooks',
        brand: 'Healthy Eats',
        rating: 4.9,
        reviewCount: 602,
        images: [
            'https://m.media-amazon.com/images/I/911ELG0fysL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yr07_VkDLbAggvEHfJGvJpzzHTl7oJPZaAssbQ8nl35pELUlamdsEqHGZ8DYNUYENZw&usqp=CAU'
        ],
        features: [
            'Breakfast, lunch, dinner recipes',
            'Snacks and desserts included',
            'Nutritional information',
            'Seasonal ingredient substitutions',
            'Allergen-friendly tips',
            'Beautiful recipe photography'
        ],
        specifications: {
            'Pages': '350',
            'Language': 'English',
            'Dimensions': '8 x 10 inches',
            'ISBN': '978-1-99887-345-0',
            'Target Audience': 'All ages',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            mealType: ['Everyday', 'Special Occasion']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Vegan', 'Healthy', 'Cookbook'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '115',
        name: 'Eco Warriors: Stories of Environmental Change',
        description: 'Inspiring tales of individuals and communities around the world making a difference in the fight for sustainability and climate action.',
        price: 22.99,
        originalPrice: 27.99,
        category: 'books',
        subcategory: 'environment',
        brand: 'Planet Forward',
        rating: 4.8,
        reviewCount: 375,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgiPmBVfb_pA9HjwHOGuBJPkGLcao9jiE_g&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTBr9eF0yM8dU1STG2V2tkBqxIx8CCINEPg&s'
        ],
        features: [
            'Real-life stories of change-makers',
            'Environmental activism strategies',
            'Community projects and initiatives',
            'How to get involved',
            'Infographics and data insights',
            'Calls to action'
        ],
        specifications: {
            'Pages': '260',
            'Language': 'English',
            'Dimensions': '7 x 9 inches',
            'ISBN': '978-0-55433-667-1',
            'Target Audience': 'Young adults and activists',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            edition: ['Standard', 'Illustrated']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Environment', 'Activism', 'Inspiration'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '116',
        name: 'Tech Futures: How Innovation is Shaping Tomorrow',
        description: 'A deep dive into emerging technologies like AI, robotics, and space exploration, and how they’re influencing the way we live and work.',
        price: 29.99,
        originalPrice: 36.99,
        category: 'books',
        subcategory: 'technology',
        brand: 'Future Insights',
        rating: 4.7,
        reviewCount: 518,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vYk_CHnRxSBJWr835mC2_hYKAypzeFTI_Q&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FgaMzMVKBzl0Ep4DVnlw-cUh11bqKc4NGE5E11M-5sWc8AOZG-QGWogPnth8wgq58Xw&usqp=CAU'
        ],
        features: [
            'Overview of AI and machine learning',
            'Robotics applications explained',
            'Space technology breakthroughs',
            'Future job market predictions',
            'Ethical considerations',
            'Expert interviews'
        ],
        specifications: {
            'Pages': '320',
            'Language': 'English',
            'Dimensions': '8 x 10 inches',
            'ISBN': '978-1-77567-889-2',
            'Target Audience': 'Tech enthusiasts',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            edition: ['First', 'Expanded']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Technology', 'Future', 'Innovation'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '117',
        name: 'Mind Over Matter: Cognitive Tools for Everyday Challenges',
        description: 'Practical advice on using cognitive strategies, mental exercises, and behavioral techniques to enhance focus, memory, and decision-making.',
        price: 19.99,
        originalPrice: 24.99,
        category: 'books',
        subcategory: 'psychology',
        brand: 'MindScope',
        rating: 4.6,
        reviewCount: 460,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2O2HFo_S1pLljppyA0PW9b1fQZkekhrjog&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPPOreXKd3CDdVI8VQnC69NJNlOZMiealFeNg-sYBtS0Ybf6WqPkE4qdKO3xUGwi0OsU&usqp=CAU'
        ],
        features: [
            'Memory-enhancing tips',
            'Decision-making frameworks',
            'Focus improvement techniques',
            'Behavioral patterns explained',
            'Exercises and worksheets',
            'Real-world examples'
        ],
        specifications: {
            'Pages': '200',
            'Language': 'English',
            'Dimensions': '6 x 8 inches',
            'ISBN': '978-1-66223-887-4',
            'Target Audience': 'Students and professionals',
            'Binding': 'Paperback'
        },
        options: {
            format: ['Paperback', 'Digital'],
            difficulty: ['Beginner', 'Advanced']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Psychology', 'Self-help', 'Mental Health'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '118',
        name: 'Legends of the Lost City: An Epic Fantasy Adventure',
        description: 'A thrilling fantasy saga filled with mystical lands, heroic quests, and ancient prophecies that will keep readers hooked till the last page.',
        price: 24.99,
        originalPrice: 29.99,
        category: 'books',
        subcategory: 'fiction',
        brand: 'Epic Tales',
        rating: 4.9,
        reviewCount: 612,
        images: [
            'https://m.media-amazon.com/images/I/91-r6fWHiKL._UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/810zP6C9WwL._UF1000,1000_QL80_.jpg'
        ],
        features: [
            'Rich world-building',
            'Complex characters',
            'Action-packed battles',
            'Prophecies and magic systems',
            'Twists and surprises',
            'High-stakes adventure'
        ],
        specifications: {
            'Pages': '420',
            'Language': 'English',
            'Dimensions': '6 x 9 inches',
            'ISBN': '978-0-88934-776-5',
            'Target Audience': 'Young adults',
            'Binding': 'Hardcover'
        },
        options: {
            format: ['Hardcover', 'Digital'],
            volume: ['Complete', 'Book 1']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Fantasy', 'Adventure', 'Epic'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '119',
        name: 'Adidas Ultraboost 22',
        description: 'High-performance running shoes with responsive cushioning, ideal for long-distance runs and everyday comfort.',
        price: 159.99,
        originalPrice: 179.99,
        category: 'fashion',
        subcategory: 'shoes',
        brand: 'Adidas',
        rating: 4.6,
        reviewCount: 3001,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKisVS-9dXsQLk2baBIy7LYdKuV2iGC_yloQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIadhNJXucmYSHqPGpibPuRLo-rn7hh4lMVpU52IGprhUCl3eNn1WVIOoVfKZeHTP33Q&usqp=CAU'
        ],
        features: [
            'Boost cushioning for energy return',
            'Primeknit upper for breathability',
            'Continental rubber outsole for traction',
            'Heel support for stability',
            'Lightweight design',
            'Machine washable'
        ],
        specifications: {
            'Upper': 'Primeknit textile',
            'Midsole': 'Boost foam',
            'Outsole': 'Continental rubber',
            'Weight': '10.5 oz',
            'Closure': 'Lace-up',
            'Use': 'Running, training'
        },
        options: {
            size: ['6', '7', '8', '9', '10', '11', '12'],
            color: ['Black', 'White', 'Core Blue', 'Solar Red']
        },
        inStock: true,
        stockCount: 60,
        tags: ['Running', 'Comfort', 'Sport'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '120',
        name: 'Ray-Ban Aviator Classic Sunglasses',
        description: 'Iconic aviator sunglasses with metal frames and polarized lenses, offering UV protection and timeless style.',
        price: 1000.99,
        originalPrice: 10000.99,
        category: 'fashion',
        subcategory: 'accessories',
        brand: 'Ray-Ban',
        rating: 4.8,
        reviewCount: 2574,
        images: [
            'https://m.media-amazon.com/images/I/51wrgkstgCL._UY1100_.jpg',
            'https://india.ray-ban.com/media/catalog/product/cache/9198bde1d0eff71feec5e39d680e88c5/8/0/8056597259835_2.jpg'
        ],
        features: [
            'Polarized lenses for glare reduction',
            '100% UV protection',
            'Lightweight metal frame',
            'Adjustable nose pads',
            'Classic aviator shape',
            'Scratch-resistant coating'
        ],
        specifications: {
            'Frame': 'Metal',
            'Lens': 'Glass polarized',
            'Bridge width': '14 mm',
            'Temple length': '135 mm',
            'Weight': '1.2 oz',
            'Use': 'Outdoor, fashion'
        },
        options: {
            lensColor: ['Green', 'Blue', 'Brown'],
            frameColor: ['Gold', 'Silver', 'Gunmetal']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Sunglasses', 'Classic', 'UV Protection'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '121',
        name: 'Levi’s Women’s Trucker Jacket',
        description: 'A timeless denim jacket with a flattering fit, durable construction, and classic styling.',
        price: 79.99,
        originalPrice: 99.99,
        category: 'fashion',
        subcategory: 'jackets',
        brand: 'Levi’s',
        rating: 4.5,
        reviewCount: 1985,
        images: [
            'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/15506352/2023/12/4/4484f63d-d5f9-4f14-ab5b-fbd37629fae41701684488016LevisxDeepikaPadukoneWomenBlueSolidCroppedDenimJacket1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sDihyjhbI97BcN2FqXZSPkOqusLRAAKuJg&s'
        ],
        features: [
            'Durable denim material',
            'Button closure with flap pockets',
            'Classic trucker style',
            'Machine washable',
            'Versatile for layering',
            'Available in multiple washes'
        ],
        specifications: {
            'Material': '100% Cotton Denim',
            'Fit': 'Regular',
            'Closure': 'Button',
            'Pockets': '2 flap chest pockets',
            'Wash': 'Medium Stonewash',
            'Care': 'Machine wash cold'
        },
        options: {
            size: ['XS', 'S', 'M', 'L', 'XL'],
            wash: ['Light', 'Medium', 'Dark']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Denim', 'Jacket', 'Casual'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '123',
        name: 'Herschel Heritage Backpack',
        description: 'Classic backpack with modern updates, featuring padded straps, spacious compartments, and durable fabric for daily use.',
        price: 59.99,
        originalPrice: 69.99,
        category: 'fashion',
        subcategory: 'bags',
        brand: 'Herschel',
        rating: 4.7,
        reviewCount: 1802,
        images: [
            'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25283686/2023/10/17/220963c1-05e1-4b08-8b7e-a3bfda9a8e271697543828613HERSCHELHeritageBackpacksPeacoatChicoryCoffee2.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDf5OCirBkYd3XvahX0EwmttNFZTADIyk0qg&s'
        ],
        features: [
            'Padded laptop compartment',
            'Durable polyester fabric',
            'Adjustable straps for comfort',
            'Multiple organizer pockets',
            'Classic Herschel woven label',
            'Stylish color options'
        ],
        specifications: {
            'Material': 'Polyester',
            'Capacity': '20L',
            'Dimensions': '11 x 17 x 5 inches',
            'Weight': '1.5 lbs',
            'Closure': 'Zipper',
            'Use': 'Everyday, school, travel'
        },
        options: {
            color: ['Black', 'Navy', 'Gray', 'Forest Green']
        },
        inStock: true,
        stockCount: 80,
        tags: ['Backpack', 'Durable', 'Stylish'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '124',
        name: 'Fjällräven Kånken Classic Backpack',
        description: 'Iconic Swedish backpack known for its lightweight design, water-resistant fabric, and ergonomic carrying comfort.',
        price: 500.99,
        originalPrice: 1000.99,
        category: 'fashion',
        subcategory: 'bags',
        brand: 'Fjällräven',
        rating: 4.8,
        reviewCount: 2201,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnhAaua8w2ku876uCVrP5yTzwHZ-iriETNw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJ1IXMzjnVxwB2R7rwxgqLZ_tFYhMJeo3gw&s'
        ],
        features: [
            'Water-resistant Vinylon fabric',
            'Padded shoulder straps',
            'Removable seat pad',
            'Multiple compartments',
            'Durable stitching',
            'Eco-friendly materials'
        ],
        specifications: {
            'Material': 'Vinylon F',
            'Capacity': '16L',
            'Dimensions': '10 x 13 x 5 inches',
            'Weight': '0.8 lbs',
            'Closure': 'Zip',
            'Use': 'Everyday, outdoor'
        },
        options: {
            color: ['Rust Red', 'Blue', 'Black', 'Olive Green']
        },
        inStock: true,
        stockCount: 70,
        tags: ['Backpack', 'Outdoor', 'Lightweight'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 4
        }
    },
    {
        id: '125',
        name: 'Michael Kors Jet Set Tote Bag',
        description: 'Chic and spacious tote bag crafted from premium leather, perfect for work, travel, or casual outings.',
        price: 149.99,
        originalPrice: 179.99,
        category: 'fashion',
        subcategory: 'bags',
        brand: 'Michael Kors',
        rating: 4.5,
        reviewCount: 1201,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3JxB6EZodYOrwJIAY4-HuBnSspuBHl0qhA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89sXJpCdAEYEpqwEzeLqPDRlP6N8nLYlAkA&s'
        ],
        features: [
            'Genuine leather construction',
            'Spacious interior',
            'Gold hardware accents',
            'Double top handles',
            'Secure zip closure',
            'Elegant design'
        ],
        specifications: {
            'Material': 'Leather',
            'Dimensions': '14 x 12 x 5 inches',
            'Weight': '2 lbs',
            'Closure': 'Zip',
            'Pockets': 'Multiple interior',
            'Use': 'Work, travel'
        },
        options: {
            color: ['Black', 'Beige', 'Navy', 'Blush']
        },
        inStock: true,
        stockCount: 50,
        tags: ['Luxury', 'Stylish', 'Premium'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '126',
        name: 'Patagonia Better Sweater Fleece Jacket',
        description: 'Warm and comfortable fleece jacket made from recycled materials, suitable for casual wear and outdoor activities.',
        price: 99.99,
        originalPrice: 119.99,
        category: 'fashion',
        subcategory: 'jackets',
        brand: 'Patagonia',
        rating: 4.7,
        reviewCount: 1432,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH9eO0de8VdHa0Veyw_DWsgrVTfCjB9zHWA&s',
            'https://leadapparel.com/cdn/shop/products/25543_BLK_14.jpg'
        ],
        features: [
            'Recycled polyester fleece',
            'Zip front with stand-up collar',
            'Pockets with secure zippers',
            'Breathable and insulating',
            'Durable and soft',
            'Eco-conscious production'
        ],
        specifications: {
            'Material': 'Recycled polyester',
            'Fit': 'Regular',
            'Closure': 'Zip',
            'Weight': '1.2 lbs',
            'Care': 'Machine wash cold',
            'Use': 'Outdoor, casual'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Black', 'Gray', 'Forest Green', 'Blue']
        },
        inStock: true,
        stockCount: 75,
        tags: ['Eco-Friendly', 'Warm', 'Durable'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '127',
        name: 'Converse Chuck Taylor All Star Sneakers',
        description: 'Classic high-top sneakers with timeless appeal, versatile for casual and urban fashion styles.',
        price: 59.99,
        originalPrice: 69.99,
        category: 'fashion',
        subcategory: 'shoes',
        brand: 'Converse',
        rating: 4.6,
        reviewCount: 2514,
        images: [
            'https://converse.static.n7.io/media/catalog/product/cache/c2eb1f0db702462ce5dab3d57b75c6e4/a/0/a08527c_e_107x1-web167.jpg',
            'https://converse.static.n7.io/media/catalog/product/cache/c2eb1f0db702462ce5dab3d57b75c6e4/m/9/m9622_e_107x1378.jpg'
        ],
        features: [
            'Canvas upper for breathability',
            'Rubber sole with traction pattern',
            'Iconic star ankle patch',
            'Padded insole for comfort',
            'Classic lace-up design',
            'Multiple color options'
        ],
        specifications: {
            'Material': 'Canvas and rubber',
            'Closure': 'Lace-up',
            'Weight': '1.4 lbs',
            'Dimensions': 'Depends on size',
            'Use': 'Casual wear',
            'Care': 'Wipe clean'
        },
        options: {
            size: ['5', '6', '7', '8', '9', '10', '11', '12'],
            color: ['Black', 'White', 'Red', 'Navy']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Classic', 'Casual', 'Urban'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '128',
        name: 'The North Face ThermoBall Jacket',
        description: 'Insulated jacket using lightweight synthetic materials for warmth, suitable for cold-weather outdoor adventures.',
        price: 149.99,
        originalPrice: 179.99,
        category: 'fashion',
        subcategory: 'jackets',
        brand: 'The North Face',
        rating: 4.7,
        reviewCount: 1023,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd5zMnZPyLNuy038KgBe7-zqXk8j2bB5RHQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtK_UnNfij-Com4E0r7ZCfj_SUOHoGOLxuHm9p6X_9l3aQCYeG_3dEoOnvlo6LoiSLqA&usqp=CAU'
        ],
        features: [
            'ThermoBall synthetic insulation',
            'Water-resistant finish',
            'Adjustable hood',
            'Zippered hand pockets',
            'Lightweight and packable',
            'Warm even when wet'
        ],
        specifications: {
            'Material': 'Nylon, synthetic insulation',
            'Closure': 'Zip',
            'Weight': '1.1 lbs',
            'Dimensions': 'Varies by size',
            'Use': 'Outdoor, hiking',
            'Care': 'Machine wash cold'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Black', 'Red', 'Blue', 'Gray']
        },
        inStock: true,
        stockCount: 65,
        tags: ['Outdoor', 'Warm', 'Adventure'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },

    {
        id: '132',
        name: 'Dove Beauty Bar',
        description: 'Mild cleansing beauty bar with moisturizing cream, perfect for sensitive skin.',
        price: 300.99,
        originalPrice: 500.99,
        category: 'beauty',
        subcategory: 'personal care',
        brand: 'Dove',
        rating: 4.6,
        reviewCount: 4802,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPQ2Ibg0I7e6y3XwNbqNWkEFwLMGDGKTBjw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VhZQddjNflzzozk3e4Wj1qnwsRhrScaaow&s'
        ],
        features: [
            'Moisturizing cream formula',
            'Gentle on sensitive skin',
            'Restores natural moisture barrier',
            'Mild and nourishing',
            'No harsh chemicals',
            'Recommended by dermatologists'
        ],
        specifications: {
            'Type': 'Beauty Bar Soap',
            'Weight': '100 g',
            'Ingredients': 'Moisturizing cream, glycerin',
            'Skin Type': 'Sensitive skin',
            'Use': 'Daily cleansing',
            'Tested': 'Dermatologist tested'
        },
        options: {
            scent: ['Original', 'Cucumber & Green Tea', 'Unscented']
        },
        inStock: true,
        stockCount: 250,
        tags: ['Gentle', 'Sensitive Skin', 'Moisturizing'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '133',
        name: 'The Body Shop Vitamin C Glow Boosting Moisturizer',
        description: 'Brightening face moisturizer with vitamin C and hyaluronic acid to revitalize and hydrate dull skin.',
        price: 240.99,
        originalPrice: 1000.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'The Body Shop',
        rating: 4.5,
        reviewCount: 2174,
        images: [
            'https://m.media-amazon.com/images/I/71MwBFJUm2L._UF350,350_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cEfEsjiRB77gbOol9CAuKX_TMey0Yz2i_rlPotWx75Vu09NoT_o3_wlxV35yKvicCzk&usqp=CAU'
        ],
        features: [
            'Vitamin C for radiant skin',
            'Hyaluronic acid for hydration',
            'Lightweight texture',
            'Fast absorption',
            'Brightens and smoothens',
            'Eco-friendly packaging'
        ],
        specifications: {
            'Type': 'Glow Boosting Moisturizer',
            'Volume': '50 ml',
            'Key Ingredients': 'Vitamin C, Hyaluronic Acid',
            'Texture': 'Creamy gel',
            'Skin Type': 'Normal to dry skin',
            'Care': 'Apply morning and night'
        },
        options: {
            size: ['50ml', '100ml'],
            scent: ['Citrus', 'Unscented']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Brightening', 'Hydrating', 'Natural'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '134',
        name: 'Neutrogena Ultra Sheer Sunscreen SPF 55',
        description: 'Lightweight, fast-absorbing sunscreen that provides high protection with a non-greasy finish.',
        price: 900.99,
        originalPrice: 1400.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Neutrogena',
        rating: 4.8,
        reviewCount: 3050,
        images: [
            'https://m.media-amazon.com/images/I/61wdZoGpXpS._UF1000,1000_QL80_.jpg',
            'https://princesscosmeticsqa.com/cdn/shop/files/neutrogena-ultra-sheer-dry-touch-sunscreen-broad-spectrum-spf-55-88ml-nyotrojyna-altra-shyr-oaky-shmsy-oasaa-altyf-bmaaaml-hmay-spf-55-88-ml-127659.jpg?v=1738160612&width=1946'
        ],
        features: [
            'Broad spectrum UVA/UVB protection',
            'Non-comedogenic formula',
            'Oil-free and lightweight',
            'Water-resistant up to 80 minutes',
            'Absorbs quickly without residue',
            'Fragrance-free option available'
        ],
        specifications: {
            'SPF': '55',
            'Type': 'Sunscreen lotion',
            'Volume': '88 ml',
            'Use': 'Daily sun protection',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologist approved'
        },
        options: {
            volume: ['88ml', '142ml'],
            fragrance: ['Fragrance-free', 'Light citrus']
        },
        inStock: true,
        stockCount: 170,
        tags: ['Sun Protection', 'Lightweight', 'Non-Greasy'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '135',
        name: 'Lush Fresh Face Mask',
        description: 'Natural fruit and clay-based mask to cleanse, brighten, and rejuvenate skin.',
        price: 120.99,
        originalPrice: 160.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Lush',
        rating: 4.6,
        reviewCount: 1120,
        images: [
            'https://s3.r29static.com/bin/entry/854/x,80/1210464/mainlush.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyENtN9KHtPeGPhbSSOxrRqF4oYDSugGGjnw&s'
        ],
        features: [
            'Brightens dull skin',
            'Removes impurities gently',
            'Contains natural fruit extracts',
            'Suitable for sensitive skin',
            'Hydrating and refreshing',
            'Cruelty-free'
        ],
        specifications: {
            'Type': 'Face Mask',
            'Volume': '75 g',
            'Ingredients': 'Natural fruits, clay, essential oils',
            'Skin Type': 'All skin types',
            'Use': 'Apply 10-15 mins, rinse with warm water',
            'Tested': 'Dermatologically approved'
        },
        options: {
            scent: ['Citrus', 'Lavender', 'Unscented']
        },
        inStock: true,
        stockCount: 130,
        tags: ['Natural', 'Brightening', 'Gentle'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '136',
        name: 'Fenty Beauty Pro Filt’r Soft Matte Foundation',
        description: 'Longwear, soft matte foundation that delivers a natural-looking finish.',
        price: 2900.99,
        originalPrice: 3600.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Fenty Beauty',
        rating: 4.7,
        reviewCount: 2145,
        images: [
            'https://m.media-amazon.com/images/I/61JLUcAb+9L._UF1000,1000_QL80_.jpg',
            'https://www.cultbeauty.co.uk/images?url=https://static.thcdn.com/productimg/original/14587895-1895209529237541.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover'
        ],
        features: [
            'Soft matte finish',
            'Long-lasting coverage',
            'Wide shade range',
            'Lightweight formula',
            'Non-comedogenic',
            'Suitable for all skin types'
        ],
        specifications: {
            'Type': 'Liquid Foundation',
            'Volume': '32 ml',
            'Coverage': 'Medium to Full',
            'Finish': 'Matte',
            'Skin Type': 'All skin types',
            'Use': 'Apply with brush or sponge'
        },
        options: {
            shade: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
        },
        inStock: true,
        stockCount: 95,
        tags: ['Foundation', 'Matte', 'Long-Lasting'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '137',
        name: 'Sephora Collection Liquid Lipstick',
        description: 'Highly pigmented, long-wear liquid lipstick with a smooth matte finish.',
        price: 150.99,
        originalPrice: 590.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Sephora',
        rating: 4.5,
        reviewCount: 1420,
        images: [
            'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494434232/jnO-gLswH-000000000494434232_1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhNOvupGr8rUp2WXAdl72My4MKByxFYw4Gw&s'
        ],
        features: [
            'Intense pigmentation',
            'Long-lasting formula',
            'Smooth and comfortable wear',
            'Non-drying',
            'Vegan-friendly',
            'Suitable for daily use'
        ],
        specifications: {
            'Type': 'Liquid Lipstick',
            'Volume': '5 ml',
            'Finish': 'Matte',
            'Use': 'Apply directly to lips',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically tested'
        },
        options: {
            shade: ['Red Velvet', 'Nude Beige', 'Deep Plum', 'Fuchsia']
        },
        inStock: true,
        stockCount: 180,
        tags: ['Lipstick', 'Long-Wear', 'Matte'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 3
        }
    },
    {
        id: '138',
        name: 'MAC Studio Fix Powder Plus Foundation',
        description: 'Dual-purpose pressed powder for a matte finish with buildable coverage.',
        price: 2700.99,
        originalPrice: 3400.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'MAC',
        rating: 4.6,
        reviewCount: 1680,
        images: [
            'https://m.media-amazon.com/images/I/61jK43PFUwL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gdQ_q8ImIZiAszp8pVNPGwF9oVVD5E-hPQ&s'
        ],
        features: [
            'Buildable coverage',
            'Matte finish',
            'Dual-purpose powder',
            'Smooth texture',
            'Long-lasting wear',
            'Suitable for normal to oily skin'
        ],
        specifications: {
            'Type': 'Pressed Powder Foundation',
            'Weight': '10 g',
            'Finish': 'Matte',
            'Coverage': 'Medium to Full',
            'Skin Type': 'Normal to oily',
            'Use': 'Apply with brush or sponge'
        },
        options: {
            shade: ['NC15', 'NC20', 'NC25', 'NC30', 'NC35']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Powder', 'Foundation', 'Matte'],
        shippingInfo: {
            freeShipping: true,
            prime: false,
            estimatedDays: 3
        }
    },
    {
        id: '139',
        name: 'Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator',
        description: 'Ultra-hydrating gel-cream that delivers moisture for up to 72 hours.',
        price: 3400.99,
        originalPrice: 4200.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Clinique',
        rating: 4.8,
        reviewCount: 980,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/1/8/185023f192333042809_GS.jpg?tr=w-500',
            'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/clinique/EEC0JNQHILF-1/3/ulLDMWndvF-4.jpg'
        ],
        features: [
            'Provides 72-hour hydration',
            'Lightweight gel-cream',
            'Non-greasy formula',
            'Auto-replenishing moisture',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Hydrating Gel-Cream',
            'Volume': '50 ml',
            'Key Ingredient': 'Hyaluronic Acid',
            'Skin Type': 'All skin types',
            'Use': 'Apply morning and night',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['50ml', '100ml'],
            fragrance: ['Fragrance-free', 'Light floral']
        },
        inStock: true,
        stockCount: 160,
        tags: ['Hydrating', 'Gel-Cream', 'Sensitive Skin'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '140',
        name: 'Estée Lauder Advanced Night Repair Serum',
        description: 'Powerful anti-aging serum that reduces the appearance of fine lines and wrinkles overnight.',
        price: 790.99,
        originalPrice: 3000.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Estée Lauder',
        rating: 4.9,
        reviewCount: 1520,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/4/b/4bb7f10ESL_ANRSMRCOG_5.jpg?tr=w-500',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebdw0u0L1lQeXJq81j8QSGw8wZHhVlvBlLr3anQBOs-zKFetS81lLZElM8jx5um66I_s&usqp=CAU'
        ],
        features: [
            'Reduces fine lines and wrinkles',
            'Supports skin regeneration',
            'Lightweight and fast-absorbing',
            'Suitable for all skin types',
            'Dermatologist tested',
            'Non-comedogenic'
        ],
        specifications: {
            'Type': 'Anti-Aging Serum',
            'Volume': '30 ml',
            'Key Ingredient': 'ChronoluxCB technology',
            'Skin Type': 'All skin types',
            'Use': 'Apply nightly before moisturizer',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['30ml', '50ml']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Anti-Aging', 'Serum', 'Night Use'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '141',
        name: 'Glossier Balm Dotcom',
        description: 'Multipurpose skin salve for lips, cuticles, and dry patches with natural hydration.',
        price: 120.99,
        originalPrice: 500.99,
        category: 'beauty',
        subcategory: 'personal care',
        brand: 'Glossier',
        rating: 4.6,
        reviewCount: 1325,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLEwLLJZ-M3vXpJc-th0uSVmAz7J4-HfuanAGuRpJsgTObtRV4sJ-Q3GgATGrkLR6rAA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2w6CnHrovxXl1IHAYj0BexqaAZwT-ed7hfg&s'
        ],
        features: [
            'Hydrates lips and skin',
            'Multipurpose usage',
            'Natural and vegan ingredients',
            'Portable and easy to carry',
            'Long-lasting moisture',
            'Cruelty-free'
        ],
        specifications: {
            'Type': 'Skin Salve',
            'Volume': '8 g',
            'Ingredients': 'Shea Butter, Castor Oil, Beeswax',
            'Use': 'Apply as needed',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically tested'
        },
        options: {
            flavor: ['Rose', 'Mint', 'Coconut', 'Vanilla']
        },
        inStock: true,
        stockCount: 210,
        tags: ['Lip Care', 'Hydrating', 'Multipurpose'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '142',
        name: 'NYX Professional Makeup Setting Spray',
        description: 'Long-lasting makeup setting spray that keeps makeup fresh and vibrant all day.',
        price: 110.99,
        originalPrice: 400.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'NYX',
        rating: 4.5,
        reviewCount: 1450,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLDF8dUz3UXtdWA6MokXdyFQdMDo8UGyhIw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRV1xpVcoyRaqJ_3zAVNvfsxlo0z2oV0GPQ&s'
        ],
        features: [
            'Sets makeup for long-lasting wear',
            'Lightweight mist',
            'Non-sticky formula',
            'Suitable for all skin types',
            'Maintains makeup vibrancy',
            'Cruelty-free'
        ],
        specifications: {
            'Type': 'Makeup Setting Spray',
            'Volume': '100 ml',
            'Use': 'Spray after makeup application',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically tested'
        },
        options: {
            finish: ['Matte', 'Dewy']
        },
        inStock: true,
        stockCount: 175,
        tags: ['Setting Spray', 'Long-Lasting', 'Makeup'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '143',
        name: 'Herbivore Botanicals Blue Tansy Face Oil',
        description: 'Soothing facial oil with blue tansy and jojoba oil for calm, balanced skin.',
        price: 3600.99,
        originalPrice: 4400.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Herbivore Botanicals',
        rating: 4.7,
        reviewCount: 890,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5o98sxoRDiNoQWOI6IoiRVGjKrjdazYdO0Q&s',
            'https://www.herbivorebotanicals.com/cdn/shop/files/Lapis_LastStep.jpg?v=1755572713&width=1500'
        ],
        features: [
            'Calms irritated skin',
            'Balancing and soothing',
            'Non-greasy formula',
            'Rich in antioxidants',
            'Suitable for all skin types',
            'Vegan and cruelty-free'
        ],
        specifications: {
            'Type': 'Facial Oil',
            'Volume': '30 ml',
            'Key Ingredients': 'Blue Tansy, Jojoba Oil',
            'Skin Type': 'All skin types',
            'Use': 'Apply 2-3 drops on face and neck',
            'Tested': 'Dermatologically approved'
        },
        options: {
            scent: ['Natural', 'Lavender']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Facial Oil', 'Soothing', 'Vegan'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '144',
        name: 'Kiehl’s Calendula Herbal Extract Toner',
        description: 'Alcohol-free toner with calendula petals to soothe and improve skin texture.',
        price: 230.99,
        originalPrice: 900.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Kiehl’s',
        rating: 4.7,
        reviewCount: 1150,
        images: [
            'https://www.kiehls.in/media/catalog/product/k/i/kiehls-toner-calendula-herbal-extract-toner-alcohol-free-125ml-000-3700194700324-front.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmheeSFeyxPpw9sW__L8NtG4fvVC6CC2ErgQ&s'
        ],
        features: [
            'Soothes and calms skin',
            'Alcohol-free formula',
            'Improves skin texture',
            'Contains calendula petals',
            'Gentle and hydrating',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Toner',
            'Volume': '250 ml',
            'Key Ingredients': 'Calendula Extract, Allantoin',
            'Skin Type': 'Normal to oily',
            'Use': 'Apply after cleansing',
            'Tested': 'Dermatologically approved'
        },
        options: {
            scent: ['Floral', 'Unscented']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Toner', 'Soothing', 'Alcohol-Free'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '145',
        name: 'Burt’s Bees Almond Milk Hand Cream',
        description: 'Rich, non-greasy hand cream to deeply nourish and soften dry hands.',
        price: 700.99,
        originalPrice: 1000.99,
        category: 'beauty',
        subcategory: 'personal care',
        brand: 'Burt’s Bees',
        rating: 4.6,
        reviewCount: 980,
        images: [
            'https://m.media-amazon.com/images/I/81RCh0TY9ZL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_OTUon153EDgwhUW2TQL0Y77onShWFMejQ&s'
        ],
        features: [
            'Deeply nourishes dry skin',
            'Non-greasy formula',
            'Made with natural ingredients',
            'Fast-absorbing',
            'Vegan-friendly',
            'Eco-friendly packaging'
        ],
        specifications: {
            'Type': 'Hand Cream',
            'Volume': '75 ml',
            'Key Ingredients': 'Almond Oil, Vitamin E',
            'Skin Type': 'Dry to normal',
            'Use': 'Apply as needed',
            'Tested': 'Dermatologically tested'
        },
        options: {
            scent: ['Almond', 'Unscented']
        },
        inStock: true,
        stockCount: 200,
        tags: ['Hand Care', 'Nourishing', 'Natural'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '146',
        name: 'Tatcha The Silk Canvas Primer',
        description: 'Hydrating, protective primer that blurs imperfections and extends makeup wear.',
        price: 520.99,
        originalPrice: 1020.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Tatcha',
        rating: 4.8,
        reviewCount: 760,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSp6xqKAq-F1QXPmwXf29657fuE8Qv8qoVvw&s',
            'https://assets.tatcha.com/desktop/images/product-images/makeup-essentials/LiquidSilkCanvas-1-FS-1-Lifestyle.jpg?sw=960&sh=960&q=100'
        ],
        features: [
            'Blurs imperfections',
            'Hydrating formula',
            'Protects skin under makeup',
            'Lightweight and smooth',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Primer',
            'Volume': '30 ml',
            'Texture': 'Silky gel',
            'Use': 'Apply before foundation',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically approved'
        },
        options: {
            shade: ['Translucent', 'Light']
        },
        inStock: true,
        stockCount: 90,
        tags: ['Primer', 'Hydrating', 'Makeup Prep'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '147',
        name: 'Charlotte Tilbury Magic Cream',
        description: 'Luxurious face cream that hydrates, plumps, and preps skin for makeup.',
        price: 950.99,
        originalPrice: 1200.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Charlotte Tilbury',
        rating: 4.9,
        reviewCount: 880,
        images: [
            'https://images.ctfassets.net/wlke2cbybljx/4ZisBTrjGvb866CEUQZ7WU/acf26ca931c80bd0454e66ab83f70ff2/Magic_Cream_Dims.png?q=80&w=660&h=660&fit=fill&bg=&fm=png',
            'https://images-static.nykaa.com/media/catalog/product/b/1/b13841c5060542722759.jpg'
        ],
        features: [
            'Hydrates and plumps skin',
            'Preps skin for makeup',
            'Rich in antioxidants',
            'Fast-absorbing',
            'Suitable for dry to normal skin',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Face Cream',
            'Volume': '50 ml',
            'Key Ingredients': 'Hyaluronic Acid, Vitamins C & E',
            'Skin Type': 'Dry to normal',
            'Use': 'Apply morning and night',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['50ml', '100ml'],
            fragrance: ['Light floral', 'Unscented']
        },
        inStock: true,
        stockCount: 75,
        tags: ['Luxury', 'Hydrating', 'Makeup Prep'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '148',
        name: 'IT Cosmetics Your Skin But Better CC+ Cream',
        description: 'Full-coverage color-correcting cream with SPF 50 for radiant skin.',
        price: 390.99,
        originalPrice: 900.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'IT Cosmetics',
        rating: 4.7,
        reviewCount: 1450,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh91otIF0uGXaN1qMYzh3jV9FTFVbHToNhYA&s',
            'https://m.media-amazon.com/images/I/81LAuYtjEeL._UF350,350_QL80_.jpg'
        ],
        features: [
            'Full coverage with natural finish',
            'Contains SPF 50 for sun protection',
            'Hydrating formula',
            'Anti-aging ingredients',
            'Vegan-friendly',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'CC Cream',
            'Volume': '50 ml',
            'Coverage': 'Full',
            'Finish': 'Natural',
            'Skin Type': 'All skin types',
            'Use': 'Apply with brush, sponge, or fingers'
        },
        options: {
            shade: ['Fair', 'Light', 'Medium', 'Tan', 'Deep']
        },
        inStock: true,
        stockCount: 130,
        tags: ['CC Cream', 'SPF Protection', 'Hydrating'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '149',
        name: 'Fresh Sugar Lip Treatment SPF 15',
        description: 'Tinted lip balm with SPF 15 that hydrates and protects lips from sun damage.',
        price: 240.99,
        originalPrice: 500.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Fresh',
        rating: 4.8,
        reviewCount: 1120,
        images: [
            'https://m.media-amazon.com/images/I/51MdlA4maFL._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRAJVLow9qbI3kY2EPgMbcRz9h1sXSzggLQ&s'
        ],
        features: [
            'Hydrates and protects lips',
            'SPF 15 for sun protection',
            'Tinted natural colors',
            'Long-lasting moisture',
            'Non-sticky formula',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Lip Balm',
            'Volume': '4.3 g',
            'Key Ingredients': 'Sugar, Shea Butter, Jojoba Oil',
            'Use': 'Apply as needed',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically approved'
        },
        options: {
            shade: ['Rose', 'Coral', 'Berry']
        },
        inStock: true,
        stockCount: 210,
        tags: ['Lip Care', 'SPF Protection', 'Tinted'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '150',
        name: 'Drunk Elephant C-Firma Day Serum',
        description: 'Vitamin C serum with antioxidants to firm and brighten the skin while reducing signs of aging.',
        price: 780.99,
        originalPrice: 1200.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Drunk Elephant',
        rating: 4.9,
        reviewCount: 890,
        images: [
            'https://m.media-amazon.com/images/I/81h4ifWGHDL._UF350,350_QL80_.jpg',
            'https://images.squarespace-cdn.com/content/v1/54d4717de4b0950984a1ad2f/1562142472674-6JOPMD9T6P3VJVQLIXM5/Drunk-Elephant-C-Firma-3.jpg'
        ],
        features: [
            'Brightens and firms skin',
            'Powerful antioxidant protection',
            'Reduces fine lines and wrinkles',
            'Lightweight, fast-absorbing',
            'Non-irritating',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Vitamin C Serum',
            'Volume': '30 ml',
            'Key Ingredients': 'Vitamin C, Ferulic Acid, Hyaluronic Acid',
            'Skin Type': 'All skin types',
            'Use': 'Apply morning after cleansing',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['30ml', '50ml']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Serum', 'Brightening', 'Anti-Aging'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '151',
        name: 'bareMinerals Original Loose Powder Foundation SPF 15',
        description: 'Mineral-based powder foundation that provides natural coverage with sun protection.',
        price: 320.99,
        originalPrice: 900.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'bareMinerals',
        rating: 4.6,
        reviewCount: 1020,
        images: [
            'https://m.media-amazon.com/images/I/81724OgyQ6L._UF1000,1000_QL80_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0OKvBdSq7gI2TYwlo6UBbSW8CZxAwGIYuA&s'
        ],
        features: [
            'Mineral-based formula',
            'Natural, buildable coverage',
            'SPF 15 for sun protection',
            'Suitable for sensitive skin',
            'Non-comedogenic',
            'Long-lasting wear'
        ],
        specifications: {
            'Type': 'Loose Powder Foundation',
            'Volume': '8 g',
            'Coverage': 'Light to Medium',
            'Finish': 'Natural',
            'Skin Type': 'All skin types',
            'Use': 'Apply with brush'
        },
        options: {
            shade: ['Fair', 'Light', 'Medium', 'Tan', 'Deep']
        },
        inStock: true,
        stockCount: 130,
        tags: ['Powder Foundation', 'Mineral', 'SPF'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '152',
        name: 'Origins GinZing Refreshing Eye Cream',
        description: 'Energizing eye cream that reduces puffiness, dark circles, and brightens tired eyes.',
        price: 320.99,
        originalPrice: 700.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Origins',
        rating: 4.7,
        reviewCount: 940,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxohDryDfv7UxMeALW8pS7by4QauK-0rrHzw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpokIuvnmRdXqWsfXi9qb51JxFrz0V3HSYw&s'
        ],
        features: [
            'Reduces puffiness and dark circles',
            'Brightens and refreshes eyes',
            'Contains natural caffeine and ginseng',
            'Lightweight and non-greasy',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Eye Cream',
            'Volume': '15 ml',
            'Key Ingredients': 'Caffeine, Ginseng',
            'Skin Type': 'All skin types',
            'Use': 'Apply morning and night',
            'Tested': 'Dermatologically approved'
        },
        options: {
            fragrance: ['Unscented', 'Light Citrus']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Eye Care', 'Brightening', 'Hydrating'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '153',
        name: 'Laneige Lip Sleeping Mask',
        description: 'Overnight lip treatment that nourishes and softens lips while you sleep.',
        price: 18.99,
        originalPrice: 220.99,
        category: 'beauty',
        subcategory: 'personal care',
        brand: 'Laneige',
        rating: 4.8,
        reviewCount: 1120,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2eNj7jykq7I6z56mh4Frxh_TynOloPYyFQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVAIygYLJZ-X3ysNl3srdi4t17XNQXcbC_Q&s'
        ],
        features: [
            'Deeply hydrates lips overnight',
            'Softens and smoothens',
            'Non-sticky texture',
            'Pleasant fruity scent',
            'Vegan-friendly',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Lip Mask',
            'Volume': '20 g',
            'Key Ingredients': 'Berry Extracts, Vitamin C',
            'Use': 'Apply before bedtime',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically approved'
        },
        options: {
            flavor: ['Berry', 'Apple', 'Grapefruit']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Lip Care', 'Overnight', 'Hydrating'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '154',
        name: 'Huda Beauty Obsessions Eyeshadow Palette',
        description: 'Compact palette with 9 highly pigmented shades for bold and versatile eye looks.',
        price: 290.99,
        originalPrice: 800.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Huda Beauty',
        rating: 4.7,
        reviewCount: 980,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/6/d/6d3e6b2HUDAB00001131_1.jpg?tr=w-500',
            'https://i.ytimg.com/vi/tWmmq3sLYTI/maxresdefault.jpg'
        ],
        features: [
            'Highly pigmented shades',
            'Blendable formula',
            'Compact and portable',
            'Long-lasting wear',
            'Suitable for all skin tones',
            'Cruelty-free'
        ],
        specifications: {
            'Type': 'Eyeshadow Palette',
            'Weight': '12 g',
            'Finish': 'Matte and Shimmer',
            'Use': 'Apply with brush or fingertips',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically tested'
        },
        options: {
            palette: ['Neon', 'Smokey', 'Desert', 'Rose']
        },
        inStock: true,
        stockCount: 110,
        tags: ['Eyeshadow', 'Pigmented', 'Blendable'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '155',
        name: 'Vichy Mineral 89 Face Serum',
        description: 'Daily booster with 89% mineralizing water and hyaluronic acid to strengthen and hydrate skin.',
        price: 240.99,
        originalPrice: 950.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Vichy',
        rating: 4.8,
        reviewCount: 940,
        images: [
            'https://m.media-amazon.com/images/I/817YEiXqQ5L.jpg',
            'https://m.media-amazon.com/images/I/71MuEFU9mjL._UF350,350_QL80_.jpg'
        ],
        features: [
            'Hydrates and strengthens skin',
            'Non-greasy, lightweight formula',
            'Contains 89% mineral water',
            'Reduces sensitivity and fatigue signs',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Face Serum',
            'Volume': '50 ml',
            'Key Ingredients': 'Hyaluronic Acid, Vichy Mineralizing Water',
            'Skin Type': 'All skin types',
            'Use': 'Apply morning and night',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['50ml', '100ml']
        },
        inStock: true,
        stockCount: 130,
        tags: ['Serum', 'Hydrating', 'Sensitive Skin'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '156',
        name: 'Anastasia Beverly Hills Brow Wiz',
        description: 'Precision pencil for defining and filling in brows with natural-looking results.',
        price: 230.99,
        originalPrice: 1000.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Anastasia Beverly Hills',
        rating: 4.7,
        reviewCount: 1010,
        images: [
            'https://images-cdn.ubuy.co.in/64ea0c7e3abe5765fc5286f1-anastasia-beverly-hills-brow-wiz-soft.jpg',
            'https://m.media-amazon.com/images/I/81M4jwU8GJL._UF350,350_QL80_.jpg'
        ],
        features: [
            'Precision tip for accurate application',
            'Blendable formula',
            'Natural brow finish',
            'Long-lasting wear',
            'Suitable for all skin types',
            'Cruelty-free'
        ],
        specifications: {
            'Type': 'Brow Pencil',
            'Weight': '0.09 g',
            'Finish': 'Natural',
            'Use': 'Apply using light strokes',
            'Skin Type': 'All skin types',
            'Tested': 'Dermatologically tested'
        },
        options: {
            shade: ['Blonde', 'Taupe', 'Soft Brown', 'Dark Brown']
        },
        inStock: true,
        stockCount: 150,
        tags: ['Brow Pencil', 'Precision', 'Long-Lasting'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '157',
        name: 'Ole Henriksen Truth Serum',
        description: 'Vitamin C-rich serum that brightens, firms, and smooths skin for a radiant complexion.',
        price: 490.99,
        originalPrice: 1230.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Ole Henriksen',
        rating: 4.9,
        reviewCount: 870,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKyQW10cqgXwwuiXZNvrnaBtFw7DRMoB1RA&s',
            'https://i.ytimg.com/vi/LJOHHD18Q5E/maxresdefault.jpg'
        ],
        features: [
            'Brightens and firms skin',
            'Reduces fine lines and wrinkles',
            'Vitamin C-rich formula',
            'Lightweight and fast-absorbing',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Vitamin C Serum',
            'Volume': '50 ml',
            'Key Ingredients': 'Vitamin C, Collagen, Hyaluronic Acid',
            'Skin Type': 'All skin types',
            'Use': 'Apply morning after cleansing',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['50ml', '100ml']
        },
        inStock: true,
        stockCount: 110,
        tags: ['Serum', 'Brightening', 'Anti-Aging'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '158',
        name: 'Too Faced Better Than Sex Mascara',
        description: 'Volumizing mascara that delivers dramatic length, volume, and curl.',
        price: 240.99,
        originalPrice: 670.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Too Faced',
        rating: 4.7,
        reviewCount: 1340,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/5/9/597c9c5651986971961_a1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYqHuY4iNiPMeqPcDCGNIF28ARbNNqu1k6w&s'
        ],
        features: [
            'Dramatic volume and length',
            'Curl-enhancing formula',
            'Long-lasting wear',
            'Smooth and clump-free',
            'Suitable for sensitive eyes',
            'Ophthalmologist tested'
        ],
        specifications: {
            'Type': 'Mascara',
            'Volume': '8 ml',
            'Formulation': 'Volumizing',
            'Use': 'Apply to upper and lower lashes',
            'Skin Type': 'All skin types',
            'Tested': 'Ophthalmologist approved'
        },
        options: {
            shade: ['Very Black', 'Blackest Black']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Mascara', 'Volumizing', 'Curl'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '159',
        name: 'Kosas Tinted Face Oil',
        description: 'Lightweight tinted oil that hydrates, evens skin tone, and provides natural coverage.',
        price: 380.99,
        originalPrice: 700.99,
        category: 'beauty',
        subcategory: 'makeup',
        brand: 'Kosas',
        rating: 4.6,
        reviewCount: 710,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHcRRYlJfqq1JU03lr56g3BFkB_iUmGY7jA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmC4gdhPep2jP-dtvFVJWnqZwQTuvFCKINQ&s'
        ],
        features: [
            'Hydrating tinted formula',
            'Provides natural coverage',
            'Lightweight and breathable',
            'Dewy finish',
            'Vegan and cruelty-free',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Tinted Face Oil',
            'Volume': '30 ml',
            'Finish': 'Dewy',
            'Coverage': 'Light',
            'Skin Type': 'All skin types',
            'Use': 'Apply with fingers or sponge'
        },
        options: {
            shade: ['Light', 'Medium', 'Tan']
        },
        inStock: true,
        stockCount: 100,
        tags: ['Tinted Oil', 'Hydrating', 'Natural Finish'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '160',
        name: 'Lush Fresh Face Mask',
        description: 'Handmade face mask with fresh ingredients to cleanse, nourish, and revitalize skin.',
        price: 120.99,
        originalPrice: 800.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Lush',
        rating: 4.7,
        reviewCount: 890,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO64J6MQr5iYeRGMJx5WkiwER0abqIJC1S8qx0PcLaEfcmEjmJrWj77Y7dDqCeKkfCwsI&usqp=CAU',
            'https://i.pinimg.com/736x/e3/2f/e0/e32fe04445f5c0706a6b551e94cc6aea.jpg'
        ],
        features: [
            'Fresh, handmade ingredients',
            'Cleanses and nourishes skin',
            'Revitalizes dull complexion',
            'Eco-friendly packaging',
            'Suitable for all skin types',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Face Mask',
            'Volume': '75 g',
            'Key Ingredients': 'Fresh fruits, Kaolin Clay',
            'Skin Type': 'All skin types',
            'Use': 'Apply once or twice weekly',
            'Tested': 'Dermatologically approved'
        },
        options: {
            scent: ['Lavender', 'Honey', 'Citrus']
        },
        inStock: true,
        stockCount: 140,
        tags: ['Face Mask', 'Fresh', 'Nourishing'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2
        }
    },
    {
        id: '161',
        name: 'Dr. Jart+ Cicapair Tiger Grass Cream',
        description: 'Soothing cream that calms redness, strengthens the skin barrier, and provides hydration.',
        price: 390.99,
        originalPrice: 1000.99,
        category: 'beauty',
        subcategory: 'skincare',
        brand: 'Dr. Jart+',
        rating: 4.8,
        reviewCount: 860,
        images: [
            'https://images-static.nykaa.com/media/catalog/product/0/d/0dc11d08809724476168_1.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7gg62xhlLprhVU27_9wtiBqDHa83SVJUew&s'
        ],
        features: [
            'Calms redness and irritation',
            'Strengthens skin barrier',
            'Hydrating formula',
            'Non-greasy and lightweight',
            'Suitable for sensitive skin',
            'Dermatologist tested'
        ],
        specifications: {
            'Type': 'Soothing Cream',
            'Volume': '50 ml',
            'Key Ingredients': 'Centella Asiatica (Tiger Grass), Niacinamide',
            'Skin Type': 'Sensitive, all skin types',
            'Use': 'Apply morning and night',
            'Tested': 'Dermatologically approved'
        },
        options: {
            size: ['50ml', '100ml']
        },
        inStock: true,
        stockCount: 120,
        tags: ['Redness Relief', 'Soothing', 'Hydrating'],
        shippingInfo: {
            freeShipping: true,
            prime: true,
            estimatedDays: 2,
        }
    },
];
export const CATEGORIES = [
    { id: 'electronics', name: 'Electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5GsDx67AnihQNN3i8vCYa1y06gsmcYWu7Q&s' },
    { id: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 'home appliances', name: 'Home appliances', image: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/55e7171d90336027d77078f6/images/5c8f56740428633d2cf3b380/file-wGVV7yqBMZ.png' },
    { id: 'health', name: 'Health', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dS_7qKom06_ORM-6NLwN9O1t5YBwYB4caA&s' },
    { id: 'books', name: 'Books', image: 'https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Feature.jpg?fit=569%2C509&ssl=1' },
    { id: 'sports', name: 'Sports', image: 'https://media.gettyimages.com/id/598160468/vector/set-of-sports-equipment.jpg?s=612x612&w=gi&k=20&c=SN_5gqwOotNQn7NYGPCW5DAy-1ajAYP_i9wiLUm4eM4=' },
    { id: 'toys', name: 'Toys', image: 'https://assets.thehansindia.com/h-upload/2024/12/12/1505510-amazon.webp' },
    { id: 'beauty', name: 'Beauty', image: 'https://d2ati23fc66y9j.cloudfront.net/category-pages/sub_category-174021874143.jpg' },
    { id: 'grocery', name: 'Grocery', image: 'https://content.jdmagicbox.com/comp/jatani/h7/9999p6755.6755.180630221240.d8h7/catalogue/grocery-business-panchagaon-jatani-grocery-stores-rqd51x3gfp.jpg' },
    { id: 'automotive', name: 'Automotive', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmNrVXe_8Y9agOvARPKK8zKEX-p2UN3FtrQ&s' },
];
export function getProductById(id) {
    return products.find(p => p.id === id || p.id === String(id));
}
export function getCategoryById(categoryId) {
    return CATEGORIES.find(c => c.id === categoryId || c.name.toLowerCase() === String(categoryId).toLowerCase());
}
export function getProductsByCategory(categoryId) {
    return products.filter(p => p.category === categoryId);
}
export function getFeaturedProducts() {
    return [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);
}
export function getDealsProducts() {
    return products.filter(p => p.originalPrice > p.price).slice(0, 12);
}
export function getRelatedProducts(productId) {
    const product = getProductById(productId);
    if (!product) return [];
    return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
}
const _reviews = {};
export function getProductReviews(productId) {
    if (!_reviews[productId]) _reviews[productId] = [];
    return _reviews[productId];
}
export function addReview(productId, review) {
    if (!_reviews[productId]) _reviews[productId] = [];
    _reviews[productId].unshift({
        ...review,
        id: Date.now().toString(),
        date: new Date().toISOString(),
        verified: true,
        helpful: 0,
    });
}
export default products;
