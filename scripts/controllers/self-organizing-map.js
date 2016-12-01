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
  {name: 'Be', dist: '2s2'},
  {name: 'Mg', dist: '3s2'},
  {name: 'Ca', dist: '4s2'},
  {name: 'Sr', dist: '5s2'},
  {name: 'Ba', dist: '6s2'},
  {name: 'Ra', dist: '7s2'},
  {name: 'Sc', dist: '4s23d1'},
  {name: 'Y', dist: '5s24d1'},
  {name: 'Lu', dist: '6s24f145d1'},
  {name: 'Lr', dist: '7s25f146d1'},
  {name: 'Ti', dist: '4s23d2'},
  {name: 'Zr', dist: '5s24d2'},
  {name: 'Hf', dist: '6s24f145d2'},
  {name: 'Rf', dist: '7s25f146d2'},
  {name: 'V', dist: '4s23d3'},
  {name: 'Nb', dist: '5s14d4'}, 
  {name: 'Ta', dist: '6s24f145d3'},
  {name: 'Db', dist: '7s25f146d3'},
  {name: 'Cr', dist: '4s13d5'},
  {name: 'Mo', dist: '5s14d5'},
  {name: 'W', dist: '6s24f145d4'},
  {name: 'Sg', dist: '7s25f146d4'},
  {name: 'Mn', dist: '4s23d5'},
  {name: 'Tc', dist: '5s14d6'},
  {name: 'Re', dist: '6s24f145d4'},
  {name: 'Bh', dist: '7s25f146d5'},
  {name: 'Fe', dist: '4s23d6'},
  {name: 'Ru', dist: '5s14d7'},
  {name: 'Os', dist: '6s24f145d6'},
  {name: 'Hs', dist: '7s25f146d6'},
  {name: 'Co', dist: '4s13d7'},
  {name: 'Rh', dist: '5s24d6'},
  {name: 'Ir', dist: '6s24f145d7'},
  {name: 'Mt', dist: '7s25f146d7'},
  {name: 'Ni', dist: '4s23d8'},
  {name: 'Pd', dist: '5s04d10'},
  {name: 'Pt', dist: '6s24f145d9'},
  {name: 'Ds', dist: '7s25f146d8'},
  {name: 'Cu', dist: '4s13d10'},
  {name: 'Ag', dist: '5s14d10'},
  {name: 'Au', dist: '6s14f145d10'},
  {name: 'Rg', dist: '7s25f146d9'},
  {name: 'Zn', dist: '4s23d10'},
  {name: 'Cd', dist: '5s24d10'},
  {name: 'Hg', dist: '6s24f145d10'},
  {name: 'Cn', dist: '7s25f146d10'},
  {name: 'B', dist: '2s22p1'},
  {name: 'Al', dist: '3s23p1'},
  {name: 'Ga', dist: '4s23d104p1'},
  {name: 'In', dist: '5s24d105p1'},
  {name: 'Tl', dist: '6s24f145d106p1'},
  {name: 'C', dist: '2s22p2'},
  {name: 'Si', dist: '3s23p2'},
  {name: 'Ge', dist: '4s23d104p2'},
  {name: 'Sn', dist: '5s24d105p2'},
  {name: 'Pb', dist: '6s24f145d106p2'},
  {name: 'N', dist: '2s22p3'},
  {name: 'P', dist: '3s23p3'},
  {name: 'As', dist: '4s23d104p3'},
  {name: 'Sb', dist: '5s24d105p3'},
  {name: 'Bi', dist: '6s24f145d106p3'},
  {name: 'O', dist: '2s22p4'},
  {name: 'S', dist: '3s23p4'},
  {name: 'Se', dist: '4s23d104p4'},
  {name: 'Te', dist: '5s24d105p4'},
  {name: 'Po', dist: '6s24f145d106p4'},
  ]



var family1 = /([1-9])?[1-9]s1$/
var family2 = /([1-9])?[2-9]s2$/
var family3 = /([1-9])?[1-9]d1$/
var family4 = /([1-9])?[1-9]d2$/
var family5 = /s14d4$|d3$/
var family6 = /s1[1-9]d5$|d4$/
var family7 = /!s1[1-9]d5$|s2[1-9]f14[1-9]d5$|5s14d6/
var family8 = /![1-4]s1[1-9]d6$|4s2[1-9]d6$|f14[1-9]d6$|5s1[1-9]d7$/
var family9 = /![1-4]s1[1-9]d7$|4s2[1-9]d7$|f14[1-9]d7$|5s1[1-9]d8$/
var family10 = /![1-4]s1[1-9]d8$|4s2[1-9]d8$|f14[1-9]d8$|5s1[1-9]d9$/
var family11 = /[1-9]s1+([1-9]f14)?[1-9]d10$|7s25f146d9$/
var family12 = /[1-9]s2+([1-9]f14)?[1-9]d10$/
var family13 = /^([1-9]s2)([1-9]f14)?([1-9]d10)?[1-9]p1$/
var family14 = /^[1-9]s2([1-9]f14)?([1-9]d10)?[1-9]p2$/
var family15 = /^[1-9]s2([1-9]f14)?([1-9]d10)?[1-9]p3$/
var family16 = /^[1-9]s2([1-9]f14)?([1-9]d10)?[1-9]p4$/
var family17 = /^[1-9]s2([1-9]f14)?([1-9]d10)?[1-9]p5$/
var family18 = /^1s2$|^[1-9]s2([1-9]f14)?([1-9]d10)?[1-9]p6$/

