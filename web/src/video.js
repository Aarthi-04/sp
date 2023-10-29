import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';

import vdo from './video/react2.mp4';
import thum from './images/v_img.png';
function Vdo(){
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Video</h1>
            <Video autoPlay loop poster={thum}>
                <source src={vdo} type='video/webm'></source>
            </Video>
        </div>
    )
}

export default Vdo;

