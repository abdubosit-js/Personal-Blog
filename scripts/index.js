class App {
    baseUrl = "http://10.10.5.245:8000"

    async fetchApi(url, method, data) {
        const config = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        } 

        if (method === 'POST') {
            let body = JSON.stringify(data)

            if (data instanceof FormData) {
                body = data
                delete config.headers["Content-Type"]
            }
            config.body = body
        }

        try {
            const response = await fetch(this.baseUrl + url, config)
            const result = await response.json()
            return result
        } catch(err) {
            console.log(err)
        }
    }
}