import React from 'react';

const AvatarCard = ({ name, title, image }) => {
    return (
        <div className='avatar-card'>
            <div className="avatar-card__img-box">
                <img src={image} alt={name} className="avatar-card__img" />
            </div>
            <div className='avatar-card__content'>
                <h3 className='title-tertiary'>{name}</h3>
                <p className='paragraph'>{title}</p>
            </div>
        </div>
    );
}

export default AvatarCard;