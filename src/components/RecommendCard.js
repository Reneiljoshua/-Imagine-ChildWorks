import React from 'react';
import Bus from '../Images/front-of-bus.png';
import Train from '../Images/train (1).png';
import Flight from '../Images/aeroplane.png';
import { useNavigate } from 'react-router-dom';


const RecommendCard = ({ val }) => {
    let plan = [];
    const transports = ['Bus', 'Train', 'Flight'];
    const navigate = useNavigate();
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
    generaterandomplans();
  return (
    <div className="rc">
        <div className='rccard'>
            {plan.map((content, i) => {
            if(!transports.includes(content)) {
                return (<p key={i} style={{
                    backgroundColor: 'lightslategray',
                    maxWidth: 'fit-content',
                    borderRadius: '5px'
                }}>{content}</p>);
            }
            else {
                if(content === "Bus") {
                    return <img src={Bus} alt='img' style={{
                        width: '70px'
                    }}/>
                }
                else if (content === "Train") {
                    return <img src={Train} alt='img' style={{
                        width: '70px'
                    }}/>
                }
                else {
                    return <img src={Flight} alt='img' style={{
                        width: '70px'
                    }}/>
                }
            }
        }) }
        </div>
        <div className="but">
            <button style={{
                backgroundColor: 'lightslategray',
                border: 'none',
                outline: 'none',
                padding: '10px',
                borderRadius: '5px',
                color: 'white',
                minWidth: '200px',
                marginTop: '15px'
            }}
            onClick={() => {navigate('/selected', {state: {plan: plan}})}}
             >Choose this plan</button>
        </div>
    </div>
  )
}

export default RecommendCard
