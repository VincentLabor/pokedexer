import React, { useState } from 'react';

const Search = () => {

    const [pkname, setPkname] = useState("");

    const onChange = e => {
        setPkname(e.target.value);
    }

    return(
        <form>
            <input type="text" name='pkname' value={pkname} onChange={onChange} placeholder="Search for Pokemon!"/>
        </form>
    )
}

export default Search;