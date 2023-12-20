import { useState } from 'react'
import data from "./data"
import SingleQuestion from './SingleQuesion'
import './App.css'

function App() {
  const [questions, setSingleQuestions] = useState(data)
  
  return (
    <>
      <main>
        <div className='container'>
          <h2>FAQ's</h2>
          <section className='info'>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })}

          </section>
        </div>
      </main>
    </>
  )
}

export default App
