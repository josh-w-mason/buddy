import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SingleProfile from './SingleProfile'
import CreateProfileForm from './CreateProfileForm'
import AllProfiles from './AllProfiles'
import Footer from './Footer'

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import { useAppDispatch } from '../hooks'
import { setLocalThunk } from '../actions/local'
import { useEffect } from 'react'

import { ThemeProvider } from '@emotion/react'
import { appTheme } from '../../utils/mui'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  return (
    <>
      <ScopedCssBaseline>
        <ThemeProvider theme={appTheme}>
          <Nav />
          {/* <CreateProfileForm /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleProfile />} />
            <Route path="/create-profile" element={<CreateProfileForm />} />
            <Route path="/allprofiles" element={<AllProfiles />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ScopedCssBaseline>
    </>
  )
}

export default App
