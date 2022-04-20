/*
					📜
		   
	************************************
	*                                  *
	*     DEFINES THE CONTENT FOR      *
	*      EACH NAV SECTIONS           *
	*                                  *
	************************************

*/

/* ⚛️ react libraries */
import React, { useState, useEffect } from "react";

/* 🎨 assets libraries*/
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import ReactLoading from "react-loading";

/* 📦 my components*/
import Flights from '../Arrivals/Arrivals';
import * as styler from './style';
import Filter from './Filter';


/* ____________________________________________________________________________________________________________________*/



/* ❓ props getting the nav section id so we know which one to display */
const Content = (props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);
	const [filter, setFilter] = useState('')
	let pageNumbers = [];
	const posts = props.flightsData === undefined ? [] : props.flightsData;
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	let currentPosts;

	const getFilter = (filterChosen) => {
		setFilter(filterChosen)
	}

	/* ❓ L56 - 71 */
	/* ---------------------------------------------------------------------------------------------------- */
	/* ---------------------  if (data loaded and no filters) {                             ----------------*/
	/* ---------------------      split the flights in 10 flights blocks                    ----------------*/
	/* ---------------------  } else if (there is a filter) {                               ----------------*/
	/* ---------------------      split the flights in n fights blocks depending on filter  ----------------*/
	/* ---------------------  } else {                                                      ----------------*/
	/* ---------------------      data did not load yet                                     ----------------*/
	/* ---------------------   }                                                            ----------------*/
	/* ---------------------------------------------------------------------------------------------------- */

	if (posts !== [] && posts.flights && posts.flights.data && filter === '') {
		pageNumbers = [];
		for (let i = 1; i <= Math.ceil(posts.flights.data.length / postsPerPage); i++) {
			pageNumbers.push(i);
		}
		currentPosts = posts.flights.data.slice(indexOfFirstPost, indexOfLastPost)
	} else if (filter !== '') {
		pageNumbers = [];
		let xx = posts.flights.data.filter((flight) => { if (flight.airline.name == filter) { return flight } })
		for (let i = 1; i <= Math.ceil(xx.length / postsPerPage); i++) {
			pageNumbers.push(i);
		}
		currentPosts = xx.slice(indexOfFirstPost, indexOfLastPost)
	} else {
		currentPosts = [];
	}


	/* ❓ each offset defines the content of each section on the left side*/
	const navSelectionContent = [
		props.flightsData.flights === undefined ? <ReactLoading type="spinningBubbles" color="#0000FF" style={styler.loadingStyle} />
			: <Flights posts={currentPosts} ></Flights>,
		<div style={{ width: '20%', height: '20%', position: 'absolute', top: '27%', left: '33%' }}><img alt="" src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif"></img></div>,
		<div style={{ width: '20%', height: '20%', position: 'absolute', top: '27%', left: '33%' }}><img alt="" src="https://i.imgur.com/VKfapZT.gif"></img></div>,
		<div style={{ width: '20%', height: '20%', position: 'absolute', top: '27%', left: '33%' }}><img alt="" src="https://stoic-liskov-800c94.netlify.app/images/sunset.gif"></img></div>,
		<div style={{ width: '20%', height: '20%', position: 'absolute', top: '27%', left: '33%' }}><img alt="" src="https://i.imgur.com/QW2GPll.gif"></img></div>,
		<div style={{ width: '20%', height: '20%', position: 'absolute', top: '28%', left: '33%' }}><img alt="" src="https://miro.medium.com/max/1400/1*KOAdvGvsKsFfWpmYTBpQFA.gif"></img></div>
	]
	return (
		<div className={styler.cssClass2}>

			{/* ⚠️ MAIN JSX CONTENT (WITHIN DASHED BORDERS) */}

			<main className={styler.cssClass3} style={styler.contentStyleN1} data-testid={`content-${1}`}>
				<div className={styler.cssClass5}>
					<div className={styler.cssClass6} >
						<div className={styler.cssClass7} style={styler.contentStyleN2} >
							{navSelectionContent[props.currentNavSelection]}
						</div>
					</div>
				</div>
			</main>
			{/* ⚠️ PAGINATION JSX */}

			{props.currentSection === 0 ? <>
				<div style={styler.paginationStyleN1} data-testid={`content-${2}`}>
					<div>
						<div style={{ marginLeft: '90px' }}>
							<p className={styler.cssClass8} style={posts !== [] && posts.flights && posts.flights.data ? {} : { marginLeft: '-180px' }}>
								Showing <span className={styler.cssClass9}>1</span> to <span className={styler.cssClass9}>10</span> of{' '}
								<span className={styler.cssClass9}>{posts !== [] && posts.flights && posts.flights.data ? posts.flights.data.length : '⌛'}</span> results
							</p>
						</div>
						<div style={{ height: '10px' }}></div>
						<div>
							<nav className={styler.cssClass10} style={{ marginLeft: '-50px' }} aria-label="Pagination">
								<a href="#" className={styler.cssClass1} onClick={() => { setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1) }}>
									<span className={styler.cssClass11}>Previous</span>
									<ChevronLeftIcon className={styler.cssClass12} aria-hidden="true" />
								</a>
								{pageNumbers.map(number =>
									<a onClick={() => { setCurrentPage(number) }} key={number} href="!#" className={number === currentPage ? styler.classSelected : styler.classNotSelected}>{number}</a>
								)}
								<a href="#" className={styler.cssClass4} onClick={() => { setCurrentPage(currentPage === 10 ? currentPage : currentPage + 1) }}>
									<span className={styler.cssClass11}>Next</span>
									<ChevronRightIcon className={styler.cssClass12} aria-hidden="true" />
								</a>
							</nav>
						</div>
					</div>
				</div>
				<Filter getFilter={getFilter} airlinesNames={props.companiesData} flightsData={props.flightsData} /></> : <></>}
		</div>
	)
}

export default Content;