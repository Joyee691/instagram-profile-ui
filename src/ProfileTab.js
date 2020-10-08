import React from "react";
import "./styles.css"
import { AiOutlineLeft } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export default function ProfileTab () {
	{/* show more posts below */}
	showMore=()=>{};

	return(
		<div className="container">
			<div className="header">
				<div className="header-left"><AiOutlineLeft /></div>
				<div className="header-body">memopresso</div>
				<div className="header-right"><BsThreeDots /></div>
			</div>
			<div className="content">
				<div claseName="info"></div>
				<div className="msg"></div>
				<div className="contact"></div>
				<div className="stories"></div>
				<div className="buttons"></div>
				<div className="posts"></div>
				<button className="button" onClick={()=>showMore()}>Show more posts</button>
			</div>
		</div>
	);
}
