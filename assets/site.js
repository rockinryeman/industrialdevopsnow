/* Shared header + footer for every page — single source of truth.
   To add/rename/reorder nav items, edit NAV below once; all pages update. */
(function () {
  var NAV = [
    { href: "index.html",         label: "Home" },
    { href: "community.html",     label: "Community" },
    { href: "new-ideas.html",     label: "New Ideas" },
    { href: "about.html",         label: "About" },
    { href: "workshops.html",     label: "Workshops" },
    { href: "presentations.html", label: "Presentations" },
    { href: "publications.html",  label: "Publications" },
    { href: "contact.html",       label: "Contact" }
  ];

  // current page filename (default to index.html)
  var path = location.pathname.split("/").pop() || "index.html";
  if (path === "") path = "index.html";
  // the AI workshop detail page lives under the Workshops tab
  if (path === "workshop.html") path = "workshops.html";

  var links = NAV.map(function (n) {
    var active = (n.href === path) ? ' class="active"' : "";
    return '<a href="' + n.href + '"' + active + ">" + n.label + "</a>";
  }).join("");

  var header =
    '<header class="nav">' +
      '<div class="wrap">' +
        '<button class="menu-btn" aria-label="Menu" ' +
          "onclick=\"document.getElementById('m').classList.toggle('open')\">&#9776;</button>" +
        '<nav id="m">' + links + "</nav>" +
      "</div>" +
    "</header>";

  var footer =
    "<footer><div class=\"wrap\">" +
      '<div class="foot-brand">Industrial<b>DevOps</b>Now™</div>' +
      "<div>© Industrial DevOps Now · Building better systems faster</div>" +
    "</div></footer>";

  function mount() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
