export class Project{
    projectId: number;
    projectName: String;
    startDate: Date;
    endDate: Date;

    constructor(projectId: number, projectName: String, startDate: Date, endDate: Date){
        this.projectId = projectId;
        this.projectName = projectName;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}