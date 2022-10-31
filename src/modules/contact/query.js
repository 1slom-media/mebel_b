const GETCONTACT = `
    select
        c.*
    from contact as c
    where case when $1 > 0 then c.id = $1 else true end
`;

const POSTCONTACT =`
insert into contact (telephone)
values ($1) returning *
`;

const PUTCONTACT = `
    with old_contact as (
        select
            id,
            telephone
        from contact
        where id = $1    
    ) update contact as c 
        set
            telephone = 
                case 
                    when length($2) > 1 then $2
                    else o.telephone
                end
    from old_contact as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECONTACT =`
delete from contact
where id=$1 returning *
`;

export {
    GETCONTACT,
    POSTCONTACT,
    PUTCONTACT,
    DELETECONTACT
}