import React from "react";
import { Form, Select, TimePicker } from "antd";
import "../App.css";

const SelectBox = () => {
	const { Option } = Select;
	return (
		<div className="inputContainer">
			<Form.Item
				name="place"
				rules={[{ required: true, message: "Please select your place!" }]}
			>
				<Select
					style={{ backgroundColor: "#f9f9f9" }}
					className="inputBox"
					placeholder="Place*"
					label={
						window.innerWidth <= 600 ? (
							<label className="labelBox">Departement</label>
						) : (
							""
						)
					}
				>
					<Option value="India">India</Option>
					<Option value="New York">New York</Option>
					<Option value="Denmark">Denmark</Option>
					<Option value="London">London</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="time"
				rules={[{ required: true, message: "Please select your slot!" }]}
			>
				<TimePicker
					format="h:mm:a"
					style={{ backgroundColor: "#f9f9f9" }}
					className="inputBox"
					placeholder="Time*"
					label={
						window.innerWidth <= 600 ? (
							<label className="labelBox">Time*</label>
						) : (
							""
						)
					}
				/>
			</Form.Item>
		</div>
	);
};

export default SelectBox;
