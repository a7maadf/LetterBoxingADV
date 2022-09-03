
var str = document.activeElement.outerHTML
var OldHtml = str
let pattern = /requestFullscreen/
const patterns = [/requestFullscreen/, /webkitRequestFullscreen/, /msRequestFullscreen/, /mozFullScreenEnabled/];

function checkIfExceptionIsMade() {
    if (window.find("Please wait") == true) {
      document.activeElement.outerHTML =  OldHtml;

    }
    timeoutId = setTimeout(checkIfExceptionIsMade, 500);

  }

  checkIfExceptionIsMade()
var TheFunction = `
  <div id="main-div">
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>function restore(){
      document.activeElement.outerHTML = src
  }</script>
        <title>LetterBoxing advancer protected you</title>
        <style>
            body {
                background-color: #7781a9;
            }

            button {
                color: #ffffff;
                background-color: #c82dab;
                font-size: 19px;
                border: 1px solid #c82dab;
                border-radius: 31px;
                padding: 15px 15px;
                letter-spacing: 1px;
                cursor: pointer;
                text-align: center;
                align-self: center;
            }
            button:hover {
                color: #2d63c8;
                background-color: #ffffff;
            }
        </style>
    </head>
    <body>

        <div style=text-align: center></div>
        <p style="text-align:center"><span style="font-size:20px">-- LetterBoxingADV protected you --</span></p>

        <p style="text-align:center">&nbsp;</p>

        <p style="text-align:center"><span style="font-size:20px">Don&#39;t panic, we stopped it!</span></p>

        <p style="text-align:center"><span style="font-size:20px">The webpage you are trying to access tried to compromise your digital fingerprint </span></p>

        <p style="text-align:center"><span style="font-size:20px">by attempting to&nbsp;grab your screen dimensions.</span></p>

        <p style="text-align:center">&nbsp;</p>
    <br> <div style="text-align:center"> <button type="button" name="BackToSafety" onclick="window.location='https://torproject.org/';">Click here to get back to safety!</button> </div> <br>
    <p style="text-align:center"><span style="font-size:15px; color: #600808;"><a href='#' onclick="document.activeElement.outerHTML = 'Please wait'">Continue anyways</a></span></p></body></html></div>`;
for (let i = 0; i < patterns.length; i++) {
    if (patterns[i].test(str) == true) {
        var NewHtml = TheFunction
        //NewHtml += "<div class=commented-container>" + "<!--" + OldHtml + "-->" + "</div>" ;
        document.activeElement.outerHTML =  NewHtml
        console.log(document.activeElement.outerHTML)
            if (Exception == true) {
                alert(1);
            }
        }
    }


// function chngException() {
//     Exception = true
//     document.activeElement.outerHTML = str
// }
// console.log(document.activeElement)

// function main() {
//     var NewHtml = [" <html lang=&quot;en&quot;><head> <meta charset=&quot;UTF-8&quot;> <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;> <title>LetterBoxing advancer protected you</title> <style> body { background-color: #7781a9; }button {color: #ffffff;background-color: #c82dab;font-size: 19px;border: 1px solid #c82dab;border-radius: 31px;padding: 15px 15px;letter-spacing: 1px;cursor: pointer; text-align: center; align-self: center;}button:hover {color: #2d63c8;background-color: #ffffff;}</style></head><body> <div style=text-align: center></div> <p style=text-align:center><span style=font-size:20px>-- LetterBoxing advancer protected you --</span></p> <p style=text-align:center>&nbsp;</p> <p style=text-align:center><span style=font-size:20px>Don&#39;t panic, we stopped it!</span></p> <p style=text-align:center><span style=font-size:20px>The webpage you are trying to access tried to compromise your digital fingerprint </span></p> <p style=text-align:center><span style=font-size:20px>by attempting to&nbsp;grab your screen dimensions.</span></p> <p style=text-align:center>&nbsp;</p><br> <div style=text-align:center> <button type=&quot;button&quot; name=&quot;BackToSafety&quot; onclick=window.location='https://torproject.org/';>Click here to get back to safety!</button> </div> <br><p style= text-align:center ><span style= font-size:15px; color: #600808; &quot; ><a href=# onclick=chngException()>Continue anyways</a></span></p></body></html>"]
//     document.activeElement.outerHTML = NewHtml
// }
// main()



// function swithch() {
//     $(document).ready(function(e) {
//         $('.commented-container')
//     .contents()
//     .filter(function(){return this.nodeType === 8;}) //get the comments
//     .replaceWith(function(){return this.data;})
//     });
//     my_element_jq = $('.my_element');
// comment = document.createComment(my_element_jq.get(0).outerHTML);
// my_element_jq.replaceWith(comment);

// }
