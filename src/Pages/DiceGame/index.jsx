
import React, { useEffect, useState } from "react";
import ButtonUi from "../../Components/ButtonUi";

const DiceCard = ({ diceValue, player }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 mx-5">
            <div className="px-6 py-4">
                <div className="flex justify-center">
                    <div className="rounded-full bg-blue-500 text-white text-4xl h-24 w-24 flex items-center justify-center">
                        {diceValue}
                    </div>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Player {player}</div>
            </div>
        </div>
    );
};

const DiceGame = () => {
    const [result, setResult] = useState(undefined);

    const [playerOne, setPlayerOne] = useState()
    const [playerTwo, setPlayerTwo] = useState()

    useEffect(() => {
        if (playerOne !== undefined && playerTwo !== undefined) {
            if (playerOne > playerTwo) {
                setResult("Player one wins!")
            } else if (playerOne < playerTwo) {
                setResult("Player two wins!")
            } else {
                setResult("It's a tie.")
            }
        }
    }, [playerOne, playerTwo]);

    function handleClick(event) {
        event.preventDefault();

        setPlayerOne(Math.floor(Math.random() * 6) + 1);
        setPlayerTwo(Math.floor(Math.random() * 6) + 1);
    }

    return (
        <>
            <div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                <h1 className="text-2xl font-semibold mb-4 text-center">Dice Game</h1>
                <div className="container mx-auto">
                    <div className="flex justify-center mt-10">
                        <ButtonUi onClick={handleClick}>Roll Dice</ButtonUi>
                    </div>
                    <h1 className="text-2xl font-semibold mb-4 text-center">{result}</h1>
                    <div className="flex justify-center mt-10">
                        <DiceCard diceValue={playerOne} player={1} />
                        <DiceCard diceValue={playerTwo} player={2} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default DiceGame;
