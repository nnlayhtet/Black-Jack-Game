import React from 'react'
import { useState, useEffect } from 'react'

function Game() {

    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",]
    const suits = ["♦", "♣", "♥", "♠"]
    const initialDeck = []
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            initialDeck.push({ "value": values[i], "suit": suits[j] })
        }
    }
    let currentIndex = initialDeck.length
    function shuffle(deck) {
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
        }
        return deck
    }
    let shuffledDeck = shuffle(initialDeck)
    console.log(initialDeck)
    console.log(shuffledDeck)
    const [pCards, setPCards] = useState([shuffledDeck.pop(), shuffledDeck.pop()])
    const [bCards, setBCards] = useState([shuffledDeck.pop(), shuffledDeck.pop()])
    console.log(pCards)

    function hitPlayer(){
        setPCards([...pCards, shuffledDeck.pop()])
    }
    let pCardsDisplay = pCards.map((card)=>Object.values(card).join(" ")).join(", ")
    let pCardsTotal = pCards.map((card)=>card.value)
    let bCardsDisplay = bCards.map((card)=>Object.values(card).join(" ")).join(", ")
    return (
        <div className="Game">
            <div>
                <h2>Player</h2>
                <button onClick={hitPlayer}>Hit</button>
                <button>Stand</button>
                <p>Cards : {pCardsDisplay}</p>
                <p>Player Total : {pCardsTotal[0]}</p>
            </div>
            <hr/>
            <div>
                <h2>Banker</h2>
                <p>Cards : {bCardsDisplay}</p>
                <p>Banker Total : </p>
            </div>
        </div>
  )
}

export default Game