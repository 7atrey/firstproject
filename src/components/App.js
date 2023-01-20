import React, { useState,useEffect,useRef } from "react";
import Nav from "./Nav";
import Bottom from "./Bottom";
import Container from "./Container";

function App() {

    const [songs,setSongs] = useState([
        {songName: "Enemy", filepath : "./songs/1.mp3" , coverPAth : "./images/1.jpg", id :"1", timestamp :"2:53" },
        {songName: "Formula", filepath : "./songs/2.mp3" , coverPAth: "./images/2.jpg", id :"2", timestamp :"1:32" },
        {songName: "Mr. Rager", filepath : "./songs/3.mp3" , coverPAth: "./images/3.jpg", id :"3", timestamp :"4:55" },
        {songName: "Rave", filepath : "./songs/4.mp3" , coverPAth: "./images/4.jpg", id :"4", timestamp :"2:50" },
        {songName: "Something in the way", filepath : "./songs/5.mp3" , coverPAth: "./images/5.jpg", id :"5", timestamp :"3:51" },
        {songName: "I was never there", filepath : "./songs/6.mp3" , coverPAth: "./images/6.jpg", id :"6", timestamp :"4:01" },
        {songName: "Zones", filepath : "./songs/7.mp3" , coverPAth: "./images/7.jpg", id :"7", timestamp :"3:13" },
        
    ]);


    let audioElement = document.getElementById("sn1");
    const [active, setActive] = useState(false);
    //const [audioElement,setAudioElement]=useState(document.getElementById('sn1'));
    const [trackProgress, setTrackProgress] = useState(0);

    const [currentSongIndex,setCurrentSongIndex] = useState(0);
    //const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


    // useEffect(()=>{
    // setNextSongIndex(()=>{
    // if (currentSongIndex + 1 >songs.length - 1 ){
    //     return 0;
    // } else{
    //     return currentSongIndex + 1;
    // }
    // });
    // },[currentSongIndex]);
    
    const SkipSong = (forwards = true) => {
        if (forwards) {
            setActive(true);
          setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp++;
    
            if (temp > songs.length - 1) {
              temp = 0;
            }
            return temp;
          });
        } else {
          setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp--;
    
            if (temp < 0) {
              temp = songs.length - 1;
            }
            setActive(true);
            return temp;
          });
        }
      };


    useEffect(() => {
        let audioElement = document.getElementById("sn1");
        if (active) {
            audioElement.play()
        } else {
            audioElement.pause()
        }
        console.log(active);
    })

    useEffect(() => {
        let audioElement = document.getElementById('sn1')
        audioElement.addEventListener('timeupdate', () => {
            var bar = document.getElementById('pbar')
            const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            bar.value = progress;
           
        });
    })
    
        
    const onScrub = (value) => {
        audioElement.currentTime =(( value * audioElement.duration) / 100);
        setTrackProgress(audioElement.currentTime);
        //console.log(audioElement.currentTime);
        // if(trackProgress===audioElement.duration){
        //   setCurrentSongIndex(currentSongIndex+1);
        //   console.log(currentSongIndex);
        // }
        }
      // if(trackProgress===audioElement.duration){
      //     setCurrentSongIndex(currentSongIndex+1);
      //     console.log(currentSongIndex);
      //   }
    return (
        <div>
            <Nav songs={songs} />
            <audio src={songs[currentSongIndex].filepath} id="sn1" ></audio>
            <Container audioElement={audioElement} songs={songs} setSongs={setSongs} active={active} setActive={setActive} currentSongIndex={currentSongIndex} />
            <Bottom songs={songs} trackProgress={trackProgress} onScrub={onScrub} setTrackProgress={setTrackProgress}
            SkipSong={SkipSong} active={active} setActive={setActive} currentSongIndex={currentSongIndex} audioElement={audioElement}/>
            
        </div>
    );
}

export default App;