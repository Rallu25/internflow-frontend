import { Team } from "src/app/dtos/team";

export class TeamMock {
  public static get mockTeams(): Team[] {
    return [
      {
        teamId: 1,
        teamName: 'Internflow',
        teamLeader: {
          studentId: 101,
          firstName: 'Maria',
          lastName: 'Popescu',
          email: 'maria.popescu@yahoo.com',
          team: 'Internflow',
          attendance: '',
          grade: 10,
        },
        students: [
          {
            studentId: 102,
            firstName: 'Andrei',
            lastName: 'Lazar',
            email: 'radu.lazar@yahoo.com',
            team: 'Internflow',
            attendance: '',
            grade: 8,
          },
          {
            studentId: 103,
            firstName: 'Roxana',
            lastName: 'Florea',
            email: 'roxana.florea@yahoo.com',
            team: 'Internflow',
            attendance: '',
            grade: 10,
          },
        ],
      },
      {
        teamId: 2,
        teamName: 'GG',
        teamLeader: {
          studentId: 10,
          firstName: 'Alexandra',
          lastName: 'Serban',
          email: 'alexandra.serban@yahoo.com',
          team: 'GG',
          attendance: '',
          grade: 8,
        },
        students: [
          {
            studentId: 11,
            firstName: 'Mihaela',
            lastName: 'Cristea',
            email: 'mihaela.ctristea@yahoo.com',
            team: 'GG',
            attendance: '',
            grade: 10,
          },
          {
            studentId: 12,
            firstName: 'Bogdan',
            lastName: 'Vlad',
            email: 'bogdan.vlad@yahoo.com',
            team: 'GG',
            attendance: '',
            grade: 9,
          },
        ],
      },
    ];
  }
}
