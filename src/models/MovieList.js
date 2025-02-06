class MovieList {
   constructor() {
       this.movies = [];
   }

   addMovie(movie) {
       this.movies.push(movie);
   }

   getAllMovies() { // Certifique-se de que o nome do método está correto
       return this.movies;
   }

   getMovieById(id) {
       const movie = this.movies.find(movie => movie.id == id);
       if (!movie) {
           throw new Error("Filme não encontrado!");
       }
       return movie;
   }

   updateMovie(id, updateData) {
       const movie = this.getMovieById(id);
       Object.assign(movie, updateData);
       return movie;
   }

   deleteMovie(id) {
       this.movies = this.movies.filter(movie => movie.id != id);
   }
}

module.exports = MovieList;