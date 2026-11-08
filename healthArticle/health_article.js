var xhr = new XMLHttpRequest();
var health_articles_url = './health_article.json';
var news_articles_url = './news_article.json';

function makeHealthArticlesRequest() {
    xhr.open('GET', health_articles_url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function () {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('health_articles');
    
      articles.forEach(function(article) {
          var articleDiv = document.createElement('div');
          articleDiv.classList.add('article');
    
          var title = document.createElement('h2');
          title.textContent = article.title;
    
          var description = document.createElement('p');
          description.textContent = article.description;
    
          var waysHeader = document.createElement('h3');
          waysHeader.textContent = 'Ways to Achieve:';
    
          var waysList = document.createElement('ul');
          article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
          });
    
          var benefitsHeader = document.createElement('h3');
          benefitsHeader.textContent = 'Benefits:';
    
          var benefitsList = document.createElement('ul');
          article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
          });
    
          articleDiv.appendChild(title);
          articleDiv.appendChild(description);
          articleDiv.appendChild(waysHeader);
          articleDiv.appendChild(waysList);
          articleDiv.appendChild(benefitsHeader);
          articleDiv.appendChild(benefitsList);
    
          articlesDiv.appendChild(articleDiv);
        });

        if (xhr.status === 200) {
            makeNewsArticlesRequest()
        }
    }

    xhr.send();
}

function makeNewsArticlesRequest() {
    xhr.open('GET', news_articles_url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('news_articles');

  articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var keyPointsHeader = document.createElement('h3');
      keyPointsHeader.textContent = 'Key Points:';

      var keyPointsList = document.createElement('ul');
      article.key_points.forEach(function(keyPoint) {
        var listItem = document.createElement('li');
        listItem.textContent = keyPoint;
        keyPointsList.appendChild(listItem);
      });

      var impactsHeader = document.createElement('h3');
      impactsHeader.textContent = 'Impacts:';

      var impactsList = document.createElement('ul');
      article.impact.forEach(function(imp) {
        var listItem = document.createElement('li');
        listItem.textContent = imp;
        impactsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(keyPointsHeader);
      articleDiv.appendChild(keyPointsList);
      articleDiv.appendChild(impactsHeader);
      articleDiv.appendChild(impactsList);

      articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();
}

makeHealthArticlesRequest();