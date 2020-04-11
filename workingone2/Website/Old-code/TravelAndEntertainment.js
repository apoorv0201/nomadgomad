// var app = angular.module("myApp", ["ngAnimate"]);
// app.controller("MyCtrl", function ($scope) {
// 	$scope.result=false;
// 	$scope.favor=false;
// 	$scope.detailsPane=false;
// 	$scope.placeDetails = true;
// 	$scope.myDummy = "results";
// 	$scope.content = {

// 	};
// 	$scope.detailsBtnPane= true;
// 	$scope.reviewsAng = true;
// 	$scope.checkIfFavors = function() {
// 		return ($scope.favor && ($scope.myDummy == 'favors'));
// 	};
// 	$scope.checkIfResults = function() {
// 		return ($scope.result && ($scope.myDummy == 'results'));
// 	};
// 	$scope.showPlaceDetails  = function() {
// 		placeDetails = false;
// 	};
// 	$scope.listBack = function() {
// 		if($scope.myDummy == "results") {
// 			$scope.result=false;
// 			$scope.favor=true;
// 		} else {
// 			$scope.result=true;
// 			$scope.favor=false;
// 		}
// 		$scope.placeDetails = true;
// 		$scope.detailsPane=false;
// 		$scope.detailsBtnPane=false;

// 	}
// });
// var marker;
// var searchClicked = null;;
// $(document).ready(function(){
	
// 	$('#keyword').on('blur keyup', function(e) {
// 		// var elementClicked = $(e.target).value;
// 		// debugger
// 		// var keyword = elementClicked;
// 		// if(keyword != '') {
// 		// 	hideFormErrorMessage(elementClicked);
// 		// 	enableSubmit();
// 		// } else {
// 		// 	showFormErrorMessage(elementClicked);
// 		// 	enableSubmit();
// 		// }
// 	});

// 	$('#customLocationText').on('blur keyup', function(e) {
// 		// var elementClicked = $(e.target);
// 		// var customLocationText = isEmpty(elementClicked);
// 		// if(customLocationText) {
// 		// 	hideFormErrorMessage(elementClicked);
// 		// 	enableSubmit();
// 		// } else {
// 		// 	showFormErrorMessage(elementClicked);
// 		// 	enableSubmit();
// 		// }
// 	});

// 	$('#placeDetailsTab').on('click', function(){
// 		togglePlaceDetailsTab();
// 		$('#placeDetailsDiv').removeClass('hideElement');
// 	});

// 	$('#placePhotosTab').on('click', function(){
// 		togglePlaceDetailsTab();
// 		$('#placeImageGrid').removeClass('hideElement');
// 	});

// 	$('#placeMapTab').on('click', function(){
// 		togglePlaceDetailsTab();
// 		$('#placeMapArea').removeClass('hideElement');
// 	});

// 	$('#placeReviewsTab').on('click', function(){
// 		togglePlaceDetailsTab();
// 		$('#placeReviewsArea').removeClass('hideElement');

// 	});

// 	function setDirectionsOnTheMap(directionsDisplay, directionsService){
// 		var startLocString = null;
// 		if($('#destLocationLat').val()) {
// 			var sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode;
// 			if($('#sourceLocation').val().trim().toLowerCase() == 'my location' || $('#sourceLocation').val().trim().toLowerCase() == 'your location') {
// 				sourceLatitude = $('#currentLocationLatitude').val();
// 				sourceLongitude = $('#currentLocationLongitude').val();
// 			} else {
// 				sourceLatitude = $('#sourceLocationLat').val();
// 				sourceLongitude = $('#sourceLocationLng').val();
// 				startLocString = $('#sourceLocation').val();
// 			}
// 			destinationLatitude = $('#destLocationLat').val();
// 			destinationLongitude = $('#destLocationLng').val();
// 			travelMode = $('#travelMode').val();
// 			calcRoute(startLocString, directionsDisplay, directionsService, sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode);
// 		} else {
// 		} 
// 	}

// 	function calcRoute(startLocString, directionsDisplay, directionsService, sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode) {
// 		var start;
// 		if(startLocString) {
// 			start = startLocString;
// 		} else {
// 			start = new google.maps.LatLng(Number(sourceLatitude), Number(sourceLongitude));
// 		}
// 		if(marker) {
// 			marker.setMap(null);
// 		}
// 		var end = new google.maps.LatLng(Number(destinationLatitude), Number(destinationLongitude));
// 		directionsService.route({
// 			origin: start,
// 			destination: end,
// 			travelMode: travelMode,
// 			provideRouteAlternatives: true
// 		}, function(response, status) {
// 			if (status === 'OK') {
// 				$('#directionsClicked').val('true');
// 				directionsDisplay.setPanel(document.getElementById('directionsPanel'));
// 				directionsDisplay.setDirections(response);
// 			} else {
// 				window.alert('Directions request failed due to ' + status);
// 			}
// 		});
// 	}


// 	function togglePlaceDetailsTab(selectedTab) {
// 		$('#placeDetailsDiv').addClass('hideElement');
// 		$('#placeImageGrid').addClass('hideElement');
// 		$('#placeMapArea').addClass('hideElement');
// 		$('#placeReviewsArea').addClass('hideElement');
// 	}

// 	function sourceLocationChange(e) {
// 		var sourceLocationText = isEmpty(e)
// 		if(!sourceLocationText) {
// 			$('#getDirectionsOnMap').prop('disabled', true);
// 		} else {
// 			$('#getDirectionsOnMap').prop('disabled', false);
// 		}
// 	}

// 	$('#clearSearchForm').off('click');
// 	$('#clearSearchForm').on('click', function() {
// 		$('#keyword').val('');
// 		$('#category').val('Default');
// 		$('#distanceInMiles').val('');
// 		$('#hereLocation').prop('checked', true);
// 		$('#customLocationText').val('');
// 		$('#customLocationText').prop('disabled', true);
// 		$('#customizedSearch').prop("disabled", true);
// 		// $('#keyword').removeClass('is-invalid');
// 		$('#keywordFormError').css('display', 'none');
// 		// $('#customLocationText').removeClass('is-invalid');
// 		$('#customLocationTextFormError').css('display', 'none');

// 		var appElement = document.querySelector('[ng-app=myApp]');
// 		var $scope = angular.element(appElement).scope();
// 		$scope.$apply(function() {
// 			$scope.result=true;
// 			$scope.favor=true;
// 			$scope.detailsPane=true;
// 			$scope.placeDetails = true;
// 			$scope.myDummy = "results";
// 			$scope.content = {

// 			};
// 			$scope.detailsBtnPane= true;
// 		});
// 		currentNearbyPlaces = {};
// 		current_result_count = 0;
// 		current_page_in_view = 1;
// 		$('#resultTable').html(''); 
// 		//$('#resultsSection').html(''); 
// 		$('#noPhotos').html('');
// 		displayPaginationPane(false);
// 		$('#resultsTab').trigger('click');
// 		$('#detailsBtn').prop('disabled', true);
// 		$('#currentPlaceId').val('');
// 	});



// 	$('#sourceLocation').on('blur keyup', function() {
// 		sourceLocationChange($(this));
// 	});
// 	$('#sourceLocation').on('focus', startAutoComplete('sourceLocation'));

// 	$('#customLocationText').off('focus');
// 	$('#customLocationText').on('focus', startAutoComplete('customLocationText'));

// 	function collectFormData() {
// 		var data = {
// 			'keyword' : $('#keyword').val(),
// 			'category' : $('#category').val().toLowerCase().replace(' ', '_'),
// 			'distance' : $('#distanceInMiles').val().trim() ? $('#distanceInMiles').val().trim() : 10,
// 			'fromLocationOption' : $('input[type=radio][name=fromLocationOption]:checked').val(),
// 			'currentLocationLatitude' : $('#currentLocationLatitude').val(),
// 			'currentLocationLongitude' : $('#currentLocationLongitude').val(),
// 			'customLocationText' : $('#customLocationText').val()
// 		}
// 		return data;
// 	}

// 	$('#addToFavouritesBtn').off('click');
// 	$('#addToFavouritesBtn').on('click', function(){
// 		var currentFavPlace = $('#currentPlaceId').val();
// 		if($('#currentFavStar').hasClass('yellowColored')) {
// 			$('#currentFavStar').removeClass('yellowColored');
// 			$('currentFavStar').removeClass('fa-star');
// 			$('#currentFavStar').addClass('fa-star-o');
// 			var localStoredData = getLocalStorageData();
// 			if(localStoredData) {
// 				localStoredData = JSON.parse(localStoredData);
// 				if(localStoredData[0][currentFavPlace]) {
// 					delete localStoredData[0][currentFavPlace];
// 					localStoredData = JSON.stringify(localStoredData);
// 					saveLocalStorageData(localStoredData);
// 					$('#fav_'+currentFavPlace).removeClass('yellowColored');
// 					$('#fav_'+currentFavPlace).addClass('fa-star-o');
// 					$('#fav_'+currentFavPlace).removeClass('fa-star');
// 				}
// 			}
// 		} else {
// 			$('#currentFavStar').addClass('yellowColored');
// 			$('#currentFavStar').removeClass('fa-star-o');
// 			$('#currentFavStar').addClass('fa-star');
// 			var localStoredData = getLocalStorageData();
// 			var favoritePlace = {
// 				'placeid' : $('#currentPlaceId').val(),
// 				'addr' : $('#currentPlaceAddr').val(),
// 				'category' : $('#currentCategory').val(),
// 				'placename' : $('#currentPlaceName').val()
// 			}
// 			if(localStoredData && localStoredData != "") {
// 				localStoredData = JSON.parse(localStoredData);
// 				localStoredData[0][currentFavPlace] = favoritePlace;
// 				localStoredData = JSON.stringify(localStoredData);
// 				saveLocalStorageData(localStoredData);
// 			} else {
// 				var favoritePlaces = [];
// 				var obj = {};
// 				obj[$('#currentPlaceId').val()] = favoritePlace;
// 				favoritePlaces.push(obj);
// 				localStoredData = JSON.stringify(favoritePlaces);
// 				saveLocalStorageData(localStoredData);
// 			}

// 			$('#fav_'+currentFavPlace).addClass('yellowColored');
// 			$('#fav_'+currentFavPlace).removeClass('fa-star-o');
// 			$('#fav_'+currentFavPlace).addClass('fa-star');
// 		}
// 	});
	

// 	var currentNearbyPlaces = {};
// 	var current_result_count = 0;
// 	var current_page_in_view = 1;
// 	var favPage = 0;

// 	function getNearbyPlaces(data) {
// 		$('#progressBar').addClass('hideElement');
// 		$('#resultTable').removeClass('hideElement');
// 		$('#paginationPane').removeClass('hideElement');
// 		$('#detailsTabPane').removeClass('hideElement');
// 		if(!data) {
// 			$('#resultTable').html(failedToConnect());
// 			$('#progressBar').addClass('hideElement');
// 			$('#resultTable').removeClass('hideElement');
// 			detailsBtnToggle(true);

// 		} else if(data && data.results && data.results.length < 1) {
// 			detailsBtnToggle(true);
// 			$('#resultTable').html(noRecordsFoundBanner());
// 			$('#progressBar').addClass('hideElement');
// 			$('#resultTable').removeClass('hideElement');
// 		} else if(data) {
// 			current_result_count++;
// 			var val = current_result_count.toString();
// 			currentNearbyPlaces[current_result_count] = data;
// 			if(current_result_count==1) {
// 				populateResultsInTable(data);
// 			} else {
// 				populateNextResults(data, current_result_count);
// 				performPagination();
// 			}
// 		} 
// 	}

// 	function getNextData(next_page_token) {
// 		var token = {
// 			'token' : next_page_token
// 		}
// 		$('#paginationPane').addClass('hideElement');
// 		$('#progressBar').removeClass('hideElement');
// 		$('#resultTable').addClass('hideElement');
// 		$('#detailsTabPane').addClass('hideElement');
// 		ajaxRestCall('/getNext20Results', 'GET', token, getNearbyPlaces);
// 	}

// 	function detailsBtnToggle(flag) {
// 		var appElement = document.querySelector('[ng-app=myApp]');
// 		var $scope = angular.element(appElement).scope();
// 		$scope.$apply(function() {
// 			$scope.detailsBtnPane = flag;
// 		});
// 	}

// 	function populateResultsInTable(data) {
// 		$('#progressBar').addClass('hideElement');
// 		$('#resultTable').removeClass('hideElement');
// 		var jsonParsedData = data;
// 		var results = jsonParsedData.results;
// 		var resultTable = '';
// 		if(results  && results.length > 0) {
// 			resultTable += '<div class="table-responsive"><table class="table table-sm nearbyPlacesResults table-hover"><tbody ng-new-append id="nearPlacesBody">';
// 			resultTable += generateTableHeaders();
			
// 			resultTable += '</tbody></table></div>';
// 			$('#resultTable').html(resultTable);
// 			resultTable = "";
// 			for(var i = 0; i < results.length; i++) {
// 				resultTable += generateTableResults(i, results[i], false, 1);
// 			}
// 			var $target = $("[ng-new-append]");
// 			angular.element($target).injector().invoke(function($compile) {
// 				var $scope = angular.element($target).scope();
// 				$target.append($compile(resultTable)($scope));
// 				$scope.$apply();
// 			});
// 			detailsBtnToggle(false);

// 			$('.favoriteMe').off('click');
// 			$('.favoriteMe').on('click', function(){
// 				favoriteFunc($(this));
// 			});

// 			$('.placeDetailsBtn').off('click');
// 			$('.placeDetailsBtn').on('click', function(){
// 				$('#resultTable').find('.table-warning').each(function(index){
// 					$(this).removeClass('table-warning');
// 				});
// 				retrievePlaceDetailsFor($(this).data('placeid'));
// 				$(this).parents('tr').addClass('table-warning');
// 				$('#placeDetailsTab').trigger('click');
// 			});
// 			$('#detailsBtn').prop('disabled', true);
// 			$('#detailsBtn').off('click');
// 			$('#detailsBtn').on('click', function() {
// 				$('#placesResultsSection').addClass('hideElement');
// 				$('#paginationPane').addClass('hideElement');
// 				$('#pageDetailsBlock').removeClass('hideElement');
// 			});
// 		} else {
// 			detailsBtnToggle(true);
// 			var noRecordsFound = '<div class="alert alert-warning alert-sm">No Records.</div>';
// 			$('#resultsSection').html(noRecordsFound);
// 		}
// 		displayPaginationPane(true);
// 	}

// 	function displayPage(pageView) {
// 		current_page_in_view = pageView;
// 		var previousPage = (current_page_in_view-1);
// 		if(currentNearbyPlaces[current_page_in_view]) {
// 			performPagination();
// 		} else {
// 			if(previousPage > 0 ){
// 				getNextData(currentNearbyPlaces[previousPage].next_page_token);
// 			}
// 		}

// 	}

// 	$('#backSearch').off('click');
// 	$('#backSearch').on('click', function() {
// 		if($('#resultsTab').hasClass('active')) {
// 			detailsBtnToggle(true);
// 			$('#placesResultsSection').removeClass('hideElement');
// 			$('#paginationPane').removeClass('hideElement');
// 			$('#pageDetailsBlock').addClass('hideElement');
// 			$('#resultsTab').trigger('click');
// 			performPagination(true);
// 		} else if($('#favouritesTab').hasClass('active')) {
// 			detailsBtnToggle(true);
// 			$('#pageDetailsBlock').addClass('hideElement');
// 			$('#placesResultsSection').removeClass('hideElement');
// 			$('#favouritesTab').trigger('click');
// 		}
		
// 	});

