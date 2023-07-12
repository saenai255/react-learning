import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import UserContext from "./shared/state/user"
import { useState } from "react"
import { User } from "./shared/services/user.service"

function App() {
  const [user] = useState<User | null>(null)

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
