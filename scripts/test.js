// class BandSiteApi {
//     constructor(apiKey) {
//       this.apiKey = apiKey;
//       this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
//     }

//     async postComment(comment) {
//       try {
//         const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
//         return response.data;
//       } catch (error) {
//         console.error("Error posting comment:", error);
//       }
//     }
  
//     async getComments() {
//       try {
//         const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
//         const comments = response.data;
//         // Sort comments from newest to oldest
//         comments.sort((a, b) => new Date(b.date) - new Date(a.date));
//         return comments;
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     }
  
//     async getShows() {
//       try {
//         const response = await axios.get(`${this.baseUrl}/shows?api_key=${this.apiKey}`, show);
//          return response.data;
//       } catch (error) {
//         console.error("Error fetching shows:", error);
//       }
//     }
//   }
  
//   // Example usage:
//   const apiKey = "35c9c5f2-6e06-48a3-913c-08f4571c2416";
//   const bandSiteApi = new BandSiteApi(apiKey);
  
//   // Example usage of postComment method:
//   const comment = {
//     name: "John Doe",
//     content: "Great performance!",
//     date: new Date().toISOString()
//   };
//   bandSiteApi.postComment(comment);
  
//   // Example usage of getComments method:
//   bandSiteApi.getComments().then(comments => {
//     console.log(comments);
//   });
  
// //   // Example usage of getShows method:
//   bandSiteApi.getShows().then(shows => {
//     console.log(shows);
//   });



// =====try 2===
class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
  
    async postComment(comment) {
      try {
        const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
        return response.data;
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  
    async getComments() {
      try {
        const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
        const comments = response.data;
        // Sort comments from newest to oldest
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        return comments;
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  }
  
  // Instantiate BandSiteApi
  const bandSiteApi = new BandSiteApi('your-api-key');
  
  // Event listener for posting a comment
  document.getElementById('comments-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Get comment data from the form
    const commentData = {
      name: document.getElementById('nameId').value,
      comment: document.getElementById('commentId').value
    };
  
    try {
      // Post the comment using BandSiteApi
      await bandSiteApi.postComment(commentData);
      
      // Optionally, refresh the comment section to display the new comment
      await refreshComments();
    } catch (error) {
      // Handle errors
      console.error('Error posting comment:', error);
    }
  });
  
  // Function to refresh comments
  async function refreshComments() {
    try {
      // Get comments using BandSiteApi
      const comments = await bandSiteApi.getComments();
      
      // Clear existing comments from the UI
      const commentList = document.getElementById('comment-list');
      commentList.innerHTML = '';
      
      // Add each comment to the UI
      comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = `${comment.name}: ${comment.comment}`;
        commentList.appendChild(commentItem);
      });
    } catch (error) {
      // Handle errors
      console.error('Error getting comments:', error);
    }
  }
  
  // Call refreshComments when the page loads to initially populate the comment section
  window.addEventListener('load', refreshComments);
  