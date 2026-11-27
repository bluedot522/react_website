import profileImg from './assets/blue.png'

function Card(){
    return(
        <div className="card">
            <img className="profile-img" src={profileImg} alt="Picture of Minecraft character"></img>
            <h2 className="card-title">bluedot522</h2>
            <p className="card-text">Studying computer science, avid Minecrafter.</p>

        </div>
    );
}

export default Card