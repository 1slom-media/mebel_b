import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETBANNERS,
    POSTBANNERS,
    PUTBANNERS,
    DELETEBANNERS
} from "./query.js";

const GET = async ({bannersId=0}) => {
    try {
        return await fetchAll(GETBANNERS, [bannersId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async (image) => {
    try {
      return await fetch(POSTBANNERS, [image.filename]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({bannersId},image) => {
    try {
      return await fetch(PUTBANNERS, [bannersId,image.filename]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({bannersId}) => {
    try {
      return await fetch(DELETEBANNERS, [bannersId]);
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