'use client'
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Searchbar(){
    const [search,setSearch]=useState('');

    const onSearch=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    }
    const router = useRouter()
    const onSubmit= ()=>{
        router.push(`/search?q=${search}`)
    }
    return <div>
        <input type="text" value={search} onChange={onSearch }/>
        <button onClick={onSubmit}>검색</button>
    </div>
}
