import multer from 'multer';
import util from 'util';
import { maxFileSize } from './constants';

const storage = multer.memoryStorage();

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxFileSize },
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);

export default uploadFileMiddleware;
