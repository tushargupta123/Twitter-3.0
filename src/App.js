import './App.css';
import {useState,useEffect} from "react";
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';

function App() {

  const [currentAccount, setCurrentAccount] = useState('');
  
  // call metamask to connect wallet on clicking connect wallet button
  const connectWallet = async() => {
    try{
      const {ethereum} = window;
      if(!ethereum){
        console.log("metamask not detected");
        return;
      }

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      console.log("found account :", accounts[0]);

      setCurrentAccount(accounts[0]);
    }catch(err) {
      console.log("error connecting to metamask",err);
    }
  }

  useEffect(() => {
    connectWallet();
  },[])

  return (
    <div >
     {currentAccount === '' ? (
      <button
      className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
      onClick={connectWallet}
      >
      Connect Wallet
      </button>
      ) : (
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    )}
    </div>
  );
}

export default App;
