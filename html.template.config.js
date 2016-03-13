var devTemplate = 'template/dev.html';
var proTemplate = 'template/pro.html';

var dev = [
  {
    title: 'Angular-Webpack',
    filename: 'index.html',
    template: devTemplate,
    chunks: ['vendor', 'index']
  }
];

var pro = [
  {
    title: 'Angular-Webpack',
    filename: 'index.html',
    template: proTemplate,
    chunks: ['vendor', 'index']
  }
];

module.exports = {
  dev: dev,
  pro: pro
};
