// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreater(newTopics){
  const div = document.createElement('div');
  div.classList.add('tab');
  div.textContent = newTopics;
  return div
};
const appendToTab = document.querySelector('.topics');




axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
      let tabDiv = tabCreater(item);
      appendToTab.appendChild(tabDiv);
      return tabDiv
    });
    })
      .catch((error) => {
          console.log("Error:", error);
      });
