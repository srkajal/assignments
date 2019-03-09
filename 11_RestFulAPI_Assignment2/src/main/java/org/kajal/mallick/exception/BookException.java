package org.kajal.mallick.exception;

public class BookException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    private String errorMessage;

    public String getErrorMessage() {
        return errorMessage;
    }
    public BookException(String errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
    public BookException() {
        super();
    }
}
