document.addEventListener('DOMContentLoaded', function(){
    const searchbtn=document.getElementById('searchbtn');
    const searchbar=document.getElementById('searchbar');
    searchbtn.addEventListener('click', function(e){
        e.preventDefault();
            var searchValue=searchbar.value;
            searchValue=searchValue.trim().toUpperCase();
            searchValue=searchValue.replace(/[^a-zA-Z0-9\s]/g,'');
            let httpReq = new XMLHttpRequest();
            let url = 'http://localhost:8080/superheroes.php?q='+searchValue+'';
            httpReq.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200){
                    let response = httpReq.responseText;
                    result.innerHTML=response;
                }
            };
            httpReq.open('GET', url);
            httpReq.send();
        })
});