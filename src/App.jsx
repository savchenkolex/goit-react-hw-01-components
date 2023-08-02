import React from "react";
import { Profile } from './components/Profile/Profile';
import Statistics from "./components/Statistics/Statistics";
import data from './db/data.json';
import friends from './db/friends.json';
import FriendList from "./components/FriendList/FriendList";

function App(params) {
    return <>
    <Profile />
    <Statistics title="Upload stats" stats={data}/>
    <Statistics stats={data}/>
    <FriendList friends={friends} />
    </>
}

export default App;