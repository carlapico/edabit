// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27
// Notes
// All test inputs will be positive integers
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

    function calculation (baseNumber,exponentNumber){
        let newNumber = baseNumber**exponentNumber
        return newNumber
    }

    console.log(calculation(4,2))

    // same as 

    function calculateExponent(num, exp) {
        return num ** exp
    }


    // Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

    // Examples
    // nextEdge(8, 10) ➞ 17
    
    // nextEdge(5, 7) ➞ 11
    
    // nextEdge(9, 2) ➞ 10
    // Notes
    // (side1 + side2) - 1 = maximum range of third edge.
    // The side lengths of the triangle are positive integers.
    // Don't forget to return the result.

    function maximumRange (side1, side2){
        return (side1+side2)-1 
    }

    console.log(maximumRange(5,7))