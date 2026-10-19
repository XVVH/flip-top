// Runs inline in <head>, before anything is drawn, and picks the theme.
// The order is documented in docs/ARCHITECTURE.md ("In the browser"):
//   ?pack=<id>  >  this visit's theme  >  a random front-door theme
// It's allowed by its hash in the content security policy, which Hugo
// computes at build time, so it can change freely.
(function () {
  var root = document.documentElement;
  root.setAttribute("data-js", "");

  var manifest;
  try {
    manifest = JSON.parse(document.getElementById("ft-manifest").textContent);
  } catch (e) {
    return;
  }

  var ids = [];
  var frontDoor = [];
  manifest.themes.forEach(function (t) {
    ids.push(t.id);
    if (t.front_door && t.id !== "plain") frontDoor.push(t.id);
  });
  var valid = function (id) {
    return ids.indexOf(id) > -1;
  };
  var pick = function (list) {
    return list[Math.floor(Math.random() * list.length)];
  };
  var storage = function (name) {
    try {
      var s = window[name];
      s.setItem("ft:probe", "1");
      s.removeItem("ft:probe");
      return s;
    } catch (e) {
      return null;
    }
  };
  var session = storage("sessionStorage");

  var param = null;
  try {
    param = new URLSearchParams(location.search).get("pack");
  } catch (e) {}

  var theme;
  if (param && valid(param) && param !== "plain") {
    theme = param;
    if (session) session.setItem("ft:theme", theme);
  } else if (session && valid(session.getItem("ft:theme")) && session.getItem("ft:theme") !== "plain") {
    theme = session.getItem("ft:theme");
  } else {
    theme = frontDoor.length ? pick(frontDoor) : "plain";
    if (session) session.setItem("ft:theme", theme);
  }

  // A post's front matter can turn the themes off (themes: false) or limit
  // them (themes: [ids]). That changes this page only, not the visit's theme.
  var allow = root.getAttribute("data-themes");
  if (allow === "off") {
    theme = "plain";
  } else if (allow && theme !== "plain") {
    var allowed = allow.split(" ").filter(valid);
    if (allowed.indexOf(theme) < 0) theme = allowed.length ? pick(allowed) : "plain";
  }

  root.setAttribute("data-theme", theme);
})();
