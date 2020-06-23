import React from 'react';


// // class component
// class Comp1 extends Component{
//     render(){

// // destructuring
// // const {name, age, belt} = this.props;

// const {comp1s} = this.props;
// const comp1List = comp1s.map(comp1 => {
//     return(
//         <div className="comp1" key={comp1.id}>
//             <div>Name: {comp1.name} </div>
//             <div>Age: {comp1.age} </div>
//             <div>Belt: {comp1.belt} </div>
//         </div>
//     )
// });


//         return(
//             // <div className="comp1">
//             //     <div>Name: {this.props.name} </div>
//             //     <div>Age: {this.props.age} </div>
//             //     <div>Belt: {this.props.belt} </div>
//             // </div>

//             // <div className="comp1">
//             //     <div>Name: {name} </div>
//             //     <div>Age: {age} </div>
//             //     <div>Belt: {belt} </div>
//             // </div>

//             <div className="comp1List">
//                 {comp1List}
//             </div>
//         )
//     }
// }




// // functional component
// // const Comp1 = (props) => {
// const Comp1 = ({comp1s}) => {

// // destructuring
// // const {name, age, belt} = this.props;

// // const {comp1s} = props;
// const comp1List = comp1s.map(comp1 => {
//     return(
//         <div className="comp1" key={comp1.id}>
//             <div>Name: {comp1.name} </div>
//             <div>Age: {comp1.age} </div>
//             <div>Belt: {comp1.belt} </div>
//         </div>
//     )
// });


//         return(
//             // <div className="comp1">
//             //     <div>Name: {this.props.name} </div>
//             //     <div>Age: {this.props.age} </div>
//             //     <div>Belt: {this.props.belt} </div>
//             // </div>

//             // <div className="comp1">
//             //     <div>Name: {name} </div>
//             //     <div>Age: {age} </div>
//             //     <div>Belt: {belt} </div>
//             // </div>

//             <div className="comp1List">
//                 {comp1List}
//             </div>
//         )
// }



// // Conditional Output
// // functional component
// const Comp1 = ({comp1s}) => {

// // // if statement   
// // const comp1List = comp1s.map(comp1 => {

// // if(comp1.age > 26){
// //     return(
// //         <div className="comp1" key={comp1.id}>
// //             <div>Name: {comp1.name} </div>
// //             <div>Age: {comp1.age} </div>
// //             <div>Belt: {comp1.belt} </div>
// //         </div>
// //     )
// // }else{
// //     return null;
// // }


// // });


// // ternary operator
// const comp1List = comp1s.map(comp1 =>{
//     return comp1.age > 25 ? (
//         <div className="comp1" key={comp1.id}>
//             <div>Name: {comp1.name} </div>
//             <div>Age: {comp1.age} </div>
//             <div>Belt: {comp1.belt} </div>
//         </div>
//     ) : null;
// });


//         return(
            
//             <div className="comp1List">
//                 {comp1List}
//             </div>
//         )
// }



// // Conditional Output
// // functional component
// const Comp1 = ({comp1s}) => {

//         return(

//             <div className="comp1List">
//                 {
//                     // ternary operator
//                     comp1s.map(comp1 =>{
//                         return comp1.age > 25 ? (
//                         <div className="comp1" key={comp1.id}>
//                                 <div>Name: {comp1.name} </div>
//                                  <div>Age: {comp1.age} </div>
//                                  <div>Belt: {comp1.belt} </div>
//                              </div>
//                          ) : null;
//                      })
//                 }
//             </div>
//         )
// }



// // deleting data (vid-19)
// const Comp1 = ({comp1s, deleteList, updateList}) => {

//         return(

//             <div className="comp1List">
//                 {
//                     // ternary operator
//                     comp1s.map(comp1 =>{
//                         return comp1.age > 25 ? (
//                         <div className="comp1" key={comp1.id}>
//                                 <div>Name: {comp1.name} </div>
//                                  <div>Age: {comp1.age} </div>
//                                  <div>Belt: {comp1.belt} </div>
//                                  <button onClick={() => {deleteList(comp1.id)}}>Delete List</button>
//                                  <button onClick={() => {updateList(comp1.id, comp1.name, comp1.age, comp1.belt)}}>Update List</button>
//                              </div>
//                          ) : null;
//                      })
//                 }
//             </div>
//         )
// }



// own experiment, adding update list feature
const Comp1 = ({comp1s, deleteList, updateList}) => {


    const lists = comp1s.length ? (
         comp1s.map(comp1 =>{
            return (
            <div className="comp1" key={comp1.id}>
                    <div>Name: {comp1.name} </div>
                     <div>Age: {comp1.age} </div>
                     <div>Belt: {comp1.belt} </div>
                     <button onClick={() => {deleteList(comp1.id)}}>Delete List</button>
                     {/* <button onClick={() => {updateList(comp1.id, comp1.name, comp1.age, comp1.belt)}}>Update List</button> */}
                 </div>
             )
         })
    ) : (
        <p> There's no item! </p>
    )

        return(

            <div className="comp1List">
                {
                    lists
                }
            </div>
        )
}

export default Comp1;