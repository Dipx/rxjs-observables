var foo = Rx.Observable.interval(1000);

// Operator filter
// https://www.learnrxjs.io/operators/filtering/filter.html

// takes a predicate and use it to filter the incoming observables

// Example :

/* MARBLE:

foo:    ---0---1---2---3---4---5---6---7--...
        filter(x => x % 2 === 0)
        ---0-------2-------4-------6------...

*/

var bar = foo
    .filter(x => x % 2 === 0);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)