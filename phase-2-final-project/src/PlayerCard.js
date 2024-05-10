function PlayerCard({ imageURL, name }) {
    return (
        <div>
            <img src={imageURL} alt="player image"/>
            <p>{name}</p>
        </div>
    )
};

export default PlayerCard;