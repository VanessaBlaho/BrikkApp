const url = 'https://estate-comparison.codeboot.cz/list.php';
const propertiesToDisplay = 10;

const fetchProperty = async () => {
 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayProperties(data.slice(0, propertiesToDisplay));

};

const url2 ='https://estate-comparison.codeboot.cz/detail.php?id=1701473884';

const fetchSpecificProperty = async () => {

  const response =await fetch (url2);
  const details = await response.json();
  console.log(details);
};
fetchSpecificProperty ();

const displayProperties = (data) => {
  const container = document.querySelector('.propertyContainer');
 
  data.forEach(item => {
    const propertyBox = createPropertyBox(item);
    container.appendChild(propertyBox);
  });
};

const createPropertyBox = (property) => {
  const box = document.createElement('div');
  box.classList.add('propertyBox');

  // Add property details to the box (customize as needed)
  box.innerHTML = `
    <img src="${property.images[0]}" alt="Property Name">
    <p>${property.name_extracted} ${property.locality} </p>
  `;

  return box;
};

fetchProperty();
