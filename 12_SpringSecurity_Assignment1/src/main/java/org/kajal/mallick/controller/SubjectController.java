package org.kajal.mallick.controller;

import org.kajal.mallick.dao.UserDetailsDao;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.Subject;
import org.kajal.mallick.entities.User;
import org.kajal.mallick.model.*;
import org.kajal.mallick.service.ReadWriteOperation;
import org.kajal.mallick.util.ROLES;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@Controller
public class SubjectController {

    public ReadWriteOperation readWriteOperation;
    @Autowired
    private UserDetailsDao userDetailsDao;

    private List<Subject> subjects;
    List<Book> books;

    private void initData(){
        books = readWriteOperation.searchBooks("");
        subjects = readWriteOperation.searchSubjects("");
    }

    @Autowired
    public SubjectController(ReadWriteOperation readWriteOperation) {
        this.readWriteOperation = readWriteOperation;
    }

    @GetMapping("/")
    @Transactional
    public String SubjectForm(Model model, Principal principal, SecurityContextHolderAwareRequestWrapper request) {
        initData();

        Map<Long, String> subjectMap = subjects.stream().collect(Collectors.toMap(Subject::getSubjectId,Subject::getSubtitle));
        model.addAttribute("subjects", subjects);
        model.addAttribute("books", books);
        model.addAttribute("subjectMap", subjectMap);
        model.addAttribute("message", "You are logged in as " + principal.getName());
        String role = request.isUserInRole(ROLES.ROLE_LIBRARIAN.name())?ROLES.ROLE_LIBRARIAN.name():ROLES.ROLE_PRINCIPAL.name();

        model.addAttribute("role", role);
        return "subject";
    }

    @GetMapping("/search")
    public String searchForm(Principal principal) {
        System.out.println("Name:"+principal.getName());
        return "search";
    }

    @GetMapping("/register")
    public String registerForm() {
        return "register";
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

    @PostMapping("addUser")
    public String register(@ModelAttribute("registerDto") @Valid RegisterDto registerDto, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "register";
        }

        readWriteOperation.registration(registerDto);

        model.addAttribute("message", "You have registered successfully as " + registerDto.getUserName());

        return "login";
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

    @ModelAttribute("registerDto")
    public RegisterDto formRegisterDto(){
        return new RegisterDto();
    }
}
