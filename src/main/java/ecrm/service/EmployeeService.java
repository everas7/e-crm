package ecrm.service;

import java.util.List;
import java.util.ArrayList;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ecrm.dao.EmployeeRepository;
import ecrm.errorhandling.NotFoundException;
import ecrm.model.Employee;
import ecrm.validator.EmployeeValidator;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.ss.usermodel.DataFormatter;

@Service
public class EmployeeService {

  private final EmployeeRepository repository;
  private final EmployeeValidator validator;

  EmployeeService(EmployeeRepository repository, EmployeeValidator validator) {
    this.repository = repository;
    this.validator = validator;
  }

  public List<Employee> all() {
    return repository.findAll();
  }

  public Employee add(Employee employee) {
    return repository.save(employee);
  }

  public ByteArrayInputStream addBulk(MultipartFile dataFile) throws IOException {
    List<Employee> employees = new ArrayList<Employee>();
    XSSFWorkbook workbook = new XSSFWorkbook(dataFile.getInputStream());
    XSSFSheet worksheet = workbook.getSheetAt(0);
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
      Employee employee = new Employee();

      XSSFRow row = worksheet.getRow(i);
      DataFormatter formatter = new DataFormatter();
      var name = formatter.formatCellValue(row.getCell(0));
      var lastName = formatter.formatCellValue(row.getCell(1));
      var idDocument = formatter.formatCellValue(row.getCell(2));
      var phone = formatter.formatCellValue(row.getCell(3));
      var department = formatter.formatCellValue(row.getCell(4));
      employee.setName(name);
      employee.setLastName(lastName);
      employee.setIdDocument(idDocument.replaceAll("[^\\d.]", ""));
      employee.setPhone(phone.replaceAll("[^\\d.]", ""));
      employee.setDepartment(department);
      var validation = validator.validate(employee);
      if (validation.getIsValid()) {
        employees.add(employee);
        row.createCell(5).setCellValue("Created");
      } else {
        row.createCell(5).setCellValue("Errors: " + validation.getErrors());
      }
    }
    repository.saveAll(employees);
    workbook.write(out);
    return new ByteArrayInputStream(out.toByteArray());
  }

  public Employee get(Long id) {
    return repository.findById(id)
        .orElseThrow(() -> new NotFoundException("Employee with id '" + id + "' was not found"));
  }

  public Employee update(Employee updatedEmployee, Long id) {
    return repository.findById(id).map(employee -> {
      employee.setName(updatedEmployee.getName());
      employee.setLastName(updatedEmployee.getLastName());
      employee.setIdDocument(updatedEmployee.getIdDocument());
      employee.setPhone(updatedEmployee.getPhone());
      employee.setDepartment(updatedEmployee.getDepartment());
      return repository.save(employee);
    }).orElseThrow(() -> new NotFoundException("Employee with id '" + id + "' was not found"));
  }

  public void delete(Long id) {
    repository.deleteById(id);
  }
}