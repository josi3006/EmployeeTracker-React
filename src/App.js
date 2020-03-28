import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import employees from "./employees.json";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

 

  // Map over this.state.employeess and render an EmployeeCard component for each employee object
  render() {
    return (
      <>
      <Navbar></Navbar>

      <Wrapper>
        <Table>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            location={employee.location}
          />
        ))}
        </Table>
      </Wrapper>
      </>
    );
  }
}

export default App;
