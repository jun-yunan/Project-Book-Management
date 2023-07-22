import { Response, Request } from 'express';
import BookSchema from '../models/BookSchema';
import MemberSchema from '../models/MemberSchema';
import LibrarianSchema from '../models/LibrarianSchema';
import BookBorrowingFormSchema from '../models/BookBorrowingFormSchema';

class BookBorrowingFormController {
    async createBookBorrowingForm(req: Request, res: Response) {
        try {
            const {
                quantity,
                librarian,
                member,
                dueDate,
                bookTitle,
            }: { quantity: number; librarian: string; member: string; dueDate: string; bookTitle: string } =
                req.body;

            const [existsMember, existsLibrarian] = await Promise.all([
                MemberSchema.exists({ email: member }),
                LibrarianSchema.exists({ email: librarian }),
            ]);

            if (!existsMember) {
                return res.status(404).json({ message: 'Not found member!' });
            }
            // if (!existsLibrarian) {
            //     return res.status(404).json({ message: 'Not found librarian!' });
            // }

            const listBookTitle: string[] = bookTitle.split(',');

            const book = await BookSchema.find({ name: { $in: listBookTitle } })
                .select('_id')
                .lean()
                .exec()
                .catch((error) => error && res.status(404).json({ message: 'Not found books', error }));

            if (Array.isArray(book) && book.length === 0) {
                return res.status(404).json({ message: 'Not found books!' });
            }

            res.status(201).json({
                body: req.body,
                listBookTitle,
                book,
                existsMember,
                existsLibrarian,
                user: (req as any).user,
                cookie: req.cookies,
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new BookBorrowingFormController();
