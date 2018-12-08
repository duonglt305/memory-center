const Helpers = {
    feedback: (err)=>{
        console.log(err);
        Helpers.closeLoading();
    },
    getToken: ()=>{
        return localStorage.getItem('token');
    },
    setToken: (token)=>{
        localStorage.setItem('token',token);
    },
    showLoading(){
        let preloader =  document.getElementsByClassName('lds-screen')[0];
        if(preloader)
            preloader.classList.contains('hide') ? preloader.classList.remove('hide'):'';
    },
    closeLoading(){
        setTimeout(()=>{
            let preloader =  document.getElementsByClassName('lds-screen')[0];
            if(preloader)
                !preloader.classList.contains('hide') ?  preloader.classList.add('hide') : '';
        },500);
    }
};
export default Helpers;
