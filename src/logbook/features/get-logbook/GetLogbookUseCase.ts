import { Logbook } from "../../domain/Logbook";
import { IUseCase } from "../../../shared/IUseCase";
import { ILogbookRepository } from "../../shared/ILogbookRepository";

interface IGetLogbookDto {
    id: string
}

interface IGetLogbookResult {

}

export class LogbookDto {
    public constructor(
        public readonly id: string, public name: string
    ) { }

    public static from(logbook: Logbook): LogbookDto {
        return new LogbookDto(logbook.id, logbook.name)
    }
}


export class GetLogbookUseCase implements IUseCase<IGetLogbookDto, LogbookDto> {

    public constructor(private _logbookRepository: ILogbookRepository) { }
    public async execute(input: IGetLogbookDto): Promise<LogbookDto> {
        const logbook = await this._logbookRepository.find(input.id)

        if (!logbook) {
            throw new Error("not found")
        }

        return LogbookDto.from(logbook)
    }
}