import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import employees from "./employees.json";
import Navbar from "./components/Navbar";

class App extends Component {


  //Sets state to empty arrays

  state = {

    sorted: [],
    filtered: []

  };



  // Sets initial state using array of employees

  componentDidMount() {
    this.setState({ sorted: employees, filtered: employees })
  };


  // Functions to sort by button click

  nameSort = () => {
    const emplArr = this.state.sorted;
    const sortedArr = emplArr.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ sorted: sortedArr });
    return sortedArr;
  }

  roleSort = () => {
    const emplArr = this.state.sorted;
    const sortedArr = emplArr.sort((a, b) => a.role.localeCompare(b.role));
    this.setState({ sorted: sortedArr });
    return sortedArr;
  }

  deptSort = () => {
    const emplArr = this.state.sorted;
    const sortedArr = emplArr.sort((a, b) => a.department.localeCompare(b.department));
    this.setState({ sorted: sortedArr });
    return sortedArr;
  }

  locSort = () => {
    const emplArr = this.state.sorted;
    const sortedArr = emplArr.sort((a, b) => a.location.localeCompare(b.location));
    this.setState({ sorted: sortedArr });
    return sortedArr;
  }


  // Handles onChange event at search bar input

  searchInput = (event) => {
    const res = this.empSearch(event.target.value);
    this.setState({
      filtered: res
    })
  }

  // Function to search by employee name

  empSearch = (searchText) => {
    const emplArr = this.state.sorted;
    const filteredResults = emplArr.filter((employee) => {
      const fullName = employee.name;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    })

    this.setState({ filtered: filteredResults });

    return filteredResults;
  }


  clearAll = () => {

    console.log('You clicked me!');

    window.location.reload(false);


  }



  render() {
    return (
      <>
        <Navbar
          searchInput={this.searchInput}
          clearAll={this.clearAll}>
        </Navbar>

        <Wrapper>
          <Table
            nameSort={this.nameSort}
            roleSort={this.roleSort}
            deptSort={this.deptSort}
            locSort={this.locSort}
          >


            {this.state.filtered.map(employee => (

              <EmployeeCard
                id={employee.id}
                key={employee.id}
                name={employee.name}
                role={employee.role}
                department={employee.department}
                location={employee.location}
              />


            ))


            }
          </Table>
        </Wrapper>
      </>
    );
  }
}

export default App;
