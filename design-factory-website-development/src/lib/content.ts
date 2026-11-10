import type { BiText } from "./i18n";

export const company = {
  phoneDisplay: "+20 10 6005 5554",
  phoneAr: "٠١٠ ٦٠٠٥ ٥٥٥٤",
  tel: "tel:+201060055554",
  whatsapp: "https://wa.me/201060055554",
  whatsappMessage:
    "https://wa.me/201060055554?text=" +
    encodeURIComponent("Hello Design Factory, I'd like to know more about your services."),
  facebook: "https://www.facebook.com/profile.php?id=61593207609007",
  facebookVideos: "https://www.facebook.com/profile.php?id=61593207609007&sk=videos",
  instagram: "https://www.instagram.com/designfactory160/",
  instagramReels: "https://www.instagram.com/designfactory160/reels/",
  catalog: "https://drive.google.com/file/d/16xpdGrjrmUExJ7XKJRgYKtdlBgWrHxEe/view?usp=drive_link",
  map: "https://www.google.com/maps?q=Giza%2C%20Egypt&output=embed",
  video: "https://videos.pexels.com/video-files/20374770/20374770-hd_1920_1080_30fps.mp4",
  videoPoster: "/images/workshop.jpg",
  logo: "/images/design-factory-logo.jpg",
};

export type ProjectCategory =
  | "kitchens"
  | "dressing"
  | "bedrooms"
  | "living"
  | "baths"
  | "outdoor";

export type Project = {
  id: number;
  image: string;
  category: ProjectCategory;
  title: BiText;
  desc: BiText;
  location: BiText;
  scope: BiText;
  year: string;
  tall?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    image: "/images/hero-kitchen.jpg",
    category: "kitchens",
    title: { ar: "مطبخ رخامي بقشرة الجوز", en: "Walnut & marble kitchen" },
    desc: {
      ar: "مطبخ فاخر بقشرة خشب الجوز الطبيعي، جزيرة رخام كالاكاتا، خزائن زجاجية بإطار أسود وإضاءة LED مخفية.",
      en: "A luxury kitchen in natural walnut veneer with a Calacatta marble island, black-framed glass cabinets and concealed LED lighting.",
    },
    location: { ar: "القاهرة الجديدة", en: "New Cairo" },
    scope: { ar: "تصميم وتصنيع وتركيب كامل", en: "Full design, production & fit-out" },
    year: "2025",
    tall: true,
  },
  {
    id: 2,
    image: "/images/kitchen-marble.jpg",
    category: "kitchens",
    title: { ar: "مطبخ L برخام ذهبي", en: "L-shaped golden marble kitchen" },
    desc: {
      ar: "خشب طبيعي دافئ مع رخام أبيض بعروق ذهبية، أجهزة مدمجة وخزائن عرض بإضاءة داخلية.",
      en: "Warm natural wood with gold-veined white marble, integrated appliances and illuminated display cabinets.",
    },
    location: { ar: "الجيزة", en: "Giza" },
    scope: { ar: "مطبخ متكامل + أجهزة", en: "Complete kitchen + appliances" },
    year: "2025",
  },
  {
    id: 3,
    image: "/images/dressing-room.jpg",
    category: "dressing",
    title: { ar: "دريسنج روم بإطار نحاسي", en: "Brass-framed dressing room" },
    desc: {
      ar: "دواليب زجاج مدخّن ببروفيل نحاسي، رفوف مضاءة وأدراج مخفية بتشطيب جوز داكن.",
      en: "Smoked glass wardrobes with brass profiles, lit shelving and concealed drawers in dark walnut.",
    },
    location: { ar: "الشيخ زايد", en: "Sheikh Zayed" },
    scope: { ar: "غرفة ملابس كاملة", en: "Full walk-in closet" },
    year: "2024",
  },
  {
    id: 4,
    image: "/images/bedroom.jpg",
    category: "bedrooms",
    title: { ar: "غرفة نوم بجدار خشبي", en: "Bedroom with a walnut wall" },
    desc: {
      ar: "جدار دواليب كامل بواجهات جوز، عرض زجاجي مضاء، تسريحة مدمجة وسقف بخطوط LED هندسية.",
      en: "A full walnut wardrobe wall with lit glass display, integrated vanity and sculptural LED ceiling lines.",
    },
    location: { ar: "٦ أكتوبر", en: "6th of October" },
    scope: { ar: "أثاث غرفة نوم + إضاءة", en: "Bedroom furniture + lighting" },
    year: "2025",
  },
  {
    id: 5,
    image: "/images/living-tv.jpg",
    category: "living",
    title: { ar: "جدار تلفزيون بقصبان خشبية", en: "Wood-slat TV feature wall" },
    desc: {
      ar: "قصبان خشبية عمودية مع لوح رخامي رمادي وكونسول معلّق من الجوز وإضاءة محيطية دافئة.",
      en: "Vertical wood slats with a grey marble slab, floating walnut console and warm cove lighting.",
    },
    location: { ar: "المعادي", en: "Maadi" },
    scope: { ar: "وحدة حائط + كونسول", en: "Wall unit + console" },
    year: "2025",
    tall: true,
  },
  {
    id: 6,
    image: "/images/bathroom.jpg",
    category: "baths",
    title: { ar: "مغسلة رخامية معلّقة", en: "Floating marble vanity" },
    desc: {
      ar: "رخام كالاكاتا، مغسلة خشبية معلّقة، مرآة LED بإطار نحاسي ونيش إضاءة جانبي.",
      en: "Calacatta marble, floating wooden vanity, brass-framed LED mirror and a lit recessed niche.",
    },
    location: { ar: "القاهرة الجديدة", en: "New Cairo" },
    scope: { ar: "تشطيب حمام + مغسلة", en: "Bathroom fit-out + vanity" },
    year: "2024",
  },
  {
    id: 7,
    image: "/images/balcony.jpg",
    category: "outdoor",
    title: { ar: "بلكونة مغلقة بالزجاج", en: "Glazed sunroom balcony" },
    desc: {
      ar: "شبابيك ألوميتال أبيض بزجاج شبكي، سقف بألواح خشب الجوز وإطلالة مفتوحة على الحدائق.",
      en: "White aluminium grid glazing, walnut plank ceiling and an open garden view.",
    },
    location: { ar: "الجيزة", en: "Giza" },
    scope: { ar: "ألوميتال وزجاج + سقف خشبي", en: "Aluminium glazing + wood ceiling" },
    year: "2024",
  },
  {
    id: 8,
    image: "/images/exterior.jpg",
    category: "outdoor",
    title: { ar: "شترات لواجهة فيلا", en: "Villa facade shutters" },
    desc: {
      ar: "شترات رول رمادية، واجهات كريمية، إنارة خارجية وتنسيق مساحات خارجية.",
      en: "Grey rolling shutters, cream facades, exterior lighting and coordinated outdoor spaces.",
    },
    location: { ar: "الساحل / الجيزة", en: "Giza" },
    scope: { ar: "شتر وأعمال واجهات", en: "Shutters & facade works" },
    year: "2025",
  },
  {
    id: 9,
    image: "/images/showroom.jpg",
    category: "kitchens",
    title: { ar: "معرض ديزاين فاكتوري", en: "The Design Factory showroom" },
    desc: {
      ar: "عرض حي لأحدث تشطيبات المطابخ والخامات والوحدات الجاهزة داخل المعرض.",
      en: "A live display of our latest kitchen finishes, materials and ready-made pieces.",
    },
    location: { ar: "الجيزة، مصر", en: "Giza, Egypt" },
    scope: { ar: "معرض وقطع جاهزة", en: "Showroom & ready pieces" },
    year: "2025",
  },
];

