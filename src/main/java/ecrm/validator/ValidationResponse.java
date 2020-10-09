package ecrm.validator;


public class ValidationResponse {
    private boolean isValid;
    private String errors;

    ValidationResponse() {}

    ValidationResponse(boolean isValid, String errors) { 
        this.isValid = isValid;
        this.errors = errors;
    }

    public boolean getIsValid() {
        return this.isValid;
    }

    public String getErrors() {
        return this.errors;
    }
}