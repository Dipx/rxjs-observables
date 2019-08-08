var foo = Rx.Observable.interval(200).take(5);

// Operator Tap (formerly do)
// https://www.learnrxjs.io/operators/utility/do.html

// takes a function, doesn't return anything, if you return something, it will be ignored.

var bar = foo.tap(function(x) {
    console.log(x); // will return x implicitly
});

// tap is mostly used for debug purposes.
// tap doesn't trigger a subscription, simply exists as a spy

// Example :

/* MARBLE:

foo:    ---1---2---3---4---5|
        tap(x => console.log(`before: ${x}`))
        ---1---2---3---4---5|
        map(x => x * 2)
        ---2---4---6---8---10|
        tap(x => console.log(`before: ${x}`))
        ---2---4---6---8---10|

*/

var bar = foo
    .tap(x => console.log(`before: ${x}`))
    .map(x => x * 2)
    .tap(x => console.log(`before: ${x}`));

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('err ' + err); },
    function() { console.log('done'); }
)