import React, { useState } from 'react';
import ButtonUi from '../../Components/ButtonUi';

const PalindromeChecker = () => {
    const [inputValue, setInputValue] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        setIsSubmitted(false);
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
        const inputString = inputValue.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const inputArray = inputString.split('');
        const reverseStringArray = inputArray.slice().reverse();

        // Compare arrays for palindrome check
        if (inputArray.join('') === reverseStringArray.join('')) {
            setIsPalindrome(true);
        } else {
            setIsPalindrome(false);
        }
    }

    return (
        <div className="container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <h1 className="text-2xl font-semibold mb-4 text-center">Palindrome Check</h1>
            <div>
                <form id="myForm" onSubmit={handleSubmit}>
                    <label htmlFor="text-input">Enter text:</label><br />
                    <input type="text" id="text-input" value={inputValue} onChange={handleChange} /><br />
                    <ButtonUi id="check-btn" type="submit">Check</ButtonUi>
                </form>
                <p className="mt-6">{(isSubmitted && isPalindrome) && (`${inputValue.replace(/[^a-zA-Z]/g, '').toLowerCase()} is a palindrome`)}</p>
                <p className="mt-6">{(isSubmitted && !isPalindrome) && (`${inputValue.replace(/[^a-zA-Z]/g, '').toLowerCase()} is not a palindrome`)}</p>
            </div>
        </div>
    );
};

export default PalindromeChecker;
