const GETCEILING = `
select
c.*,
json_agg(s.*) as cuisine
from ceiling as c
left join cuisine as s on s.ceiling_id = c.id
where case
                            when $1 > 0 then c.id = $1
                            else true
                            end 
group by c.id
`;

const POSTCEILING =`
insert into ceiling (titleUz,titleEn,titleRu)
values ($1,$2,$3) returning *
`;

const PUTCEILING = `
    with old_ceiling as (
        select
            id,
            titleUz,
            titleEn,
            titleRu
        from ceiling
        where id = $1    
    ) update ceiling as c 
        set
        titleUz = 
                case 
                    when length($2) > 1 then $2
                    else o.titleUz
                end,
                titleEn  = 
                case 
                    when length($3) > 1 then $3
                    else o.titleEn
                end,
                titleRu = 
                case 
                    when length($4) > 1 then $4
                    else o.titleRu
                end
    from old_ceiling as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECEILING =`
delete from ceiling
where id=$1 returning *
`;

export {
    GETCEILING,
    POSTCEILING,
    PUTCEILING,
    DELETECEILING
}