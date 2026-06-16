(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    // ==========================================
    // SERVICIOS
    // ==========================================
    class ProductService {
        loadProduct( id: number ): Product {
            const product = { id, name: 'OLED TV' };
            console.log('Producto: ', product);
            return product;
        }

        saveProduct( product: Product ): void {
            console.log('Guardando en base de datos', product);
        }
    }

    class NotificationService {
        notifyClients(): void {
            console.log('Enviando correo a los clientes');
        }
    }

    class CartService {
        addToCart( productId: number ): void {
            console.log('Agregando al carrito ', productId);
        }
    }

    // ==========================================
    // BLOC / CONTROLADOR
    // ==========================================
    class ProductBloc {

        constructor(
            private readonly productService: ProductService,
            private readonly notificationService: NotificationService,
            private readonly cartService: CartService,
        ) {}

        loadProduct( id: number ): void {
            this.productService.loadProduct(id);
        }

        saveProduct( product: Product ): void {
            this.productService.saveProduct(product);
        }

        // CORRECCIÓN 1: Agregar el método para notificar clientes
        notifyClients(): void {
            this.notificationService.notifyClients();
        }

        // CORRECCIÓN 2: Agregar el método para interactuar con el carrito
        onAddToCart( productId: number ): void {
            this.cartService.addToCart(productId);
        }
    }

    // ==========================================
    // INSTANCIAS Y EJECUCIÓN
    // ==========================================
    const productService     = new ProductService();
    const notificationService = new NotificationService();
    const cartService         = new CartService();

    // Inyección de dependencias en el constructor
    const productBloc = new ProductBloc(
        productService,
        notificationService,
        cartService,
    );

    // Ejecución de métodos (¡Ahora todos existen!)
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);

})();