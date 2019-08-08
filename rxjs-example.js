var foo = Rx.Observable.interval(1000);

/*

MARBLE DIAGRAM

foo: ---0---1---2---3---4--...
            transformFn(x => x * 2)
bar: ---0---2---4---6---8--...


*/

// Creation of an operation on an observable, not recommend, for information purposes

function calculate(transformationFn) {
    var source = this; // represent foo
    var result = Rx.Observable.create(function subscribe(observer) {
        source.subscribe(
            function(x) { observer.next(transformationFn(x)); },
            function(err) { observer.error(err); },
            function() { observer.complete(); }
        );
    });
    return result;
}

Rx.Observable.prototype.calculate = calculate;

var bar = foo.calculate(x => x * 2);

bar.subscribe(
    function(x) { console.log('next ' + x); },
    function(err) { console.log('error ' + err); },
    function() { console.log('Done'); }
)

