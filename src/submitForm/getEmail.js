import sendDatatoServer from "../reuse/sendDatatoServer";
export default (ev)=>{
    ev.preventDefault();
    const email= document.getElementById('email').value;
    let data=JSON.stringify({email})
    sendDatatoServer(data,'../html/dataRender.html')
}