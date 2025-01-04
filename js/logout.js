function manageAuthBtns(){

    if(localStorage.getItem('email')){
        const logoutDiv = document.getElementById('email-logout-div');
        const emailHomepage = document.getElementById('homepg-email');
        const branchName = localStorage.getItem('branch');

        if(branchName) {
            emailHomepage.innerHTML = localStorage.getItem('email') + ` (${branchName})`;
        } else {
            emailHomepage.innerHTML = localStorage.getItem('email');
        }
        logoutDiv.style.display = 'block';
        
        const AuthBtns = document.getElementsByClassName('loginH');
        AuthBtns[0].style.display = 'none';
        AuthBtns[1].style.display = 'none';
        
        


    } else {  
        const logoutDiv = document.getElementById('email-logout-div');
        logoutDiv.style.display = 'none';
        
        const AuthBtns = document.getElementsByClassName('loginH');
        AuthBtns[0].style.display = 'block';
        AuthBtns[1].style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('branch');
    manageAuthBtns()
}

function showLogoutDiv(){
    const logoutDiv = document.getElementById('email-logout-div');
    const logoutBtn = document.getElementById('logout-btn');

    logoutDiv.style.display = 'block';
    
}

export { logout, manageAuthBtns };