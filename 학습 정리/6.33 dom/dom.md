<h4> DOM? </h4>
<p>dom이란 문서 객체 모델(The Document Object Model)이다.

Dom은 문서의 구조화된 표현을 제공하며 프로그래밍 언어가 dom 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.

API (web or XML page) = DOM + JS (scripting language)

<h5>How to approach Dom </h5>
```html
<html>
  <head>
    <script>
       // run this function when the document is loaded
       window.onload = function() {

         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement("h1");
         var heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
    </script>

  </head>
  <body>
  </body>
</html>
```

## Dom : Data Type

1. document
