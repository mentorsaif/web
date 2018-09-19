import { Iuser } from '../iuser/iuser.model';
import { Thread } from '../ithread/ithread.model';
import { Guid } from 'guid-typescript';

export class Message {
    id: Guid;
    sentAt: Date;
    isRead: boolean;
    author: Iuser;
    text: string;
    thread: Thread;

    constructor(obj?: any){
        this.id = obj && obj.id || Guid.create();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
}