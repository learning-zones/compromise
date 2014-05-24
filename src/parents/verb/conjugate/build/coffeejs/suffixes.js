// Generated by CoffeeScript 1.6.3
var data, obj, pairs, suff;

require("/Users/spencer/mountain/dirty/node_modules/sugar");

require("/Users/spencer/mountain/dirty/dirty.coffee");

data = require("./data").data;

obj = {
  infinitive: [],
  present: [],
  gerund: [],
  past: [],
  past_participle: []
};

pairs = [];

data.forEach(function(o) {
  return Object.keys(obj).each(function(k) {
    var suffix;
    suffix = o[k].substr(o[k].length - 3, o[k].length);
    return pairs.push([o[k], k]);
  });
});

console.log(JSON.stringify(pairs, null, 2));

suff = {};