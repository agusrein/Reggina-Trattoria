const products = [
    {id:"1",title:'Hamburguesa Completa',price:5370,stock:20,description:'200gr. Carne de ternera, Pan de papa, Jamon, Queso, Lechuga, Tomate y Mayonesa. Sale con Papas',img:'/img/hambur1.jpg',category:'4'},
    {id:"2",title:'Pizza Cuatro Quesos (8 Porciones)',price:4700,stock:20,description:'Masa a la Piedra ,Salsa de Tomate, Queso azul, Prato, Provolone y Mozzarella.',img:'/img/4quesos.jpg',category:'2'},
    {id:"3",title:'Pizza Serrana',price:4850,stock:10,description:'Masa a la Piedra, Salsa de Tomate, Queso, Rucula y Jamon Crudo.',img:'/img/serrana.jpg',category:'2'},
    {id:"4",title:'Sorrentinos a la Bolognesa',price:6500,stock:15,description:'Porcion de Sorrentinos de J&Q con Salsa Bolognesa',img:'/img/sorrentinos.jpg',category:'3'},
    {id:"5",title:'Milanesa a Caballo',price:6350,stock:5,description:'Comen 2. Milanesa cargada de Queso Cheddar, Tomate Cherry y Huevo Frito. Sale con Papas',img:'/img/milanga.jpg',category:'3'},
    {id:"6",title:'Bondiola de Cerdo',price:9400,stock:10,description:'Acompañada de puré de Batata al Vino',img:'/img/carne.jpg',category:'3'},
    {id:"7",title:'Papas Fritas con Queso',price:3800,stock:20,description:'Salen Fritas con Queso Cheddar, Cebolla de Verdeo y Bacon',img:'/img/papas.jpg',category:'1'},
    {id:"8",title:'Rabas Rebozadas',price:8000,stock:11,description:'Rebozadas con perejil y ajo',img:'/img/rabas.jpg',category:'1'},
    {id:"9",title:'Picada Completa (Para 4 personas)',price:11500,stock:5,description:'Salame picado Grueso, Queso , Jamon Cocido, Papas fritas, Aceitunas, Picles, Manies',img:'/img/picada.jpg',category:'1'},
    {id:"10",title:'Hamburguesa Americana',price:5400,stock:18,description:'200gr. Carne de ternera, Jamon Cocido, Queso Chedar, Cebolla Caramelizada, Huevo. Sale con fritas',img:'/img/hambur2.jpg',category:'4'}
];


export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products);
        },1000)
    })
}

export const getOneProduct = (id) => {

    return new Promise (resolve =>{
        setTimeout(()=>{
            const product = products.find(prod => prod.id === id);
            resolve(product)
        },2000)
    })
}

export const getProductByCategory = (idCategory) => {
    return new Promise (resolve =>{
        setTimeout( () => {
            const productsByCategory = products.filter(prod => prod.category === idCategory);
            resolve(productsByCategory)
        },2000)
    })
}