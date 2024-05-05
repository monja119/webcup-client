import { useState } from 'react'

// providers
import { DataProvider } from './contexts/DataContext'

// Router
import {Routes, Route} from "react-router-dom"

// Layout
import MainLayout from "./layout/MainLayout"

// page
import Profile from "./page/profile/Profile"
import MyProject from "./page/profile/MyProject"
import MyTopic from "./page/profile/MyTopic"
import Recompense from './page/profile/Recompense'
import NotFound from "./page/errors/NotFound"
import './App.css'

// modal
import AddTopicModal from './Components/AddTopicModal'
import CommentModal from './Components/CommentModal'

import { withLayoutRoutes, withoutLayoutRoutes } from './utils/routes'

function App() {

  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              {
                withLayoutRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component}></Route>
                ))
              }
              <Route path='/profile' element={<Profile/>}>
                  <Route path="/profile/project" element={<MyProject/>}></Route>
                  <Route path="/profile/topic" element={<MyTopic/>}></Route>
                  <Route path="/profile/recompense" element={<Recompense/>}></Route>
              </Route>
          </Route>
          
          {
            withoutLayoutRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component}></Route>
            ))
          }

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </DataProvider>
      
      <AddTopicModal/>
      <CommentModal/>
    </>
  )
}

export default App
