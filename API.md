##API Documentation

**HOST**: api-challenge.getcrowder.com

###Endpoints

####List all available events

**Request**
```
GET /event
```
**Response**

```json
[
   {
      "id":1,
      "name":"Black Sabbath Cordoba",
      "thumb":"https://cdn.boletius.com/blacksabbath/cordoba.jpg",
      "venue":{
         "id":1,
         "name":"DirecTV Arena"
      }
   },
   {
      "id":2,
      "name":"EXPULSADOS",
      "thumb":"https://cdn.boletius.com/images/mts/thumbs/640-expulsados.jpg",
      "venue":{
         "id":2,
         "name":"Teatro Vorterix"
      }
   },
   {
      "id":3,
      "name":"CICLO SONANDO: NEVER TAXI - GRAMONAUTAS - CIEGO EQUILIBRISTA",
      "thumb":"https://cdn.boletius.com/images/mts/thumbs/640-rocksonando.jpg",
      "venue":{
         "id":3,
         "name":"Anfiteatro Puerto Plata"
      }
   },
   {
      "id":4,
      "name":"LA ROXTAR VORTERIX - MARILINA BERTOLDI",
      "thumb":"https://cdn.boletius.com/images/mts/thumbs/roxtar-2212-640x640.jpg",
      "venue":{
         "id":4,
         "name":"Club Cultural Lima de Chorrillos"
      }
   },
   {
      "id":5,
      "name":"Rancid",
      "thumb":"https://cdn.boletius.com/images/1487618253449-test-pos-ran-640x640.jpg",
      "venue":{
         "id":1,
         "name":"DirecTV Arena"
      }
   },
   {
      "id":6,
      "name":"Los Gardelitos - Gardeliando",
      "thumb":"https://cdn.boletius.com/images/1483969214648-test-pos-fecha_13.jpg",
      "venue":{
         "id":2,
         "name":"Teatro Vorterix"
      }
   },
   {
      "id":7,
      "name":"PAUL GILBERT - 6 de Febrero",
      "thumb":"https://cdn.boletius.com/images/1484082927339-test-pos-allaccess_640x640.jpg",
      "venue":{
         "id":3,
         "name":"Anfiteatro Puerto Plata"
      }
   },
   {
      "id":8,
      "name":"LA ROXTAR SHOWS - MOSES MURPHY (UK) - APRIL MAY JUNE",
      "thumb":"https://cdn.boletius.com/images/1485544122713-test-pos-allaccess_roxtar_small-min.jpg",
      "venue":{
         "id":4,
         "name":"Club Cultural Lima de Chorrillos"
      }
   },
   {
      "id":9,
      "name":"THE DEAD DAISIES",
      "thumb":"https://cdn.boletius.com/images/1487257772076-test-pos-the-dead-daisies--640x640-rosario-min.jpg",
      "venue":{
         "id":1,
         "name":"DirecTV Arena"
      }
   },
   {
      "id":10,
      "name":"AIRBAG - Libertad",
      "thumb":"https://cdn.boletius.com/images/1488569407500-test-pos-airbag--640x640-30-jun_(1)-min.jpg",
      "venue":{
         "id":2,
         "name":"Teatro Vorterix"
      }
   }
]
```

####Get Event Details

**Request**
```
GET /event/{eventId}
```
**Response**

