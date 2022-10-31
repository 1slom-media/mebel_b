const GETSTRETCH = `
    select
        s.*
    from strech as s
    where case when $1 > 0 then s.id = $1 else true end
`;

const POSTSTRETCH =`
insert into strech (titleUz,titleEn,titleRu,money,skidka ,shades,image)
values ($1,$2,$3,$4,$5,$6,$7) returning *
`;

const PUTSTRETCH = `
    with old_strech as (
        select
            id,
            titleUz,
            titleEn,
            titleRu,
            money,
            skidka,
            shades
        from strech
        where id = $1    
    ) update strech as s 
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
                money = 
                case 
                    when length($5) > 1 then $5
                    else o.money
                end,
                skidka = 
                case 
                    when length($6) > 1 then $6
                    else o.skidka
                end,
                shades = 
                case 
                    when length($7) > 1 then $7
                    else o.shades
                end
    from old_strech as o   
    where s.id = $1
    returning s.*                 
`;

const PUTSTRETCHIMG=`
UPDATE strech
SET image=$2
WHERE id=$1
RETURNING *
`

const DELETESTRETCH =`
delete from strech
where id=$1 returning *
`;

export {
    GETSTRETCH,
    POSTSTRETCH,
    PUTSTRETCH,
    PUTSTRETCHIMG,
    DELETESTRETCH
}