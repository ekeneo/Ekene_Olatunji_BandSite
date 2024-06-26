// ===Sprint 3 begin ===
const commentEntriesContainer = document.querySelector('.comments');
const formEl = document.querySelector('.comments-form');
const apiKey = "35c9c5f2-6e06-48a3-913c-08f4571c2416";
const bandSiteApi = new BandSiteApi(apiKey);

// Function to format timestamp to date in the format mm/dd/yyyy
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// function for comment entries
function renderCommentEntries(comment) {
  // article tag <article class="comments-list">
  const commentArticleEl = document.createElement("div");
  commentArticleEl.classList.add('comments-list');
  commentEntriesContainer.appendChild(commentArticleEl);

  // Icon <div class="comments-list__icon">
  const commentIconEl = document.createElement("div");
  commentIconEl.classList.add('comments-list__icon');
  commentArticleEl.appendChild(commentIconEl);

  // Group <div class="comments-list__group">
  const commentGroupEl = document.createElement("div");
  commentGroupEl.classList.add('comments-list__group');
  commentArticleEl.appendChild(commentGroupEl);

  // Group 2 <div class="comments-list__group2">
  const commentGroup2El = document.createElement("div");
  commentGroup2El.classList.add('comments-list__group2');
  commentGroupEl.appendChild(commentGroup2El);
    
  // create name <p class="comments-list__name">Victor Pinto</p>
  const commentNameEl = document.createElement('p');
  commentNameEl.classList.add('comments-list__name');
  commentNameEl.innerText = comment.name;
  commentGroup2El.appendChild(commentNameEl);

  // create date <date class="comments-list__date">11/02/2023</date>
  const commentDateEl = document.createElement('date');
  commentDateEl.classList.add('comments-list__date');
  commentDateEl.innerText = formatDate(comment.timestamp);
  commentGroup2El.appendChild(commentDateEl);

  // create comment <p class="comments-list__comment">
  const commentTextEl = document.createElement('p');
  commentTextEl.classList.add('comments-list__comment');
  commentTextEl.innerText = comment.comment;
  commentGroupEl.appendChild(commentTextEl);

  // console.log("commentGroupEl: ", commentGroupEl);
}

const getComments = async () => {
  try {
    commentEntriesContainer.innerText = '...loading comments ...';

    const commentData = await bandSiteApi.getComments();
    // To avoid repeating array after every render/append, remove all child elements from an element
    commentEntriesContainer.innerHTML = '';
        
    // Now that we have data from our API, let's use it to populate content
    commentData.forEach((comment) => {
      // render the elements for each comment object
      renderCommentEntries(comment);
    });
  } catch(error) {
    commentEntriesContainer.innerText = "Sorry, we couldn't fetch your data at the moment";
  }
}

// Comment Form
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameVal = event.target.nameId.value;
  const commentVal = event.target.commentId.value;

  const newEntry = {
    name: nameVal,
    comment: commentVal,
    // timestamp: timestamp
  };


  try {
    // sending the user entered comment data to a createComment method
    const newCommentData = await bandSiteApi.createComment(newEntry);
    console.log('New comment success: ', newCommentData);

    // re-fetch our albums and re-render the album elements after successful album creation
    getComments();
  } catch(error) {
    formEl.innerText = "Sorry, we couldn't create a new comment";
  }

  // Clear all form fields from the form after submitting
  event.target.reset();

});

getComments();


// ===Sprint 3 end (Please note, I commented out Sprint 2 section for my self study)  ===


// ==== Sprint 2 begin ===
// // list of default comment entries
// // array of (comment) objects: name, comment, date
// const commentEntries = [
//   { name: 'Victor Pinto', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' , date: '03/13/2024'},
//   { name: 'Christina Cabrera', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' , date: '03/13/2024'},
//   { name: 'Isaac Tedesse', comment: 'This is the first comment.I cant stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough.' , date: '03/13/2024'}
// ];
// console.log('commentEntries: ', commentEntries);

// // ===html code for reference===
// /* <section class="comments">
//   <article class="comments-list" id="comments-list-id">
//     <div class="comments-list__icon"></div>
//     <div class="comments-list__group">
//       <div class="comments-list__group2">
//         <p class="comments-list__name">Victor Pinto</p>
//         <date class="comments-list__date">11/02/2023</date>
//       </div>
//       <p class="comments-list__comment">
//         This is art. This is inexplicable magic expressed in the purest way,
//         everything that makes up this majestic work deserves reverence. Let
//         us appreciate this for what it is and what it contains.
//       </p>
//     </div>
//   </article>
// </section>   */


// // selecting the <section> tag which is a container for the comment section
// const commentEntriesContainer = document.querySelector('.comments');
// // console.log('commentEntriesContainer: ', commentEntriesContainer);

// // making the for each a function to recall 
// function renderCommentEntries() {
//  // To avoid repeating array after every render/append, remove all child elements from an element
//   commentEntriesContainer.innerHTML = '';

//   // for each comment object, create a new comment element
//   commentEntries.forEach((commentItem) => {
//     console.log('commentItem: ', commentItem);

//     // article tag <article class="comments-list">
//     const commentArticleEl = document.createElement("div");
//     commentArticleEl.classList.add('comments-list');
//     commentEntriesContainer.appendChild(commentArticleEl);

//     // Icon <div class="comments-list__icon">
//     const commentIconEl = document.createElement("div");
//     commentIconEl.classList.add('comments-list__icon');
//     commentArticleEl.appendChild(commentIconEl);

//     // Group <div class="comments-list__group">
//     const commentGroupEl = document.createElement("div");
//     commentGroupEl.classList.add('comments-list__group');
//     commentArticleEl.appendChild(commentGroupEl);

//     // Group 2 <div class="comments-list__group2">
//     const commentGroup2El = document.createElement("div");
//     commentGroup2El.classList.add('comments-list__group2');
//     commentGroupEl.appendChild(commentGroup2El);
    
//     // create name <p class="comments-list__name">Victor Pinto</p>
//     const commentNameEl = document.createElement('p');
//     commentNameEl.classList.add('comments-list__name');
//     commentNameEl.innerText = commentItem.name;
//     commentGroup2El.appendChild(commentNameEl);

//     // create date <date class="comments-list__date">11/02/2023</date>
//     const commentDateEl = document.createElement('date');
//     commentDateEl.classList.add('comments-list__date');
//     commentDateEl.innerText = commentItem.date;
//     commentGroup2El.appendChild(commentDateEl);

//     // create comment <p class="comments-list__comment">
//     const commentTextEl = document.createElement('p');
//     commentTextEl.classList.add('comments-list__comment');
//     commentTextEl.innerText = commentItem.comment;
//     commentGroupEl.appendChild(commentTextEl);

//     console.log("commentGroupEl: ", commentGroupEl);
//   });
// }

// // To generate dynamic date
// function getCurrentDate() {
//   var date = new Date();
//   var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
//   return date.toLocaleDateString('en-US', options);
// }

// // // Form event handling callback
// const formEl = document.querySelector('.comments-form');

// formEl.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const nameVal = event.target.nameId.value;
//   const commentVal = event.target.commentId.value;
//   const dateVal = getCurrentDate();

//   const newEntry = {
//     name: nameVal,
//     comment: commentVal,
//     date: dateVal
//   };

//   console.log('newEntry: ', newEntry);

//   commentEntries.push(newEntry);

//   // Clear all form fields from the form after submitting
//   event.target.reset();

// });

// // To invoke the function to render initial comment entries on page load
// renderCommentEntries();

// // ==== Sprint 2 end ===