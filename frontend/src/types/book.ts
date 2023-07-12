interface IBook {
    _id: string;
    name: string;
    image: string;
    price: number;
    summary: string;
    publishingDate: string;

    authorId: IAuthor;
    publishingCompanyId: IPublishingCompany;
    bookCategoryId: IBookCategory;
    languageId: ILanguage;
}

interface IAuthor {
    name: string;
    _id: string;
}

interface IPublishingCompany {
    name: string;
    _id: string;
}

interface IBookCategory {
    name: string;
    _id: string;
}

interface ILanguage {
    name: string;
    _id: string;
}

export interface IGetBooks {
    books: IBook[];
    message: string;
}
