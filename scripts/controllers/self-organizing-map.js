'use strict';

/**
 * @ngdoc function
 * @name gitHubApp.controller:ImageFiltersCtrl
 * @description
 * # ImageFiltersCtrl
 * Controller of the gitHubApp
 */

var atoms = [
  {name: 'Li', dist: '2s1'},
  {name: 'Na', dist: '3s1'},
  {name: 'K', dist: '4s1'},
  {name: 'Rb', dist: '5s1'},
  {name: 'Cs', dist: '6s1'},
  {name: 'Fr', dist: '7s1'},
  {name: 'Be', dist: '7s2'},
  {name: 'Mg', dist: '7s2'},
  {name: 'Ca', dist: '7s2'},
  {name: 'Sr', dist: '7s2'},
  {name: 'Ba', dist: '7s2'},
  {name: 'Ra', dist: '7s2'},
  {name: 'Sc', dist: '4s23d1'},
  {name: 'Y', dist: '5s24d1'},
  {name: 'Lu', dist: '6s24f145d1'},
  {name: 'Lr', dist: '7s25f146d1'},
  {name: 'Ti', dist: '4s23d2'},
]


var family1 = /([1-9])?[1-9]s1$/
var family2 = /([1-9])?[1-9]s2$/
var family3 = /([1-9])?[1-9]d1$/
var family4 = /([1-9])?[1-9]d2$/
var family5 = /s14d4$|d3$/
var family6 = /s1[1-9]d5$|d4$/
var family7 = /!s1[1-9]d5$|s2[1-9]f14[1-9]d5$|5s14d6/
var family8 = /![1-4]s1[1-9]d6$|4s2[1-9]d6$|f14[1-9]d6$|5s1[1-9]d7$/
var family9 = /![1-4]s1[1-9]d7$|4s2[1-9]d7$|f14[1-9]d7$|5s1[1-9]d8$/
var family10 = /![1-4]s1[1-9]d8$|4s2[1-9]d8$|f14[1-9]d8$|5s1[1-9]d9$/

const makeInputs = (pos, tam) => Array.from({length: tam}, (k, v) => (pos==v+1)?1:0)

angular.module('gitHubApp')
  .controller('SelfOrganizingMapCtrl', function ($scope, $rootScope, $timeout, $location) {
    $rootScope.navbarActive = "demos";

    $scope.word = "";
    $scope.map = {};

    
    var inputsSize = 10;
    var families = [
      {
        name: 'family1',
        regex: family1,
        input: makeInputs(1, inputsSize)
      },
      {
        name: 'family2',
        regex: family2,
        input: makeInputs(2, inputsSize)
      },
      {
        name: 'family3',
        regex: family3,
        input: makeInputs(3, inputsSize)
      },
      {
        name: 'family4',
        regex: family4,
        input: makeInputs(4, inputsSize)
      },
      {
        name: 'family5',
        regex: family5,
        input: makeInputs(5, inputsSize)
      },
      {
        name: 'family6',
        regex: family6,
        input: makeInputs(6, inputsSize)
      },
      {
        name: 'family7',
        regex: family7,
        input: makeInputs(7, inputsSize)
      },
      {
        name: 'family8',
        regex: family8,
        input: makeInputs(8, inputsSize)
      },
      {
        name: 'family9',
        regex: family9,
        input: makeInputs(9, inputsSize)
      },
      {
        name: 'family10',
        regex: family10,
        input: makeInputs(10, inputsSize)
      }
    ]
    console.log('families', families)
    var first = true;
    var hopfield = new Architect.Hopfield(80);
    var trainer = new Trainer(hopfield);

    $scope.valid = function(){
      var valid = typeof $scope.word == 'string';
      // for (var i in $scope.draw)
      //   for (var j in $scope.draw[i])
      //     if ($scope.draw[i][j] == $scope.word)
      //       return false;
      return valid;
    }
    $scope.keyup= function(evt){
      if (evt.which == 32 || evt.which == 13)
      {
        // if ($scope.valid() && $scope.word.length > 0)
        // {
          feed($scope.word.trim());
          $scope.word = "";
        // }
      }
    }


    
    var feed = function(word){
      console.log('word', word);

      var input = makeInputs(20, inputsSize);
      // var input = ;

      var atom = atoms.filter((atom) => atom.name.toLowerCase() === word)

      console.log('atom', atom);
      if (atom.length) word = atom[0].dist

      var filtered = families.filter((f) => f.regex.test(word))

      console.log('filtered', filtered);
      input = (filtered.length) ? filtered[0].input : makeInputs(20, inputsSize)
// 
      console.log('input', input);
      console.log('input.join', input.join(''));

    // var output = hopfield.feed(input);
    var output = input;
      console.log('output', output);
    var key = output.join('');
      console.log('key', key);

    if (key in $scope.map)
    {
      $scope.map[key].push(word);
    } else {
      var learn = [];
      $scope.map[key] = [word];

      for (var i in $scope.map)
      {
        learn.push(i.split(''));
      }

      var set = [];
      for (var p in learn)
        set.push({
          input: learn[p],
          output: learn[p]
        });

      doTrain(set);
    }
    console.log(key);

    preview();
    }

    var doTrain = function(set){
      trainer.train(set, {
      iterations: 100,
      error: .5,
      rate: .05
    });
    }

    $scope.map[makeInputs(1, inputsSize).join('')] = ["família 1"];  
    $scope.map[makeInputs(2, inputsSize).join('')] = ["família 2"];
    $scope.map[makeInputs(3, inputsSize).join('')] = ["família 3"];
    $scope.map[makeInputs(4, inputsSize).join('')] = ["família 4"];
    $scope.map[makeInputs(5, inputsSize).join('')] = ["família 5"];
    $scope.map[makeInputs(6, inputsSize).join('')] = ["família 6"];
    $scope.map[makeInputs(7, inputsSize).join('')] = ["família 7"];
    $scope.map[makeInputs(8, inputsSize).join('')] = ["família 8"];
    $scope.map[makeInputs(9, inputsSize).join('')] = ["família 9"];
    $scope.map[makeInputs(10, inputsSize).join('')] = ["família 10"];

    $scope.map[makeInputs(20, inputsSize).join('')] = ["outros"];

    var learn = [
      makeInputs(20, inputsSize), // outros
      makeInputs(1, inputsSize), 
      makeInputs(2, inputsSize),
      makeInputs(3, inputsSize),
      makeInputs(4, inputsSize),
      makeInputs(5, inputsSize),
      makeInputs(6, inputsSize),
      makeInputs(7, inputsSize),
      makeInputs(8, inputsSize),
      makeInputs(9, inputsSize),
      makeInputs(10, inputsSize),
    ];
    var set = [];
  for (var p in learn)
    set.push({
      input: learn[p],
      output: learn[p]
    });

  doTrain(set);

  var preview = function(){
    var draw = []
    for (var i in $scope.map)
    {
      var row = draw.push([]) - 1;
      for (var j in $scope.map[i])
        draw[row].push($scope.map[i][j]);
    }
    $scope.draw = draw;
  }

  preview();

  });
