import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './styles.css'
import logo from './HASKE.png'
import { MdRestaurant } from "react-icons/md";
import { AiOutlineScan, AiOutlineUser } from "react-icons/ai";
import cook from './cook.gif'
const App = (props) => {
  const [data, setData] = useState('')
  const [done, setDone] = useState(false)

  return (
    <>
      {!done ?
        <QrReader
          containerStyle={{
            height: 'auto',
            width: '100%',
            // position: 'fixed',
            backGroundColor: 'black'
          }}
          videoContainerStyle={{
            height: 'auto',
            backGroundColor: 'black'

          }}
          videoStyle={{
            height: 'auto',
            width: '100%',
            backGroundColor: 'black'

          }}
          constraints={{
            facingMode: "environment"
          }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              setDone(true)
              if (result?.text.split(':')[0] === 'http' || result?.text.split(':')[0] === 'https') {

              } else {
                alert("Scan a Valid Url link")
              }
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ height: 'auto' }}
        />
        :
        <>
          <div className='cook'>
            <img src={cook} className="cooki" alt="cook" />
          </div>
          <center>
            <button onClick={()=>window.open(data, '_blank', 'noopener,noreferrer')} className='cont'>Continue</button>
          </center>
        </>
      }

      <center>
        <img src={logo} className={'img'} alt="logo" />
        <div className='contentbox2'>
          This page is for scanning purpose only. for more information kindly explore the other menu options.
        </div>
      </center>
      <center>
        <div style={{ display:done ? 'none' : 'block' }} className='contentbox'>
          Point the camera at the QR-code and wait for autofocus. The app will scan the code and forward
          you to the establishment
          <p>{data}</p>
        </div>
      </center>

      <div className='menu'>
        <div className='item'>
          <div onClick={() => alert('Page under Developement')} className='ibox'>
            <MdRestaurant size={30} color="black" />
            <div className='mtxt'>Restaurants</div>
          </div>
        </div>
        <div className='item'>
          <div onClick={() => {
            setData('')
            setDone(false)
          }} className='ibox'>
            <AiOutlineScan size={30} color="#00D21A" />
            <div className='mtxt'>Scan</div>
          </div>
        </div>
        <div className='item'>
          <div onClick={() => alert('Page under Developement')} className='ibox'>
            <AiOutlineUser size={30} color="black" />
            <div className='mtxt'>Register</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;