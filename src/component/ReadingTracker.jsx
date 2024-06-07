import React, { useState, useEffect } from "react";
import supabase from "../service/supabase.js";

const ReadingTracker = () => {
	const targetReadings = 777;

	const [readings, setReadings] = useState([]);
	const [username, setUsername] = useState("");
	const [input, setInput] = useState("");

	const fetchReadings = async () => {
		const { data, error } = await supabase.from("tracker").select("*");
		if (error) {
			console.error("Error fetching readings:", error.message);
		} else {
			setReadings(data || []);
		}
	};

	useEffect(() => {
		fetchReadings();
	}, []);

	const handleAddReading = async () => {
		const newReading = parseInt(input);
		if (!isNaN(newReading) && newReading > 0 && username.trim() !== "") {
			const { data, error } = await supabase
				.from("tracker")
				.insert([{ username, count: newReading, remainingcount: remainingReadings }]);
			if (error) {
				console.error("Error adding reading:", error.message);
			} else {
				setReadings([...readings]);
			}
		}
		setInput("");
		setUsername("");
		window.location.reload();
	};

	const totalReadings = readings.reduce((acc, curr) => acc + curr.count, 0);
	const remainingReadings = targetReadings - totalReadings;

	return (
		<div className="reading-tracker">
			<h1>Quran Reading Tracker: Surah Yasin</h1>
			<p>Total Amount to read: {targetReadings}</p>
			<p>Total Readings: {totalReadings}</p>
			<p>Readings Remaining: {Math.max(0, remainingReadings)}</p>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Enter your username"
			/>
			<input
				type="number"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Enter readings count"
			/>
			<button onClick={handleAddReading}>Add Reading</button>
			<ol>
				{readings.map((reading) => (
					<li key={reading.id}>
						{reading.username} read: {reading.count} times
					</li>
				))}
			</ol>
		</div>
	);
};

export default ReadingTracker;
