import React from "react";
import { Form, Input } from "antd";
import "../App.css";

const InputBox = () => {
	return (
		<div className="inputContainer">
			<Form.Item
				name="name"
				label={
					window.innerWidth <= 600 ? (
						<label className="labelBox">Full Name*</label>
					) : (
						""
					)
				}
				rules={[
					{
						required: true,
						message: "Please input your name!",
					},
				]}
			>
				<Input className="inputBox" placeholder="Full Name*" />
			</Form.Item>
			<Form.Item
				name="email"
				label={
					window.innerWidth <= 600 ? (
						<label className="labelBox">Email Address*</label>
					) : (
						""
					)
				}
				rules={[
					{
						required: true,
						type: "email",
						message: "Please enter valid E-mail!",
					},
				]}
			>
				<Input className="inputBox" placeholder="Email*" />
			</Form.Item>
		</div>
	);
};

export default InputBox;
