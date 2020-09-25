package ecrm;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class EmployeeController {

  private final EmployeeService service;

  EmployeeController(EmployeeService service) {
    this.service = service;
  }

  @GetMapping("/employees")
  List<Employee> all() {
    return service.all();
  }

  @PostMapping("/employees")
  Employee add(@RequestBody Employee employee) {
    return service.add(employee);
  }

  // Single item

  @GetMapping("/employees/{id}")
  Employee one(@PathVariable Long id) {
    return service.get(id);
  }

  @PatchMapping("/employees/{id}")
  Employee replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
    return service.update(newEmployee, id);
  }

  @DeleteMapping("/employees/{id}")
  void deleteEmployee(@PathVariable Long id) {
    service.delete(id);
  }
}