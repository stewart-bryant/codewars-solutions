function index(array, n){
  if (n > array.length-1) {
    return -1;
  } else {
    return array[n]**n;
  }
}