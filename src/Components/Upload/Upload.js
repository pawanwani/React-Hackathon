import React, { useCallback, useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Dropzone, { useDropzone } from 'react-dropzone';
import uploadImage from '../../public/images/cloud-img.gif';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { SetSelectedItem } from '../../hooks/api/ApiCalls';
import { message } from 'antd';
import samapleData from '../../data/data';
export function Upload() {
  const [Files, setFiles] = useState([]);
  const [FilesResult, setFilesResult] = useState([]);
  const [Success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    SetSelectedItem(dispatch, FilesResult)
  },[FilesResult]);


  //   const onDrop = useCallback((acceptedFiles) => {
  //     console.log(acceptedFiles);
  //     return acceptedFiles;
  //   }, []);
  //   // @ts-ignore
  //   setfirst(onDrop);

  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function humanFileSize(bytes, dp = 1) {
    const thresh = 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }

    const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + ' ' + units[u];
  }

  function fileUpload(acceptedFiles) {
    setFiles(acceptedFiles);
  }

  async function PostSubmit(){
    const formData = new FormData();

    formData.append(
      "csvFile",
      Files[0],
      Files[0].name
    );
    console.log("Entering File Post Method")

    const headers = { 
      'Authorization': 'Bearer my-token',
      'My-Custom-Header': 'foobar'
  };

  const data = {
"file":formData,
"filename":Files[0].name,
"request":{"filename":Files[0].name}
  }

    // await axios.post("https://eliteminds-backend-flask.herokuapp.com/api/upload", data, { headers }).then((res)=>
    //  SetSelectedItem(dispatch, samapleData)
    //  );
    SetSelectedItem(dispatch, samapleData)
    navigate('/result')
    setSuccess(true);
    message.success({
      content: 'File uploaded successfully, get exited for the results',
      style: {
        marginTop: '20vh',
      },
      duration:3,
      onClose:()=>navigate('/result')
    });
  }

  const clearSelectedFile = ()=>{
    setFiles([]);
  }

  return (
    <div className='fileUploadMainContainer'>
      <Dropzone onDrop={(acceptedFiles) => fileUpload(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} /> */}
              <div className='fileUploadContain'>
                <div className='UploadContainer'>
                  <div className='Upload'>
                    <img
                      className='UploadImage'
                      src={uploadImage}
                      alt='Italian Trulli'
                    />
                    { Files.length !== 0 ? <div className='FileType'>Click on submit to upload</div> : <div className='FileType'>Browse csv</div>}
                  </div>
                  {
                    Files.length !== 0 ? <div></div> : <button className='UploadButton'>Browse Files</button>
                  }
                </div>
              </div>
            </div>
            <div className='SelecteFileContanier'>
              <div></div>
              {Files.length !== 0 ? (
                <div>
                    {Files.map((data) => {
                  let imageFile =
                    data.path.indexOf('.xlsx') >= 0 || data.path.indexOf('cvs') >= 0
                      ? 'https://cdn-icons-png.flaticon.com/128/4726/4726040.png'
                      : 'https://cdn-icons-png.flaticon.com/128/4725/4725970.png';
                  let size = humanFileSize(data.size);

                  return (
                    <div className='SelectedFileMain' onClick={clearSelectedFile}>
                      <div className='SelectedFileNameContainer'>
                        <img className='FileView' src={imageFile} alt='Italian Trulli' />
                        <div className='FileViewDetails'>
                          <p className='SelecteFileText'>{data.path}</p>
                          <p className='SelecteFileTextSize'>{size}</p>
                        </div>
                      </div>
                      <img
                        className='DeletingFileButton'
                        src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png'
                        alt='Italian Trulli'
                      />
                    </div>
                  );
                })}
                <div><button onClick={() =>{ PostSubmit()}} className='UploadButton'>submit</button></div>
                </div>
                
              ) : (
                <div className='fileNotUploadedError'>File Not Uploaded</div>
              )}
            </div>
          </section>
        )}
      </Dropzone> 
      <div style={{width:'100px', height:'100px'}}>       
      </div>
    </div>
  );
}
