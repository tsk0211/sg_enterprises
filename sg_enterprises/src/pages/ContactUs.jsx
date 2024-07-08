import Footer from "../components/Footer/Footer";
import auth from "../assets/env.json";
import "./styles.css";
import { useState } from "react";

function ContactUs() {
	const [fileObj, setFileObj] = useState({ name: "" });
	const [formObj, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		msg: "",
	});

	function fileChange(e) {
		if (e.target.files) {
			setFileObj(e.target.files[0]);
			console.log("File Present");
		}
	}

	const handleForm = (e) => {
		console.log(e);
		const name= e.target.name;
		const val= e.target.value;

		setForm({
			...formObj,
			[name]: val,
		});
	};

	function clickFunc(e) {
		e.preventDefault();
	}

	document.addEventListener("DOMContentLoaded", function () {
		const fileDropArea = document.getElementById("file-drop-area");
		const fileInput = document.getElementById("file");

		fileDropArea.addEventListener("dragover", (event) => {
			event.preventDefault();
			fileDropArea.classList.add("dragover");
		});

		fileDropArea.addEventListener("dragleave", () => {
			fileDropArea.classList.remove("dragover");
		});

		fileDropArea.addEventListener("drop", (event) => {
			event.preventDefault();
			fileDropArea.classList.remove("dragover");
			const files = event.dataTransfer.files;
			fileInput.files = files;
		});

		fileInput.addEventListener("change", () => {
			const fileName = fileInput.files[0].name;
			fileDropArea.querySelector(".file-message").textContent = fileName;
		});
	});

	return (
		<div className="mainDiv">
			<form id="contact-form" className="formDiv">
				<div className="entryDiv">
					<label htmlFor="name">
						Name <p className="imp">*</p>
					</label>
					<input
						type="text"
						id="name"
						onChange={handleForm}
						name="name"
						placeholder="Name"
						required
					/>
				</div>

				<div className="entryDiv">
					<label htmlFor="email">
						Email <p className="imp">*</p>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={handleForm}
						placeholder="Email        eg. example@abc.com"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
						required
					/>
				</div>

				<div className="entryDiv">
					<label htmlFor="mobile">
						Mobile <p className="imp">*</p>
					</label>
					<input
						type="tel"
						id="mobile"
						name="mobile"
						onChange={handleForm}
						placeholder="Mobile Number"
						pattern="^[789]\d{9}$"
						required
					/>
				</div>

				<div className="entryDiv">
					<label htmlFor="subject">
						Subject <p className="imp">*</p>
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						onChange={handleForm}
						placeholder="Title..."
						required
					/>
				</div>

				<div className="entryDiv">
					<label htmlFor="message">
						Message <p className="imp">*</p>
					</label>
					<textarea
						id="message"
						name="message"
						onChange={handleForm}
						rows="4"
						placeholder="Message"
						required
					></textarea>
				</div>

				<label htmlFor="file">Attach File (optional)</label>

				<div className="file-drop-area" id="file-drop-area">
					<span className="file-message">
						Drag & drop a file or click to select one
					</span>

					<input
						type="file"
						id="file"
						name="file"
						onChange={fileChange}
						required
					/>
				</div>

				<p>File Name: {fileObj.name}</p>

				<button type="submit" className="submitBtn" onClick={clickFunc}>
					Submit
				</button>
			</form>

			<Footer />
		</div>
	);
}

export default ContactUs;
