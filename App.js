class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
     addProduct(product) {
        const productList=document.getElementById('product-list');
        const element=document.createElement('div');

        element.innerHTML = `
            <div class="card  bg-dark text-light text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger ms-5" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
     }
     resetForm(){
         document.getElementById('product-form').reset();
     };
     deleteProduct(element) {
        if(element.name == 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully','danger');
        }
     }
     showMessage(message,cssClass){
        const div=document.createElement('div');
        div.className=`alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Showing in DOM
        const container=document.querySelector('.container');
        const app=document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000)
     }
}
// Events DOM
document.getElementById('product-form').addEventListener('submit', (e)=>{
    const name=document.getElementById('name').value;
    const price=document.getElementById('price').value;
    const year=document.getElementById('year').value;

    const product=new Product(name, price, year);

    const iu=new UI();
    if(name==''||price==''||year==''){
        return iu.showMessage('Please enter The Dates','warning');
    }
    
        iu.addProduct(product);
        iu.resetForm();
        iu.showMessage('Product Added successfully', 'success');
    
    e.preventDefault();
});
document.getElementById('product-list').addEventListener('click', (e) => {
    const ui= new UI();
    ui.deleteProduct(e.target);
});