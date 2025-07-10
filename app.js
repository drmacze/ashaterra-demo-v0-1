function login() {
  const username = document.getElementById("username").value;
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");

  if (username === "developer" || username === "admin") {
    document.getElementById("dev-panel").classList.remove("hidden");
  }
}

function startStory() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("story-mode").classList.remove("hidden");
}

function openSettings() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("settings").classList.remove("hidden");
}

function openDevPanel() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("developer").classList.remove("hidden");
}

function choosePath(path) {
  alert("You chose the path of " + path);
  // Next steps: Load story branches, visual effects, etc.
}

function changeTheme(theme) {
  document.body.style.background = theme === "dark" ? "#0a0a0f" : "#f0f0f0";
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}