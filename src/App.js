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
          width: '100%'
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
          }
          if (!!error) {
            console.info(error);
          }
        }}
      // style={{ width: '100%' }}
      />
      <center>
        <img src={logo} className={'img'} alt="logo" />
      </center>
      <div className='contentbox'>
        Point the camera at the QR-code and wait for autofocus. The app will scan the code and forward
        you to the establishment
        <p>{data}</p>
      </div>
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