// 	function performPagination() {
// 		if(current_page_in_view == 1) {
// 			$( '.page2,.page3' ).addClass('hideElement');
// 			$( '.page1' ).removeClass('hideElement');
// 		} else if(current_page_in_view == 2) {
// 			$( '.page1,.page3' ).addClass('hideElement');
// 			$( '.page2' ).removeClass('hideElement');
// 		} else if(current_page_in_view == 3) {
// 			$( '.page1,.page2' ).addClass('hideElement');
// 			$( '.page3' ).removeClass('hideElement');
// 		}
// 		displayPaginationPane(true);
// 	}

// 	function displayPaginationPane(flag) {
// 		if(flag == true) {
// 			$('#displayPaginationPane').removeClass('hideElement');
// 			if(currentNearbyPlaces[current_result_count]){
// 				if(currentNearbyPlaces[current_page_in_view] && currentNearbyPlaces[current_page_in_view].next_page_token) {
// 					generatePaginationTabs(true); 
// 				}
// 				else {
// 					generatePaginationTabs(false);	
// 				}
// 			} else {
// 				generatePaginationTabs(false);
// 			}
// 		} else {
// 			$('#previousBtnPagination').addClass('hideElement');
// 			$('#nextBtnPagination').addClass('hideElement');
// 		}
		
// 	}

// 	function generatePaginationTabs(next) {
// 		$('#nextBtnPagination').off('click');
// 		$('#previousBtnPagination').off('click');
// 		if(next) {
// 			$('#nextBtnPagination').off('click');
// 			$('#paginationPane').removeClass('hideElement');	
// 			$('#nextBtnPagination').removeClass('hideElement');
// 			$('#nextBtnPagination').on('click',function (){
// 				displayPage(current_page_in_view+1);
// 			});
// 		}  else {
// 			$('#nextBtnPagination').addClass('hideElement');
// 		}
// 		if(current_page_in_view != 1) {
// 			$('#previousBtnPagination').removeClass('hideElement');
// 			$('#previousBtnPagination').on('click', function(){
// 				displayPage(current_page_in_view-1);
// 			});
// 		} else {
// 			$('#previousBtnPagination').addClass('hideElement');
// 		}

// 		//checking if placeDetails are up in view

// 	}

// 	function retrievePlaceDetailsFor(place_Id) {
// 		debugger
// 		$('#pageDetailsBlock').removeClass('hideElement');
// 		$('#placeDetailsDiv').removeClass('hideElement');
// 		$('#detailsBtn').prop('disabled', false);
// 		displayPaginationPane(false);

// 		function populatePhotos() {
// 					var gridPhotos = {
// 						col1Photos : '',
// 						col2Photos : '',
// 						col3Photos : '',
// 						col4Photos : ''
// 					}
// 					var count = 1;
// 					var placePhotos = place.photos;
// 					$('#imgGridcol1').html('');
// 					$('#imgGridcol2').html('');
// 					$('#imgGridcol3').html('');
// 					$('#imgGridcol4').html('');
// 					if(placePhotos && (placePhotos.length > 0)) {
// 						$('#noPhotos').html('');
// 						for(var x = 0; x < placePhotos.length; x++) {
// 							var currentPlace = placePhotos[x];
// 							var currentPlacePhoto  = currentPlace.getUrl({'maxWidth': currentPlace.width});
// 							var columnData = 'col'+count+'Photos';
// 							gridPhotos[columnData] += '<a href="'+currentPlace.getUrl({'maxWidth': currentPlace.width})+'" target="_blank"><img src="'+currentPlacePhoto+'" class = "img-thumbnail" style="width:100%"/></a>';
// 							if(count==4) {
// 								count = 0;
// 							}
// 							count++;
// 						}
// 						$('#imgGridcol1').html(gridPhotos.col1Photos);
// 						$('#imgGridcol2').html(gridPhotos.col2Photos);
// 						$('#imgGridcol3').html(gridPhotos.col3Photos);
// 						$('#imgGridcol4').html(gridPhotos.col4Photos);
// 					} else {
// 						$('#noPhotos').html(noRecordsFoundBanner());
// 					}
// 				}

// 		var defaultPlaceReviews = place.reviews? place.reviews : "";
// 		var placeReviews = jQuery.extend([], place.reviews);
// 		var yelpRetrievedReviews;
// 		var yelpSortedReviews;
// 			$("#reviewsOptionsList button").off('click');
// 			$("#reviewsOptionsList button").on('click', function(){
// 				var selText = $(this).text();
// 				$('#dropdownMenuButton').html(selText);
// 				if(selText == 'Yelp Reviews') {
// 					var placeName = place.name;
// 					var addressDetails = place.adr_address.split(',');
// 					addressDetails = jQuery.grep(addressDetails, function( a ) {
// 						return a.indexOf('street-address') >= 0 || a.indexOf('locality') >= 0 || a.indexOf('region') >= 0;
// 					});
// 					var addr1 = "";
// 					var city = "";
// 					var state = "";
// 					$.each(addressDetails, function( index, value ) {
// 						if(value.indexOf('street-address') >= 0) {
// 							addr1 = $(value).text();
// 						} else if (value.indexOf('locality') >= 0 ) {
// 							city = $(value).text();
// 						} else if (value.indexOf('region') >= 0 ) {
// 							var stateDetails = $(value).text().trim().split(' ');
// 							state = stateDetails[0];
// 						}
// 					});
// 					var myFields = {
// 						'placeName' : placeName,
// 						'addr1' : addr1,
// 						'city' : city,
// 						'state' : state,
// 						'latitude' : place.geometry.location.lat,
// 						'longitude' : place.geometry.location.lng
// 					}
// 					ajaxRestCall('/getYelpReviews', 'GET', myFields, displayYelpReviews);
// 				} else {
// 					populateReviews(defaultPlaceReviews);
// 				}
// 			});

// 			function displayYelpReviews(yelpReviews) {
// 				yelpRetrievedReviews = yelpReviews;
// 				if(yelpReviews == null) {
// 					yelpReviews = "";
// 				}
// 				yelpSortedReviews = jQuery.extend([], yelpRetrievedReviews);
// 				var selText = $('#reviewsSorting').html();
// 				sortAndPopulateReviews(selText);
// 			}

// 			$("#reviewsSortingMenu button").off('click');
// 			$("#reviewsSortingMenu button").on('click', function(){
// 				var selText = $(this).text();
// 				sortAndPopulateReviews(selText);
// 				$('#reviewsSorting').html(selText);
				
// 			});

// 			function sortAndPopulateReviews(selText) {
// 				if(selText == 'Highest Rating') {
// 					placeReviews.sort(function(a, b) {
// 						return  b['rating'] - a['rating'];
// 					});
// 					if(yelpSortedReviews) {
// 						yelpSortedReviews.sort(function(a,b){
// 							return b['rating'] - a['rating'];
// 						});
// 					}
// 				} else if(selText == 'Lowest Rating') {
// 					placeReviews.sort(function(a, b) {
// 						return a['rating'] - b['rating'];
// 					});
// 					if(yelpSortedReviews) {
// 						yelpSortedReviews.sort(function(a,b){
// 							return a['rating'] - b['rating'];
// 						});
// 					}

// 				} else if(selText == 'Most Recent') {
// 					placeReviews.sort(function(a, b) {
// 						return  b['time'] - a['time'];
// 					});
// 					if(yelpSortedReviews) {
// 						yelpSortedReviews.sort(function(a,b){
// 							var time1 = new Date(a['time_created']);
// 							var time2 = new Date(b['time_created']);
// 							return time2.getTime() - time1.getTime();
// 						});
// 					}
// 				} else if(selText == 'Least Recent') {
// 					placeReviews.sort(function(a, b) {
// 						return a['time'] - b['time'];
// 					});
// 					if(yelpSortedReviews) {
// 						yelpSortedReviews.sort(function(a,b){
// 							var time1 = new Date(a['time_created']);
// 							var time2 = new Date(b['time_created']);
// 							return time1.getTime() - time2.getTime();
// 						});
// 					}
// 				} else if(selText == 'Default Order') {
// 					placeReviews = defaultPlaceReviews;
// 					yelpSortedReviews = yelpRetrievedReviews;
// 				} 

// 				if($('#dropdownMenuButton').html() == 'Yelp Reviews') {
// 					if(yelpSortedReviews == null) {
// 						yelpSortedReviews = "";
// 					}
// 					populateReviews(yelpSortedReviews);
// 				} else {
// 					populateReviews(placeReviews);	
// 				}
// 			}

// 			function populateReviews(reviews) {
// 				$('#reviewsDataSection').html('');
// 				if(reviews == "") {
// 					var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
// 					$('#reviewsDataSection').html(errString);
// 				} else if(reviews == null) {
// 					var errString  = "<span class='placeReview fullWidth'>"+ failedToConnect() + "</span>";
// 					$('#reviewsDataSection').html(errString);
// 				} else if((reviews && reviews.length < 1)){
// 					var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
// 					$('#reviewsDataSection').html(errString);
// 				} else {
// 					var reviewsData = '<div class="col-12 placeReview">'; 
// 					for(var x = 0; x < reviews.length; x++) {
// 						reviewsData += '<div class="reviewDiv rounded"><div class="top-margin-2p headerText">';
// 						var currentReview = reviews[x];
// 						if(currentReview.profile_photo_url || (currentReview.user && currentReview.user.image_url)) {
// 							if(currentReview.user && currentReview.user.image_url) {
// 								var usrString ='<img id="reviewersPhoto" src="' + (currentReview.user.image_url) + '" height="40px" width="40px" class="rounded-image"/>'; 
// 								if(currentReview.url) {
// 									usrString = '<a href="'+currentReview.url+'" target="_blank">' + usrString + '</a>';
// 								}
// 								reviewsData += usrString;
// 							} else {
// 								var usrString = '<img id="reviewersPhoto" src="' + (currentReview.profile_photo_url) + '" height="40px" width="40px" class="rounded-image"/>'; //check for blank Images
// 								if(currentReview.author_url) {
// 									usrString = '<a href="'+currentReview.author_url+'" target="_blank">' + usrString + '</a>';
// 								}
// 								reviewsData += usrString;
// 							}
// 						}
// 						reviewsData += '</div><div class="margin-top1P">';
// 						reviewsData += '<div class="row"><div class="col-12">';
// 						//author_url = GOOGLE .url yelp
// 						if(currentReview.author_url ||currentReview.url) {
// 							reviewsData += '<a href="'+(currentReview.author_url ||currentReview.url)+'" target="_blank">' + (currentReview.author_name || currentReview.user.name) + '</a>';	
// 						} else {
// 							reviewsData += (currentReview.author_name || currentReview.user.name);
// 						}

						
// 						reviewsData += '</div></div>';
// 						reviewsData += '<div class="row"><div class="col-12">';
// 						reviewsData += '<span id="ratings_'+x+'" class="reviewRatings"></span><span class="color-gray">' + (currentReview.time_created || moment.unix(currentReview.time).format("DD-MM-YYYY HH:mm:ss")) + '</span>';
// 						reviewsData += '</div></div>';//3 O
// 						reviewsData += '<div class="row"><div class="col-12">';//2O
// 						reviewsData += currentReview.text;
// 						reviewsData += '</div></div></div></div>';//5C

// 					}
// 					reviewsData += '</div>';
// 					$('#reviewsDataSection').html(reviewsData);
// 					for(var x = 0; x < reviews.length; x++) {
// 						$("#ratings_"+x).rateYo({
// 							rating: reviews[x].rating,
// 							maxValue : Math.ceil(reviews[x].rating),
// 							numStars : Math.ceil(reviews[x].rating),
// 							starWidth : "12px",
// 							readOnly: true
// 						});
// 					}
// 				}

// 			}

// 			populateReviews(defaultPlaceReviews);

// 			$('#reviewsSorting').off('')


// 			populatePhotos();




// 		var service = new google.maps.places.PlacesService(document.getElementById('mapsForGoogle'));

// 		service.getDetails({
// 			placeId: place_Id
// 		}, function(place, status) {
// 			if (status === google.maps.places.PlacesServiceStatus.OK) {
// 				var stingifiedPlaces = JSON.stringify(place)
// 				displayPlaceDetailsDiv(stingifiedPlaces);
// 				$('#sourceLocationLat').val('');
// 				$('#sourceLocationLng').val('');
// 				$('#sourceLocation').val(searchClicked);
// 				var directionsDisplay = new google.maps.DirectionsRenderer;
// 				var directionsService = new google.maps.DirectionsService;
// 				// function populatePhotos() {
// 				// 	var gridPhotos = {
// 				// 		col1Photos : '',
// 				// 		col2Photos : '',
// 				// 		col3Photos : '',
// 				// 		col4Photos : ''
// 				// 	}
// 				// 	var count = 1;
// 				// 	var placePhotos = place.photos;
// 				// 	$('#imgGridcol1').html('');
// 				// 	$('#imgGridcol2').html('');
// 				// 	$('#imgGridcol3').html('');
// 				// 	$('#imgGridcol4').html('');
// 				// 	if(placePhotos && (placePhotos.length > 0)) {
// 				// 		$('#noPhotos').html('');
// 				// 		for(var x = 0; x < placePhotos.length; x++) {
// 				// 			var currentPlace = placePhotos[x];
// 				// 			var currentPlacePhoto  = currentPlace.getUrl({'maxWidth': currentPlace.width});
// 				// 			var columnData = 'col'+count+'Photos';
// 				// 			gridPhotos[columnData] += '<a href="'+currentPlace.getUrl({'maxWidth': currentPlace.width})+'" target="_blank"><img src="'+currentPlacePhoto+'" class = "img-thumbnail" style="width:100%"/></a>';
// 				// 			if(count==4) {
// 				// 				count = 0;
// 				// 			}
// 				// 			count++;
// 				// 		}
// 				// 		$('#imgGridcol1').html(gridPhotos.col1Photos);
// 				// 		$('#imgGridcol2').html(gridPhotos.col2Photos);
// 				// 		$('#imgGridcol3').html(gridPhotos.col3Photos);
// 				// 		$('#imgGridcol4').html(gridPhotos.col4Photos);
// 				// 	} else {
// 				// 		$('#noPhotos').html(noRecordsFoundBanner());
// 				// 	}
// 				// }
// 				var directionsDisplay = new google.maps.DirectionsRenderer;// EXTRA
// 				var directionsService = new google.maps.DirectionsService;// EXTRA
// 				function loadMapArena(directionsDisplay, directionsService) {
// 					var coordinates = JSON.parse(stingifiedPlaces);
// 					loadMap(directionsDisplay, directionsService, coordinates.geometry.location.lat, coordinates.geometry.location.lng);
// 				}
// 				// var defaultPlaceReviews = place.reviews? place.reviews : "";
// 				// var placeReviews = jQuery.extend([], place.reviews);
// 				// var yelpRetrievedReviews;
// 				// var yelpSortedReviews;
// 				// $("#reviewsOptionsList button").off('click');
// 				// $("#reviewsOptionsList button").on('click', function(){
// 				// 	var selText = $(this).text();
// 				// 	$('#dropdownMenuButton').html(selText);
// 				// 	if(selText == 'Yelp Reviews') {
// 				// 		var placeName = place.name;
// 				// 		var addressDetails = place.adr_address.split(',');
// 				// 		addressDetails = jQuery.grep(addressDetails, function( a ) {
// 				// 			return a.indexOf('street-address') >= 0 || a.indexOf('locality') >= 0 || a.indexOf('region') >= 0;
// 				// 		});
// 				// 		var addr1 = "";
// 				// 		var city = "";
// 				// 		var state = "";
// 				// 		$.each(addressDetails, function( index, value ) {
// 				// 			if(value.indexOf('street-address') >= 0) {
// 				// 				addr1 = $(value).text();
// 				// 			} else if (value.indexOf('locality') >= 0 ) {
// 				// 				city = $(value).text();
// 				// 			} else if (value.indexOf('region') >= 0 ) {
// 				// 				var stateDetails = $(value).text().trim().split(' ');
// 				// 				state = stateDetails[0];
// 				// 			}
// 				// 		});
// 				// 		var myFields = {
// 				// 			'placeName' : placeName,
// 				// 			'addr1' : addr1,
// 				// 			'city' : city,
// 				// 			'state' : state,
// 				// 			'latitude' : place.geometry.location.lat,
// 				// 			'longitude' : place.geometry.location.lng
// 				// 		}
// 				// 		ajaxRestCall('/getYelpReviews', 'GET', myFields, displayYelpReviews);
// 				// 	} else {
// 				// 		populateReviews(defaultPlaceReviews);
// 				// 	}
// 				// });

