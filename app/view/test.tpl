<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
      <img src="/public/imgs/1.jpg">
    </ul>
    <form method="POST" action="/multipartUpload" enctype="multipart/form-data">
    title: <input name="title" />
    file1: <input name="file1" type="file" />
    file2: <input name="file2" type="file" />
    <button type="submit">Upload</button>
</form>
  </body>
</html>