```json
{
   "id":1,
   "name":"Black Sabbath Cordoba",
   "description":"Conseguí tus entradas para ser parte del final de una de las bandas más legendarias de la historia del Rock and Roll. Black Sabbath dará su ultimo concierto en Cordoba.",
   "image":"https://cdn.boletius.com/blacksabbath/co_cordoba_new.jpg",
   "thubm":"https://cdn.boletius.com/blacksabbath/cordoba.jpg",
   "similarEvents":[
      {
         "id":1,
         "name":"Black Sabbath Cordoba",
         "thumb":"https://cdn.boletius.com/blacksabbath/cordoba.jpg",
         "venue":{
            "id":1,
            "name":"DirecTV Arena"
         }
      },
      {
         "id":5,
         "name":"Rancid",
         "thumb":"https://cdn.boletius.com/images/1487618253449-test-pos-ran-640x640.jpg",
         "venue":{
            "id":1,
            "name":"DirecTV Arena"
         }
      },
      {
         "id":9,
         "name":"THE DEAD DAISIES",
         "thumb":"https://cdn.boletius.com/images/1487257772076-test-pos-the-dead-daisies--640x640-rosario-min.jpg",
         "venue":{
            "id":1,
            "name":"DirecTV Arena"
         }
      },
      {
         "id":13,
         "name":"FACKASS",
         "thumb":"https://cdn.boletius.com/images/1492461208581-test-pos-fackass--640-min.jpg",
         "venue":{
            "id":1,
            "name":"DirecTV Arena"
         }
      }
   ],
   "dates":[
      {
         "id":3,
         "name":"Dia 3",
         "date":"2018-04-27T20:46:43Z"
      },
      {
         "id":2,
         "name":"Dia 2",
         "date":"2018-04-27T20:46:43Z"
      },
      {
         "id":1,
         "name":"Dia 1",
         "date":"2018-04-27T20:46:43Z"
      }
   ],
   "venue":{
      "id":1,
      "address":"Av. Olivos 3215, Tortuguitas, Buenos Aires, Argentina",
      "location":{
         "longitude":"-58.7177591",
         "latitude":"-34.4615385"
      },
      "name":"DirecTV Arena"
   }
}
```

####Get Sectors for Date

**Request**
```
GET /eventDate/{dateId}/sectors
```
**Response**

```json
[
   {
      "id":2,
      "name":"Campo VIP"
   },
   {
      "id":5,
      "name":"Popular"
   },
   {
      "id":3,
      "name":"Plata Alta"
   },
   {
      "id":1,
      "name":"Campo"
   },
   {
      "id":6,
      "name":"Platea Baja"
   },
   {
      "id":4,
      "name":"Platea VIP"
   },
   {
      "id":7,
      "name":"Platea Preferencial"
   }
]
```

####Get Rates for Sector

**Request**
```
GET /sectors/{sectorId}/rates
```
**Response**

```json
[
   {
      "id":1,
      "max":4,
      "price":931.0,
      "name":"Jubilado"
   },
   {
      "id":3,
      "max":4,
      "price":476.0,
      "name":"Menor"
   },
   {
      "id":2,
      "max":4,
      "price":640.0,
      "name":"Adulto"
   }
]
```

####Get Venue Details

**Request**
```
GET /venue/{venueId}
```
**Response**

```json
{
      "id":1,
      "address":"Av. Olivos 3215, Tortuguitas, Buenos Aires, Argentina",
      "location":{
         "longitude":"-58.7177591",
         "latitude":"-34.4615385"
      },
      "name":"DirecTV Arena"
   }
```

####Create Order

**Request**
```
POST /order
```
**Request Body**

```json
{
  "rate":1,
  "quantity":2,
  "card": {
    "nameOnCard":"JOHN DOE",
    "expires":"02/2020",
    "number": "4509953566233704",
    "cvv":"999"
  },
  "user": {
    "firstName":"John",
    "lastName":"Doe",
    "email":"jdoe@gmail.com",
    "phone":"+5491133329090"
  }
}
```

**Response**

```json
{
    "id": 2,
    "quantity": 2,
    "confirmationCode": "94O0PEHTEG",
    "rate": {
        "id": 1
    },
    "user": {
        "phone": "+5491133329090",
        "firstName": "Juan",
        "lastName": "Perez",
        "email": "juanperez@gmail.com"
    },
    "card": {
        "nameOnCard": "APRO",
        "cvv": "999",
        "expires": "02/2020",
        "number": "4509953566233704"
    },
    "purchaseDate": "2018-04-27T17:22:31Z"
}
```


