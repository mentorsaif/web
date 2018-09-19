import { Guid } from 'guid-typescript';

export class Iuser{
    id: Guid;

    constructor(public name: string, public avatarSrc: string){
        this.id = Guid.create();
    }
}