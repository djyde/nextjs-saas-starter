import { prisma } from "../prisma"

export class UserDAO {
  async upsert(id: string, options?: {
    firstName?: string,
    lastName?: string,
    imageUrl?: string
  }) {
    return await prisma.user.upsert({
      where: {
        id: id
      },
      update: {
        firstName: options?.firstName,
        lastName: options?.lastName,
        imageUrl: options?.imageUrl
      },
      create: {
        firstName: options?.firstName,
        lastName: options?.lastName,
        imageUrl: options?.imageUrl,
        id: id
      }
    })
  }
}