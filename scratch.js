var nlp = require('./src/index');
// nlp.verbose('tagger');

// var text = 'oh hello. please turn on the lights and then take out the garbage too. After that, play some music.';
// var doc = nlp(text);


doc = nlp('quick');
doc.debug();

// nlp('i want to pull out cash').debug();
// nlp('i pulled out the wagon').debug();


// doc = nlp('pull out');
// doc.debug();

// doc.match('#PhrasalVerb+').lump();
// console.log(doc.terms().out('array'));

//
//basic template for 'take out the garbage'
// var matches = doc.match('#Verb+ (the|some|a|an) #Noun');

// console.log(nlp('Larry, Curly, and Moe').people().filter(m => m.out('normal') === 'larry').length);
//todo: test this
// nlp('a 1-1 meeting.').values();
// nlp('a 1-1 meeting.').values().toText().all().debug();

// nlp('recycling is important').debug();

// nlp('recycling is important').debug();
