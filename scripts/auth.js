class Auth extends App {
    async signup() {
        const usernameValue = document.querySelector("#user").value
        const passwordValue = document.querySelector("#password").value
        const confirmPasswordValue = document.querySelector("#confirmPassword").value
        const signupCnt = document.querySelector(".password")
        const button = document.querySelector("#button-submit")
        
        const data = {
            username: usernameValue,
            password: passwordValue,
            confirmPassword: confirmPasswordValue
        }
        
        if (data.confirmPassword.length <= 5 && data.password.length <= 5 ) {
            
        } else {

        }
        
        const signup = await this.fetchApi("/signup", "POST", data)  
        console.log(signup)

    }

    async login() {
        const usernameValue = document.querySelector("#userLogin").value
        const passwordValue = document.querySelector("#passwordLogin").value

        const data = {
            username: usernameValue,
            password: passwordValue
        }

        const login = await this.fetchApi("/login", 'POST', data)
        localStorage.setItem("token", login.token)

        if (Boolean(localStorage.getItem("token"))) {
            window.location.href = "index.html"
        } else {
            console.log(login.message)
        }
    }

    async addTodos(event) {
        event.preventDefault();
        const formData = new FormData(event.target) 
        const todos = await this.fetchApi("/todos", 'POST', formData).then(res => window.location.href = 'index.html')
    }

    renderInputError(e) {
        const cntconfirmPassword = document.querySelector(".confirmPassword")
    
        if (e.target.value.length <= 5) {
            cntconfirmPassword.style.border = "2px solid red"
        } else {
            cntconfirmPassword.style.border = "2px solid #7EBCC3"
        }
    }
    
    renderInputErrorPass(e) {
        const cntPassword = document.querySelector(".password")
        
        if (e.target.value.length <= 5) {
            cntPassword.style.border = "2px solid red"
        } else {
            cntPassword.style.border = "2px solid #7EBCC3"
        }
    }

    viewPassword() {
        const x = document.querySelector("#password")
        const a = document.querySelector("#confirmPassword")
        
        if (x.type === "password" && a.type === "password") {
            x.type = "text";
            a.type = "text";
        } else {
            x.type = "password";
            a.type = "password";
        }    
    }

    logout() {
        localStorage.removeItem("token")
    }

    headerFunc() {
        const header = document.querySelector("header")

        header.insertAdjacentHTML("beforeend", `
        <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
            <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Personal Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="addtodos.html">create Todo</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                ${Boolean(localStorage.getItem("token")) ? `
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" onclick="auth.logout()">
                            <a class="nav-link active" aria-current="page" href="index.html">logout</a>
                        </li>
                    </ul>
                ` :
                    `
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="signup.html">sign up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="signin.html">sign in</a>
                            </li>
                        </ul>
                    `
                }
                </form>
            </div>
            </div>
        </nav>
        `)
    }

}

const auth = new Auth()