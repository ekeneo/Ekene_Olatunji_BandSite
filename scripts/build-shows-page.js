// === html for reference ===
/* <section class="shows-container">
      <h3 class="shows__header">Shows</h3>
      <div class="shows">
        <div class="shows-head">
          <p class="shows-head__date">DATE</p>
          <p class="shows-head__venue">VENUE</p>
          <p class="shows-head__location">LOCATION</p>
        </div>
        <div class="shows-data">
          <p class="shows-data__date">Mon Sep 09 2024</p>
          <p class="shows-data__venue">Ronald Lane</p>
          <p class="shows-data__location">San Francisco, CA</p>
          <button class="shows-data__btn">BUY TICKETS</button>
        </div>
      </div>
    </section> */


// list of default show entries
// array of (shows) objects: date, venue, location
const showEntries = [
  { date: 'Mon Sep 09 2024', venue: 'Ronald Lane' , location: 'San Francisco, CA'},
  { date: 'Tue Sept 17 2024', venue: 'Pier 3 East' , location: 'San Francisco, CA'},
  { date: 'Sat Oct 12 2024', venue: 'View Lounge' , location: 'San Francisco, CA'},
  { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency' , location: 'San Francisco, CA'},
  { date: 'Fri Nov 29 2024', venue: 'Moscow Center' , location: 'San Francisco, CA'},
  { date: 'Wed Dec 18 2024', venue: 'Press Club' , location: 'San Francisco, CA'}
];
console.log('showEntries: ', showEntries);

// selecting the <section> tag which is a container for the shows section
const showEntriesContainer = document.querySelector('.shows-container');
console.log('showEntriesContainer: ', showEntriesContainer);

function rendershowEntries() {
  // for each show object, create a new show element
  showEntries.forEach((showItem) => {
    
    // create shows <div class="shows">
    const showsEl = document.createElement("div");
    showsEl.classList.add('shows');
    showEntriesContainer.appendChild(showsEl);

    // create shows-head <div class="shows-head">
    const showsHeadEl = document.createElement("div");
    showsHeadEl.classList.add('shows-head');
    showsEl.appendChild(showsHeadEl);

    // create DATE <p class="shows-head__date">DATE</p>
    const showDateEl = document.createElement("p");
    showDateEl.classList.add('shows-head__date');
    showDateEl.textContent = "DATE"; 
    showsHeadEl.appendChild(showDateEl);

    // create VENUE <p class="shows-head__venue">VENUE</p>
    const showVenueEl = document.createElement("p");
    showVenueEl.classList.add('shows-head__venue');
    showVenueEl.textContent = "VENUE"; 
    showsHeadEl.appendChild(showVenueEl);

    // create LOCATION <p class="shows-head__location">LOCATION</p>
    const showLocationEl = document.createElement("p");
    showLocationEl.classList.add('shows-head__location');
    showLocationEl.textContent = "LOCATION"; 
    showsHeadEl.appendChild(showLocationEl);

    // create shows-data <div class="shows-data">
    const showsDataEl = document.createElement("div");
    showsDataEl.classList.add('shows-data');
    showsEl.appendChild(showsDataEl);

    // create shows-data__date <p class="shows-data__date">Mon Sep 09 2024</p>
    const showsDateEl = document.createElement("p");
    showsDateEl.classList.add('shows-data__date');
    showsDateEl.textContent = showItem.date; 
    showsDataEl.appendChild(showsDateEl);

    // create shows-data__venue <p class="shows-data__venue">Ronald Lane</p>
    const showsVenueEl = document.createElement("p");
    showsVenueEl.classList.add('shows-data__venue');
    showsVenueEl.textContent = showItem.venue; 
    showsDataEl.appendChild(showsVenueEl);

    // create shows-data__location <p class="shows-data__location">San Francisco, CA</p>
    const showsLocationEl = document.createElement("p");
    showsLocationEl.classList.add('shows-data__location');
    showsLocationEl.textContent = showItem.location; 
    showsDataEl.appendChild(showsLocationEl);

    //  create Buy Tickets Button <button class="shows-data__btn">BUY TICKETS</button>
    const showsBtnEl = document.createElement("button");
    showsBtnEl.classList.add('shows-data__btn');
    showsBtnEl.textContent = "BUY TICKETS"; 
    showsDataEl.appendChild(showsBtnEl);
  });
}

rendershowEntries() 