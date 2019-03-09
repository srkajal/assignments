package org.kajal.mallick.fao;

import org.kajal.mallick.model.Subject;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class WriteFile {

    public void writeToFile(String fileName, List<Subject> subjectList) throws IOException {
        FileOutputStream fos = null;
        ObjectOutputStream oos = null;
        try {
            fos = new FileOutputStream(new File(fileName));
            oos = new ObjectOutputStream(fos);

            System.out.println("Writing into file....");

            for (Subject subject : subjectList) {
                oos.writeObject(subject);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (oos != null) {
                oos.close();
            }
            if (fos != null) {
                fos.close();
            }
        }

    }
}
