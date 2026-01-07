export type Product = {
  id: string;
  name: string;
  integrationKey?: string;
  options: string[];
  type: string;
  strainType: string;
  image: string;
  prices: number[];
  status: string;
  flavors?: string[];
  effects: { [key: string]: number };
  weight: number;
  integration: boolean;
  description: string;
  thcContent: number | string;
  cbdContent: number | string;
  dispensaryId: string;
  updatedAt: Date | string;
  createdAt: Date | string;
  connectedAt?: Date | string;
  syncedAt?: Date | string;
  score: number;
  brandName?: string;
  descriptionHtml: string;
  duplicatedProductId?: string;
  quantities?: { option: string; productID: number; quantity: number }[];
  cName?: string;
};

export const data: { products: Product[] } = {
  products: [
    {
      id: '1',
      name: 'Cheeba Chews | Sativa Chocolate Taffy',
      integrationKey: 'Cheeba Chew SATIVA 100mg',
      options: ['0.1g'],
      type: 'Edible',
      strainType: 'Sativa',
      image:
        'https://images.dutchie.com/519e2ac68c3968e4b20d9910e3b473aa?auto=format&dpr=2&bg=FFFFFF&crop=faces&fit=crop&max-h=291&max-w=409&min-h=291&min-w=409&ixlib=react-7.2.0',
      prices: [20],
      status: 'Active',
      flavors: ['chocolate'],
      effects: { creative: 8, energetic: 9, focused: 8, happy: 9, inspired: 8 },
      weight: 1050,
      integration: true,
      description:
        'Sativa infused Cheeba Chews™ are known for their consistency in producing an uplifting “head high”. Perfect for creative inspiration or a little added motivation when you’re on the go, these individually dosed 3 gram chocolate taffy chews are a perfect compliment to an active lifestyle.\n\nEach batch of high grade cannabis oil used to make Cheeba Chews™ is tested at three critical stages…The Flower, The Oil, The Edible…to ensure each individual chew is consistently infused.\n\nINGREDIENTS: Sugar, Glucose Syrup, Vegetable Oil, Skim Milk, Cocoa, Whey, Butter, Soy Lecithin, Flavorings | Calories: 80\n',
      thcContent: '100',
      cbdContent: '0',
      dispensaryId: '54321',
      updatedAt: '2019-05-31T19:00:19.121Z',
      createdAt: '2019-02-05T00:13:39.014Z',
      syncedAt: '2019-05-31T19:00:19.121Z',
      score: 5,
      brandName: 'Cheeba',
      descriptionHtml:
        '<p>Sativa infused Cheeba Chews™ are known for their consistency in producing an uplifting “head high”. Perfect for creative inspiration or a little added motivation when you’re on the go, these individually dosed 3 gram chocolate taffy chews are a perfect compliment to an active lifestyle.</p><p><br></p><p>Each batch of high grade cannabis oil used to make Cheeba Chews™ is tested at three critical stages…The Flower, The Oil, The Edible…to ensure each individual chew is consistently infused.</p><p><br></p><p>INGREDIENTS: Sugar, Glucose Syrup, Vegetable Oil, Skim Milk, Cocoa, Whey, Butter, Soy Lecithin, Flavorings | Calories: 80</p>',
      duplicatedProductId: '98765',
      quantities: [{ option: '0.1g', productID: 9970, quantity: 28 }],
    },
    {
      id: '2',
      cbdContent: 15,
      description:
        'Eclipse is a Caribbean Splash fruit purée gummy with a hybrid THC distillate/RSO blend. Purefectionery blends their fruit purée using only the finest Blood Orange, Guava, and Tamarind. When you need the feeling of a tropical breeze across your face and in your mouth, these Hybrid Soft Chews will enhance your day or night.\n',
      descriptionHtml:
        '<p>Eclipse is a Caribbean Splash fruit purée gummy with a hybrid THC distillate/RSO blend. Purefectionery blends their fruit purée using only the finest Blood Orange, Guava, and Tamarind. When you need the feeling of a tropical breeze across your face and in your mouth, these Hybrid Soft Chews will enhance your day or night.</p>',
      dispensaryId: 'Mg9zee236E9j3EE7J',
      duplicatedProductId: 'dzLavFcq8esNXdpZ2',
      effects: {
        calm: 9,
        energetic: 5,
        happy: 8,
        relaxed: 6,
        painRelief: 5,
      },
      image:
        'https://images.dutchie.com/e9da65afc7bcf48c3f9c6bcdd69d024d?auto=format&dpr=2&bg=FFFFFF&crop=faces&fit=crop&max-h=291&max-w=409&min-h=291&min-w=409&ixlib=react-7.2.0',
      name: 'Purefectionery | Eclipse Gummies',
      options: ['Purefectionery | Eclipse Gummies'],
      prices: [18],
      status: 'Active',
      strainType: 'Hybrid',
      thcContent: 20,
      type: 'Edible',
      weight: 2361,
      score: 5,
      createdAt: new Date('2019-05-13T18:06:05.414Z'),
      updatedAt: new Date('2019-06-13T23:16:19.283Z'),
      integration: false,
      cName: 'purefectionery-eclipse-gummies',
    },
    {
      id: '3',
      cbdContent: 30,
      description: 'Hybrid by Pintail Gardens \n',
      descriptionHtml: '<p>Hybrid by Pintail Gardens</p>',
      dispensaryId: 'wbf5NjWG8akWvwL3M',
      effects: {
        calm: 9,
        energetic: 5,
        happy: 8,
        relaxed: 6,
        painRelief: 5,
      },
      image:
        'https://images.dutchie.com/96fc1f04dc41226a87cb4cf68cf57ff4?auto=format&dpr=1&bg=FFFFFF&max-h=291&max-w=409&min-h=291&min-w=409&crop=faces&fit=crop&w=409&h=auto&ixlib=react-7.2.0',
      name: 'Cookie Dawg',
      options: ['1g', '1/8oz', '1/4oz', '1/2oz', '1oz'],
      prices: [10.8, 32.4, 64.8, 129.6, 247.2],
      status: 'Active',
      strainType: 'Hybrid',
      thcContent: 29,
      type: 'Flower',
      weight: 1209,
      score: 5,
      createdAt: new Date('2019-06-28T21:59:23.576Z'),
      connectedAt: new Date('2019-07-14T23:23:50.642Z'),
      updatedAt: new Date('2019-07-21T19:02:57.772Z'),
      integration: false,
      cName: 'cookie-dawg',
    },
  ],
};
