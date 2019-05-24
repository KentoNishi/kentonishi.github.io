<title>Kento Nishi</title>

<head>
    <link rel="shortcut icon" type="image/x-icon">
</head>

# About
<div class="description"></div>


# Projects

<div class="repos"></div>

<script>
    function httpGet(theUrl){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    var jsonStr=httpGet("https://api.github.com/users/KentoNishi/repos");
    var jsonParsed=JSON.parse(jsonStr);
    jsonParsed.forEach(repo=>{
        var elem=document.createElement("h3");
        elem.color="black";
        elem.style.margin="0";
        var a=document.createElement("a");
        a.href=repo.html_url;
        a.innerText=repo.name;
        elem.appendChild(a);
        document.querySelectorAll(".repos")[0].appendChild(elem);
    });
    jsonStr=httpGet("https://api.github.com/users/KentoNishi");
    jsonParsed=JSON.parse(jsonStr);
    document.querySelectorAll(".description")[0].innerText=jsonParsed.bio;
    document.querySelectorAll("link")[0].href=jsonParsed.avatar_url;
</script>
