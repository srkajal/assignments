package org.kajal.mallick.controller;

import org.kajal.mallick.model.*;
import org.kajal.mallick.service.ReadWriteOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Controller
public class FileController {

    @Autowired
    public ReadWriteOperation readWriteOperation;

    @GetMapping("/")
    public String SubjectForm(Locale locale, Model model) {
        model.addAttribute("subjects", readWriteOperation.searchSubjects(""));
        model.addAttribute("books", readWriteOperation.searchBooks(""));

        return "subject";
    }

    @GetMapping("/search")
    public String searchForm(Locale locale, Model model) {
        return "search";
    }

    @GetMapping("/deleteBook/{bookId}")
    public String deleteBook(@PathVariable("bookId") String bookId) {

        System.out.println("BookId:"+bookId);
        readWriteOperation.deleteBook(bookId);
        return "redirect:/";
    }

    @GetMapping("/deleteSubject/{subjectId}")
    public String deleteSubject(@PathVariable("subjectId") String subjectId) {

        System.out.println("SubjectId:"+subjectId);
        readWriteOperation.deleteSubject(subjectId);
        return "redirect:/";
    }

    @PostMapping("addSubject")
    public String saveSubject(@ModelAttribute("subject") @Valid Subject subject, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("subjects", readWriteOperation.searchSubjects(""));
            model.addAttribute("books", readWriteOperation.searchBooks(""));
            return "subject";
        }

        readWriteOperation.addSubject(subject);

        return "redirect:/";
    }

    @PostMapping("addBook")
    public String saveBook(@ModelAttribute("bookDto") @Valid BookDto bookDto, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("subjects", readWriteOperation.searchSubjects(""));
            model.addAttribute("books", readWriteOperation.searchBooks(""));
            return "subject";
        }

        readWriteOperation.addBook(new Book(bookDto.getBookId(), bookDto.getTitle(), bookDto.getPrice(), bookDto.getVolume(), bookDto.getPublishDate()),bookDto.getSubjectId());

        return "redirect:/";
    }

    @PostMapping("searchSubject")
    public String searchSubject(@ModelAttribute("searchSubject") @Valid SearchSubject searchSubject, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("searchSubject", searchSubject);
            return "search";
        }

        model.addAttribute("subjects", readWriteOperation.searchSubjects(searchSubject.getSubtitle()));

        return "search";
    }

    @PostMapping("searchBook")
    public String searchBook(@ModelAttribute("searchBook") @Valid SearchBook searchBook, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("searchBook", searchBook);
            return "search";
        }

        model.addAttribute("books", readWriteOperation.searchBooks(searchBook.getTitle()));

        return "search";
    }

    @ModelAttribute("subjectMap")
    public Map<Long,String> getSubjectList(){
        Map<Long, String> subjectMap = new HashMap<>();
        List<Subject> subjects = readWriteOperation.searchSubjects("");
        subjects.forEach(sub->subjectMap.put(sub.getSubjectId(), sub.getSubtitle()));

        return subjectMap;
    }

    @ModelAttribute("subject")
    public Subject formBackingSubject() {
        return new Subject();
    }

    @ModelAttribute("searchSubject")
    public SearchSubject formBackingSearchSubject() {
        return new SearchSubject();
    }

    @ModelAttribute("bookDto")
    public BookDto formBackingBook() {
        return new BookDto();
    }


    @ModelAttribute("searchBook")
    public SearchBook formBackingSearcgBook() {
        return new SearchBook();
    }
}
