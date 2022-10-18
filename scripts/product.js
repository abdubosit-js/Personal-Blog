class Product extends App {
    async renderProducts() {
        const products = await this.fetchApi("/todos", 'GET')
        
        const todo = document.querySelector(".product_container")
        const fragment = document.createDocumentFragment()

        products.forEach(product => {
            const div = document.createElement('div')
            const date = new Date(product.createdDate)
            div.insertAdjacentHTML("beforeend", `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4" style="display: flex;">
                        <img src="${this.baseUrl + "/" + product.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><small class="text-muted">${"0" +date.getDay() + ".0" + date.getMonth() + "." + date.getFullYear()}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `)
            fragment.append(div)
        });
        todo.append(fragment)
    }
}

const product = new Product()