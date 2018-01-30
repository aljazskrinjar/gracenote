import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CountryStats from './CountryStats'
import Sport from './Sport'
const data = require('../data.json')




// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    

  <main>
    <Switch>
      <Route exact path='/' component={CountryStats}/>
      console.log(data.sportList[0])
      <Route exact path='/sport' render={()=><Sport { ... data.SportList[0]}/>} />
      
    </Switch>
  </main>
)

export default Main
