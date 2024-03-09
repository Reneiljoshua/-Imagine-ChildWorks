import React from 'react';
import { useLocation } from 'react-router-dom';
import Bus from '../Images/front-of-bus.png';
import Train from '../Images/train (1).png';
import Flight from '../Images/aeroplane.png';
import RecommendCard from '../components/RecommendCard';

const Recommend = () => {
    const location = useLocation();
    const val = location.state.val;
    let plan = [];
    const transports = ['Bus', 'Train', 'Flight'];
    const randomnumbergenerate = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const generaterandomplans = () => {
        val.map((data) => {
            const transportmode = transports[randomnumbergenerate(0, 4) - 1];
            plan.push(data);
            if (val[val.length - 1] !== data)
                plan.push(transportmode)
        })
    }
    // generaterandomplans();
  return (
    // <div>
    //   { 
    //    plan.map((content, i) => {
    //     if(!transports.includes(content)) {
    //         return (<p key={i}>{content}</p>);
    //     }
    //     else {
    //         if(content === "Bus") {
    //             return <img src={Bus} style={{
    //                 width: '70px'
    //             }}/>
    //         }
    //         else if (content === "Train") {
    //             return <img src={Train} style={{
    //                 width: '70px'
    //             }}/>
    //         }
    //         else {
    //             return <img src={Flight} style={{
    //                 width: '70px'
    //             }}/>
    //         }
    //     }
    //    }) 
    //   }
    // </div>
    <div className='Recommend'>
        <p>Plan - 1</p>
        <RecommendCard val={val} />
        <p>Plan - 2</p>
        <RecommendCard val={val} />
        <p>Plan - 3</p>
        <RecommendCard val={val} />
    </div>
  )
}

export default Recommend
