import React from "react";


const Card = ({id, name, email , username, img }) =>{
    return (
        // <div>
        //     <header>
        //         <h1>
                    
        //         </h1>
        //     </header>
        // </div>
            <div className="bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5">
                <img alt="Friends" src={img}/>
                <h1>
                    
                </h1>
            <div className="tc" solid>
                <p>
                    {id}
                </p>
                <p>{username}</p>
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p>
        </div>
        </div>
    );
}

export default Card;