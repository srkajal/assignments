package org.kajal.mallick.controller;

import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.Subject;
import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.SearchBook;
import org.kajal.mallick.model.SearchSubject;
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
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
public class SubjectController {

    public ReadWriteOperation readWriteOperation;

    private List<Subject> subjects;
    List<Book> books;
    private List<Integer> subjectDurationList;

    private void initData(){
        System.out.println("Inside init");
        books = readWriteOperation.findAllBooks();
        subjects = readWriteOperation.findAllSubjects();
    }

    private void initSearchData(){
        System.out.println("Inside Search init");
        subjectDurationList = subjects.stream().map(Subject::getDurationInHours).collect(Collectors.toList());
    }

    @Autowired
    public SubjectController(ReadWriteOperation readWriteOperation) {
        this.readWriteOperation = readWriteOperation;
    }

    @GetMapping("/")
    public String SubjectForm(Model model) {
        initData();

        Map<Long, String> subjectMap = subjects.stream().collect(Collectors.toMap(Subject::getSubjectId,Subject::getSubtitle));
        model.addAttribute("subjects", subjects);
        model.addAttribute("books", books);
        model.addAttribute("subjectMap", subjectMap);

        return "subject";
    }

    @GetMapping("/search")
    public String searchForm(Model model) {
        initSearchData();
        model.addAttribute("subjectDurationList", subjectDurationList);
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
            model.addAttribute("subjects", subjects);
            model.addAttribute("books", books);
            return "subject";
        }

        readWriteOperation.addSubject(subject);

        return "redirect:/";
    }

    @PostMapping("addBook")
    public String saveBook(@ModelAttribute("bookDto") @Valid BookDto bookDto, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("subjects", subjects);
            model.addAttribute("books", books);
            return "subject";
        }

        readWriteOperation.addBook(new Book(bookDto.getBookId(), bookDto.getTitle(), bookDto.getPrice(), bookDto.getVolume(), bookDto.getPublishDate()),bookDto.getSubjectId());

        return "redirect:/";
    }

    @PostMapping("searchSubjectByTitle")
    public String searchSubject(@ModelAttribute("searchSubject") @Valid SearchSubject searchSubject, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "search";
        }

        model.addAttribute("subjectDurationList", subjectDurationList);
        model.addAttribute("subjects", readWriteOperation.searchSubjects(searchSubject.getSubtitle()));

        return "search";
    }

    @PostMapping("searchSubjectByDuration")
    public String searchBookByDuration(@ModelAttribute("searchSubject") @Valid SearchSubject searchSubject, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "search";
        }

        model.addAttribute("subjectDurationList", subjectDurationList);
        model.addAttribute("subjects", readWriteOperation.findSubjectsByDuration(searchSubject.getDurationInHours()));

        return "search";
    }

    @PostMapping("searchBookByTitle")
    public String searchBookByTitle(@ModelAttribute("searchBook") @Valid SearchBook searchBook, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "search";
        }

        model.addAttribute("subjectDurationList", subjectDurationList);
        model.addAttribute("books", readWriteOperation.searchBooks(searchBook.getTitle()));

        return "search";
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