const makeInputs = (pos, tam) => Array.from({length: tam}, (k, v) => (pos==v+1)?1:0)

angular.module('gitHubApp')
  .controller('SelfOrganizingMapCtrl', function ($scope, $rootScope, $timeout, $location) {
    $rootScope.navbarActive = "demos";

    $scope.word = "";
    $scope.map = {};

    
    var inputsSize = 18;
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
      },
      {
        name: 'family11',
        regex: family11,
        input: makeInputs(11, inputsSize)
      },
      {
        name: 'family12',
        regex: family12,
        input: makeInputs(12, inputsSize)
      },
      {
        name: 'family13',
        regex: family13,
        input: makeInputs(13, inputsSize)
      },
      {
        name: 'family14',
        regex: family14,
        input: makeInputs(14, inputsSize)
      },
      {
        name: 'family15',
        regex: family15,
        input: makeInputs(15, inputsSize)
      },
      {
        name: 'family16',
        regex: family16,
        input: makeInputs(16, inputsSize)
      },
      {
        name: 'family17',
        regex: family17,
        input: makeInputs(17, inputsSize)
      },
      {
        name: 'family18',
        regex: family18,
        input: makeInputs(18, inputsSize)
      }
    ]
    // console.log('families', families)
    var first = true;
    var hopfield = new Architect.Hopfield(80);
    var trainer = new Trainer(hopfield);

    $scope.valid = function(){
      var valid = typeof $scope.word == 'string';
      return valid;
    }
    $scope.keyup= function(evt){
      if ((evt.which == 32 || evt.which == 13) && $scope.word.length > 0) {
        feed($scope.word.toLowerCase().trim());
        $scope.word = "";
      }
    }


    
    var feed = function(word){
      var input = makeInputs(20, inputsSize);

      var atom = atoms.filter((atom) => atom.name.toLowerCase() === word.toLowerCase())

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

    $scope.map[makeInputs(1, inputsSize).join('')] = ["family 1"];  
    $scope.map[makeInputs(2, inputsSize).join('')] = ["family 2"];
    $scope.map[makeInputs(3, inputsSize).join('')] = ["family 3"];
    $scope.map[makeInputs(4, inputsSize).join('')] = ["family 4"];
    $scope.map[makeInputs(5, inputsSize).join('')] = ["family 5"];
    $scope.map[makeInputs(6, inputsSize).join('')] = ["family 6"];
    $scope.map[makeInputs(7, inputsSize).join('')] = ["family 7"];
    $scope.map[makeInputs(8, inputsSize).join('')] = ["family 8"];
    $scope.map[makeInputs(9, inputsSize).join('')] = ["family 9"];
    $scope.map[makeInputs(10, inputsSize).join('')] = ["family 10"];
    $scope.map[makeInputs(11, inputsSize).join('')] = ["family 11"];
    $scope.map[makeInputs(12, inputsSize).join('')] = ["family 12"];
    $scope.map[makeInputs(13, inputsSize).join('')] = ["family 13"];
    $scope.map[makeInputs(14, inputsSize).join('')] = ["family 14"];
    $scope.map[makeInputs(15, inputsSize).join('')] = ["family 15"];
    $scope.map[makeInputs(16, inputsSize).join('')] = ["family 16"];
    $scope.map[makeInputs(17, inputsSize).join('')] = ["family 17"];
    $scope.map[makeInputs(18, inputsSize).join('')] = ["family 18"];

    $scope.map[makeInputs(20, inputsSize).join('')] = ["other"];

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
      makeInputs(11, inputsSize),
      makeInputs(12, inputsSize),
      makeInputs(13, inputsSize),
      makeInputs(14, inputsSize),
      makeInputs(15, inputsSize),
      makeInputs(16, inputsSize),
      makeInputs(17, inputsSize),
      makeInputs(18, inputsSize),
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
