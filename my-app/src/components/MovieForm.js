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
        setRating(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title === '' || rating === 0) {
            alert('Ange både titel och betyg.');
            return;
        }

        const newMovie = {
            title: title,
            rating: rating
        };

        setMovies([...movies, newMovie]);
        setTitle('');
        setRating(0);
    };

    const handleDelete = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
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

            <ul id="movies" style={{ margin: 0, padding: 0 }}>
                {movies.map((movie, index) => (
                    <li key={index} style={{ listStyle: 'none', backgroundColor: '#eee', margin: '5px', padding: '20px', boxShadow: '0 0 5px #999' }}>
                        {movie.title}
                        <img src={deleteImage} alt="Delete movie" className="delete-movie-icon" onClick={() => handleDelete(index)} style={{ float: 'right', height: '25px', marginLeft: '5px', cursor: 'pointer' }} />
                        {createStars(movie.rating)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function createStars(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={starImage} alt="Star" style={{ width: '20px', height: '20px' }} />);
    }
    return stars;
}

export default MovieForm;