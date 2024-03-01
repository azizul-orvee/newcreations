const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Mobile Tyre Fitting",
        path: "/mobile-tyre-fitting",
        newTab: false,
      },
      {
        id: 42,
        title: "Mobile Tyre Fitters",
        path: "/mobile-tyre-fitters",
        newTab: false,
      },
      {
        id: 47,
        title: "Emergency Mobile Tyre Fitting",
        path: "/emergency-mobile-tyre-fitting",
        newTab: false,
      },
      {
        id: 49,
        title: "Breakdown Recovery",
        path: "/breakdown-recovery",
        newTab: false,
      },
    ],
  },
];
export default menuData;