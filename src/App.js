import React, { Component } from 'react';
import './App.css';

const filmes = require('./filmes')



//a versão funcional é stateless, teremos que mudar para Class Component para usar o state
// function App() {

//   function onDismiss(id) {
//     const isNotIt = item => item.titulo !== id;      
//     const updatedList = filmes.filter(isNotIt);
//   };

//   return (
//     <div className="App">
//       {filmes.map((item) => 

//         <div key={item.titulo}>
//           <span>{item.titulo}</span>
//           <span> ({item.duracao} min)</span>
//           <span>
//             <button
//             onClick={() => onDismiss(item.titulo)}
//             type="button">
//               Dismiss
//             </button>
//           </span>
//           <div>
//             {item.elenco.map((it) => 
//               <h6>{it.nome} </h6>
//             )}
//           </div>

//         </div>
//         )
//       }
//     </div>
//   );
// }

//high order function, função que retorna função
const isSearched = searchTerm => item => item.titulo.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmes: filmes,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }


  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedList = this.state.filmes.filter(isNotId);
    this.setState({ filmes: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  //This code was split into three components: App that render the Table and Search components
  // render() {
  //   //usa ES6 Destructuring para pegar as propriedades do state
  //   const {searchTerm, filmes} = this.state;
  //   return (
  //     <div className="App" >
  //       <form>
  //         <input 
  //         type="text"
  //         //add value attribute so that inputText becomes a controlled component by React
  //         value={searchTerm}
  //         onChange={this.onSearchChange}
  //         />
  //       </form>


  //       {filmes.filter(isSearched(searchTerm)).map((item) => 

  //           <div key={item.id}>
  //             <span>{item.titulo}</span>
  //             <span> ({item.duracao} min)</span>
  //             <span>
  //               <button
  //                 onClick={() => this.onDismiss(item.id)}
  //                 type="button">
  //                 Dismiss
  //               </button>
  //             </span>
  //             <div>
  //               {item.elenco.map((it) =>
  //                 <h6>{it.nome} </h6>
  //               )}
  //             </div>

  //           </div>
  //       )
  //       }
  //     </div>
  //   );
  // }

  render() {
    const { searchTerm, filmes } = this.state;
    return (
      <div  className="page">
        <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}>
          Search:
        </Search>
        </div>
        <Table
          filmes={filmes}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }

}

const Search = ({ value, onChange, children }) =>
  <form>
    {children}<input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>


const Table = ({ filmes, pattern, onDismiss }) =>
  <div className="table">
    {filmes.filter(isSearched(pattern)).map(item =>
      <div key={item.id} className="table-row">
        <span style={{width: '80%'}}>{item.titulo} </span>
          <Button
            onClick={() => onDismiss(item.id)}
            className="button-inline"
            >
            Dismiss
              </Button>
        <div style={{width: '20%'}}>
          {item.elenco.map((it) =>
            <h6>{it.nome} </h6>
          )}
        </div>
      </div>
    )}
  </div>

const Button = ({
  onClick,
  className = '',
  children,
}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
