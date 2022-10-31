import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCEILING,
    POSTCEILING,
    PUTCEILING,
    DELETECEILING
} from "./query.js";

const GET = async ({ceilingId=0}) => {
    try {
        const ceiling = await fetchAll(GETCEILING, [ceilingId])

        return ceiling?.map(ceil => {
            ceil.cuisine = ceil.cuisine[0] == null ? [] : ceil.cuisine
            return ceil
        })
        
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({ titleUz,titleEn,titleRu}) => {
    try {
      return await fetch(POSTCEILING, [titleUz,titleEn,titleRu]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({ceilingId},{  titleUz='',titleEn='',titleRu=''}) => {
    try {
      return await fetch(PUTCEILING, [ceilingId,  titleUz,titleEn,titleRu]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({ceilingId}) => {
    try {
      return await fetch(DELETECEILING, [ceilingId]);
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