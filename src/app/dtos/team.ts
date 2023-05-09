export class Team{
    teamId: number;

    constructor(team: Team){
        this.teamId = team?.teamId;
    }
}