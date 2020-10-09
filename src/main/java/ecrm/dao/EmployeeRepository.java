package ecrm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import ecrm.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}