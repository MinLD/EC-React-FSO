import { lazy } from "react"


const Routerss = [
    {
        path: "/",
        component: lazy(()=> import('@components/HomePage/Homepage.jsx'))
    },
    {
        path: "/hihi",
        component: lazy(()=> import('@components/hihi/hihi.jsx'))
    },
    
]

export default Routerss