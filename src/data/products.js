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
      // img("photo-1544966503-7cc5ac882d5f"),
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
      // img("photo-1610384104075-e05c8b220a97"),
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
      // img("photo-1510598969022-c4c6c5d05ba9"),
      // img("photo-1519415943484-9fa1873496d4"),
    ],
  },
  {
    id: "p13",
    name: "Silk Satin Blouse",
    category: "tops",
    price: 240,
    isNew: false,
    styleCode: "VST-TP-052",
    colors: ["ivory", "black", "champagne"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Cut from lustrous silk satin, this blouse drapes effortlessly across the body with a relaxed collar and softly curved hem.",
    fit: "Relaxed fit. Size down for a more tailored silhouette.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      // img("photo-1596755094514-f87e34085b2c"),
      img("photo-1605763240000-7e93b172d754"),
      // img("photo-1602810318383-e386cc2a3ccf"),
    ],
  },

  {
    id: "p14",
    name: "Double-Breasted Cashmere Coat",
    category: "outerwear",
    price: 620,
    compareAt: 780,
    isNew: true,
    styleCode: "VST-OC-053",
    colors: ["camel", "charcoal", "black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A luxurious cashmere-wool blend coat with a double-breasted front, wide peak lapels, and a generously proportioned silhouette.",
    fit: "Oversized tailored fit. Designed for layering.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1539533018447-63fcce2678e3"),
      img("photo-1548624313-039f5f9f5f5b"),
      img("photo-1591369822096-ffd140ec948f"),
    ],
  },

  {
    id: "p15",
    name: "Italian Wool Trousers",
    category: "bottoms",
    price: 265,
    isNew: false,
    styleCode: "VST-TR-054",
    colors: ["black", "charcoal", "stone"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Tailored from fine Italian wool, these trousers feature a high waist, deep pleats, and a fluid wide-leg silhouette.",
    fit: "High-rise, relaxed wide-leg fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1624378439575-d8705ad7ae80"),
      img("photo-1506629905607-d9c297d3e1e8"),
    ],
  },

  {
    id: "p16",
    name: "Cashmere Polo Knit",
    category: "knitwear",
    price: 295,
    isNew: true,
    styleCode: "VST-KN-055",
    colors: ["ivory", "camel", "black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An exceptionally soft cashmere-blend polo knit with a refined open collar and subtly relaxed proportions.",
    fit: "Relaxed regular fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1611312449412-6cefac5dc3e4"),
      img("photo-1620799140408-edc6dcb6d633"),
      img("photo-1576566588028-4147f3842f27"),
    ],
  },

  {
    id: "p17",
    name: "Leather Chelsea Boot",
    category: "shoes",
    price: 320,
    isNew: false,
    styleCode: "VST-SH-056",
    colors: ["black", "dark-brown"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description:
      "A refined Chelsea boot crafted from smooth leather with an almond toe, elastic side panels, and a low stacked heel.",
    fit: "True to size. Structured leather upper.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1638247025967-b4e38f787b76"),
      img("photo-1608256246200-53e8b6b8f4d9"),
      img("photo-1614252235316-8c857d38b5f4"),
    ],
  },

  {
    id: "p18",
    name: "Leather Frame Shoulder Bag",
    category: "bags",
    price: 380,
    isNew: true,
    styleCode: "VST-BG-057",
    colors: ["black", "espresso", "burgundy"],
    sizes: ["One Size"],
    description:
      "A sculptural leather shoulder bag with a softly curved frame, polished hardware, and a spacious suede-lined interior.",
    fit: "One size. Adjustable shoulder strap.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1584917865442-de89df76afd3"),
      img("photo-1590874103328-eac38a683ce7"),
      img("photo-1566150905458-1bf1fc113f0d"),
    ],
  },

  {
    id: "p19",
    name: "Silk Column Dress",
    category: "dresses",
    price: 420,
    isNew: false,
    styleCode: "VST-DR-058",
    colors: ["black", "ivory", "deep-burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A floor-length silk dress with a clean column silhouette, sculpted neckline, and fluid movement designed for evening occasions.",
    fit: "Slim through the body with a fluid drape.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1566174053879-31528523f8ae"),
      img("photo-1515372039744-b8f02a3ae446"),
      img("photo-1539008835657-9e8e9680c956"),
    ],
  },

  {
    id: "p20",
    name: "Leather Double-Breasted Blazer",
    category: "outerwear",
    price: 495,
    isNew: false,
    styleCode: "VST-OW-059",
    colors: ["black", "dark-brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A statement blazer cut from supple leather with a double-breasted front, sharp shoulders, and softly structured tailoring.",
    fit: "Relaxed tailored fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1551028719-00167b16eac5"),
      img("photo-1591047139829-d91aecb6caea"),
      img("photo-1548126032-079a0fb0099d"),
    ],
  },

  {
    id: "p21",
    name: "Fine Merino Turtleneck",
    category: "knitwear",
    price: 185,
    isNew: false,
    styleCode: "VST-KN-060",
    colors: ["black", "ivory", "camel", "charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A fine merino wool turtleneck with an exceptionally clean neckline and lightweight construction for understated layering.",
    fit: "Close, comfortable fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1608234807905-4466023792f5"),
      // img("photo-1576566588028-4147f3842f27"),
      // img("photo-1620799140408-edc6dcb6d633"),
    ],
  },

  {
    id: "p22",
    name: "Minimal Leather Loafer",
    category: "shoes",
    price: 285,
    isNew: true,
    styleCode: "VST-SH-061",
    colors: ["black", "espresso", "burgundy"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description:
      "A polished leather loafer with a refined almond toe, discreet metal detail, and a softly squared heel.",
    fit: "True to size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1614252235316-8c857d38b5f4"),
      // img("photo-1616401784845-180882ba9ba8"),
      img("photo-1582897085656-c636d006a246"),
    ],
  },

  {
    id: "p23",
    name: "Structured Leather Tote",
    category: "bags",
    price: 450,
    compareAt: 560,
    isNew: false,
    styleCode: "VST-BG-062",
    colors: ["black", "tan", "espresso"],
    sizes: ["One Size"],
    description:
      "A structured full-grain leather tote with rolled handles, a spacious interior, and understated brushed-metal hardware.",
    fit: "One size. Designed for everyday carry.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1553062407-98eeb64c6a62"),
      img("photo-1548036328-c9fa89d128fa"),
      img("photo-1584917865442-de89df76afd3"),
    ],
  },

  {
    id: "p24",
    name: "Silk-Cashmere Cardigan",
    category: "knitwear",
    price: 340,
    isNew: true,
    styleCode: "VST-KN-063",
    colors: ["ivory", "stone", "black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A luxurious silk-cashmere cardigan with tonal buttons, a soft brushed finish, and an elegant relaxed drape.",
    fit: "Relaxed fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1576566588028-4147f3842f27"),
      img("photo-1611312449408-fcece27cdbb7"),
      img("photo-1620799140408-edc6dcb6d633"),
    ],
  },

  {
    id: "p25",
    name: "Sculpted Satin Midi Dress",
    category: "dresses",
    price: 390,
    isNew: false,
    styleCode: "VST-DR-064",
    colors: ["black", "champagne", "clay"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A sculpted satin midi dress with a softly gathered waist and fluid skirt designed to move elegantly with the body.",
    fit: "Fitted through the waist with a fluid midi skirt.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1595777457583-95e059d581b8"),
      img("photo-1566174053879-31528523f8ae"),
      img("photo-1539008835657-9e8e9680c956"),
    ],
  },

  // {
  //   id: "p26",
  //   name: "Italian Suede Chelsea Boot",
  //   category: "shoes",
  //   price: 350,
  //   isNew: false,
  //   styleCode: "VST-SH-065",
  //   colors: ["sand", "espresso", "black"],
  //   sizes: ["38", "39", "40", "41", "42", "43", "44"],
  //   description:
  //     "An elegant Chelsea boot in supple Italian suede, finished with tonal elastic panels and a refined leather sole.",
  //   fit: "True to size.",
  //   delivery:
  //     "Free standard shipping, 3–5 business days. Free returns within 30 days.",
  //   images: [
  //     img("photo-1608256246200-53e8b6b8f4d9"),
  //     img("photo-1614252235316-8c857d38b5f4"),
  //     img("photo-1582897085656-c636d006a246"),
  //   ],
  // },

  {
    id: "p27",
    name: "Croc-Embossed Top Handle Bag",
    category: "bags",
    price: 520,
    isNew: true,
    styleCode: "VST-BG-066",
    colors: ["black", "espresso", "burgundy"],
    sizes: ["One Size"],
    description:
      "A sophisticated top-handle bag with a structured silhouette, croc-embossed leather, and a detachable shoulder strap.",
    fit: "One size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1584917865442-de89df76afd3"),
      img("photo-1590874103328-eac38a683ce7"),
      img("photo-1553062407-98eeb64c6a62"),
    ],
  },

  {
    id: "p28",
    name: "Tailored Velvet Blazer",
    category: "outerwear",
    price: 375,
    isNew: false,
    styleCode: "VST-OW-067",
    colors: ["black", "deep-burgundy", "midnight"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A luxurious velvet blazer featuring satin peak lapels, softly padded shoulders, and precise evening tailoring.",
    fit: "Slim tailored fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      // img("photo-1591369822096-ffd140ec948f"),
      img("photo-1548126032-079a0fb0099d"),
      img("photo-1551488831-00ddcb6c6bd3"),
    ],
  },

  {
    id: "p29",
    name: "Pleated Silk Trousers",
    category: "bottoms",
    price: 290,
    isNew: true,
    styleCode: "VST-TR-068",
    colors: ["black", "ivory", "champagne"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Fluid silk trousers with deep pleats, a high waist, and an elegant wide leg that creates effortless movement.",
    fit: "High-rise relaxed wide-leg fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1624378439575-d8705ad7ae80"),
      img("photo-1506629905607-d9c297d3e1e8"),
    ],
  },

  // {
  //   id: "p30",
  //   name: "Premium Leather Chelsea",
  //   category: "shoes",
  //   price: 410,
  //   isNew: false,
  //   styleCode: "VST-SH-069",
  //   colors: ["black", "dark-brown"],
  //   sizes: ["38", "39", "40", "41", "42", "43", "44"],
  //   description:
  //     "A premium leather Chelsea with a sleek almond toe, hand-finished edges, and a substantial yet refined sole.",
  //   fit: "True to size.",
  //   delivery:
  //     "Free standard shipping, 3–5 business days. Free returns within 30 days.",
  //   images: [
  //     img("photo-1614252235316-8c857d38b5f4"),
  //     img("photo-1608256246200-53e8b6b8f4d9"),
  //     img("photo-1582897085656-c636d006a246"),
  //   ],
  // },

  {
    id: "p31",
    name: "Lambskin Leather Shirt",
    category: "tops",
    price: 460,
    isNew: false,
    styleCode: "VST-TP-070",
    colors: ["black", "espresso"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A supple lambskin leather shirt with a relaxed silhouette, concealed placket, and exceptionally smooth hand feel.",
    fit: "Relaxed fit with room through the body.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1598032895397-b9472444bf93"),
      img("photo-1551028719-00167b16eac5"),
      img("photo-1591047139829-d91aecb6caea"),
    ],
  },

  {
    id: "p32",
    name: "Cashmere Blend Trousers",
    category: "bottoms",
    price: 310,
    isNew: true,
    styleCode: "VST-TR-071",
    colors: ["charcoal", "camel", "black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Luxuriously soft tailored trousers crafted from a cashmere-wool blend with a clean front and elegant relaxed drape.",
    fit: "Relaxed straight-leg fit.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1624378439575-d8705ad7ae80"),
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1506629905607-d9c297d3e1e8"),
    ],
  },

  {
    id: "p33",
    name: "Nappa Leather Mini Bag",
    category: "bags",
    price: 395,
    isNew: false,
    styleCode: "VST-BG-072",
    colors: ["black", "ivory", "burgundy"],
    sizes: ["One Size"],
    description:
      "A compact nappa leather bag with a sculpted curved profile, polished clasp, and detachable chain-and-leather strap.",
    fit: "One size.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1566150905458-1bf1fc113f0d"),
      img("photo-1590874103328-eac38a683ce7"),
      img("photo-1584917865442-de89df76afd3"),
    ],
  },
  {
    id: "p34",
    name: "Minimalist Leather Watch",
    category: "accessories",
    price: 155,
    isNew: true,
    styleCode: "VST-AC-073",
    colors: ["black", "tan", "silver"],
    sizes: ["One Size"],
    description:
      "A minimalist timepiece with a slim leather strap, clean dial, and polished case designed for quiet sophistication.",
    fit: "One size with adjustable leather strap.",
    delivery:
      "Free standard shipping, 3–5 business days. Free returns within 30 days.",
    images: [
      img("photo-1523170335258-f5ed11844a49"),
      img("photo-1524805444758-089113d48a6d"),
      img("photo-1547996160-81dfa63595aa"),
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
