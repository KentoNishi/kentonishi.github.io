<head>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
</head>


# About
<div class="description"></div>


# Organizations

<div class="orgs"></div>


# Repositories

<div class="repos"></div>


<script>
    function httpGet(theUrl){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    jsonStr=httpGet("https://api.github.com/users/KentoNishi");
    jsonParsed=JSON.parse(jsonStr);
    document.querySelectorAll(".description")[0].innerText=jsonParsed.bio;
    document.querySelectorAll("link")[0].href=jsonParsed.avatar_url;
    document.title="Kento Nishi";
    var jsonStr=httpGet("https://api.github.com/users/KentoNishi/repos");
    var jsonParsed=JSON.parse(jsonStr);
    jsonParsed.sort((a,b)=>{
		return new Date(b.updated_at) - new Date(a.updated_at);
    });
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
    jsonStr=httpGet("https://api.github.com/users/KentoNishi/orgs");
    jsonParsed=JSON.parse(jsonStr);
    jsonParsed.reverse().forEach(org=>{
        var elem=document.createElement("h3");
        elem.color="black";
        elem.style.margin="0";
        var a=document.createElement("a");
        var url="https://github.com/"+org.login+"/";
        a.href=url;
        a.innerText=org.login;
        elem.appendChild(a);
        document.querySelectorAll(".orgs")[0].appendChild(elem);
    });
</script>

<style>
    body{
        background-color: #181a1b;
        color: rgb(193, 188, 179);
    }
    .main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {
        color: rgb(126, 237, 182);
    }
    a {
        color: rgb(111, 178, 232);
        text-decoration-color: initial;
    }
</style>