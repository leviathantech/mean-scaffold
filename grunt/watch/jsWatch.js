var projectFiles = require('../files.json');
// console.log(projectFiles);
console.log(projectFiles['js']);
console.log('public');
// console.log(projectFiles['js']['public']);
module.exports = function() {
  return {
    files: [projectFiles.js.public, projectFiles.js.server],
    // files: ["<%= files.js.public %>", "<%= files.js.server %>"],
    tasks: ['default', 'uglify']
  }
};