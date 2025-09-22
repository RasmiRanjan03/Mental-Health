document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const showSignup = document.getElementById('show-signup');
            const showLogin = document.getElementById('show-login');
            const backToLogin = document.getElementById('back-to-login');
            
            showSignup.addEventListener('click', function(e) {
                e.preventDefault();
                loginForm.classList.remove('visible');
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
                signupForm.classList.add('visible');
            });
            
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                switchToLogin();
            });
            
            backToLogin.addEventListener('click', function(e) {
                e.preventDefault();
                switchToLogin();
            });
            
            function switchToLogin() {
                signupForm.classList.remove('visible');
                signupForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
                loginForm.classList.add('visible');
            }
            
            // Form submission
            loginForm.addEventListener('submit', function(e) {
                const n=document.getElementsByName('email')[0].value
                const p=document.getElementsByName('pass')[0].value
                if(n=="admin@gmail.com" && p=="admin"){
                    location.replace('https://preview--clone-this-look-15.lovable.app/')
                }
                else if ((n=="alex@gmail.com")&& (p=="pass")){
                location.replace("https://preview--halo-student-care.lovable.app/")
                }
                

                else{
                    alert("Invalide")
                    
                }
                e.preventDefault();

                
            });
            
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Signup functionality would be implemented here!');
            });

            // Adjust layout on load based on screen size
            function adjustLayout() {
                if (window.innerWidth < 900) {
                    document.querySelector('.container').style.height = 'auto';
                } else {
                    document.querySelector('.container').style.height = '550px';
                }
            }

            window.addEventListener('resize', adjustLayout);
            adjustLayout();
        });