import { Schema, model, Types, Document } from 'mongoose';
import { 
    ALGORITHM_AES_256_GCM,
    ENCODING_SCHEME_UTF8,
    ENCODING_SCHEME_BASE64
} from '../variables';

export interface ISecretBlindIndexData extends Document {
    _id: Types.ObjectId;
    workspace: Types.ObjectId;
    encryptedSaltCiphertext: string;
    saltIV: string;
    saltTag: string;
    algorithm: 'aes-256-gcm';
    keySize: 256;
    keyEncoding: 'base64' | 'utf8'
}

const secretBlindIndexDataSchema = new Schema<ISecretBlindIndexData>(
    {
        workspace: {
            type: Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true
        },
        encryptedSaltCiphertext: {
            type: String,
            required: true
        },
        saltIV: {
            type: String,
            required: true
        },
        saltTag: {
            type: String,
            required: true
        },
        algorithm: {
            type: String,
            enum: [ALGORITHM_AES_256_GCM],
            required: true
        },
        keySize: {
            type: Number,
            enum: [256],
            required: true
        },
        keyEncoding: {
            type: String,
            enum: [
                ENCODING_SCHEME_UTF8,
                ENCODING_SCHEME_BASE64
            ],
            required: true
        }

    }
);

const SecretBlindIndexData = model<ISecretBlindIndexData>('SecretBlindIndexData', secretBlindIndexDataSchema);

export default SecretBlindIndexData;