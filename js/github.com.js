var files = $('table.files').hide();

$('p.commit-title').append("<a id='djs-toggle-file-browser'>toggle file browser</a>");
$('a#djs-toggle-file-browser')
  .attr('style', 'float:right; color:rgb(65, 131, 196); cursor:pointer;')
  .click(function() {
    files.toggle();
  });
