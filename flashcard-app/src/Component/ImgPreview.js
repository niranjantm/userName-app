
import React from 'react'

function PreviewImage({file,className}) {

    // const [preview,setPreview]= React.useState(null)

   
    // const reader = new FileReader();
    // console.log("image Preview")
    // reader.readAsDataURL(file);
    // reader.onload=()=>{
    //     setPreview(reader.result)
    return (
      <div>
          {file?<img src={file} className={className}  alt='Preview' ></img>:""}
      </div>
    )
    }
  


export default PreviewImage