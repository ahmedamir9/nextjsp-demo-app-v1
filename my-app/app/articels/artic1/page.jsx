import Link from "next/link"
export default function artic1(){
    return(
        <div className="">
            <h1>Artical 1</h1>
            <Link href='/articels'>
                <button>Artical page</button>
            </Link>
        </div>
    )
}