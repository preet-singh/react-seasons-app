import React from 'react';
import './SeasonsDisplay.css';

//helper func and config
const seasonConfig = {
    summer: {
        text:`Let's hit the beach`,
        iconName:'sun'
    },
    winter: {
        text:`Burr it is chilly`,
        iconName:'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2  &&  month <  9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
//func component
const SeasonsDisplay = props => {
    console.log(props);
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] //refs {text, iconName} for a season

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon icon-right massive`} />
        </div>
    );
};
export default SeasonsDisplay;
