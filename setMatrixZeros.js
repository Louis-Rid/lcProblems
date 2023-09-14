var setZeroes = function (matrix) {
    // R = rows; C = columns; B = both
    // Mark Columns and Loops
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = (matrix[i][0] === "C" || matrix[i][0] === "B") ? "B" : "R";
                matrix[0][j] = (matrix[0][j] === "R" || matrix[0][j] === "B") ? "B" : "C";
            }
        }
    }

    // Add 0's in Columns
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === "C" || matrix[0][i] === "B") {
            var j = 0;
            while (j < matrix.length) {
                matrix[j][i] = (matrix[j][i] === "B" || matrix[j][i] === "R") ? "R" : 0;
                j++;
            }
        }
    }

    // Add 0's in Rows
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === "R" || matrix[i][0] === "B") {
            var j = 0;
            while (j < matrix[i].length) {
                matrix[i][j] = 0;
                j++;
            }
        }
    }
};