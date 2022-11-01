const GETCUISINE = `
    select
        c.*
    from cuisine as c
    where case when $1 > 0 then c.id = $1 else true end
`;

const POSTCUISINE =`
insert into cuisine (ceiling_id,titleCuisineUz,titleCuisineEn,titleCuisineRu,money,descriptionEn,descriptionUz,descriptionRu,image)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *
`;

const PUTCUISINE = `
    with old_cuisine as (
        select
            id,
            ceiling_id,
            titleCuisineUz,
            titleCuisineEn,
            titleCuisineRu,
            money,
            descriptionEn,
            descriptionUz,
            descriptionRu,
            image
        from cuisine
        where id = $1    
    ) update cuisine as c 
        set
        ceiling_id = 
                case 
                    when $2 > 0 then $2
                    else o.ceiling_id
                end,
        titleCuisineUz = 
                case 
                    when length($3) > 1 then $3
                    else o.titleCuisineUz
                end,
                titleCuisineEn = 
                case 
                    when length($4) > 1 then $4
                    else o.titleCuisineEn
                end,
                titleCuisineRu = 
                case 
                    when length($5) > 1 then $5
                    else o.titleCuisineRu
                end,
                money = 
                case 
                    when length($6) > 1 then $6
                    else o.money
                end,
                descriptionEn = 
                case 
                    when length($7) > 1 then $7
                    else o.descriptionEn
                end,
                descriptionUz = 
                case 
                    when length($8) > 1 then $8
                    else o.descriptionUz
                end,
                descriptionRu = 
                case 
                    when length($9) > 1 then $9
                    else o.descriptionRu
                end,
                image = 
                case 
                    when length($10) > 1 then $10
                    else o.image
                end
    from old_cuisine as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECUISINE =`
delete from cuisine
where id=$1 returning *
`;

export {
    GETCUISINE,
    POSTCUISINE,
    PUTCUISINE,
    DELETECUISINE
}