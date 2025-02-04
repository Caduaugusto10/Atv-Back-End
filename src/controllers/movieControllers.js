const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie("Carros 3", "Jonathon E. Stewart", "1h:43m", "Animação");
lista.addMovie(filme1);

lista.addMovie(new Movie("Tá Dando Onda", "Christian Darren", "1h:25m", "Animação"));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, author, duration, genre } = req.body;
            if (!title || !author || !duration || !genre) {
                throw new Error("Preencha todos os campos!");
            }
            const filme = new Movie(title, author, duration, genre);
            lista.addMovie(filme);
            res.status(200).json({ message: "Criado com sucesso", filme });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar música",
                error: error.message,
            });
        }
    },

    getAllMovies: (req, res) => {
        try {
            const songs = lista.getAllMovies();
            res.status(200).json(songs);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error: error.message,
            });
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id",
                error: error.message,
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteMovie: (req, res) => {
        try {
            const movie = req.params.id;
            lista.deleteMovie(movie);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                song,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar filme",
                error: error.message,
            });
        }
    },

    getTop10Songs: (req, res) => {
        try {
            const movies = lista.getTop10Songs();
            res.status(200).json(songs);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar Top10",
                error: error.message,
            });
        }
    },
};

module.exports = router;
