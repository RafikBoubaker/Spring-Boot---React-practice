import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem'

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <h1 className="mr-1">Welcome to the Dashboard</h1>
               
                <ProjectItem/>
            </>
        )
    }
}
