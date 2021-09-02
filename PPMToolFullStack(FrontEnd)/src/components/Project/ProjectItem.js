import React, { Component } from "react";
import { Link } from "react-router-dom";


class ProjectItem extends Component {



  render() {
   
    const {project}=this.props
    return (
       <div class="container">
                        <div class="card card-body bg-light mb-3">
                            <div class="row">
                                <div class="col-2">

                                </div>
                                <div class="col-lg-6 col-md-4 col-8">
                                    <h3>Spring / React Project</h3>
                                    <p>Project to create a Kanban Board with Spring Boot and React</p>
                                </div>
                                <div class="col-md-4 d-none d-lg-block">
                                    <ul class="list-group">
                                      
                  <Link to={``}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                  </li>
                </Link>

                    <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                  </li>
                </Link>

                                        <li
                  className="list-group-item delete"
               
                >
                  <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                </li>
                     </ul>
                          </div>
                            </div>
                        </div>
                    </div>
      
    );
  }
}



export default ProjectItem;
