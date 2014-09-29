'use strict';
app.controller('mainController', function($scope) {
    $scope.locations = [{
        'id': 0,
        'name': 'Cross Country',
        'description': 'Break free of the constrictions of the road, power across lush meadows and fields and explore',
        'mainImage': 'img/locations/meadows.jpg',
        'thumbnail': 'img/locations/thumbnails/Cross-countryTH.jpg',
        'roadTripName': 'Cross-Country Carnage'
    }, {
        'id': 1,
        'name': 'Winding Streets',
        'description': 'Race around some of Europe\'s most beautiful and iconic streets',
        'mainImage': 'img/locations/winding.jpg',
        'thumbnail': 'img/locations/thumbnails/Winding-streetsTH.jpg',
        'roadTripName': 'Hit the Road'
    }, {
        'id': 2,
        'name': 'Old Town Night Race',
        'description': 'Challenge yourself to tackle precision cornering and tight s-bends',
        'mainImage': 'img/locations/old_town_nightrace.jpg',
        'thumbnail': 'img/locations/thumbnails/Old-town-nightraceTH.jpg',
        'roadTripName': 'Night on the Tiles'
    }, {
        'id': 3,
        'name': 'Roman Roads',
        'description': 'Race through barriers and speed down ancient highways in all weathers',
        'mainImage': 'img/locations/street_race.jpg',
        'thumbnail': 'img/locations/thumbnails/Roman-RoadsTH.jpg',
        'roadTripName': 'Roadracer'
    }, {
        'id': 4,
        'name': 'Mediterranean Trail',
        'description': 'Drift along rough sandy tracks against the exotic backdrop of the Mediterranean ',
        'mainImage': 'img/locations/med.jpg',
        'thumbnail': 'img/locations/thumbnails/Mediterranean-trailTH.jpg',
        'roadTripName': 'Trailblazer'
    }, {
        'id': 5,
        'name': 'Alpine Altitude',
        'description': 'Thunder along epic mountain roads, through winding tunnels and high-altitude mountain passes',
        'mainImage': 'img/locations/high_altitude.jpg',
        'thumbnail': 'img/locations/thumbnails/Alpine-altitudeTH.jpg',
        'roadTripName': 'Alpine Adventurer'
    }, {
        'id': 6,
        'name': 'Off-road Italy',
        'description': 'Race through a landscape of cyprus trees and vineyards',
        'mainImage': 'img/locations/off_road.jpg',
        'thumbnail': 'img/locations/thumbnails/Off-road-ItalyTH.jpg',
        'roadTripName': 'Italian Job'
    }, {
        'id': 7,
        'name': 'Cosmopolitan Streets',
        'description': 'Manoeuver the tight hairpins and cobbled streets of Europe\'s cities',
        'mainImage': 'img/locations/cos.jpg',
        'thumbnail': 'img/locations/thumbnails/Cosmopolitan-streetsTH.jpg',
        'roadTripName': 'City Racer'
    }, {
        'id': 8,
        'name': 'Coastal Cruise',
        'description': 'Coast along the rugged seaside terrain of Southern Europe',
        'mainImage': 'img/locations/coastal.jpg',
        'thumbnail': 'img/locations/thumbnails/Coastal-cruiseTH.jpg',
        'roadTripName': 'Coastal Cruiser'
    }];
    $scope.cars = [{
        'id': 0,
        'make': 'Lamborghini',
        'model': 'Huracan LP 610-4',
        'mainImage': 'img/cars/1.jpg',
        'thumbnail': 'img/cars/thumbnails/1.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '200 MPH',
            'bhp': '602',
            'acceleration': '3.1 (SECS)'
        }
    }, {
        'id': 1,
        'make': 'Aston Martin',
        'model': 'Martin V12 Vantage S',
        'mainImage': 'img/cars/2.jpg',
        'thumbnail': 'img/cars/thumbnails/2.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '205 MPH',
            'bhp': '565',
            'acceleration': '3.7 (SECS)'
        }
    }, {
        'id': 2,
        'make': 'BMW',
        'model': 'M3',
        'mainImage': 'img/cars/3.jpg',
        'thumbnail': 'img/cars/thumbnails/3.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '156 MPH',
            'bhp': '425',
            'acceleration': '3.9 (SECS)'
        }
    }, {
        'id': 3,
        'make': 'Nissan',
        'model': 'GT-R',
        'mainImage': 'img/cars/4.jpg',
        'thumbnail': 'img/cars/thumbnails/4.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '193 MPH',
            'bhp': '478',
            'acceleration': '3.4 (SECS)'
        }
    }, {
        'id': 4,
        'make': 'Audi',
        'model': 'R8 V10',
        'mainImage': 'img/cars/5.jpg',
        'thumbnail': 'img/cars/thumbnails/5.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '196 MPH',
            'bhp': '478',
            'acceleration': '3.9 (SECS)'
        }
    }, {
        'id': 5,
        'make': 'Mclaren',
        'model': '650S',
        'mainImage': 'img/cars/6.jpg',
        'thumbnail': 'img/cars/thumbnails/6.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '207 MPH',
            'bhp': '616',
            'acceleration': '2.9 (SECS)'
        }
    }, {
        'id': 6,
        'make': 'Jaguar',
        'model': 'F-Type',
        'mainImage': 'img/cars/7.jpg',
        'thumbnail': 'img/cars/thumbnails/7.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '196 MPH',
            'bhp': '478',
            'acceleration': '3.9 (SECS)'
        }
    }, {
        'id': 7,
        'make': 'Lamborghini',
        'model': 'Aventador',
        'mainImage': 'img/cars/8.jpg',
        'thumbnail': 'img/cars/thumbnails/8.jpg',
        'logo': '',
        'specs': {
            'topSpeed': '196 MPH',
            'bhp': '478',
            'acceleration': '3.9 (SECS)'
        }
    }, ];
    $scope.weather = $scope.UTIL.cloneArrayItems([{
        'id': 0,
        'title': 'Warm & Sunny',
        'description': 'Slip on your shades, ramp up the volume and ease your foot off the gas: these conditions are for seeing... and being seen.',
        'mainImage': 'img/weather/1.jpg'
    }, {
        'id': 1,
        'title': 'Snow & Ice',
        'description': 'Winter-proof your supercar and drive: get all the thrills and chills of a winter landscape.',
        'mainImage': 'img/weather/2.jpg'
    }, {
        'id': 3,
        'title': 'Night Time',
        'description': 'An illuminated dash, laser headlights and a deserted road: put your foot down and drive.',
        'mainImage': 'img/weather/3.jpg'
    }, {
        'id': 4,
        'title': 'Dark & Stormy',
        'description': 'Experience all the drama of a drive that tests your supercar\'s handling - and your mettle.',
        'mainImage': 'img/weather/4.jpg'
    }, {
        'id': 5,
        'title': 'Unpredictable',
        'description': 'Like spontaneity? Just jump in the driving seat and steer your supercar to take on whatever the elements throw at it.',
        'mainImage': 'img/weather/5.jpg'
    }]);
    $scope.userSelections = {
        'locationID': 0,
        'carID': 0,
        'weatherID': 0
    }
    $scope.getRoadTripName = function() {
        var name = 'Monaco Mania';
        var userSelections = $scope.userSelections;
        if (userSelections.locationID == 0 && userSelections.carID == 0 && userSelections.weatherID == 0) {
            name = 'Midtown Madness';
        }
        return name;
    }
    $scope.showScreenID = 1;
    $scope.continueToScreenID = 0;
    $scope.continue = function(id) {
        $scope.showScreenID = id;
        $scope.continueToScreenID = id > $scope.continueToScreenID ? id : $scope.continueToScreenID;
    }
    $scope.navigate = function(id, isLocked) { // if element has does not have on then dont change
        console.log(isLocked);
        if (isLocked) {
            return;
        }
        $scope.showScreenID = id;
    }
    $scope.captureData = function() {
        setTimeout(function() {
            window.location.href = 'competition.html'
        }, 800);
    }
    $scope.fbShare = function(roadTripName) {
        if (typeof roadTripName === 'undefined') {
            return;
        }
        var name = roadTripName.toUpperCase();
        FB.ui({
            method: 'feed',
            name: 'MY ULTIMATE ROAD TRIP: ' + name,
            link: 'http://www.topgear.com/forza',
            picture: 'http://compass.xboxlive.com/assets/5d/ab/5dabf58b-a2bb-4901-bde5-0f49d168086f.jpg',
            description: 'Visit www.topgear.com/forza now to create your own perfect Forza road trip! Share with your friends and you could win a perfect road trip of your own with a friend to Monaco!'
        }, function(response) {
            $scope.captureData();
        });
    }
});
app.directive('slideUp', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.slideUp, function(newVal) {
            var mainHeight;
            if ($window.innerWidth > 1280) {
                mainHeight = 1080;
            } else {
                mainHeight = 720;
            }
            if (newVal) {
                var height = 1080;
                jQuery(element).siblings().css('z-index', '1')
                jQuery('html, body').animate({
                    scrollTop: '0'
                }, 600);
                jQuery(element).css('z-index', '9').animate({
                    'top': '70px'
                }, 500, function() {
                    jQuery(element).addClass('allow-fixed');
                    jQuery(element).siblings().removeClass('allow-fixed').animate({
                        'top': height + 'px'
                    }, 600); // Animate remaining sections out of view
                    if (scope.showScreenID == 1) {
                        jQuery('main').height(mainHeight);
                    } else {
                        jQuery('main').height(1080);
                    }
                    //jQuery('html, body').animate({ scrollTop: '0' }, function(){
                    /*if (scope.showScreenID == 1 || scope.showScreenID == 4) {
                        jQuery('main').height(mainHeight);
                    } else {
                        jQuery('main').height(1080);     
                    }*/
                    //});
                });
            }
        })
    }
});
/*app.animation('.slideUp', function () {
  return {
    addClass: function (element, className) {
        jQuery(element)
            .animate({
                'top': '0px'
            }, 600);
    }
  }
});*/
app.directive('fullHeight', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.setHeight = function() {
                //var height = $window.innerHeight > 1080 ? 1080 : $window.innerHeight ; // Cap the width to 1920 pixels
                //var heightCorrected = height - 0;
                var heightCorrected = 1080;
                element.css('height', heightCorrected + 'px');
            }
            scope.setHeight();
        }
    };
});
app.directive('fullHeightCorrected', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.setHeight = function() {
                //var height = $window.innerHeight > 1080 ? 1080 : $window.innerHeight ; // Cap the width to 1920 pixels
                var height = 1080;
                var heightCorrected = height - 70;
                element.css('height', heightCorrected + 'px');
            }
            scope.setHeight();
        }
    };
});
app.directive('viewportHeight', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.setHeight = function() {
                var height = $window.innerHeight;
                if (height > 1080) {
                    height = 1080;
                } else if (height < 600) {
                    height = 600;
                }
                var heightCorrected = height - 70;
                element.css('height', heightCorrected + 'px');
            }
            scope.setHeight();
        }
    };
});
app.directive('fullWidth', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.setWidth = function() {
                var w = jQuery('main').width();
                element.css('width', w + 'px');
            }
            scope.setWidth();
        }
    };
});
app.directive('pushScreen', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.setTop = function() {
                var height = 1080;
                element.css('top', height + 'px');
            }
            scope.setTop();
        }
    };
});
app.directive('applyCarouselFix', function($window) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.setWidth = function() {
                    var w = jQuery('main').width();
                    element.css('width', w + 'px');
                    jQuery(element).parent().css('left', '-' + w + 'px')
                }
                scope.setWidth();
                jQuery($window).resize(function() {
                    scope.setWidth();
                });
            }
        };
    })
    /*
    app.directive('unlockUserProgressIcon', function($window) {
        return function(scope, element, attrs) {
            
            scope.$watch(attrs.unlockUserProgressIcon, function(index) {
                console.log(index);
                if (index) {
                    jQuery(element).children().eq(index - 2)
                }
                
                    
            });
        };   
    });*/