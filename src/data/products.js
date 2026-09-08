// Sample catalog for VESTAIRE — premium streetwear/fashion MVP
// Images sourced from Unsplash (free-to-use) via direct source URLs.

export const categories = [
  { id: "outerwear", label: "Outerwear" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "knitwear", label: "Knitwear" },
  { id: "accessories", label: "Accessories" },
];

export const colors = [
  { id: "black", label: "Black", hex: "#15150f" },
  { id: "ivory", label: "Ivory", hex: "#f5f2eb" },
  { id: "olive", label: "Olive", hex: "#5b5a3f" },
  { id: "clay", label: "Clay", hex: "#9c5a34" },
  { id: "stone", label: "Stone", hex: "#a8a296" },
];

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products = [
  {
    id: "p01",
    name: "Oversized Wool Overcoat",
    category: "outerwear",
    price: 480,
    compareAt: 620,
    isNew: true,
    styleCode: "VST-OC-014",
    colors: ["black", "stone"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Cut from a heavyweight Italian wool blend, this overcoat carries an oversized silhouette built for layering. Dropped shoulders and a below-the-knee length give it structure without stiffness.",
    fit: "Oversized fit. Model is 6'1\" wearing size M. True to size — size down for a closer silhouette.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1539533018447-63fcce2678e3"),
      img("photo-1608063615781-e2ef8c73d114"),
      img("photo-1544923246-77307dd654cb"),
    ],
  },
  {
    id: "p02",
    name: "Boxy Cotton Tee",
    category: "tops",
    price: 68,
    isNew: true,
    styleCode: "VST-TE-002",
    colors: ["black", "ivory", "olive"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "A heavyweight 240gsm cotton tee with a boxy, dropped-shoulder cut. Garment-dyed for a soft hand-feel and subtle tonal variation on every piece.",
    fit: "Boxy, relaxed fit. Model is 6'0\" wearing size M.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1521572163474-6864f9cf17ab"),
      img("photo-1503341504253-dff4815485f1"),
      img("photo-1576566588028-4147f3842f27"),
    ],
  },
  {
    id: "p03",
    name: "Pleated Wide-Leg Trouser",
    category: "bottoms",
    price: 210,
    isNew: false,
    styleCode: "VST-TR-009",
    colors: ["black", "stone", "clay"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Wide-leg trousers finished with a double pleat and a clean tapered hem. Mid-rise with a fluid drape that moves with the body.",
    fit: "Relaxed, wide-leg fit. True to size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1473966968600-fa801b869a1a"),
      img("photo-1509551388413-e18d0ac5d495"),
    ],
  },
  {
    id: "p04",
    name: "Merino Crewneck Sweater",
    category: "knitwear",
    price: 165,
    isNew: false,
    styleCode: "VST-KN-021",
    colors: ["ivory", "olive", "black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Fine-gauge merino wool knit with a ribbed crew collar. Lightweight enough to layer, warm enough to wear alone.",
    fit: "Regular fit. True to size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1614975059251-992f11792b9f"),
      img("photo-1516826957135-700dedea698c"),
      img("photo-1638020747764-b0be5f4b8e28"),
    ],
  },
  {
    id: "p05",
    name: "Technical Shell Jacket",
    category: "outerwear",
    price: 340,
    isNew: true,
    styleCode: "VST-OC-031",
    colors: ["black", "olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A water-resistant technical shell with taped seams and a packable hood. Utilitarian detailing meets a clean, minimal shape.",
    fit: "Regular fit, room to layer underneath.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1551028719-00167b16eac5"),
      img("photo-1544966503-7cc5ac882d5f"),
      img("photo-1516257984-b1b4d707412e"),
    ],
  },
  {
    id: "p06",
    name: "Relaxed Denim Jean",
    category: "bottoms",
    price: 190,
    isNew: false,
    styleCode: "VST-DN-005",
    colors: ["black", "stone"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Rigid selvedge denim in a relaxed straight cut. Garment-washed for a broken-in feel from the first wear.",
    fit: "Relaxed straight fit. True to size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1541099649105-f69ad21f3246"),
      img("photo-1542272604-787c3835535d"),
      img("photo-1475178626620-a4d074967452"),
    ],
  },
  {
    id: "p07",
    name: "Ribbed Half-Zip Knit",
    category: "knitwear",
    price: 145,
    isNew: true,
    styleCode: "VST-KN-018",
    colors: ["clay", "black", "ivory"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A ribbed knit half-zip with a stand collar. Compact yarn construction gives it structure while staying breathable.",
    fit: "Slim-regular fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1620799140408-edc6dcb6d633"),
      img("photo-1610384104075-e05c8b220a97"),
      img("photo-1611312449408-fcece27cdbb7"),
    ],
  },
  {
    id: "p08",
    name: "Structured Canvas Tote",
    category: "accessories",
    price: 95,
    isNew: false,
    styleCode: "VST-AC-044",
    colors: ["black", "stone", "clay"],
    sizes: ["One Size"],
    description:
      "Heavyweight waxed canvas tote with leather handles and an internal zip pocket. Built to hold its shape and take a beating.",
    fit: 'One size. 15"H x 16"W x 6"D.',
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1591561954557-26941169b49e"),
      img("photo-1553062407-98eeb64c6a62"),
      img("photo-1547949003-9792a18a2645"),
    ],
  },
  {
    id: "p09",
    name: "Cropped Bomber Jacket",
    category: "outerwear",
    price: 295,
    isNew: false,
    styleCode: "VST-OC-027",
    colors: ["black", "olive"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A cropped bomber in a matte nylon shell with a quilted lining. Ribbed collar, cuffs, and hem hold the shape close.",
    fit: "Cropped, regular fit through the body.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1727515546577-f7d82a47b51d"),
      img("photo-1520975954732-35dd22299614"),
      img("photo-1591047139829-d91aecb6caea"),
    ],
  },
  {
    id: "p10",
    name: "Silk-Blend Shirt",
    category: "tops",
    price: 175,
    isNew: true,
    styleCode: "VST-TE-033",
    colors: ["ivory", "clay", "black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A fluid silk-cotton blend shirt with a camp collar. Subtle sheen and a relaxed drape make it equally at home buttoned up or open over a tee.",
    fit: "Relaxed fit. Size down for a slimmer look.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1596755094514-f87e34085b2c"),
      img("photo-1598032895397-b9472444bf93"),
      img("photo-1602810318383-e386cc2a3ccf"),
    ],
  },
  {
    id: "p11",
    name: "Cargo Utility Pant",
    category: "bottoms",
    price: 225,
    isNew: true,
    styleCode: "VST-TR-016",
    colors: ["black", "olive", "stone"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Six-pocket cargo trouser in a brushed cotton twill. Articulated knees and a tapered leg keep it sharp despite the utility details.",
    fit: "Tapered fit through the leg, roomy through the thigh.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1517438476312-10d79c077509"),
      img("photo-1584865288642-42078afe6942"),
      img("photo-1552902865-b72c031ac5ea"),
    ],
  },
  {
    id: "p12",
    name: "Waffle-Knit Beanie",
    category: "accessories",
    price: 55,
    isNew: false,
    styleCode: "VST-AC-051",
    colors: ["black", "ivory", "clay"],
    sizes: ["One Size"],
    description:
      "A close-fit beanie in a waffle-knit wool blend, finished with a tonal woven label.",
    fit: "One size, stretch fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1576871337622-98d48d1cf531"),
      img("photo-1510598969022-c4c6c5d05ba9"),
      img("photo-1519415943484-9fa1873496d4"),
    ],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (product, count = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(
      products.filter(
        (p) => p.id !== product.id && p.category !== product.category,
      ),
    )
    .slice(0, count);
