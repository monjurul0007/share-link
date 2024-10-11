import { Collection, Db, WithId } from 'mongodb';
import { IUser } from '@/models/db/Users';

export default class UserRepository {
    private _collectionName = 'Users';
    private _db: Db | null = null;
    private _collection: Collection<IUser> | null = null;

    constructor(db: Db) {
        this._db = db;
        this._collection = this._db.collection<IUser>(this._collectionName);
    }

    async create(user: IUser) {
        let dbUserInstance = null;

        if (this._collection) {
            dbUserInstance = await this._collection.insertOne(user);
        } else {
            throw new Error('User can not be created');
        }

        return dbUserInstance;
    }

    async fetchById(id: string) {
        let user: WithId<IUser> | null = null;

        if (this._collection) {
            user = await this._collection.findOne({ id });
        } else {
            throw new Error('Can not fetch user by id.');
        }

        return user;
    }

    async updateById(id: string, data: { firstName?: string; lastName?: string; email?: string }) {
        let user: WithId<IUser> | null = null;

        if (this._collection) {
            await this._collection.updateOne({ id }, { $set: { ...data } }, { upsert: true });
        } else {
            throw new Error('Can not fetch user by id.');
        }

        return user;
    }
}
