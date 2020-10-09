package ecrm.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee {

  private @Id @GeneratedValue Long id;
  private String name;
  private String lastName;
  private String idDocument;
  private String phone;
  private String department;

  public Employee() {}

  public Employee(String name, String lastName, String idDocument, String phone, String department) {
    this.name = name;
    this.lastName = lastName;
    this.idDocument = idDocument;
    this.phone = phone;
    this.department = department;
  }

  public Long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public String getLastName() {
    return this.lastName;
  }

  public String getIdDocument() {
    return this.idDocument;
  }

  public String getPhone() {
    return this.phone;
  }

  public String getDepartment() {
    return this.department;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setIdDocument(String idDocument) {
    this.idDocument = idDocument;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.name, this.lastName, this.idDocument, this.phone, this.department);
  }
}