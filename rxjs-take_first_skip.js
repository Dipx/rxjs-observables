var foo = Rx.Observable.interval(1000);

/* Operators take / first / skip */


// TAKE
// take is used to take the first x observables and then complete
// https://www.learnrxjs.io/operators/filtering/take.html

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7--...
        take(5)
        ---0---1---2---3---4|
*/

var bar = foo
    .take(5);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)

// FIRST
// first is used to take only the first observable and then complete
// https://www.learnrxjs.io/operators/filtering/first.html

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7--...
        first()
        ---0|
*/

var bar = foo
    .first();

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)

// SKIP
// skip is used to ignore the firsts x observables
// https://www.learnrxjs.io/operators/filtering/skip.html

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7--...
        skip(5)
        -----------------------5---6---7--...
*/

var bar = foo
    .skip(5);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)