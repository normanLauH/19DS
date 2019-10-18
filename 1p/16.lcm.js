// O(f(n))

let lcm = (n, m) => {
  let lar = Math.max(n, m);
  let small = Math.min(n, m);
  
  let i = lar;
  while(i % small !== 0){
    i += lar;
  }
  
  return i;
}

console.log(lcm(4,7));