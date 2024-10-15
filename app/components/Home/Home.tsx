"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Link from "../Link/Link"
import { ILink } from "../../interfaces";

import './Home.css';

export default function Home() {

	// Get links
	const [links, setLinks] = useState<ILink[]>([]);

	useEffect(() => {
		fetch('/api/getLinks')
			.then((response) => {
				console.log(response)
				response.json().then((data) => {
					console.log("data", data)
					setLinks(data.links);
				});
			})
			.catch((error) => {
				console.error('Error:', error);
			})

		document.title = name + " - " + username;
	}, []);

	const username = "asciughino_";
	const name = "Grande Fumo";

	return (
		<div className={"w-screen h-screen"} >
			<div>
				<div className="head-img">
					<Image src="/img/cover.jpg" alt="coverImage" width={0} height={0} sizes="100vw">
					</Image>
				</div>
				<div className="head-title">Grande Fumo</div>
				<div className="mb-6"></div>
				<div className="flex flex-col links-container">
					{links.map((link, i) => (
						<Link title={link.title} url={link.url} key={link.id + i}></Link>
					))}
				</div>
			</div>
		</div>
	);
}
