export default (msgJson,towhere)=>{
    const xhr = new XMLHttpRequest();
    //xhr.onload function內不作用原因 xhr.onload 須放在xhr.open 和xhr.send前
    xhr.onload=()=>{
        console.log('in on load')
        if(xhr.status>=200 &&xhr.status<300){
            console.log('ojdoiasjdoiasjdao')
            console.log(xhr.responseText)
            if(xhr.responseText==='true'){
                console.log(xhr.response.body)
                window.location.href='http://127.0.0.1:12345/dist/form.html';
            }
        }
    
        console.log(xhr.readyState)
    
    }
    
    
    xhr.open('post',"http://127.0.0.1:8000/post",true)
    
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(msgJson);
    
}
