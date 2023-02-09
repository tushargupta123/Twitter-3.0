import React, { useState , useEffect } from "react";
import "./TweetBox.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
import { TwitterContractAddress } from './config.js';
const ethers = require("ethers");
import Twitter from './utils/TwitterContract.json'

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [avatarOptions, setAvatarOptions] = useState("");

    const addTweet = async() => {
        let tweet = {
            'tweetText': tweetMessage,
            'isDeleted':false
        }

        try{
            const {ethereum} = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer =  provider.getSigner();
                const TwitterContract = new ethers.Contract(
                    TwitterContractAddress,
                    Twitter.abi,
                    signer
                );
    
                let addTweetTx = await TwitterContract.addTweet(tweet.tweetText,tweet.isDeleted);
                console.log(addTweetTx);
            }else{
                console.log("ethereum object doesn't exist");
            }
        }catch(e){
            console.log(e);
        }
    }
    
    const sendTweet = async(e) => {
        e.preventDefault();
        await addTweet();
        setTweetMessage("");
    }

    useEffect(() => {
        let avatar = generateRandomAvatarOptions();
        setAvatarOptions(avatar);
    },[]); 

  return (
    <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <Avatar
          style={{ width: '100px', height: '100px' }}
          avatarStyle='Circle'
          {...avatarOptions }
        />
        <input
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput"
        placeholder="Optional: Enter image URL"
        type="text"
      />

      <button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton"
      >
        Tweet
      </button>
    </form>
  </div>
  )
}

export default TweetBox