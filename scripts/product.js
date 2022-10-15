class Product extends App {
    async renderProducts() {
        const products = await this.fetchApi("/todos", 'GET')
        
        const todo = document.querySelector(".product_container")
        const fragment = document.createDocumentFragment()

        products.forEach(product => {
            const div = document.createElement('div')
            
            div.insertAdjacentHTML("beforeend", `
                <h1>${product.title}</h1>
                <img src='${this.baseUrl + '/' + product.image}' alt="" />
                <p>${product.description}</p>
            `)
            fragment.append(div)
        });
        todo.append(fragment)
    }
}

const product = new Product()