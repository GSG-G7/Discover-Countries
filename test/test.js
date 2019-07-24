const test = require('tape');
const filterData = require('../public/js/script');

const countries = ['Afghanistan', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Bolivia'];


test("Test Function filter Data" , (t)=> {
    const expected = ['Afghanistan', 'Austria', 'Azerbaijan'];

    const actual = filterData(countries , 'a');

    t.deepEqual(actual , expected , "Test is passed");
    t.end();
})