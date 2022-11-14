import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCLIENT,
    POSTCLIENT,
    PUTCLIENT,
    DELETECLIENT
} from "./query.js";

const GET = async ({clientId=0}) => {
    try {
        return await fetchAll(GETCLIENT, [clientId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({titleUz,titleEn,titleRu,client_name_surname,client_comment_ru,client_comment_uz,client_comment_en},{image:[image],avatar_image:[avatar_image]}) => {
    try {
      return await fetch(POSTCLIENT, [titleUz,titleEn,titleRu,client_name_surname,client_comment_ru,client_comment_uz,client_comment_en,image.filename,avatar_image.filename]);
    } catch (error) {
        console.log(error);      
    }
};

const PUT = async ({clientId},{titleUz='',titleEn='',titleRu='',client_name_surname='',client_comment_ru='',client_comment_uz='',client_comment_en=''},files) => {
    try {
      return await fetch(PUTCLIENT, [clientId,titleUz,titleEn,titleRu,client_name_surname,client_comment_ru,client_comment_uz,client_comment_en,files?.image[0]?.filename,files.avatar_image[0].filename]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({clientId}) => {
    try {
      return await fetch(DELETECLIENT, [clientId]);
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