import React from "react";
import "./styles.css";
import { AiOutlineLeft } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

export default function ProfileTab() {
  {
    /* show more posts below */
  }
  showMore = () => {};

  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <AiOutlineLeft />
        </div>
        <div className="header-body">memopresso</div>
        <div className="header-right">
          <BsThreeDots />
        </div>
      </div>
      <div className="content">
        <div className="info">
          <img className="userImg" src={require("./resource/memopresso.png")} alt="memopresso user image" />
          <div className="pff">
           <div className="pffItem">
	            <div>195</div>
	            <div style={{fontSize:10,color:"gray"}}>Posts</div>
            </div>
            <div className="pffItem">
	            <div>5126</div>
             	<div style={{fontSize:10,color:"gray"}}>Followers</div>
            </div>
            <div className="pffItem">
        	    <div>225</div>
        	    <div style={{fontSize:10,color:"gray"}}>Following</div>
            </div>
          </div>
        </div>
        <div className="msg">
          <b>MEMOPRESSO | 📌 Taiwan</b><br />
          💌Keep your memories forever. 📍台灣✈️韓國<br />
          <a href="https://www.instagram.com/explore/tags/memopresso/">#memopresso</a> 分享你的列印美照✨<br />
          合作事宜請洽business@memopresso.com<br />
          <a href="https://l.instagram.com/?u=http%3A%2F%2Flinktr.ee%2Fmemopresso&e=ATPDi2Ya4FguZi31P3VesITK7MYiVR41UbBSPOcF6lsCkbg9sHzYLxo6C_PvNDqWcb_2KvtqPeq44MJP&s=1">linktr.ee/memopresso</a>
        </div>
        <div className="contactUs">
          <button className="follow">Follow</button>
          <button className="message">Message</button>
          <button className="email">Email</button>
          <button className="suggest"><AiOutlineDown /></button>
        </div>
        <div className="stories"></div>
        <div className="buttons"></div>
        <div className="posts"></div>
        <button className="showMoreBtn" onClick={() => showMore()}>
          Show more posts
        </button>
      </div>
    </div>
  );
}
