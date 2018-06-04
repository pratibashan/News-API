
let divDisplayNews = document.querySelector(".divNews")

news.articles.forEach(function(article){
    let newsItem = `<div class="divArticle">
                    <div class="divImage"><img src="${article.urlToImage}"></img></div>
                    <div class="divNewsItem"><p><b>Author:\t</b>${article.author}</p>
                        <p><b>Title:\t</b>${article.title}</p>
                        <p><b>Description:\t</b>${article.description}</p>
                        <p><b>URL:\t</b>${article.url}</p>
                        <p><b>Published At:\t</b>${article.publishedAt}</p>
                    </div>
                    </div>        
                    </div>`
    divDisplayNews.innerHTML += newsItem                  
})



















