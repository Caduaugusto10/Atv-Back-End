const { v4: uuid4 } = require('uuid');

class Movie {
    constructor(title, author, duration, genre) {
        this.id = uuid4();
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.genre = genre;
    }

}

module.exports = Movie;