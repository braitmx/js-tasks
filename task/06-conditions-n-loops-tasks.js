'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 15 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;

}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    var result = 0;
    while (n1 <= n2) {
        result += n1;
        n1++;
    }
    return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b ? true : false;

}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    return rect1.width < rect2.top || rect1.height < rect2.left ? false : true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    var distance = Math.sqrt(Math.pow(point.x - circle.center.x, 2) + Math.pow(point.y - circle.center.y, 2));

    return distance < circle.radius ? true : false;

}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (var i = 0, len = str.length; i < len; i++) {

        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i]; break;
        }
    }
    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    var result = [];

    if (isStartIncluded) result += '[';
    else result += '(';

    a < b ? result += a + ', ' + b : result += b + ', ' + a;

    if (isEndIncluded) result += ']';
    else result += ')';

    return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    var result = '';

    for (var i = str.length; i > 0; i--) {
        result += str[i - 1];
    }
    return result;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    var result = '', str = '' + num;

    for (var i = str.length; i > 0; i--) {
        result += str[i - 1];
    }
    return +result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    var str = '' + ccn, result = 0;

    for (var len = str.length, i = len; i > 0; i--) {

        if (len % 2 != 0 && (i - 1) % 2 != 0 || len % 2 === 0 && (i - 1) % 2 === 0) {
            result += str[i - 1] > 4 ? +str[i - 1] * 2 - 9 : +str[i - 1] * 2;
        } else result += +str[i - 1];
    }
    return result % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    var result = 0, str = '' + num;

    function checkResult() {
        for (var i = str.length; i > 0; i--) {
            result += +str[i - 1];
        }

        if (result > 9) {
            str = '' + result; result = 0;
            checkResult();

        } else return;
    }

    checkResult();

    return result;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {

    var brackets = '{[(<}])>',
        arr = str.split(''),
        result = true;

    function searchPair(el) {
        return brackets[brackets.indexOf(el) + 4];
    }

    function deletePairs(arr) {
        var changes = false;

        for (var i = 0; i < arr.length - 1; i++) {

            if (searchPair(arr[i]) === arr[i + 1]) {
                arr.splice(i, 2);
                i--;
                changes = true;
            }
        }
        if (changes && arr.length != 0) deletePairs(arr);
        else if (arr.length != 0) result = false;
    }

    deletePairs(arr);
    return result;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    var difference = endDate.valueOf() - startDate.valueOf(),
        min = Math.trunc(difference / 60000),
        hour = difference / (3.6 * Math.pow(10, 6)),
        day = difference / (86.4 * Math.pow(10, 6)),
        result = '';

    function getDecimal(num) {
        return +(num - parseInt(num)).toFixed(8);
    }

    if (difference <= 45000) result += 'a few seconds ago';

    if (difference > 45000 && difference <= 90000) result = 'a minute ago';

    if (difference > 90000 && difference <= 2.7 * Math.pow(10, 6)) result = (min > 2 ? min : 2) + ' minutes ago';

    if (difference > 2.7 * Math.pow(10, 6) && difference <= 5.4 * Math.pow(10, 6)) result = 'an hour ago';

    if (difference > 5.4 * Math.pow(10, 6) && difference <= 7.92 * Math.pow(10, 7)) {
        if (getDecimal(hour) <= 0.5) hour = Math.trunc(hour)
        else hour = Math.round(hour);
        result = (hour > 2 ? hour : 2) + ' hours ago';
    }

    if (difference > 7.92 * Math.pow(10, 7) && difference <= 1.296 * Math.pow(10, 8)) result = 'a day ago';

    if (difference > 1.296 * Math.pow(10, 8) && difference <= 2.16 * Math.pow(10, 9)) {
        if (getDecimal(day) <= 0.5) day = Math.trunc(day)
        else day = Math.round(day);
        result = (day > 2 ? day : 2) + ' days ago';
    }

    if (difference > 2.16 * Math.pow(10, 9) && difference <= 3.888 * Math.pow(10, 9)) result = 'a month ago';

    if (difference > 3.888 * Math.pow(10, 9) && difference <= 2.981 * Math.pow(10, 10)) result = Math.round(difference / (2.592 * Math.pow(10, 9))) + ' months ago';

    if (difference > 2.981 * Math.pow(10, 10) && difference <= 4.709 * Math.pow(10, 10)) result = 'a year ago';

    if (difference > 4.709 * Math.pow(10, 10)) result = Math.round(difference / (3.1536 * Math.pow(10, 10))) + ' years ago';

    return result;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {

    var result = '';

    function getPath(el) {

        var index = el.indexOf('/', 1),
            path = el.slice(0, index);
        return path;
    }

    function comparePathes(pathes) {

        var path = getPath(pathes[0]),
            identity = true,
            index = -1;

        pathes = pathes.map(function (item) {

            if (path != getPath(item)) identity = false;
            else {
                index = item.indexOf('/', 1);
            }
            return item.slice(index);
        });

        if (identity && index != -1) {
            result += path;
            comparePathes(pathes);
        } else result += '/';

    }

    comparePathes(pathes);

    if (result === '/') {
        pathes.forEach(function (item, i) {
            if (item[0] != '/') result = '';
        });
    }

    return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {

    var m1rows = m1.length, m1cols = m1[0].length,
        m2rows = m2.length, m2cols = m2[0].length,
        result = [], tempArr = [];

    for (var k = 0; k < m1rows; k++) {

        for (var i = 0; i < m1rows; i++) {
            var temp = 0;
            for (var j = 0; j < m2rows; j++) {
                temp += m1[k][j] * m2[j][i];
            }
            tempArr[i] = temp;
        }
        result[k] = tempArr;
        tempArr = [];
    }
    return result;

}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    var result = undefined,
        arr = position;

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if ((arr[i][j] != undefined) &&
                (j === 0 && (arr[i][j] === arr[i][j + 1] && arr[i][j] === arr[i][j + 2]) ||
                    (i === 0 && arr[i][j] === arr[i + 1][j] && arr[i][j] === arr[i + 2][j]) ||
                    (i === 0 && arr[i][j] === arr[i + 1][j + 1] && arr[i][j] === arr[i + 2][j + 2]) ||
                    (j === 0 && i === 2 && arr[i][j] === arr[i - 1][j + 1] && arr[i][j] === arr[j][i]))
            ) result = arr[i][j];
        }
    }
    return result;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};