export const projectCategories: { key: ProjectCategory | "all"; dictKey: "filterAll" | "catKitchens" | "catDressing" | "catBedrooms" | "catLiving" | "catBaths" | "catOutdoor" }[] = [
  { key: "all", dictKey: "filterAll" },
  { key: "kitchens", dictKey: "catKitchens" },
  { key: "dressing", dictKey: "catDressing" },
  { key: "bedrooms", dictKey: "catBedrooms" },
  { key: "living", dictKey: "catLiving" },
  { key: "baths", dictKey: "catBaths" },
  { key: "outdoor", dictKey: "catOutdoor" },
];

export type Service = {
  id: number;
  icon: "chef" | "shirt" | "bed" | "tv" | "bath" | "grid";
  title: BiText;
  desc: BiText;
};

export const services: Service[] = [
  {
    id: 1,
    icon: "chef",
    title: { ar: "مطابخ مخصصة", en: "Custom kitchens" },
    desc: { ar: "تصميم وتصنيع مطابخ خشبية وأكريليك ورخام بمقاساتك بالضبط، مع أفضل الحلول للتخزين والإضاءة.", en: "Wood, acrylic and marble kitchens built to your exact measurements with smart storage and lighting." },
  },
  {
    id: 2,
    icon: "shirt",
    title: { ar: "دريسنج روم ودواليب", en: "Dressing rooms & wardrobes" },
    desc: { ar: "دواليب وغرف ملابس بأبواب زجاجية، بروفيلات نحاسية ورفوف مضاءة وتقسيم داخلي مدروس.", en: "Wardrobes with glass doors, brass profiles, lit shelves and carefully planned interiors." },
  },
  {
    id: 3,
    icon: "bed",
    title: { ar: "غرف نوم وأثاث", en: "Bedrooms & furniture" },
    desc: { ar: "أسرّة، تسريحات، مكتبات وأثاث مخصص بنفس لغة التصميم لكل الغرفة.", en: "Beds, vanities, shelving and bespoke furniture sharing one design language." },
  },
  {
    id: 4,
    icon: "tv",
    title: { ar: "وحدات حائط ومعيشة", en: "Wall units & living rooms" },
    desc: { ar: "قصبان خشبية، ألواح رخامية، كونسولات معلّقة وإضاءة مخفية لجدار تلفزيون متكامل.", en: "Wood slats, marble panels, floating consoles and hidden lighting for a complete feature wall." },
  },
  {
    id: 5,
    icon: "bath",
    title: { ar: "حمامات ومغاسل", en: "Bathrooms & vanities" },
    desc: { ar: "مغاسل معلّقة، مرايا LED، كبائن زجاج وتشطيبات رخام مقاومة للرطوبة.", en: "Floating vanities, LED mirrors, glass enclosures and moisture-resistant marble finishes." },
  },
  {
    id: 6,
    icon: "grid",
    title: { ar: "شترات وألوميتال وزجاج", en: "Shutters, aluminium & glass" },
    desc: { ar: "شتر رول، شبابيك ألوميتال، بلكونات مغلقة وحلول زجاج للواجهات والمساحات الخارجية.", en: "Rolling shutters, aluminium windows, glazed balconies and glass solutions for facades." },
  },
];

