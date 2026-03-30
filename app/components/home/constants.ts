export const marqueeItems = [
  "Premium Bouquets",
  "Custom Orders",
  "Same Day Delivery",
  "Wedding Flowers",
  "Birthday Arrangements",
  "Corporate Events",
  "Aballoon Indonesia",
];

export type Product = {
  emoji: string;
  colorClass: string;
  label: string;
  name: string;
  sub: string;
  price: string;
};

export const products: Product[] = [
  {
    emoji: "🌸",
    colorClass: "ab-product-img-rose",
    label: "Best Seller",
    name: "Rose Elegance",
    sub: "Premium Red Rose Bouquet",
    price: "150.000",
  },
  {
    emoji: "💜",
    colorClass: "ab-product-img-purple",
    label: "New Arrival",
    name: "Lavender Dream",
    sub: "Purple Mixed Arrangement",
    price: "185.000",
  },
  {
    emoji: "🌻",
    colorClass: "ab-product-img-amber",
    label: "Seasonal Pick",
    name: "Sunrise Bloom",
    sub: "Warm Tones Wildflower Mix",
    price: "165.000",
  },
];

export type Service = {
  num: string;
  title: string;
  desc: string;
};

export const services: Service[] = [
  {
    num: "01",
    title: "Custom Bouquets",
    desc: "Rangkaian bunga yang dibuat khusus sesuai selera dan kebutuhan Anda, dirakit dengan tangan oleh ahli kami.",
  },
  {
    num: "02",
    title: "Same-Day Delivery",
    desc: "Pesan sebelum pukul 12 siang dan bouquet Anda akan tiba di tujuan hari itu juga, selalu dalam kondisi segar.",
  },
  {
    num: "03",
    title: "Event Floristry",
    desc: "Dekorasi bunga premium untuk pernikahan, ulang tahun, dan acara korporat yang tak terlupakan.",
  },
];