// 				// function displayYelpReviews(yelpReviews) {
// 				// 	yelpRetrievedReviews = yelpReviews;
// 				// 	if(yelpReviews == null) {
// 				// 		yelpReviews = "";
// 				// 	}
// 				// 	yelpSortedReviews = jQuery.extend([], yelpRetrievedReviews);
// 				// 	var selText = $('#reviewsSorting').html();
// 				// 	sortAndPopulateReviews(selText);
// 				// }

// 				// $("#reviewsSortingMenu button").off('click');
// 				// $("#reviewsSortingMenu button").on('click', function(){
// 				// 	var selText = $(this).text();
// 				// 	sortAndPopulateReviews(selText);
// 				// 	$('#reviewsSorting').html(selText);
					
// 				// });

// 				// function sortAndPopulateReviews(selText) {
// 				// 	if(selText == 'Highest Rating') {
// 				// 		placeReviews.sort(function(a, b) {
// 				// 			return  b['rating'] - a['rating'];
// 				// 		});
// 				// 		if(yelpSortedReviews) {
// 				// 			yelpSortedReviews.sort(function(a,b){
// 				// 				return b['rating'] - a['rating'];
// 				// 			});
// 				// 		}
// 				// 	} else if(selText == 'Lowest Rating') {
// 				// 		placeReviews.sort(function(a, b) {
// 				// 			return a['rating'] - b['rating'];
// 				// 		});
// 				// 		if(yelpSortedReviews) {
// 				// 			yelpSortedReviews.sort(function(a,b){
// 				// 				return a['rating'] - b['rating'];
// 				// 			});
// 				// 		}

// 				// 	} else if(selText == 'Most Recent') {
// 				// 		placeReviews.sort(function(a, b) {
// 				// 			return  b['time'] - a['time'];
// 				// 		});
// 				// 		if(yelpSortedReviews) {
// 				// 			yelpSortedReviews.sort(function(a,b){
// 				// 				var time1 = new Date(a['time_created']);
// 				// 				var time2 = new Date(b['time_created']);
// 				// 				return time2.getTime() - time1.getTime();
// 				// 			});
// 				// 		}
// 				// 	} else if(selText == 'Least Recent') {
// 				// 		placeReviews.sort(function(a, b) {
// 				// 			return a['time'] - b['time'];
// 				// 		});
// 				// 		if(yelpSortedReviews) {
// 				// 			yelpSortedReviews.sort(function(a,b){
// 				// 				var time1 = new Date(a['time_created']);
// 				// 				var time2 = new Date(b['time_created']);
// 				// 				return time1.getTime() - time2.getTime();
// 				// 			});
// 				// 		}
// 				// 	} else if(selText == 'Default Order') {
// 				// 		placeReviews = defaultPlaceReviews;
// 				// 		yelpSortedReviews = yelpRetrievedReviews;
// 				// 	} 

// 				// 	if($('#dropdownMenuButton').html() == 'Yelp Reviews') {
// 				// 		if(yelpSortedReviews == null) {
// 				// 			yelpSortedReviews = "";
// 				// 		}
// 				// 		populateReviews(yelpSortedReviews);
// 				// 	} else {
// 				// 		populateReviews(placeReviews);	
// 				// 	}
// 				// }

// 				// function populateReviews(reviews) {
// 				// 	$('#reviewsDataSection').html('');
// 				// 	if(reviews == "") {
// 				// 		var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
// 				// 		$('#reviewsDataSection').html(errString);
// 				// 	} else if(reviews == null) {
// 				// 		var errString  = "<span class='placeReview fullWidth'>"+ failedToConnect() + "</span>";
// 				// 		$('#reviewsDataSection').html(errString);
// 				// 	} else if((reviews && reviews.length < 1)){
// 				// 		var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
// 				// 		$('#reviewsDataSection').html(errString);
// 				// 	} else {
// 				// 		var reviewsData = '<div class="col-12 placeReview">'; 
// 				// 		for(var x = 0; x < reviews.length; x++) {
// 				// 			reviewsData += '<div class="reviewDiv rounded"><div class="top-margin-2p headerText">';
// 				// 			var currentReview = reviews[x];
// 				// 			if(currentReview.profile_photo_url || (currentReview.user && currentReview.user.image_url)) {
// 				// 				if(currentReview.user && currentReview.user.image_url) {
// 				// 					var usrString ='<img id="reviewersPhoto" src="' + (currentReview.user.image_url) + '" height="40px" width="40px" class="rounded-image"/>'; 
// 				// 					if(currentReview.url) {
// 				// 						usrString = '<a href="'+currentReview.url+'" target="_blank">' + usrString + '</a>';
// 				// 					}
// 				// 					reviewsData += usrString;
// 				// 				} else {
// 				// 					var usrString = '<img id="reviewersPhoto" src="' + (currentReview.profile_photo_url) + '" height="40px" width="40px" class="rounded-image"/>'; //check for blank Images
// 				// 					if(currentReview.author_url) {
// 				// 						usrString = '<a href="'+currentReview.author_url+'" target="_blank">' + usrString + '</a>';
// 				// 					}
// 				// 					reviewsData += usrString;
// 				// 				}
// 				// 			}
// 				// 			reviewsData += '</div><div class="margin-top1P">';
// 				// 			reviewsData += '<div class="row"><div class="col-12">';
// 				// 			//author_url = GOOGLE .url yelp
// 				// 			if(currentReview.author_url ||currentReview.url) {
// 				// 				reviewsData += '<a href="'+(currentReview.author_url ||currentReview.url)+'" target="_blank">' + (currentReview.author_name || currentReview.user.name) + '</a>';	
// 				// 			} else {
// 				// 				reviewsData += (currentReview.author_name || currentReview.user.name);
// 				// 			}

							
// 				// 			reviewsData += '</div></div>';
// 				// 			reviewsData += '<div class="row"><div class="col-12">';
// 				// 			reviewsData += '<span id="ratings_'+x+'" class="reviewRatings"></span><span class="color-gray">' + (currentReview.time_created || moment.unix(currentReview.time).format("DD-MM-YYYY HH:mm:ss")) + '</span>';
// 				// 			reviewsData += '</div></div>';//3 O
// 				// 			reviewsData += '<div class="row"><div class="col-12">';//2O
// 				// 			reviewsData += currentReview.text;
// 				// 			reviewsData += '</div></div></div></div>';//5C

// 				// 		}
// 				// 		reviewsData += '</div>';
// 				// 		$('#reviewsDataSection').html(reviewsData);
// 				// 		for(var x = 0; x < reviews.length; x++) {
// 				// 			$("#ratings_"+x).rateYo({
// 				// 				rating: reviews[x].rating,
// 				// 				maxValue : Math.ceil(reviews[x].rating),
// 				// 				numStars : Math.ceil(reviews[x].rating),
// 				// 				starWidth : "12px",
// 				// 				readOnly: true
// 				// 			});
// 				// 		}
// 				// 	}

// 				// }

// 				// populateReviews(defaultPlaceReviews);

// 				// $('#reviewsSorting').off('')

// 				$('#getDirectionsOnMap').off('click');
// 				$('#getDirectionsOnMap').on('click', function(){
// 					setDirectionsOnTheMap(directionsDisplay, directionsService);
// 				});
// 				$('#searchMap').off('click');
// 				$('#searchMap').on('click', function() {
// 					loadMapArena(directionsDisplay, directionsService);
// 					if($('#directionsClicked').val() && $('#directionsClicked').val() == 'true') {
// 						$('#getDirectionsOnMap').trigger('click');
// 					}
// 					$('#pegman').removeClass('hideElement');
// 					$('#searchMap').addClass('hideElement');
// 				});

// 				$('#pegman').off('click');
// 				$('#pegman').on('click' , function(){
// 					startMapView($('#destLocationLat').val(), $('#destLocationLng').val());
// 					$('#searchMap').removeClass('hideElement');
// 					$('#pegman').addClass('hideElement');
// 				});	
// 				populatePhotos();
// 				$('#searchMap').trigger('click');
// 				loadMapArena(directionsDisplay, directionsService);

// 			}

// 		});
// }

// function favoriteFunc(element) {
// 	element = $(element).first()[0].firstChild;
// 	if($(element).hasClass('yellowColored')) {
// 		$(element).removeClass('yellowColored');
// 		$(element).removeClass('fa-star');
// 		$(element).addClass('fa-star-o');
// 		var localStoredData = getLocalStorageData();
// 		if(localStoredData) {
// 			localStoredData = JSON.parse(localStoredData);
// 			if(localStoredData[0][$(element).data('placeid')]) {
// 				delete localStoredData[0][$(element).data('placeid')];
// 				if($('#currentPlaceId').val() == $(element).data('placeid')) {
// 					$('#currentFavStar').addClass('fa-star-o');
// 					$('#currentFavStar').removeClass('fa-star');
// 					$('#currentFavStar').removeClass('yellowColored');
// 				}
// 				localStoredData = JSON.stringify(localStoredData);
// 				saveLocalStorageData(localStoredData);
// 			}
// 		}

// 	} else if(!$(element).hasClass('yellowColored')) {
// 		$(element).addClass('yellowColored');
// 		$(element).removeClass('fa-star-o');
// 		$(element).addClass('fa-star');
// 		var localStoredData = getLocalStorageData();
// 		var favoritePlace = {
// 			'placeid' : $(element).data('placeid'),
// 			'addr' : $(element).data('addr'),
// 			'category' : $(element).data('category'),
// 			'placename' : $(element).data('placename')
// 		}
// 		if(localStoredData && localStoredData != "") {
// 			localStoredData = JSON.parse(localStoredData);
// 			localStoredData[0][$(element).data('placeid')] = favoritePlace;
// 			localStoredData = JSON.stringify(localStoredData);
// 			saveLocalStorageData(localStoredData);
// 		} else {
// 			var favoritePlaces = [];
// 			var obj = {};
// 			obj[$(element).data('placeid')] = favoritePlace;
// 			favoritePlaces.push(obj);
// 			localStoredData = JSON.stringify(favoritePlaces);
// 			saveLocalStorageData(localStoredData);
// 		}
// 	}
// }

// function displayPlaceDetailsDiv(placeDetails) {
// 	var tweetString='';
// 	tweetString = "Check out ";
// 	var weekOpeningHours = {};
// 	$('#travelMode').val('DRIVING');
// 	$('#directionsClicked').val(null);
// 	$('#directionsPanel').html('');
// 	$('#placesResultsSection').addClass('hideElement');
// 	placeDetails = JSON.parse(placeDetails);
// 	var detailsTableData = '<tbody>';
// 	$('#currentlySelectedPlace').html(placeDetails.name);
// 	tweetString += placeDetails.name;
// 	if($('#fav_'+ placeDetails.place_id).hasClass('yellowColored')) {
// 		$('#currentFavStar').addClass('yellowColored');
// 		$('#currentFavStar').addClass('fa-star');
// 		$('#currentFavStar').removeClass('fa-star-o');
// 	} else {
// 		$('#currentFavStar').removeClass('yellowColored');
// 		$('#currentFavStar').removeClass('fa-star');
// 		$('#currentFavStar').addClass('fa-star-o');
// 	}
// 	if(placeDetails.formatted_address) {
// 		detailsTableData += '<tr><input type="hidden" id="currentPlaceName" name="currentPlaceName" value="'+placeDetails.name+'"> <input type="hidden" id="currentPlaceAddr" name="currentPlaceAddr" value="'+placeDetails.formatted_address+'"><input type="hidden" id="currentPlaceId" name="currentPlaceId" value="'+placeDetails.place_id+'"><input type="hidden" id="currentCategory" name="currentCategory" value="'+placeDetails.icon+'"><th>Address</th><td class="noWrap">' + placeDetails.formatted_address + '</td</tr>';
// 		$('#destinationLocation').val(placeDetails.formatted_address);
// 		tweetString += ' located at ' + placeDetails.formatted_address + '.';
// 		$('#destLocationLat').val(placeDetails.geometry.location.lat);
// 		$('#destLocationLng').val(placeDetails.geometry.location.lng);
// 	}
// 	if(placeDetails.international_phone_number) {
// 		detailsTableData += '<tr><th>Phone Number</th><td class="noWrap">' + placeDetails.international_phone_number + '</td</tr>';	
// 	}
// 	if(placeDetails.price_level) {
// 		var pricing = parseInt(placeDetails.price_level);
// 		detailsTableData += '<tr><th>Price Level</th><td class="noWrap">';
// 		for(var m = 0; m < pricing; m++) {
// 			detailsTableData += '$';
// 		}
// 		detailsTableData +=  '</td</tr>';
// 	}
// 	if(placeDetails.rating) {
// 		detailsTableData += '<tr><th>Rating</th><td class="noWrap">' + placeDetails.rating;
// 		detailsTableData += ' <span id="placeRating"></span></td</tr>';
// 	}
// 	if(placeDetails.url) {
// 		detailsTableData += '<tr><th>Google Page</th><td class="noWrap"><a href="'+placeDetails.url+'" target="_blank"> ' + placeDetails.url + '</a></td</tr>';	
// 	}
// 	if(placeDetails.website) {
// 		detailsTableData += '<tr><th>Website</th><td class="noWrap"><a href="'+placeDetails.website+'" target="_blank"> ' +placeDetails.website + '</td</tr>';
// 	}
// 	if(placeDetails.opening_hours) {

// 		detailsTableData += '<tr><th>Hours</th><td class="noWrap">';

// 		if(placeDetails.opening_hours.isOpen) {
// 			var openingHours = placeDetails.opening_hours.weekday_text;
// 			var currentDate = new Date();
// 			var currentDay = currentDate.getDay();
// 			var currentDaysHours = openingHours[currentDay-1];
// 			var timeToDisplay = currentDaysHours.replace('""',"").split(': ')[1];
// 			if(timeToDisplay == 'Open 24 hours') {
// 				detailsTableData += timeToDisplay ;
// 			} else {
// 				detailsTableData += 'Open now: ' + timeToDisplay ;
// 			}
			
// 		} else {
// 			detailsTableData += 'Closed ';
// 		}
// 		detailsTableData += '<a href="" data-toggle="modal" data-target="#myModal"> Daily open hours</a></td</tr>';
// 		$('#modal-header').html('Open hours');
// 		$('#modal-body').html(populateModalTable(placeDetails.opening_hours ,placeDetails.utc_offset_minutes));
// 	}
// 	detailsTableData += '</tbody>';
// 	$('#placeDetailsDiv').html(detailsTableData);
// 	$("#placeRating").rateYo({
// 		rating:  placeDetails.rating,
// 		starWidth : "12px",
// 		readOnly: true
// 	});
// 	tweetString += ' Website: ';
// 	tweetString = encodeURIComponent(tweetString);
// 	if(placeDetails.website) {
// 		tweetString += '&url='+placeDetails.website;
// 	} else if (placeDetails.url) {
// 		tweetString += '&url='+placeDetails.url;
// 	}
// 	tweetString = 'https://twitter.com/intent/tweet?hashtags=TravelAndEntertainmentSearch&text='+tweetString;
// 	$('#tweetBtn').off('click');

