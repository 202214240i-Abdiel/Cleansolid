(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película
    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener la biografía del actor por su Id
    function getActorBioById(actorId: string) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({ title,description,rating,cast}:Movie)
     {
        console.log({ title, description, rating, cast });
    }

    // Crear un nuevo actor si no existe
    function createActor
    (fullName: string, birthDate: Date): boolean {
        
            // tarea asíncrona para verificar nombre
            // ..
            // ..

            if (fullName === 'fernando') return false;

            console.log('Crear actor');
            return true;
    }

})();




