'use strict';
app.controller('carouselController', function($scope) {
    $scope.carousel = {};
    $scope.carousel.index = 0;
    $scope.carousel.count = 0;
    $scope.carousel.direction = '-';
    $scope.carousel.animate = false;
    $scope.carousel.showNext = function(obj, sectionName) {
        $scope.carousel.count = obj.length;
        $scope.carousel.animate = true;
        $scope.carousel.index = ($scope.carousel.index == $scope.carousel.count - 1) ? 0 : ++$scope.carousel.index;
        $scope.carousel.direction = '-';
        $scope.userSelections[sectionName + 'ID'] = $scope.carousel.index;
    }
    $scope.carousel.showPrev = function(obj, sectionName) {
        $scope.carousel.count = obj.length;
        $scope.carousel.animate = true;
        $scope.carousel.index = ($scope.carousel.index < 1) ? $scope.carousel.count - 1 : --$scope.carousel.index;
        $scope.carousel.direction = '+';
        $scope.userSelections[sectionName + 'ID'] = $scope.carousel.index;
    }
    $scope.carousel.isAnimating = false;
    $scope.carousel.navigateTo = 0;
    $scope.carousel.animateOnClick = false;
    $scope.carousel.navigate = function(index, len) {
        $scope.carousel.count = len;
        var to = index - $scope.carousel.index;
        if ($scope.carousel.index == (len - 1)) {
            if (index < 2) {
                to = index + 1;
            }
        }
        if ($scope.carousel.index == (len - 2)) {
            if (index == 0) {
                to = 2;
            }
        }
        if ($scope.carousel.index == 0) {
            if (index >= (len - 2)) {
                to = index - len;
            }
        }
        if ($scope.carousel.index == 1) {
            if (index == (len - 1)) {
                to = -2;
            }
        }
        $scope.carousel.navigateTo = to;
        $scope.carousel.animateOnClick = !$scope.carousel.animateOnClick;
    }
});
app.directive('animateCarousel', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.animateCarousel, function(index) {
            var d = scope.carousel.direction,
                w = jQuery(element).children().eq(0).outerWidth(true),
                x = 0;
            if (!scope.carousel.animate) {
                //jQuery(element).css('width', (w * scope.carousel.count) + 'px');
                jQuery(element).css('width', '20000px');
                jQuery(element).children().eq(scope.carousel.count - 1).insertBefore(jQuery(element).children().eq(0));
                jQuery(element).children().eq(1).addClass('first');
                jQuery(element).children().eq(3).addClass('highlight');
                jQuery(element).css('left', '-' + w + 'px');
                return;
            }
            /*if (scope.carousel.isAnimating) {
                return;
            } else {
                scope.carousel.isAnimating = true;
            }*/
            jQuery(element).children().eq(1).removeClass('first');
            jQuery(element).children().eq(3).removeClass('highlight');
            x = (d == '+') ? w - w : w + w;
            jQuery(element).animate({
                'left': d + x + 'px'
            }, 600, function() {
                scope.carousel.isAnimating = false;
                if (d == '-') {
                    jQuery(element).children().eq(0).insertAfter(jQuery(element).children().eq(scope.carousel.count - 1));
                } else {
                    jQuery(element).children().eq(scope.carousel.count - 1).insertBefore(jQuery(element).children().eq(0));
                }
                jQuery(element).children().eq(1).addClass('first').siblings().removeClass('first');
                jQuery(element).children().eq(3).addClass('highlight').siblings().removeClass('highlight');
                jQuery(element).css('left', '-' + w + 'px');
            });
        });
    }
});
app.directive('fadingCarousel', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.fadingCarousel, function(index) {
            jQuery(element).children().fadeOut(600);
            var t = setTimeout(function() {
                jQuery(element).children().eq(index).fadeIn(600);
                jQuery(element).children().eq(index).siblings().fadeOut(600);
                clearInterval(t);
            }, 400);
        });
    }
});
app.directive('repositionThumbnails', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.repositionThumbnails, function(times) {
            if (!scope.carousel.animate) {
                for (var i = 0; i < times; i++) {
                    jQuery(element).children().eq(scope.carousel.count - 1).insertBefore(jQuery(element).children().eq(0));
                }
            }
        });
    }
});
// Adjust full screen carousel on weather page
app.directive('setCustomWidth', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.setCustomWidth, function(defaultWidth) {
            var currentWidth = $window.innerWidth,
                ratio = defaultWidth / 1920,
                calculatedWidth = ratio * currentWidth;
            element.css('width', calculatedWidth + 'px');
        });
    }
});
app.directive('carouselNavigate', function($animate, $window) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.carouselNavigate, function(animate) {
            var position = scope.carousel.navigateTo;
            var repeat;
            var lc = 0;
            var button = '.next';
            if (position < 0) {
                position = -position;
                button = '.previous'
            }
            if (position > 0 || position < 0) {
                console.log('x');
                repeat = setInterval(function() {
                    jQuery(element).find(button).trigger('click');
                    lc++;
                    if (lc == position) {
                        clearInterval(repeat);
                    }
                }, 800);
            }
        });
    }
});