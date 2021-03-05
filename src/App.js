
import React, { useEffect } from 'react';
import './App.css';

// components 
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';

import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase'

const App = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser){
                dispatch( 
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName
                    })
                )
            } else{
                dispatch(logout())
            }
        })
    }, [dispatch])
    return (
        <div className="app">
            { 
                user 
                    ?   (
                            <>
                                <Sidebar />
                                <Chat />
                            </>
                        ) 
                    :   (
                            <Login />
                        )
            }
        </div>
    );
}

export default App;