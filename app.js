window.onload=function(){
    let butt=document.getElementById("button");
    butt.addEventListener('click',function(a){
        a.preventDefault();
        let httpreq=new XMLHttpRequest();
        let url="superheroes.php";
        let heroes=function(){
            if(httpreq.readyState===XMLHttpRequest.DONE){
                if(httpreq.status===200){
                    let i=httpreq.i;
                    alert(i);
                    $("#result").html(i);
                }else{
                    alert("Something went wrong with this Request");
                };
            };
        };
        httpreq.onreadystatechange=heroes;
        httpreq.open('GET',url);
        httpreq.send();
    });
};