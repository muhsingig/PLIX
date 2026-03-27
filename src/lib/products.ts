export type Category = 'All' | 'Serums' | 'Moisturizers' | 'Cleansers' | 'Sunscreen' | 'Hair Care' | 'Under Eye' | 'Toners';
export type Concern = 'All' | 'Brightening' | 'Pigmentation' | 'Acne' | 'Anti-Ageing' | 'Hairfall' | 'Hydration' | 'Dark Circles' | 'Dandruff';
export type BadgeType = 'BESTSELLER' | 'TOP RATED' | 'NEW' | 'VIRAL' | '40% OFF';

export interface Product {
  id: number;
  name: string;
  category: Category;
  concern: Concern;
  ingredients: string[];
  price: number;
  originalPrice: number;
  badge?: BadgeType;
  accentColor: string;
}

export const CATEGORIES: Category[] = ['All', 'Serums', 'Moisturizers', 'Cleansers', 'Sunscreen', 'Hair Care', 'Under Eye', 'Toners'];
export const CONCERNS: Concern[]    = ['All', 'Brightening', 'Pigmentation', 'Acne', 'Anti-Ageing', 'Hairfall', 'Hydration', 'Dark Circles', 'Dandruff'];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Guava Glow Vitamin C Serum", category: "Serums", concern: "Brightening",
    ingredients: ["10% Vit C", "ALA", "Hyaluronic Acid"],
    price: 410, originalPrice: 575, badge: "BESTSELLER", accentColor: "#F4A0A8" },

  { id: 2, name: "Pineapple Alpha Arbutin Serum", category: "Serums", concern: "Pigmentation",
    ingredients: ["2% Arbutin", "Pineapple", "Niacinamide"],
    price: 410, originalPrice: 575, badge: "TOP RATED", accentColor: "#FFD166" },

  { id: 3, name: "Jamun Active Acne Serum", category: "Serums", concern: "Acne",
    ingredients: ["Salicylic Acid", "Caffeine", "Jamun"],
    price: 450, originalPrice: 599, badge: "VIRAL", accentColor: "#7B2D8B" },

  { id: 4, name: "Pomegranate Retinol Night Serum", category: "Serums", concern: "Anti-Ageing",
    ingredients: ["1.2% Retinol", "Bakuchi Oil", "Pomegranate"],
    price: 499, originalPrice: 550, badge: "NEW", accentColor: "#C9184A" },

  { id: 5, name: "Guava Glow Smoothie Moisturizer", category: "Moisturizers", concern: "Brightening",
    ingredients: ["Vit C", "ALA", "Pro-Vit B5"],
    price: 499, originalPrice: 699, badge: "BESTSELLER", accentColor: "#F4A0A8" },

  { id: 6, name: "Jamun Niacinamide Moisturizer", category: "Moisturizers", concern: "Acne",
    ingredients: ["2% Niacinamide", "Jamun", "Zinc"],
    price: 449, originalPrice: 599, badge: "TOP RATED", accentColor: "#7B2D8B" },

  { id: 7, name: "Pineapple Depigmentation Moisturizer", category: "Moisturizers", concern: "Pigmentation",
    ingredients: ["Alpha Arbutin", "Pineapple", "AHA"],
    price: 450, originalPrice: 599, accentColor: "#FFD166" },

  { id: 8, name: "Guava Glow Juicy Cleanser", category: "Cleansers", concern: "Brightening",
    ingredients: ["Vit C", "ALA", "Pro-Vit B5"],
    price: 275, originalPrice: 375, badge: "BESTSELLER", accentColor: "#F4A0A8" },

  { id: 9, name: "Jamun Salicylic Acid Facewash", category: "Cleansers", concern: "Acne",
    ingredients: ["2% Salicylic", "Jamun", "Niacinamide"],
    price: 275, originalPrice: 375, accentColor: "#7B2D8B" },

  { id: 10, name: "Guava Glow Sunscreen SPF 50+", category: "Sunscreen", concern: "Hydration",
    ingredients: ["SPF 50+", "Ceramide", "Vit C"],
    price: 254, originalPrice: 425, badge: "40% OFF", accentColor: "#F4A0A8" },

  { id: 11, name: "Rosemary Anti-Hairfall Serum", category: "Hair Care", concern: "Hairfall",
    ingredients: ["Rosemary", "Biotin", "Caffeine"],
    price: 499, originalPrice: 599, badge: "VIRAL", accentColor: "#2D6A4F" },

  { id: 12, name: "Neem Anti-Dandruff Serum", category: "Hair Care", concern: "Dandruff",
    ingredients: ["Neem", "Zinc", "Salicylic Acid"],
    price: 449, originalPrice: 599, accentColor: "#2D6A4F" },

  { id: 13, name: "Watermelon Under Eye Patches", category: "Under Eye", concern: "Dark Circles",
    ingredients: ["Watermelon", "Caffeine", "Peptides"],
    price: 349, originalPrice: 450, badge: "NEW", accentColor: "#FF6B8A" },

  { id: 14, name: "Pineapple Exfoliation Toner", category: "Toners", concern: "Brightening",
    ingredients: ["AHA", "BHA", "Pineapple"],
    price: 375, originalPrice: 499, accentColor: "#FFD166" },
];
