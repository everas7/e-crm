package ecrm.validator;

import ecrm.model.*;
import org.springframework.stereotype.Service;

@Service
public class EmployeeValidator {

    public EmployeeValidator() {
    }

    public ValidationResponse validate(Employee employee) {
        String errors = "";
        boolean isValid = true;
        if (employee.getName().length() < 1) {
            isValid = false;
            errors += "Field 'name' is required. ";
        }

        if (employee.getLastName().length() < 1) {
            isValid = false;
            errors += "Field 'lastName' is required. ";
        }

        if (employee.getDepartment().length() < 1) {
            isValid = false;
            errors += "Field 'department' is required. ";
        }

        if (!isPhoneValid(employee.getPhone())) {
            isValid = false;
            errors += "Field 'phone' in incorrect format. ";
        }

        if (!isIdValid(employee.getIdDocument())) {
            isValid = false;
            errors += "Field 'Id Document' in incorrect format.";
        }
        return new ValidationResponse(isValid, errors);
    }

    boolean isPhoneValid(String phone) {
        return phone.matches("[0-9]+") && phone.length() == 10;
    } 

    boolean isIdValid(String idDocument) {
        return idDocument.matches("[0-9]+") && idDocument.length() == 11;
    }
}