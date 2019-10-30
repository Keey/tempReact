import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/user_def.png";
import Preloader from "../Preloader/Preloader";
import {NavLink, Redirect} from "react-router-dom";


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for ( let i = 1; i <= pageCount; i++){
        pages.push(i);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

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
                            ? <button disabled={props.toggleInFollowing.some(id => id === u.id)} className='unfollowed' onClick={() => {

                                props.unfollowUser(u.id);
                            }

                            }>Unfollow</button>
                            : <button disabled={props.toggleInFollowing.some(id => id === u.id)} className='followed'
                                      onClick={() => {
                                          props.followUser(u.id);
                            }
                                      }>Follow</button>
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
