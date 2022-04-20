/*
					📜
		   
	************************************
	*                                  *
	*        FILTER COMPONENT          *
	*   child component of <Content>   *
	*      send the filter selected    *
	*        to <Content> (L38 & L42)  *
	*                                  *
	************************************

*/

/* ⚛️ react libraries */
import React, { useState, useEffect, Fragment } from "react";

/* 🎨 assets libraries*/
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import * as styler from './style';

/* 📦 my components*/
import { classNames, numberOfResultsPerFilters } from './Utils';


/* ____________________________________________________________________________________________________________________*/


export default function Filter(props) {
	const [companies, setCompanies] = useState([])
	const [resultsPerFilter, setResultsPerFilter] = useState([])
	const [selectedFilter, setSelectedFilter] = useState('Options')

	useEffect(() => {
		var tmpArray = []
		for (let i = 0; i < 20 && props.airlinesNames.companies && props.airlinesNames.companies.data; i++)
			tmpArray.push(props.airlinesNames.companies.data[i]);
		setResultsPerFilter(numberOfResultsPerFilters(tmpArray, props.flightsData))
		setCompanies(tmpArray)
	}, [props.airlinesNames, props.flightsData]);



	return (
		<Menu as="div" data-testid={`filter-${1}`} className="relative inline-block text-left" style={{ position: 'absolute', top: '7%', left: '82%' }}>
			<div>
				{/* ❓ Shows the option selected */}
				<Menu.Button className={styler.cssClassA}>
					{selectedFilter}
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>
			{/* ❓ Shows the 20 different company name options to select*/}
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
				style={{ position: 'absolute', left: '0%' }} >
				<Menu.Items className={styler.cssClassB}>
					<div className="py-1">
						<Menu.Item >{({ active }) => (<a href="#" className={'block px-4 py-2 text-sm'} onClick={() => { setSelectedFilter('Options'); props.getFilter('') }}>- &nbsp; -</a>)}</Menu.Item>
						{companies !== undefined ? companies.map((airline, i) =>
							<Menu.Item key={i}>
								{({ active }) => (
									<a data-testid={`filter-comp-${i}`} href="#" className={classNames(active ? styler.cssClassC : 'text-gray-700', 'block px-4 py-2 text-sm')}
										onClick={() => { setSelectedFilter(airline.airline_name); props.getFilter(airline.airline_name) }}>
										{airline.airline_name} ({resultsPerFilter[i]})
									</a>
								)}
							</Menu.Item>
						) : console.log('Loading..')}

					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}