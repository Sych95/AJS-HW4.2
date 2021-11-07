export default function sortChars(charList) {
  charList.sort((a, b) => {
    const first = a.health;
    const second = b.health;
    if (first > second) {
      return 1;
    } if (first === second) {
      return 0;
    } if (first < second) {
      return -1;
    }
  });
}
