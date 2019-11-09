// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// I will need to have the component first so I can use it in the axios call.

const Tabs = topics => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.textContent = topics;

  // adding a click event listener to toggle the active tab
  div.addEventListener('click', () => {
    div.classList.toggle('active-tab');
  });

  return div
};

// Create a Varible for the parent to append the child to.

const parent = document.querySelector('.topics');

// Make the axios call to see how the data is layed out

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( resp => {
    console.log(resp);
    // now that data is being read, iterate data and return the topics for the tabs
    resp.data.topics.forEach(item => {
      let tab = Tabs(item);
      parent.appendChild(tab);
      return tab
    });
  })
  .catch( err => {
    console.log('The error is', err);
  })
