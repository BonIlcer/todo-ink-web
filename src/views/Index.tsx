import React from 'react'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ProjectTree from '../features/ProjectTree/ProjectTree'
import TaskList from '../features/TaskList/TaskList'
import { projectsState } from '../state'

export default function Index() {
  const projects = useRecoilValue(projectsState)
  // TODO fallback if no projects exist
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ProjectTree />
        <Switch>
          <Route exact path='/'>
            <Redirect to={`/${projects[0].id}`} />
          </Route>
          <Route path='/:id' children={<TaskList />} />
        </Switch>
      </div>
    </Router>
  )
}
