# @turf/distance

# distance

Calculates the distance between two [points](http://geojson.org/geojson-spec.html#point) in degrees, radians,
miles, or kilometers. This uses the
[Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula)
to account for global curvature.

**Parameters**

-   `from` **([Geometry](http://geojson.org/geojson-spec.html#geometry) \| [Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;[Point](http://geojson.org/geojson-spec.html#point)> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>)** origin point
-   `to` **([Geometry](http://geojson.org/geojson-spec.html#geometry) \| [Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;[Point](http://geojson.org/geojson-spec.html#point)> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>)** destination point
-   `units` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** can be degrees, radians, miles, or kilometers (optional, default `kilometers`)

**Examples**

```javascript
var from = turf.point([-75.343, 39.984]);
var to = turf.point([-75.534, 39.123]);

var distance = turf.distance(from, to, "miles");

//addToMap
var addToMap = [from, to];
from.properties.distance = distance;
to.properties.distance = distance;
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance between the two points

<!-- This file is automatically generated. Please don't edit it directly:
if you find an error, edit the source file (likely index.js), and re-run
./scripts/generate-readmes in the turf project. -->

---

This module is part of the [Turfjs project](http://turfjs.org/), an open source
module collection dedicated to geographic algorithms. It is maintained in the
[Turfjs/turf](https://github.com/Turfjs/turf) repository, where you can create
PRs and issues.

### Installation

Install this module individually:

```sh
$ npm install @turf/distance
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```