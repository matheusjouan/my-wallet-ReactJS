import { Switch, Route  } from 'react-router-dom';
import { Layout } from '../components/Layout';

import { Dashboard } from '../pages/Dashboard'
import { List } from '../pages/List';

export default function AppRoutes() {

  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/list/:type" component={List} />
      </Switch>
    </Layout>
  )
}