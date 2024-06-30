import Home from "./Components/Home"
import About from "./Components/About"
import { Component } from "react"
import Search from "./Components/Search"

export const routes=[
    {
        path:'/:lang/about',
        Component: About
    },
    {
        path:'/search/:query',
        Component: Search
    }
]