
export function Prueba({nombre, Apellido}){
    const products = [
        { title: "Col", id: 1, description: "La col es un tipo de hortaliza que se caracteriza por tener un tallo grueso, hojas anchas y pequeñas, y flores blancas o amarillas. "},
        { title: "Ajo", id: 2, description: "planta perenne, bulbosa y herbácea que pertenece a la familia de las Liliaceae"},
        { title: "Manzana", id: 3, description: "planta perenne, bulbosa y herbácea que pertenece a la familia de las Liliaceae"},
    ];


    return( <>
    
    <h1>
        Hola {nombre} {Apellido}
    </h1>
    
    {
        products.map((product, i) => {
            return(

                <div class={product.id}>
                <div class="fondo">
                    <h2 clasName="para centrar">{product.title}: </h2>
                    <p>{product.description}</p>                  
                </div>
            
        </div>      
            
                
            )
        })

    }
    </>
    
);
}
