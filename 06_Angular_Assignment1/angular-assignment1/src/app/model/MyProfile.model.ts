export class MyProfile{
    totalExperience: number;
    domain: String;
    skill: String;
    technologies: String[];

    constructor(totalExperience: number, domain: String, skill: String, technologies: String[]){
        this.totalExperience = totalExperience;
        this.domain = domain;
        this.skill = skill;
        this.technologies = technologies;
    }
}