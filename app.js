document.addEventListener('DOMContentLoaded', function(){
    const searchbtn=document.getElementById('searchbtn');
    $.ajaxSetup();
    searchbtn.addEventListener('click', function(e){
        e.preventDefault();
        const httpReq = new XMLHttpRequest();
        let url = 'http://localhost:8080/superheroes.php';
        httpReq.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = httpReq.responseText;
                alert(response);
            }
        };
        httpReq.open('GET', url);
        httpReq.send();

    });
        
});