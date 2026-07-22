import type { PhotoKind } from "@/components/PhotoPlaceholder";

export const SITE = {
  name: "OPA! Greek Food",
  phone: "(208) 290-1070",
  phoneHref: "tel:+12082901070",
  orderUrl: "https://o.spoton.com/BL-46E5-7B80-0DC1",
  homeBase: "Ponderay, Idaho",
};

export type MenuItem = {
  name: string;
  description: string;
  tag?: string;
  kind: PhotoKind;
  /** Drop a photo in public/menu/ and set e.g. "/menu/traditional-gyro.jpg" */
  image?: string;
};

export type MenuSection = {
  heading: string;
  note?: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    heading: "Pita Wraps",
    note: "Every wrap on warm pita with hummus, lettuce, tomato, cucumber, red onion, kalamata olives, feta & tzatziki.",
    items: [
      {
        name: "Traditional Gyro",
        description: "Seasoned lamb & beef",
        kind: "wrap",
      },
      {
        name: "Chicken Gyro",
        description: "Grilled lemon-garlic chicken",
        kind: "wrap",
      },
      {
        name: "Falafel",
        description: "Crispy fried chickpea",
        tag: "vegetarian",
        kind: "wrap",
      },
    ],
  },
  {
    heading: "Plates & Salads",
    items: [
      {
        name: "Hummus Plate",
        description:
          "Lemon-garlic hummus, carrots, feta, olives, pickled onion, cucumber, tomato & warm pita",
        kind: "plate",
      },
      {
        name: "Greek Salad",
        description:
          "Romaine, tomato, cucumber, red onion, olives, feta & Greek vinaigrette",
        kind: "salad",
      },
    ],
  },
  {
    heading: "Sides & Sweets",
    items: [
      {
        name: "Greek Fries",
        description: "Feta, oregano & lemon",
        tag: "side",
        kind: "fries",
      },
      {
        name: "Baklava",
        description: "Filo, cinnamon, sugar & walnuts",
        tag: "sweet",
        kind: "sweet",
      },
    ],
  },
];

/** The three hero cards. Add photos: drop files in public/hero/ and set image paths. */
export const HERO_PHOTOS: { alt: string; kind: PhotoKind; image?: string }[] = [
  { alt: "A traditional gyro wrapped in warm pita", kind: "wrap" },
  { alt: "The OPA! food truck", kind: "truck" },
  { alt: "A loaded hummus plate", kind: "plate" },
];

/** About-section photo. Drop a file in public/ and set the path. */
export const ABOUT_PHOTO: { alt: string; kind: PhotoKind; image?: string } = {
  alt: "Serving customers from the OPA! truck window",
  kind: "truck",
};
