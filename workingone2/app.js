var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var cors = require('cors')
var axios = require('axios');
var Promise = require('promise');
const yelp = require('yelp-fusion');

const client = yelp.client('_99GPng3daD8iz4WVdj6rmCcZwjg1Ir8dYb2sDPDcw_2XlSEla0XeInK9OFoUV2d0O0CMziqPeY73HW6r_knaEoOVgK88KoazXGyieHpywJc6oum-b1DGk22L_xbXnYx');

app.use(cors())


app.use(express.static("./Website"));

function callApi(url, response, resolve, reject) {
  axios.get(url)
  .then(function(res){
    console.log(res.status);
    console.log(res.data);
    resolve(JSON.stringify(res.data));
  }).catch(function (error) {
    reject('Something Seems to be Incorrect');
  });  
}

app.get('/getNearByPlaces', function (request, response) {
  var keyword = request.query.keyword;
  console.log('Keyword : ' + keyword);
  var category = request.query.category;
  console.log('Category : ' + category);
  var distance = request.query.distance;
  console.log('Distance : ' + distance);
  var fromLocationOption = request.query.fromLocationOption;
  var currentLocationLatitude = request.query.currentLocationLatitude;
  var currentLocationLongitude = request.query.currentLocationLongitude;
  var customLocationText = request.query.customLocationText;
  console.log('Fetching Nearby Places for : ' + keyword 
    + ' under Category: ' + category + ' within '+ distance + ' miles from Location '
    + fromLocationOption);  

  if(fromLocationOption == 'hereLocation') {
    console.log('Request for Nearby Places with hereLocation option Selected.');
    var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + currentLocationLatitude + ',' + currentLocationLongitude + '&radius=' + (distance * 1609.34) + '&type=' + category + '&keyword=' + keyword +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g';
    console.log(url);
    var promise = new Promise(function(resolve,reject) {
      callApi(url, response, resolve, reject);
    });
    promise.then(function(data) {
      response.send(data);
    });
    promise.catch(function(error) {
      response.send(null);
    });
  } else {
    console.log('Request for Custom Place Demanded.');
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(customLocationText) +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g';
    var promise = new Promise(function(resolve,reject) {
      callApi(url, response, resolve, reject);
    });
    promise.catch(function(error) {
      response.send(null);
    });
    promise.then(function(data) {
      var responseJSON = JSON.parse(data);
      console.log(responseJSON);
      if(responseJSON && responseJSON.results && responseJSON.results.length > 0) {
        var latitude = responseJSON.results[0].geometry.location.lat;
        var longitude = responseJSON.results[0].geometry.location.lng;
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + (distance * 1609.34) + '&type=' + category + '&keyword=' + keyword +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g';
        promise.then(function(data) {
          var chainPromise = new Promise(function(resolve,reject) {
            callApi(url, response, resolve, reject);
          });
          chainPromise.then(function(data) {
            response.send(data);
          }); 
          chainPromise.catch(function(error) {
            response.send(null);
          });
        });
      } else {
        response.send(responseJSON);
      }
    });
  }
})

app.get('/getNext20Results', function (request, response) {
  var token = request.query.token;
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=' + token +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g';
  var promise = new Promise(function(resolve,reject) {
    callApi(url, response, resolve, reject);
  });
  console.log('NEXT RESULTS : ' + token);
  promise.then(function(data) {
    response.send(data);
  });
})

app.get('/getPlaceDetails', function(request, response) {
  var placeId = request.query.placeId;
  var url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g';
  console.log(url)
  var promise = new Promise(function(resolve,reject) {
    callApi(url, response, resolve, reject);
  });
  console.log('NEXT RESULTS : ' + placeId);
  promise.then(function(data) {
    response.send(data);
  });
})

app.get('/getDirections', function(request, response) {
  var sourceLocation = request.query.sourceLocation;
  var destinationPlaceId  = request.query.destinationPlaceId;
  var mode  = request.query.mode;
  var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + sourceLocation + '&destination=' + destinationPlaceId + '&mode=' + mode +'&key=AIzaSyC6lREP_S5SGE7uGWfW_9Q9LoEdqzVyQ4g'
  console.log('URL ' + url);
  var promise = new Promise(function(resolve,reject) {
    callApi(url, response, resolve, reject);
  });
  promise.then(function(data) {
    response.send(data);
  });
})

app.get('/getYelpReviews', function (request, response) {
  console.log('initial BOOOOLA-10')
  var placeName = request.query.placeName;
  var city = request.query.city;
  var state = request.query.state;
  var country = 'US';
  var addr = request.query.addr1;
  var latitude = request.query.latitude;
  var longitude = request.query.longitude;
  console.log(placeName + ' : ' + city + ' : ' + state + ' : ' + country + ' : '+ latitude + ' : ' + longitude);
  client.businessMatch({
      name: placeName,
      address1 : addr,
      city: city,
      state: state,
      latitude: latitude,
      longitude: longitude,
      country: 'US',
      limit:10
  }).then(bestMatchResponse => {
    if(bestMatchResponse && bestMatchResponse.jsonBody && bestMatchResponse.jsonBody.businesses && bestMatchResponse.jsonBody.businesses.length > 0) {
      var businessId = bestMatchResponse.jsonBody.businesses[0].id;
      if(businessId) {
        client.reviews(businessId).then(placeReviewsResponse => {
          console.log('SOME REVIEWSS FOUND')
          response.send(JSON.stringify(placeReviewsResponse.jsonBody.reviews));
        }).catch(e => {
          console.log(e);
        });
      }
      console.log(businessId);
    } else {
      console.log('BOOOOLA-1')
      response.send(null);
    }
  }).catch(e => {
    console.log(e)
    console.log('BOOOOLA-2')
      response.send(null);
  });
})



var port = 8080;

var server = app.listen(port, function () {
  console.log("Server Running Service On http://%s:%s", server.address().address, server.address().port)

})