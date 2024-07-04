import "./App.css";
import { Card, Input, Form, Button } from "antd";
import InputBox from "./components/input-box";
import SelectBox from "./components/select-box";

function App() {
	const { TextArea } = Input;
	const { form } = Form.useForm();

	const onFinish = (values) => {
		console.log("Form Submitted", values);
	};

	const errMessages = {
		required: "${label} is required!",
		types: {
			email: "${label} is not a valid email!",
		},
	};
	return (
		<div className="container">
			<Card>
				<div className="header">
					<h3 style={{ display: window.innerWidth <= 600 ? "none" : "block" }}>
						Contact Us
					</h3>
					<h1 style={{ marginTop: "0px" }}>
						{window.innerWidth <= 600
							? "Book Appointment"
							: "Make An Appointment"}
					</h1>
				</div>
				<div className="formContent">
					<Form
						form={form}
						onFinish={onFinish}
						name="contact-form"
						layout="vertical"
						className="formContent"
						validateMessages={errMessages}
					>
						<InputBox />
						<SelectBox />
						{window.innerWidth > 600 && (
							<Form.Item name="message">
								<TextArea
									className="messageBox"
									placeholder="Message*"
									rows={4}
								/>
							</Form.Item>
						)}
						<Form.Item>
							<Button className="btn" type="primary" htmlType="submit">
								Book Appointment
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Card>
		</div>
	);
}

export default App;
