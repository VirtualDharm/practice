```javascript
let connectionCards = document.querySelectorAll('button.mn-connection-card__dropdown-trigger'); // Select all the three-dots buttons
let delay = 1000; // Delay in milliseconds (4 seconds between actions)

connectionCards.forEach((dotsButton, index) => {
  setTimeout(() => {
    dotsButton.click(); // Step 1: Click the three-dots button
    
    setTimeout(() => {
      // Step 2: Click the "Remove connection" button in the dropdown
      let removeButton = document.querySelector('div.artdeco-dropdown__item button[aria-label*="Remove"]');
      if (removeButton) {
        removeButton.click();
        
        // Step 3: Confirm removal in the popup
        setTimeout(() => {
          // Select the "Remove" button in the modal based on its aria-label or class
          let confirmButton = document.querySelector('button.artdeco-modal__confirm-dialog-btn.artdeco-button--primary');
          if (confirmButton) {
            confirmButton.click();
          }
        }, 500); // Wait for the popup to appear before clicking "Remove"
      }
    }, 500); // Wait for the dropdown to appear before clicking "Remove connection"
  }, index * delay); // Increment the delay for each action to avoid LinkedIn rate-limiting
});
```