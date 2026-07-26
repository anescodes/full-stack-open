import { useState } from 'react'

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
      <br />
    </>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <>
      <p>average {average}</p>
      <br />
      <p>positive {positive} %</p>
      <br />
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Rest = ({ good, neutral, bad, total }) => {
  return total === 0 ? (
    <div className='nofeedback'>no feedback given</div>
  ) : (
    <div className='statistics'>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const makeitGood = () => setGood((g) => g + 1)
  const makeitNeutral = () => setNeutral((n) => n + 1)
  const makeitBad = () => setBad((b) => b + 1)

  const total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={makeitGood} text="good" />
      <Button handleClick={makeitNeutral} text="neutral" />
      <Button handleClick={makeitBad} text="bad" />
      <Rest good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App