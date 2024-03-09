import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetDetails = () => {
    const [val, setval] = useState([]);
    const handleAdd = () => {
        const v = [...val, []];
        setval(v);
    }
    const handleChange = (valuechanged, i) => {
        const inputdata = [...val];
        inputdata[i] = valuechanged.target.value;
        setval(inputdata);
    }
    const handleDelete = (i) => {
        const delval = [...val];
        delval.splice(i, 1);
        setval(delval);
    }
    const navigate = useNavigate();
  return (
    <div className="getdetails">
      <div className="card">
        <div className="form">
          <p>Provide the necessary details</p>
            <button onClick={() => handleAdd()}>ADD</button>
            {
                val.map((d, i) => {
                    return (
                        <div className="inputdiv" key={i} >
                            <input type="text" value={d} placeholder="Enter a place" onChange={e => handleChange(e, i)} />
                            <button onClick={() => handleDelete(i)}>x</button>
                        </div>
                    )
                })
            }
            <button onClick={() => {
                navigate("/recommend", {state:{val: val}})
            }}>Make my plan</button>
        </div>
      </div>
    </div>
  );
};

export default GetDetails;
