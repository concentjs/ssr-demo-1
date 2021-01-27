import React from 'react'
import { useConcent } from 'concent'
import router from 'next/router'

// use next/router to do browser side router jump
function toHomePage(){

  // if you use <a href="/xxx" />, this will trigger sever side router jump, 
  // and if other page share this page's state, you should save it before page jump.
  // const rootState = getState()
  // localStorage.setItem('app.rootState', JSON.stringify((rootState)))

  router.push('/');
}

export default function Counter() {
  // const { state, mr, moduleComputed } = useConcent({ module: 'home' })
  const { state, mr, moduleComputed } = useConcent('home')

  return (
    <div>
      this is counter page
      {state.loading ? 'loading' : 'done'}
      <h1>tip: {state.tip}</h1>
      <h2>reversedTip: {moduleComputed.reversedTip}</h2>
      <input value={state.tip} onChange={mr.changeTip} />
      <button onClick={toHomePage}>to home page</button>
    </div>
  );
}
