/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils-try-require' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var skewness = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( skewness instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = skewness( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = skewness( 10.0, NaN );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `alpha <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF, PINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `beta <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( PINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NaN, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the skewness of a beta distribution', opts, function test( t ) {
	var expected;
	var delta;
	var alpha;
	var beta;
	var tol;
	var i;
	var y;

	expected = data.expected;
	alpha = data.alpha;
	beta = data.beta;
	for ( i = 0; i < expected.length; i++ ) {
		y = skewness( alpha[i], beta[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
