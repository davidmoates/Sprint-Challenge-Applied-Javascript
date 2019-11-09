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


// creating Card component to use in the axios call

const Cards = () => {
  // copied function that I made in Header for div and span and changing the h1 to img
  const divCr = (newClass, content) => {
    const div = document.createElement('div');
    div.classList.add(newClass);
    div.textContent = content;
    return div
  };

  const spanCr = (content) => {
    const span = document.createElement('span');
    span.textContent = `By: ${content}`;
    return span
  };

    const imgCr = (url, pic) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = pic;
      return img
    };

    // copied the axios call from tabs since I typed it out already
    // changing the url to articles instead of topics

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then( resp => {
        console.log(resp);

        // now that data is being read, iterate data and return the articles for the cards
        resp.data.articles.bootstrap.forEach(art => {
            const
              card = divCr('card'),
              headline = divCr('headline', art.headline),
              aDiv = divCr('author'),
              iDiv = divCr('img-container'),
              image = imgCr(art.authorPhoto, art.authorName),
              author = spanCr(art.authorName);

            const parent = document.querySelector('.cards-container');

            parent.appendChild(card);
            card.appendChild(aDiv);
            card.appendChild(headline);
            aDiv.appendChild(iDiv);
            aDiv.appendChild(author);
            iDiv.appendChild(image);

            return card
          });
          resp.data.articles.javascript.forEach(art => {
              const
                card = divCr('card'),
                headline = divCr('headline', art.headline),
                aDiv = divCr('author'),
                iDiv = divCr('img-container'),
                image = imgCr(art.authorPhoto, art.authorName),
                author = spanCr(art.authorName);

              const parent = document.querySelector('.cards-container');

              parent.appendChild(card);
              card.appendChild(aDiv);
              card.appendChild(headline);
              aDiv.appendChild(iDiv);
              aDiv.appendChild(author);
              iDiv.appendChild(image);

              return card
            });
            resp.data.articles.jquery.forEach(art => {
                const
                  card = divCr('card'),
                  headline = divCr('headline', art.headline),
                  aDiv = divCr('author'),
                  iDiv = divCr('img-container'),
                  image = imgCr(art.authorPhoto, art.authorName),
                  author = spanCr(art.authorName);

                const parent = document.querySelector('.cards-container');

                parent.appendChild(card);
                card.appendChild(aDiv);
                card.appendChild(headline);
                aDiv.appendChild(iDiv);
                aDiv.appendChild(author);
                iDiv.appendChild(image);

                return card
              });
              resp.data.articles.node.forEach(art => {
                  const
                    card = divCr('card'),
                    headline = divCr('headline', art.headline),
                    aDiv = divCr('author'),
                    iDiv = divCr('img-container'),
                    image = imgCr(art.authorPhoto, art.authorName),
                    author = spanCr(art.authorName);

                  const parent = document.querySelector('.cards-container');

                  parent.appendChild(card);
                  card.appendChild(aDiv);
                  card.appendChild(headline);
                  aDiv.appendChild(iDiv);
                  aDiv.appendChild(author);
                  iDiv.appendChild(image);

                  return card
                });
                resp.data.articles.technology.forEach(art => {
                    const
                      card = divCr('card'),
                      headline = divCr('headline', art.headline),
                      aDiv = divCr('author'),
                      iDiv = divCr('img-container'),
                      image = imgCr(art.authorPhoto, art.authorName),
                      author = spanCr(art.authorName);

                    const parent = document.querySelector('.cards-container');

                    parent.appendChild(card);
                    card.appendChild(aDiv);
                    card.appendChild(headline);
                    aDiv.appendChild(iDiv);
                    aDiv.appendChild(author);
                    iDiv.appendChild(image);

                    return card
                  });
      })
      .catch( err => {
        console.log('The error is', err);
      })
};

Cards();
