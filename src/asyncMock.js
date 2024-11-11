const products = [
  { id: 1, 
    name: "Proteína Whey ON",
    category: "Proteinas", 
    price: 71000,
    img: "https://dojiw2m9tvv09.cloudfront.net/26533/product/X_gold-5lb-choco0086.jpg?270&time=1731334575" 
  },

  { id: 2, 
    name: "Creatina SharkPro", 
    category: "Creatina", 
    price: 11990,
    img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_creatinna-monohidratada-150g-27-1-5797e537ca631b3ac095984fced7f4c67930.jpg?270&time=1731334613",
   },
  { id: 3, 
    name: "Proteína Ultimate Nutrition", 
    category: "Proteinas", 
    price: 61990,
    img: "https://dojiw2m9tvv09.cloudfront.net/26533/product/X_099071001498ul-prostar-choco.jpg?270&time=1731334756",
   },
    
   { id: 4, 
      name: "Ganador de Masa Ostrovit", 
      category: "Ganadores", 
      price: 15990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_eng-pl-ostrovit-gainer-1000-g-26495-27798.jpg?270&time=1731335344",
    },
    { id: 5, 
      name: "Ostrovit Vitamina B", 
      category: "Vitaminas", 
      price: 7990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_ostrovit-b-complex3955.jpg?270&time=1731335405",
    },
];
  
  
  // obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      resolve(products);
    });
  };
  
  // obtener los productos por categoria
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      resolve(products.filter((prod) => prod.category === categoryId));
    });
  };
  
  // obtener un solo producto por id
  export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      resolve(products.find((prod) => prod.id === productId));
    });
  };