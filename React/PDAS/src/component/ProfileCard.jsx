

function ProfileCard(props) {
    return (

        <div div className="card">
            <div className="card-imag">
                <figure className="image is-1by1">
                    <img src={props.image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> {props.title}</p>
                    <p className="subtitle is-6">  {props.handle}</p>
                </div>
                <div className="content">
                    {props.description}
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;
