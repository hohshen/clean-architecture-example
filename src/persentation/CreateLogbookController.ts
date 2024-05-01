import { CreateLogbookUseCase } from "../application/CreateLogbookUserCase"
import { Request, Response } from 'express'

export class CreateLogbookController {
    public constructor(
        private readonly _useCase: CreateLogbookUseCase
    ) {

    }

    public async handle(req: Request, res: Response): Promise<void> {
        const userId = 'userIdFake'
        const response = await this._useCase.execute({
            name: req.body.name,
            userId: userId
        })

        res.status(201)
            .json({ id: response.logbookId })
    }
}