export const trustItems = [
  { icon: "factory" as const, k: "trust1" as const, dk: "trust1d" as const },
  { icon: "layers" as const, k: "trust2" as const, dk: "trust2d" as const },
  { icon: "ruler" as const, k: "trust3" as const, dk: "trust3d" as const },
  { icon: "shield" as const, k: "trust4" as const, dk: "trust4d" as const },
];

export const processSteps = [
  { icon: "ruler" as const, k: "step1" as const, dk: "step1d" as const, n: "01" },
  { icon: "pen" as const, k: "step2" as const, dk: "step2d" as const, n: "02" },
  { icon: "factory" as const, k: "step3" as const, dk: "step3d" as const, n: "03" },
  { icon: "shield" as const, k: "step4" as const, dk: "step4d" as const, n: "04" },
];

export const careItems = [
  { icon: "shield" as const, k: "care1" as const, dk: "care1d" as const },
  { icon: "wrench" as const, k: "care2" as const, dk: "care2d" as const },
  { icon: "package" as const, k: "care3" as const, dk: "care3d" as const },
  { icon: "headphones" as const, k: "care4" as const, dk: "care4d" as const },
];

export const bookServices = [
  { value: "kitchen", ar: "مطبخ مخصص", en: "Custom kitchen" },
  { value: "dressing", ar: "دريسنج روم / دواليب", en: "Dressing room / wardrobe" },
  { value: "bedroom", ar: "غرفة نوم / أثاث", en: "Bedroom / furniture" },
  { value: "living", ar: "وحدة حائط / معيشة", en: "Wall unit / living room" },
  { value: "bathroom", ar: "حمام / مغسلة", en: "Bathroom / vanity" },
  { value: "shutters", ar: "شترات / ألوميتال / زجاج", en: "Shutters / aluminium / glass" },
  { value: "full", ar: "تشطيب مشروع كامل", en: "Full interior project" },
  { value: "shop", ar: "قطعة من المتجر", en: "Ready-made piece" },
];

export const issueTypes = [
  { value: "maintenance", k: "issueMaintenance" as const },
  { value: "repair", k: "issueRepair" as const },
  { value: "spare", k: "issueSpare" as const },
  { value: "warranty", k: "issueWarranty" as const },
  { value: "other", k: "issueOther" as const },
];

export type ProductSeed = {
  slug: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  category: ProjectCategory;
  price: number;
  image: string;
  badgeAr: string | null;
  badgeEn: string | null;
  stock: number;
  active: boolean;
};

