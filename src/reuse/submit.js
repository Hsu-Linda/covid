export default (getDataModule)=>{
    const submit= document.getElementById('submit');
    document.addEventListener('DOMContentLoaded',()=>{
        submit.addEventListener('click',getDataModule)
    })
}
