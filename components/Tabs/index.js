// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function Tab(data) {
  const topic = document.createElement('div');
  topic.textContent = data.topics;
  topic.classList.add('tab');

  return topic;
}
const title = document.querySelector('.title');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    title.appendChild(Tab(response.data));
  })
  .catch(error => {
    console.log(error);
  });
