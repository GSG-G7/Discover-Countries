const test = require('tape');
const logic = require('../public/js/dom');

const data = {
  Palestine: [
    'Al Mawasi',
    'Bethlehem',
    'Gaza',
    'Hebron',
    'Jenin',
    'Jericho',
    'Nablus',
    'Ramallah',
  ],
};

test('Testing Filter', (t) => {
  const actual = logic.filter(data);
  console.log(actual);
  const expected = 'Palestine';
  t.deepEqual(actual, expected, '');
  t.end();
});
