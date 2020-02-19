# REST API

## Running the server
Fake rest API using `json-server` dependency.

**Run the server**

```
$ json-server --watch houses.js
```

## Testing API endpoints with Postman
Initiating a GET, POST or DELETE request is easy by simply using the browser. For initiating other types of HTTP requests you can make use of an HTTP client tool like Postman (https://www.getpostman.com)

GET request

```
GET localhost:3000/houses
```

POST request

```
POST localhost:3000/houses

{
  'city': 'Amsterdam',
  'zip_code': '1314AB,
  'street_address': 'Fundaplein 3,
}
```

DELETE request

```
DELETE localhost:3000/houses/1
```

PUT request
```
PUT localhost:3000/houses/4

{
  'city': 'Amsterdam',
  'zip_code': '1314AB,
  'street_address': 'Fundaplein 3,
}
```

## Mocking data with Faker.js
So far we’ve entered data exposed by the API manually in a JSON file. However, if you need a larger amount of data the manual way can be cumbersome. An easy solution to this problem is to use the Faker.js (https://github.com/marak/Faker.js/) library to generate fake data.
