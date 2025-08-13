
// Q. print 1 to 10 except 5 & 8.

for (let n = 1; n <= 10; n++) {
    if (n == 5 || n == 8) {
        continue;
        // break;
    }
    console.log(n);
}