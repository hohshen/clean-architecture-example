import { v4 as uuidv4 } from 'uuid';

export class Logbook {
    public constructor(
        public readonly name: string,
        public readonly userId: string,
        public readonly id: string = uuidv4(),
    ) { }
}

