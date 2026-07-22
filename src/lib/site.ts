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
      { name: "Traditional Gyro", description: "Seasoned lamb & beef" },
      { name: "Chicken Gyro", description: "Grilled lemon-garlic chicken" },
      {
        name: "Falafel",
        description: "Crispy fried chickpea",
        tag: "vegetarian",
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
      },
      {
        name: "Greek Salad",
        description:
          "Romaine, tomato, cucumber, red onion, olives, feta & Greek vinaigrette",
      },
    ],
  },
  {
    heading: "Sides & Sweets",
    items: [
      { name: "Greek Fries", description: "Feta, oregano & lemon", tag: "side" },
      {
        name: "Baklava",
        description: "Filo, cinnamon, sugar & walnuts",
        tag: "sweet",
      },
    ],
  },
];