// 	$('#tweetBtn').on('click', function(){
		
// 		window.open(tweetString,'','height=550px,width=420px,left=10,top=10,,scrollbars=yes,menubar=no');
// 	});
// 	if(placeDetails.rating) {
// 		var starPercentage = (placeDetails.rating / 5) * 100;
// 		var starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
// 		$('.stars-inner').css('width', starPercentageRounded);
// 	}

// 	function populateModalTable(weekOpeningHours, offset) {
// 		var n = -1;
// 		if(weekOpeningHours.isOpen) {
// 			n = moment().day()-1;
// 		}
// 		weekOpeningHours = weekOpeningHours.weekday_text;
// 		var hoursDifference = (offset/60 - (moment().utcOffset()/60));
// 		var currentDateWithOffset = moment();
// 		currentDateWithOffset.add(hoursDifference, 'hours');
// 		var startDay = (currentDateWithOffset.day());
// 		var table = '<table class="table"><tbody>';
// 		if(n == -1) {
// 			n = startDay - 1;
// 		}
// 		var x = n;
// 		table += '<tr><td class="noWrap"><b>'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</b></td><td class="noWrap"><b>'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</b></td></tr>';
// 		x++;
// 		while(x <= 6) {
// 			table += '<tr><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</td><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</td></tr>';
// 			x++;
// 		}
// 		x = 0;
// 		while(x < n) {
// 			table += '<tr><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</td><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</td></tr>';
// 			x++;	
// 		}
// 		return table;
// 	}


// 	function performPlaceTimeCalc(opening_hours, offset) {
// 		var weekday_sch = opening_hours.weekday_text;
// 		weekOpeningHours = processWeekSchedule(weekday_sch, offset);
// 		if(opening_hours.isOpen) {
// 			var timeRange = 'Open now : ' + weekOpeningHours[moment(new Date()).format('dddd')];
// 			var day = moment();
// 			return timeRange;
// 		} else {
// 			var timeRange = 'Closed';
// 			return timeRange;
// 		}
// 	}

// 	function processWeekSchedule(weekday_schedule, offset) {
// 		var weekSchedule = {};
// 		for(var x = 0; x < weekday_schedule.length; x++) {
// 			var currentDaySchedule = weekday_schedule[x];
// 			currentDaySchedule = currentDaySchedule.replace('"', '');
// 			var day_value = currentDaySchedule.split(': ');				
// 			var timings = day_value[1].trim();


// 			var offset = moment().utc()._offset;
// 			if(offset > 0) {
// 				var currentPlaceDate = moment(new Date()).format('YYYY/MM/DD');
// 				var currentTiming = timings.split('–');
// 				currentTiming[0] = moment(currentTiming[0], 'h:mm A').format('HH:mm');
// 				currentTiming[1] = moment(currentTiming[1], 'h:mm A').format('HH:mm');
// 				var offset = moment().utc()._offset;
// 				currentTiming[0] = moment.utc(currentPlaceDate+ ' ' + currentTiming[0]).utcOffset(''+offset+'').format('h:mm A');
// 				currentTiming[1] = moment.utc(currentPlaceDate+ ' ' + currentTiming[0]).utcOffset(''+offset+'').format('h:mm A');
// 				weekSchedule[day_value[0]] = currentTiming[0] +''+ currentTiming[1];

// 			} else {
// 				weekSchedule[day_value[0]] = day_value[1].trim();
// 			}
// 		}
// 		return weekSchedule;
// 	}
// }

// $('#resultsTab').off('click');
// $('#resultsTab').on('click', function() {
// 	$('#resultsTab').addClass('active');
// 	$('#favouritesTab').removeClass('active');
// 	$('#favouritesTable').addClass('hideElement');
// 	$('#resultTable').removeClass('hideElement');
// 	$('#paginationPane').removeClass('hideElement');
// 	$('#placesResultsSection').removeClass('hideElement');
// 	$('#pageDetailsBlock').addClass('hideElement');
// 	$('#paginationPane').removeClass('hideElement');
// 	displayPaginationPane(true);
// 	if((($('#resultTable').find('.alert-warning').length > 0) || ($('#resultTable').find('.alert-danger').length > 0)) || ($('#resultTable').html().trim() == "")) {
// 		detailsBtnToggle(true);
// 	} else {
// 		detailsBtnToggle(false);
// 		if($('#currentPlaceId').val() && ($('#currentPlaceId').val() != "")) {
// 			$('#detailsBtn').prop('disabled', false);
// 			$('#detailsBtn').off('click');
// 			$('#detailsBtn').on('click', function() {
// 				$('#placesResultsSection').addClass('hideElement');
// 				$('#paginationPane').addClass('hideElement');
// 				$('#pageDetailsBlock').removeClass('hideElement');
// 			});
// 		} else {
// 			$('#detailsBtn').prop('disabled', true);
// 		}
// 		//If Enabled/Disabled
// 	}
// });

// $('#favouritesTab').off('click');
// $('#favouritesTab').on('click', function() {
// 	detailsBtnToggle(true);
// 	$('#resultsTab').removeClass('active');
// 	$('#favouritesTab').addClass('active');
// 	$('#placesResultsSection').removeClass('hideElement');
// 	$('#pageDetailsBlock').addClass('hideElement');
// 	$('#favouritesTable').removeClass('hideElement');
// 	$('#paginationPane').addClass('hideElement');
// 	$('#resultTable').addClass('hideElement');

// 	var favouritePlacesSaved = getLocalStorageData();
// 	if(favouritePlacesSaved) {
// 		favouritePlacesSaved = JSON.parse(favouritePlacesSaved);
// 		if(favouritePlacesSaved && favouritePlacesSaved != "" && favouritePlacesSaved.length > 0) {
// 			var placesToDisplay = favouritePlacesSaved[0];
// 			if(Object.keys(placesToDisplay).length > 0) {
// 				favPage = 0;
// 				displayFavouritesTable(placesToDisplay , favPage);
// 				detailsBtnToggle(false);
// 				if($('#currentPlaceId').val() && ($('#currentPlaceId').val() != "")) {
// 					$('#detailsBtn').prop('disabled', false);
// 					$('#detailsBtn').off('click');
// 					$('#detailsBtn').on('click', function() {
// 						$('#placesResultsSection').addClass('hideElement');
// 						$('#paginationPane').addClass('hideElement');
// 						$('#pageDetailsBlock').removeClass('hideElement');
// 					});
// 				} else {
// 					$('#detailsBtn').prop('disabled', true);
// 				}
// 			} else {
// 				detailsBtnToggle(true);
// 				$('#favouritesTable').html(noRecordsFoundBanner());
// 			}
// 		}
// 	} else {
// 		detailsBtnToggle(true);
// 		$('#favouritesTable').html(noRecordsFoundBanner());
// 	}
// });

// function getObjectSize(placesToDisplay) {
// 	var cnt = 0;
// 	for(var key in placesToDisplay) {
// 		cnt++;
// 	}
// 	return cnt;
// }

// function displayFavouritesTable(placesToDisplay, pageNoStart) {
// 	var resultTable = "<div class='table-responsive'><table class='table table-sm nearbyPlacesResults table-hover'><tbody ng-fav-append id='nearPlacesBody'>";
// 	resultTable += generateTableHeaders();
// 	var i = 0;
	
// 	resultTable += "</tbody></table></div>";
// 	$("#favouritesTable").html(resultTable);

// 	resultTable = "";

// 	var limit = pageNoStart + 20; //10
// 	var startingNo = 0;
// 	for(var key in placesToDisplay) {
// 		if(startingNo >= pageNoStart && startingNo < limit) {
// 			var value = placesToDisplay[key];
// 			if($('#currentPlaceId').val() == key) {
// 				resultTable += "<tr class='table-warning'>";
// 			} else {
// 				resultTable += "<tr>";
// 			}
// 			resultTable += "<td class='noWrap'>"+(i+1)+"</td>";
// 			resultTable += "<td class='noWrap'><img src='"+value.category+"' alt='icon' width='30px'/></td>";
// 			resultTable += "<td class='noWrap'>"+value.placename+"</td>";
// 			resultTable += "<td class='noWrap'>"+value.addr+"</td>";
// 			resultTable += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn deleteFavBtn'><i class='fa fa-trash' data-placeid='"+key+"'></i></button></td>";	
// 			resultTable += "<td class='noWrap'><span ng-click='result=true;favor=true;placeDetails=false;'><button type='button' class='btn btn-light favPlaceDetailsBtn' data-placeid='"+key+"'><i class='fa fa-chevron-right'></i></button></span></td>";
// 			resultTable += "</tr>";
// 			i++;
// 		}
// 		startingNo++;
// 	}

// 	var $target = $("[ng-fav-append]");
// 	angular.element($target).injector().invoke(function($compile) {
// 		var $scope = angular.element($target).scope();
// 		$target.append($compile(resultTable)($scope));
// 		$scope.$apply();
// 	});

// 	$('.favPlaceDetailsBtn').off('click');
// 	$('.favPlaceDetailsBtn').on('click', function() {
// 		retrievePlaceDetailsFor($(this).data('placeid'));
// 	});

// 	$('.deleteFavBtn').off('click');
// 	$('.deleteFavBtn').on('click', function(){
// 		var localStoredData = getLocalStorageData();
// 		if(localStoredData) {
// 			localStoredData = JSON.parse(localStoredData);
// 			if(localStoredData[0][$($(this).first()[0].firstChild).data('placeid')] && Object.keys(localStoredData[0]).length>0) {
// 				delete localStoredData[0][$($(this).first()[0].firstChild).data('placeid')];
// 				localStoredData = JSON.stringify(localStoredData);
// 				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).removeClass('yellowColored');
// 				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).removeClass('fa-star');
// 				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).addClass('fa-star-o');
// 				if($('#currentPlaceId').val() == $($(this).first()[0].firstChild).data('placeid')) {
// 					$('#currentFavStar').addClass('fa-star-o');
// 					$('#currentFavStar').removeClass('fa-star');
// 					$('#currentFavStar').removeClass('yellowColored');
// 				}
// 				saveLocalStorageData(localStoredData);
// 				$('#favouritesTab').trigger('click');
// 			} else{ 
// 				$('#favouritesTable').html(noRecordsFoundBanner());
// 			}
// 		}

// 	});
// 	limit = limit;
	
// 	$('#favouritesTable').append(favoritesPagination(pageNoStart, limit, getObjectSize(placesToDisplay)));
// 	$('#nextFavPage').off('click');
// 	$('#nextFavPage').on('click', function(){
// 		displayFavouritesTable(placesToDisplay, limit);
// 	});
// 	$('#prevFavPage').off('click');
// 	$('#prevFavPage').on('click', function(){
// 		displayFavouritesTable(placesToDisplay, pageNoStart-20);
// 	});
// }

// function favoritesPagination(lowerLimit, upperLimit, length) {
// 	var pagination = "<div class='col-12 text-center'><div id='favPagination' class='col-12'>";
// 	if(lowerLimit>0) {
// 		pagination += "<button type='button' id='prevFavPage' class='btn paginationButtons'>Previous</button>";
// 	}
// 	if(upperLimit < length) {
// 		pagination += "<button type='button' id='nextFavPage' class='btn paginationButtons'>Next</button>";	
// 	}
// 	pagination += "</div></div>";
	
// 	return pagination;
// }


// function noRecordsFoundBanner() {
// 	var banner = '<div class="alert alert-warning marginTop1 fullWidth" role="alert">No Records.</div>';
// 	return banner;
// }

// function failedToConnect() {
// 	var banner = '<div class="alert alert-danger marginTop1 fullWidth" role="alert">Failed to get search results.</div>';
// 	return banner;
// }

// function populateNextResults(results, pageNo) {
// 	var resultTable = '';
// 	for(var i = 0; i < results.results.length; i++) {
// 		resultTable += generateTableResults(i, results.results[i], true, pageNo);
// 	}
// 	var $target = $("[ng-new-append]");
// 	angular.element($target).injector().invoke(function($compile) {
// 		var $scope = angular.element($target).scope();
// 		$target.append($compile(resultTable)($scope));
// 		$scope.$apply();
// 	});
// 	$('#nearPlacesBody').append(resultTable);
// 	$('.placeDetailsBtn').off('click');
// 	$('.placeDetailsBtn').on('click', function(){
// 		$('#resultTable').find('.table-warning').each(function(index){
// 			$(this).removeClass('table-warning');
// 		});
// 		retrievePlaceDetailsFor($(this).data('placeid'));
// 		$(this).parents('tr').addClass('table-warning');
// 	});

// 	$('.favoriteMe').off('click');
// 	$('.favoriteMe').on('click', function(){
// 		favoriteFunc($(this));
// 	});
// }

// function generateDetailsButton() {
// 	return ('<div class="row">'+
// 		'<div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 offset-md-10 offset-sm-10 offset-xs-10 offset-lg-10 offset-xl-10">'+
// 		'<div class="row detailsBtnDiv">'+
// 		'<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">'+
// 		'<button id="detailsBtn" type="button" class="btn btn-light detailsBtn">Details <i class="fa fa-angle-right"></i>'+
// 		'</button></div></div></div></div>');
// }

// function generateTableHeaders() {
// 	var tableHeading = '';
// 	tableHeading += '<thead><tr>';
// 	tableHeading += '<td class="noWrap"><b>#</b></td>';
// 	tableHeading += '<td class="noWrap"><b>Category</b></td>';
// 	tableHeading += '<td class="noWrap"><b>Name</b></td>';
// 	tableHeading += '<td class="noWrap"><b>Address</b></td>';
// 	tableHeading += '<td class="noWrap"><b>Favorite</b></td>';
// 	tableHeading += '<td class="noWrap"><b>Details</b></td>';
// 	tableHeading += '</tr></thead>';
// 	return tableHeading;
// }

// function generateTableResults(i, result, hide, pageNo) {
// 	var localStoredData = getLocalStorageData();
// 	if(localStoredData && localStoredData != '') {
// 		localStoredData = JSON.parse(localStoredData);
// 	} else {
// 		localStoredData = null;
// 	}
// 	var place = "";
// 	if(hide){
// 		place += "<tr class='page"+pageNo+" hideElement'>";
// 	} else {
// 		place += "<tr class='page"+pageNo+"'>";
// 	}
// 	place += "<td class='noWrap'>"+(i+1)+"</td>";
// 	place += "<td class='noWrap'><img src='"+result.icon+"' alt='icon' width='30px'/></td>";
// 	place += "<td class='noWrap'>"+result.name+"</td>";
// 	place += "<td class='noWrap'>"+result.vicinity+"</td>";
// 	if(localStoredData && localStoredData[0][result.place_id]) {
// 		place += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn favoriteMe'><i id='fav_"+result.place_id+"' class='fa fa-star yellowColored' data-category='"+result.icon+"' data-placename='"+result.name+"' data-addr='"+result.vicinity+"' data-placeid='"+result.place_id+"'></i></button></td>";	
// 	} else {
// 		place += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn favoriteMe'><i id='fav_"+result.place_id+"' class='fa fa-star-o' data-category='"+result.icon+"' data-placename='"+result.name+"' data-addr='"+result.vicinity+"' data-placeid='"+result.place_id+"'></i></button></td>";
// 	}
// 	place += "<td class='noWrap'><span ng-click='result=true;favor=true;detailsPane=true;placeDetails=false;detailsBtnPane=true'><button type='button' class='btn btn-light placeDetailsBtn' data-placeid='"+result.place_id+"'><i class='fa fa-chevron-right'></i></button></span></td>";
// 	place += "</tr>";
// 	return place;
// }

