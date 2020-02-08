// 『书摘。』评论系统 （使用Gitalk）
// 下面是配置参数

var title = location.pathname.substr(0, 50); // 如果参数超过50个字符，则自动截取前50个字符，为了防止报错。
const gitalk = new Gitalk( {
clientID: '1daf307921f9e762e83f',
clientSecret: '82f60af1acc31ebdbd173c9974185a3a1f52103e',
repo: 'book.fly6022.fun',
owner: 'Book-Excerpts',
admin: 'fly6022',
id: title,      // Ensure uniqueness and length less than 50
distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
