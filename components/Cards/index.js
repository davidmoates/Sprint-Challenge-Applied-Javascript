// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreater(){
  function divCreater(cl, content){
    const div = document.createElement('div');
    div.classList.add(cl);
    div.textContent = content;
    return div
  };
  function spanCreater(authors){
   const span = document.createElement('span');
   span.textContent = `By ${authors}`;
   return span
  };
  function imgCreater(url){
    const img = document.createElement('img');
    img.src = url;
    return img
  };



  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
      console.log(response);
        response.data.articles.bootstrap.forEach((item) => {

          const
            cardDiv = divCreater('card'),
            headlineDiv = divCreater('headline', item.headline),
            authorDiv = divCreater('author'),
            imgDiv = divCreater('img-container'),
            authorImg = imgCreater(item.authorPhoto),
            cardSpan = spanCreater(item.authorName),
            appendToCard = document.querySelector('.cards-container');

          imgDiv.appendChild(authorImg);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(cardSpan);
          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          appendToCard.appendChild(cardDiv);

          return cardDiv

        });
        response.data.articles.javascript.forEach((item) => {

          const
            cardDiv = divCreater('card'),
            headlineDiv = divCreater('headline', item.headline),
            authorDiv = divCreater('author'),
            imgDiv = divCreater('img-container'),
            authorImg = imgCreater(item.authorPhoto),
            cardSpan = spanCreater(item.authorName),
            appendToCard = document.querySelector('.cards-container');

          imgDiv.appendChild(authorImg);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(cardSpan);
          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          appendToCard.appendChild(cardDiv);

          return cardDiv

        });
        response.data.articles.jquery.forEach((item) => {

          const
            cardDiv = divCreater('card'),
            headlineDiv = divCreater('headline', item.headline),
            authorDiv = divCreater('author'),
            imgDiv = divCreater('img-container'),
            authorImg = imgCreater(item.authorPhoto),
            cardSpan = spanCreater(item.authorName),
            appendToCard = document.querySelector('.cards-container');

          imgDiv.appendChild(authorImg);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(cardSpan);
          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          appendToCard.appendChild(cardDiv);

          return cardDiv

        });
        response.data.articles.node.forEach((item) => {

          const
            cardDiv = divCreater('card'),
            headlineDiv = divCreater('headline', item.headline),
            authorDiv = divCreater('author'),
            imgDiv = divCreater('img-container'),
            authorImg = imgCreater(item.authorPhoto),
            cardSpan = spanCreater(item.authorName),
            appendToCard = document.querySelector('.cards-container');

          imgDiv.appendChild(authorImg);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(cardSpan);
          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          appendToCard.appendChild(cardDiv);

          return cardDiv

        });
        response.data.articles.technology.forEach((item) => {

          const
            cardDiv = divCreater('card'),
            headlineDiv = divCreater('headline', item.headline),
            authorDiv = divCreater('author'),
            imgDiv = divCreater('img-container'),
            authorImg = imgCreater(item.authorPhoto),
            cardSpan = spanCreater(item.authorName),
            appendToCard = document.querySelector('.cards-container');

          imgDiv.appendChild(authorImg);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(cardSpan);
          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          appendToCard.appendChild(cardDiv);

          return cardDiv

        });
    })
      .catch((error) => {
        console.log("Error:", error);
      });
}

let newCard = cardCreater()
