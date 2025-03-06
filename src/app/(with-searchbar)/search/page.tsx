import ClientComponent from "@/component/client-component";

export default async function Page({searchParams}:{
    searchParams: Promise<{q:string}>;}){
    const {q} = await searchParams
    return <div>
        <ClientComponent/>
        search 페이지{q}</div>
}