import React from 'react';
import EventStyle from './../style/event.module.css';
import { useEffect ,useState } from 'react';
import EventItem from './EventItem';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md';

const Event = () => {
     //data 불러오기 
     const num=5;
     const [dataList,setDataList] = useState([]);
     const [moreNum,setMoreNum] = useState(num)
     const dataUrl = './data/eventData.json';
     useEffect(()=>{
        (async () => {
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
     },[])

  
    console.log(moreNum)
  

     const fncMore= () => {
        setMoreNum(moreNum ===  num ? moreNum +  num : moreNum -  num)
     }
    const viewData = dataList.filter((data,index)=>index<moreNum)
    return (
        <div className={EventStyle.event}>
            <h2>Event</h2>
            <ul>
                {
                    viewData.map((data,index)=>{
                        return(
                            <EventItem key={data.id} data={data} index={index} />
                        )
                    })
                }
                
            </ul>
            <div className={EventStyle.moreBtn}>
                <button type='button' onClick={fncMore}>
                    {moreNum === num ?<MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </button>
            </div>
        </div>
    );
};

export default Event;