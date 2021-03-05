import React from 'react'
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
        <Sidebar />
        <Chat />
    </div>
  )
}

export default App
