// On page load, set the theme based on system preference or user preference
if (typeof window !== "undefined") {
  const userPreference = localStorage.getItem("theme");
  if (userPreference) {
    document.documentElement.classList.toggle("dark", userPreference === "dark");
  } else {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", systemPreference);
  }
}

// Function to toggle the theme
function toggleTheme() {
  if (typeof window !== "undefined") {
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
}

// Function to get the current theme
export function getCurrentTheme() {
  if (typeof window !== "undefined") {
    const userPreference = localStorage.getItem("theme");
    if (userPreference) {
      return userPreference;
    }
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPreference ? "dark" : "light";
  }
  return "light"; // Default to light if window is undefined
}

export default toggleTheme;