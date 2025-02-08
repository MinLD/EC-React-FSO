import { lazy } from "react"


const Routerss = [
    {
        path: "/",
        component: lazy(()=> import('@components/HomePage/Homepage.jsx'))
    },
    
]

export default Routerss