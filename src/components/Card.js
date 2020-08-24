import React from 'react' ;

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <img src={`https://robohash.org/set_set3/${props.name}?size=200x200`}/>
            </div>
            <div>
                <p>Jane Doe</p>
                <p>jane.doe@email.com</p>
            </div>
        </div>
    )
}
export default Card;