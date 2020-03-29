import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import employees from "./employees.json";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {

    sorted: [],
    filtered: []

  };

  componentDidMount() {
    this.setState({ sorted: employees, filtered: employees })
  };




  empSort = sortBy => {

    console.log('sortBy parameter: ', sortBy);

    const emplArr = this.state.sorted;
    const sortedArr = emplArr.sort((a, b) => a.role.localeCompare(b.role));

    console.log('sortedArr ', sortedArr);

    this.setState({sorted: sortedArr});

    return sortedArr;


  }


  empSearch = (searchName) => {
    const sorted = this.state.sorted;
    const filtered = sorted.filter((employee) => {
      const name = employee.name;
      return name.toLowerCase().includes(searchName.toLowerCase());
    })
    return filtered;
  }





  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    return (
      <>
        <Navbar></Navbar>

        <Wrapper>
          <Table empSort={this.empSort}>


          {this.state.sorted.map(employee => (

<EmployeeCard
  id={employee.id}
  key={employee.id}
  name={employee.name}
  role={employee.role}
  department={employee.department}
  location={employee.location}
/>


           /* {this.state.sorted.map(employee => (

              <EmployeeCard
                id={employee.id}
                key={employee.id}
                name={employee.name}
                role={employee.role}
                department={employee.department}
                location={employee.location}
              /> */


            ))


            }
          </Table>
        </Wrapper>
      </>
    );
  }
}

export default App;
