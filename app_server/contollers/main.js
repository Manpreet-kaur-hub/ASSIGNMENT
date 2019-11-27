/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'Manpreet kaur' });
};
module.exports = {
index
};