import Link from "next/link";
export default async function Show(props) {
    console.log(props)
    const params = await props.params
    const title = params.title


    return (
        <div className=''>
            <h1>Aritcel test</h1>
            <h1>{title}</h1>
            <Link href='/articels'>
                <button>Artical page</button>
            </Link>
        </div>
    );
}
