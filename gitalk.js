const gitalk = new Gitalk( {
clientID: '1daf307921f9e762e83f',
clientSecret: '82f60af1acc31ebdbd173c9974185a3a1f52103e',
repo: 'book-excerpts.github.io',
owner: 'Book-Excerpts',
admin: 'fly6022',
id: location.pathname,      // Ensure uniqueness and length less than 50
distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')