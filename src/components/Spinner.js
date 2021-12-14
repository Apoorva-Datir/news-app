import React from 'react';
import loading from '../loding.gif';
function Spinner(){
   
        return (
            <div className="text-center">
                <img src={loading} alt="Loading..." />
            </div>
        )
    
}

export default Spinner
