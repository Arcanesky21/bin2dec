import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [validInput, setValidateInput] = useState();

    const maxNumbers = 8

    const validateInput = new RegExp(/^[0-1]{1,8}$/)

    function handleInputChange(event) {
        if (validateInput.test(event.target.value)) {
            console.log(parseInt(event.target.value, 2));
            setValidateInput(parseInt(event.target.value, 2));
        } else {
            setValidateInput(false)
        }

    }

    function handleSubmit() {
        if (validInput) {
            document.getElementById('modal').classList.remove('invisible')
        }
    }

    useEffect(() => {
        if (validInput === false) {
            document.getElementById('warning').classList.toggle('opacity-100')
            document.getElementById('warning').classList.toggle('opacity-0')
        } else {
            document.getElementById('warning').classList.remove('opacity-100')
            document.getElementById('warning').classList.add('opacity-0')

        }
    })

    function handleClose() {
        document.getElementById('modal').classList.add('invisible')

    }

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
            <header className="text-2xl text-gray-400 p-5">Binary Converter</header>
            <div className=" text-gray-600 flex flex-col gap-3 mb-10">
                <div id="warning"
                     className=" md:w-96 text-gray-400 p-5 border text-center rounded-md w-80 transition-all duration-1000  ease-in-out opacity-0 border-gray-200">
                    <p>
                        Binary numbers only consists of 0 or 1
                    </p>
                </div>
                <input className="p-5 md:w-96 rounded-md text-2xl tracking-[0.1em] text-center w-80"
                       placeholder="Enter binary numbers"
                       maxLength={maxNumbers} onChange={handleInputChange}/>

            </div>
            <div>
                <button type="submit"
                        disabled={!validInput}
                        className={"w-80 md:w-96 text-gray-600 p-5 rounded text-2xl font-bold shadow-md drop-shadow-md  transition-all ease-in-out duration-500 border border-gray-200 " + (validInput ? " hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100 hover:shadow-gray-100" : "opacity-50")}
                        onClick={handleSubmit}>Convert to binary
                </button>
            </div>

            <div id="modal"
                 className="absolute invisible flex inset-0 w-screen justify-center items-center  h-screen ">

                <div
                    className="rounded-md bg-white text-center content-center h-[22rem] md:h-96 md:w-96 w-[22rem] absolute items-center">
                    <div className="absolute p-5  top-0 right-0">
                        <svg className="cursor-pointer" onClick={handleClose} xmlns="http://www.w3.org/2000/svg" x="0px"
                             y="0px"
                             width="20" height="20"
                             viewBox="0 0 24 24">
                            <path
                                d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                        </svg>
                    </div>
                    <div className="p-5 text-2xl text-gray-800">
                        <header>Your binary value equals</header>
                    </div>
                    <input disabled="true"
                           className="bg-gray-500 rounded-md text-center uppercase p-5 text-2xl tracking-[0.1em]"
                           value={validInput}/>
                </div>

            </div>


        </div>


    )
}

export default App
