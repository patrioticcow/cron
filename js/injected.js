'use strict'

dom()

function dom () {
  var tag = '&tag=tvshowreminders-20'
  var links = document.getElementsByTagName('a')

  for (var i = 0; i < links.length; i++) {
    if (links[i].href.startsWith('https://www.amazon')) {
      var href = links[i].href
      href = href.replace('tag=', 'oldtag=')
      links[i].href = href + tag
    }
  }
}
