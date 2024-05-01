import { CreateLogbookUseCase, ICreateLogbookResult } from "../application/CreateLogbookUserCase"
import { Request, Response } from 'express'

export class CreateLogbookDto implements ICreateLogbookResult {
    public readonly logbookId: string
    public constructor(id: string) {
        this.logbookId = id
    }
}


export class CreateLogbookController {
    public constructor(
        private readonly _useCase: CreateLogbookUseCase
    ) {

    }

    public async handle(req: Request, res: Response): Promise<void> {
        const userId = 'userIdFake'
        const result = await this._useCase.execute({
            name: req.body.name,
            userId: userId
        })

        const response: CreateLogbookDto = new CreateLogbookDto(result.logbookId)

        res.status(201)
            .json(response)
    }
}