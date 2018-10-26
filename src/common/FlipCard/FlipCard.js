import React  from 'react';
// import './FlipCard.css';

const FlipCard = props => {
    console.log(props.children)
    return (
        <div className = "flip-card">
            {props.children.map(child => {
                switch (child.props.className) {
                    case "front":
                        return <div className = "card-front"> {child} </div>;
                    case "back":
                        return <div className = "card-back"> {child} </div>;
                    default:
                        return null
                }
            })}
        </div>
    )
    
}
    
export default FlipCard;