export const productSeeds: ProductSeed[] = [
  {
    slug: "calacatta-kitchen-island",
    nameAr: "جزيرة مطبخ كالاكاتا",
    nameEn: "Calacatta Kitchen Island",
    descAr: "جزيرة جاهزة بقشرة جوز طبيعي وسطح رخام كالاكاتا مع حوض ستانلس ستيل.",
    descEn: "Ready-made island in natural walnut veneer with a Calacatta marble top and stainless sink.",
    category: "kitchens",
    price: 38500,
    image: "/images/hero-kitchen.jpg",
    badgeAr: "الأكثر طلبًا",
    badgeEn: "Bestseller",
    stock: 4,
    active: true,
  },
  {
    slug: "walnut-kitchen-set",
    nameAr: "وحدة مطبخ جوز بإضاءة",
    nameEn: "Walnut Kitchen Unit with LED",
    descAr: "وحدة مطبخ L جاهزة بخزائن زجاجية بإطار أسود وإضاءة LED مدمجة.",
    descEn: "Ready L-shaped kitchen unit with black-framed glass cabinets and integrated LED lighting.",
    category: "kitchens",
    price: 27900,
    image: "/images/kitchen-marble.jpg",
    badgeAr: "تسليم فوري",
    badgeEn: "Fast delivery",
    stock: 6,
    active: true,
  },
  {
    slug: "brass-glass-wardrobe",
    nameAr: "دولاب زجاجي بنحاس",
    nameEn: "Brass Glass Wardrobe",
    descAr: "دولاب بأبواب زجاج مدخّن وبروفيل نحاسي ورفوف مضاءة، جاهز للتركيب.",
    descEn: "Smoked glass doors, brass profiles and illuminated shelving, ready to install.",
    category: "dressing",
    price: 24500,
    image: "/images/dressing-room.jpg",
    badgeAr: "كمية محدودة",
    badgeEn: "Limited stock",
    stock: 3,
    active: true,
  },
  {
    slug: "walnut-bedroom-wall",
    nameAr: "جدار غرفة نوم جوز",
    nameEn: "Walnut Bedroom Wall",
    descAr: "وحدة دواليب كاملة مع نيش عرض زجاجي مضاء وتسريحة مدمجة.",
    descEn: "Full wardrobe wall with a lit glass display niche and integrated vanity.",
    category: "bedrooms",
    price: 32900,
    image: "/images/bedroom.jpg",
    badgeAr: null,
    badgeEn: null,
    stock: 2,
    active: true,
  },
  {
    slug: "slat-tv-console",
    nameAr: "وحدة تلفزيون بقصبان خشبية",
    nameEn: "Wood-Slat TV Console",
    descAr: "كونسول جوز معلّق مع قصبان خشبية ولوح رخامي رمادي وإضاءة مخفية.",
    descEn: "Floating walnut console with wood slats, a grey marble panel and concealed lighting.",
    category: "living",
    price: 18900,
    image: "/images/living-tv.jpg",
    badgeAr: "جديد",
    badgeEn: "New",
    stock: 7,
    active: true,
  },
  {
    slug: "marble-vanity",
    nameAr: "مغسلة رخام معلّقة",
    nameEn: "Floating Marble Vanity",
    descAr: "مغسلة معلّقة بخشب الجوز، سطح رخامي ومرآة LED بإطار نحاسي.",
    descEn: "Floating walnut vanity with a marble top and a brass-framed LED mirror.",
    category: "baths",
    price: 12750,
    image: "/images/bathroom.jpg",
    badgeAr: "تسليم فوري",
    badgeEn: "Fast delivery",
    stock: 8,
    active: true,
  },
  {
    slug: "aluminium-glass-corner",
    nameAr: "ركن بلكونة زجاجي",
    nameEn: "Glazed Balcony Corner",
    descAr: "نظام ألوميتال وزجاج مع سقف ألواح خشبية للبلكونات والغرف المشمسة.",
    descEn: "Aluminium and glass system with a wood-plank ceiling for balconies and sunrooms.",
    category: "outdoor",
    price: 16400,
    image: "/images/balcony.jpg",
    badgeAr: null,
    badgeEn: null,
    stock: 5,
    active: true,
  },
  {
    slug: "roller-shutter",
    nameAr: "شتر رول ألوميتال",
    nameEn: "Aluminium Roller Shutter",
    descAr: "شتر رول مقاس قياسي بتشطيب مقاوم للعوامل الجوية وتركيب احترافي.",
    descEn: "Standard-size roller shutter with weather-resistant finish and professional fitting.",
    category: "outdoor",
    price: 6900,
    image: "/images/exterior.jpg",
    badgeAr: null,
    badgeEn: null,
    stock: 12,
    active: true,
  },
  {
    slug: "showroom-display-unit",
    nameAr: "وحدة عرض المعرض",
    nameEn: "Showroom Display Unit",
    descAr: "وحدة عرض كاملة من المعرض بتشطيبات فاخرة، قطعة واحدة متاحة.",
    descEn: "A complete premium-finish display unit from our showroom — one piece available.",
    category: "kitchens",
    price: 21900,
    image: "/images/showroom.jpg",
    badgeAr: "قطعة واحدة",
    badgeEn: "One only",
    stock: 1,
    active: true,
  },
];
