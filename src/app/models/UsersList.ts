import { Users } from 'src/app/models/users';

export class UserList {
    constructor(
        public AccountId: number,
        public usersList:[
            {

                id:number,
                firstName:string,
                lastName:string,
                phoneNumber:string,
                email:string,
                role:string
            }
        ]

        ) { }
}


