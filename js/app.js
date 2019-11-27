// Dom7
var $$ = Dom7;

// Theme
var theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}

// Init App
var app = new Framework7({
  id: "io.framework7.testapp",
  root: "#app",
  theme: theme,
  view: { stackPages: true, pushState: true },
  data: function() {},
  methods: {},
  routes: routes
});

var view = app.views.create(".view-main");
