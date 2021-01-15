import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from './Firebase'

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
   const unsubscribe= database.collection('people').onSnapshot(snapshot=>(
      setPeople(snapshot.docs.map(doc=>doc.data()))
    ));
    return ()=>{
      unsubscribe();
    }

  },[]);

  return (
    <div>
      <h1>tinder cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
