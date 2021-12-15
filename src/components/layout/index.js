import React, { useState } from "react"
import { Header } from "../header"
import { Body } from "../body"
import { Drawer } from "../drawer"

export const Layout = () => {
    const [issues, setIssues] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <Header title="Technical assessment React" description="GitHub Issues and Pull Requests Application" setIssues={setIssues}/>
            <Body issues={issues} setIsOpen={setIsOpen}/>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

