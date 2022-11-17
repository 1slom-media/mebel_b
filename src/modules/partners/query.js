const GETPARTNERS = `
    select
        p.*
    from partners as p
    where case when $1 > 0 then p.id = $1 else true end
    order by p.id
`;

const POSTPARTNERS =`
insert into partners (region_id,titleUz,titleEn,titleRu,phone,image,avatar_image,partner_name)
values ($1,$2,$3,$4,$5,$6,$7,$8) returning *
`;

const PUTPARTNERS = `
    with old_partners as (
        select
            id,
            region_id,
            titleUz,
            titleEn,
            titleRu,
            phone,
            image,
            avatar_image,
            partner_name
        from partners
        where id = $1    
    ) update partners as p 
        set
        region_id = 
                case 
                    when $2 > 0 then $2
                    else o.region_id
                end,
        titleUz = 
                case 
                    when length($3) > 1 then $3
                    else o.titleUz
                end,
                titleEn = 
                case 
                    when length($4) > 1 then $4
                    else o.titleEn
                end,
                titleRu = 
                case 
                    when length($5) > 1 then $5
                    else o.titleRu
                end,
                phone = 
                case 
                    when length($6) > 1 then $6
                    else o.phone
                end,
                image = 
                case 
                    when length($7) > 1 then $7
                    else o.image
                end,
                avatar_image = 
                case 
                    when length($8) > 1 then $8
                    else o.avatar_image
                end,
                partner_name = 
                case 
                    when length($9) > 1 then $9
                    else o.partner_name
                end
    from old_partners as o   
    where p.id = $1
    returning p.*                 
`;

const DELETEPARTNERS =`
delete from partners
where id=$1 returning *
`;

export {
    GETPARTNERS,
    POSTPARTNERS,
    PUTPARTNERS,
    DELETEPARTNERS
}