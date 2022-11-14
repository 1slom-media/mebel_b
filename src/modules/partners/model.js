import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPARTNERS,
    POSTPARTNERS,
    PUTPARTNERS,
    DELETEPARTNERS
} from "./query.js";

const GET = async ({partnerId=0}) => {
    try {
        return await fetchAll(GETPARTNERS, [partnerId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({region_id,titleUz,titleEn,titleRu,phone,partner_name},{image:[image],avatar_image:[avatar_image]}) => {
    try {
      return await fetch(POSTPARTNERS, [region_id,titleUz,titleEn,titleRu,phone,image.filename,avatar_image.filename,partner_name]);
    } catch (error) {
        console.log(error);
    } 
};

const PUT = async ({partnerId},{region_id,titleUz,titleEn,titleRu,phone,partner_name},files) => {
    try {
      return await fetch(PUTPARTNERS, [partnerId,region_id,titleUz,titleEn,titleRu,phone,files?.image[0]?.filename,files?.avatar_image[0]?.filename,partner_name]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({partnerId}) => {
    try {
      return await fetch(DELETEPARTNERS, [partnerId]);
    } catch (error) {
        console.log(error);
    }
};

export default {
    GET,
    POST,
    PUT,
    DELETE
};