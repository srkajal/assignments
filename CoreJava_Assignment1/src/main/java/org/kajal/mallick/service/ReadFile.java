package org.kajal.mallick.service;

import org.kajal.mallick.model.Subject;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class ReadFile {
    public List<Subject> readFromFile(String fileName) throws IOException {
        FileInputStream fis = null;
        ObjectInputStream ois = null;
        List<Subject> subjects = new ArrayList<>();
        try {
            fis = new FileInputStream(new File(fileName));

            if (fis.available() != 0) {
                ois = new ObjectInputStream(fis);


                System.out.println("Reading from file....");
                boolean flag = true;
                while (flag) {
                    Subject subject1 = null;
                    try {
                        subject1 = (Subject) ois.readObject();
                    } catch (IOException e) {
                        System.out.println("End of file");
                        flag = false;
                    }
                    if (subject1 != null) {
                        subjects.add(subject1);
                    }

                }
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if (ois != null) {
                ois.close();
            }
            if (fis != null) {
                fis.close();
            }
        }

        return subjects;
    }
}
