import React, { Component } from 'react';
import Comp1 from './comp1';
import AddList from './addList';

class App extends Component {

state = {
  comp1s: [
    {name: 'Rajon', age: 30, belt: 'JS', id: 1},
    {name: 'Kobir', age: 30, belt: 'JS', id: 2},
    {name: 'Rajon Kobir', age: 25, belt: 'JS', id: 3}
  ],
  update: {
    id: '',
    name: '',
    age: '',
    belt: ''
  }
}

addList = (list) => {
  list.id = this.state.comp1s.length + 1;
  let lists = [...this.state.comp1s, list];
  this.setState({
    comp1s: lists
  });
}

deleteList = (id) => {
  let lists = this.state.comp1s.filter(list => {
    return list.id !== id;
  });
  lists = lists.map(item => {
    if(item.id > id){
      item.id = item.id - 1;
    }
    return item;
  });
  this.setState({
    comp1s: lists
  });
}

// updateList = (id, name, age, belt) => {
//   let update = {
//     id: id,
//     name: name,
//     age: age,
//     belt: belt
//   };
//   this.setState({
//     update
//   });
// }

// updateList2 = (list) => {

// }


// componentDidMount(){
//   console.log('component mounted!');
  
// }

// componentDidUpdate(prevProps, prevState){
//   console.log('component updated!');
//   console.log(prevProps, prevState);
// }

render(){
  return (
    <div className="App">
        <h1> Rajon Kobir </h1>
        <p> my-react-app </p>
        {/* <Comp1 name="Rajon" age="30" belt="JS"/>
        <Comp1 name="Kobir" age="30" belt="JS"/>
        <Comp1 name="Rajon Kobir" age="30" belt="JS"/> */}
        <Comp1 updateList={this.updateList} deleteList={this.deleteList} comp1s={this.state.comp1s}/>
        <AddList update={this.state.update}  addList={this.addList}/>
    </div>
  )
}


}

export default App;
