var isValidSudoku = function (board) {

    //set to store unique values.
    const set = new Set();

    //loop through the board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const currVal = board[i][j];
            //skip empty values
            if (currVal !== ".") {
                //check if the value is already present in the set. if yes return false
                if (set.has(currVal + "found in row" + i) ||
                 set.has(currVal + "found in col" + j) || 
                 set.has(currVal + "found in box" + Math.floor(i / 3) + "-" + Math.floor(j / 3))) {
                    return false;
                } else {
                    //add the row, column and box index in the form of strings to the set in a single pass.
                    set.add(currVal + "found in row" + i);
                    set.add(currVal + "found in col" + j);
                    set.add(currVal + "found in box" + Math.floor(i / 3) + "-" + Math.floor(j / 3));
                }
            }


        }
    }
    return true;
};