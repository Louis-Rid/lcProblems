var spiralOrder = function (matrix) {
    // Start at (0,0)
    // Push current element to a results array, and move to the next element from left to right
    // - Make the matrix one row shorter from the top
    // Push current element until the furthest right element is reached, then travel from top to bottom
    // - Make the matrix one column thinner on the right side
    // Push current element until bottom most element is reached, then travel from left to right
    // - Make the matrix one row shorter from the bottom
    // Push current element until top most element is reached, then travel from right to left thus repeating the previous
    // steps until the left side has reached the right or the top has met the bottom

    var res = [];
    var left = 0;
    var right = matrix[0].length;
    var top = 0;
    var bottom = matrix.length;

    while (left < right && top < bottom) {
        // Left to Right
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // Top to Bottom
        for (let i = top; i < bottom; i++) {
            console.log(res)
            res.push(matrix[i][right - 1]);
        }
        right--;

        if (!(left < right && top < bottom)) break;

        // Right to Left
        for (let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom - 1][i]);
        }
        bottom--;

        // Bottom to Top
        for (let i = bottom - 1; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }

    return res;
};