const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = chrome.runtime.getURL("styles.css");
link.onload = () => console.log("CSS injected successfully ;)");
const target = document.head || document.body;
if (target) {
  target.appendChild(link);
} else {
  console.error("Oh noo!");
}
