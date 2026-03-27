export interface Product {
  id: string;
  name: string;
  category: 'Serums' | 'Moisturizers' | 'Cleansers' | 'Sunscreen' | 'Under Eye' | 'Toners' | 'Hair Care';
  concern: string;
  ingredients: string[];
  price: number;
  originalPrice: number;
  badge?: string;
  badgeColor?: string;
  accentColor: string;
}

export const PRODUCTS: Product[] = [
  // ── SERUMS ────────────────────────────────────────────────────────
  {
    id: 'guava-vitamin-c-serum',
    name: 'Guava Glow 10% Vitamin C Serum',
    category: 'Serums',
    concern: 'Brightening & Even Skin Tone',
    ingredients: ['10% Vitamin C', 'ALA', 'Hyaluronic Acid'],
    price: 410, originalPrice: 575,
    badge: 'BESTSELLER', badgeColor: '#F4A0A8',
    accentColor: '#F4A0A8',
  },
  {
    id: 'pineapple-alpha-arbutin-serum',
    name: 'Pineapple 2% Alpha Arbutin Serum',
    category: 'Serums',
    concern: 'Pigmentation & Dark Spots',
    ingredients: ['2% Alpha Arbutin', 'Pineapple Extract'],
    price: 410, originalPrice: 575,
    badge: 'TOP RATED', badgeColor: '#1B4332',
    accentColor: '#FFD166',
  },
  {
    id: 'jamun-acne-serum',
    name: 'Jamun Active Acne Control Dewy Serum',
    category: 'Serums',
    concern: 'Active Acne & Dark Spot Reduction',
    ingredients: ['2% Salicylic Acid', 'Caffeine', 'Jamun Extract'],
    price: 450, originalPrice: 599,
    badge: 'ACNE HERO', badgeColor: '#7B2D8B',
    accentColor: '#7B2D8B',
  },
  {
    id: 'pomegranate-repair-serum',
    name: 'Pomegranate Overnight Repair Serum',
    category: 'Serums',
    concern: 'Anti-Ageing & Repair',
    ingredients: ['1.2% Retinol', '1% Bakuchi Oil'],
    price: 499, originalPrice: 550,
    badge: 'NEW', badgeColor: '#1B4332',
    accentColor: '#C9184A',
  },
  // ── MOISTURIZERS ─────────────────────────────────────────────────
  {
    id: 'guava-smoothie-moisturizer',
    name: 'Guava Glow Smoothie Moisturizer',
    category: 'Moisturizers',
    concern: 'Brightening & 72-hr Hydration',
    ingredients: ['Vitamin C', 'ALA', 'Pro-Vitamin B5'],
    price: 499, originalPrice: 699,
    badge: 'BESTSELLER', badgeColor: '#F4A0A8',
    accentColor: '#F4A0A8',
  },
  {
    id: 'jamun-niacinamide-moisturizer',
    name: 'Jamun Niacinamide Moisturizer',
    category: 'Moisturizers',
    concern: 'Active Acne & Pimples',
    ingredients: ['2% Niacinamide', 'Jamun Extract'],
    price: 449, originalPrice: 599,
    badge: 'CULT FAVE', badgeColor: '#7B2D8B',
    accentColor: '#7B2D8B',
  },
  {
    id: 'pineapple-depigmentation-moisturizer',
    name: 'Pineapple De-pigmentation Smoothie Moisturizer',
    category: 'Moisturizers',
    concern: 'Pigmentation & Dark Spots',
    ingredients: ['Alpha Arbutin', 'Pineapple Extract'],
    price: 450, originalPrice: 599,
    badge: 'TOP RATED', badgeColor: '#1B4332',
    accentColor: '#FFD166',
  },
  // ── CLEANSERS ─────────────────────────────────────────────────────
  {
    id: 'guava-juicy-cleanser',
    name: 'Guava Glow Juicy Cleanser',
    category: 'Cleansers',
    concern: 'Skin Brightening',
    ingredients: ['Vitamin C', 'ALA', 'Pro-Vitamin B5'],
    price: 275, originalPrice: 375,
    badge: 'HERO PRODUCT', badgeColor: '#F4A0A8',
    accentColor: '#F4A0A8',
  },
  {
    id: 'jamun-salicylic-facewash',
    name: 'Jamun Salicylic Acid Facewash',
    category: 'Cleansers',
    concern: 'Active Acne Treatment',
    ingredients: ['2% Salicylic Acid', 'Jamun Extract'],
    price: 275, originalPrice: 375,
    badge: 'ACNE HERO', badgeColor: '#7B2D8B',
    accentColor: '#7B2D8B',
  },
  {
    id: 'pineapple-foaming-facewash',
    name: 'Pineapple 5% Foaming Facewash',
    category: 'Cleansers',
    concern: 'De-pigmentation',
    ingredients: ['5% Pineapple', 'AHA'],
    price: 275, originalPrice: 375,
    accentColor: '#FFD166',
  },
  // ── SUNSCREEN ─────────────────────────────────────────────────────
  {
    id: 'guava-invisible-sunscreen',
    name: 'Guava Glow Invisible Sunscreen SPF 50+',
    category: 'Sunscreen',
    concern: 'Sun Protection & Brightening',
    ingredients: ['SPF 50+', 'Ceramide', 'Vitamin C'],
    price: 254, originalPrice: 425,
    badge: '40% OFF', badgeColor: '#1B4332',
    accentColor: '#F4A0A8',
  },
  {
    id: 'jamun-gel-sunscreen',
    name: 'Jamun Oil-Balancing Gel Sunscreen SPF 50',
    category: 'Sunscreen',
    concern: 'Oily / Acne-Prone Skin',
    ingredients: ['SPF 50', 'Jamun', 'Salicylic Acid'],
    price: 299, originalPrice: 425,
    accentColor: '#7B2D8B',
  },
  // ── HAIR CARE ─────────────────────────────────────────────────────
  {
    id: 'rosemary-hairfall-serum',
    name: 'Rosemary Anti-Hairfall Advanced Serum',
    category: 'Hair Care',
    concern: 'Hairfall & Thinning',
    ingredients: ['Rosemary Extract', 'Biotin', 'Caffeine'],
    price: 499, originalPrice: 599,
    badge: 'VIRAL', badgeColor: '#1B4332',
    accentColor: '#95D5B2',
  },
  {
    id: 'neem-anti-dandruff-serum',
    name: 'Neem Anti-Dandruff Advanced Serum',
    category: 'Hair Care',
    concern: 'Dandruff & Scalp Health',
    ingredients: ['Neem', 'Zinc', 'Salicylic Acid'],
    price: 449, originalPrice: 599,
    accentColor: '#2D6A4F',
  },
];

export const CATEGORIES = ['All', 'Serums', 'Moisturizers', 'Cleansers', 'Sunscreen', 'Hair Care'] as const;
export type Category = typeof CATEGORIES[number];
