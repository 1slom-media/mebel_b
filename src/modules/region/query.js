const GETREGION= `
select
r.*,
json_agg(p.*) as partners
from region as r
left join partners as p on p.region_id = r.id
where case
                            when $1 > 0 then r.id = $1
                            else true
                            end 
group by r.id
`;



const POSTREGION =`
insert into region (region_name_uz,region_name_ru,region_name_en)
values ($1,$2,$3) returning *
`;

const PUTREGION = `
    with old_region as (
        select
            id,
            region_name_uz,
            region_name_ru,
            region_name_en
        from region
        where id = $1    
    ) update region as r 
        set
        region_name_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.region_name_uz
                end,
                region_name_ru  = 
                case 
                    when length($3) > 1 then $3
                    else o.region_name_ru
                end,
                region_name_en = 
                case 
                    when length($4) > 1 then $4
                    else o.region_name_en
                end
    from old_region as o   
    where r.id = $1
    returning r.*                 
`;

const DELETEREGION =`
delete from region
where id=$1 returning *
`;

export {
    GETREGION,
    POSTREGION,
    PUTREGION,
    DELETEREGION
}