var dev = [
  {
    title: 'example',
    filename: 'index.html',
    template: 'public/template/dev.html',
    chunks: ['vendor', 'index']
  },
  {
    title: 'example',
    filename: 'example.html',
    template: 'public/template/example.html',
    chunks: ['vendor', 'example']
  }
];

var pro = [

];

module.exports = {
  dev: dev,
  pro: pro
};
