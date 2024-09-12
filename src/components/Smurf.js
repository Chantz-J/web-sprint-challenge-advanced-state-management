import React from 'react'
import { connect } from 'react-redux'

const Smurf = (props)=> {
    const { smurf, isLoading } = props
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{isLoading ? 'Loading' : smurf.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {isLoading ? 'Loading' : smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {isLoading ? 'Loading' : smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {isLoading ? 'Loading' : smurf.description}</p>
        </div>
    </div>);
}

const mapToStateProps = state => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading
    }
  }

export default connect(mapToStateProps,{})(Smurf);