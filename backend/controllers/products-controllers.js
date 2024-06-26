let DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Cosmic Apples",
    details: "The best type of apple.",
    price: "4.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://cosmiccrisp.com/wp-content/uploads/2022/09/cosmic-crisp-featured-img.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Best apple money can buy.",
          numStars: 3,
          product: "p1",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 3,
  },
  {
    id: "p2",
    name: "Honeycrisp Apples",
    details: "ok type of apple.",
    price: "2.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Honeycrisp_Apple_3_FGT.jpg?v=1698960740",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Okayest apple money can buy.",
          numStars: 4,
          product: "p2",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 4,
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Red_Delicious_Apple_2.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Worst apple money can buy.",
          numStars: 4,
          product: "p3",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 4,
  },
  {
    id: "p4",
    name: "Bananas",
    details: "The monkey's favorite treat.",
    price: "1.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://t3.ftcdn.net/jpg/06/34/40/22/360_F_634402218_41XksfHts40214t2EHkhA4ivNUen479W.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "I see why monkeys like them so much.",
          numStars: 3,
          product: "p4",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 3,
  },
  {
    id: "p5",
    name: "Winter Orange",
    details: "Keeps you warm in the dead of winter.",
    price: "2.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://tacomaboys.com/wp-content/uploads/2020/04/TB-27-8701-1024x588.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Saved me when I got lost in the snow.",
          numStars: 5,
          product: "p5",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
  },
  {
    id: "p6",
    name: "Grapefruit",
    details: "Citrus fruit looks like an orange.",
    price: "3.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://draxe.com/wp-content/uploads/2017/04/GrapefruitBenefitsThumbnail.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Good for scurvy I think.",
          numStars: 3,
          product: "p6",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 3,
  },
  {
    id: "p7",
    name: "Watermelon",
    details: "Iconic summer fruit.",
    price: "4.99",
    unit: { name: "lb", numUnits: 1 },
    image:
      "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=6EdNOdUo",
    reviewData: {
      averageStarRating: 4.13,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Great for hydration and cooling down in the summer.",
          numStars: 4,
          product: "p7",
          date: "2024-3-14",
        },
        {
          title: "This is a lorem ipsum review",
          creator: "Billy Bob",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          numStars: 3,
          product: "p7",
          date: "2024-3-16",
        },
      ],
    },
    categories: ["fruit"],
  },
  {
    id: "p8",
    name: "Strawberries",
    details: "Worst type of apple.",
    price: "2.99",
    unit: { name: "oz", numUnits: 1 },
    image:
      "https://www.health.com/thmb/18xOlsk4Eb84ciGWMo9LVXBkWKk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Great for hydration.",
          numStars: 4,
          product: "p8",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 4,
  },
  {
    id: "p9",
    name: "Blueberries",
    details: "Good for your memory.",
    price: "1.99",
    unit: { name: "oz", numUnits: 2 },
    image: "https://www.kroger.com/product/images/xlarge/front/0003338322241",
    reviewData: {
      averageStarRating: 5,
      totalStars: {
        total: 78,
        5: 30,
        4: 25,
        3: 10,
        2: 4,
        1: 9,
      },
      reviews: [
        {
          title: "This is a review",
          creator: "u1",
          review: "Pretty good fruit great for your memory.",
          numStars: 2,
          product: "p9",
          date: "2024-3-14",
        },
      ],
    },
    categories: ["fruit"],
    averageStarRating: 2,
  },
];

const getProductsByCategory = (req, res, next) => {
  const category = req.params.category;
  console.log("category is ");
  console.log(category);
  const foundProducts = DUMMY_PRODUCTS.filter((product) => {
    return product.categories.includes(category);
  });
  res.status(201).json({ products: JSON.stringify(foundProducts) });
};

const getProductById = (req, res, next) => {
  const id = req.params.pid;
  console.log("id is");
  console.log(id);
  const foundProduct = DUMMY_PRODUCTS.filter((product) => {
    return product.id === id;
  });
  console.log("foundProduct is");
  console.log(foundProduct);

  res.status(201).json({ product: JSON.stringify(foundProduct) });
};
exports.getProductsByCategory = getProductsByCategory;

exports.getProductById = getProductById;
