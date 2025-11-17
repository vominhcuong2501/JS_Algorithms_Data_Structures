// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    // Tạo mảng 2D rỗng
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        // 1. Đi ngang từ trái → phải
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter++;
        }
        startRow++;

        // 2. Đi xuống trên cùng → dưới cùng
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter++;
        }
        endCol--;

        // 3. Đi ngang từ phải → trái (chỉ khi còn hàng)
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                results[endRow][i] = counter++;
            }
            endRow--;
        }

        // 4. Đi lên từ dưới → trên (chỉ khi còn cột)
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                results[i][startCol] = counter++;
            }
            startCol++;
        }
    }

    return results;
}

module.exports = matrix;
