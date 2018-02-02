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
      
      <Route exact path='/sport/:key' render={()=><Sport { ... data.SportList[key]}/>} />
      
    </Switch>
  </main>
)

export default Main
