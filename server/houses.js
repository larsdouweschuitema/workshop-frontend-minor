const faker = require('faker')

function generateHouses () {
  let houses = []
  for (let id = 0; id < 50; id++) {
    const city = faker.address.city()
    const streetAddress = faker.address.streetAddress()
    const zipCode = faker.address.zipCode()

    houses.push({
      'id': id,
      'city': city,
      'zip_code': zipCode,
      'street_address': streetAddress,
    })
  }
  return { 'houses': houses }
}

module.exports = generateHouses
