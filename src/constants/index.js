import {
  Audiophile,
  Databiz,
  Maker,
  Meet,
  Calendar,
  Planning,
  Reminder,
  Todo,
} from "../assets";

export const navLinks = [
  {
    id: "features",
    title: "Features",
    featuresLinks: [
      {
        name: "Todo List",
        icon: Todo,
      },
      {
        name: "Calendar",
        icon: Calendar,
      },
      {
        name: "Reminder",
        icon: Reminder,
      },
      {
        name: "Planning",
        icon: Planning,
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    CompanyLinks: [
      {
        id: 1,
        name: "History",
      },
      {
        id: 2,
        name: "Our Team",
      },
      {
        id: 3,
        name: "Blog",
      },
    ],
  },
  {
    id: "careers",
    title: "Careers",
  },
  {
    id: "about",
    title: "About",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: Databiz,
  },
  {
    id: "client-2",
    logo: Audiophile,
  },
  {
    id: "client-3",
    logo: Meet,
  },
  {
    id: "client-4",
    logo: Maker,
  },
];
