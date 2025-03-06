export default async function Page({params}:{
    params: Promise<{id:string}>;}){
    const {id} = await params
    return <div>book 페이지{id}</div>
}