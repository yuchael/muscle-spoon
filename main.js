var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        
            response.writeHead(200);
            response.end(
            `<!doctype html>
            <html lang="ko">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Muscle Spoon</title>
            </head>
            <body>
              <h1>Muscle Spoon</h1>
              <p>Everybody Can Train</p>
              <p><a href="/auth/login"><input type="button" name="start" value="Get Started"></a></p>
            </body>
            </html>`
            );
        }else if(pathname === '/auth/login'){
            response.writeHead(200);
            response.end(
            `<!doctype html>
            <html lang="ko">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title></title>
            </head>
            <body>
              <h2>Muscle Spoon</h2>
              <form action="/create_process" method="post">
                <div>
                  <input type="text" name="ID" placeholder="ID" autocomplete="off">
                </div>
                <div>
                  <input type="password" name="Password" placeholder="Password" autocomplete="off">
                </div>
                <div>
                    <input type="submit" value="Log in">
                    <!--데이터베이스에 등록된 정보인지 확인-->
                    <!--로그인 성공하면 Home.html로/실패하면 다시입력하라는 창 띄우고 페이지 그대로 유지-->
                </div>
              </form>
              <div>Or</div>
              <div>Do you want to join?<a href="/auth/join">join</a></div>
            </body>
            </html>`
            );
        }else if(pathname === '/auth/join'){
            response.writeHead(200);
            response.end(
            `<!doctype html>
            <html lang="ko">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title></title>
            </head>
            <body>
              <h2>Create an Account</h2>
              <form action="/create_process" method="post">
                <div><input type="text" name="ID" placeholder="ID"><input type="button" value="중복확인"></div> <!--중복확인필요-->
                <div><!--중복확인결과 나타내기--></div>
                <div><input type="password" name="Password" placeholder="Password"></div>
                <div><input type="text" name="Name" placeholder="Name"></div>
                <div><input type="text" name="Gender" placeholder="Gender"></div>
                <div><input type="text" name="Age" placeholder="Age"></div>
                <div><input type="text" name="Height" placeholder="Height"/><input type="text" name="Weight" placeholder="Weight"/></div>
                <!--cm, kg 표시 나타내기-->
                <div>
                    <input type="submit" value="Register">
                    <!--데이터베이스에 정보 등록하고 회원가입 축하 창 띄우고 Login 페이지로 이동-->
                </div>
              </form>
              <div>Or</div>
              <div>Already have an account?<a href="/auth/login">Login</a></div>
            </body>
            </html>`
            );
        }   
    else{
        response.writeHead(404);
        response.end('Not found');
    }
});

app.listen(3000);

/*
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // 또는 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data);
})
.catch((error) => {
  console.error('실패:', error);
});*/