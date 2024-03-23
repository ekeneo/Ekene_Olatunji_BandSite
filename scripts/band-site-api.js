// create class BandSiteApi using constructor
class BandSiteApi {
    constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
}

// create an instance of the api class variable
const apiKey = "35c9c5f2-6e06-48a3-913c-08f4571c2416";
const bandSiteApi = new BandSiteApi(apiKey);

// entry point into the comments section in html
// const commentEntriesContainer = document.querySelector('.comments');

// using anonymous function to call comments
const getComments = async () => {
    try {
        const commentsResponse = await axios.get(`${bandSiteApi.baseUrl}/comments?api_key=${bandSiteApi.apiKey}`);
        const commentData = commentsResponse.data;
        console.log('commentData: ', commentData);

        // Now that we have data from our API, let's use it to populate content
        // commentData.foreach((comment) =>{
        //     const userName = document.createElement('')
        // })



    } catch (error) {
        commentEntriesContainer.innerText = "Sorry, we couldn't fetch your data at the moment";
        // console.error("Error fetching comments:", error);
    }
}
getComments();

// === or using named function ==
// const getComments = async function() {
//     try {
//         const commentsResponse = await axios.get(`${bandSiteApi.baseUrl}/comments?api_key=${bandSiteApi.apiKey}`);
//         console.log(commentsResponse.data); 
//     } catch (error) {
//         console.error("Error fetching comments:", error);
//     }
// }
// getComments();





// ===== SHOWS ======
// entry point into the shows section in html
const showEntriesContainer = document.querySelector('.shows-container');


// using anonymous function to call shows
const getShows = async () => {
    try {
        const showsResponse = await axios.get(`${bandSiteApi.baseUrl}/showdates?api_key=${bandSiteApi.apiKey}`);
        const showData = showsResponse.data
        console.log('showData: ', showData);
        // console.log(showsResponse.data);
    } catch (error) {
        showEntriesContainer.innerText = "Sorry, we couldn't fetch your data at the moment";
        // console.error("Error fetching show`s:", error);
    }
}
getShows();
    