import { CreateLogbookController } from "./logbook/features/create-logbook/CreateLogbookController"
import { CreateLogbookUseCase } from "./logbook/features/create-logbook/CreateLogbookUseCase"
import { GetLogbookController } from "./logbook/features/get-logbook/GetLogBookController"
import { GetLogbookUseCase } from "./logbook/features/get-logbook/GetLogbookUseCase"
import { ApiServer } from "./logbook/shared/ApiServer"
import { InMemoryLogbookRepository } from "./logbook/shared/InMemoryLogbookRepository"

export async function main() {
    const inMemoryRepo = new InMemoryLogbookRepository()

    const useCase = new CreateLogbookUseCase(inMemoryRepo)
    const controller = new CreateLogbookController(useCase)

    const getUseCase = new GetLogbookUseCase(inMemoryRepo)
    const getController = new GetLogbookController(getUseCase)

    await ApiServer.run(5000, controller, getController)
}
main()