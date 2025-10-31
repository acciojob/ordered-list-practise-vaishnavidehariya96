// Wait until the page fully loads
window.onload = function() {
  console.log("✅ Ordered List on Code Optimization loaded successfully!");

  // Get all list items
  const listItems = document.querySelectorAll("ol li");

  // Log each list item text to the console
  listItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item.textContent}`);
  });
};