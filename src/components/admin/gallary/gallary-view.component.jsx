import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import "./gallary.component.css";
import { getImageGallary, saveImageGallary } from "../../../service/event/gallary.service";
import { NotificationMessage } from "../../common/notification.message/notification-message.component";
// import { saveImageGallary } from "../../../service/context.service";

export function ImageGallary(props) {
  const [images, setImages] = React.useState([]);
  const [type,setType]=useState("");
  const [message,setMessage]=useState("");
  const [savedImage,setSavedImage]=useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  useEffect(()=>{
    getData()
  },[])
  function saveData(){
    saveImageGallary(images).then(()=>{
      setType("succes")
      setMessage("Image succesfully uploaded.....!")

    })
  }
  function getData(){
    // images.forEach((img)=>{
      getImageGallary().then((res)=>{
        setSavedImage(res.data)
  
      })

    // })
   
  }

  return (
    <div className="App">
      
      {!props.hidesearch &&
      <>
       <input type="button" value="Save" onClick={()=>{saveData()}} className="btn btn-primary"></input>
    
      <ImageUploading>
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
    
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" className="img-style" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </>}
      <NotificationMessage type={type} message={message}></NotificationMessage>
      <div className="img">
        {
          savedImage && savedImage.map((item)=>{
            return(
              <div>
                <img src={item.data_url} alt="imag" className="img"></img>
              </div>
            )
          })
        }
        {
          savedImage.length===0 && <div>No records are found....!</div>
        }
      </div>
    </div>
   
  );
}

