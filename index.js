const employee={
    name:"Sam",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
      var newEmployee ={...employee};
      newEmployee["streetAddress"]="11 Broadway";
      return newEmployee;
    }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee["streetAddress"]="12 Broadway";
      return employee;
  }
  function deleteFromEmployeeByKey(employee, key){
      var newEmployee={...employee};
      delete newEmployee["name"];
      return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee["name"];
      return employee;
  }