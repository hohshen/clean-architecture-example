import { v4 as uuidv4 } from 'uuid';

interface ICreateLogbookDto {
  name: string
  userId: string
}

interface ICreateLogbookResult {
  logbookId: string
}

class Logbook {
  public constructor(
    public readonly name: string,
    public readonly userId: string,
    public readonly id: string = uuidv4(),
  ) { }
}

interface ILogbookRepository {
  save(logbook: Logbook): Promise<boolean>
}

export class CreateLogbookUseCase {
  public constructor(
    private readonly _logbookRepo: ILogbookRepository
  ) { }

  public async execute(input: ICreateLogbookDto): Promise<ICreateLogbookResult> {
    const logbook = new Logbook(input.name, input.userId)
    const result = await this._logbookRepo.save(logbook)

    if (!result) {
      throw new Error("Could not save logbook")
    }

    return {
      logbookId: logbook.id
    }
  }
}