import { Message } from '../imessage/imessage.model';
import { Guid } from 'guid-typescript';

export class Thread {
    id: Guid;
    lastMessage: Message;
    name: string;
    avatarSrc: string;

    constructor(id?: string,
                name?: string,
                avatarSrc?: string){
        this.id = Guid.parse(id) || Guid.create();
        this.name = name;
        this.avatarSrc = avatarSrc;

    }
}