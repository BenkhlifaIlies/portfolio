import React, { useCallback, useEffect, useState } from 'react'
import { terminalData as data } from '@/constants/data'
import { ArrowIcon } from './icons'

const Line = ({ input, output }: { input: string; output: string }) => {
  const [currentInputText, setCurrentInputText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [outputVizibility, setoutputVizibility] = useState<boolean>(false)
  const DELAY = 100

  useEffect(() => {
    if (currentIndex < input.length) {
      const inputTimeout = setTimeout(() => {
        setCurrentInputText((prevText) => prevText + input[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, DELAY)

      return () => clearTimeout(inputTimeout)
    }

    if (currentIndex === input.length) {
      const outputTimeout = setTimeout(() => {
        setoutputVizibility(true)
      }, DELAY * 2)

      return () => {
        clearTimeout(outputTimeout)
      }
    }
  }, [currentIndex, input])

  return (
    <>
      <div>
        <ArrowIcon />
        <span className="font-semibold text-lg">{currentInputText}</span>
      </div>
      {outputVizibility ? (
        <span className="ml-6 text-lg text-text/80 ">{output}</span>
      ) : null}
    </>
  )
}

const Terminal = () => {
  const [run, setRun] = React.useState<boolean>(false)
  const [currentIndex, setcurrentIndex] = useState<number>(0)

  const runCommand = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setRun(true)
        setcurrentIndex(currentIndex + 1)
      }
    },
    [currentIndex],
  )

  useEffect(() => {
    document.addEventListener('keydown', runCommand, false)

    return () => {
      document.removeEventListener('keydown', runCommand, false)
    }
  }, [currentIndex, run, runCommand])

  return (
    <div className="hidden lg:flex flex-col w-full mb-12">
      <div className="flex items-center justify-start w-full h-9 rounded-t-2xl bg-neutral-300 dark:bg-transparent/90">
        <div className="absolute flex flex-row ml-6">
          <div className="p-2 mr-2 rounded-full bg-red-400"></div>
          <div className="p-2 mr-2 rounded-full bg-orange-400"></div>
          <div className="p-2 mr-2 rounded-full bg-green-600"></div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <p>IntroduceSelf.js</p>
        </div>
      </div>

      <div className="flex flex-col justify-start w-full min-h-[24rem] p-8 rounded-b-2xl bg-neutral-100 dark:bg-transparent/90">
        <Line input="me.learnAboutMe()" output="Press enter to execute" />
        {run &&
          data.slice(0, currentIndex).map((statement, index) => {
            return (
              <Line
                input={statement.input}
                output={statement.output}
                key={index}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Terminal
