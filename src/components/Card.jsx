import { useEffect } from 'react'
import '../styles/Card.css'

function Card(props) {
    const imgurl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.index}.svg`;
    const { index, onClick } = props;
    const handleClick = (e) => {
        onClick(e.target.index);
    };

    return (
        <div className="Card" onClick={handleClick}>
            <img src={imgurl} width={200} height={200} index={index} />
        </div>
    )
}

export default Card