import React from 'react';
import EventStyle from './../style/event.module.css';
import { useEffect ,useState } from 'react';
import EventItem from './EventItem';
import {MdExpandMore} from 'react-icons/md';

const Event = () => {
     //data 불러오기 
     const listPlusNum=2;
     const [dataList,setDataList] = useState([]);
     const [moreNum,setMoreNum] =useState(listPlusNum)
     const dataUrl = './data/eventData.json';
     useEffect(()=>{
        (async () => {
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
     },[])
     
     const fncMore= () => {
        setMoreNum(moreNum+listPlusNum)
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
                    <MdExpandMore />
                </button>
            </div>
        </div>
    );
};

export default Event;