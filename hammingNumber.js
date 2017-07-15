function hamming(n) {
        var succession = [], length = succession.length, candidate = 1;
        while (length < n) {
            if (isHammingNumber(candidate)) {
                succession[length] = candidate;
                length++;
            }
            candidate++;
        }
        return Number.parseInt(succession[n-1]);
  }
 function isHammingNumber(num) {
      while (num % 5 === 0) num /= 5;
      while (num % 3 === 0) num /= 3;
      while (num % 2 === 0) num /= 2;

      return num == 1;
    }

//OTHER VARIATIONS (Fast)
function hamming (n) {
  var dp = [], a, b, c;
  dp[0] = 1, a = b = c = 0;

  for (var i = 1; i < n; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] === dp[a] * 2) a++;
    if (dp[i] === dp[b] * 3) b++;
    if (dp[i] === dp[c] * 5) c++;
  }  

  return dp[n - 1];
}
