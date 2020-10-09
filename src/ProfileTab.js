import React from "react";
import ReactDOM from "react-dom"
import "./styles.css";


import { AiOutlineLeft } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import {GrGrid} from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";

const images=[
  require("./resource/img1.JPG"),
  require("./resource/img2.JPG"),
  require("./resource/img3.JPG"),
  require("./resource/img4.JPG"),
  require("./resource/img5.JPG"),
  require("./resource/img6.JPG"),
  require("./resource/img7.JPG"),
  require("./resource/img8.JPG"),
  require("./resource/img9.JPG")
];



export default class ProfileTab extends React.Component{
  constructor(){
    super();
    this.state={
      clicked:false
    };
  }
  

  showMore = () => {
    this.setState({
      clicked:true
    });
  };

  // 載入前9張post
  renderImgs=()=>{
    return images.map((img,index)=>{
      return(
        <div className="postImgBox">
          <img className="postImg" src={img} alt="post" />
        </div>
      );
    })
  }

  



  render(){
    console.log(this.renderImgs());
    const buttonStyle={
      display:this.state.clicked?"none":"inline-box"
    }
    const postsStyle={
      display:this.state.clicked?"inline-box":"none"
    }
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
            <img className="userImg" src={require("./resource/memopresso.PNG")} alt="memopresso user" />
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
          <div className="stories">
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">1</div>
            </div>
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">2</div>
            </div>
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">3</div>
            </div>
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">4</div>
            </div>
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">5</div>
            </div>
            <div className="storyItem">
              <img className="storyImg"/>
              <div className="storyInfo">6</div>
            </div>
          </div>
          <div className="buttons">
            <button style={{borderBottom:"black solid 1px"}}><GrGrid /></button>
            <button><FiMonitor /></button>
            <button><RiContactsLine /></button>
          </div>
          <div className="posts">
            {this.state.clicked?this.renderImgs():""}
            {this.renderImgs()}
          </div>
          <div className="showMoreBtn">
            <button style={buttonStyle} onClick={() => this.showMore()}>
              Show more posts
            </button>
          </div>
        </div>
      </div>
    );
  }
}
