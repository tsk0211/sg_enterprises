import Footer from "../components/Footer/Footer";
import "./styles.css";
import { useState } from "react";



let baseURL = "http://localhost:6000";

function ContactUs() {
	const [formObj, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		msg: "",
		file: [],
	});

	const handleForm = (e) => {
		const name = e.target.name;
		var val = e.target.value;

		if (name === "file") {
			val = e.target.files[0];
		}
		setForm({
			...formObj,
			[name]: val,
		});
	};

	const sendEmail = async (mail) => {
		const res = await fetch(`${baseURL}/api/sendmail`,{
			method: "post",
			body: JSON.stringify(mail),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json"
			}
		}).then((res) => {
			console.log("Successful :-> " , res);
			if (res.status < 300 && res.status > 199) {
				alert('Successful' + mail);
			}
		});

		console.log(JSON.stringify(res));
	};

	function clickFunc(e) {
		e.preventDefault();

		const mail = {
			from: formObj.email,
			to: "sgent2206@gmail.com",
			subject: formObj.subject,
			text: formObj.msg,
			html: "<h3>Hello world !!</h3>"
		};

		console.log(JSON.stringify(mail));

		try {
			sendEmail(mail);
		} catch (e) {
			console.log(e);
		}
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
						onChange={handleForm}
						required
					/>
				</div>

				<p>File Name: {formObj.files}</p>

				<button type="submit" className="submitBtn" onClick={clickFunc}>
					Submit
				</button>
			</form>

			<Footer />
		</div>
	);
}

export default ContactUs;
