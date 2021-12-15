import React, { useCallback, useState } from "react"
import { Header } from "../header"
import { Body } from "../body"
import { Drawer } from "../drawer"

/**
 * For page structure
 * @returns 
 */
export const Layout = () => {
    const [issues, setIssues] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIssue, setSelectedIssue] = useState([])

    const handleOpen = useCallback((val, data) => {
        setIsOpen(val)
        data && setSelectedIssue(data)
    }, []);

    return (
        <>
            <div>
                <Header title="Technical assessment React" description="GitHub Issues and Pull Requests Application" setIssues={setIssues}/>
                <Body issues={issues} handleOpen={handleOpen}/>
            </div>
            <Drawer isOpen={isOpen} data={selectedIssue} handleOpen={handleOpen}/>
        </>
    )
}

