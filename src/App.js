import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Article/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export default () => {

    return (
            <main className="row">
                <HeaderContainer />
                <section className="box">
                    <Aside/>
                    <article>
                        <Route path='/article/:userId?' render={ ()=> <ProfileContainer />}/>
                        <Route path='/dialogs' render={ ()=> <Dialogs/>}/>
                        <Route path='/users' render={ ()=> <UsersContainer />}/>
                    </article>
                </section>

                <Footer/>
            </main>
        );
};
