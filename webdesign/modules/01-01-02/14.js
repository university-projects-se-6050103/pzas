//Дано ціле число N (> 0). Знайти значення виразу 1.1 - 1.2 + 1.3 - . (N доданків, знаки чергують). Умовний оператор не використовувати.

var n = 12,
	result = 0;
for (var i = 1.1, j = 1; i <= n; i += 0.1, j++) {
	result += i - Math.pow(-1, j) * (i + 0.1);
}
console.log("Сума =", result);