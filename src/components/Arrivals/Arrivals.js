/*
					📜
		   
	************************************
	*                                  *
	*     LIST OF THE FLIGHTS          *
	*   (this component is called      *
	*      mulitple times using        *
	*        the given props data      *
	*                                  *
	************************************

*/

/* ⚛️ react libraries */
import React, { useState, useEffect } from "react";

/* 📦 my components*/
import * as styler from './style';
import { transformDateToHour } from '../Home/Utils';
import { timeZoneToCity, timeZoneToContinent, getStatus, getLogoFromCompany } from './Utils.js';


export default function Flights(props) {
	return (
		<div className={styler.cssClass1}>
			<div className={styler.cssClass2}>
				<div className={styler.cssClass3}>
					<div className={styler.cssClass4}>
						<table className={styler.cssClass5}>
							<thead className={styler.cssClass6}>
								<tr>
									<th scope="col" className={styler.cssClass7}>Flights</th>
									<th scope="col" className={styler.cssClass7}>Destination</th>
									<th scope="col" className={styler.cssClass7}>Time</th>
									<th scope="col" className={styler.cssClass7}>Status</th>
								</tr>
							</thead>
							<tbody className={styler.cssClass10}>
								{/* ❓ Loops on the flights */}
								{props.posts ? props.posts.map((post, id) => (
									<tr key={id} data-testid={`arrivals-${id}`}>
										<td className={styler.cssClass11}>
											<div className={styler.cssClass12}>
												<div className={styler.cssClass13}>
													<img className={styler.cssClass14} src={getLogoFromCompany(post.airline.name)} alt="" />
												</div>
												<div className="ml-4">
													<div className={styler.cssClass15}>Flight n°{post.flight.number}</div>
													<div className={styler.cssClass16} >{post.airline.name}</div>
												</div>
											</div>
										</td>
										<td className={styler.cssClass17}>
											<div className={styler.cssClass18} style={{ fontWeight: '500' }}>{post.arrival.timezone ? timeZoneToCity(post.arrival.timezone) : 'unknown'}</div>
											<div className={styler.cssClass16} >{post.arrival.timezone ? timeZoneToContinent(post.arrival.timezone) : 'unknown'}</div>
										</td>
										<td className={styler.cssClass20}>{transformDateToHour(post.departure.scheduled)}</td>
										<td className={styler.cssClass17}>
											<span className={styler.cssClass19} style={{ backgroundColor: post.flight_status ? getStatus(post.flight_status) : 'grey' }}>
												{post.flight_status ? post.flight_status : 'unknown'}
											</span>
										</td>
										<td className={styler.cssClass20}></td>
									</tr>
								)) : <></>}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
