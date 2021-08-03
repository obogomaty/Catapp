import React from 'react';
import Navbar from './navbar';
import Data from './Data';
import './App.css';


class App extends React.Component {
  state = {
    counter: 0,
    data: []

  }


  componentDidMount() {
    this.setState({ data: Data })
  }

  handleChangeplus = (product) => {
    const newState = this.state.data.map(d => {
      if (d.id === product.id) {
        d.quantity = d.quantity + 1;
      }
      return d;
    })
    this.setState({ data: newState })
  }

  handleChangeminus = (product) => {
    if (product.quantity > 0) {
      const newState = this.state.data.map(d => {
        if (d.id === product.id) {
          d.quantity = d.quantity - 1;
        }
        return d;
      })
      this.setState({ data: newState })
    }
  }

   handleReset = () => {
   this.setState({
       counter: 0,
     })
  }



  render() {

    const total = this.state.data.reduce((a, b) => a + (b.price * b.quantity), 0)


    return (

      <div className="container">

        <Navbar total={total} />
        <h2>YOUR BAG</h2>
        {this.state.data.map(d => (
          <div className="firstdivcontainer" >
            <div className="firstdiv">
            </div>
            <div className="text">
              <h5 className="number">{d.name}</h5><br></br>
              <h5 className="info1">${d.price}</h5><br></br>
              <h5 className="info2">Remove</h5>
            </div>

            <div className="button">
              <button className="minus" onClick={() => this.handleChangeminus(d)}>{'-'}</button>
              {d.quantity}
              <button className='plus' onClick={() => this.handleChangeplus(d)}>{'+'}</button>
            </div>
          </div>
        ))}

      </div>

    );
  }
}
export default App;
