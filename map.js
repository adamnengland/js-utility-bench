Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')

levenshtein = function(str1, str2) {
  if (str1 == null && str2 == null) return 0;
  if (str1 == null) return String(str2).length;
  if (str2 == null) return String(str1).length;

  str1 = String(str1); str2 = String(str2);

  var current = [], prev, value;

  for (var i = 0; i <= str2.length; i++)
    for (var j = 0; j <= str1.length; j++) {
      if (i && j)
        if (str1.charAt(j - 1) === str2.charAt(i - 1))
          value = prev;
        else
          value = Math.min(current[j], current[j - 1], prev) + 1;
      else
        value = i + j;

      prev = current[j];
      current[j] = value;
    }

  return current.pop();
}

randomString = function(l) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < l; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

exports.compare = {
  "underscore" : function () {
    var array = Underscore.range(1000)
    var randomStrings = Underscore.map(array, function(item) {
      return randomString(12);
    });
    var levenshteinDistances = Underscore.map(randomStrings, function(item) {
      return levenshtein(item, "Adam England")
    });
  },
  "lodash" : function () {
    var array = Lodash.range(1000)
    var randomStrings = Lodash.map(array, function(item) {
      return randomString(12);
    });
    var levenshteinDistances = Lodash.map(randomStrings, function(item) {
      return levenshtein(item, "Adam England")
    });
  },
  "lazy" : function () {
    var array = Lazy.range(1000).toArray()
    var randomStrings = Lazy(array).map(function(item) {
      return randomString(12);
    }).toArray();
    var levenshteinDistances = Lazy(randomStrings).map(function(item) {
      return levenshtein(item, "Adam England")
    }).toArray();
  }
};
require("bench").runMain()

