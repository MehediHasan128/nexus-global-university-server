/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUser } from './Users.interface';
import { userRole, userStatus } from './Users.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const createUserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: userRole,
    },
    status: {
      type: String,
      enum: userStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

createUserSchema.pre('save', async function(next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
  next();
})

export const Users = model<TUser>('User', createUserSchema);
