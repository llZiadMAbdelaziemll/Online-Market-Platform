import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/doctor-images/`;

export const subCategories = [
  // Asian Cuisine
  {
    name: "Chinese",
    mainCategory: "Asian Cuisine",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "chinese",
    sortDesc: "Traditional Chinese dishes with rich flavors",
    productTags: ["Noodles", "Rice", "Savory"],
    fullDesc:
      "Explore a wide range of authentic Chinese meals, from stir-fries to classic noodle dishes.",
  },
  {
    name: "Japanese",
    mainCategory: "Asian Cuisine",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "japanese",
    sortDesc: "Elegant Japanese cuisine with fresh ingredients",
    productTags: ["Sushi", "Ramen", "Fresh"],
    fullDesc:
      "Enjoy traditional and modern Japanese dishes crafted with precision and fresh ingredients.",
  },
  {
    name: "Thai",
    mainCategory: "Asian Cuisine",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "thai",
    sortDesc: "Bold and spicy Thai flavors",
    productTags: ["Spicy", "Herbs", "Street Food"],
    fullDesc:
      "Taste the balance of sweet, sour, and spicy flavors in our authentic Thai dishes.",
  },
  {
    name: "Korean",
    mainCategory: "Asian Cuisine",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "korean",
    sortDesc: "Famous Korean comfort foods",
    productTags: ["BBQ", "Fermented", "Spicy"],
    fullDesc:
      "Discover Korean classics like BBQ, bibimbap, and flavorful fermented dishes.",
  },

  // Italian Cuisine
  {
    name: "Pizza",
    mainCategory: "Italian Cuisine",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "pizza",
    sortDesc: "Classic Italian pizzas with fresh toppings",
    productTags: ["Cheese", "Baked", "Classic"],
    fullDesc:
      "Enjoy oven-baked Italian pizzas topped with premium ingredients and rich flavors.",
  },
  {
    name: "Pasta",
    mainCategory: "Italian Cuisine",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "pasta",
    sortDesc: "Traditional Italian pasta dishes",
    productTags: ["Creamy", "Sauce", "Italian"],
    fullDesc:
      "From creamy Alfredo to rich Bolognese, explore our delicious pasta selection.",
  },
  {
    name: "Risotto",
    mainCategory: "Italian Cuisine",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "risotto",
    sortDesc: "Creamy Italian rice dishes",
    productTags: ["Rice", "Creamy", "Gourmet"],
    fullDesc:
      "Savor slow-cooked risotto made with premium ingredients and authentic techniques.",
  },
  {
    name: "Seafood",
    mainCategory: "Italian Cuisine",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "italian-seafood",
    sortDesc: "Italian-style seafood specialties",
    productTags: ["Fresh", "Seafood", "Mediterranean"],
    fullDesc:
      "Taste fresh seafood prepared with classic Italian herbs and cooking styles.",
  },

  // Beverages
  {
    name: "Hot Drinks",
    mainCategory: "Beverages",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "hot-drinks",
    sortDesc: "Warm and comforting beverages",
    productTags: ["Coffee", "Tea", "Hot"],
    fullDesc:
      "Relax with our selection of hot drinks including coffee, tea, and specialty beverages.",
  },
  {
    name: "Cold Drinks",
    mainCategory: "Beverages",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "cold-drinks",
    sortDesc: "Refreshing cold beverages",
    productTags: ["Cold", "Refreshing", "Iced"],
    fullDesc:
      "Cool down with freshly prepared cold drinks and refreshing blends.",
  },

  // Desserts
  {
    name: "Cakes",
    mainCategory: "Desserts",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "cakes",
    sortDesc: "Soft and delicious cakes",
    productTags: ["Sweet", "Baked", "Creamy"],
    fullDesc:
      "Enjoy a variety of freshly baked cakes made with premium ingredients.",
  },
  {
    name: "Ice Cream",
    mainCategory: "Desserts",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "ice-cream",
    sortDesc: "Creamy and refreshing ice cream flavors",
    productTags: ["Cold", "Sweet", "Creamy"],
    fullDesc:
      "Choose from a wide selection of classic and modern ice cream flavors.",
  },

  // Mexican Cuisine
  {
    name: "Tacos",
    mainCategory: "Mexican Cuisine",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "tacos",
    sortDesc: "Traditional Mexican tacos",
    productTags: ["Street Food", "Spicy", "Mexican"],
    fullDesc:
      "Enjoy authentic Mexican tacos filled with bold flavors and fresh ingredients.",
  },
  {
    name: "Burritos",
    mainCategory: "Mexican Cuisine",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "burritos",
    sortDesc: "Hearty Mexican burritos",
    productTags: ["Filling", "Wraps", "Mexican"],
    fullDesc: "Satisfy your appetite with our large and flavorful burritos.",
  },
];
