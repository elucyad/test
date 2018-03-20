const axios = require('axios');

axios.all([
    axios.get('http://cdn.gfkdaphne.com/tests/async.php?a=1'),
    axios.get('http://cdn.gfkdaphne.com/tests/async.php?a=2')
]).then(axios.spread((response1, response2) => {
    console.log(response1.data + ' ' + response2.data);

})).catch(error => {
    console.log(error);
});


