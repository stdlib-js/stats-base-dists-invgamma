<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Inverse Gamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Inverse gamma distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-invgamma
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var invgamma = require( '@stdlib/stats-base-dists-invgamma' );
```

#### invgamma

Inverse gamma distribution.

```javascript
var dist = invgamma;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/cdf]</span><span class="delimiter">: </span><span class="description">inverse Gamma distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for an inverse gamma distribution.</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/pdf]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/invgamma/quantile]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/invgamma/entropy]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/invgamma/kurtosis]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/invgamma/mean]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution expected value.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/invgamma/mode]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/invgamma/skewness]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/invgamma/stdev]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/invgamma/variance]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [inverse gamma][invgamma-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`InvGamma( [alpha, beta] )`][@stdlib/stats/base/dists/invgamma/ctor]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var InvGamma = require( '@stdlib/stats-base-dists-invgamma' ).InvGamma;

var dist = new InvGamma( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.003
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var invgammaRandomFactory = require( '@stdlib/random-base-invgamma' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var variance = require( '@stdlib/stats-base-variance' );
var linspace = require( '@stdlib/array-base-linspace' );
var gamma = require( '@stdlib/stats-base-dists-gamma' );
var mean = require( '@stdlib/stats-base-mean' );
var abs = require( '@stdlib/math-base-special-abs' );
var invgamma = require( '@stdlib/stats-base-dists-invgamma' );

// Define the shape and scale parameters:
var alpha = 5.0; // shape parameter (α)
var beta = 1.0;  // scale parameter (β)

// Generate an array of x values:
var x = linspace( 0.01, 3.0, 100 );

// Compute the PDF for each x:
var invgammaPDF = invgamma.pdf.factory( alpha, beta );
var pdf = filledarrayBy( x.length, 'float64', invgammaPDF );

// Compute the CDF for each x:
var invgammaCDF = invgamma.cdf.factory( alpha, beta );
var cdf = filledarrayBy( x.length, 'float64', invgammaCDF );

// Output the PDF and CDF values:
console.log( 'x values: %s', x );
console.log( 'PDF values: %s', pdf );
console.log( 'CDF values: %s', cdf );

// Compute statistical properties:
var theoreticalMean = invgamma.mean( alpha, beta );
var theoreticalVariance = invgamma.variance( alpha, beta );
var theoreticalSkewness = invgamma.skewness( alpha, beta );
var theoreticalKurtosis = invgamma.kurtosis( alpha, beta );

console.log( 'Theoretical Mean: %s', theoreticalMean );
console.log( 'Theoretical Variance: %s', theoreticalVariance );
console.log( 'Skewness: %s', theoreticalSkewness );
console.log( 'Kurtosis: %s', theoreticalKurtosis );

// Generate random samples from the inverse gamma distribution:
var rinvGamma = invgammaRandomFactory( alpha, beta );
var n = 1000;
var samples = filledarrayBy( n, 'float64', rinvGamma );

// Compute sample mean and variance:
var sampleMean = mean( n, samples, 1 );
var sampleVariance = variance( n, 1, samples, 1 );

console.log( 'Sample Mean: %s', sampleMean );
console.log( 'Sample Variance: %s', sampleVariance );

// Compare sample statistics to theoretical values:
console.log( 'Difference in Mean: %s', abs( theoreticalMean - sampleMean ) );
console.log( 'Difference in Variance: %s', abs( theoreticalVariance - sampleVariance ) );

// Demonstrate the relationship between inverse gamma and gamma distributions:
var y = 0.5;
var invGammaCDF = invgamma.cdf( y, alpha, beta );
var gammaCDF = 1.0 - gamma.cdf( 1.0 / y, alpha, 1.0 / beta );

console.log( 'Inverse Gamma CDF at y = %s: %s', y, invGammaCDF );
console.log( '1 - Gamma CDF at 1/y = %s: %s', 1 / y, gammaCDF );
console.log( 'Difference: %s', abs( invGammaCDF - gammaCDF ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-invgamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-invgamma

[test-image]: https://github.com/stdlib-js/stats-base-dists-invgamma/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-invgamma/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-invgamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-invgamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-invgamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-invgamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-invgamma/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-invgamma/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-invgamma/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-invgamma/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-invgamma/main/LICENSE

[invgamma-distribution]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/invgamma/ctor]: https://github.com/stdlib-js/stats-base-dists-invgamma-ctor

[@stdlib/stats/base/dists/invgamma/entropy]: https://github.com/stdlib-js/stats-base-dists-invgamma-entropy

[@stdlib/stats/base/dists/invgamma/kurtosis]: https://github.com/stdlib-js/stats-base-dists-invgamma-kurtosis

[@stdlib/stats/base/dists/invgamma/mean]: https://github.com/stdlib-js/stats-base-dists-invgamma-mean

[@stdlib/stats/base/dists/invgamma/mode]: https://github.com/stdlib-js/stats-base-dists-invgamma-mode

[@stdlib/stats/base/dists/invgamma/skewness]: https://github.com/stdlib-js/stats-base-dists-invgamma-skewness

[@stdlib/stats/base/dists/invgamma/stdev]: https://github.com/stdlib-js/stats-base-dists-invgamma-stdev

[@stdlib/stats/base/dists/invgamma/variance]: https://github.com/stdlib-js/stats-base-dists-invgamma-variance

[@stdlib/stats/base/dists/invgamma/cdf]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf

[@stdlib/stats/base/dists/invgamma/logpdf]: https://github.com/stdlib-js/stats-base-dists-invgamma-logpdf

[@stdlib/stats/base/dists/invgamma/pdf]: https://github.com/stdlib-js/stats-base-dists-invgamma-pdf

[@stdlib/stats/base/dists/invgamma/quantile]: https://github.com/stdlib-js/stats-base-dists-invgamma-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
