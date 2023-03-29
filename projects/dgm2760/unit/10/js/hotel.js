async function getHotelList() {
  const response = await fetch('./data/hotels.json');
  const data = await response.json();
  
  return data;
}

export async function insertHotelButtons() {
  const hotelList = await getHotelList();
  hotelList.forEach(({ id, name }) => {
    const button = document.createElement('button');

    button.innerText = name;
    button.onclick = () => updateHotelDetailsFor(id);

    document.querySelector('#hotelButtons').appendChild(button);
  });
}

export async function updateHotelDetailsFor(id) {
  const hotelList = await getHotelList();
  const selectedHotel = hotelList.find((hotel) => hotel.id === id)
  const { name, address, roomCount, hasGym, roomTypes, image } = selectedHotel;

  const elementText = {
    hotelName: `${name} Hotel Rooms`,
    hotelAddress: address,
    hotelRoomCount: roomCount,
    hotelHasGym: hasGym ? 'Yes' : 'No',
    hotelRoomTypes: roomTypes.join(', '),
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text;
  });

  document.querySelector('#hotelImage').style.backgroundImage = `url('${image}')`;
  document.querySelector('#hotelDetails').classList.remove('hide');
}
