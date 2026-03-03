import Link from "next/link"
import Card from "../_componnent/card"
export default function ArticalsPage(){
    return(
        <div className="">
            <h1>Article Page</h1>
            <Link href='/articels/artic1'>
                <button>Artical 1</button>
                <Card/>
            </Link>
        </div>
    )
}