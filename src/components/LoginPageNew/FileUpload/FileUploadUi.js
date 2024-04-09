import React from "react";
import { Link } from "react-router-dom";
// import { FileUpload } from "../../../assets";
import { ReactComponent as FileUpload } from "../../../assets/NewIcon/FileUpload.svg";

import { Draggable } from "react-drag-and-drop";

const FileUploadUi = ({ item }) => {
  return (
    <li>
      <Draggable type="element" data={JSON.stringify(item)} key={item.id}>
        <Link id="fileUploadUi-fileUpload-link" to="#"> 
          <span className="secondaryColor">
            {/* <img src={FileUpload} alt="" /> */}
            <FileUpload />
          </span>
          File Upload
        </Link>
      </Draggable>
    </li>
  );
};
export default FileUploadUi;
