import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETSTRETCH,
    POSTSTRETCH,
    PUTSTRETCH,
    DELETESTRETCH
} from "./query.js";

const GET = async ({stretchId=0}) => {
    try {
        return await fetchAll(GETSTRETCH, [stretchId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({titleUz,titleEn,titleRu,money,skidka ,shades},image) => {
    try {
      return await fetch(POSTSTRETCH, [titleUz,titleEn,titleRu,money,skidka ,shades,image.filename]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({stretchId},{ titleUz='',titleEn='',titleRu='',money='',skidka='',shades=''},image='') => {
    try {
      return await fetch(PUTSTRETCH, [stretchId, titleUz,titleEn,titleRu,money,skidka ,shades,image.filename]);
    } catch (error) {
        console.log(error);
    }
}; 


const DELETE = async ({stretchId}) => {
    try {
      return await fetch(DELETESTRETCH, [stretchId]);
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