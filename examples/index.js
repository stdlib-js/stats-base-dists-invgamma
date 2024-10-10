/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var invgammaRandomFactory = require( '@stdlib/random-base-invgamma' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var variance = require( '@stdlib/stats-base-variance' );
var linspace = require( '@stdlib/array-base-linspace' );
var gamma = require( '@stdlib/stats-base-dists-gamma' );
var mean = require( '@stdlib/stats-base-mean' );
var abs = require( '@stdlib/math-base-special-abs' );
var invgamma = require( './../lib' );

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
console.log( 'x values:', x );
console.log( 'PDF values:', pdf );
console.log( 'CDF values:', cdf );

// Compute statistical properties:
var theoreticalMean = invgamma.mean( alpha, beta );
var theoreticalVariance = invgamma.variance( alpha, beta );
var theoreticalSkewness = invgamma.skewness( alpha, beta );
var theoreticalKurtosis = invgamma.kurtosis( alpha, beta );

console.log( 'Theoretical Mean:', theoreticalMean );
console.log( 'Theoretical Variance:', theoreticalVariance );
console.log( 'Skewness:', theoreticalSkewness );
console.log( 'Kurtosis:', theoreticalKurtosis );

// Generate random samples from the inverse gamma distribution:
var rinvGamma = invgammaRandomFactory( alpha, beta );
var n = 1000;
var samples = filledarrayBy( n, 'float64', rinvGamma );

// Compute sample mean and variance:
var sampleMean = mean( n, samples, 1 );
var sampleVariance = variance( n, 1, samples, 1 );

console.log( 'Sample Mean:', sampleMean );
console.log( 'Sample Variance:', sampleVariance );

// Compare sample statistics to theoretical values:
console.log( 'Difference in Mean:', abs( mean - sampleMean ) );
console.log( 'Difference in Variance:', abs( variance - sampleVariance ) );

// Demonstrate the relationship between inverse gamma and gamma distributions:
var y = 0.5;
var invGammaCDF = invgamma.cdf( y, alpha, beta );
var gammaCDF = 1.0 - gamma.cdf( 1.0 / y, alpha, 1.0 / beta );

console.log( 'Inverse Gamma CDF at y =', y, ':', invGammaCDF );
console.log( '1 - Gamma CDF at 1/y =', 1 / y, ':', gammaCDF );
console.log( 'Difference:', abs( invGammaCDF - gammaCDF ) );
