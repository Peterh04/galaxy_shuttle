export default function shuffleArr(arr) {
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    let temp = arr[randomIndex];
    arr[randomIndex] = arr[currentIndex];
    arr[currentIndex] = temp;
  }
  return arr;
}
