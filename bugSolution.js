function foo(a, b) {
  const numA = a === null ? 0 : a; // Use 0 as default if null
  const numB = b === null ? 0 : b; // Use 0 as default if null
  return numA + numB;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

//Alternative solution using optional chaining and nullish coalescing
function foo2(a,b){
  return (a ?? 0) + (b ?? 0);
}
console.log(foo2(1,2)); //Output: 3
console.log(foo2(null,2)); //Output: 2
console.log(foo2(1, null)); // Output: 1
console.log(foo2(null, null)); // Output: 0