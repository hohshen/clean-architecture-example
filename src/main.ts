import { CreateLogbookUseCase } from "./application/CreateLogbookUserCase"
import { InMemoryLogbookRepository } from "./infrastructure/InMemoryLogbookRepository"
import { ApiServer } from "./persentation/ApiServer"
import { CreateLogbookController } from "./persentation/CreateLogbookController"

export async function main() {
    const inMemoryRepo = new InMemoryLogbookRepository()
    const useCase = new CreateLogbookUseCase(inMemoryRepo)
    const controller = new CreateLogbookController(useCase)

    await ApiServer.run(5000, controller)
}
main()