import React from "react";
// import img1 from '../../public/images/enemy.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Container(props) {
    
    const newsong = (e)=>{
        // props.audioElement.src = e.filepathh;
        // audioElement.play();
    }

  return (
    <div className="container">
      <div className="songList">
        <h1>Listen to my playlist :</h1>
        <div className="songItemContainer">
          {props.songs.map((e,index) => {
            return (
              <div className={index+1===props.currentSongIndex+1 ? "songItem-active" : "songItem"}>
                {/* <audio src={e.filepath} id="sn1"></audio> */}
                <img src={e.coverPAth} alt="songname" height="33px" width="33px"></img>
                <span className="songName">{e.songName}</span>
                <span className="songlistplay">
                  <span className="timestamp">
                    {e.timestamp}
                    {/* <i><button style={{ background: "white", color: "black", border:"0px", margin:"5px"  }} onClick={()=>newsong(e)} >
                                <FontAwesomeIcon icon={faPlayCircle} /></button>
                                </i> */}
                  </span>
                </span>
              </div>
            );
          })}
          {/* <img src={props.songs.map((e)=>{
                                e.coverPAth;
                            })} />
                            <span className="songName">{props.songs[0].songName}</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span> */}

          {/* <div className="songItem">
                            <img src={"../../public/images/enemy.jpg"} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div>
                        <div className="songItem">
                            <img src={img1} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div>
                        <div className="songItem">
                            <img src={img1} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div>
                        <div className="songItem">
                            <img src={img1} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div>
                        <div className="songItem">
                            <img src={img1} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div>
                        <div className="songItem">
                            <img src={img1} alt="1"/>
                            <span className="songName">Enemy (with JID)</span>
                            <span className="songlistplay"><span className="timestamp">2:53 <i><FontAwesomeIcon icon={faPlayCircle} /></i></span></span>
                        </div> */}
        </div>
      </div>
      <div className="songBanner"></div>
    </div>
  );
}

export default Container;
