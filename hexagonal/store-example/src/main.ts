import { ProductService } from "./infraestructure/services/Product.service"

(async () => {
    
    const productService = new ProductService()
    const products = await productService.getAllProducts()
    const productList = document.getElementById('products')

    // debugger

    products.forEach(product => {
        const li = document.createElement('li')
        li.setAttribute('class', 'product-card')
        li.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        `

        productList?.appendChild(li)
    })
    
})()
