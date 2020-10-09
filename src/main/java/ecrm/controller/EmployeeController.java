package ecrm.controller;

import java.util.List;
import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import ecrm.model.Employee;
import ecrm.service.EmployeeService;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.core.io.InputStreamResource;


@RestController
@RequestMapping("/api")
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

  @PostMapping("/employees/import")
  ResponseEntity<InputStreamResource> addBulk(@RequestParam("file") MultipartFile dataFile) throws IOException  {
    ByteArrayInputStream in = service.addBulk(dataFile);
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Disposition", "attachment; filename=results.xlsx");
    return ResponseEntity
        .ok()
        .headers(headers)
        .body(new InputStreamResource(in));
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
  void delete(@PathVariable Long id) {
    service.delete(id);
  }
}