import { appSchema } from '@nozbe/watermelondb';

import { carSchema } from './car.schema';
import { userSchema } from './user.schema';

const schemas = appSchema({
  version: 2,
  tables: [userSchema, carSchema],
});

export { schemas };
