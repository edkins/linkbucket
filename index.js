var self = require('sdk/self');
var pageMod = require('sdk/page-mod');
var clipboard = require('sdk/clipboard');

pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url('hijack-clicks.js'),
  onAttach: function(worker) {
    worker.port.on('append', function(text) {
      var contents = clipboard.get('text');
      clipboard.set(contents + text, 'text');
    });
  }
});
