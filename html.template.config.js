var devTemplate = 'template/dev.html';
var proTemplate = 'template/pro.html';

var dev = [
  {
    title: 'Angular-Webpack',
    filename: 'index.html',
    template: 'template/dev.html',
    chunks: ['vendor', 'index']
  },
  {
    title: 'Angular-Webpack',
    filename: 'multiple-named-views.html',
    template: 'template/multiple-named-views.html',
    chunks: ['vendor', 'multiple-named-views']
  },
  {
    title: 'Angular-Webpack',
    filename: 'example.html',
    template: 'template/example.html',
    chunks: ['vendor', 'example']
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
