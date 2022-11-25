import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './styles.css'
import logo from './HASKE.png'
import { MdRestaurant } from "react-icons/md";
import { AiOutlineScan, AiOutlineUser } from "react-icons/ai";

const App = (props) => {
  const [data, setData] = useState('No result Yet');

  return (
    <>
      <QrReader
        containerStyle={{
          height: 'auto',
          width: '100%',
          // position: 'fixed'
        }}
        videoContainerStyle={{
          height: 'auto',
        }}
        videoStyle={{
          height: 'auto',
          width: '100%'
        }}
        constraints={{
          facingMode: "environment"
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            if(result?.text.split(':')[0] === 'http' || result?.text.split(':')[0] === 'https'){
              window.open(result?.text);
            }else{
              alert("Scan a Valid Url link")
            }
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ height: 'auto' }}
      />
      <center>
        <img src={logo} className={'img'} alt="logo" />
        <div className='contentbox2'>
          This page is for scanning purpose only. for more information kindly explore the other menu options.
        </div>
      </center>
      <center>
        <div className='contentbox'>
          Point the camera at the QR-code and wait for autofocus. The app will scan the code and forward
          you to the establishment
          <p>{data}</p>
        </div>
      </center>

      <div className='menu'>
        <div className='item'>
          <div className='ibox'>
            <MdRestaurant size={30} color="black" />
            <div className='mtxt'>Restaurants</div>
          </div>
        </div>
        <div className='item'>
          <div className='ibox'>
            <AiOutlineScan size={30} color="#00D21A" />
            <div className='mtxt'>Scan</div>
          </div>
        </div>
        <div className='item'>
          <div className='ibox'>
            <AiOutlineUser size={30} color="black" />
            <div className='mtxt'>Register</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;