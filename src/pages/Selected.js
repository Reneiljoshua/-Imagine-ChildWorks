import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Bus from '../Images/front-of-bus.png';
import Train from '../Images/train (1).png';
import Flight from '../Images/aeroplane.png';

const Selected = () => {
    const loc = useLocation();
    const [feedbacks, setfeedbacks] = useState([]);
    const [en, seten] = useState(true);
    const [count, setcount] = useState(0);
    const [feed, setfeed] = useState();
    const transports = ['Bus', 'Train', 'Flight'];
    const plan = loc.state.plan;
    const [curr, setcurr] = useState(plan[count]);
    const len = plan.length;
    const handleNextevent = () => {
        const icount = count + 1;
        if (icount === len - 1) {
            setcurr("Completed");
        }
        else {
            setcount(icount);
            setcurr(plan[icount])
        }
        seten(!en);
    }
    const handleFeedback = () => {
        seten(!en);
        const temp = [...feedbacks, feed];
        setfeedbacks(temp);
        console.log(temp);
    }
    const handletextchange = (e) => {
        setfeed(e.target.value);
    }
  return (
    <div className="container">
        <div className="rc" style={{
            paddingTop: '10px',
            paddingBottom: '10px'
        }}>
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
                        return <img src={Bus} key={i} style={{
                            width: '70px'
                        }}/>
                    }
                    else if (content === "Train") {
                        return <img src={Train} key={i} style={{
                            width: '70px'
                        }}/>
                    }
                    else {
                        return <img src={Flight} key={i} style={{
                            width: '70px'
                        }}/>
                    }
                }
            }) }
            </div>
        </div>
        <div className="locator">
            <p>Current spot: {curr}</p>
        </div>
        <div className="form">
            <button disabled={!en && !(curr === "Completed")} onClick={() => {handleNextevent();}}>Next</button>
            <p>Kindly provide the feedback for the previous spot.</p>
            <input type="text" disabled={en && !(curr === "Completed")} onChange={(e) => {handletextchange(e);}} />
            <button disabled={en && !(curr === "Completed")} onClick={() => {handleFeedback();}}>Submit</button>
        </div>
    </div>
  )
}

export default Selected
