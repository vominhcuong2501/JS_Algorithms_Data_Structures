// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const results = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1];
//         const b = results[i - 2];
//         results.push(a + b);
//     }

//     return results[n]; => linear 
// }


function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args)

        cache[args] = result

        return result
    }
}

function slowFib(n) {
    if (n < 2) return n

    return fib(n - 1) + fib(n - 2)

    // => exponential
}

const fib = memoize(slowFib);
module.exports = fib;

// Đoạn code này là một ví dụ về memoization trong JavaScript, nhằm tăng tốc độ của các hàm tính toán phức tạp (như tính số Fibonacci) bằng cách lưu kết quả tính toán của các tham số trước đó để tránh tính lại.

// Mình sẽ giải thích từng phần chi tiết.

// 1. Hàm memoize(fn)

// Đây là một hàm bao (wrapper) được thiết kế để tăng tốc các hàm khác bằng cách sử dụng cache để lưu trữ kết quả.

// Cấu trúc hàm:
// function memoize(fn) {
//     const cache = {};  // Lưu trữ kết quả các hàm đã tính

//     return function (...args) {  // Trả về một hàm mới, với các tham số động (...args)
//         if (cache[args]) {        // Kiểm tra xem kết quả đã tính trước đó chưa
//             return cache[args];   // Nếu có rồi, trả lại kết quả từ cache
//         }

//         const result = fn.apply(this, args);  // Nếu chưa, gọi hàm gốc với các tham số (args)

//         cache[args] = result;  // Lưu kết quả vào cache

//         return result;  // Trả về kết quả tính toán
//     }
// }

// Chức năng:

// Cache: cache là một đối tượng lưu trữ các tham số (args) và kết quả (result) của hàm gốc.

// Kiểm tra cache: Mỗi khi hàm được gọi, nó sẽ kiểm tra xem kết quả cho tham số đã có trong cache chưa. Nếu có rồi, trả luôn kết quả đó mà không phải tính lại.

// Lưu kết quả: Nếu chưa có trong cache, hàm sẽ tính toán, lưu kết quả vào cache và trả về kết quả.

// 2. Hàm slowFib(n)

// Đây là hàm tính số Fibonacci nhưng có độ phức tạp tính toán rất cao (O(2^n)), vì nó gọi đệ quy 2 lần cho mỗi số Fibonacci.

// Mô tả:
// function slowFib(n) {
//     if (n < 2) return n;  // Điều kiện dừng: nếu n < 2, trả lại n
//     return fib(n - 1) + fib(n - 2);  // Gọi đệ quy (số Fibonacci là tổng của 2 số trước đó)
// }


// Số Fibonacci được tính theo công thức: fib(n) = fib(n-1) + fib(n-2), với điều kiện cơ bản là fib(0) = 0 và fib(1) = 1.

// Tuy nhiên, hàm này rất chậm, vì nó tính lại cùng một số Fibonacci nhiều lần, đặc biệt với các giá trị lớn.

// 3. Ứng dụng memoize vào slowFib
// const fib = memoize(slowFib);


// Ở đây, bạn bọc hàm slowFib bằng hàm memoize. Khi đó, hàm fib sẽ có khả năng ghi nhớ kết quả của các lần tính trước.

// Ví dụ:

// Khi tính fib(5), nó sẽ gọi slowFib(5), rồi slowFib(4), slowFib(3)... và cứ thế.

// Sau khi tính fib(5), kết quả sẽ được lưu trong cache.

// Nếu sau đó bạn gọi lại fib(5) lần nữa, hàm sẽ trả luôn kết quả đã lưu trong cache thay vì tính lại từ đầu.

// 4. Hiệu quả sau khi sử dụng memoize

// Trước khi memoize: Số Fibonacci sẽ được tính lại rất nhiều lần, dẫn đến thời gian chạy rất chậm (đặc biệt với các giá trị n lớn).

// Sau khi memoize: Sử dụng cache sẽ giúp giảm đáng kể số lần tính toán. Kết quả cho các giá trị đã tính trước sẽ được trả về ngay lập tức từ cache, giúp tăng tốc đáng kể.

// Ví dụ:
// console.log(fib(5));  // Tính và lưu kết quả fib(5)
// console.log(fib(5));  // Trả kết quả đã lưu trong cache, không tính lại
// console.log(fib(6));  // Tính fib(6) nhưng dùng kết quả từ fib(5) đã có trong cache

// 5. Ví dụ về hiệu quả
// Trước memoize:
// fib(10)
// // Tính: fib(10) = fib(9) + fib(8)
// //      fib(9) = fib(8) + fib(7)
// //      và cứ thế, tính lại rất nhiều lần

// Sau memoize:
// fib(10)
// // Lưu kết quả của fib(0), fib(1), ..., fib(9) vào cache
// // Chỉ tính mới fib(10) và trả ngay kết quả đã có cho fib(0) đến fib(9)

// Tổng kết:

// Hàm memoize giúp bạn tăng tốc hàm tính toán đệ quy như Fibonacci bằng cách lưu trữ kết quả các lần gọi trước đó và trả lại kết quả khi cần. Điều này làm giảm độ phức tạp từ O(2^n) xuống chỉ còn O(n) — nhanh hơn rất nhiều, đặc biệt khi giá trị n lớn.