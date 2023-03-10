import { PrismaClient } from '@prisma/client'

declare global {
   export namespace globalThis {
     export var prismadb: PrismaClient
  }
}