// function loadMap(directionsDisplay, directionsService, locationLatitude, locationLongitude) {
// 		//var directionsDisplay = new google.maps.DirectionsRenderer;
// 		//var directionsService = new google.maps.DirectionsService;
// 		var coordinates = {lat: locationLatitude , lng: locationLongitude};
// 		var map = new google.maps.Map(document.getElementById('mapSpan'), {
// 			zoom: 15,
// 			center: coordinates
// 		});
// 		if(!$('#directionsClicked').val()  || $('#directionsClicked').val() == '') {
// 			marker = new google.maps.Marker({
// 				position: coordinates,
// 				map: map
// 			});	
// 		}
		
// 		marker.setVisible(true);
// 		directionsDisplay.setMap(map);
// 	}

// 	function generateProgressBar() {
// 		var progressbar = '<div class="progress">';
// 		progressbar += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">';
// 		progressbar += '</div>';
// 		return progressbar;
// 	}
// 	$('#customizedSearch').off('click');
// 	$('#customizedSearch').on('click', function(e) {
// 		$('#resultsTab').trigger('click');
// 		detailsBtnToggle(true);
// 		searchClicked = ($('input[name=fromLocationOption]:checked').val() == 'hereLocation') ? 'Your location' : $('#customLocationText').val();
// 		$('#placesResultsSection').removeClass('hideElement');
// 		$('#pageDetailsBlock').addClass('hideElement');
// 		$('#favouritesTable').addClass('hideElement');
// 		$('#resultTable').addClass('hideElement');
// 		$('#resultsTab').addClass('active show');
// 		if($('input[name=fromLocationOption]:checked').val() == 'hereLocation') {
// 			$('#customLocationText').val('');
// 		}
// 		$('#favouritesTab').removeClass('active show');
		
// 		currentNearbyPlaces = {};
// 		current_result_count = 0;
// 		currentNearbyPlaces = {};
// 		current_result_count = 0;
// 		current_page_in_view = 1;
// 		displayPaginationPane(true);
// 		$('#placeDetailsTab').trigger('click');
// 		$('#travelMode').val('DRIVING');
// 		$('#dropdownMenuButton').html('Google Reviews');
// 		$('#reviewsSorting').html('Default Order');
// 		$('#progressBar').removeClass('hideElement');
// 		//$('#progressBar').html(generateProgressBar());
// 		var myFields = collectFormData();
// 		$('#directionsClicked').val('');
// 		var sourceLocationForMap = (myFields.fromLocationOption == 'hereLocation') ? ' My location' : myFields.customLocationText;
// 		$('#sourceLocation').val(sourceLocationForMap);
// 		ajaxRestCall('/getNearByPlaces', 'GET', myFields, getNearbyPlaces);
// 	});

