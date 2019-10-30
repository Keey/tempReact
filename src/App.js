import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Article/ProfileContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

export default () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <main className="row">

                    <HeaderContainer/>

                    <section className="box">

                        <Aside/>

                        <article>
                            <Route path='/article/:userId?' render={() => {
                                return <React.Suspense
                                    fallback={<h1>Loading...</h1>}><ProfileContainer/></React.Suspense>
                            }}/>
                            <Route path='/dialogs' render={() => {
                                return <React.Suspense fallback={<h1>Loading...</h1>}> <Dialogs/> </React.Suspense>
                            }
                            }/>
                            <Route path='/users' render={() => {
                                return <React.Suspense fallback={<h1>Loading...</h1>}> <UsersContainer/>
                                </React.Suspense>
                            }
                            }/>

                            <Route path='/login' render={() => {
                                return <React.Suspense fallback={<h1>Loading...</h1>}>
                                    <Login/> </React.Suspense>
                            }}/>
                        </article>

                    </section>
                    <Footer/>
                </main>
            </Provider>
        </BrowserRouter>
    );
};
