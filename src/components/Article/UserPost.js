import React from "react";
import './Article.scss'

export default (props) => {
    return (

            <div className='userComment'>
                <div className='box'>
                    <figure>
                        <img
                            src="https://apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png"
                            alt=""/>
                    </figure>
                    <div>

                        {props.description}

                        <div className='userCommentSocial'>
                            <span>{props.like} Like</span>
                        </div>

                    </div>
                </div>
            </div>
    )
}