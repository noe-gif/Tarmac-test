/*
					📜
		   
	************************************
	*                                  *
	*     DEFINES THE SIDEBAR          *
	*     & RIGHT SECTIONS CONTENT     *
	*         (crf Content.js)         *
	*                                  *
	************************************

*/

/* ⚛️ react libraries */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* 🎨 assets libraries*/
import { FaPlaneDeparture } from 'react-icons/fa';
import { ImStatsDots, ImCogs, ImPieChart, ImCloud } from "react-icons/im";
import { IoIosAlert } from "react-icons/io";

/* 📦 my components*/
import Content from './Content';
import { classNames, compare } from './Utils';
import { getFlights } from "../../redux/reducers/flights";
import { getCompanies } from "../../redux/reducers/companies";


/* Different navigations options */
const navigation = [
	{ name: 'Departures', href: '#!', current: true, id: 0 },
	{ name: 'Analytics', href: '#!', current: false, id: 1 },
	{ name: 'Performance', href: '#!', current: false, id: 2 },
	{ name: 'Real-time data', href: '#!', current: false, id: 3 },
	{ name: 'Predictions', href: '#!', current: false, id: 4 },
	{ name: 'Alerts', href: '#!', current: false, id: 5 },
]


/* ____________________________________________________________________________________________________________________*/


const Home = () => {
	const [currentNavSelection, setCurrentNavSelection] = useState(0)
	const dispatch = useDispatch();

	useEffect(() => {
		/* ⏩ Action to get the flight class using dispatch method from redux */
		dispatch(getFlights());
		dispatch(getCompanies());
	}, [dispatch]);

	const flightsData = useSelector((state) => state.flight);
	const companiesData = useSelector((state) => state.companies);

	if (flightsData && flightsData.flights && flightsData.flights.data) {
		flightsData.flights.data.sort(compare)
	}

	const NavIcon = (props) => {
		const navigationIcons = [
			<FaPlaneDeparture className={props.className}></FaPlaneDeparture>,
			<ImStatsDots className={props.className}></ImStatsDots>,
			<ImCogs className={props.className}></ImCogs>,
			<ImPieChart className={props.className}></ImPieChart>,
			<ImCloud className={props.className}></ImCloud>,
			<IoIosAlert className={props.className}></IoIosAlert>,
		]
		return (navigationIcons[props.id]);
	}
	return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			<div className="hidden md:flex md:flex-shrink-0">
				<div className="flex flex-col w-64">
					<div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">

						{/* ⚠️ JSX OF SIDEBAR NAVIGATION OPTIONS */}

						<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto" >
							<div className="flex items-center flex-shrink-0 px-4">
								<img className="h-8 w-auto" src="https://cdn.discordapp.com/attachments/965224699367927808/966251587116879902/Sans_titre.png" alt="Tarmac" />
							</div>
							<nav className="mt-5 flex-1 px-2 bg-white space-y-1">

								{/* ❓ -- Loop over the navigations options -- */}
								{navigation.map((item, i) => (
									<a key={i} data-testid={`navigation-${item.id}`} href={item.href} className={classNames(
										item.id === currentNavSelection ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
										'group flex items-center px-2 py-2 text-sm font-medium rounded-md')}
										style={{ marginTop: '20px', }} onClick={() => { setCurrentNavSelection(item.id) }} >
										<NavIcon id={item.id} className={classNames(item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6')}></NavIcon>
										{item.name}
									</a>
								))}
							</nav>
						</div>

						{/* ⚠️ JSX OF BOTTOM USER INFO SECTION */}

						<div className="flex-shrink-0 flex border-t border-gray-200 p-4" data-testid={`user-${1}`}>
							<a href="#!" className="flex-shrink-0 w-full group block">
								<div className="flex items-center">
									<div>
										<img
											className="inline-block h-9 w-9 rounded-full"
											src="http://cdn.onlinewebfonts.com/svg/img_568656.png"
											alt=""
										/>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Username</p>
										<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* ⚠️ CONTENT OF NAVIGATION SECTIONS */}

			<Content flightsData={flightsData} companiesData={companiesData} currentNavSelection={currentNavSelection} currentSection={currentNavSelection}></Content>


		</div>
	)
}

export default Home;