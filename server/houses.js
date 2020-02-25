const faker = require('faker')

function generateHouses () {
  const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
  })

  let houses = []
  
  for (let id = 0; id < 50; id++) {
    const city = faker.address.city()
    const streetAddress = faker.address.streetAddress()
    const zipCode = faker.address.zipCode()
    const price = faker.finance.amount(150000, 500000, 0)

    const houseTypes = ['house','appartment'];
    const randomHouse = Math.floor(Math.random()*houseTypes.length);

    houses.push({
      'id': id,
      'city': city,
      'zip_code': zipCode,
      'street_address': streetAddress,
      'type': houseTypes[randomHouse],
      'price': formatter.format(price),
      'isSaved': Math.random() >= 0.5
    })
  }
  return { 'houses': houses }
}

module.exports = generateHouses
