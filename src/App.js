import React, {useState, useEffect} from 'react';
import './App.css';
import Namebox from './components/Namebox';
import axios from 'axios';

// Pagination ?


const OMDB_API='http://www.omdbapi.com/?i=tt3896198&apikey=8b988e08';
/* async componentDidMount = function() 
{
	setState({loading: true});

	var url = whatever the movie api url is
//	axios.get(url).then(msg=>{console.log(msg)});
	let msg = await axios.get(url)
	console.log(msg);
	setState({someData: msg, loading: false});
}
*/
function App() 
{

	const [loading, setLoading] = useState(false);	
	const [movies, setMovies] = useState(null);	
	const [loaded, setLoaded] = useState(false);
	useEffect
	(
		function()
		{
			setLoading(true);
			(async function()
			{
				let res = await axios.get('https://www.omdbapi.com/?s=monty+python&apikey=8b988e08&page=1');
				console.log(res);
				if(res && res.data && res.data.Search)
					setMovies(res.data.Search);
				setLoading(false);
				setLoaded(true);
			})();
		},
		[loaded]
	);
  return (
    <div className="App">

<div className="container carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
</div>
	<div className='row container mh-25 overflow-hidden marquis-container'>
		<div className='col-1'>
			<button style={{type:'button'}} className="btn btn-lg btn-primary" disabled>&lt;</button>
		</div>
		<div className='col'>
			<div className="row movie-marquee align-items-end mw-75 overflow-hidden">
				{movies?movies.filter((v,ind)=>(ind<4)).map(movie=>(<Namebox text={movie.Title} poster={movie.Poster} l={loading} key={movie.imdbID} />)):(<div>Waiting for movies</div>)}
			</div>
		</div>
		<div className='col-1'>
			<button style={{type:'button'}} className="btn btn-lg btn-primary" active>&gt;</button>
		</div>
	</div>
    </div>
  );
}

export default App;
