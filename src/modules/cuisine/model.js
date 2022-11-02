import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCUISINE,
    POSTCUISINE,
    PUTCUISINE,
    DELETECUISINE
} from "./query.js";

const GET = async ({cuisineId=0}) => {
    try {
        return await fetchAll(GETCUISINE, [cuisineId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({ceiling_id,titleCuisineUz,titleCuisineEn,titleCuisineRu,money,descriptionEn,descriptionUz,descriptionRu},image) => {
    try {
      return await fetch(POSTCUISINE, [ceiling_id,titleCuisineUz,titleCuisineEn,titleCuisineRu,money,descriptionEn,descriptionUz,descriptionRu,image.filename]);
    } catch (error) {
        console.log(error);
    } 
};

const PUT = async ({cuisineId},{ ceiling_id,titleCuisineUz,titleCuisineEn,titleCuisineRu,money,descriptionEn,descriptionUz,descriptionRu},image='') => {
    try {
      return await fetch(PUTCUISINE, [cuisineId,ceiling_id,titleCuisineUz,titleCuisineEn,titleCuisineRu,money,descriptionEn,descriptionUz,descriptionRu,image.filename]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({cuisineId}) => {
    try {
      return await fetch(DELETECUISINE, [cuisineId]);
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