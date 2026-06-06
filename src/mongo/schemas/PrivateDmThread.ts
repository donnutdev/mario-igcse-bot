import { Schema, model as createModel } from "mongoose";

export interface IPrivateDmThread {
	userId: string;
	threadId: string;
	guildId: string;
	oneWay: boolean;
}

const schema = new Schema<IPrivateDmThread>({
	userId: { type: String, required: true },
	threadId: { type: String, required: true },
	guildId: { type: String, required: true },
	oneWay: { type: Boolean, default: false },
});

export const PrivateDmThread = createModel<IPrivateDmThread>(
	"PrivateDmThread",
	schema,
);
