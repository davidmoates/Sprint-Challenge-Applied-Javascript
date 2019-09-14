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

function Header() {
  function divCreater(){
    const div = document.createElement('div');
    div.classList.add('header');
    return div
  };
  function spanCreater(cl, content){
   const span = document.createElement('span');
   span.classList.add(cl);
   span.textContent = content;
   return span
 };
 function header1Creater(){
    const header1 = document.createElement('h1');
    header1.textContent = 'Lambda Times';
    return header1
  };

const
  headerDiv = divCreater(),
  dateSpan = spanCreater('date', 'SMARCH 28, 2019'),
  headerH1 = header1Creater(),
  tempSpan = spanCreater('temp', '98°'),
  appendToHeader = document.querySelector('.header-container');

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(tempSpan);
  appendToHeader.appendChild(headerDiv);

return headerDiv

};


let newHeader = Header();
