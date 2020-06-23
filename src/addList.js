import React, {Component} from 'react';
import './addList.css';

class AddList extends Component{

state = {
    name: '',
    age: '',
    belt: ''
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state);
    this.setState({
        name: '',
        age: '',
        belt: ''
    });
}

// handleSubmit2 = (e)=> {
//     e.preventDefault();
//     this.props.updateList2(this.state);
// }



// show_form = <div>
// <form className="list_form" onSubmit={this.handleSubmit}>
//     <label htmlFor="name">Name:</label>
//     <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/> <br/>
//     <label htmlFor="age">Age:</label>
//     <input type="text" name="age" id="age" value={this.state.age} onChange={this.handleChange} required/> <br/>
//     <label htmlFor="belt">Belt:</label>
//     <input type="text" name="belt" id="belt" value={this.state.belt} onChange={this.handleChange} required/> <br/>
//     <button>Submit</button> <br/>
// </form>
// </div>;

// componentDidUpdate(){ 
//     this.show_form = this.props.update.id === '' ? (
//         <div>
//             <form className="list_form" onSubmit={this.handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/> <br/>
//                 <label htmlFor="age">Age:</label>
//                 <input type="text" name="age" id="age" value={this.state.age} onChange={this.handleChange} required/> <br/>
//                 <label htmlFor="belt">Belt:</label>
//                 <input type="text" name="belt" id="belt" value={this.state.belt} onChange={this.handleChange} required/> <br/>
//                 <button>Submit</button> <br/>
//             </form>
//         </div>
//     ) : (
//         <div>
//             <form className="list_form" onSubmit={this.handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" value={this.props.update.name} onChange={this.handleChange} required/> <br/>
//                 <label htmlFor="age">Age:</label>
//                 <input type="text" id="age" value={this.props.update.age} onChange={this.handleChange} required/> <br/>
//                 <label htmlFor="belt">Belt:</label>
//                 <input type="text" id="belt" value={this.props.update.belt} onChange={this.handleChange} required/> <br/>
//                 <button>Update</button> <br/>
//             </form>
//         </div>
//     )
// }



    render(){
            return(
                <div>
                    {/* {this.show_form} */}
                    <form className="list_form" onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/> <br/>
                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" id="age" value={this.state.age} onChange={this.handleChange} required/> <br/>
                        <label htmlFor="belt">Belt:</label>
                        <input type="text" name="belt" id="belt" value={this.state.belt} onChange={this.handleChange} required/> <br/>
                        <button>Submit</button> <br/>
                    </form>
                </div>
            )
    }
}

export default AddList;