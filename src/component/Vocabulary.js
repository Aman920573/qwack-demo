import react from "react"
import logoImg from "../photo/logoImg.png"
import { LoginOutlined } from "@ant-design/icons";
import { InboxOutlined } from "@ant-design/icons";
import { PinterestOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { TwitchOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";

const Vocabulary = () => {
    return (
        <div className="main-container">
            <div className="header">
                <div className="inner-header">
                    <img src={logoImg} width={"200px"} height={"40px"} />
                    <ul className="list-item">
                        <li className="list-inner">Home</li>
                        <li className="list-inner">Worksheets</li>
                        <li className="list-inner">Vocabulary</li>
                        <li className="list-inner">Quiz</li>
                        <li className="list-inner">Competition</li>
                        <li className="list-inner">About us</li>
                    </ul>
                </div>
                <div style={{fontWeight:'800'}} >
                    <button className="button"><LoginOutlined style={{fontWeight:'800'}} />Login</button>
                </div>
            </div>
            <div className="center-div">
                <div className="center-1" >Word of the Day</div>
                <div className="center-2">Play Fun games</div>
            </div>
            <div className="action">
                <div className="action-inside">
                <div className="width-25">
                    <img src={logoImg}  />
                    <div style={{margin:'10px 0 10px 0'}}>Let's Practice Grammer</div>
                    <div style={{margin:'10px 0 10px 0'}}>Read more<span style={{marginLeft:'10px'}}><ArrowRightOutlined /></span></div>
                    <div style={{display:'flex'}}>
                    <FacebookOutlined style={{marginRight:'20px',fontSize:'22px',borderRadius:'10px'}} />
                    <TwitterOutlined style={{marginRight:'20px',fontSize:'22px',borderRadius:'10px'}} />
                    <InstagramOutlined style={{marginRight:'20px',fontSize:'22px',borderRadius:'10px'}} />
                    <LinkedinOutlined style={{marginRight:'20px',fontSize:'22px',borderRadius:'10px'}} />
                    </div>
                </div>
                <div className="width-25">
                    <div style={{margin:'10px 0 10px 0' , fontSize:'18px' , fontWeight:'bolder'}}>Quick links</div>
                    <div style={{margin:'10px 0 10px 0'}}>About us</div>
                    <div style={{margin:'10px 0 10px 0'}}>Terms and Conditions</div>
                    <div style={{margin:'10px 0 10px 0'}}>Privacy Policy</div>
                </div>
                <div className="width-25">
                    <div style={{margin:'10px 0 10px 0', fontSize:'18px' , fontWeight:'bolder'}}>Get In Touch</div>
                    <div style={{display:'flex' , alignItems:'center'}}>
                    <InboxOutlined />
                    <div style={{margin:'10px 0 10px 0' , marginLeft:'10px'}}>contact@qwackedu.com</div>
                    </div>
                    <div style={{display:'flex' , alignItems:'center'}}>
                    <PinterestOutlined />
                    <div style={{margin:'10px 0 10px 0', marginLeft:'10px'}}>SF-204 Aayna Complex</div>
                    </div>
                </div>
                </div>
                {/* <div>
                    <div>Copyright 2022 Q.W.A.C.K. All rights reserved</div>
                </div> */}
            </div>
        </div>
    );
}

export default Vocabulary