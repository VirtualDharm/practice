```javascript 
let followButtons = document.querySelectorAll('.entity-result__actions button.artdeco-button--2'); // Selecting the "Following" buttons
let delay = 3000; // 3-second delay to prevent rapid actions

followButtons.forEach((button, index) => {
  setTimeout(() => {
    button.click(); // Click the "Following" button
    
    // Add another timeout to simulate waiting for the "Unfollow" confirmation to appear
    setTimeout(() => {
      let unfollowButton = document.querySelector('.artdeco-button--primary'); // Assuming this is the "Unfollow" confirmation button
      if (unfollowButton) {
        unfollowButton.click(); // Click the "Unfollow" button
      }
    }, 1000); // Adjust this time if necessary for the confirmation to appear
  }, index * delay);
});
```