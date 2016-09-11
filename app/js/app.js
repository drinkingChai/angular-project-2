(function() {
  'use strict';

  angular.module('bikingList', [])

    .controller('BikingListController', function() {
      this.rides = rides;
      this.tags = tags;
    })

    .directive('rideTags', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/ride-tags.html',
        scope: {
          tags: '='
        }
      }
    })

    .directive('rideCover', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/ride-cover.html',
        replace: true
      }
    })

    .directive('reviewForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/review-form.html',
        replace: true,
        controller: function() {
          this.showForm = false;
          this.ride = {tags: {}};

          this.addReview = function(form) {
            rides.push(this.ride);
            this.ride = {tags: {}};

            form.$setPristine();  //set the form validity back
          };
        },
        controllerAs: 'reviewFormCtrl',
        scope: {
          rides: '=',
          tags: '='
        }
      }
    })

  ;

  //data
  var tags = ['road', 'gravel', 'mountain', 'fatbike', 'cyclocross'];

  var rides = [
    {
      title: 'Cedar Mesa Loop: Ruins and Monuments',
      city: 'Lake Powell',
      state: 'UT',
      country: 'The United States',
      length: 154,  //distance in miles
      review: "With its abundance of canyon hikes, Cedar Mesa has long been a popular destination for backpackers. But great bikepacking opportunities abound on the dirt roads atop the mesa and through its washes and canyons. This weekend loop offers the chance to pass through incredible desert landscapes and explore some of the many Ancestral Puebloan ruins in the area.",
      tags: {'gravel': true, 'road': true, 'moutain': false},
      bikepackingFilePath: 'bikepacking-cedar-mesa',
      bikepackingImgPath: '2016/07/bikepacking-cedar-mesa_02.jpg'
    },
    {
      title: 'Red Meadow Pass Loop',
      city: 'Whitefish',
      state: 'MT',
      country: 'The United States',
      length: 104,
      review: "A lovely weekend dirt wander that takes in Montana's Whitefish Range, set just west of Glacier's staggering peaks and chock-full of dirt roads, singletrack, and stunning views. Named after a classic point along the GDMBR, the route climbs to the 5600' Red Meadow Pass and continues along a vehicle-free dirt road meandering in the laps of giants in Glacier National Park.",
      tags: {},
      bikepackingFilePath: 'red-meadow-pass',
      bikepackingImgPath: '2016/07/red-meadow-100-montana_01.jpg'
    },
    {
      title: "Bikepacking Abruzzo: The Wolf's Lair",
      city: "L'Aquila",
      state: '',
      country: 'Italy',
      length: 241,
      review: "A mixed terrain bikepacking loop through Abruzzo, Italy, an incredibly diverse region set amongst the spectacular Apennines mountains. This never-ending series of gravel doubletrack, stunning landscapes, delicious food and medieval villages will lead you into the “wolf’s lair” to discover the wild side of Abruzzo.",
      tags: {},
      bikepackingFilePath: 'bikepacking-abruzzo',
      bikepackingImgPath: '2016/07/bikepacking-abruzzo-00.jpg'
    },
    {
      title: 'Slate Springs Overnighter',
      city: 'Mount Solon',
      state: 'VA',
      country: 'The United States',
      length: 52,
      review: "The Shenandoah Mountain range just west of Harrisonburg, VA harbors some of the finest dirt roads on the east coast. This bikepacking overnighter route cuts through its heart and can be expanded to a weekend ride or more…",
      tags: {},
      bikepackingFilePath: 'overnighter-harrisonburg-va',
      bikepackingImgPath: '2016/05/slate-springs-overnighter-18.jpg'
    },
    {
      title: 'Two Gorges Gravel',
      city: 'Morganton',
      state: 'NC',
      country: 'The United States',
      length: 75,
      review: "This gravel bikepacking loop skirts the rim of Linville Gorge and passes through the Wild and Scenic Wilson Creek Gorge before returning to Morganton, NC via the Catawba River Greenway. Boasting 6,250+ feet of climbing over 74 miles, it's a challenge. But with incredible scenery, plenty of camping opportunities, and a speedy 20 mile descent, it makes a great sub-24 hour escape...",
      tags: {},
      bikepackingFilePath: 'two-gorges-gravel-s24o',
      bikepackingImgPath: '2016/05/two-gorges-S24O-16.jpg'
    }
  ];

})();

// Declare app level module which depends on views, and components
