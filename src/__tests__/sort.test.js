import sortChars from '../index';

test('Sort by health', () => {
  const charList = [
    { name: 'вор', health: 10 }, // добавлено от себя для проверки одного из исходов внутри sort
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'вор', health: 10 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  sortChars(charList);

  expect(expected).toEqual(charList);
});
