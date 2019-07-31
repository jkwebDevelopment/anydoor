<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="format-detection" content="telephone=no" />
  <title>{{title}}</title>
  <style>
    body {
        margin: 30px;
    }
    a {
        display: block;
        font-size: 20px;
    }
  </style>
</head>

<body>
  {{#each files}}
    <a href="{{../dir}}/{{this}}">{{this}}</a>
  {{/each}}
</body>

</html>
