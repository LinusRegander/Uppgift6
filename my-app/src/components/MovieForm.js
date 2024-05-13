import React, { useState } from 'react';
import starImage from '../images/star.png';
import deleteImage from '../images/delete.png';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [movies, setMovies] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRatingChange = (e) => {
        let rating = parseInt(e.target.value)
        setRating(rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validates if title and/or rating have been selected.
        if (title === '' || rating === 0) {
            alert('Ange både titel och betyg.');
            return;
        }

        const newMovie = {
            title: title,
            rating: rating
        };

        // Adds the movie to the list
        setMovies([...movies, newMovie]);

        // Resets the form
        setTitle('');
        setRating(0);
    };

    const handleDelete = (index) => {
        // Gets the movie list.
        const movieList = [...movies];

        // Splices and removes the movie corresponding to the index.
        movieList.splice(index, 1);

        // Updates the movieList with the new list.
        setMovies(movieList);
    };
      

    const handleSortAlphabetically = () => {
        // Gets the movie list.
        let movieList = [...movies];

        // Sorts the list.
        const sortedMovies = movieList.sort((a, b) => a.title.localeCompare(b.title));

        // Updates the list.
        setMovies(sortedMovies);
    };

    const handleSortByRating = () => {
        // Gets the movie list.
        let movieList = [...movies];

        // Sorts the list.
        const sortedMovies = movieList.sort((a, b) => b.rating - a.rating);

        // Updates the list.
        setMovies(sortedMovies);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <label htmlFor="title-field">Titel:</label>
                    <input type="text" id="title-field" className="form-control" value={title} onChange={handleTitleChange} />
                    <label htmlFor="rating-field">Betyg:</label>
                    <select id="rating-field" className="form-control" value={rating} onChange={handleRatingChange}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" className="btn btn-success mt-3" value="Spara film" />
                </fieldset>
            </form>

            <div style={{ margin: '10px 0' }}>
                <button style = {buttonStyle} onClick={handleSortAlphabetically}>Sortera alfabetiskt</button>
                <button style = {buttonStyle} onClick={handleSortByRating}>Sortera efter betyg</button>
            </div>

            <ul id="movies" style={{ margin: 0, padding: 0 }}>
                {movies.map((movie, index) => (
                    <li key={index} style={listStyle}>
                        {movie.title}
                        <img src={deleteImage} alt="Delete movie" className="delete-movie-icon" onClick={() => handleDelete(index)} style={deleteStyle} />
                        {createStars(movie.rating)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function createStars(rating) {
    let stars = [];

    // Loops through the rating and adds a star image to the stars list.
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={starImage} alt="Star" style={imgStyle} />);
    }
    return stars;
}

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '0 5px',
    cursor: 'pointer',
    outline: 'none',
};

const imgStyle = {
    width: '20px',
    height: '20px',
};

const deleteStyle = {
    float: 'right',
    height: '25px',
    marginLeft: '5px',
    cursor: 'pointer',
};

const listStyle = {
    listStyle: 'none',
    backgroundColor: '#eee',
    margin: '5px',
    padding: '20px',
    boxShadow: '0 0 5px #999',
};

export default MovieForm;