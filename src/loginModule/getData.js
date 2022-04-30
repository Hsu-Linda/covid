import sendDatatoServer from "../reuse/sendDatatoServer";
export default (ev)=>{
    ev.preventDefault();
    const ID= document.getElementById('ID').value;
    const password= document.getElementById('password').value
    let data=JSON.stringify({ID:ID,password:password})
    sendDatatoServer(data,'../html/dataRender.html')
}