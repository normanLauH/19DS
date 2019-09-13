// O(f(n))

function gcd(n, m) {
    if ((typeof n !== 'number') || (typeof m !== 'number')) 
      return false;

    n = Math.abs(n);
    m = Math.abs(m);
    while(m) {
      var t = m;
      m = n % m;
      n = t;
    }
    return n;
}