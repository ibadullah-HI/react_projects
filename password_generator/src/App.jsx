import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [passwordLength, setPasswordLength] = useState(15)

  function generatePassword() {
    setPassword("")
    let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordCharacterLength = 52
    if ((numberAllowed)) {
      character = character + "0123456789"
      passwordCharacterLength += 10
    }
    let pass = "";

    for (let i = 0; i < passwordLength; i++) {
      pass += character[Math.floor(Math.random() * passwordCharacterLength)]
    }
    setPassword(pass)
    console.log(pass)
  }

  function handleSubmit(e) {
    e.preventDefault();
    generatePassword();
  }

  useEffect(() => {
   generatePassword()
  }, [ passwordLength, numberAllowed])
  

  return (
    <>
      <div className='w-screen h-screen flex justify-start items-center bg-slate-700 flex-col '>
        <div className='text-3xl text-white w-full border-b p-5 flex items-center justify-center'>Password Generator</div>
        <form className=' w-[30rem] flex flex-col items-center justify-center mt-[5rem] border p-5 rounded-lg'>
          <input
            className='w-[20rem] h-[3rem] text-lg outline-none rounded-lg p-2'
            type="text"
            value={password}
          />
          <button
            className='w-[6rem] h-[3rem] text-lg outline-none rounded-lg p-2 mt-5 bg-slate-200'
            onClick={(e) => handleSubmit(e)}
          >
            Generate
          </button>

          <label htmlFor="length" className='text-lg text-white flex items-center justify-center gap-2'>
            <input
              className='w-[15rem] h-[3rem] text-lg outline-none rounded-lg '
              type="range"
              name="length"
              id="length"
              min={0}
              max={100}
              value={passwordLength}
              onChange={(e) => { setPasswordLength(e.target.value) }}
            />
            characters : {passwordLength}
          </label>
          <label htmlFor="number" className='text-lg text-white flex gap-2'>
            <input
              type="checkbox"
              name="number"
              id="number"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            Numbers
          </label>

        </form>
      </div>
    </>
  )
}

export default App
