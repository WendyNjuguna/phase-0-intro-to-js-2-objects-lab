const employee = {
    name:'Sam',
    streetAddress:34
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeRecords = {...employee};
    employeeRecords[key ] = value;
    return employeeRecords;
    }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){ 
    const newEmployee = {...employee};
        newEmployee[key] = undefined;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    
    return employee;
}
