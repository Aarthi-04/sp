import "./css/component.css"

import op1 from "./images/image3..png"
import op3 from "./images/image51.png"
import op4 from "./images/image6..png"
import op5 from "./images/image52.png"
import op2 from "./images/image2.png"
import op6 from "./images/image4.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import Vdo from "./video"

function Component(){
    return(
        <div>
            <div className="spbg">
                <div className="spheader">
                <h2>SUMMER PROJECT 2023</h2>
                </div>
                <div className="spcont">
                    <div className="sptopic">
                        <h1>Surveillance marked object detection</h1>
                    </div>
                    <div className="splinks">
                        <div className="spgit">
                            <a href="https://github.com/Aarthi-04/Summer_project" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{color: "white", width: '70px', height: '70px'}} />
                            </a>
                            <p style={{color:"white"}}>Github</p>
                        </div>
                        <div className="sprep">
                            <a href="https://drive.google.com/file/d/1_gJXknlfYpzMljlx4pOXU-vyMANxv_iV/view?usp=drive_link" target="_blank">
                                <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "white", width: '70px', height: '70px'}}/>
                            </a>
                            <p style={{color:"white"}}>Report</p>
                        </div>
                        <div className="spref">
                            <a href="https://drive.google.com/drive/folders/1NHrRoyztn1jDHVzhooVYoZCpUiYEQIW_?usp=drive_link" target="_blank">
                                <FontAwesomeIcon icon={faFolderOpen} style={{color: "white",width: '70px', height: '70px'}} />
                            </a>
                            <p style={{color:"white"}}>Reference</p>
                        </div>
                    </div>
                    <div className="sppro">
                        <h1>Problem Statement</h1>
                        <p>Social Impact Use Case for Detecting a Marked Object in a Video and Extracting Frames.
                            Track the object for auto-shortening of videos and focus the object such that 16:9 format can be converted to 9:16 format.  (Get only frames with marked objects and convert from landscape to portrait format)
                        </p>
                    </div>
                    <div className="spabs">
                        <h1>Abstract</h1>
                        <p>Rapid advancements in surveillance technology have led to an exponential increase in the number of video footages generated in different formats for security purposes.This project aims to address the above mentioned issues by developing an automated system capable of detecting and extracting frames from videos that contain marked objects. This can be achieved by using deep learning methods such as YOLO or SSD to identify specific objects or individuals in real-time or post-event analysis. The system applies the object detection model to each and filters those with marked objects. These frames are then reformatted to fit the 9:16 aspect ratio for seamless viewing experience. This approach includes various social benefits, including enhancing public safety by identification of criminal threats, minimizing resource allocation required for manual video analysis, accelerating investigation by faster evidences gathering. By automated marked object detection in surveillance videos, this project contributes to a safer and accountable society</p>
                    </div>
                    <div className="spvideo">
                        <Vdo />
                    </div>
                    <div className="spout">
                        <h1>Modules and Output</h1>
                        <div className="sp1">
                            <h3 className="spside">PREPROCESSING</h3>
                            <p className="spcon">Pre-processing is a crucial initial step in the video analysis pipeline. Its primary goal is to ensure that the incoming video data is in a format suitable for subsequent analysis. One of the key tasks in pre-processing is aspect ratio conversion. This involves adjusting the dimensions of the video frames to a standard aspect ratio, thereby ensuring uniformity across all frames. By doing so, potential distortions are minimized, and the subsequent analysis steps can operate consistently.
Aspect ratio conversion involves resizing the frames while maintaining their original proportions. In addition to aspect ratio conversion, other pre-processing steps might include noise reduction and frame alignment. These steps collectively contribute to improving the quality of the video input and preparing it for accurate object detection.
</p>
                        </div>
                        <div className="spoutimg1">
                            <img src={op1} style={{marginLeft: "250px" ,width:"50%",height:"50%"}}></img>
                        </div>
                        <div className="sp1">5
                            <h3 className="spside">OBJECT DETECTION</h3>
                            <p className="spcon">The Object Detection subsystem is powered by the YOLOv3 model with pretrained weights. This advanced deep learning architecture excels in real-time object detection, capable of identifying multiple objects in a single frame pass. YOLOv3 provides confidence scores and class labels for each detected object, ensuring robust predictions. Its real-time processing efficiency is particularly advantageous for video analysis, swiftly analyzing frames and generating accurate object predictions.</p>
                        </div>
                        <div className="spoutimg2">
                            <img src={op3} style={{marginLeft: "60px" }}></img>
                            <img src={op5} style={{ marginLeft: "20px"}}></img>
                        </div>
                        <div className="sp1">
                            <h3 className="spside">MARKING CRITERIA</h3>
                            <p className="spcon">The Marking Criteria are integral to the analysis process, determining the significance of detected objects. Anchored by a confidence threshold, these criteria filter out objects with lower confidence scores, focusing on reliable detections. This approach enhances accuracy by excluding potential noise or false positives. The customizable threshold allows adaptation to specific project needs, enabling fine-tuning of the analysis. Ultimately, the Marking Criteria play a crucial role in refining the analysis output, ensuring that only objects meeting the defined 
confidence level contribute to the subsequent stages of the project.
</p>
                        </div> 
                        <div className="spoutimg3">
                            <img src={op4} style={{marginLeft: "250px",width:"50%",height:"50%"}}></img>
                        </div>
                        <div className="sp1">
                            <h3 className="spside">FRAME SELECTION</h3>
                            <p>Frame Selection and Processing focus on individual frames, extracting frames with objects of user interest highlighted. These selected frames are then saved to a designated directory. The Output Video Creation subsystem compiles the processed frames, featuring prominently marked objects, into a cohesive output video. This final video provides a consolidated view of the detected objects, offering insights for analysis and understanding.</p>
                        </div>
                        <div className = "spname">
                             <h1>Under the guidance of</h1>
                             <p style={{fontSize: "25px"}}>Dr.M.Deivamani, Assistent Professor</p>   
                        </div>
                        <div className = "spteam">
                            <h1>TeamMembers</h1>
                            <p style={{fontSize: "25px"}}>R. Aarthi, E. Hematharsini</p>
                        </div>
        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
