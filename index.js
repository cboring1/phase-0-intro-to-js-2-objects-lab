const employee = {
    name: "value1",
    streetAddress: "value2"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
}
function deleteFromEmployeeByKey(employee, name) {
    const employeeNew = {...employee};
    delete employeeNew.name
    return employeeNew;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}



