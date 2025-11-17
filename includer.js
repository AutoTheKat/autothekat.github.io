/**
     * Loads HTML from another file and inserts it into a target element.
     * @param {string} url - Path to the HTML file.
     * @param {string} targetId - ID of the element where HTML will be inserted.
     */
    async function loadHTML(url, targetId) {
      try {
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text();

        // Insert HTML into the target element
        const target = document.getElementById(targetId);
        if (!target) {
          throw new Error(`Element with ID "${targetId}" not found.`);
        }

        target.innerHTML = html; // Replace content
        // Or: target.insertAdjacentHTML('beforeend', html); // Append instead
      } catch (error) {
        console.error("Error loading HTML:", error);
      }
    }

    // Example usage: load "snippet.html" into the #content div
    loadHTML("head.html", "--NAVVER--");
