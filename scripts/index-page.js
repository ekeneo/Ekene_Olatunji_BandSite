document.addEventListener('DOMContentLoaded', function() {
  const addCommentButton = document.getElementById('add-comment-btn');
  const commentsList = document.getElementById('comments-list');

  // Default comments
  const defaultComments = [
    { name: 'Isaac Tedesse', comment: 'This is the first comment.I cant stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough.' },
    { name: 'Christina Cabrera', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
    { name: 'Victor Pinto', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' }
  ];

  // Function to display comments
  function displayComments(comments) {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <span>${comment.name}</span>
        <p>${comment.comment}</p>
      `;
      commentsList.prepend(commentElement); // Newest comments at the top
    });
  }

  // Display default comments when page loads
  displayComments(defaultComments);

  // Event listener for Add Comment button
  addCommentButton.addEventListener('click', function() {
    const name = prompt('Enter your name:');
    const comment = prompt('Enter your comment:');
    if (name && comment) {
      const newComment = { name, comment };
      defaultComments.unshift(newComment); // Add new comment at the beginning
      displayComments(defaultComments);
    } else {
      alert('Please enter both your name and comment.');
    }
  });
});
