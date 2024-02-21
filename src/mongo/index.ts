import mongo from 'mongoose';

await mongo.connect(process.env.MONGO_LINK);

export { Punishment, type IPunishment } from './schemas/Punishment';
export { Keyword, type IKeyword } from './schemas/Keyword';
export { ReactionRole, type IReactionRole } from './schemas/ReactionRole';
export {
    PrivateDmThread,
    type IPrivateDmThread,
} from './schemas/PrivateDmThread';
export {
    GuildPreferences,
    type IGuildPreferences,
} from './schemas/GuildPreferences';
export { Reputation, type IReputation } from './schemas/Reputation';