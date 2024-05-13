import React from 'react';
import MovieForm from '../src/components/MovieForm';

const Home = () => {
  return (
      <div className="container">
          <React.Fragment>
              <title>Assigment 6</title>
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                  integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                  crossOrigin="anonymous"
              />
          </React.Fragment>

          <h1>Min filmlista</h1>

          <MovieForm></MovieForm>
      </div>
  );
};

export default Home;
