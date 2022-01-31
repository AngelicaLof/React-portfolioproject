import ReactPlayer from 'react-player';
import React from 'react';

//videopage som importeras på receptsidan

function VideoArea() {
    return(
        <div className='VideoArea'>
            <div className='Sidebar'>
            <div className='Videos'>
                <div className='Video'>
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=a-yNYF8ACII"
                    height = "170px"
                    width = "280px"
                    controls
                    />

                

                </div>

            </div>
            </div>

        </div>
    )
}
export default VideoArea;

// npm install react-player