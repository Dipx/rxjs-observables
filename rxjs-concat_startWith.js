var foo = Rx.Observable.interval(1000).take(5);
var more = Rx.Observable.of(6,7,8,9);

/* Operators concat / startWith  */


// CONCAT
// is used to append observable to another finite observable
// https://www.learnrxjs.io/operators/combination/concat.html

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7-...
        take(5)
foo:    ---0---1---2---3---4|
more:                       (6789|)
        concat
        ---0---1---2---3---4(6789|)
*/

var bar = foo
    .concat(more);

// Concat can also be used like this:
var bar = Rx.Observable.concat(foo, more);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)

// STARTWITH
// prepend an observable with a (or many) value (not another observable) and emit it directly
// https://www.learnrxjs.io/operators/combination/startwith.html

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7-...
        take(5)
foo:    ---0---1---2---3---4|
        startWith('a', 'b')
        (ab)--0---1---2---3---4|
*/

var bar = foo.startWith('a', 'b');
    

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)