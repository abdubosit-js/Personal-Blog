class Auth extends App {
    async signup() {
        const usernameValue = document.querySelector("#user").value
        const passwordValue = document.querySelector("#password").value
        const confirmPasswordValue = document.querySelector("#confirmPassword").value
        
        const data = {
            username: usernameValue,
            password: passwordValue,
            confirmPassword: confirmPasswordValue
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
}

const auth = new Auth()