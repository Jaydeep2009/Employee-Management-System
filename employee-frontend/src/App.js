"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [employees, setEmployees] = useState([])
  const [form, setForm] = useState({ name: "", department: "", salary: "", age: "" })
  const [search, setSearch] = useState("")

  const API_URL = "http://localhost:8080/employees"

  // Fetch employees
  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    const res = await axios.get(API_URL)
    setEmployees(res.data)
  }

  const addEmployee = async (e) => {
    e.preventDefault()
    await axios.post(API_URL, form)
    setForm({ name: "", department: "", salary: "", age: "" })
    fetchEmployees()
  }

  const searchEmployees = async () => {
    if (search.trim() === "") {
      fetchEmployees()
      return
    }
    const res = await axios.get(`${API_URL}/search?name=${search}`)
    setEmployees(res.data)
  }

  const sortEmployees = async () => {
    const res = await axios.get(`${API_URL}/sort`)
    setEmployees(res.data)
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Employee Management System</h1>
        <p className="subtitle">Manage your workforce efficiently</p>
      </div>

      <div className="main-content">
        {/* Add Employee Form */}
        <div className="card">
          <h2 className="card-title">Add New Employee</h2>
          <form onSubmit={addEmployee} className="employee-form">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input
                  id="department"
                  type="text"
                  placeholder="Enter department"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="salary">Salary</label>
                <input
                  id="salary"
                  type="number"
                  placeholder="Enter salary"
                  value={form.salary}
                  onChange={(e) => setForm({ ...form, salary: e.target.value })}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  placeholder="Enter age"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Add Employee</span>
            </button>
          </form>
        </div>

        {/* Search & Sort Controls */}
        <div className="card">
          <h2 className="card-title">Search & Filter</h2>
          <div className="controls">
            <div className="search-group">
              <input
                type="text"
                placeholder="Search by employee name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              <button onClick={searchEmployees} className="btn btn-secondary">
                Search
              </button>
            </div>
            <button onClick={sortEmployees} className="btn btn-outline">
              Sort by Salary
            </button>
          </div>
        </div>

        {/* Employees Table */}
        <div className="card">
          <div className="table-header">
            <h2 className="card-title">Employee Directory</h2>
            <span className="employee-count">{employees.length} employees</span>
          </div>
          <div className="table-container">
            <table className="employees-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td className="name-cell">{emp.name}</td>
                      <td>
                        <span className="department-badge">{emp.department}</span>
                      </td>
                      <td className="salary-cell">${emp.salary?.toLocaleString()}</td>
                      <td>{emp.age}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
