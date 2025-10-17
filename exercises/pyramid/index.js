// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midPoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let stair = ''

//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (col >= midPoint - row && col <= midPoint + row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }
// }

function pyramid(n, row = 0, level = '') {
    if (row === n) return

    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    const midPoint = Math.floor((2 * n - 1) / 2);

    if (level.length >= midPoint - row && level.length <= midPoint + row) {
        level += '#'
    } else {
        level += ' '
    }
    return pyramid(n, row, level)
}

pyramid(5)
module.exports = pyramid;


// Ok 👍 mình giải thích chi tiết từng phần nhé — đoạn code này là một hàm đệ quy in ra hình kim tự tháp (pyramid) bằng ký tự # trong JavaScript.

// 📌 Toàn bộ hàm:
// function pyramid(n, row = 0, level = '') {
//     if (row === n) return

//     if(level.length === 2 * n - 1) {
//         console.log(level)
//         return pyramid(n, row + 1)
//     }

//     const midPoint = Math.floor((2 * n - 1) / 2);

//     if (level.length >= midPoint - row && level.length <= midPoint + row) {
//         level += '#'
//     } else {
//         level += ' '
//     }
//     return pyramid(n, row, level)
// }

// 🧩 Ý nghĩa các tham số:

// n: số tầng (chiều cao) của kim tự tháp.

// row: dòng hiện tại đang in (bắt đầu từ 0).

// level: chuỗi ký tự hiện tại của dòng đó (được xây dựng dần từng ký tự).

// ⚙️ Từng bước hoạt động:
// 1. Dừng đệ quy (base case 1)
// if (row === n) return


// Khi row bằng n nghĩa là đã in đủ số tầng, hàm dừng lại.

// 2. Khi đã xây xong 1 dòng (base case 2)
// if (level.length === 2 * n - 1) {
//     console.log(level)
//     return pyramid(n, row + 1)
// }


// Mỗi dòng của kim tự tháp có chiều dài cố định = 2 * n - 1
// (ví dụ n = 3 → mỗi dòng dài 5 ký tự).

// Khi level đủ độ dài, in ra dòng đó (console.log(level)),
// rồi gọi đệ quy sang dòng kế tiếp (row + 1).

// 3. Tính vị trí giữa (midpoint)
// const midPoint = Math.floor((2 * n - 1) / 2);


// Đây là vị trí giữa của dòng.

// Từ vị trí này sẽ mở rộng sang trái & phải để in ký tự #.

// 4. Xây từng ký tự của dòng
// if (level.length >= midPoint - row && level.length <= midPoint + row) {
//     level += '#'
// } else {
//     level += ' '
// }


// Mỗi dòng sẽ có các ký tự # nằm trong khoảng:

// từ (midPoint - row) đến (midPoint + row)


// Các vị trí khác là ' ' (khoảng trắng).

// 5. Gọi lại chính nó (đệ quy)
// return pyramid(n, row, level)


// Khi dòng chưa đủ ký tự, hàm tự gọi lại chính nó để thêm ký tự tiếp theo.

// Khi đủ dòng, nó chuyển sang dòng mới (như bước 2).

// 🧠 Ví dụ minh họa:

// Gọi pyramid(3):

// Số dòng = 3

// Mỗi dòng có 2 * 3 - 1 = 5 ký tự

// Kết quả in ra:

//   #
//  ###
// #####


// Cách xây từng dòng:

// Dòng	row	Dải # hợp lệ	level sau khi in
// 1	0	2–2	" # "
// 2	1	1–3	" ### "
// 3	2	0–4	"#####"
// 🧭 Tóm tắt:

// row tăng → dòng mới.

// level tăng → ký tự mới trong dòng hiện tại.

// Đệ quy 2 cấp:

// Cấp 1: tạo từng ký tự (level)

// Cấp 2: chuyển dòng (row)
