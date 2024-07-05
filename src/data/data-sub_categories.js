import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/doctor-images/`;

export const subcategories = [
  {
    name: "Smartphones",
    mainCategory: "Electronics",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "smartphones",
    sortDesc: "Discover the latest smartphones with cutting-edge features",
    productTags: ["High-Tech", "Innovative", "Advanced"],
    fullDesc:
      "Browse our wide selection of smartphones from top brands and enjoy the latest technology at your fingertips.",
  },
  {
    name: "Laptops",
    mainCategory: "Electronics",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "laptops",
    sortDesc: "Find powerful laptops for work, gaming, and entertainment",
    productTags: ["Portable", "High-Performance", "Versatile"],
    fullDesc:
      "Explore our range of laptops designed to meet your computing needs. Whether you need a laptop for work, gaming, or multimedia, we have the perfect solution for you.",
  },
  {
    name: "Televisions",
    mainCategory: "Electronics",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "televisions",
    sortDesc:
      "Immerse yourself in stunning visuals with our wide range of televisions",
    productTags: ["High-Resolution", "Smart", "Cinematic"],
    fullDesc:
      "Upgrade your home entertainment experience with our collection of televisions. Enjoy crystal-clear picture quality and smart features that bring your favorite shows and movies to life.",
  },
  {
    name: "T-Shirts",
    mainCategory: "Clothing",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "t-shirts",
    sortDesc: "Shop for stylish and comfortable t-shirts for every occasion",
    productTags: ["Fashionable", "Versatile", "Soft"],
    fullDesc:
      "Discover a wide range of trendy and comfortable t-shirts for men, women, and kids. From basic essentials to statement pieces, we have the perfect t-shirt to elevate your style.",
  },
  {
    name: "Jeans",
    mainCategory: "Clothing",
    product: "Available",
    status: "Active",
    trending: true,
    slug: "jeans",
    sortDesc: "Find the perfect pair of jeans that combines style and comfort",
    productTags: ["Denim", "Classic", "Durable"],
    fullDesc:
      "Browse our collection of jeans for men and women and find the perfect fit and style that suits your taste. From skinny jeans to relaxed-fit options, we have something for everyone.",
  },
  {
    name: "Dresses",
    mainCategory: "Clothing",
    product: "Available",
    status: "Active",
    trending: false,
    slug: "dresses",
    sortDesc: "Discover a variety of dresses for every occasion",
    productTags: ["Elegant", "Fashionable", "Flattering"],
    fullDesc:
      "Explore our extensive collection of dresses, ranging from casual to formal, to find the perfect outfit for any event. From sundresses to evening gowns, we have something to suit every style.",
  },
  // Add more subcategory objects here...
];
