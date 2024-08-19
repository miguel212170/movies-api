import React from 'react';
import './../App.css';
import PropTypes from 'prop-types';
//import Spinnner from '../layout/Spinner';

const Namebox = function({loading,text,poster})
{
/*
	if(loading)
		return <Spinner />;
*/	
	let posterEl;
	if(poster !== 'N/A')
		posterEl = <div className='col-12 align-self-end'><img src={poster} alt='poster' /></div>;
	else
		posterEl = <div className='col-12 align-self-center'>No Image Available</div>;

	return (
		<div className="col-md-3 card movie-poster">
<div className='container h-100'>
<div className='row poster-section'>
		<div className='col-12'>{text}</div>
		{posterEl}
</div>
<div className='row description-section'>
	<div className='col-12 align-self-center'>put something here</div>
</div>
</div>
		</div>
	);


//		<div className='col-12 align-self-end'>
//			{poster !== 'N/A' && <img src={poster} /> ||'No Image Available'}
//		</div>
};

Namebox.defaultProps =
{
	text: 'fuck off',
	loading: false
};
Namebox.propTypes =
{
	text: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired
};
export default Namebox;
