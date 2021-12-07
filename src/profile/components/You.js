import React from 'react'

const You = ({el}) => {
    const handleClick = (fullName) => {
  alert(`This profile user is ${fullName}`)
    }
    return (
        <div>
            <img src="Diego-Maradona-1986_0.jpg" alt="" width="150" style={{borderRadius: "50%" }}/>
            <h1>{el.fullName}</h1>
            <p>{el.bio}</p>
            <h1>{el.profession}</h1>
            <a href="/" onClick={() =>handleClick(el.fullName)}>click Me</a>
        </div>
    )
}
You.defaultProps={
    fullName:"Diego Maradona"
}
export default You
