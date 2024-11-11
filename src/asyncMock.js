const products = [
  { id: "1", 
    name: "Proteína Whey ON",
    category: "Proteinas", 
    price: 71000,
    img: "https://dojiw2m9tvv09.cloudfront.net/26533/product/X_gold-5lb-choco0086.jpg?270&time=1731334575",
    stock: 15, 
  },

  { id: "2", 
    name: "Creatina SharkPro", 
    category: "Creatina", 
    price: 11990,
    img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_creatinna-monohidratada-150g-27-1-5797e537ca631b3ac095984fced7f4c67930.jpg?270&time=1731334613",
    stock: 11,
   },
  { id: "3", 
    name: "Proteína Ultimate Nutrition", 
    category: "Proteinas", 
    price: 61990,
    img: "https://dojiw2m9tvv09.cloudfront.net/26533/product/X_099071001498ul-prostar-choco.jpg?270&time=1731334756",
    stock: 20,
   },
    
   { id: "4", 
      name: "Ganador de Masa Ostrovit", 
      category: "Ganadores", 
      price: 15990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_eng-pl-ostrovit-gainer-1000-g-26495-27798.jpg?270&time=1731335344",
      stock: 21,
    },
    { id: "5", 
      name: "Ostrovit Vitamina B", 
      category: "Vitaminas", 
      price: 7990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_ostrovit-b-complex3955.jpg?270&time=1731335405",
      stock: 6,
    },
    { id: "6", 
      name: "Sunvit Vitamina C 1000", 
      category: "Vitaminas", 
      price: 7990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_sunvit-vit-c3805.jpg?270&time=1731352873",
      stock: 8,
    },
    { id: "7", 
      name: "Max Titanium Omega 3", 
      category: "Vitaminas", 
      price: 11990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_max-omega-37344.jpg?270&time=1731352915",
      stock: 9,
    },
    { id: "8", 
      name: "NutraBio Creatina (150 gr)", 
      category: "Creatina", 
      price: 11990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_crea-150gr9368.jpg?270&time=1731352988",
      stock: 9,
    },
    { id: "9", 
      name: "Nutrex Creatina Drive (300 gr)", 
      category: "Creatina", 
      price: 19990,
      img:"https://dojiw2m9tvv09.cloudfront.net/26533/product/X_nutrex-creatina-new0348.jpg?270&time=1731353036",
      stock: 9,
    },
];
  
  

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