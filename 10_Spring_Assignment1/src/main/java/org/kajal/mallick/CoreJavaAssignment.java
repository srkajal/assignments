package org.kajal.mallick;

import org.kajal.mallick.configuration.ApplicationConfiguration;
import org.kajal.mallick.service.ReadWriteOperation;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.IOException;

public class CoreJavaAssignment {
    public static void main(String[] args) throws IOException {

        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
        ctx.register(ApplicationConfiguration.class);
        ctx.refresh();

        ReadWriteOperation readWriteOperation = ctx.getBean(ReadWriteOperation.class);

        readWriteOperation.performOperations();
    }
}
