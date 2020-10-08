import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";

export default function ProfileTab () {
		return(
			<div className="container">
				<div className="header">
					<div className="header-left"><FiUserPlus /></div>
					<div className="header-body">Instagram</div>
					<div className="header-right">
						<FaRegPaperPlane />
					</div>
				</div>
			</div>
		);
}
