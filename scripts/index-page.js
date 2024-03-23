// ===Sprint 3 begin ===
// create an instance of the api class
// const apiKey = "35c9c5f2-6e06-48a3-913c-08f4571c2416";
// const bandSiteApi = new BandSiteApi(apiKey);

// console.log(bandSiteApi);

// ==== Sprint 2 begin ===
// list of default comment entries
// array of (comment) objects: name, comment, date
const commentEntries = [
  { name: 'Victor Pinto', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' , date: '03/13/2024'},
  { name: 'Christina Cabrera', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' , date: '03/13/2024'},
  { name: 'Isaac Tedesse', comment: 'This is the first comment.I cant stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough.' , date: '03/13/2024'}
];
console.log('commentEntries: ', commentEntries);

// ===html code for reference===
/* <section class="comments">
  <article class="comments-list" id="comments-list-id">
    <div class="comments-list__icon"></div>
    <div class="comments-list__group">
      <div class="comments-list__group2">
        <p class="comments-list__name">Victor Pinto</p>
        <date class="comments-list__date">11/02/2023</date>
      </div>
      <p class="comments-list__comment">
        This is art. This is inexplicable magic expressed in the purest way,
        everything that makes up this majestic work deserves reverence. Let
        us appreciate this for what it is and what it contains.
      </p>
    </div>
  </article>
</section>   */


// selecting the <section> tag which is a container for the comment section
const commentEntriesContainer = document.querySelector('.comments');
console.log('commentEntriesContainer: ', commentEntriesContainer);

// making the for each a function to recall 
function renderCommentEntries() {
 // To avoid repeating array after every render/append, remove all child elements from an element
  commentEntriesContainer.innerHTML = '';

  // for each comment object, create a new comment element
  commentEntries.forEach((commentItem) => {
    console.log('commentItem: ', commentItem);

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
    commentNameEl.innerText = commentItem.name;
    commentGroup2El.appendChild(commentNameEl);

    // create date <date class="comments-list__date">11/02/2023</date>
    const commentDateEl = document.createElement('date');
    commentDateEl.classList.add('comments-list__date');
    commentDateEl.innerText = commentItem.date;
    commentGroup2El.appendChild(commentDateEl);

    // create comment <p class="comments-list__comment">
    const commentTextEl = document.createElement('p');
    commentTextEl.classList.add('comments-list__comment');
    commentTextEl.innerText = commentItem.comment;
    commentGroupEl.appendChild(commentTextEl);

    console.log("commentGroupEl: ", commentGroupEl);
  });
}

// To generate dynamic date
function getCurrentDate() {
  var date = new Date();
  var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Form event handling callback
const formEl = document.querySelector('.comments-form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameVal = event.target.nameId.value;
  const commentVal = event.target.commentId.value;
  const dateVal = getCurrentDate();

  const newEntry = {
    name: nameVal,
    comment: commentVal,
    date: dateVal
  };

  console.log('newEntry: ', newEntry);

  commentEntries.push(newEntry);

  renderCommentEntries();

  // Clear all form fields from the form after submitting
  event.target.reset();

});

// To invoke the function to render initial comment entries on page load
renderCommentEntries();

