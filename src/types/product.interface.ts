export interface IProduct {
    id: number,
    attributes: {
        name: string,
        slug: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        price: number
    }
}
