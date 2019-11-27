var routes = [
  // Index page
  {
    path: "/",
    url: "./index.html",
    name: "index"
  },
  {
    path: "/page3",
    url: "./pages/page3.html"
  },
  {
    path: "/page2",
    pageName: "page2"
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    url: "./pages/404.html"
  }
];
