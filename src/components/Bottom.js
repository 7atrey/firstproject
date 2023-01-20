import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";


const Bottom = ({songs, trackProgress,
    onScrub,
    SkipSong,
    active,
    setActive,
    currentSongIndex}) => {
        const gif = "./images/gif.gif"

        const [name,setName] = useState("sn1");

        const start =()=>{
            if(active){
                setName("sn2")
            }
            else setName("sn1")
        }
        useEffect(()=>{
            start();
        })

    return (
        <div className="bottom">
            {/* {props.songs.map((e)=>{
                return <audio src={e.filepath} type="./mp3" id="sn1"/>
            })} */}
            {/* <audio src={props.songs[currentSongIndex].filepath} id="sn1"></audio> */}
            <input type="range" id="pbar" min={0} value={trackProgress} max={100} onChange={(e)=> onScrub(e.target.value)} ></input>
            <div className="icons" >
                <button style={{ background: "black", color: "white" }} onClick={() => SkipSong(false)}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </button>
                {/* <button onClick={handleClick} > */}
                <button style={{ background: "black", color: "white" }} onClick={() => setActive(!active)} >
                    {
                        active ? <AiFillPauseCircle className="masterPlay" /> : <AiFillPlayCircle className="masterPlay" />
                    }
                </button>
                {/* </button> */}
                {/* <FontAwesomeIcon icon={faPauseCircle} /> */}
                <button style={{ background: "black", color: "white" }} onClick={() => SkipSong()}><FontAwesomeIcon icon={faForwardStep} /></button>
                {/* <FontAwesomeIcon icon={faForwardStep} /> */}
            </div>
            <div className="songInfo">
                <img src={gif} className={name} width="45px" alt="gif" ></img>
                <p>{songs[currentSongIndex].songName}</p>
            </div>
        </div>
    );
}

export default Bottom;
