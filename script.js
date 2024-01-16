function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

// Redirect to HTTPS
var host = "links.thiagocostaaltoe.com.br";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
