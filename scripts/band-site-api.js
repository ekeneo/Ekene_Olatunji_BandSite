// create class BandSiteApi using constructor
class BandSiteApi {
    constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    // function to call comments
    async getComments() {
      try {
        const commentsResponse = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
        const commentData = commentsResponse.data;
        // sorting the data based on id to make the data descending order
        commentData.sort((a, b) => Number(b.id) - Number(a.id));
        return commentData;
      } catch(error) {
        console.log('getComments error: ', error);
      }
    }
    
    // function to call shows
    async getShows() {
        const showsResponse = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
        const showData = showsResponse.data;
        return showData;
    }
    
    // function to post comments
    async createComment(newCommentData) {
        try {
          const newCommentResponse = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, newCommentData);
          const newCommentResponseData = newCommentResponse.data;
          return newCommentResponseData;
        } catch(error) {
          console.log('createComment error: ', error);
        }
    }

    
}