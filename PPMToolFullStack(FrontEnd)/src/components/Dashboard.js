import React, { Component } from 'react'
import CreateProjectButton from './Project/CreateProjectButton'
import ProjectItem from './Project/ProjectItem'
import { connect } from 'react-redux'
import { getProjects } from '../actions/projectActions'
import PropTypes from 'prop-types'

class Dashboard extends Component {
    
    componentDidMount() {
        
        this.props.getProjects()
    }
    
    
    
    render() {

const {projects} = this.props.project


        return (
            <>
    <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center"> Projects</h1>
                    <br />
                   <CreateProjectButton/>
                    <br />
                    <hr />
                                {projects.map(project => (
                     <ProjectItem key = { project.id} project={project}/>
                ))
                                    
                }
    
                                

                </div>
            </div>
        </div>
    </div>



            </>
        )
    }
}

// Dashboard.prototype = {
//     project: PropTypes.object.isRequired,
//     getProjects:PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
    //reducer project:projectReducer
    project: state.project
})

export default connect(mapStateToProps,{getProjects})(Dashboard)