const url = 'https://estate-comparison.codeboot.cz/list.php';
const propertiesToDisplay = 10;

const fetchProperty = async () => {
 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayProperties(data.slice(0, propertiesToDisplay));

};

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

const url2 ='https://estate-comparison.codeboot.cz/detail.php?id=1701473884';

const fetchSpecificProperty = async () => {

  const response =await fetch (url2);
  const details = await response.json();
  console.log(details);
  displaySpecificProperty(details);
};

const displaySpecificProperty = (details) => {
  const propertyADiv = document.querySelector('.propertyA');

  // propertyADiv.innerHTML = `
  // <img src="${details.images[0]}" alt="Property Image">
  
  //   <p>${details.name}</p>
  //   <div class="property-price">
  //     <div class="property-price-title">
  //       <p><b>Price:</b>
  //     </div>
  //     <div class="property-price-detail">
  //       <p>${details.prize_czk} KČ</p>
  //     </div>
    
  // `;

  propertyADiv.innerHTML = `
  <img src="${details.images[0]}" alt="Property Image">
  
    <p>${details.name}</p>
    <div class="property-info">
      <div class="property-info-item">
        <p><b>Price:</b>
        <p>${details.prize_czk} KČ</p>
      </div>
    <div class="property-info-item">
        <p><b>Locality:</b>
        <p>${details.locality}</p>
    </div>
    <div class="property-info-item">
      <p><b>Floor Area:</b>
      <p>${details.building_area} m²</p>
    </div>
    <div class="property-info-item">
        <p><b>Land Area:</b>
        <p>${details.land_area} m²</p>
    </div>
    <div class="property-info-item">
      <img src="${details.company_logo}" alt="Company Logo">
    </div>
    
  `;
};
fetchSpecificProperty ();


