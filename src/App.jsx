import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Landing from './pages/Landing'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="work" element={<Work />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
