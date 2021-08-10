import { Redirect, Route } from "react-router"
import { UserContext } from "../context/userContext"
import { useContext } from "react"

const ProtectedRoute = ({ children, ...props }) => {

    const { user } = useContext(UserContext)

    if (user) {
        return <Route>{children}</Route>
    }
    return <Redirect to='/' />
}

export default ProtectedRoute

