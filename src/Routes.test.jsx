import { describe,it,expect, beforeEach,vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Routers from "./Routes";
import { Component } from "react";
import {GetCurrentPath} from "./Utils";
import Route from "./Route";
import Link from "./Link";

vi.mock('./Utils.js',()=>({
    GetCurrentPath:vi.fn()
}))

describe('Routes',()=>{
    beforeEach(()=>{
        cleanup()
        vi.clearAllMocks()
      
    })

    it('should render without problems',()=>{
        render(<Routers routes={[]}></Routers>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match',()=>{
        render(<Routers routes={[]} defaultComponent={()=><h1>404</h1>}></Routers>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches',()=>{
        GetCurrentPath.mockReturnValue('/about')
        const routes=[
            {
                path:'/about',
                Component:()=><h1>about</h1>
            },
            {
                path:'/',
                Component:()=><h1>home</h1>
            }

        ]
        render(<Routers routes={routes}></Routers>)
        expect(screen.getByText('about')).toBeTruthy()
    })

    it('should navigate using Link',()=>{
        GetCurrentPath.mockReturnValueOnce('/')
        render(
            <Routers>
                <Route path='/' Component={()=>{
                    return(
                        <>
                        <h1>Home</h1>
                        <Link to='/about'>Go to About</Link>
                        </>
                    )
                }}>

                </Route>
                <Route path='/about' Component={()=><h1>About</h1>}>

                </Route>
            </Routers>
        )
        const button =screen.getByText(/Go to About/)
        fireEvent.click(button)

        expect(screen.getByText('About')).toBeTruthy()
    })
})