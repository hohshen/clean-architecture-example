import { CreateLogbookUseCase } from "./application/CreateLogbookUseCase"
import { GetLogbookUseCase } from "./application/GetLogbookUseCase"
import { InMemoryLogbookRepository } from "./infrastructure/InMemoryLogbookRepository"
import { ApiServer } from "./persentation/ApiServer"
import { CreateLogbookController } from "./persentation/CreateLogbookController"
import { GetLogbookController } from "./persentation/GetLogBookController"

export async function main() {
    const inMemoryRepo = new InMemoryLogbookRepository()

    const useCase = new CreateLogbookUseCase(inMemoryRepo)
    const controller = new CreateLogbookController(useCase)

    const getUseCase = new GetLogbookUseCase(inMemoryRepo)
    const getController = new GetLogbookController(getUseCase)

    await ApiServer.run(5000, controller, getController)
}
main()