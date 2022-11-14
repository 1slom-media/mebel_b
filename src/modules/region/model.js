import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETREGION,
    POSTREGION,
    PUTREGION,
    DELETEREGION
} from "./query.js";

const GET = async ({regionId=0}) => {
    try {
        const region=await fetchAll(GETREGION, [regionId])

        return region?.map(reg => {
            reg.partners = reg.partners[0] == null ? [] : reg.partners
            return reg
        })
        
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({region_name_uz,region_name_ru,region_name_en}) => {
    try {
      return await fetch(POSTREGION, [region_name_uz,region_name_ru,region_name_en]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({regionId},{  region_name_uz='',region_name_ru='',region_name_en=''}) => {
    try {
      return await fetch(PUTREGION, [regionId,  region_name_uz,region_name_ru,region_name_en]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({regionId}) => {
    try {
      return await fetch(DELETEREGION, [regionId]);
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