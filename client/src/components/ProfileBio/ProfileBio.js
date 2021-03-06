import React from 'react';
import { getCookie } from '../../utils/cookie';
import './ProfileBio.scss';

const ProfileBio = ({ username, userId }) => (
    <div className="profileBio">
        <div className="profileBio__fixedWrapper">
            <div className="profileBio__wallImage"></div>
            <div className="profileBio__userDataWrapper">
                <img className="profileBio__userPhoto"></img>
                <div className="profileBio__userTextContainer">
                    <div className="profileBio__userName">{username}</div>
                    <div className="profileBio__userStatus">
                        Username id: {userId}
                        <br />
                        {userId == getCookie('user_id') ? (
                            <button type="button">Edit profile</button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className="profileBio__statsContainer">
                <div className="profileBio__statsItem">
                    <div className="profileBio__statsItemData">132</div>
                    <div className="profileBio__statsItemDescription">Подписки</div>
                </div>
                <div className="profileBio__statsItem">
                    <div className="profileBio__statsItemData">12тыс</div>
                    <div className="profileBio__statsItemDescription">Подписчиков</div>
                </div>
                <div className="profileBio__statsItem">
                    <div className="profileBio__statsItemData">1млн</div>
                    <div className="profileBio__statsItemDescription">Лайков</div>
                </div>
            </div>
            <div className="profileBio__achievementsBlock">
                <div className="profileBio__achievementsItemTitle">Достижения</div>
                <div className="profileBio__achievements">
                    <div className="profileBio__achievementsItem">копать</div>
                    <div className="profileBio__achievementsItem">копать</div>
                    <div className="profileBio__achievementsItem">копать</div>
                    <div className="profileBio__achievementsItem">копать</div>
                </div>
            </div>
            <div className="profileBio__activityBlock">
                <div className="profileBio__activityTitle">Активность</div>
                <div className="profileBio__activitySlidersContainer">
                    <div className="profileBio__activitySlider"></div>
                    <div className="profileBio__activitySlider"></div>
                    <div className="profileBio__activitySlider"></div>
                    <div className="profileBio__activitySlider"></div>
                </div>
            </div>
            <button className="profileBio__buttonStart">
                <div className="profileBio__buttonStartText">Начать заботиться</div>
            </button>
        </div>
    </div>
);

export default ProfileBio;
