// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const Header = () => {

  //Creating functions to uses to make elements.
  const divCr = () => {
    const div = document.createElement('div');
    div.classList.add('header');
    return div
  };

  const spanCr = (newClass, content) => {
    const span = document.createElement('span');
    span.classList.add(newClass);
    span.textContent = content;
    return span
  };

    const h1Cr = () => {
      const h1 = document.createElement('h1');
      h1.textContent = 'Lambda Times';
      return h1
    };

    // Create variable to help with speed of appending and make code more functional

    const
      header = divCr(),
      date = spanCr('date', 'SMARCH 28, 2019'),
      title = h1Cr(),
      temp = spanCr('temp', '98°');

    // Select the parent to append to with querySelector

    const parent = document.querySelector('.header-container');

    // Append the children to the parent

    parent.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
};

Header();
