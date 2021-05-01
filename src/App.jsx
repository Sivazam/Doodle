import React from "react"
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SearchPage from "./SearchPage";


function App() {
  return (<Router>
    <Switch>
      <Route path ="/" exact component={Main}/>
      <Route path ="/search" exact component ={SearchPage} />
  </Switch>
  </Router>
  )
}
;

export default App;
