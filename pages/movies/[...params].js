import {useRouter} from 'next/router'

export default function Detail({params}) {
    const router = useRouter()
    const [title, id] = params || []
    return <h1>{title || 'Loading...'}</h1>
}

//export function getServerSideProps({params: {params}}) {
//    return {
//        props: {
//            params,
//        },
//    }
//}

export function getServerSideProps({params: {params}}) {
    return {
        props: {
            params,
        },
    }
}
