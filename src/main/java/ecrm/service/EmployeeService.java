package ecrm;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
class EmployeeService {

  private final EmployeeRepository repository;

  EmployeeService(EmployeeRepository repository) {
    this.repository = repository;
  }

  List<Employee> all() {
    return repository.findAll();
  }

  Employee add(Employee employee) {
    return repository.save(employee);
  }

  Employee get(Long id) {
    return repository.findById(id)
      .orElseThrow(() -> new NotFoundException("Employee with id '" + id + "' was not found"));
  }

  Employee update(Employee updatedEmployee, Long id) {
    return repository.findById(id)
      .map(employee -> {
        employee.setName(updatedEmployee.getName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setIdDocument(updatedEmployee.getIdDocument());
        employee.setPhone(updatedEmployee.getPhone());
        employee.setDepartment(updatedEmployee.getDepartment());
        return repository.save(employee);
      })
      .orElseThrow(() -> new NotFoundException("Employee with id '" + id + "' was not found"));
  }

  void delete(Long id) {
    repository.deleteById(id);
  }
}