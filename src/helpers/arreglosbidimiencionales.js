
export const funcionArray = (array, x, y, sol) => {

    if (array.length - 1 === x && array[array.length - 1].length - 1 === y) {

        return sol
    }

    for (let i = x + 1; i < array.length; i++) {

        let tempArray = [];

        for (let j = 0; j < array[i].length; j++) {

            // tempArray = [...tempArray, array[i][j] +  array[x][y]]

            tempArray.push('-' + array[i][j] + ' - ' + array[x][y] )

        }
        sol.push(tempArray)
    }

    if (y < array[x].length - 1) {

        return funcionArray(array, x, y + 1, sol)

    } else {
        return funcionArray(array, x + 1, 0, sol);
    }

}
