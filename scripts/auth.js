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

        const todos = await this.fetchApi("/todos", 'POST', formData)
        console.log(formData)
    }

    renderInputError(e) {
        const cntconfirmPassword = document.querySelector(".confirmPassword")
    
        if (e.target.value.length <= 5) {
            cntconfirmPassword.style.border = "2px solid red"
        } else {
            cntconfirmPassword.style.border = "2px solid #7EBCC3"
        }
    }
    
    renderInputErrorName(e) {
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

}

const auth = new Auth()