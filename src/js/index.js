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
 
  data.forEach((item,index) => {
    const isSpecialStyleA = index === 4;
    const isSpecialStyleB = index === 6;
    const propertyBox = createPropertyBox(item,isSpecialStyleA, isSpecialStyleB);
    
    if (index === 4) {
      propertyBox.classList.add('propertyBox_A');
    } else if (index === 6) {
      propertyBox.classList.add('propertyBox_B');
    }
    if (isSpecialStyleA) {
      propertyBox.classList.add('specialStyle4th');
    }
    else if (isSpecialStyleB) {
      propertyBox.classList.add('specialStyle4th');
    }

  
    container.appendChild(propertyBox);
  });
};

const createPropertyBox = (property,isSpecialStyleA,isSpecialStyleB) => {
  const box = document.createElement('div');
  box.classList.add('propertyBox');

  // Add property details to the box (customize as needed)
  box.innerHTML = `
    <img src="${property.images[0]}" alt="Property Name">
    <p>${property.name_extracted} ${property.locality} </p>
  `;

  if (isSpecialStyleA) {
    // Create a circle element for the letter "A" if it's a special style
    const letterACircle = document.createElement('div');
    letterACircle.classList.add('letterACircle');
    letterACircle.textContent = 'A';

    // Append the circle element to the propertyBox
    box.appendChild(letterACircle);
  }
  if (isSpecialStyleB) {
    // Create a circle element for the letter "A" if it's a special style
    const letterBCircle = document.createElement('div');
    letterBCircle.classList.add('letterACircle');
    letterBCircle.textContent = 'B';

    // Append the circle element to the propertyBox
    box.appendChild(letterBCircle);
  }

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

  propertyADiv.innerHTML = `
  <img src="${details.images[0]}" alt="Property Image">
  <div class="property-info-name">
      <p>${details.name}</p>
    </div>
    <div class="property-info">
      <div class="property-info-item-price">
        <p><b>Price:</b>
        <p>${details.prize_czk} KČ</p>
      </div>
    <div class="property-info-item">
        <p><b>Locality:</b>
        <p>${details.locality}</p>
    </div>
    <div class="property-info-item-floor-area">
      <p><b>Floor Area:</b>
      <p>${details.building_area} m²</p>
    </div>
    <div class="property-info-item-land-area">
        <p><b>Land Area:</b>
        <p>${details.land_area} m²</p>
    </div>
    <div class="property-info-item-img">
      <img src="${details.company_logo}" alt="Company Logo">
      <p> ${details.company_name}</p>
    </div>
    
  `;
};
fetchSpecificProperty ();

const url3 ='https://estate-comparison.codeboot.cz/detail.php?id=2769235548';

const fetchSpecificProperty2 = async () => {

  const response =await fetch (url3);
  const details = await response.json();
  console.log(details);
  displaySpecificProperty2(details);
};

const displaySpecificProperty2 = (details) => {
  const propertyBDiv = document.querySelector('.propertyB');

  propertyBDiv.innerHTML = `
  <img src="${details.images[0]}" alt="Property Image">
  <div class="property-info-name">
      <p>${details.name}</p>
    </div>
    <div class="property-info">
      <div class="property-info-item-price">
        <p><b>Price:</b>
        <p>${details.prize_czk} KČ</p>
      </div>
    <div class="property-info-item">
        <p><b>Locality:</b>
        <p>${details.locality}</p>
    </div>
    <div class="property-info-item-floor-area">
      <p><b>Floor Area:</b>
      <p>${details.building_area} m²</p>
    </div>
    <div class="property-info-item-land-area">
        <p><b>Land Area:</b>
        <p>${details.land_area} m²</p>
    </div>
 
    
  `;
};
fetchSpecificProperty2 ();



