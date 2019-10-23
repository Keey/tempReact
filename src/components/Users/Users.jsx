import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/user_def.png";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../api/api";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for ( let i = 1; i <= pageCount; i++){
        pages.push(i);
    }

    return(
        <div className={s.userWrap}>
            <h2>Users</h2>
            {props.isFetching ? <Preloader/> : null }
            <div className={s.pagination}>
                {pages.map( p => {
                    return <span className={ props.currentPage === p && s.selectedPage}
                                 onClick={(e) => { props.onPageChanged(p) } }>{p}</span>
                })}
            </div>

            {props.users.map(u => <div className={'box ' + s.userItem} key={u.id}>
                    <div className={s.userPhoto}>
                        <figure>
                            <NavLink to={'/article/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></NavLink>
                        </figure>
                        {u.followed
                            ? <button className='unfollowed' onClick={() => {
                                userAPI.unfollowUser(u.id).then(response => {
                                        if(response.data.resultCode === 0 ){
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button>
                            : <button className='followed' onClick={() => {
                                userAPI.unfollowUser(u.id).then(response => {
                                        if(response.data.resultCode === 0 ){
                                            props.follow(u.id)
                                        }
                                    });

                            }}>Follow</button>
                        }
                    </div>
                    <div className={'box ' + s.userWrapInfo}>
                        <div>
                            {u.name}
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                           <span>
                                {/*{u.location.city}*/}
                           </span>
                            {/*<span> {u.location.country} </span>*/}
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Users;