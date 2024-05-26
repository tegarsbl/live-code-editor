// Initialize preview element
const preview = document.getElementById("preview").contentDocument || document.getElementById("preview").contentWindow.document;

// Initialize text area
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");

// Function to update preview
function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;

  const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  preview.open();
  preview.write(content);
  preview.close();
}

// Event listeners for text areas
htmlCode.addEventListener("input", updatePreview);
cssCode.addEventListener("input", updatePreview);
jsCode.addEventListener("input", updatePreview);

// Show HTML text editor by default
cssCode.style.display = "none";
jsCode.style.display = "none";

// Function to change active tab and show corresponding text editor
function changeTab(language) {
  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // Add active class to clicked tab
  document.querySelector(`.tab[data-language="${language}"]`).classList.add("active");

  // Hide all text editors
  document.querySelectorAll(".code").forEach(editor => {
    editor.style.display = "none";
  });

  // Show text editor for the selected language
  document.getElementById(`${language}Code`).style.display = "block";
}

// Show HTML text editor by default
changeTab("html");
