const GETCLIENT = `
    select
        c.*
    from comment as c
    where case when $1 > 0 then c.id = $1 else true end
`;

const POSTCLIENT =`
insert into comment (titleUz,titleEn,titleRu,client_name_surname,client_comment_ru,client_comment_uz,client_comment_en,image,avatar_image)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *
`;

const PUTCLIENT = `
    with old_comment as (
        select
            id,
            titleUz,
            titleEn,
            titleRu,
            client_name_surname,
            client_comment_ru,
            client_comment_uz, 
            client_comment_en,
            image,
            avatar_image
        from comment
        where id = $1    
    ) update comment as c 
        set
        titleUz = 
                case 
                    when length($2) > 1 then $2
                    else o.titleUz
                end,
                titleEn = 
                case 
                    when length($3) > 1 then $3
                    else o.titleEn
                end,
                titleRu = 
                case 
                    when length($4) > 1 then $4 
                    else o.titleRu
                end,
                client_name_surname = 
                case 
                    when length($5) > 1 then $5
                    else o.client_name_surname
                end,
                client_comment_ru = 
                case 
                    when length($6) > 1 then $6
                    else o.client_comment_ru
                end,
                client_comment_uz = 
                case 
                    when length($7) > 1 then $7
                    else o.client_comment_uz
                end,
                client_comment_en = 
                case 
                    when length($8) > 1 then $8
                    else o.client_comment_en 
                end,
                image = 
                case 
                    when length($9) > 1 then $9
                    else o.image
                end,
                avatar_image = 
                case 
                    when length($10) > 1 then $10
                    else o.avatar_image
                end
    from old_comment as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECLIENT =`
delete from comment
where id=$1 returning *
`;

export {
    GETCLIENT,
    POSTCLIENT,
    PUTCLIENT,
    DELETECLIENT
}