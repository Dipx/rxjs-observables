var foo = Rx.Observable.interval(1000).take(5);

/* Operators takeLast / last  */


// TAKELAST
// takeLast takes the observable values in a buffer, and when it completes, take the last x observales and return their values synchronously
// https://www.learnrxjs.io/operators/filtering/takelast.html

/* MARBLE:

foo:    ---0---1---2---3---4|
        takeLast(2)
        -------------------(34)|
*/

var bar = foo
    .takeLast(2);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)

// LAST
// last takes the observable values in a buffer, and when it completes, take the last observale and return its value
// https://www.learnrxjs.io/operators/filtering/last.html

/* MARBLE:

foo:    ---0---1---2---3---4|
        last()
        -------------------4|
*/

var bar = foo
    .last();

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)