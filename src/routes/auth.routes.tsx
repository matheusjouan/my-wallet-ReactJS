import { Switch, Route } from 'react-router';

import {SignIn} from '../pages/SignIn';

export default function AuthRoutes() {

  return (
    <Switch>
      <Route path="/" component={SignIn} />
    </Switch>
  )
}