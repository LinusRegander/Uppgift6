import Head from 'next/head';
import AddMovieForm from '../src/components/MovieForm';
import MovieList from '../src/components/MovieList';

const Home = () => {
    return (
        <div className="container">
            <Head>
                <title>Laboration 11</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                    crossorigin="anonymous"
                />
                <link rel="stylesheet" href="assignment_3.css" />
            </Head>

            <h1>Min filmlista</h1>

            <MovieForm />
            <MovieList />
        </div>
    );
};

export default Home;