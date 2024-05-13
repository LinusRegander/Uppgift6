import { useState } from 'react';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        setRating(0);
    };

    return (
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
    );
};

export default MovieForm;
