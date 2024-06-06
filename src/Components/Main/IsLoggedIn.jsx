import { PropTypes } from "prop-types"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export function IsLoggedIn(props) {
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const navigate = useNavigate()

    useEffect(() =>{
        if (props.type == "isAuth" && !isAuth) {
            navigate("/authentication/register")
        }else if (props.type == "notIsAuth" && isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate, props.type])

    return props.children
}


IsLoggedIn.propTypes = {
    children: PropTypes.element,
}