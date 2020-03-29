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
          <Table
            nameSort={this.nameSort}
            roleSort={this.roleSort}
            deptSort={this.deptSort}
            locSort={this.locSort}
          >


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
