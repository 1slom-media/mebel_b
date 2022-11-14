const GETBANNERS = `
    select
        b.*
    from banners as b
    where case when $1 > 0 then b.banner_id = $1 else true end
`;

const POSTBANNERS =`
insert into banners (banner_image)
values ($1) returning *
`;

const PUTBANNERS = `
    with old_banners as (
        select
            banner_id,
            banner_image
        from banners
        where banner_id = $1    
    ) update banners as b 
        set
        banner_image = 
                case 
                    when length($2) > 1 then $2
                    else o.banner_image
                end
    from old_banners as o   
    where b.banner_id = $1
    returning b.*                 
`;


const DELETEBANNERS = `
delete from banners
where banner_id=$1 returning *
`;

export{
    GETBANNERS,
    POSTBANNERS,
    PUTBANNERS,
    DELETEBANNERS
}