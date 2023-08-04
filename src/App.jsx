import React from 'react';
import { Profile } from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './db/user.json';
import data from './db/data.json';
import friends from './db/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './db/transactions.json';
import TransactionHistory from './components/Transactions/Transactions';

function App(params) {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
