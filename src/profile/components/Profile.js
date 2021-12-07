import React from 'react'
import You from './You'

const Profile = ({el,handleClick}) => {
    console.log(el)
    return (
        <div>
            {
                el.map(el=><You el={el} handleClick={handleClick}/>)
            }
        </div>
    )
}

export default Profile
