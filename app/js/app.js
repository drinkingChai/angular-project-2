(function() {
  'use strict';

  angular.module('readingList', [])

    .controller('ReadingListController', function() {
      this.books = books;
      this.genres = genres;
    })

    .directive('bookGenres', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/book-genres.html',
        scope: {
          genres: '='
        }
      }
    })

    .directive('bookCover', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/book-cover.html',
        replace: true,
        scope: {
          isbn: '='
        }
      }
    })

    .directive('reviewForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/review-form.html',
        replace: true,
        controller: function() {
          this.showForm = false;
          this.book = {rating: 5, genres: {}};

          this.addReview = function(form) {
            books.push(this.book);
            this.book = {genres: {}};

            form.$setPristine();  //set the form validity back
          };
        },
        controllerAs: 'reviewFormCtrl',
        scope: {
          books: '=',
          genres: '='
        }
      }
    })

  ;

  //data
  var genres = ['comedy', 'drama', 'horror', 'non-fiction', 'fiction', 'romance', 'tragedy', 'satire'];

  var books = [
    {
      title: 'Pro Cycling on $10 a Day: From Fat Kid to Euro Pro',
      isbn: '1937715248',
      author: 'Jamie Smith',
      rating: 5,
      review: "We have discovered a light-hearted, hard-working rider with strong convictions.",
      genres: {'non-fiction': true}
    },
    {
      title: 'Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened',
      isbn: '1451666179',
      author: 'Allie Brosh',
      rating: 4,
      review: "In a culture that encourages people to carry mental illness as a secret burden . . . Brosh's bracing honesty is a gift.",
      genres: {'comedy': true, 'horror': true, 'tragedy': true}
    },
    {
      title: 'Beyond the Dark Portal',
      isbn: '1416550860',
      author: 'Aaron Rosenberg',
      rating: 4,
      review: "This book was an excellent ride that took you through one of the key components associated with the lore of Azeroth. If you are looking for a fun story, this is it. No working knowledge of the series is necessary, just enjoy.",
      genres: {'fiction': true, 'romance': true, 'drama': true}
    }
  ];

})();

// Declare app level module which depends on views, and components
