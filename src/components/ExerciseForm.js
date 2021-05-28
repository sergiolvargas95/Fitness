import React from 'react';

class ExerciseForm extends React.Component {
    state={
        //title:"",
        //description:"",
        //img:"",
        //leftColor:"",
        //rightColor:""
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){

        const { onChange, formValues } = this.props

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className ="form-group">
                        <input type="text" className="form-control" placeholder="title" name="title" value={formValues.title} onChange={onChange} />
                    </div>
                    <div className ="form-group">
                        <input type="text" className="form-control" placeholder="description" name="description" value={formValues.description} onChange={onChange}/>
                    </div>
                    <div className ="form-group">
                        <input type="text" className="form-control" placeholder="img" name="img" value={formValues.img} onChange={onChange}/>
                    </div>
                    <div className ="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="leftColor" name="leftColor" value={formValues.leftColor} onChange={onChange}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="rightColor" name="rightColor" value={formValues.rightColor} onChange={onChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm;