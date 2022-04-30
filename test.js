const submit =document.getElementById('sub')
submit.onclick=function(){
    const xhr = new XMLHttpRequest();
    xhr.open('post',"http://127.0.0.1:8000/post",false)
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send();
    xhr.onreadystatechange=()=>{
        console.log(xhr.readyState)
        if(xhr.readyState===4){
            console.log('we are 4')
        }
    }
}