// 	function startAutoComplete(element) {
// 		var autocomplete = new google.maps.places.Autocomplete((document.getElementById(element)), {types: ['geocode']});
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(function(position) {
// 				var geolocation = {
// 					lat: position.coords.latitude,
// 					lng: position.coords.longitude
// 				};
// 				var circle = new google.maps.Circle({
// 					center: geolocation,
// 					radius: position.coords.accuracy
// 				});
// 				autocomplete.setBounds(circle.getBounds());
// 			});
// 			autocomplete.addListener('place_changed', fillPlaceCoordinates);
// 		}

// 		function fillPlaceCoordinates() {
// 			var place = autocomplete.getPlace();
// 			if(place && place.geometry.location) {
// 				$('#sourceLocationLat').val(place.geometry.location.lat());
// 				$('#sourceLocationLng').val(place.geometry.location.lng());
// 			} else {
// 				$('#sourceLocationLat').val('');
// 				$('#sourceLocationLng').val('');
// 			}
// 		}
// 	}	

// 	$('input:radio[name=fromLocationOption]').change(function(e) {
// 		var selectedCategory = $(e.target);
// 		enableSubmit();
// 		if(selectedCategory.attr('id') == 'hereLocation') {
// 			$('#customLocationText').prop('disabled', true);
// 			// $('#customLocationText').removeClass('is-invalid');
// 			$('#customLocationTextFormError').css('display', 'none');
// 		} else {
// 			$('#customLocationText').prop('disabled', false);
// 		}
// 	});

// 	$('.togglePanes').on('click', function(e){
// 		$(this).children().removeClass('btn-primary-outline btn-primary');
// 		$(e.target).addClass('btn-primary');
// 	});

// 	function isEmpty(e) {
// 	}

// 	function showFormErrorMessage(e) {
// 		// e.addClass('is-invalid');
// 		$('#'+e.attr('id')+'FormError').css('display','block');
// 	}

// 	function hideFormErrorMessage(e) {
// 		// e.removeClass('is-invalid');
// 		$('#'+e.attr('id')+'FormError').css('display', 'none');
// 	}

// 	function loadCategories() {
// 		var categories = ['Default', 'Airport', 'Amusement Park', 'Aquarium', 'Art Gallery', 'Bakery', 'Bar', 'Beauty Salon', 'Bowling Alley', 'Bus Station', 'Cafe', 'Campground', 'Car Rental', 'Casino', 'Lodging', 'Movie Theater', 'Museum', 'Night Club', 'Park', 'Parking', 'Restaurant', 'Shopping Mall', 'Stadium', 'Subway Station', 'Taxi Stand', 'Train Station', 'Transit Station', 'Travel Agency', 'Zoo'];
// 		var options = '';
// 		for(var i = 0; i < categories.length; i++) {
// 			options += '<option value = "'+categories[i]+'" >' + categories[i]+'</option>';
// 		}
// 		$('#category').append(''+options);
// 	}

// 	function enableSubmit() {
// 		// var keyword = isEmpty($('#keyword').);
// 		if($('#keyword').value != '') {
// 			var fromLocationOption = $('input[name=fromLocationOption]:checked').val();
// 			if(fromLocationOption == 'hereLocation') {
// 				var currentLocationLatitude = $('#currentLocationLatitude').val();
// 				var currentLocationLongitude = $('#currentLocationLongitude').val();
// 				if(currentLocationLongitude && currentLocationLatitude) {
// 					$('#customizedSearch').removeAttr('disabled');
// 				} else {
// 					$('#customizedSearch').prop("disabled", true);
// 				}
// 			} else if(fromLocationOption == 'customLocation') {
// 				var customLocationText = isEmpty($('#customLocationText'));
// 				if(customLocationText) {
// 					$('#customizedSearch').removeAttr('disabled');
// 				} else {
// 					$('#customizedSearch').prop("disabled", true);
// 				}
// 			}
// 		} else {
// 			$('#customizedSearch').prop("disabled", true);
// 		}
// 	}

// 	function loadCurrentLocation() {
// 		ajaxRestCall('http://ip-api.com/json', 'GET', null, setCurrentLocationCoordinates);
// 	}

// 	function startMapView(latitude, longitude){
// 		var fenway = {lat: Number(latitude), lng: Number(longitude)};
// 		var map = new google.maps.Map(document.getElementById('mapSpan'), {
// 			center: fenway,
// 			zoom: 14
// 		});
// 		var panorama = new google.maps.StreetViewPanorama(
// 			document.getElementById('mapSpan'), {
// 				position: fenway,
// 				pov: {
// 					heading: 34,
// 					pitch: 10
// 				}
// 			});
// 		map.setStreetView(panorama);
// 	}

// 	function ajaxRestCall(in_url, in_method, in_data, callback) {
// 		$.ajax({
// 			url: in_url,
// 			data: in_data,
// 			method: in_method,
// 			dataType: 'json',
// 			success: function(data) {
// 				callback(data);
// 			},
// 			error: function(xhr){
// 				callback(null);
// 			},
// 			complete: function(data) {
// 				return data;
// 			}

// 		});
// 	}
// 	function setCurrentLocationCoordinates(data){
// 		$('#currentLocationLatitude').val(data.lat);
// 		$('#currentLocationLongitude').val(data.lon);
// 	}
// 	function getLocalStorageData() {
// 		if (typeof(Storage) !== "undefined") {
// 			if(!localStorage.getItem("praveenTravel")) {
// 				localStorage.setItem("praveenTravel", "");	
// 			}
// 			return localStorage.getItem("praveenTravel");
// 		} else {
// 			console.log("Sorry, your browser does not support Web Storage...");
// 		}
// 	}
// 	function saveLocalStorageData(data) {
// 		localStorage.setItem("praveenTravel", data);	
// 	}
// 	loadCategories();
// 	loadCurrentLocation();
// });
var app = angular.module("myApp", ["ngAnimate"]);
app.controller("MyCtrl", function ($scope) {
	$scope.result=false;
	$scope.favor=false;
	$scope.detailsPane=false;
	$scope.placeDetails = true;
	$scope.myDummy = "results";
	$scope.content = {

	};
	$scope.detailsBtnPane= true;
	$scope.reviewsAng = true;
	$scope.checkIfFavors = function() {
		return ($scope.favor && ($scope.myDummy == 'favors'));
	};
	$scope.checkIfResults = function() {
		return ($scope.result && ($scope.myDummy == 'results'));
	};
	$scope.showPlaceDetails  = function() {
		placeDetails = false;
	};
	$scope.listBack = function() {
		if($scope.myDummy == "results") {
			$scope.result=false;
			$scope.favor=true;
		} else {
			$scope.result=true;
			$scope.favor=false;
		}
		$scope.placeDetails = true;
		$scope.detailsPane=false;
		$scope.detailsBtnPane=false;

	}
});
var marker;
var searchClicked = null;;
$(document).ready(function(){
	
	$('#keyword').on('blur keyup', function(e) {
		debugger
		var elementClicked = $(e.target);
		var keyword = isEmpty(elementClicked);
		if(keyword) {
			hideFormErrorMessage(elementClicked);
			enableSubmit();
		} else {
			showFormErrorMessage(elementClicked);
			enableSubmit();
		}
	});

	$('#customLocationText').on('blur keyup', function(e) {
		var elementClicked = $(e.target);
		var customLocationText = isEmpty(elementClicked);
		if(customLocationText) {
			hideFormErrorMessage(elementClicked);
			enableSubmit();
		} else {
			showFormErrorMessage(elementClicked);
			enableSubmit();
		}
	});

	$('#placeDetailsTab').on('click', function(){
		togglePlaceDetailsTab();
		$('#placeDetailsDiv').removeClass('hideElement');
	});

	$('#placePhotosTab').on('click', function(){
		togglePlaceDetailsTab();
		$('#placeImageGrid').removeClass('hideElement');
	});

	$('#placeMapTab').on('click', function(){
		togglePlaceDetailsTab();
		$('#placeMapArea').removeClass('hideElement');
	});

	$('#placeReviewsTab').on('click', function(){
		togglePlaceDetailsTab();
		$('#placeReviewsArea').removeClass('hideElement');

	});

	function setDirectionsOnTheMap(directionsDisplay, directionsService){
		var startLocString = null;
		if($('#destLocationLat').val()) {
			var sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode;
			if($('#sourceLocation').val().trim().toLowerCase() == 'my location' || $('#sourceLocation').val().trim().toLowerCase() == 'your location') {
				sourceLatitude = $('#currentLocationLatitude').val();
				sourceLongitude = $('#currentLocationLongitude').val();
			} else {
				sourceLatitude = $('#sourceLocationLat').val();
				sourceLongitude = $('#sourceLocationLng').val();
				startLocString = $('#sourceLocation').val();
			}
			destinationLatitude = $('#destLocationLat').val();
			destinationLongitude = $('#destLocationLng').val();
			travelMode = $('#travelMode').val();
			calcRoute(startLocString, directionsDisplay, directionsService, sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode);
		} else {
		} 
	}

	function calcRoute(startLocString, directionsDisplay, directionsService, sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude, travelMode) {
		var start;
		if(startLocString) {
			start = startLocString;
		} else {
			start = new google.maps.LatLng(Number(sourceLatitude), Number(sourceLongitude));
		}
		if(marker) {
			marker.setMap(null);
		}
		var end = new google.maps.LatLng(Number(destinationLatitude), Number(destinationLongitude));
		directionsService.route({
			origin: start,
			destination: end,
			travelMode: travelMode,
			provideRouteAlternatives: true
		}, function(response, status) {
			if (status === 'OK') {
				$('#directionsClicked').val('true');
				directionsDisplay.setPanel(document.getElementById('directionsPanel'));
				directionsDisplay.setDirections(response);
			} else {
				window.alert('Directions request failed due to ' + status);
			}
		});
	}


	function togglePlaceDetailsTab(selectedTab) {
		$('#placeDetailsDiv').addClass('hideElement');
		$('#placeImageGrid').addClass('hideElement');
		$('#placeMapArea').addClass('hideElement');
		$('#placeReviewsArea').addClass('hideElement');
	}

	function sourceLocationChange(e) {
		var sourceLocationText = isEmpty(e)
		if(!sourceLocationText) {
			$('#getDirectionsOnMap').prop('disabled', true);
		} else {
			$('#getDirectionsOnMap').prop('disabled', false);
		}
	}

	$('#clearSearchForm').off('click');
	$('#clearSearchForm').on('click', function() {
		$('#keyword').val('');
		$('#category').val('Default');
		$('#distanceInMiles').val('');
		$('#hereLocation').prop('checked', true);
		$('#customLocationText').val('');
		$('#customLocationText').prop('disabled', true);
		$('#customizedSearch').prop("disabled", true);
		$('#keyword').removeClass('is-invalid');
		$('#keywordFormError').css('display', 'none');
		$('#customLocationText').removeClass('is-invalid');
		$('#customLocationTextFormError').css('display', 'none');

		var appElement = document.querySelector('[ng-app=myApp]');
		var $scope = angular.element(appElement).scope();
		$scope.$apply(function() {
			$scope.result=true;
			$scope.favor=true;
			$scope.detailsPane=true;
			$scope.placeDetails = true;
			$scope.myDummy = "results";
			$scope.content = {

			};
			$scope.detailsBtnPane= true;
		});
		currentNearbyPlaces = {};
		current_result_count = 0;
		current_page_in_view = 1;
		$('#resultTable').html(''); 
		//$('#resultsSection').html(''); 
		$('#noPhotos').html('');
		displayPaginationPane(false);
		$('#resultsTab').trigger('click');
		$('#detailsBtn').prop('disabled', true);
		$('#currentPlaceId').val('');
	});



	$('#sourceLocation').on('blur keyup', function() {
		sourceLocationChange($(this));
	});
	$('#sourceLocation').on('focus', startAutoComplete('sourceLocation'));

	$('#customLocationText').off('focus');
	$('#customLocationText').on('focus', startAutoComplete('customLocationText'));

	function collectFormData() {
		var data = {
			'keyword' : $('#keyword').val(),
			'category' : $('#category').val().toLowerCase().replace(' ', '_'),
			'distance' : $('#distanceInMiles').val().trim() ? $('#distanceInMiles').val().trim() : 10,
			'fromLocationOption' : $('input[type=radio][name=fromLocationOption]:checked').val(),
			'currentLocationLatitude' : $('#currentLocationLatitude').val(),
			'currentLocationLongitude' : $('#currentLocationLongitude').val(),
			'customLocationText' : $('#customLocationText').val()
		}
		return data;
	}

	$('#addToFavouritesBtn').off('click');
	$('#addToFavouritesBtn').on('click', function(){
		var currentFavPlace = $('#currentPlaceId').val();
		if($('#currentFavStar').hasClass('yellowColored')) {
			$('#currentFavStar').removeClass('yellowColored');
			$('currentFavStar').removeClass('fa-star');
			$('#currentFavStar').addClass('fa-star-o');
			var localStoredData = getLocalStorageData();
			if(localStoredData) {
				localStoredData = JSON.parse(localStoredData);
				if(localStoredData[0][currentFavPlace]) {
					delete localStoredData[0][currentFavPlace];
					localStoredData = JSON.stringify(localStoredData);
					saveLocalStorageData(localStoredData);
					$('#fav_'+currentFavPlace).removeClass('yellowColored');
					$('#fav_'+currentFavPlace).addClass('fa-star-o');
					$('#fav_'+currentFavPlace).removeClass('fa-star');
				}
			}
		} else {
			$('#currentFavStar').addClass('yellowColored');
			$('#currentFavStar').removeClass('fa-star-o');
			$('#currentFavStar').addClass('fa-star');
			var localStoredData = getLocalStorageData();
			var favoritePlace = {
				'placeid' : $('#currentPlaceId').val(),
				'addr' : $('#currentPlaceAddr').val(),
				'category' : $('#currentCategory').val(),
				'placename' : $('#currentPlaceName').val()
			}
			if(localStoredData && localStoredData != "") {
				localStoredData = JSON.parse(localStoredData);
				localStoredData[0][currentFavPlace] = favoritePlace;
				localStoredData = JSON.stringify(localStoredData);
				saveLocalStorageData(localStoredData);
			} else {
				var favoritePlaces = [];
				var obj = {};
				obj[$('#currentPlaceId').val()] = favoritePlace;
				favoritePlaces.push(obj);
				localStoredData = JSON.stringify(favoritePlaces);
				saveLocalStorageData(localStoredData);
			}

			$('#fav_'+currentFavPlace).addClass('yellowColored');
			$('#fav_'+currentFavPlace).removeClass('fa-star-o');
			$('#fav_'+currentFavPlace).addClass('fa-star');
		}
	});
	

	var currentNearbyPlaces = {};
	var current_result_count = 0;
	var current_page_in_view = 1;
	var favPage = 0;

	function getNearbyPlaces(data) {
		$('#progressBar').addClass('hideElement');
		$('#resultTable').removeClass('hideElement');
		$('#paginationPane').removeClass('hideElement');
		$('#detailsTabPane').removeClass('hideElement');
		if(!data) {
			$('#resultTable').html(failedToConnect());
			$('#progressBar').addClass('hideElement');
			$('#resultTable').removeClass('hideElement');
			detailsBtnToggle(true);

		} else if(data && data.results && data.results.length < 1) {
			detailsBtnToggle(true);
			$('#resultTable').html(noRecordsFoundBanner());
			$('#progressBar').addClass('hideElement');
			$('#resultTable').removeClass('hideElement');
		} else if(data) {
			current_result_count++;
			var val = current_result_count.toString();
			currentNearbyPlaces[current_result_count] = data;
			if(current_result_count==1) {
				populateResultsInTable(data);
			} else {
				populateNextResults(data, current_result_count);
				performPagination();
			}
		} 
	}

	function getNextData(next_page_token) {
		var token = {
			'token' : next_page_token
		}
		$('#paginationPane').addClass('hideElement');
		$('#progressBar').removeClass('hideElement');
		$('#resultTable').addClass('hideElement');
		$('#detailsTabPane').addClass('hideElement');
		ajaxRestCall('/getNext20Results', 'GET', token, getNearbyPlaces);
	}

	function detailsBtnToggle(flag) {
		var appElement = document.querySelector('[ng-app=myApp]');
		var $scope = angular.element(appElement).scope();
		$scope.$apply(function() {
			$scope.detailsBtnPane = flag;
		});
	}

	function populateResultsInTable(data) {
		$('#progressBar').addClass('hideElement');
		$('#resultTable').removeClass('hideElement');
		var jsonParsedData = data;
		var results = jsonParsedData.results;
		var resultTable = '';
		if(results  && results.length > 0) {
			resultTable += '<div class="table-responsive"><table class="table table-sm nearbyPlacesResults table-hover"><tbody ng-new-append id="nearPlacesBody">';
			resultTable += generateTableHeaders();
			
			resultTable += '</tbody></table></div>';
			$('#resultTable').html(resultTable);
			resultTable = "";
			for(var i = 0; i < results.length; i++) {
				resultTable += generateTableResults(i, results[i], false, 1);
			}
			var $target = $("[ng-new-append]");
			angular.element($target).injector().invoke(function($compile) {
				var $scope = angular.element($target).scope();
				$target.append($compile(resultTable)($scope));
				$scope.$apply();
			});
			detailsBtnToggle(false);

			$('.favoriteMe').off('click');
			$('.favoriteMe').on('click', function(){
				favoriteFunc($(this));
			});

			$('.placeDetailsBtn').off('click');
			$('.placeDetailsBtn').on('click', function(){
				$('#resultTable').find('.table-warning').each(function(index){
					$(this).removeClass('table-warning');
				});
				retrievePlaceDetailsFor($(this).data('placeid'));
				$(this).parents('tr').addClass('table-warning');
				$('#placeDetailsTab').trigger('click');
			});
			$('#detailsBtn').prop('disabled', true);
			$('#detailsBtn').off('click');
			$('#detailsBtn').on('click', function() {
				$('#placesResultsSection').addClass('hideElement');
				$('#paginationPane').addClass('hideElement');
				$('#pageDetailsBlock').removeClass('hideElement');
			});
		} else {
			detailsBtnToggle(true);
			var noRecordsFound = '<div class="alert alert-warning alert-sm">No Records.</div>';
			$('#resultsSection').html(noRecordsFound);
		}
		displayPaginationPane(true);
	}

	function displayPage(pageView) {
		current_page_in_view = pageView;
		var previousPage = (current_page_in_view-1);
		if(currentNearbyPlaces[current_page_in_view]) {
			performPagination();
		} else {
			if(previousPage > 0 ){
				getNextData(currentNearbyPlaces[previousPage].next_page_token);
			}
		}

	}

	$('#backSearch').off('click');
	$('#backSearch').on('click', function() {
		if($('#resultsTab').hasClass('active')) {
			detailsBtnToggle(true);
			$('#placesResultsSection').removeClass('hideElement');
			$('#paginationPane').removeClass('hideElement');
			$('#pageDetailsBlock').addClass('hideElement');
			$('#resultsTab').trigger('click');
			performPagination(true);
		} else if($('#favouritesTab').hasClass('active')) {
			detailsBtnToggle(true);
			$('#pageDetailsBlock').addClass('hideElement');
			$('#placesResultsSection').removeClass('hideElement');
			$('#favouritesTab').trigger('click');
		}
		
	});

	function performPagination() {
		if(current_page_in_view == 1) {
			$( '.page2,.page3' ).addClass('hideElement');
			$( '.page1' ).removeClass('hideElement');
		} else if(current_page_in_view == 2) {
			$( '.page1,.page3' ).addClass('hideElement');
			$( '.page2' ).removeClass('hideElement');
		} else if(current_page_in_view == 3) {
			$( '.page1,.page2' ).addClass('hideElement');
			$( '.page3' ).removeClass('hideElement');
		}
		displayPaginationPane(true);
	}

	function displayPaginationPane(flag) {
		if(flag == true) {
			$('#displayPaginationPane').removeClass('hideElement');
			if(currentNearbyPlaces[current_result_count]){
				if(currentNearbyPlaces[current_page_in_view] && currentNearbyPlaces[current_page_in_view].next_page_token) {
					generatePaginationTabs(true); 
				}
				else {
					generatePaginationTabs(false);	
				}
			} else {
				generatePaginationTabs(false);
			}
		} else {
			$('#previousBtnPagination').addClass('hideElement');
			$('#nextBtnPagination').addClass('hideElement');
		}
		
	}

	function generatePaginationTabs(next) {
		$('#nextBtnPagination').off('click');
		$('#previousBtnPagination').off('click');
		if(next) {
			$('#nextBtnPagination').off('click');
			$('#paginationPane').removeClass('hideElement');	
			$('#nextBtnPagination').removeClass('hideElement');
			$('#nextBtnPagination').on('click',function (){
				displayPage(current_page_in_view+1);
			});
		}  else {
			$('#nextBtnPagination').addClass('hideElement');
		}
		if(current_page_in_view != 1) {
			$('#previousBtnPagination').removeClass('hideElement');
			$('#previousBtnPagination').on('click', function(){
				displayPage(current_page_in_view-1);
			});
		} else {
			$('#previousBtnPagination').addClass('hideElement');
		}

		//checking if placeDetails are up in view

	}

	function retrievePlaceDetailsFor(place_Id) {
		$('#pageDetailsBlock').removeClass('hideElement');
		$('#placeDetailsDiv').removeClass('hideElement');
		$('#detailsBtn').prop('disabled', false);
		displayPaginationPane(false);
		var service = new google.maps.places.PlacesService(document.getElementById('mapsForGoogle'));
		debugger
		service.getDetails({
			placeId: place_Id
		}, function(place, status) {
			debugger
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				var stingifiedPlaces = JSON.stringify(place)
				displayPlaceDetailsDiv(stingifiedPlaces);
				$('#sourceLocationLat').val('');
				$('#sourceLocationLng').val('');
				$('#sourceLocation').val(searchClicked);
				var directionsDisplay = new google.maps.DirectionsRenderer;
				var directionsService = new google.maps.DirectionsService;
				function populatePhotos() {
					var gridPhotos = {
						col1Photos : '',
						col2Photos : '',
						col3Photos : '',
						col4Photos : ''
					}
					var count = 1;
					var placePhotos = place.photos;
					$('#imgGridcol1').html('');
					$('#imgGridcol2').html('');
					$('#imgGridcol3').html('');
					$('#imgGridcol4').html('');
					if(placePhotos && (placePhotos.length > 0)) {
						$('#noPhotos').html('');
						for(var x = 0; x < placePhotos.length; x++) {
							var currentPlace = placePhotos[x];
							var currentPlacePhoto  = currentPlace.getUrl({'maxWidth': currentPlace.width});
							var columnData = 'col'+count+'Photos';
							gridPhotos[columnData] += '<a href="'+currentPlace.getUrl({'maxWidth': currentPlace.width})+'" target="_blank"><img src="'+currentPlacePhoto+'" class = "img-thumbnail" style="width:100%"/></a>';
							if(count==4) {
								count = 0;
							}
							count++;
						}
						$('#imgGridcol1').html(gridPhotos.col1Photos);
						$('#imgGridcol2').html(gridPhotos.col2Photos);
						$('#imgGridcol3').html(gridPhotos.col3Photos);
						$('#imgGridcol4').html(gridPhotos.col4Photos);
					} else {
						$('#noPhotos').html(noRecordsFoundBanner());
					}
				}
				var directionsDisplay = new google.maps.DirectionsRenderer;// EXTRA
				var directionsService = new google.maps.DirectionsService;// EXTRA
				function loadMapArena(directionsDisplay, directionsService) {
					var coordinates = JSON.parse(stingifiedPlaces);
					loadMap(directionsDisplay, directionsService, coordinates.geometry.location.lat, coordinates.geometry.location.lng);
				}
				var defaultPlaceReviews = place.reviews? place.reviews : "";
				var placeReviews = jQuery.extend([], place.reviews);
				var yelpRetrievedReviews;
				var yelpSortedReviews;
				$("#reviewsOptionsList button").off('click');
				$("#reviewsOptionsList button").on('click', function(){
					var selText = $(this).text();
					$('#dropdownMenuButton').html(selText);
					if(selText == 'Yelp Reviews') {
						var placeName = place.name;
						var addressDetails = place.adr_address.split(',');
						addressDetails = jQuery.grep(addressDetails, function( a ) {
							return a.indexOf('street-address') >= 0 || a.indexOf('locality') >= 0 || a.indexOf('region') >= 0;
						});
						var addr1 = "";
						var city = "";
						var state = "";
						$.each(addressDetails, function( index, value ) {
							if(value.indexOf('street-address') >= 0) {
								addr1 = $(value).text();
							} else if (value.indexOf('locality') >= 0 ) {
								city = $(value).text();
							} else if (value.indexOf('region') >= 0 ) {
								var stateDetails = $(value).text().trim().split(' ');
								state = stateDetails[0];
							}
						});
						var myFields = {
							'placeName' : placeName,
							'addr1' : addr1,
							'city' : city,
							'state' : state,
							'latitude' : place.geometry.location.lat,
							'longitude' : place.geometry.location.lng
						}
						ajaxRestCall('/getYelpReviews', 'GET', myFields, displayYelpReviews);
					} else {
						populateReviews(defaultPlaceReviews);
					}
				});

				function displayYelpReviews(yelpReviews) {
					yelpRetrievedReviews = yelpReviews;
					if(yelpReviews == null) {
						yelpReviews = "";
					}
					yelpSortedReviews = jQuery.extend([], yelpRetrievedReviews);
					var selText = $('#reviewsSorting').html();
					sortAndPopulateReviews(selText);
				}

				$("#reviewsSortingMenu button").off('click');
				$("#reviewsSortingMenu button").on('click', function(){
					var selText = $(this).text();
					sortAndPopulateReviews(selText);
					$('#reviewsSorting').html(selText);
					
				});

				function sortAndPopulateReviews(selText) {
					if(selText == 'Highest Rating') {
						placeReviews.sort(function(a, b) {
							return  b['rating'] - a['rating'];
						});
						if(yelpSortedReviews) {
							yelpSortedReviews.sort(function(a,b){
								return b['rating'] - a['rating'];
							});
						}
					} else if(selText == 'Lowest Rating') {
						placeReviews.sort(function(a, b) {
							return a['rating'] - b['rating'];
						});
						if(yelpSortedReviews) {
							yelpSortedReviews.sort(function(a,b){
								return a['rating'] - b['rating'];
							});
						}

					} else if(selText == 'Most Recent') {
						placeReviews.sort(function(a, b) {
							return  b['time'] - a['time'];
						});
						if(yelpSortedReviews) {
							yelpSortedReviews.sort(function(a,b){
								var time1 = new Date(a['time_created']);
								var time2 = new Date(b['time_created']);
								return time2.getTime() - time1.getTime();
							});
						}
					} else if(selText == 'Least Recent') {
						placeReviews.sort(function(a, b) {
							return a['time'] - b['time'];
						});
						if(yelpSortedReviews) {
							yelpSortedReviews.sort(function(a,b){
								var time1 = new Date(a['time_created']);
								var time2 = new Date(b['time_created']);
								return time1.getTime() - time2.getTime();
							});
						}
					} else if(selText == 'Default Order') {
						placeReviews = defaultPlaceReviews;
						yelpSortedReviews = yelpRetrievedReviews;
					} 

					if($('#dropdownMenuButton').html() == 'Yelp Reviews') {
						if(yelpSortedReviews == null) {
							yelpSortedReviews = "";
						}
						populateReviews(yelpSortedReviews);
					} else {
						populateReviews(placeReviews);	
					}
				}

				function populateReviews(reviews) {
					$('#reviewsDataSection').html('');
					if(reviews == "") {
						var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
						$('#reviewsDataSection').html(errString);
					} else if(reviews == null) {
						var errString  = "<span class='placeReview fullWidth'>"+ failedToConnect() + "</span>";
						$('#reviewsDataSection').html(errString);
					} else if((reviews && reviews.length < 1)){
						var errString  = "<span class='placeReview fullWidth'>"+ noRecordsFoundBanner() + "</span>";
						$('#reviewsDataSection').html(errString);
					} else {
						var reviewsData = '<div class="col-12 placeReview">'; 
						for(var x = 0; x < reviews.length; x++) {
							reviewsData += '<div class="reviewDiv rounded"><div class="top-margin-2p headerText">';
							var currentReview = reviews[x];
							if(currentReview.profile_photo_url || (currentReview.user && currentReview.user.image_url)) {
								if(currentReview.user && currentReview.user.image_url) {
									var usrString ='<img id="reviewersPhoto" src="' + (currentReview.user.image_url) + '" height="40px" width="40px" class="rounded-image"/>'; 
									if(currentReview.url) {
										usrString = '<a href="'+currentReview.url+'" target="_blank">' + usrString + '</a>';
									}
									reviewsData += usrString;
								} else {
									var usrString = '<img id="reviewersPhoto" src="' + (currentReview.profile_photo_url) + '" height="40px" width="40px" class="rounded-image"/>'; //check for blank Images
									if(currentReview.author_url) {
										usrString = '<a href="'+currentReview.author_url+'" target="_blank">' + usrString + '</a>';
									}
									reviewsData += usrString;
								}
							}
							reviewsData += '</div><div class="margin-top1P">';
							reviewsData += '<div class="row"><div class="col-12">';
							//author_url = GOOGLE .url yelp
							if(currentReview.author_url ||currentReview.url) {
								reviewsData += '<a href="'+(currentReview.author_url ||currentReview.url)+'" target="_blank">' + (currentReview.author_name || currentReview.user.name) + '</a>';	
							} else {
								reviewsData += (currentReview.author_name || currentReview.user.name);
							}

							
							reviewsData += '</div></div>';
							reviewsData += '<div class="row"><div class="col-12">';
							reviewsData += '<span id="ratings_'+x+'" class="reviewRatings"></span><span class="color-gray">' + (currentReview.time_created || moment.unix(currentReview.time).format("DD-MM-YYYY HH:mm:ss")) + '</span>';
							reviewsData += '</div></div>';//3 O
							reviewsData += '<div class="row"><div class="col-12">';//2O
							reviewsData += currentReview.text;
							reviewsData += '</div></div></div></div>';//5C

						}
						reviewsData += '</div>';
						$('#reviewsDataSection').html(reviewsData);
						for(var x = 0; x < reviews.length; x++) {
							$("#ratings_"+x).rateYo({
								rating: reviews[x].rating,
								maxValue : Math.ceil(reviews[x].rating),
								numStars : Math.ceil(reviews[x].rating),
								starWidth : "12px",
								readOnly: true
							});
						}
					}

				}

				populateReviews(defaultPlaceReviews);

				$('#reviewsSorting').off('')

				$('#getDirectionsOnMap').off('click');
				$('#getDirectionsOnMap').on('click', function(){
					setDirectionsOnTheMap(directionsDisplay, directionsService);
				});
				$('#searchMap').off('click');
				$('#searchMap').on('click', function() {
					loadMapArena(directionsDisplay, directionsService);
					if($('#directionsClicked').val() && $('#directionsClicked').val() == 'true') {
						$('#getDirectionsOnMap').trigger('click');
					}
					$('#pegman').removeClass('hideElement');
					$('#searchMap').addClass('hideElement');
				});

				$('#pegman').off('click');
				$('#pegman').on('click' , function(){
					startMapView($('#destLocationLat').val(), $('#destLocationLng').val());
					$('#searchMap').removeClass('hideElement');
					$('#pegman').addClass('hideElement');
				});	
				populatePhotos();
				$('#searchMap').trigger('click');
				loadMapArena(directionsDisplay, directionsService);

			}

		});
}

function favoriteFunc(element) {
	element = $(element).first()[0].firstChild;
	if($(element).hasClass('yellowColored')) {
		$(element).removeClass('yellowColored');
		$(element).removeClass('fa-star');
		$(element).addClass('fa-star-o');
		var localStoredData = getLocalStorageData();
		if(localStoredData) {
			localStoredData = JSON.parse(localStoredData);
			if(localStoredData[0][$(element).data('placeid')]) {
				delete localStoredData[0][$(element).data('placeid')];
				if($('#currentPlaceId').val() == $(element).data('placeid')) {
					$('#currentFavStar').addClass('fa-star-o');
					$('#currentFavStar').removeClass('fa-star');
					$('#currentFavStar').removeClass('yellowColored');
				}
				localStoredData = JSON.stringify(localStoredData);
				saveLocalStorageData(localStoredData);
			}
		}

	} else if(!$(element).hasClass('yellowColored')) {
		$(element).addClass('yellowColored');
		$(element).removeClass('fa-star-o');
		$(element).addClass('fa-star');
		var localStoredData = getLocalStorageData();
		var favoritePlace = {
			'placeid' : $(element).data('placeid'),
			'addr' : $(element).data('addr'),
			'category' : $(element).data('category'),
			'placename' : $(element).data('placename')
		}
		if(localStoredData && localStoredData != "") {
			localStoredData = JSON.parse(localStoredData);
			localStoredData[0][$(element).data('placeid')] = favoritePlace;
			localStoredData = JSON.stringify(localStoredData);
			saveLocalStorageData(localStoredData);
		} else {
			var favoritePlaces = [];
			var obj = {};
			obj[$(element).data('placeid')] = favoritePlace;
			favoritePlaces.push(obj);
			localStoredData = JSON.stringify(favoritePlaces);
			saveLocalStorageData(localStoredData);
		}
	}
}

function displayPlaceDetailsDiv(placeDetails) {
	debugger
	var tweetString='';
	tweetString = "Check out ";
	var weekOpeningHours = {};
	$('#travelMode').val('DRIVING');
	$('#directionsClicked').val(null);
	$('#directionsPanel').html('');
	$('#placesResultsSection').addClass('hideElement');
	placeDetails = JSON.parse(placeDetails);
	var detailsTableData = '<tbody>';
	$('#currentlySelectedPlace').html(placeDetails.name);
	tweetString += placeDetails.name;
	if($('#fav_'+ placeDetails.place_id).hasClass('yellowColored')) {
		$('#currentFavStar').addClass('yellowColored');
		$('#currentFavStar').addClass('fa-star');
		$('#currentFavStar').removeClass('fa-star-o');
	} else {
		$('#currentFavStar').removeClass('yellowColored');
		$('#currentFavStar').removeClass('fa-star');
		$('#currentFavStar').addClass('fa-star-o');
	}
	if(placeDetails.formatted_address) {
		detailsTableData += '<tr><input type="hidden" id="currentPlaceName" name="currentPlaceName" value="'+placeDetails.name+'"> <input type="hidden" id="currentPlaceAddr" name="currentPlaceAddr" value="'+placeDetails.formatted_address+'"><input type="hidden" id="currentPlaceId" name="currentPlaceId" value="'+placeDetails.place_id+'"><input type="hidden" id="currentCategory" name="currentCategory" value="'+placeDetails.icon+'"><th>Address</th><td class="noWrap">' + placeDetails.formatted_address + '</td</tr>';
		$('#destinationLocation').val(placeDetails.formatted_address);
		tweetString += ' located at ' + placeDetails.formatted_address + '.';
		$('#destLocationLat').val(placeDetails.geometry.location.lat);
		$('#destLocationLng').val(placeDetails.geometry.location.lng);
	}
	if(placeDetails.international_phone_number) {
		detailsTableData += '<tr><th>Phone Number</th><td class="noWrap">' + placeDetails.international_phone_number + '</td</tr>';	
	}
	if(placeDetails.price_level) {
		var pricing = parseInt(placeDetails.price_level);
		detailsTableData += '<tr><th>Price Level</th><td class="noWrap">';
		for(var m = 0; m < pricing; m++) {
			detailsTableData += '$';
		}
		detailsTableData +=  '</td</tr>';
	}
	if(placeDetails.rating) {
		detailsTableData += '<tr><th>Rating</th><td class="noWrap">' + placeDetails.rating;
		detailsTableData += ' <span id="placeRating"></span></td</tr>';
	}
	if(placeDetails.url) {
		detailsTableData += '<tr><th>Google Page</th><td class="noWrap"><a href="'+placeDetails.url+'" target="_blank"> ' + placeDetails.url + '</a></td</tr>';	
	}
	if(placeDetails.website) {
		detailsTableData += '<tr><th>Website</th><td class="noWrap"><a href="'+placeDetails.website+'" target="_blank"> ' +placeDetails.website + '</td</tr>';
	}
	if(placeDetails.opening_hours) {

		detailsTableData += '<tr><th>Hours</th><td class="noWrap">';

		if(placeDetails.opening_hours.isOpen) {
			var openingHours = placeDetails.opening_hours.weekday_text;
			var currentDate = new Date();
			var currentDay = currentDate.getDay();
			var currentDaysHours = openingHours[currentDay-1];
			var timeToDisplay = currentDaysHours.replace('""',"").split(': ')[1];
			if(timeToDisplay == 'Open 24 hours') {
				detailsTableData += timeToDisplay ;
			} else {
				detailsTableData += 'Open now: ' + timeToDisplay ;
			}
			
		} else {
			detailsTableData += 'Closed ';
		}
		detailsTableData += '<a href="" data-toggle="modal" data-target="#myModal"> Daily open hours</a></td</tr>';
		$('#modal-header').html('Open hours');
		$('#modal-body').html(populateModalTable(placeDetails.opening_hours ,placeDetails.utc_offset_minutes));
	}
	detailsTableData += '</tbody>';
	$('#placeDetailsDiv').html(detailsTableData);
	$("#placeRating").rateYo({
		rating:  placeDetails.rating,
		starWidth : "12px",
		readOnly: true
	});
	tweetString += ' Website: ';
	tweetString = encodeURIComponent(tweetString);
	if(placeDetails.website) {
		tweetString += '&url='+placeDetails.website;
	} else if (placeDetails.url) {
		tweetString += '&url='+placeDetails.url;
	}
	tweetString = 'https://twitter.com/intent/tweet?hashtags=TravelAndEntertainmentSearch&text='+tweetString;
	$('#tweetBtn').off('click');

	$('#tweetBtn').on('click', function(){
		
		window.open(tweetString,'','height=550px,width=420px,left=10,top=10,,scrollbars=yes,menubar=no');
	});
	if(placeDetails.rating) {
		var starPercentage = (placeDetails.rating / 5) * 100;
		var starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
		$('.stars-inner').css('width', starPercentageRounded);
	}

	function populateModalTable(weekOpeningHours, offset) {
		var n = -1;
		if(weekOpeningHours.isOpen) {
			n = moment().day()-1;
		}
		weekOpeningHours = weekOpeningHours.weekday_text;
		var hoursDifference = (offset/60 - (moment().utcOffset()/60));
		var currentDateWithOffset = moment();
		currentDateWithOffset.add(hoursDifference, 'hours');
		var startDay = (currentDateWithOffset.day());
		var table = '<table class="table"><tbody>';
		if(n == -1) {
			n = startDay - 1;
		}
		var x = n;
		table += '<tr><td class="noWrap"><b>'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</b></td><td class="noWrap"><b>'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</b></td></tr>';
		x++;
		while(x <= 6) {
			table += '<tr><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</td><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</td></tr>';
			x++;
		}
		x = 0;
		while(x < n) {
			table += '<tr><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[0]+'</td><td class="noWrap">'+weekOpeningHours[x].replace('""',"").split(': ')[1]+'</td></tr>';
			x++;	
		}
		return table;
	}


	function performPlaceTimeCalc(opening_hours, offset) {
		var weekday_sch = opening_hours.weekday_text;
		weekOpeningHours = processWeekSchedule(weekday_sch, offset);
		if(opening_hours.isOpen) {
			var timeRange = 'Open now : ' + weekOpeningHours[moment(new Date()).format('dddd')];
			var day = moment();
			return timeRange;
		} else {
			var timeRange = 'Closed';
			return timeRange;
		}
	}

	function processWeekSchedule(weekday_schedule, offset) {
		var weekSchedule = {};
		for(var x = 0; x < weekday_schedule.length; x++) {
			var currentDaySchedule = weekday_schedule[x];
			currentDaySchedule = currentDaySchedule.replace('"', '');
			var day_value = currentDaySchedule.split(': ');				
			var timings = day_value[1].trim();


			var offset = moment().utc()._offset;
			if(offset > 0) {
				var currentPlaceDate = moment(new Date()).format('YYYY/MM/DD');
				var currentTiming = timings.split('–');
				currentTiming[0] = moment(currentTiming[0], 'h:mm A').format('HH:mm');
				currentTiming[1] = moment(currentTiming[1], 'h:mm A').format('HH:mm');
				var offset = moment().utc()._offset;
				currentTiming[0] = moment.utc(currentPlaceDate+ ' ' + currentTiming[0]).utcOffset(''+offset+'').format('h:mm A');
				currentTiming[1] = moment.utc(currentPlaceDate+ ' ' + currentTiming[0]).utcOffset(''+offset+'').format('h:mm A');
				weekSchedule[day_value[0]] = currentTiming[0] +''+ currentTiming[1];

			} else {
				weekSchedule[day_value[0]] = day_value[1].trim();
			}
		}
		return weekSchedule;
	}
}

$('#resultsTab').off('click');
$('#resultsTab').on('click', function() {
	$('#resultsTab').addClass('active');
	$('#favouritesTab').removeClass('active');
	$('#favouritesTable').addClass('hideElement');
	$('#resultTable').removeClass('hideElement');
	$('#paginationPane').removeClass('hideElement');
	$('#placesResultsSection').removeClass('hideElement');
	$('#pageDetailsBlock').addClass('hideElement');
	$('#paginationPane').removeClass('hideElement');
	displayPaginationPane(true);
	if((($('#resultTable').find('.alert-warning').length > 0) || ($('#resultTable').find('.alert-danger').length > 0)) || ($('#resultTable').html().trim() == "")) {
		detailsBtnToggle(true);
	} else {
		detailsBtnToggle(false);
		if($('#currentPlaceId').val() && ($('#currentPlaceId').val() != "")) {
			$('#detailsBtn').prop('disabled', false);
			$('#detailsBtn').off('click');
			$('#detailsBtn').on('click', function() {
				$('#placesResultsSection').addClass('hideElement');
				$('#paginationPane').addClass('hideElement');
				$('#pageDetailsBlock').removeClass('hideElement');
			});
		} else {
			$('#detailsBtn').prop('disabled', true);
		}
		//If Enabled/Disabled
	}
});

$('#favouritesTab').off('click');
$('#favouritesTab').on('click', function() {
	detailsBtnToggle(true);
	$('#resultsTab').removeClass('active');
	$('#favouritesTab').addClass('active');
	$('#placesResultsSection').removeClass('hideElement');
	$('#pageDetailsBlock').addClass('hideElement');
	$('#favouritesTable').removeClass('hideElement');
	$('#paginationPane').addClass('hideElement');
	$('#resultTable').addClass('hideElement');

	var favouritePlacesSaved = getLocalStorageData();
	if(favouritePlacesSaved) {
		favouritePlacesSaved = JSON.parse(favouritePlacesSaved);
		if(favouritePlacesSaved && favouritePlacesSaved != "" && favouritePlacesSaved.length > 0) {
			var placesToDisplay = favouritePlacesSaved[0];
			if(Object.keys(placesToDisplay).length > 0) {
				favPage = 0;
				displayFavouritesTable(placesToDisplay , favPage);
				detailsBtnToggle(false);
				if($('#currentPlaceId').val() && ($('#currentPlaceId').val() != "")) {
					$('#detailsBtn').prop('disabled', false);
					$('#detailsBtn').off('click');
					$('#detailsBtn').on('click', function() {
						$('#placesResultsSection').addClass('hideElement');
						$('#paginationPane').addClass('hideElement');
						$('#pageDetailsBlock').removeClass('hideElement');
					});
				} else {
					$('#detailsBtn').prop('disabled', true);
				}
			} else {
				detailsBtnToggle(true);
				$('#favouritesTable').html(noRecordsFoundBanner());
			}
		}
	} else {
		detailsBtnToggle(true);
		$('#favouritesTable').html(noRecordsFoundBanner());
	}
});

function getObjectSize(placesToDisplay) {
	var cnt = 0;
	for(var key in placesToDisplay) {
		cnt++;
	}
	return cnt;
}

function displayFavouritesTable(placesToDisplay, pageNoStart) {
	var resultTable = "<div class='table-responsive'><table class='table table-sm nearbyPlacesResults table-hover'><tbody ng-fav-append id='nearPlacesBody'>";
	resultTable += generateTableHeaders();
	var i = 0;
	
	resultTable += "</tbody></table></div>";
	$("#favouritesTable").html(resultTable);

	resultTable = "";

	var limit = pageNoStart + 20; //10
	var startingNo = 0;
	for(var key in placesToDisplay) {
		if(startingNo >= pageNoStart && startingNo < limit) {
			var value = placesToDisplay[key];
			if($('#currentPlaceId').val() == key) {
				resultTable += "<tr class='table-warning'>";
			} else {
				resultTable += "<tr>";
			}
			resultTable += "<td class='noWrap'>"+(i+1)+"</td>";
			resultTable += "<td class='noWrap'><img src='"+value.category+"' alt='icon' width='30px'/></td>";
			resultTable += "<td class='noWrap'>"+value.placename+"</td>";
			resultTable += "<td class='noWrap'>"+value.addr+"</td>";
			resultTable += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn deleteFavBtn'><i class='fa fa-trash' data-placeid='"+key+"'></i></button></td>";	
			resultTable += "<td class='noWrap'><span ng-click='result=true;favor=true;placeDetails=false;'><button type='button' class='btn btn-light favPlaceDetailsBtn' data-placeid='"+key+"'><i class='fa fa-chevron-right'></i></button></span></td>";
			resultTable += "</tr>";
			i++;
		}
		startingNo++;
	}

	var $target = $("[ng-fav-append]");
	angular.element($target).injector().invoke(function($compile) {
		var $scope = angular.element($target).scope();
		$target.append($compile(resultTable)($scope));
		$scope.$apply();
	});

	$('.favPlaceDetailsBtn').off('click');
	$('.favPlaceDetailsBtn').on('click', function() {
		retrievePlaceDetailsFor($(this).data('placeid'));
	});

	$('.deleteFavBtn').off('click');
	$('.deleteFavBtn').on('click', function(){
		var localStoredData = getLocalStorageData();
		if(localStoredData) {
			localStoredData = JSON.parse(localStoredData);
			if(localStoredData[0][$($(this).first()[0].firstChild).data('placeid')] && Object.keys(localStoredData[0]).length>0) {
				delete localStoredData[0][$($(this).first()[0].firstChild).data('placeid')];
				localStoredData = JSON.stringify(localStoredData);
				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).removeClass('yellowColored');
				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).removeClass('fa-star');
				$('#fav_'+$($(this).first()[0].firstChild).data('placeid')).addClass('fa-star-o');
				if($('#currentPlaceId').val() == $($(this).first()[0].firstChild).data('placeid')) {
					$('#currentFavStar').addClass('fa-star-o');
					$('#currentFavStar').removeClass('fa-star');
					$('#currentFavStar').removeClass('yellowColored');
				}
				saveLocalStorageData(localStoredData);
				$('#favouritesTab').trigger('click');
			} else{ 
				$('#favouritesTable').html(noRecordsFoundBanner());
			}
		}

	});
	limit = limit;
	
	$('#favouritesTable').append(favoritesPagination(pageNoStart, limit, getObjectSize(placesToDisplay)));
	$('#nextFavPage').off('click');
	$('#nextFavPage').on('click', function(){
		displayFavouritesTable(placesToDisplay, limit);
	});
	$('#prevFavPage').off('click');
	$('#prevFavPage').on('click', function(){
		displayFavouritesTable(placesToDisplay, pageNoStart-20);
	});
}

function favoritesPagination(lowerLimit, upperLimit, length) {
	var pagination = "<div class='col-12 text-center'><div id='favPagination' class='col-12'>";
	if(lowerLimit>0) {
		pagination += "<button type='button' id='prevFavPage' class='btn paginationButtons'>Previous</button>";
	}
	if(upperLimit < length) {
		pagination += "<button type='button' id='nextFavPage' class='btn paginationButtons'>Next</button>";	
	}
	pagination += "</div></div>";
	
	return pagination;
}


function noRecordsFoundBanner() {
	var banner = '<div class="alert alert-warning marginTop1 fullWidth" role="alert">No Records.</div>';
	return banner;
}

function failedToConnect() {
	var banner = '<div class="alert alert-danger marginTop1 fullWidth" role="alert">Failed to get search results.</div>';
	return banner;
}

function populateNextResults(results, pageNo) {
	var resultTable = '';
	for(var i = 0; i < results.results.length; i++) {
		resultTable += generateTableResults(i, results.results[i], true, pageNo);
	}
	var $target = $("[ng-new-append]");
	angular.element($target).injector().invoke(function($compile) {
		var $scope = angular.element($target).scope();
		$target.append($compile(resultTable)($scope));
		$scope.$apply();
	});
	$('#nearPlacesBody').append(resultTable);
	$('.placeDetailsBtn').off('click');
	$('.placeDetailsBtn').on('click', function(){
		$('#resultTable').find('.table-warning').each(function(index){
			$(this).removeClass('table-warning');
		});
		retrievePlaceDetailsFor($(this).data('placeid'));
		$(this).parents('tr').addClass('table-warning');
	});

	$('.favoriteMe').off('click');
	$('.favoriteMe').on('click', function(){
		favoriteFunc($(this));
	});
}

function generateDetailsButton() {
	return ('<div class="row">'+
		'<div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 offset-md-10 offset-sm-10 offset-xs-10 offset-lg-10 offset-xl-10">'+
		'<div class="row detailsBtnDiv">'+
		'<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">'+
		'<button id="detailsBtn" type="button" class="btn btn-light detailsBtn">Details <i class="fa fa-angle-right"></i>'+
		'</button></div></div></div></div>');
}

function generateTableHeaders() {
	var tableHeading = '';
	tableHeading += '<thead><tr>';
	tableHeading += '<td class="noWrap"><b>#</b></td>';
	tableHeading += '<td class="noWrap"><b>Category</b></td>';
	tableHeading += '<td class="noWrap"><b>Name</b></td>';
	tableHeading += '<td class="noWrap"><b>Address</b></td>';
	tableHeading += '<td class="noWrap"><b>Favorite</b></td>';
	tableHeading += '<td class="noWrap"><b>Details</b></td>';
	tableHeading += '</tr></thead>';
	return tableHeading;
}

function generateTableResults(i, result, hide, pageNo) {
	var localStoredData = getLocalStorageData();
	if(localStoredData && localStoredData != '') {
		localStoredData = JSON.parse(localStoredData);
	} else {
		localStoredData = null;
	}
	var place = "";
	if(hide){
		place += "<tr class='page"+pageNo+" hideElement'>";
	} else {
		place += "<tr class='page"+pageNo+"'>";
	}
	place += "<td class='noWrap'>"+(i+1)+"</td>";
	place += "<td class='noWrap'><img src='"+result.icon+"' alt='icon' width='30px'/></td>";
	place += "<td class='noWrap'>"+result.name+"</td>";
	place += "<td class='noWrap'>"+result.vicinity+"</td>";
	if(localStoredData && localStoredData[0][result.place_id]) {
		place += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn favoriteMe'><i id='fav_"+result.place_id+"' class='fa fa-star yellowColored' data-category='"+result.icon+"' data-placename='"+result.name+"' data-addr='"+result.vicinity+"' data-placeid='"+result.place_id+"'></i></button></td>";	
	} else {
		place += "<td class='noWrap'><button type='button' class='btn btn-light favoritesBtn favoriteMe'><i id='fav_"+result.place_id+"' class='fa fa-star-o' data-category='"+result.icon+"' data-placename='"+result.name+"' data-addr='"+result.vicinity+"' data-placeid='"+result.place_id+"'></i></button></td>";
	}
	place += "<td class='noWrap'><span ng-click='result=true;favor=true;detailsPane=true;placeDetails=false;detailsBtnPane=true'><button type='button' class='btn btn-light placeDetailsBtn' data-placeid='"+result.place_id+"'><i class='fa fa-chevron-right'></i></button></span></td>";
	place += "</tr>";
	return place;
}

function loadMap(directionsDisplay, directionsService, locationLatitude, locationLongitude) {
		//var directionsDisplay = new google.maps.DirectionsRenderer;
		//var directionsService = new google.maps.DirectionsService;
		var coordinates = {lat: locationLatitude , lng: locationLongitude};
		var map = new google.maps.Map(document.getElementById('mapSpan'), {
			zoom: 15,
			center: coordinates
		});
		if(!$('#directionsClicked').val()  || $('#directionsClicked').val() == '') {
			marker = new google.maps.Marker({
				position: coordinates,
				map: map
			});	
		}
		
		marker.setVisible(true);
		directionsDisplay.setMap(map);
	}

	function generateProgressBar() {
		var progressbar = '<div class="progress">';
		progressbar += '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">';
		progressbar += '</div>';
		return progressbar;
	}
	$('#customizedSearch').off('click');
	$('#customizedSearch').on('click', function(e) {
		$('#resultsTab').trigger('click');
		detailsBtnToggle(true);
		searchClicked = ($('input[name=fromLocationOption]:checked').val() == 'hereLocation') ? 'Your location' : $('#customLocationText').val();
		$('#placesResultsSection').removeClass('hideElement');
		$('#pageDetailsBlock').addClass('hideElement');
		$('#favouritesTable').addClass('hideElement');
		$('#resultTable').addClass('hideElement');
		$('#resultsTab').addClass('active show');
		if($('input[name=fromLocationOption]:checked').val() == 'hereLocation') {
			$('#customLocationText').val('');
		}
		$('#favouritesTab').removeClass('active show');
		
		currentNearbyPlaces = {};
		current_result_count = 0;
		currentNearbyPlaces = {};
		current_result_count = 0;
		current_page_in_view = 1;
		displayPaginationPane(true);
		$('#placeDetailsTab').trigger('click');
		$('#travelMode').val('DRIVING');
		$('#dropdownMenuButton').html('Google Reviews');
		$('#reviewsSorting').html('Default Order');
		$('#progressBar').removeClass('hideElement');
		//$('#progressBar').html(generateProgressBar());
		var myFields = collectFormData();
		$('#directionsClicked').val('');
		var sourceLocationForMap = (myFields.fromLocationOption == 'hereLocation') ? ' My location' : myFields.customLocationText;
		$('#sourceLocation').val(sourceLocationForMap);
		ajaxRestCall('/getNearByPlaces', 'GET', myFields, getNearbyPlaces);
	});

	function startAutoComplete(element) {
		var autocomplete = new google.maps.places.Autocomplete((document.getElementById(element)), {types: ['geocode']});
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var geolocation = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				var circle = new google.maps.Circle({
					center: geolocation,
					radius: position.coords.accuracy
				});
				autocomplete.setBounds(circle.getBounds());
			});
			autocomplete.addListener('place_changed', fillPlaceCoordinates);
		}

		function fillPlaceCoordinates() {
			var place = autocomplete.getPlace();
			if(place && place.geometry.location) {
				$('#sourceLocationLat').val(place.geometry.location.lat());
				$('#sourceLocationLng').val(place.geometry.location.lng());
			} else {
				$('#sourceLocationLat').val('');
				$('#sourceLocationLng').val('');
			}
		}
	}	

	$('input:radio[name=fromLocationOption]').change(function(e) {
		var selectedCategory = $(e.target);
		enableSubmit();
		if(selectedCategory.attr('id') == 'hereLocation') {
			$('#customLocationText').prop('disabled', true);
			$('#customLocationText').removeClass('is-invalid');
			$('#customLocationTextFormError').css('display', 'none');
		} else {
			$('#customLocationText').prop('disabled', false);
		}
	});

	$('.togglePanes').on('click', function(e){
		$(this).children().removeClass('btn-primary-outline btn-primary');
		$(e.target).addClass('btn-primary');
	});

	function isEmpty(e) {
		if(e.value != ""){
			return true
		}
		else{
			return false
		}
	}

	function showFormErrorMessage(e) {
		e.addClass('is-invalid');
		$('#'+e.attr('id')+'FormError').css('display','block');
	}

	function hideFormErrorMessage(e) {
		e.removeClass('is-invalid');
		$('#'+e.attr('id')+'FormError').css('display', 'none');
	}

	function loadCategories() {
		var categories = ['Default', 'Airport', 'Amusement Park', 'Aquarium', 'Art Gallery', 'Bakery', 'Bar', 'Beauty Salon', 'Bowling Alley', 'Bus Station', 'Cafe', 'Campground', 'Car Rental', 'Casino', 'Lodging', 'Movie Theater', 'Museum', 'Night Club', 'Park', 'Parking', 'Restaurant', 'Shopping Mall', 'Stadium', 'Subway Station', 'Taxi Stand', 'Train Station', 'Transit Station', 'Travel Agency', 'Zoo'];
		var options = '';
		for(var i = 0; i < categories.length; i++) {
			options += '<option value = "'+categories[i]+'" >' + categories[i]+'</option>';
		}
		$('#category').append(''+options);
	}

	function enableSubmit() {
		debugger
		var keyword = isEmpty($('#keyword'));
		if(keyword) {
			var fromLocationOption = $('input[name=fromLocationOption]:checked').val();
			if(fromLocationOption == 'hereLocation') {
				var currentLocationLatitude = $('#currentLocationLatitude').val();
				var currentLocationLongitude = $('#currentLocationLongitude').val();
				if(currentLocationLongitude && currentLocationLatitude) {
					$('#customizedSearch').removeAttr('disabled');
				} else {
					$('#customizedSearch').prop("disabled", true);
				}
			} else if(fromLocationOption == 'customLocation') {
				var customLocationText = isEmpty($('#customLocationText'));
				if(customLocationText) {
					$('#customizedSearch').removeAttr('disabled');
				} else {
					$('#customizedSearch').prop("disabled", true);
				}
			}
		} else {
			$('#customizedSearch').prop("disabled", true);
		}
	}

	function loadCurrentLocation() {
		ajaxRestCall('http://ip-api.com/json', 'GET', null, setCurrentLocationCoordinates);
	}

	function startMapView(latitude, longitude){
		var fenway = {lat: Number(latitude), lng: Number(longitude)};
		var map = new google.maps.Map(document.getElementById('mapSpan'), {
			center: fenway,
			zoom: 14
		});
		var panorama = new google.maps.StreetViewPanorama(
			document.getElementById('mapSpan'), {
				position: fenway,
				pov: {
					heading: 34,
					pitch: 10
				}
			});
		map.setStreetView(panorama);
	}

	function ajaxRestCall(in_url, in_method, in_data, callback) {
		$.ajax({
			url: in_url,
			data: in_data,
			method: in_method,
			dataType: 'json',
			success: function(data) {
				callback(data);
			},
			error: function(xhr){
				callback(null);
			},
			complete: function(data) {
				return data;
			}

		});
	}
	function setCurrentLocationCoordinates(data){
		$('#currentLocationLatitude').val(data.lat);
		$('#currentLocationLongitude').val(data.lon);
	}
	function getLocalStorageData() {
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.getItem("nomadgomad")) {
				localStorage.setItem("nomadgomad", "");	
			}
			return localStorage.getItem("nomadgomad");
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}
	}
	function saveLocalStorageData(data) {
		localStorage.setItem("nomadgomad", data);	
	}
	loadCategories();
	loadCurrentLocation();
});