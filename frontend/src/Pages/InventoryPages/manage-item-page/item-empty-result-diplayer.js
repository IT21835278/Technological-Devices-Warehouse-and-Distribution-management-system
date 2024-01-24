import React from "react";
import "./message-displayer.scss";
import EmptyResult from "../../../assets/imgs/error-displayers/no-data.png";
function NoItemsDisplayer() {
	return (
		<div className="operation-unsuccess-container">
			<img src={EmptyResult} alt="" className="imgblock" />
			<span className="message-box">No Results, Try Different SKU.</span>
		</div>
	);
}

export default NoItemsDisplayer;